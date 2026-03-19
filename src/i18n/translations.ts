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

    // Privacy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last updated: March 2026",
    "privacy.intro": "Deployme.cloud is committed to protecting your privacy. This policy describes what data we collect, how we use it, and your rights.",
    "privacy.sections": [
      {
        "title": "Data we collect",
        "content": "We collect only the data necessary for the operation of our services: email address and name when creating an account, technical logs (IP address, browser, timestamps) for security and diagnostics, and usage data to improve our platform."
      },
      {
        "title": "How we use your data",
        "content": "Your data is used exclusively to: provide and maintain the Deployme.cloud service, communicate with you about your account and our services, ensure the security of our infrastructure, and comply with our legal obligations."
      },
      {
        "title": "Data sharing",
        "content": "We do not sell your personal data. We may share data with technical sub-processors (hosting, email) strictly necessary for the operation of the service, and only within the European Economic Area or with adequate safeguards."
      },
      {
        "title": "Data retention",
        "content": "Your data is retained for the duration of your account. Upon deletion of your account, your personal data is deleted within 30 days, except data we are legally required to retain."
      },
      {
        "title": "Your rights",
        "content": "In accordance with applicable regulations (GDPR), you have the right to access, rectify, delete, port, and restrict the processing of your personal data. To exercise these rights, contact us at privacy@deployme.cloud."
      },
      {
        "title": "Cookies",
        "content": "We use only strictly necessary cookies (theme preference, authentication session). We do not use advertising or third-party tracking cookies."
      },
      {
        "title": "Contact",
        "content": "For any questions regarding this privacy policy, you can reach us at privacy@deployme.cloud."
      }
    ],

    // Terms
    "terms.title": "Terms of Service",
    "terms.lastUpdated": "Last updated: March 2026",
    "terms.intro": "These terms govern your use of the Deployme.cloud platform. By using our services, you agree to these terms.",
    "terms.sections": [
      {
        "title": "Service description",
        "content": "Deployme.cloud is a Kubernetes-as-a-Service platform that allows you to provision and manage Kubernetes clusters based on Talos Linux on various infrastructures (managed hosting, VMware, Proxmox, bare-metal, Incus, OpenStack)."
      },
      {
        "title": "Account creation",
        "content": "To use our services, you must create an account by providing accurate and up-to-date information. You are responsible for maintaining the confidentiality of your credentials and for all activities under your account."
      },
      {
        "title": "Plans and billing",
        "content": "Deployme.cloud offers several plans: Community (free, 20h/month of hosted credits), Pro (from €49/month), and Enterprise (custom pricing). Paid plans are billed monthly. Prices may be modified with 30 days prior notice."
      },
      {
        "title": "Acceptable use",
        "content": "You agree not to use the service for illegal activities, to distribute malicious content, to attempt to compromise the security of the infrastructure, or to exceed the fair use limits of your plan."
      },
      {
        "title": "Availability and SLA",
        "content": "We strive to maintain high availability of our services. Specific SLAs are defined in the Pro and Enterprise plans. The Community plan is provided as-is without availability guarantees."
      },
      {
        "title": "Intellectual property",
        "content": "Deployme.cloud and its components are the intellectual property of Deployme.cloud. The open-core parts of the platform are available under their respective open-source licenses. Your data and configurations remain your exclusive property."
      },
      {
        "title": "Limitation of liability",
        "content": "Deployme.cloud shall not be liable for indirect damages, loss of data due to misuse, or interruptions beyond our control. Our total liability is limited to the amounts paid during the 12 months preceding the incident."
      },
      {
        "title": "Termination",
        "content": "You can close your account at any time. We reserve the right to suspend or terminate an account in case of violation of these terms, with prior notice except in case of emergency."
      },
      {
        "title": "Applicable law",
        "content": "These terms are governed by French law. Any dispute shall be submitted to the competent courts."
      },
      {
        "title": "Contact",
        "content": "For any questions regarding these terms, you can reach us at contact@deployme.cloud."
      }
    ],

    // Theme
    "theme.toggle": "Toggle theme",

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
    "nav.training": "Formation",
    "nav.docs": "Docs",
    "nav.getStarted": "Commencer",

    // Homepage
    "home.hero.title": "Déployez vos clusters Kubernetes en quelques minutes",
    "home.hero.subtitle":
      "La plateforme open-core pour provisionner des clusters Talos Linux sur n'importe quelle infrastructure — cloud, on-premise ou bare-metal.",
    "home.hero.cta": "Déployer mon premier cluster",
    "home.hero.secondary": "Voir la documentation",
    "home.features.title": "Pourquoi Deployme ?",
    "home.features.simple.title": "Simple",
    "home.features.simple.desc":
      "Déployez un cluster Kubernetes prêt pour la production en moins de 10 minutes. Aucune expertise requise.",
    "home.features.secure.title": "Sécurisé",
    "home.features.secure.desc":
      "Basé sur Talos Linux — un OS immuable, sans SSH, sans shell, avec une surface d'attaque minimale.",
    "home.features.flexible.title": "Flexible",
    "home.features.flexible.desc":
      "Votre infrastructure, vos règles. KVM, VMware, Proxmox, bare-metal — on s'adapte à tout.",
    "home.features.open.title": "Ouvert",
    "home.features.open.desc":
      "Modèle open-core. SDK, Terraform, Ansible, CAPI — utilisez les outils que vous connaissez déjà.",
    "home.cta.title": "Prêt à vous lancer ?",
    "home.cta.subtitle":
      "Profitez de 20 heures gratuites par mois. Aucune carte bancaire requise.",
    "home.cta.button": "Créer un compte gratuit",

    // Product
    "product.title": "Produit",
    "product.subtitle":
      "Une plateforme unifiée pour provisionner des clusters Kubernetes sur n'importe quelle infrastructure.",
    "product.phases.title": "Infrastructures supportées",
    "product.phase0.title": "Hébergement managé",
    "product.phase0.desc":
      "Clusters KVM hébergés et opérés par Deployme. Zéro friction, prêts en quelques minutes.",
    "product.phase1.title": "VMware / Proxmox",
    "product.phase1.desc":
      "Déployez sur votre infrastructure de virtualisation existante via un agent léger.",
    "product.phase2.title": "Bare-metal",
    "product.phase2.desc":
      "Démarrez vos serveurs physiques directement avec Talos Linux via PXE.",
    "product.phase3.title": "Incus / OpenStack",
    "product.phase3.desc":
      "Environnements cloud privé avancés avec des providers CAPI/Terraform dédiés.",
    "product.tools.title": "Utilisez les outils que vous connaissez",
    "product.tools.subtitle":
      "SDK (Go, Python, TypeScript), Provider Terraform, Collection Ansible, Cluster API, CLI.",

    // Pricing
    "pricing.title": "Tarifs",
    "pricing.subtitle": "Commencez gratuitement, évoluez à votre rythme.",
    "pricing.community.title": "Community",
    "pricing.community.price": "Gratuit",
    "pricing.community.desc": "Pour les particuliers et les petits projets",
    "pricing.community.features": [
      "Clusters illimités (sur votre infra)",
      "SDK / Terraform / Ansible / CAPI",
      "Documentation complète",
      "20 h/mois de crédits hébergés offerts",
      "Support communautaire",
    ],
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "À partir de 49 €/mois",
    "pricing.pro.desc": "Pour les équipes et les charges de production",
    "pricing.pro.features": [
      "Tout le plan Community inclus",
      "Hébergement managé",
      "Support par email (SLA 24 h)",
      "Sessions live mensuelles",
      "SSO / OIDC",
    ],
    "pricing.enterprise.title": "Enterprise",
    "pricing.enterprise.price": "Sur devis",
    "pricing.enterprise.desc": "Pour les organisations aux besoins avancés",
    "pricing.enterprise.features": [
      "Tout le plan Pro inclus",
      "SLA dédié (4 h)",
      "Canal Slack dédié",
      "Formation sur site",
      "Audit & conseil",
      "Multi-tenancy avancé",
    ],
    "pricing.cta": "Commencer",
    "pricing.contact": "Contacter l'équipe commerciale",

    // Blog
    "blog.title": "Blog",
    "blog.subtitle":
      "Articles techniques, retours d'expérience et annonces.",
    "blog.comingSoon": "Les premiers articles arrivent bientôt. Restez connectés !",

    // About
    "about.title": "À propos",
    "about.subtitle": "Notre mission : démocratiser Kubernetes.",
    "about.vision.title": "Notre vision",
    "about.vision.desc":
      "Nous pensons que tout le monde devrait pouvoir déployer un cluster Kubernetes en quelques minutes, sur n'importe quelle infrastructure, sans expertise pointue. Deployme.cloud rend cela possible grâce à Talos Linux et une approche open-core.",
    "about.roadmap.title": "Feuille de route",
    "about.roadmap.items": [
      "2025 S1 — Phase 0 + Phase 1 (MVP → GA)",
      "2025 S2 — Phase 2 (Bare-metal) + Marketplace d'add-ons",
      "2026 S1 — Phase 3 (Incus/OpenStack) + Certification",
      "2026 S2 — Multi-cloud (AWS/GCP/Azure, cible optionnelle)",
    ],

    // Training
    "training.title": "Formation",
    "training.subtitle":
      "Apprenez Kubernetes avec Talos Linux — ressources gratuites et formations professionnelles.",
    "training.free.title": "Ressources gratuites",
    "training.free.items": [
      "Documentation complète",
      "Tutoriels vidéo",
      "Labs interactifs",
      "Parcours d'apprentissage progressifs",
    ],
    "training.pro.title": "Formation professionnelle",
    "training.pro.items": [
      "Sessions live mensuelles (plan Pro)",
      "Formation sur site (Enterprise)",
      "Programme certifiant Deployme",
    ],

    // Privacy
    "privacy.title": "Politique de confidentialité",
    "privacy.lastUpdated": "Dernière mise à jour : mars 2026",
    "privacy.intro": "Deployme.cloud s'engage à protéger votre vie privée. Cette politique décrit les données que nous collectons, comment nous les utilisons et vos droits.",
    "privacy.sections": [
      {
        "title": "Données collectées",
        "content": "Nous collectons uniquement les données nécessaires au fonctionnement de nos services : adresse email et nom lors de la création de compte, logs techniques (adresse IP, navigateur, horodatage) pour la sécurité et le diagnostic, et données d'utilisation pour améliorer notre plateforme."
      },
      {
        "title": "Utilisation des données",
        "content": "Vos données sont utilisées exclusivement pour : fournir et maintenir le service Deployme.cloud, communiquer avec vous concernant votre compte et nos services, assurer la sécurité de notre infrastructure, et respecter nos obligations légales."
      },
      {
        "title": "Partage des données",
        "content": "Nous ne vendons pas vos données personnelles. Nous pouvons partager des données avec des sous-traitants techniques (hébergement, email) strictement nécessaires au fonctionnement du service, et uniquement au sein de l'Espace Économique Européen ou avec des garanties adéquates."
      },
      {
        "title": "Conservation des données",
        "content": "Vos données sont conservées pendant la durée de votre compte. À la suppression de votre compte, vos données personnelles sont supprimées sous 30 jours, sauf données que nous sommes légalement tenus de conserver."
      },
      {
        "title": "Vos droits",
        "content": "Conformément à la réglementation applicable (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité et de limitation du traitement de vos données personnelles. Pour exercer ces droits, contactez-nous à privacy@deployme.cloud."
      },
      {
        "title": "Cookies",
        "content": "Nous utilisons uniquement des cookies strictement nécessaires (préférence de thème, session d'authentification). Nous n'utilisons pas de cookies publicitaires ni de traceurs tiers."
      },
      {
        "title": "Contact",
        "content": "Pour toute question relative à cette politique de confidentialité, vous pouvez nous contacter à privacy@deployme.cloud."
      }
    ],

    // Terms
    "terms.title": "Conditions d'utilisation",
    "terms.lastUpdated": "Dernière mise à jour : mars 2026",
    "terms.intro": "Les présentes conditions régissent votre utilisation de la plateforme Deployme.cloud. En utilisant nos services, vous acceptez ces conditions.",
    "terms.sections": [
      {
        "title": "Description du service",
        "content": "Deployme.cloud est une plateforme Kubernetes-as-a-Service permettant de provisionner et gérer des clusters Kubernetes basés sur Talos Linux sur diverses infrastructures (hébergement managé, VMware, Proxmox, bare-metal, Incus, OpenStack)."
      },
      {
        "title": "Création de compte",
        "content": "Pour utiliser nos services, vous devez créer un compte en fournissant des informations exactes et à jour. Vous êtes responsable de la confidentialité de vos identifiants et de toutes les activités sous votre compte."
      },
      {
        "title": "Offres et facturation",
        "content": "Deployme.cloud propose plusieurs offres : Community (gratuit, 20 h/mois de crédits hébergés), Pro (à partir de 49 €/mois) et Enterprise (tarification sur devis). Les offres payantes sont facturées mensuellement. Les tarifs peuvent être modifiés avec un préavis de 30 jours."
      },
      {
        "title": "Utilisation acceptable",
        "content": "Vous vous engagez à ne pas utiliser le service pour des activités illégales, diffuser du contenu malveillant, tenter de compromettre la sécurité de l'infrastructure, ou dépasser les limites d'utilisation raisonnable de votre offre."
      },
      {
        "title": "Disponibilité et SLA",
        "content": "Nous nous efforçons de maintenir une haute disponibilité de nos services. Des SLA spécifiques sont définis dans les offres Pro et Enterprise. L'offre Community est fournie en l'état, sans garantie de disponibilité."
      },
      {
        "title": "Propriété intellectuelle",
        "content": "Deployme.cloud et ses composants sont la propriété intellectuelle de Deployme.cloud. Les parties open-core de la plateforme sont disponibles sous leurs licences open-source respectives. Vos données et configurations restent votre propriété exclusive."
      },
      {
        "title": "Limitation de responsabilité",
        "content": "Deployme.cloud ne saurait être tenu responsable des dommages indirects, de la perte de données liée à une mauvaise utilisation, ou des interruptions indépendantes de notre volonté. Notre responsabilité totale est limitée aux montants versés au cours des 12 mois précédant l'incident."
      },
      {
        "title": "Résiliation",
        "content": "Vous pouvez clôturer votre compte à tout moment. Nous nous réservons le droit de suspendre ou résilier un compte en cas de violation de ces conditions, avec un préavis sauf en cas d'urgence."
      },
      {
        "title": "Droit applicable",
        "content": "Les présentes conditions sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents."
      },
      {
        "title": "Contact",
        "content": "Pour toute question relative à ces conditions, vous pouvez nous contacter à contact@deployme.cloud."
      }
    ],

    // Theme
    "theme.toggle": "Changer de thème",

    // Footer
    "footer.tagline":
      "Kubernetes sur n'importe quelle infrastructure, en quelques minutes.",
    "footer.product": "Produit",
    "footer.resources": "Ressources",
    "footer.company": "Entreprise",
    "footer.legal": "Mentions légales",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
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
