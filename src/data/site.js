// Contenu éditorial du site vitrine Kodafrik.
// Tout le texte affiché est centralisé ici : modifier ce fichier suffit
// pour mettre le site à jour, sans toucher aux composants.

import logoFaitMaison from '../assets/photo/logo-fait-maison.png'
import logoSigns from '../assets/photo/logo-signs.png'
import logoYobante from '../assets/photo/logo-yobante.png'
import presentationFaitMaison from '../assets/photo/presentation-fait-maison.jpg'
import presentationSigns from '../assets/photo/presentation-signs.jpg'
import presentationYobante from '../assets/photo/presentation-yobante.jpg'
import visuelFaitMaison from '../assets/photo/projet-fait-maison.jpg'
import visuelSigns from '../assets/photo/projet-signs.jpg'
import visuelYobante from '../assets/photo/projet-yobante.jpg'

export const company = {
  name: 'Kodafrik',
  baseline: 'Solutions informatiques, web & mobile',
  // Adresse qui reçoit les demandes de devis.
  email: 'contact@kodafrik.com',
  phone: '+221 77 592 93 90',
  phoneHref: '+221775929390',
  whatsapp: '221775929390',
  address: 'Dakar, Sénégal',
  hours: 'Lun – Ven, 9h – 18h',
  // Renseigner l'URL de chaque compte pour le faire apparaître dans le pied
  // de page ; une entrée laissée vide n'est pas affichée.
  socials: [
    { label: 'LinkedIn', href: '', icon: 'linkedin' },
    { label: 'Facebook', href: '', icon: 'facebook' },
    { label: 'Instagram', href: '', icon: 'instagram' },
    { label: 'GitHub', href: '', icon: 'github' },
  ],
}

// Le site est statique : sans endpoint configuré, le formulaire bascule sur
// le client mail du visiteur. Voir .env.example.
export const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT ?? ''
export const contactAccessKey = import.meta.env.VITE_CONTACT_ACCESS_KEY ?? ''
export const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://kodafrik.com'

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Méthode', href: '#methode' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'Agence digitale — web, mobile & sur mesure',
  title: 'Nous transformons vos idées en produits digitaux qui tournent.',
  subtitle:
    "Kodafrik conçoit et développe des applications web, des applications mobiles et des logiciels métier sur mesure. Nous prenons votre projet du cadrage jusqu'à la mise en production — et nous restons à vos côtés après le lancement.",
  primaryCta: { label: 'Démarrer mon projet', href: '#contact' },
  secondaryCta: { label: 'Voir nos réalisations', href: '#realisations' },
  highlights: [
    'Devis sous 48h',
    'Livraisons toutes les 2 semaines',
    'Maintenance incluse 3 mois',
  ],
}

// `to` déclenche le compteur animé ; `value` affiche un texte figé.
export const stats = [
  { to: 6, label: 'projets livrés' },
  { to: 48, suffix: 'h', label: 'pour un devis' },
  { to: 7, label: 'jours pour démarrer' },
  { value: '24/7', label: 'supervision & support' },
]

