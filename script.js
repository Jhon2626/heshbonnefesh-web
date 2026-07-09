/* ══════════════════════════════════════════════════════════════
   Heshbon Nefesh — landing (vanilla, zéro dépendance)
   ══════════════════════════════════════════════════════════════ */
"use strict";

/* ── Configuration ─────────────────────────────────────────── */
// Vidéo de présentation, une version par langue (auto-hébergée dans assets/).
const VIDEO_SOURCES = {
  fr: "assets/presentation-fr.mp4",
  en: "assets/presentation-en.mp4",
  he: "assets/presentation-he.mp4",
};
// Edge Function Supabase qui reçoit le formulaire (validation + anti-spam côté serveur).
const CONTACT_ENDPOINT = "https://tqrjwvgrdomfvgtgqgrd.supabase.co/functions/v1/contact-form";

const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");

/* ── Poussière dorée dans le héros ─────────────────────────── */
(function dust() {
  if (REDUCED) return;
  const canvas = document.getElementById("dust");
  const hero = document.querySelector(".hero");
  if (!canvas || !hero) return;
  const ctx = canvas.getContext("2d");
  let parts = [];
  let running = true;

  function size() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = hero.clientWidth * dpr;
    canvas.height = hero.clientHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawn() {
    const w = hero.clientWidth, h = hero.clientHeight;
    parts = Array.from({ length: Math.max(14, Math.round(w / 70)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2.2 + 0.8,
      vy: -(Math.random() * 0.18 + 0.05),
      vx: (Math.random() - 0.5) * 0.12,
      a: Math.random() * 0.4 + 0.12,
      wobble: Math.random() * Math.PI * 2
    }));
  }

  function tick(t) {
    if (!running) return;
    const w = hero.clientWidth, h = hero.clientHeight;
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.y += p.vy;
      p.x += p.vx + Math.sin(t / 1500 + p.wobble) * 0.1;
      if (p.y < -8) { p.y = h + 8; p.x = Math.random() * w; }
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
      g.addColorStop(0, `rgba(201, 168, 76, ${p.a})`);
      g.addColorStop(1, "rgba(201, 168, 76, 0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }

  size();
  spawn();
  requestAnimationFrame(tick);
  addEventListener("resize", () => { size(); spawn(); }, { passive: true });
  // économiser le GPU quand le héros est hors écran
  new IntersectionObserver(([e]) => {
    const was = running;
    running = e.isIntersecting;
    if (running && !was) requestAnimationFrame(tick);
  }).observe(hero);
})();

/* ── Parallaxe du héros ────────────────────────────────────── */
(function parallax() {
  if (REDUCED) return;
  const bg = document.getElementById("heroBg");
  if (!bg) return;
  let ticking = false;
  addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = Math.min(scrollY, innerHeight);
      bg.style.transform = `translateY(${y * 0.24}px) scale(1.04)`;
      ticking = false;
    });
  }, { passive: true });
})();

/* ── Navigation : fond au scroll ───────────────────────────── */
(function navState() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  const apply = () => nav.classList.toggle("scrolled", scrollY > 40);
  addEventListener("scroll", apply, { passive: true });
  apply();
})();

