/* ══════════════════════════════════════════════════════════════
   Heshbon Nefesh — i18n (fr · en · he, RTL pour l'hébreu)
   Usage : data-i18n="clé" (texte) · data-i18n-html="clé" (balisage
   contrôlé par nous, jamais de contenu utilisateur) ·
   data-i18n-attr="attr:clé" (attribut, ex. aria-label).
   ══════════════════════════════════════════════════════════════ */
"use strict";

const I18N = {
  fr: {
    _meta: {
      title: "Heshbon Nefesh — Le compte de l'âme, chaque jour",
      description: "Heshbon Nefesh est un compagnon d'introspection juive : des pratiques quotidiennes à votre mesure, des bilans guidés fidèles à la tradition, et le calendrier juif intégré. Disponible sur Android.",
      legal: "fr"
    },
    "nav.demarche": "La démarche",
    "nav.app": "L'application",
    "nav.video": "La vidéo",
    "nav.contact": "Contact",
    "hero.kicker": "חשבון הנפש",
    "hero.title": "Le compte de l'âme,<br>chaque jour.",
    "hero.sub": "Heshbon Nefesh est un compagnon d'introspection juive : des pratiques quotidiennes à votre mesure, des bilans guidés fidèles à la tradition, et le calendrier juif qui rythme vos journées.",
    "store.ios.small": "Télécharger dans l'",
    "store.android.small": "Disponible sur",
    "hero.avail": "Disponible sur Android",
    "hero.scroll": "découvrir",
    "dem.title": "Une pratique millénaire,<br>un geste quotidien",
    "dem.lead": "Le <em>heshbon nefesh</em> — littéralement « le compte de l'âme » — est la tradition juive de l'examen de conscience : prendre un moment, chaque jour, pour regarder honnêtement où l'on en est, et choisir un pas de plus. Ni culpabilité, ni performance : une croissance douce et régulière.",
    "dem.s1.t": "Pratiquer",
    "dem.s1.p": "Choisissez des actions concrètes dans dix univers de pratique — étude, prière, relations, Shabbat… — adaptées à votre niveau et à votre profil.",
    "dem.s2.t": "S'évaluer",
    "dem.s2.p": "Le soir venu, un court questionnaire d'introspection vous aide à faire le point, avec bienveillance, sur la journée écoulée.",
    "dem.s3.t": "Progresser",
    "dem.s3.p": "Vos bilans personnalisés éclairent votre cheminement ; niveau après niveau, l'arbre de votre pratique grandit.",
    "app.title": "Dans l'application",
    "app.sub": "Un sanctuaire de poche : la nuit pour les grands moments, l'aube pour le quotidien.",
    "phone.greet": "Bonsoir, Sarah",
    "phone.date": "Mardi 12 Tichri · 20 h 14",
    "phone.today": "aujourd'hui",
    "phone.streak": "Série",
    "phone.streakv": "12 j",
    "phone.level": "Niveau",
    "phone.t1": "Étude du matin",
    "phone.t1m": "10 minutes · Étude",
    "phone.t2": "Appeler mes parents",
    "phone.t2m": "Relations & hessed",
    "f1.t": "Des pratiques à votre mesure",
    "f1.p": "Un catalogue d'actions concrètes, classées par univers et par niveau — de l'essentiel au plus complet. Cochez, gardez la série, sentez la journée se remplir.",
    "f2.quote": "« Regarde le chemin parcouru cette semaine : ta constance dans l'étude porte déjà ses fruits. Et si nous regardions ensemble la patience ? »",
    "f2.cite": "Le rav — votre guide dans l'app",
    "f2.t": "Des bilans guidés, fidèles à la tradition",
    "f2.p": "Un questionnaire d'introspection, puis un bilan personnalisé généré par IA dans l'esprit du heshbon nefesh — relu à la lumière de vos ressentis, jamais culpabilisant.",
    "f3.t": "Le temps juif, intégré",
    "f3.p": "Zmanim du jour, fêtes, Roch Hodesh, parashiot : le calendrier hébraïque structure l'application — jusqu'au mode Shabbat qui met l'écran en repos.",
    "f4.t": "Une progression qui élève",
    "f4.p": "Chaque pratique nourrit votre niveau ; l'arbre grandit avec vous. Les passages de niveau sont célébrés comme ils le méritent — brièvement, dignement.",
    "uni.title": "Dix univers de pratique",
    "uni.sub": "Chacun avec son monde illustré, ses actions et ses niveaux.",
    "uni.etude": "Étude",
    "uni.shabbat": "Shabbat",
    "uni.fetes": "Fêtes",
    "uni.vie": "Vie quotidienne",
    "uni.relations": "Relations & hessed",
    "uni.midot": "Midot & émouna",
    "uni.shalom": "Shalom bayit",
    "uni.mitsvot": "Mitsvot de la femme",
    "video.title": "Découvrez Heshbon Nefesh",
    "video.sub": "Deux minutes en images — le rythme, la lumière et l'esprit de l'application.",
    "video.note": "La vidéo arrive très bientôt.",
    "video.play": "Lire la vidéo de présentation",
    "video.share": "Partager la vidéo",
    "video.shareText": "Découvre Heshbon Nefesh — le compte de l'âme, chaque jour.",
    "video.copied": "Lien copié !",
    "c.title": "Écrivez-nous",
    "c.p": "Une question, une idée, ou l'envie de nous dire bonjour ? Laissez-nous un mot — nous lisons chaque message et nous répondons.",
    "form.name": "Votre nom",
    "form.email": "Votre courriel",
    "form.subject": "Sujet",
    "form.s.question": "Poser une question",
    "form.s.news": "Recevoir les nouveautés",
    "form.s.other": "Autre",
    "form.message": "Votre message",
    "form.send": "Envoyer le message",
    "form.privacy": "Vos données ne servent qu'à vous répondre —",
    "form.privacyLink": "politique de confidentialité",
    "form.sending": "Envoi en cours…",
    "form.sent": "Merci ! Votre message est bien parti — nous revenons vers vous rapidement.",
    "form.tooshort": "Le message doit compter au moins 10 caractères.",
    "form.checkfield": "Merci de vérifier ce champ.",
    "form.rate": "Trop de messages envoyés — merci de réessayer dans une heure.",
    "form.fail": "L'envoi a échoué. Merci de réessayer dans un instant.",
    "form.offline": "Connexion impossible. Vérifiez votre réseau puis réessayez.",
    "foot.privacy": "Confidentialité",
    "foot.terms": "Conditions d'utilisation"
  },

  en: {
    _meta: {
      title: "Heshbon Nefesh — An accounting of the soul, every day",
      description: "Heshbon Nefesh is a Jewish introspection companion: daily practices tailored to you, guided reviews faithful to tradition, and the Jewish calendar built in. Available on Android.",
      legal: "en"
    },
    "nav.demarche": "The practice",
    "nav.app": "The app",
    "nav.video": "The film",
    "nav.contact": "Contact",
    "hero.kicker": "חשבון הנפש",
    "hero.title": "An accounting of the soul,<br>every day.",
    "hero.sub": "Heshbon Nefesh is a Jewish introspection companion: daily practices tailored to you, guided reviews faithful to tradition, and the Jewish calendar giving rhythm to your days.",
    "store.ios.small": "Download on the",
    "store.android.small": "Get it on",
    "hero.avail": "Available on Android",
    "hero.scroll": "discover",
    "dem.title": "A timeless practice,<br>a daily gesture",
    "dem.lead": "<em>Heshbon nefesh</em> — literally “an accounting of the soul” — is the Jewish tradition of self-examination: taking a moment, every day, to look honestly at where you stand, and to choose one more step. No guilt, no performance: gentle, steady growth.",
    "dem.s1.t": "Practice",
    "dem.s1.p": "Choose concrete actions across ten worlds of practice — study, prayer, relationships, Shabbat… — matched to your level and your profile.",
    "dem.s2.t": "Reflect",
    "dem.s2.p": "When evening comes, a short introspection questionnaire helps you take stock of the day, with kindness.",
    "dem.s3.t": "Grow",
    "dem.s3.p": "Your personalised reviews light up your path; level after level, the tree of your practice grows.",
    "app.title": "Inside the app",
    "app.sub": "A pocket sanctuary: night for the great moments, dawn for the everyday.",
    "phone.greet": "Good evening, Sarah",
    "phone.date": "Tuesday, 12 Tishrei · 8:14 pm",
    "phone.today": "today",
    "phone.streak": "Streak",
    "phone.streakv": "12 d",
    "phone.level": "Level",
    "phone.t1": "Morning study",
    "phone.t1m": "10 minutes · Study",
    "phone.t2": "Call my parents",
    "phone.t2m": "Relationships & chesed",
    "f1.t": "Practices made to your measure",
    "f1.p": "A catalogue of concrete actions, organised by world and by level — from the essentials to the most complete. Check them off, keep the streak, feel the day fill up.",
    "f2.quote": "“Look at the road travelled this week: your constancy in study is already bearing fruit. Shall we look at patience together?”",
    "f2.cite": "The rav — your guide in the app",
    "f2.t": "Guided reviews, faithful to tradition",
    "f2.p": "An introspection questionnaire, then a personalised review generated by AI in the spirit of heshbon nefesh — read in the light of how you felt, never guilt-tripping.",
    "f3.t": "Jewish time, built in",
    "f3.p": "Daily zmanim, holidays, Rosh Chodesh, parashiot: the Hebrew calendar structures the app — down to the Shabbat mode that puts the screen to rest.",
    "f4.t": "Growth that elevates",
    "f4.p": "Every practice feeds your level; the tree grows with you. Level-ups are celebrated as they deserve — briefly, with dignity.",
    "uni.title": "Ten worlds of practice",
    "uni.sub": "Each with its own illustrated world, actions and levels.",
    "uni.etude": "Study",
    "uni.shabbat": "Shabbat",
    "uni.fetes": "Holidays",
    "uni.vie": "Daily life",
    "uni.relations": "Relationships & chesed",
    "uni.midot": "Middot & emunah",
    "uni.shalom": "Shalom bayit",
    "uni.mitsvot": "Women's mitzvot",
    "video.title": "Meet Heshbon Nefesh",
    "video.sub": "Two minutes of images — the rhythm, the light and the spirit of the app.",
    "video.note": "The film is coming very soon.",
    "video.play": "Play the presentation film",
    "video.share": "Share the video",
    "video.shareText": "Discover Heshbon Nefesh — the accounting of the soul, every day.",
    "video.copied": "Link copied!",
    "c.title": "Write to us",
    "c.p": "A question, an idea, or simply want to say hello? Leave us a note — we read every message and we reply.",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.subject": "Subject",
    "form.s.question": "Ask a question",
    "form.s.news": "Get updates",
    "form.s.other": "Other",
    "form.message": "Your message",
    "form.send": "Send the message",
    "form.privacy": "Your data is only used to reply to you —",
    "form.privacyLink": "privacy policy",
    "form.sending": "Sending…",
    "form.sent": "Thank you! Your message is on its way — we'll get back to you shortly.",
    "form.tooshort": "The message must be at least 10 characters long.",
    "form.checkfield": "Please check this field.",
    "form.rate": "Too many messages sent — please try again in an hour.",
    "form.fail": "Sending failed. Please try again in a moment.",
    "form.offline": "No connection. Check your network and try again.",
    "foot.privacy": "Privacy",
    "foot.terms": "Terms of use"
  },

  he: {
    _meta: {
      title: "חשבון הנפש — לחזור אל הנשמה, בכל יום",
      description: "חשבון הנפש הוא מלווה יומי להתבוננות פנימית יהודית: מעשים יומיומיים בהתאמה אישית, סיכומים מודרכים ברוח המסורת, ולוח השנה העברי מובנה. זמין לאנדרואיד.",
      legal: "he"
    },
    "nav.demarche": "הדרך",
    "nav.app": "האפליקציה",
    "nav.video": "הסרטון",
    "nav.contact": "צרו קשר",
    "hero.kicker": "",
    "hero.title": "חשבון הנפש.<br>בכל יום.",
    "hero.sub": "חשבון הנפש הוא מלווה יומי להתבוננות פנימית יהודית: מעשים יומיומיים בהתאמה אישית, סיכומים מודרכים ברוח המסורת, ולוח השנה העברי שנותן קצב לימים שלכם.",
    "store.ios.small": "להורדה ב‑",
    "store.android.small": "זמין ב‑",
    "hero.avail": "זמין לאנדרואיד",
    "hero.scroll": "לגלות",
    "dem.title": "מנהג בן אלפי שנים,<br>מעשה של כל יום",
    "dem.lead": "<em>חשבון הנפש</em> הוא המסורת היהודית של התבוננות פנימית: לעצור לרגע, בכל יום, להביט בכנות היכן אנחנו אוחזים — ולבחור עוד צעד אחד קדימה. בלי אשמה ובלי מרוץ: צמיחה עדינה ומתמדת.",
    "dem.s1.t": "לעשות",
    "dem.s1.p": "בוחרים מעשים מוחשיים מתוך עשרה עולמות של עשייה — לימוד, תפילה, בין אדם לחברו, שבת… — מותאמים לרמה ולפרופיל שלכם.",
    "dem.s2.t": "להתבונן",
    "dem.s2.p": "בערב, שאלון קצר של התבוננות עוזר לכם לסכם את היום שחלף, מתוך עין טובה.",
    "dem.s3.t": "לצמוח",
    "dem.s3.p": "הסיכומים האישיים מאירים את הדרך שלכם; רמה אחר רמה, עץ העשייה שלכם גדל.",
    "app.title": "בתוך האפליקציה",
    "app.sub": "מקדש קטן בכיס: הלילה לרגעים הגדולים, השחר ליום־יום.",
    "phone.greet": "ערב טוב, שרה",
    "phone.date": "יום שלישי י״ב בתשרי · 20:14",
    "phone.today": "היום",
    "phone.streak": "רצף",
    "phone.streakv": "12 ימים",
    "phone.level": "רמה",
    "phone.t1": "לימוד בוקר",
    "phone.t1m": "10 דקות · לימוד",
    "phone.t2": "להתקשר להורים",
    "phone.t2m": "בין אדם לחברו וחסד",
    "f1.t": "מעשים שנתפרו למידותיכם",
    "f1.p": "קטלוג של מעשים מוחשיים, מסודרים לפי עולם ולפי רמה — מן היסוד ועד השלם. מסמנים, שומרים על הרצף, ומרגישים את היום מתמלא.",
    "f2.quote": "״הביטי בדרך שעברת השבוע: ההתמדה שלך בלימוד כבר נושאת פרי. אולי נתבונן יחד בסבלנות?״",
    "f2.cite": "הרב — המדריך שלכם באפליקציה",
    "f2.t": "סיכומים מודרכים, נאמנים למסורת",
    "f2.p": "שאלון התבוננות, ואחריו סיכום אישי שנוצר בבינה מלאכותית ברוח חשבון הנפש — נקרא לאור התחושות שלכם, לעולם לא מאשים.",
    "f3.t": "הזמן היהודי, מובנה",
    "f3.p": "זמני היום, חגים, ראש חודש, פרשות השבוע: הלוח העברי הוא השלד של האפליקציה — עד מצב שבת שמשבית את המסך.",
    "f4.t": "התקדמות שמרוממת",
    "f4.p": "כל מעשה מזין את הרמה שלכם; העץ גדל אתכם. עליות הרמה נחגגות כראוי — בקצרה, בכבוד.",
    "uni.title": "עשרה עולמות של עשייה",
    "uni.sub": "לכל אחד עולם מאויר משלו, מעשים ורמות.",
    "uni.etude": "לימוד",
    "uni.shabbat": "שבת",
    "uni.fetes": "חגים",
    "uni.vie": "חיי היום־יום",
    "uni.relations": "בין אדם לחברו וחסד",
    "uni.midot": "מידות ואמונה",
    "uni.shalom": "שלום בית",
    "uni.mitsvot": "מצוות האישה",
    "video.title": "הכירו את חשבון הנפש",
    "video.sub": "שתי דקות של תמונות — הקצב, האור והרוח של האפליקציה.",
    "video.note": "הסרטון בדרך — ממש בקרוב.",
    "video.play": "הפעלת סרטון ההיכרות",
    "video.share": "שיתוף הסרטון",
    "video.shareText": "הכירו את חשבון הנפש — חשבון הנפש, יום אחרי יום.",
    "video.copied": "הקישור הועתק!",
    "c.title": "כתבו לנו",
    "c.p": "שאלה, רעיון, או סתם רצון להגיד שלום? השאירו לנו מילה — אנחנו קוראים כל הודעה ועונים.",
    "form.name": "השם שלכם",
    "form.email": "כתובת האימייל",
    "form.subject": "נושא",
    "form.s.question": "לשאול שאלה",
    "form.s.news": "לקבל עדכונים",
    "form.s.other": "אחר",
    "form.message": "ההודעה שלכם",
    "form.send": "שליחת ההודעה",
    "form.privacy": "הנתונים שלכם משמשים רק כדי לענות לכם —",
    "form.privacyLink": "מדיניות הפרטיות",
    "form.sending": "שולח…",
    "form.sent": "תודה! ההודעה נשלחה — נחזור אליכם בקרוב.",
    "form.tooshort": "ההודעה צריכה להכיל לפחות 10 תווים.",
    "form.checkfield": "נא לבדוק שדה זה.",
    "form.rate": "נשלחו יותר מדי הודעות — נסו שוב בעוד שעה.",
    "form.fail": "השליחה נכשלה. נסו שוב בעוד רגע.",
    "form.offline": "אין חיבור. בדקו את הרשת ונסו שוב.",
    "foot.privacy": "פרטיות",
    "foot.terms": "תנאי שימוש"
  }
};