export const services = [
  {
    icon: 'browser',
    title: 'Applications web',
    text: "Sites vitrines, plateformes SaaS, espaces clients, back-offices et e-commerce. Des interfaces rapides, responsives et pensées pour convertir.",
    items: ['Site vitrine & landing', 'Plateforme SaaS', 'E-commerce', 'Back-office métier'],
  },
  {
    icon: 'mobile',
    title: 'Applications mobiles',
    text: "Des apps iOS et Android natives ou cross-platform, du prototype au déploiement sur les stores, avec notifications, paiement et mode hors ligne.",
    items: ['Flutter / React Native', 'Publication sur les stores', 'Paiement mobile', 'Notifications push'],
  },
  {
    icon: 'code',
    title: 'Logiciels sur mesure',
    text: "Votre métier a ses règles : nous développons l'outil qui les respecte. Gestion, facturation, stock, RH, reporting — construits autour de vos process.",
    items: ['ERP & CRM', 'Gestion de stock', 'Facturation', 'Tableaux de bord'],
  },
  {
    icon: 'design',
    title: 'Design UI/UX',
    text: "Parcours utilisateurs, maquettes interactives et design system. Un produit beau, cohérent et surtout compris par vos utilisateurs dès la première visite.",
    items: ['Audit UX', 'Maquettes Figma', 'Design system', 'Identité digitale'],
  },
  {
    icon: 'cloud',
    title: 'Cloud, API & intégrations',
    text: "Hébergement, déploiement continu, sécurisation et connexion de vos outils existants : paiement, ERP, SMS, comptabilité, services tiers.",
    items: ['API REST & GraphQL', 'CI/CD & hébergement', 'Passerelles de paiement', 'Migration de données'],
  },
  {
    icon: 'support',
    title: 'Maintenance & support',
    text: "Un produit vit après le lancement. Correctifs, évolutions, supervision et mises à jour de sécurité : votre solution reste performante dans la durée.",
    items: ['Supervision & alertes', 'Évolutions continues', 'Sauvegardes', 'Formation des équipes'],
  },
]

export const expertise = {
  eyebrow: 'Votre projet, notre équipe',
  title: 'Vous avez le projet. Nous avons l’équipe pour le construire.',
  text: "Startup qui lance son produit, PME qui digitalise ses process, agence qui a besoin de renfort technique : nous prenons le développement en charge de bout en bout, ou nous venons compléter votre équipe existante.",
  bullets: [
    {
      title: 'Prise en charge complète',
      text: "Cadrage, design, développement, tests, mise en ligne. Un seul interlocuteur, un planning clair, des livraisons toutes les deux semaines.",
    },
    {
      title: 'Équipe dédiée en renfort',
      text: "Développeurs web, mobile et DevOps intégrés à votre organisation, à temps plein ou partiel, pour accélérer votre roadmap.",
    },
    {
      title: 'Reprise de projet existant',
      text: "Code hérité, projet abandonné ou application à refondre : nous auditons, reprenons la main et remettons le produit sur les rails.",
    },
  ],

}

export const process = [
  {
    step: '01',
    title: 'Écoute & cadrage',
    text: "On part de votre besoin réel, pas d'une liste de fonctionnalités. Objectifs, utilisateurs, budget, délais : tout est posé noir sur blanc.",
  },
  {
    step: '02',
    title: 'Design & prototype',
    text: "Maquettes cliquables validées avant la première ligne de code. Vous voyez le produit avant de le payer.",
  },
  {
    step: '03',
    title: 'Développement itératif',
    text: "Des livraisons régulières que vous testez au fur et à mesure. Pas d'effet tunnel, pas de mauvaise surprise à la fin.",
  },
  {
    step: '04',
    title: 'Tests & mise en ligne',
    text: "Recette, sécurité, performance, déploiement et formation de vos équipes. Le produit part en production serein.",
  },
  {
    step: '05',
    title: 'Suivi & évolution',
    text: "Supervision, correctifs et nouvelles fonctionnalités. Votre solution grandit au rythme de votre activité.",
  },
]

