# IziPay Landing Page

Landing page React + Vite + Tailwind.

## Pré-requis

- Node.js 20+
- npm 10+

## Développement local

```bash
npm install
npm run dev
```

## Vérification avant production

```bash
npm run lint
npm run build
```

## Déploiement sur Vercel

Le projet est prêt pour Vercel avec le fichier [vercel.json](vercel.json).

### Option A — via Dashboard Vercel

1. Push le projet sur GitHub/GitLab/Bitbucket.
2. Sur Vercel: **Add New Project**.
3. Sélectionne le repo.
4. Vérifie les settings:
	- Framework Preset: `Vite`
	- Build Command: `npm run build`
	- Output Directory: `dist`
5. Clique **Deploy**.

### Option B — via CLI Vercel

```bash
npm i -g vercel
vercel
vercel --prod
```

## Notes

- Les routes sont redirigées vers `index.html` (SPA rewrite).
- `dist/` et `node_modules/` sont ignorés par git.