const I18N_RTL = new Set(["he"]);

function i18nDetect() {
  const saved = localStorage.getItem("hn_lang");
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
  return I18N[nav] ? nav : "fr";
}

function i18nApply(lang) {
  const dict = I18N[lang] || I18N.fr;
  document.documentElement.lang = lang;
  document.documentElement.dir = I18N_RTL.has(lang) ? "rtl" : "ltr";

  document.title = dict._meta.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", dict._meta.description);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  // Balisage contrôlé par nous uniquement (<br>, <em>) — jamais de contenu externe.
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = dict[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const [attr, key] = el.dataset.i18nAttr.split(":");
    const v = dict[key];
    if (v !== undefined) el.setAttribute(attr, v);
  });

  // Kicker hébreu du héros : masqué quand la page est déjà en hébreu.
  const kicker = document.getElementById("heroKicker");
  if (kicker) kicker.hidden = dict["hero.kicker"] === "";

  // Pages légales dans la langue affichée.
  const legal = dict._meta.legal;
  const privacy = `${legal}/privacy.html`;
  const terms = `${legal}/terms.html`;
  const pl = document.getElementById("privacyLink");
  const fp = document.getElementById("footPrivacy");
  const ft = document.getElementById("footTerms");
  if (pl) pl.href = privacy;
  if (fp) fp.href = privacy;
  if (ft) ft.href = terms;

  document.querySelectorAll(".nav-langs button").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });

  document.documentElement.dataset.lang = lang;
}

window.HN_LANG = i18nDetect();
i18nApply(window.HN_LANG);

document.querySelectorAll(".nav-langs button").forEach(btn => {
  btn.addEventListener("click", () => {
    window.HN_LANG = btn.dataset.lang;
    localStorage.setItem("hn_lang", window.HN_LANG);
    i18nApply(window.HN_LANG);
  });
});

// Chaîne de statut du formulaire, dans la langue courante.
window.HN_T = (key) => (I18N[window.HN_LANG] || I18N.fr)[key] || I18N.fr[key] || key;