// Applications livrées pour nos clients.
export const projects = [
  {
    slug: 'signs',
    platform: 'iOS & Android',
    short: "Rédiger, signer et transmettre un document officiel depuis son téléphone.",
    name: 'SIGNS',
    tagline: 'Digitalisez vos documents, en toute simplicité.',
    tag: 'Application mobile · Legal tech',
    text: "Application de signature électronique et de gestion documentaire : l'utilisateur rédige, signe et transmet ses documents officiels depuis son téléphone, sans imprimante ni déplacement.",
    features: [
      'Contrats, baux et quittances à partir de modèles conformes',
      'Factures générées et envoyées en un geste',
      'Signature électronique datée et horodatée',
      'Documents privés, stockés et chiffrés côté serveur',
    ],
    tech: ['iOS & Android', 'Node.js', 'PostgreSQL', 'Stockage objet'],
    challenge:
      "Les documents officiels — contrats, baux, quittances — circulent encore en papier, ou en PDF imprimés, signés à la main puis rescannés. L'enjeu était de permettre de rédiger, signer et transmettre un document conforme depuis un téléphone, en quelques minutes.",
    delivered: [
      'Application mobile iOS et Android',
      'Modèles de documents conformes et pré-remplis',
      'Signature électronique datée et horodatée',
      'Génération des PDF et partage sécurisé',
      'API, base de données et hébergement',
    ],
    presentation: presentationSigns,
    image: visuelSigns,
    logo: logoSigns,
    logoWidth: 247,
    logoHeight: 96,
  },
  {
    slug: 'fait-maison',
    platform: 'iOS & Android',
    short: "Commander des plats préparés, du catalogue jusqu'au suivi de la livraison.",
    name: 'Fait Maison',
    tagline: 'Des plats faits avec amour, livrés chez vous.',
    tag: 'Application mobile · Commande de repas',
    text: "Application de commande de repas préparés : catalogue par catégories, fiches plats détaillées, panier et suivi des commandes, avec un back-office pour la gestion du menu et des livraisons.",
    features: [
      'Catalogue par catégories : plats, desserts, boissons',
      'Fiche plat avec ingrédients, quantité et avis',
      'Panier, commande et historique client',
      'Back-office de gestion du menu et des commandes',
    ],
    tech: ['Flutter', 'Node.js', 'PostgreSQL', 'API REST'],
    challenge:
      "Les commandes arrivaient par appels et messages : erreurs de saisie, plats indisponibles annoncés trop tard, aucun historique exploitable. Il fallait un canal de commande propre, un catalogue toujours à jour et une vue claire sur les commandes en cours.",
    delivered: [
      'Application mobile iOS et Android',
      'Catalogue et fiches plats administrables',
      'Panier, commande et historique client',
      'Back-office de gestion du menu et des commandes',
    ],
    presentation: presentationFaitMaison,
    image: visuelFaitMaison,
    logo: logoFaitMaison,
    logoWidth: 95,
    logoHeight: 96,
  },
  {
    slug: 'yobante-boutique',
    platform: 'iOS & Android',
    short: "Une boutique en ligne complète, du catalogue multi-rayons au paiement.",
    name: 'Yobante Boutique',
    tagline: 'Vos produits préférés, livrés chez vous.',
    tag: 'Application mobile · E-commerce',
    text: "Place de marché mobile multi-catégories : mode, beauté, électroménager, frais et surgelés. Navigation libre, connexion au moment de commander, campagnes promotionnelles pilotées depuis le tableau de bord.",
    features: [
      'Catalogue multi-catégories et recherche filtrée',
      'Bannières et promotions saisonnières pilotées à distance',
      'Panier, favoris et suivi de commande',
      'Livraison et points relais partout au Sénégal',
    ],
    tech: ['Flutter', 'Node.js', 'PostgreSQL', 'Tableau de bord web'],
    challenge:
      "Donner à la boutique une vitrine mobile capable de tenir des campagnes saisonnières, avec un catalogue large et un parcours d'achat qui ne perd pas le client avant le paiement : navigation libre, création de compte seulement au moment de commander.",
    delivered: [
      'Application mobile iOS et Android',
      'Catalogue multi-catégories et recherche filtrée',
      'Bannières et promotions pilotées à distance',
      'Panier, favoris et suivi de commande',
      "Tableau de bord web pour l'équipe boutique",
    ],
    presentation: presentationYobante,
    image: visuelYobante,
    logo: logoYobante,
    logoWidth: 80,
    logoHeight: 96,
  },
]

