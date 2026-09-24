# Kodafrik — site vitrine

Site vitrine de Kodafrik : agence de solutions informatiques (applications web,
applications mobiles, logiciels métier sur mesure).

Stack : **React 19 + Vite**, CSS natif (aucune librairie UI, aucune dépendance
supplémentaire).

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
npm run lint
```

## Structure

```
public/
  favicon.png            # pictogramme détouré (onglet navigateur)
  og-kodafrik.png        # image de partage réseaux sociaux
src/
  assets/photo/
    logo.png             # logo original fourni (fond blanc, 1254px)
    pictogramme.png      # pictogramme original fourni
    logo-web.png         # version détourée + optimisée utilisée par le site
    pictogramme-web.png  # idem pour le pictogramme
    hero1.png            # illustration hero d'origine → hero-web.jpg
    Projet-*.png         # visuels clients d'origine → projet-*.jpg (recadrés)
    *-Logo.jpeg          # logos clients d'origine → logo-*.png (détourés)
  components/            # une section = un composant + son fichier CSS
    Header / Hero / Services / Expertise / Process / Projects /
    WhyUs / CtaBand / Faq / Trust / Contact / Footer /
    FloatingContact / Wave / Counter / ScrollToTop / Icon
  pages/
    Home.jsx             # la page d'accueil : toutes les sections
    Realisations.jsx     # fiche détaillée de chaque projet (/realisations)
  data/site.js           # TOUT le contenu éditorial du site
  hooks/                 # apparition au scroll, section active dans le menu
  index.css              # design system : couleurs, typo, boutons, cartes
  App.jsx                # en-tête, pied de page et routes
```

## Modifier le contenu

Tout le texte affiché (services, réalisations, méthode, FAQ, témoignages,
coordonnées…) est centralisé dans **`src/data/site.js`**. Aucun texte n'est à
chercher dans les composants.

À remplacer avant la mise en ligne :

- `company` : e-mail, téléphone, numéro WhatsApp, adresse, liens réseaux sociaux
- `stats` et `testimonials` : à ajuster avec vos chiffres et retours réels
- `projects` : les trois applications clientes (SIGNS, Fait Maison, Yobante
  Boutique) — vérifier les technologies listées et compléter au fil des projets

## Couleurs

Reprises du logo, définies en variables CSS dans `src/index.css` :

| Rôle            | Variable      | Valeur    |
| --------------- | ------------- | --------- |
| Navy principal  | `--navy-900`  | `#0B1533` |
| Navy logo       | `--navy-800`  | `#101F45` |
| Bleu de marque  | `--blue-500`  | `#1B6EF3` |
| Bleu clair      | `--blue-400`  | `#4B8DFF` |
| Fond alternatif | `--blue-50`   | `#F2F6FF` |

## Formulaire de contact

Les demandes de devis arrivent sur **contact@kodafrik.com**.

Le site est 100 % statique, l'envoi passe donc par un service externe, choisi
via les variables d'environnement (voir `.env.example`) :

| `VITE_CONTACT_ENDPOINT` | Comportement du formulaire |
| --- | --- |
| vide | Ouvre le client mail du visiteur avec la demande pré-rédigée. Le visiteur doit cliquer sur « Envoyer » dans sa messagerie. |
| renseigné | Envoi direct en arrière-plan, confirmation affichée, repli explicite sur l'e-mail en cas d'échec. |

Mise en place recommandée, sans compte ni serveur — [Web3Forms](https://web3forms.com) :

1. Créer une clé d'accès avec l'adresse `contact@kodafrik.com` ;
2. Renseigner chez l'hébergeur :
   `VITE_CONTACT_ENDPOINT=https://api.web3forms.com/submit`
   et `VITE_CONTACT_ACCESS_KEY=<la clé reçue>` ;
3. Relancer le build.

Formspree fonctionne aussi : `VITE_CONTACT_ENDPOINT=https://formspree.io/f/<id>`,
sans clé d'accès.

## Déploiement

`npm run build` produit un dossier `dist/` statique, déployable tel quel sur
Netlify, Vercel, Cloudflare Pages, Render ou un hébergement classique.

Le site a deux URL (`/` et `/realisations`) gérées côté navigateur : le serveur
doit renvoyer `index.html` pour toute URL inconnue, sinon un accès direct à
`/realisations` donne une 404. C'est déjà configuré pour Netlify et Cloudflare
Pages (`public/_redirects`) et pour Vercel (`vercel.json`). Sur Apache, ajouter
un `.htaccess` ; sur Nginx, `try_files $uri /index.html`.

### Avant la première mise en ligne

- [ ] Renseigner `VITE_CONTACT_ENDPOINT` (voir plus haut) — sinon le formulaire
      n'envoie rien automatiquement
- [ ] Vérifier le domaine : il est écrit en dur dans `index.html`
      (`canonical`, `og:url`, `og:image`), `public/robots.txt` et
      `public/sitemap.xml`. Remplacer `kodafrik.com` si le domaine diffère
- [ ] Renseigner les comptes réseaux sociaux dans `company.socials`
      (`src/data/site.js`) — les entrées vides ne s'affichent pas
- [ ] Ajouter les pages **Mentions légales** et **Politique de
      confidentialité** (raison sociale, RCCM/NINEA, siège, hébergeur) ;
      les liens ont été retirés du pied de page en attendant
- [ ] Ajuster `stats` et `testimonials` avec vos vrais chiffres
