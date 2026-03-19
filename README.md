# deployme-www

Site vitrine public de **deployme.cloud** — Kubernetes as a Service.

## Stack

- [Astro 5](https://astro.build) — Framework web
- [TailwindCSS 4](https://tailwindcss.com) — CSS utilitaire
- [shadcn/ui](https://ui.shadcn.com) — Composants UI (React)
- [MDX](https://mdxjs.com) — Contenu riche
- i18n natif Astro (EN/FR)
- Typographies : Space Grotesk (titres) + DM Sans (corps) via Google Fonts

## Design

Palette sobre sans bleu, inspiree du skill [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) :

- **Style** : Swiss Minimalism — grilles, contraste, sobriete
- **Couleurs** : Slate/neutral + accent vert (`#22C55E`)
- **Dark mode** : activable, persiste dans localStorage

## Demarrage

```bash
# Installer les dependances
pnpm install

# Lancer le serveur de dev
pnpm dev

# Build statique
pnpm build

# Build via Docker (rootless)
docker run --rm -v "$(pwd)":/app -w /app node:22-slim \
  sh -c "corepack enable && corepack prepare pnpm@9.15.4 --activate && pnpm install && pnpm build"

# Preview du build
pnpm preview
```

## Structure

```
src/
├── components/     # Composants Astro + React (ui/)
├── i18n/           # Traductions FR/EN
├── layouts/        # Layout de base
├── lib/            # Utilitaires (cn, etc.)
├── pages/          # Pages EN (racine) + FR (sous /fr/)
├── styles/         # CSS global + brand colors
public/             # Assets statiques (logos, favicon)
```

## Pages

| Route | EN | FR |
|-------|----|----|
| Accueil | `/` | `/fr/` |
| Produit | `/product` | `/fr/product` |
| Tarifs | `/pricing` | `/fr/pricing` |
| Blog | `/blog` | `/fr/blog` |
| A propos | `/about` | `/fr/about` |
| Formation | `/training` | `/fr/training` |
| Docs | `/docs` | Redirect -> docs.deployme.cloud |

## Deploiement

Netlify — config dans `netlify.toml`.

| Branche | URL | Role |
|---------|-----|------|
| `main` | deployme.cloud | Production |
| `v1` | `v1--<site>.netlify.app` | Preview refonte |