export const advantages = [
  {
    icon: 'target',
    title: 'Un prix clair, dès le départ',
    text: "Devis détaillé, périmètre écrit, pas de coûts cachés en cours de route. Vous savez ce que vous payez et pourquoi.",
  },
  {
    icon: 'bolt',
    title: 'Des délais tenus',
    text: "Un planning avec des jalons réels et un point d'avancement chaque semaine. Vous n'avez jamais à demander où ça en est.",
  },
  {
    icon: 'shield',
    title: 'Vos données protégées',
    text: "Hébergement sécurisé, sauvegardes régulières, accès contrôlés et mises à jour de sécurité suivies. Vos données et celles de vos clients restent à l'abri.",
  },
  {
    icon: 'users',
    title: 'Des interlocuteurs proches',
    text: "Une équipe qui connaît votre contexte : contraintes réseau, moyens de paiement locaux, usages mobiles, langues.",
  },
]

// Conservé au cas où vous voudriez remettre une section témoignages :
// la section « Ils nous font confiance » l'a remplacée sur la page.
export const testimonials = [
  {
    quote:
      "Ils ont repris un projet que nous avions abandonné depuis un an et l'ont mis en production en deux mois. Sérieux, disponibles et honnêtes sur ce qui était faisable.",
    author: 'Directrice générale',
    role: 'Entreprise de distribution',
  },
  {
    quote:
      "L'application mobile a changé notre relation client. On reçoit les commandes directement, sans appel téléphonique et sans erreur de saisie.",
    author: 'Fondateur',
    role: 'Commerce alimentaire',
  },
  {
    quote:
      "Ce qui nous a convaincus : le devis clair et les livraisons toutes les deux semaines. On voyait le produit avancer pour de vrai.",
    author: 'Responsable digital',
    role: 'Groupe de services',
  },
]

export const faq = [
  {
    q: 'Combien coûte un projet chez Kodafrik ?',
    a: "Le prix dépend du périmètre. Un site vitrine, une application mobile et un logiciel métier n'ont pas le même volume de travail. Après un premier échange gratuit, nous vous remettons un devis détaillé sous 48h, avec un prix ferme et un périmètre écrit.",
  },
  {
    q: 'Quels sont les délais de réalisation ?',
    a: "Comptez 2 à 4 semaines pour un site vitrine, 6 à 12 semaines pour une application web ou mobile complète. Nous démarrons généralement sous 7 jours après validation du devis.",
  },
  {
    q: 'Je n’ai pas de cahier des charges, est-ce un problème ?',
    a: "Non, c'est même fréquent. Notre phase de cadrage sert exactement à ça : nous traduisons votre besoin en spécifications claires, en maquettes et en budget avant de coder quoi que ce soit.",
  },
  {
    q: 'Pouvez-vous reprendre une application déjà existante ?',
    a: "Oui. Nous auditons le code et l'infrastructure existants, identifions les risques, puis nous vous proposons soit une reprise progressive, soit une refonte ciblée. Vous gardez la main sur la décision.",
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: "Nous assurons 3 mois de maintenance corrective incluse. Au-delà, un contrat de support mensuel couvre la supervision, les mises à jour de sécurité et les évolutions fonctionnelles.",
  },
  {
    q: 'Par où commence-t-on ?',
    a: "Par un échange de trente minutes, gratuit et sans engagement : vous décrivez votre besoin, nous posons les questions qui manquent. Vous recevez ensuite un devis détaillé sous 48h, avec le périmètre écrit et le calendrier.",
  },
]

export const projectTypes = [
  'Site vitrine',
  'Application web / SaaS',
  'Application mobile',
  'E-commerce',
  'Logiciel métier sur mesure',
  'Refonte / reprise de projet',
  'Autre',
]

export const budgets = [
  'Moins de 500 000 FCFA',
  '500 000 – 1 500 000 FCFA',
  '1 500 000 – 5 000 000 FCFA',
  'Plus de 5 000 000 FCFA',
  'À définir ensemble',
]
