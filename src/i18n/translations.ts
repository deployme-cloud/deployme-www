export const languages = {
  en: "English",
  fr: "Français",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.product": "Product",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.training": "Training",
    "nav.docs": "Docs",
    "nav.getStarted": "Get Started",

    // Homepage
    "home.hero.title": "Deploy Kubernetes Clusters in Minutes",
    "home.hero.subtitle":
      "The open-core platform to provision Talos Linux clusters on any infrastructure — cloud, on-premise, or bare-metal.",
    "home.hero.cta": "Deploy My First Cluster",
    "home.hero.secondary": "View Documentation",
    "home.features.title": "Why Deployme?",
    "home.features.simple.title": "Simple",
    "home.features.simple.desc":
      "Deploy a production-ready Kubernetes cluster in under 10 minutes. No PhD required.",
    "home.features.secure.title": "Secure",
    "home.features.secure.desc":
      "Built on Talos Linux — an immutable OS with no SSH, no shell, minimal attack surface.",
    "home.features.flexible.title": "Flexible",
    "home.features.flexible.desc":
      "Your infrastructure, your rules. KVM, VMware, Proxmox, bare-metal — we support them all.",
    "home.features.open.title": "Open",
    "home.features.open.desc":
      "Open-core model. SDK, Terraform, Ansible, CAPI — use the tools you already know.",
    "home.cta.title": "Ready to Get Started?",
    "home.cta.subtitle":
      "Get 20 free hours per month. No credit card required.",
    "home.cta.button": "Create Free Account",

    // Product
    "product.title": "Product",
    "product.subtitle":
      "A unified platform to provision Kubernetes clusters on any infrastructure.",
    "product.phases.title": "Infrastructure Support",
    "product.phase0.title": "Managed Hosting",
    "product.phase0.desc":
      "KVM clusters hosted and operated by Deployme. Zero friction, ready in minutes.",
    "product.phase1.title": "VMware / Proxmox",
    "product.phase1.desc":
      "Deploy on your existing virtualization infrastructure via a lightweight agent.",
    "product.phase2.title": "Bare-Metal",
    "product.phase2.desc":
      "PXE boot your physical servers directly with Talos Linux.",
    "product.phase3.title": "Incus / OpenStack",
    "product.phase3.desc":
      "Advanced private cloud environments with dedicated CAPI/Terraform providers.",
    "product.tools.title": "Use the Tools You Know",
    "product.tools.subtitle":
      "SDK (Go, Python, TypeScript), Terraform Provider, Ansible Collection, Cluster API, CLI.",

    // Pricing
    "pricing.title": "Pricing",
    "pricing.subtitle": "Start for free, scale as you grow.",
    "pricing.community.title": "Community",
    "pricing.community.price": "Free",
    "pricing.community.desc": "For individuals and small projects",
    "pricing.community.features": [
      "Unlimited clusters (on your infra)",
      "SDK / Terraform / Ansible / CAPI",
      "Full documentation",
      "20h/month free hosted credits",
      "Community support",
    ],
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "From €49/mo",
    "pricing.pro.desc": "For teams and production workloads",
    "pricing.pro.features": [
      "Everything in Community",
      "Managed hosting",
      "Email support (24h SLA)",
      "Monthly live sessions",
      "SSO / OIDC",
    ],
    "pricing.enterprise.title": "Enterprise",
    "pricing.enterprise.price": "Custom",
    "pricing.enterprise.desc": "For organizations with advanced needs",
    "pricing.enterprise.features": [
      "Everything in Pro",
      "Dedicated SLA (4h)",
      "Dedicated Slack channel",
      "On-site training",
      "Audit & consulting",
      "Advanced multi-tenancy",
    ],
    "pricing.cta": "Get Started",
    "pricing.contact": "Contact Sales",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle":
      "Technical articles, experience reports, and announcements.",
    "blog.comingSoon": "Articles coming soon. Stay tuned!",

    // About
    "about.title": "About",
    "about.subtitle": "Our mission: democratize Kubernetes.",
    "about.vision.title": "Our Vision",
    "about.vision.desc":
      "We believe everyone should be able to deploy a Kubernetes cluster in minutes, on any infrastructure, without deep expertise. Deployme.cloud makes this possible with Talos Linux and an open-core approach.",
    "about.roadmap.title": "Roadmap",
    "about.roadmap.items": [
      "2025 H1 — Phase 0 + Phase 1 (MVP → GA)",
      "2025 H2 — Phase 2 (Bare-metal) + Add-on Marketplace",
      "2026 H1 — Phase 3 (Incus/OpenStack) + Certification",
      "2026 H2 — Multi-cloud (AWS/GCP/Azure optional target)",
    ],

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a question? We'd love to hear from you.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",

    // Training
    "training.title": "Training",
    "training.subtitle":
      "Learn Kubernetes with Talos Linux — free courses and professional workshops.",
    "training.free.title": "Free Resources",
    "training.free.items": [
      "Complete documentation",
      "Video tutorials",
      "Interactive labs",
      "Progressive learning paths",
    ],
    "training.pro.title": "Professional Training",
    "training.pro.items": [
      "Monthly live sessions (Pro plan)",
      "On-site training (Enterprise)",
      "Deployme Certified program",
    ],

    // Footer
    "footer.tagline": "Kubernetes on any infrastructure, in minutes.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2025 Deployme.cloud. All rights reserved.",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.product": "Produit",
    "nav.pricing": "Tarifs",
    "nav.blog": "Blog",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.training": "Formation",
    "nav.docs": "Docs",
    "nav.getStarted": "Commencer",

    // Homepage
    "home.hero.title": "Déployez des Clusters Kubernetes en Minutes",
    "home.hero.subtitle":
      "La plateforme open-core pour provisionner des clusters Talos Linux sur n'importe quelle infrastructure — cloud, on-premise ou bare-metal.",
    "home.hero.cta": "Déployer Mon Premier Cluster",
    "home.hero.secondary": "Voir la Documentation",
    "home.features.title": "Pourquoi Deployme ?",
    "home.features.simple.title": "Simple",
    "home.features.simple.desc":
      "Déployez un cluster Kubernetes prêt pour la production en moins de 10 minutes. Aucun doctorat requis.",
    "home.features.secure.title": "Sécurisé",
    "home.features.secure.desc":
      "Basé sur Talos Linux — un OS immuable sans SSH, sans shell, surface d'attaque minimale.",
    "home.features.flexible.title": "Flexible",
    "home.features.flexible.desc":
      "Votre infrastructure, vos règles. KVM, VMware, Proxmox, bare-metal — nous les supportons tous.",
    "home.features.open.title": "Ouvert",
    "home.features.open.desc":
      "Modèle open-core. SDK, Terraform, Ansible, CAPI — utilisez les outils que vous connaissez déjà.",
    "home.cta.title": "Prêt à Commencer ?",
    "home.cta.subtitle":
      "Obtenez 20 heures gratuites par mois. Aucune carte bancaire requise.",
    "home.cta.button": "Créer un Compte Gratuit",

    // Product
    "product.title": "Produit",
    "product.subtitle":
      "Une plateforme unifiée pour provisionner des clusters Kubernetes sur n'importe quelle infrastructure.",
    "product.phases.title": "Infrastructures Supportées",
    "product.phase0.title": "Hébergement Managé",
    "product.phase0.desc":
      "Clusters KVM hébergés et opérés par Deployme. Zéro friction, prêt en minutes.",
    "product.phase1.title": "VMware / Proxmox",
    "product.phase1.desc":
      "Déployez sur votre infrastructure de virtualisation existante via un agent léger.",
    "product.phase2.title": "Bare-Metal",
    "product.phase2.desc":
      "Démarrez vos serveurs physiques directement avec Talos Linux via PXE.",
    "product.phase3.title": "Incus / OpenStack",
    "product.phase3.desc":
      "Environnements cloud privé avancés avec des providers CAPI/Terraform dédiés.",
    "product.tools.title": "Utilisez les Outils que Vous Connaissez",
    "product.tools.subtitle":
      "SDK (Go, Python, TypeScript), Provider Terraform, Collection Ansible, Cluster API, CLI.",

    // Pricing
    "pricing.title": "Tarifs",
    "pricing.subtitle": "Commencez gratuitement, évoluez à votre rythme.",
    "pricing.community.title": "Community",
    "pricing.community.price": "Gratuit",
    "pricing.community.desc": "Pour les individus et petits projets",
    "pricing.community.features": [
      "Clusters illimités (sur votre infra)",
      "SDK / Terraform / Ansible / CAPI",
      "Documentation complète",
      "20h/mois de crédits hébergés gratuits",
      "Support communautaire",
    ],
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "À partir de 49€/mois",
    "pricing.pro.desc": "Pour les équipes et charges de production",
    "pricing.pro.features": [
      "Tout le plan Community",
      "Hébergement managé",
      "Support email (SLA 24h)",
      "Sessions live mensuelles",
      "SSO / OIDC",
    ],
    "pricing.enterprise.title": "Enterprise",
    "pricing.enterprise.price": "Sur devis",
    "pricing.enterprise.desc": "Pour les organisations aux besoins avancés",
    "pricing.enterprise.features": [
      "Tout le plan Pro",
      "SLA dédié (4h)",
      "Canal Slack dédié",
      "Formation sur site",
      "Audit & consulting",
      "Multi-tenancy avancé",
    ],
    "pricing.cta": "Commencer",
    "pricing.contact": "Contacter l'équipe commerciale",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle":
      "Articles techniques, retours d'expérience et annonces.",
    "blog.comingSoon": "Articles à venir. Restez connectés !",

    // About
    "about.title": "À Propos",
    "about.subtitle": "Notre mission : démocratiser Kubernetes.",
    "about.vision.title": "Notre Vision",
    "about.vision.desc":
      "Nous croyons que tout le monde devrait pouvoir déployer un cluster Kubernetes en quelques minutes, sur n'importe quelle infrastructure, sans expertise approfondie. Deployme.cloud rend cela possible avec Talos Linux et une approche open-core.",
    "about.roadmap.title": "Roadmap",
    "about.roadmap.items": [
      "2025 S1 — Phase 0 + Phase 1 (MVP → GA)",
      "2025 S2 — Phase 2 (Bare-metal) + Marketplace d'add-ons",
      "2026 S1 — Phase 3 (Incus/OpenStack) + Certification",
      "2026 S2 — Multi-cloud (AWS/GCP/Azure cible optionnelle)",
    ],

    // Contact
    "contact.title": "Contact",
    "contact.subtitle":
      "Une question ? Nous serions ravis de vous entendre.",
    "contact.form.name": "Nom",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Envoyer le Message",

    // Training
    "training.title": "Formation",
    "training.subtitle":
      "Apprenez Kubernetes avec Talos Linux — cours gratuits et workshops professionnels.",
    "training.free.title": "Ressources Gratuites",
    "training.free.items": [
      "Documentation complète",
      "Tutoriels vidéo",
      "Labs interactifs",
      "Parcours d'apprentissage progressifs",
    ],
    "training.pro.title": "Formation Professionnelle",
    "training.pro.items": [
      "Sessions live mensuelles (plan Pro)",
      "Formation sur site (Enterprise)",
      "Programme certifiant Deployme",
    ],

    // Footer
    "footer.tagline":
      "Kubernetes sur n'importe quelle infrastructure, en minutes.",
    "footer.product": "Produit",
    "footer.resources": "Ressources",
    "footer.company": "Entreprise",
    "footer.legal": "Légal",
    "footer.privacy": "Politique de Confidentialité",
    "footer.terms": "Conditions d'Utilisation",
    "footer.copyright": "© 2025 Deployme.cloud. Tous droits réservés.",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey) {
    return translations[lang][key] ?? translations[defaultLang][key] ?? key;
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
