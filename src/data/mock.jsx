/**
 * Données de la plateforme OBERLAST.
 * Les libellés proviennent de la transcription de la planche de référence.
 */

/**
 * @typedef {Object} Application
 * @property {string} id
 * @property {string} nom
 * @property {string} categorie
 * @property {string} handle
 * @property {number} note
 * @property {number} votes
 * @property {string} [croissance]
 * @property {string} [resume]
 */

/**
 * @typedef {Object} Categorie
 * @property {string} label
 * @property {string} icon
 * @property {number} applications
 */

/**
 * @typedef {Object} Publication
 * @property {string} id
 * @property {string} auteur
 * @property {string} handle
 * @property {string} anciennete
 * @property {string} texte
 * @property {number} likes
 * @property {number} commentaires
 * @property {Application} application
 */

/** Navigation principale de la barre latérale. */
export const navigation = [
  { id: 'accueil', label: 'Accueil', icon: 'home' },
  { id: 'explorer', label: 'Explorer', icon: 'compass' },
  { id: 'categories', label: 'Catégories', icon: 'grid' },
  { id: 'classements', label: 'Classements', icon: 'trophy' },
  { id: 'tendances', label: 'Tendances', icon: 'trending' },
  { id: 'recommandations', label: 'Recommandations', icon: 'sparkle' },
  { id: 'favoris', label: 'Favoris', icon: 'heart' },
  { id: 'collections', label: 'Collections', icon: 'layers' },
  { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 5 },
  { id: 'messagers', label: 'Messagers', icon: 'message', badge: 1 },
];

/** Section « Mon espace » de la barre latérale. */
export const compte = [
  { id: 'profil', label: 'Profil', icon: 'user' },
  { id: 'publications', label: 'Mes publications', icon: 'file' },
  { id: 'parametres', label: 'Paramètres', icon: 'settings' },
];

export const profil = {
  nom: 'AlexTech',
  handle: '@AlexTech',
  bio: 'Passionné de technologie, je partage les applications qui valent le détour.',
  publications: 128,
  abonnes: '2.4k',
  abonnements: 124,
};

/** @type {Application[]} */
export const tendances = [
  { id: 'capcut', nom: 'CapCut', categorie: 'Vidéo & création', handle: '@CapCut', note: 4.7, votes: 1204, croissance: '12%' },
  { id: 'chatgpt', nom: 'ChatGPT', categorie: 'IA & Productivité', handle: '@OpenAI', note: 4.8, votes: 2311, croissance: '9%' },
  { id: 'notion', nom: 'Notion', categorie: 'Productivité', handle: '@Notion', note: 4.8, votes: 1876, croissance: '9%' },
  { id: 'spotify', nom: 'Spotify', categorie: 'Musique & Audio', handle: '@Spotify', note: 4.5, votes: 980, croissance: '8%' },
  { id: 'chatgpt-premium', nom: 'ChatGPT Premium', categorie: 'Mises à jour', handle: '@OpenAI', note: 4.5, votes: 640, croissance: '8%' },
];

/** @type {Application[]} */
export const recommandees = [
  { id: 'midjourney', nom: 'Midjourney', categorie: 'IA & Image', handle: '@Midjourney', note: 4.9, votes: 1544, croissance: '9%' },
  { id: 'canva', nom: 'Canva', categorie: 'Design & création', handle: '@Canva', note: 4.5, votes: 980, croissance: '8%' },
  { id: 'figma', nom: 'Figma', categorie: 'Design & création', handle: '@Figma', note: 4.6, votes: 742, croissance: '6%' },
];

/** @type {Application[]} */
export const populaires = [
  { id: 'canva-pop', nom: 'Canva', categorie: 'Design & création', handle: '@Canva', note: 4.5, votes: 980 },
  { id: 'openai-pop', nom: 'OpenAI', categorie: 'IA & Productivité', handle: '@OpenAI', note: 4.8, votes: 2311 },
  { id: 'notion-pop', nom: 'Notion', categorie: 'Productivité', handle: '@Notion', note: 4.8, votes: 1876 },
  { id: 'capcut-pop', nom: 'CapCut', categorie: 'Vidéo & création', handle: '@CapCut', note: 4.7, votes: 1204 },
];

