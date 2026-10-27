export interface Author {
  name: string
  role: string
  handle?: string
  verified?: 'amber' | 'blue'
  initials: string
  tone: string
}

export interface Media {
  tone: string
  kind?: 'gradient' | 'ui' | 'phone' | 'dark'
  label?: string
}

export interface Product {
  title: string
  subtitle: string
  body: string
  tone: string
  page?: string
  media: Media[]
}

export interface Post {
  id: string
  author: Author
  time: string
  text: string
  likes: number
  comments: number
  media?: Media[]
  extraMedia?: number
  product?: Product
}

export interface Category {
  id: string
  label: string
  count: string
  tone: string
}

export interface Recommendation {
  name: string
  role: string
  initials: string
  tone: string
}

export const currentUser = {
  name: 'Emma S.',
  role: 'Diseñadora de producto',
  initials: 'ES',
  tone: 'from-amber-300 to-amber-500',
}

export const categories: Category[] = [
  { id: 'todas', label: 'Todas las colecciones', count: '2.4K', tone: 'from-teal-400 to-teal-600' },
  { id: 'tecnologia', label: 'Tecnología', count: '1.2K', tone: 'from-teal-400 to-teal-600' },
  { id: 'productividad', label: 'Productividad', count: '500', tone: 'from-amber-400 to-amber-600' },
  { id: 'diseno', label: 'Diseño', count: '280', tone: 'from-rose-400 to-rose-600' },
  { id: 'desarrollo', label: 'Desarrollo', count: '640', tone: 'from-blue-400 to-blue-600' },
  { id: 'ia', label: 'IA', count: '150', tone: 'from-violet-400 to-violet-600' },
  { id: 'negocios', label: 'Negocios', count: '310', tone: 'from-emerald-400 to-emerald-600' },
  { id: 'finanzas', label: 'Finanzas', count: '220', tone: 'from-sky-400 to-sky-600' },
  { id: 'trabajo', label: 'Trabajo', count: '190', tone: 'from-orange-400 to-orange-600' },
  { id: 'estilo', label: 'Estilo de vida', count: '410', tone: 'from-fuchsia-400 to-fuchsia-600' },
]

export const chipLabels = [
  'Todas las colecciones',
  'Tecnología',
  'Productividad',
  'Diseño',
  'Desarrollo',
  'IA',
  'Negocios',
  'Finanzas',
  'Trabajo',
  'Estilo de vida',
]

export const authors: Record<string, Author> = {
  joaquin: {
    name: 'Joaquín',
    role: 'Desarrollador Frontend',
    verified: 'blue',
    initials: 'JQ',
    tone: 'from-indigo-400 to-indigo-600',
  },
  labgroup: {
    name: 'LabGroup',
    role: 'Grupo de investigación',
    verified: 'amber',
    initials: 'LG',
    tone: 'from-emerald-400 to-emerald-600',
  },
  shopbot: {
    name: 'ShopBot',
    role: 'Asistente de IA',
    initials: 'SB',
    tone: 'from-amber-400 to-amber-600',
  },
  vega: {
    name: 'Vega',
    role: 'Laboratorios',
    initials: 'VG',
    tone: 'from-emerald-400 to-emerald-600',
  },
  eris: {
    name: 'Eris',
    role: 'Escultor',
    initials: 'ER',
    tone: 'from-rose-400 to-rose-600',
  },
  zaize: {
    name: 'Zaize',
    role: 'Escultor',
    initials: 'ZA',
    tone: 'from-blue-400 to-blue-600',
  },
  jose: {
    name: 'José Patch',
    role: 'Desarrollador Frontend',
    verified: 'amber',
    initials: 'JP',
    tone: 'from-amber-300 to-amber-500',
  },
  tu: {
    name: 'Tú',
    role: 'Perfil personal',
    initials: 'TU',
    tone: 'from-brand-400 to-brand-600',
  },
}

