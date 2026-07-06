# Déploiement du site heshbonnefesh.app

## 1. Uploader les fichiers

Uploader **tout le contenu** de `site web/` là où sont les pages actuelles, en conservant
l'arborescence :

```
index.html
landing.css        ← styles de la landing (style.css reste celui des pages légales)
i18n.js            ← traductions FR / EN / HE
script.js
assets/            ← toutes les images optimisées
auth/
  callback.html          ← page-pont confirmation de compte  (⚠️ requise par l'app)
  reset-password.html    ← page-pont mot de passe oublié     (⚠️ requise par l'app)
fr/  en/  he/      ← pages légales existantes (inchangées)
style.css          ← feuille des pages légales (inchangée)
```

Après upload, vérifier que ces deux URLs répondent (elles sont référencées par l'app,
`src/utils/authDeepLink.ts`) :
- https://heshbonnefesh.app/auth/callback.html
- https://heshbonnefesh.app/auth/reset-password.html

…et qu'elles figurent bien dans **Supabase → Authentication → URL Configuration → Redirect URLs**.

## 2. Formulaire de contact (Edge Function)

Le formulaire poste vers l'Edge Function `contact-form` (validation stricte, honeypot,
rate-limit 5 messages/heure/IP hachée, aucun accès public à la table). À déployer :

```bash
supabase db push                                # crée la table contact_messages
supabase functions deploy contact-form          # déploie la fonction
```

Envoi d'email (optionnel — sans cela les messages sont conservés en base,
lisibles dans le Dashboard Supabase, table `contact_messages`) :

```bash
supabase secrets set RESEND_API_KEY=re_xxx      # clé https://resend.com
supabase secrets set CONTACT_TO=contact@heshbonnefesh.app
supabase secrets set CONTACT_FROM="Heshbon Nefesh <notifications@heshbonnefesh.app>"
```

(`CONTACT_FROM` doit être un domaine vérifié dans Resend ; à défaut la fonction
utilise `onboarding@resend.dev`, suffisant pour tester.)

## 3. Liens stores

- Google Play : déjà correct (`com.heshbonnefesh.app`).
- App Store : remplacer `id0000000000` dans `index.html` par l'identifiant réel
  de la fiche App Store dès qu'elle existe.

## 4. Vidéo de présentation

Quand la vidéo est prête, ouvrir `script.js` et renseigner la constante `VIDEO_URL`
(première ligne de configuration) :
- YouTube : `https://www.youtube-nocookie.com/embed/VIDEO_ID`
- Vimeo : `https://player.vimeo.com/video/VIDEO_ID`
- ou un `.mp4` auto-hébergé (ex. `assets/presentation.mp4`)

Le bouton ▶ affichera la vidéo dans le cadre. (La CSP autorise déjà
youtube-nocookie et Vimeo.)

## 5. En-têtes de sécurité (recommandé)

La page embarque déjà une CSP en `<meta>`. Si l'hébergeur permet de définir des
en-têtes HTTP, ajouter :

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

(Netlify : fichier `_headers` · Vercel : `vercel.json` · Cloudflare Pages : `_headers`.)
