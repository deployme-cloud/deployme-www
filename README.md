# deployme-www

Site vitrine public de **deployme.cloud** — Kubernetes as a Service.

## Stack

- [Astro 5](https://astro.build) — Framework web
- [TailwindCSS 4](https://tailwindcss.com) — CSS utilitaire
- [shadcn/ui](https://ui.shadcn.com) — Composants UI (React)
- [MDX](https://mdxjs.com) — Contenu riche
- i18n natif Astro (EN/FR)

## Demarrage

```bash
# Installer les dependances
pnpm install

# Lancer le serveur de dev
pnpm dev

# Build statique
pnpm build

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
├── styles/         # CSS global (Tailwind)
public/             # Assets statiques
```

## Pages

| Route | EN | FR |
|-------|----|----|
| Accueil | `/` | `/fr/` |
| Produit | `/product` | `/fr/product` |
| Tarifs | `/pricing` | `/fr/pricing` |
| Blog | `/blog` | `/fr/blog` |
| A propos | `/about` | `/fr/about` |
| Contact | `/contact` | `/fr/contact` |
| Formation | `/training` | `/fr/training` |
| Docs | `/docs` | Redirect -> docs.deployme.cloud |

## Deploiement

Netlify (auto-deploy sur push `main`). Config dans `netlify.toml`.