/** @type {Categorie[]} */
export const categoriesPopulaires = [
  { label: 'Jeux vidéo', icon: 'gamepad', applications: 128 },
  { label: 'Productivité', icon: 'briefcase', applications: 96 },
  { label: 'Management', icon: 'chart', applications: 74 },
  { label: 'Photographie', icon: 'camera', applications: 63 },
  { label: 'Création', icon: 'palette', applications: 58 },
  { label: 'Finances', icon: 'wallet', applications: 41 },
  { label: 'Voyage', icon: 'map', applications: 37 },
  { label: 'Design & Décoration', icon: 'sparkle', applications: 32 },
];

/** @type {Categorie[]} */
export const categoriesMobile = [
  { label: 'IA & Chatbot', icon: 'sparkle', applications: 64 },
  { label: 'Jeux', icon: 'gamepad', applications: 128 },
  { label: 'Musique', icon: 'music', applications: 52 },
  { label: 'Vidéo', icon: 'video', applications: 71 },
  { label: 'Photo', icon: 'camera', applications: 63 },
  { label: 'Sport', icon: 'trophy', applications: 29 },
  { label: 'Finance', icon: 'wallet', applications: 41 },
  { label: 'Management', icon: 'chart', applications: 74 },
  { label: 'Voyage', icon: 'map', applications: 37 },
  { label: 'Productivité', icon: 'briefcase', applications: 96 },
  { label: 'Création', icon: 'palette', applications: 58 },
  { label: 'Santé & Bien-être', icon: 'heart', applications: 24 },
  { label: 'Éducation', icon: 'book', applications: 31 },
  { label: 'Style', icon: 'sparkle', applications: 22 },
];

/** Onglets du flux « Plus des découvertes ». */
export const ongletsDecouverte = ['Populaires', 'Nouveautés', 'Tendances', 'Suivis'];

/** @type {Publication[]} */
export const publications = [
  {
    id: 'pub-1',
    auteur: 'LéaDesign',
    handle: '@LéaDesign',
    anciennete: '3 ans',
    texte:
      "J'ai découvert une pépite pour la création de vidéo ! Je m'inspire d'histoires alternatives comme celle-ci. CapCut simplifie le montage, les présentations et bien plus !",
    likes: 312,
    commentaires: 56,
    application: {
      id: 'canva',
      nom: 'Canva',
      categorie: 'Design & création',
      handle: '@Canva',
      note: 4.5,
      votes: 980,
      resume: "Choisissez des modèles, intégrez des présentations, des vidéos. Très facile à utiliser, idéal pour les réseaux sociaux.",
    },
  },
  {
    id: 'pub-2',
    auteur: 'TechNova',
    handle: '@TechNova',
    anciennete: '9 h',
    texte:
      "Les meilleures applications du moment, simplement. Je les découvre, je les note, je vous les partage.",
    likes: 298,
    commentaires: 41,
    application: {
      id: 'capcut-pub',
      nom: 'CapCut',
      categorie: 'Vidéo & création',
      handle: '@CapCut',
      note: 4.7,
      votes: 1204,
      resume: "Éditez vos vidéos en quelques gestes, avec des effets et des modèles prêts à l'emploi.",
    },
  },
];

/** Contenu de la colonne de droite. */
export const railDroit = {
  partage: {
    titre: 'Partagez vos découvertes !',
    texte: 'Déclinez une application, opinionnez-la, partagez vos découvertes.',
  },
  profilDeveloppe: {
    titre: 'Profil développé pour vous',
    application: { nom: 'OpenAI', handle: '@OpenAI' },
  },
  nouveautes: {
    texte: 'Nouveautés : des applications, pour toute la technologie, plus vite et plus accessible.',
  },
};

/** Libellés de l'écran d'accueil mobile. */
export const accueilMobile = {
  titre: 'Les meilleures applications du moment',
  action: 'Explorer →',
  section: 'Publications récentes',
  voirTout: 'Voir tout',
};

/** Onglets de l'écran « Explorer » mobile. */
export const ongletsExplorer = ['Catégories', 'Plateformes'];