/* ── Révélations au scroll ─────────────────────────────────── */
(function reveals() {
  const els = document.querySelectorAll(".rv");
  if (!els.length) return;
  if (REDUCED || !("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -6% 0px" });
  els.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 70}ms`;
    io.observe(el);
  });
  // Filet de sécurité : jamais de contenu durablement invisible,
  // même si l'observer ne se déclenche pas (scroll programmatique, etc.).
  setTimeout(() => els.forEach(el => el.classList.add("in")), 5000);
})();

/* ── Téléphone 3D : inclinaison + anneau ───────────────────── */
(function phone3d() {
  const stage = document.getElementById("phoneStage");
  const phone = document.getElementById("phone");
  if (!stage || !phone) return;

  // Anneau : compte vers 78 % à l'apparition
  const fill = document.getElementById("ringFill");
  const pct = document.getElementById("ringPct");
  const CIRC = 326.7, TARGET = 78;
  new IntersectionObserver(([e], io) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    if (REDUCED) {
      fill.style.strokeDashoffset = CIRC * (1 - TARGET / 100);
      pct.textContent = `${TARGET}%`;
      return;
    }
    const t0 = performance.now(), DUR = 1100;
    (function step(t) {
      const k = Math.min((t - t0) / DUR, 1);
      const eased = 1 - Math.pow(1 - k, 4); // expo-out
      fill.style.strokeDashoffset = CIRC * (1 - (TARGET * eased) / 100);
      pct.textContent = `${Math.round(TARGET * eased)}%`;
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  }, { threshold: 0.5 }).observe(phone);

  if (REDUCED || !window.matchMedia("(pointer: fine)").matches) return;

  // Inclinaison : suit le pointeur, revient doucement au repos.
  // Le repos est miroité en RTL (le téléphone « regarde » le texte).
  const restRy = () => (document.documentElement.dir === "rtl" ? 14 : -14);
  let target = { rx: 4, ry: restRy() }, current = { ...target }, raf = null;

  function loop() {
    current.rx += (target.rx - current.rx) * 0.09;
    current.ry += (target.ry - current.ry) * 0.09;
    phone.style.transform = `rotateY(${current.ry}deg) rotateX(${current.rx}deg)`;
    if (Math.abs(target.rx - current.rx) + Math.abs(target.ry - current.ry) > 0.05) {
      raf = requestAnimationFrame(loop);
    } else raf = null;
  }
  function kick() { if (!raf) raf = requestAnimationFrame(loop); }

  stage.addEventListener("pointermove", e => {
    const r = stage.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;   // -0.5 … 0.5
    const ny = (e.clientY - r.top) / r.height - 0.5;
    target = { rx: 4 - ny * 14, ry: restRy() + nx * 26 };
    kick();
  });
  stage.addEventListener("pointerleave", () => { target = { rx: 4, ry: restRy() }; kick(); });
})();

/* ── Vidéo ─────────────────────────────────────────────────── */
(function video() {
  const btn = document.getElementById("videoPlay");
  const frame = document.getElementById("videoFrame");
  const note = document.getElementById("videoNote");
  if (!btn || !frame) return;

  btn.addEventListener("click", () => {
    const src = VIDEO_SOURCES[window.HN_LANG] || VIDEO_SOURCES.fr;
    if (!src) {
      note.hidden = false;
      clearTimeout(note._t);
      note._t = setTimeout(() => { note.hidden = true; }, 5200);
      return;
    }
    let media;
    if (/\.(mp4|webm|mov)(\?|$)/i.test(src)) {
      media = document.createElement("video");
      media.src = src;
      media.controls = true;
      media.autoplay = true;
      media.playsInline = true;
    } else {
      media = document.createElement("iframe");
      media.src = src + (src.includes("?") ? "&" : "?") + "autoplay=1";
      media.allow = "autoplay; fullscreen; picture-in-picture";
      media.allowFullscreen = true;
      media.title = "Heshbon Nefesh";
    }
    frame.innerHTML = "";
    frame.appendChild(media);
  });
})();

/* ── Formulaire de contact ─────────────────────────────────── */
(function contactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");
  const submit = document.getElementById("formSubmit");
  const openedAt = Date.now(); // garde-fou anti-robot : temps minimal avant envoi
  const T = window.HN_T || (k => k);

  const setStatus = (key, ok) => {
    status.textContent = key ? T(key) : "";
    status.className = "form-status " + (ok ? "ok" : "ko");
  };

  form.addEventListener("submit", async e => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const honeypot = form.website.value;

    form.querySelectorAll(".err").forEach(el => el.classList.remove("err"));
    let bad = null;
    if (name.length < 2) bad = form.name;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) bad = form.email;
    else if (message.length < 10) bad = form.message;
    if (bad) {
      bad.classList.add("err");
      bad.focus();
      setStatus(bad === form.message ? "form.tooshort" : "form.checkfield", false);
      return;
    }

    submit.disabled = true;
    setStatus("form.sending", true);

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, message,
          subject: form.subject.value,
          lang: window.HN_LANG || "fr",
          website: honeypot,           // vide chez un humain
          elapsedMs: Date.now() - openedAt
        })
      });
      if (res.status === 429) {
        setStatus("form.rate", false);
      } else if (res.ok) {
        form.reset();
        setStatus("form.sent", true);
      } else {
        setStatus("form.fail", false);
      }
    } catch {
      setStatus("form.offline", false);
    } finally {
      submit.disabled = false;
    }
  });
})();