export const posts: Post[] = [
  {
    id: 'p1',
    author: authors.joaquin,
    time: 'hace 2 h',
    text:
      '👋 Equipo, ya está listo el nuevo sistema de diseño. Todos los tokens, componentes y documentación viven ahora en un solo lugar. ¿Qué opinan? @labgroup @shopbot 💡',
    likes: 21,
    comments: 24,
    media: [
      { tone: 'from-violet-500 via-fuchsia-500 to-amber-300', kind: 'gradient' },
      { tone: 'from-slate-700 to-slate-900', kind: 'ui' },
      { tone: 'from-indigo-600 to-blue-900', kind: 'ui' },
      { tone: 'from-neutral-800 to-neutral-950', kind: 'dark' },
    ],
    extraMedia: 8,
  },
  {
    id: 'p2',
    author: authors.labgroup,
    time: '3 d',
    text:
      '🔬 Investigamos cómo el usuario real se conecta con nuestras herramientas. Los hallazgos: menos fricción, más contexto y un onboarding que no asusta. 🧪',
    likes: 48,
    comments: 12,
    media: [
      { tone: 'from-teal-500 to-emerald-900', kind: 'gradient' },
      { tone: 'from-neutral-900 to-black', kind: 'dark' },
      { tone: 'from-amber-500 to-orange-700', kind: 'gradient' },
      { tone: 'from-slate-800 to-slate-950', kind: 'ui' },
      { tone: 'from-fuchsia-600 to-purple-950', kind: 'gradient' },
    ],
    extraMedia: 15,
  },
  {
    id: 'p3',
    author: authors.shopbot,
    time: '5 h',
    text:
      '💡 5 formas de automatizar tu flujo creativo sin salir de tus herramientas favoritas. Guarda este post para consultarlo más tarde 👀',
    likes: 33,
    comments: 9,
    media: [
      { tone: 'from-amber-400 to-amber-700', kind: 'phone', label: 'ORBIT' },
      { tone: 'from-slate-900 to-black', kind: 'dark' },
      { tone: 'from-blue-600 to-indigo-900', kind: 'ui' },
      { tone: 'from-rose-600 to-purple-900', kind: 'gradient' },
    ],
    extraMedia: 4,
  },
  {
    id: 'p4',
    author: authors.joaquin,
    time: 'ayer',
    text:
      '🚀 Publicamos el caso de estudio completo: cómo reescribimos el checkout y multiplicamos la conversión.',
    likes: 76,
    comments: 31,
    product: {
      title: 'Casos',
      subtitle: 'Pruebas de usabilidad',
      body:
        'Exploramos cómo el usuario real se conecta. Kaspar, nuestro equipo de diseño, quiere escuchar sus ideas sobre cómo mejorar la experiencia.',
      tone: 'from-[#7C3AED] to-[#A855F7]',
      page: '1 / 5',
      media: [
        { tone: 'from-violet-600 to-fuchsia-800', kind: 'gradient' },
        { tone: 'from-neutral-900 to-black', kind: 'dark' },
        { tone: 'from-slate-800 to-slate-950', kind: 'ui' },
        { tone: 'from-amber-500 to-amber-800', kind: 'gradient' },
      ],
    },
  },
  {
    id: 'p5',
    author: authors.vega,
    time: 'hace 6 h',
    text:
      'Estoy coleccionando referencias de tipografía experimental para el próximo drop. 🔥 ¿Qué serif geométrica están salvando?',
    likes: 18,
    comments: 7,
    media: [
      { tone: 'from-stone-600 to-stone-900', kind: 'gradient' },
      { tone: 'from-neutral-800 to-black', kind: 'dark' },
      { tone: 'from-emerald-700 to-teal-900', kind: 'gradient' },
      { tone: 'from-blue-800 to-indigo-950', kind: 'ui' },
    ],
    extraMedia: 2,
  },
]

export const exploreItems = [
  { title: 'Diseño de producto', subtitle: '12.4K recursos', tone: 'from-amber-400 to-amber-600' },
  { title: 'Frontend y UI', subtitle: '8.9K recursos', tone: 'from-teal-400 to-teal-600' },
  { title: 'Inteligencia artificial', subtitle: '6.1K recursos', tone: 'from-violet-400 to-violet-600' },
  { title: 'Emprendimiento', subtitle: '4.2K recursos', tone: 'from-rose-400 to-rose-600' },
  { title: 'Fotografía y cine', subtitle: '3.7K recursos', tone: 'from-blue-400 to-blue-600' },
  { title: 'Música y sonido', subtitle: '2.9K recursos', tone: 'from-emerald-400 to-emerald-600' },
]

export const recommendations: Recommendation[] = [authors.vega, authors.eris, authors.tu]

export const profilePosts = [
  { tone: 'from-violet-500 via-fuchsia-500 to-amber-300', label: 'ORBIT' },
  { tone: 'from-slate-700 to-slate-900' },
  { tone: 'from-teal-500 to-emerald-900' },
  { tone: 'from-neutral-900 to-black' },
  { tone: 'from-amber-500 to-orange-700' },
  { tone: 'from-blue-600 to-indigo-900' },
  { tone: 'from-rose-600 to-purple-900' },
  { tone: 'from-fuchsia-600 to-purple-950' },
]
