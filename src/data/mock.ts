export type Tone = string

export interface NavItem {
  label: string
  icon: string
  badge?: number
  active?: boolean
}

export interface CategoryChip {
  label: string
  tone: Tone
  kind?: 'circle' | 'square'
}

export interface DocRow {
  title: string
  subtitle: string
  tone: Tone
  tag?: string
  action?: 'Abrir' | 'Plus' | 'Avatars'
  avatars?: Tone[]
  thumbs?: boolean
  gradientCard?: boolean
}

export interface CommunityUser {
  name: string
  role: string
  initials: string
  tone: Tone
}

export const brand = {
  name: 'OBERLAST',
  baseline: 'Discover · Explore · Manage',
  paragraph:
    'La plataforma social para tus empleados que interactúan en un solo lugar, con herramientas para crecer.',
}

export const sidebarItems: NavItem[] = [
  { label: 'Explorar', icon: 'compass' },
  { label: 'Categorías', icon: 'grid' },
  { label: 'Tareas', icon: 'check' },
  { label: 'Traducciones', icon: 'languages' },
  { label: 'Recordatorios', icon: 'clock' },
  { label: 'Subtareas', icon: 'list' },
  { label: 'Colaboradores', icon: 'users' },
  { label: 'Notificaciones', icon: 'bell', badge: 3 },
  { label: 'Mensajes', icon: 'message', badge: 1 },
  { label: 'Plantillas', icon: 'template' },
  { label: 'Ajustes', icon: 'settings' },
  { label: 'Mis documentos', icon: 'folder', active: true },
  { label: 'Premium', icon: 'crown' },
]

export const headerUser = { name: 'Juan Carlos', initials: 'JC', tone: 'from-amber-300 to-amber-500' }

export const categories: CategoryChip[] = [
  { label: 'Favorites', tone: 'from-amber-300 to-amber-500' },
  { label: 'Tareas', tone: 'from-neutral-800 to-neutral-950' },
  { label: 'Planeación', tone: 'from-blue-400 to-blue-600' },
  { label: 'Recordatorios', tone: 'from-violet-400 to-violet-600' },
  { label: 'Proyectos', tone: 'from-emerald-400 to-emerald-600' },
  { label: 'Salarios', tone: 'from-rose-400 to-rose-600' },
  { label: 'Notas', tone: 'from-orange-400 to-orange-600' },
  { label: 'Metas', tone: 'from-teal-400 to-teal-600' },
  { label: 'Negocios', tone: 'from-fuchsia-400 to-fuchsia-600' },
  { label: 'Tareas', tone: 'from-slate-500 to-slate-700' },
]

export const docTabs = ['Documentos', 'Proyectos', 'Notas']

export const docRows: DocRow[] = [
  {
    title: 'Casa',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-amber-300 to-amber-500',
    action: 'Avatars',
    avatars: ['from-amber-400 to-amber-600', 'from-blue-400 to-blue-600'],
  },
  {
    title: 'Subtareas',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-neutral-800 to-neutral-950',
    action: 'Avatars',
    avatars: ['from-violet-400 to-violet-600', 'from-emerald-400 to-emerald-600', 'from-rose-400 to-rose-600'],
  },
  {
    title: 'Center',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-orange-400 to-orange-600',
    action: 'Avatars',
    avatars: ['from-blue-400 to-blue-600'],
  },
  {
    title: 'Center',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-rose-400 to-rose-600',
    tag: 'UTAH',
    action: 'Avatars',
    avatars: ['from-orange-400 to-orange-600'],
  },
  {
    title: 'Classroom',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-orange-300 to-amber-500',
    action: 'Avatars',
    avatars: ['from-emerald-400 to-emerald-600'],
  },
  {
    title: 'ChatGPT',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-neutral-800 to-neutral-950',
    action: 'Avatars',
    avatars: ['from-rose-400 to-rose-600'],
  },
  {
    title: 'Creative Assets',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-neutral-800 to-neutral-950',
    action: 'Avatars',
    avatars: ['from-emerald-400 to-emerald-600'],
  },
]

export const docRowsSecondary: DocRow[] = [
  {
    title: 'Cama',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-violet-500 to-blue-600',
    action: 'Abrir',
  },
  {
    title: 'Apple',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-orange-400 to-red-500',
    action: 'Abrir',
    thumbs: true,
  },
  {
    title: 'Interior',
    subtitle: 'Discover explore and share your knowledge on mobile',
    tone: 'from-neutral-700 to-neutral-950',
    action: 'Abrir',
  },
]

export const communityUsers: CommunityUser[] = [
  { name: 'Gustavo', role: 'Product Designer', initials: 'GU', tone: 'from-amber-300 to-amber-500' },
  { name: 'Naomi', role: 'Frontend Dev', initials: 'NA', tone: 'from-teal-400 to-teal-600' },
  { name: 'Apple', role: 'Illustrator', initials: 'AP', tone: 'from-blue-400 to-blue-600' },
  { name: 'Meta', role: 'Community Lead', initials: 'ME', tone: 'from-emerald-400 to-emerald-600' },
]

export const recommendations: CommunityUser[] = [
  { name: 'Gustavo', role: 'Product Designer', initials: 'GU', tone: 'from-amber-300 to-amber-500' },
  { name: 'Apple', role: 'Illustrator', initials: 'AP', tone: 'from-blue-400 to-blue-600' },
  { name: 'Naomi', role: 'Frontend Dev', initials: 'NA', tone: 'from-teal-400 to-teal-600' },
]

export const railProfile = {
  name: 'Riley Fadel',
  role: 'Desarrollador de Software',
  cover: 'from-[#6b4a8a] via-[#8a5a5a] to-amber-500',
  bio:
    'Hola, soy Riley. Me especializo en crear soluciones de software para empresas. Estoy comprometido con la calidad y la innovación en cada proyecto.',
}

export const earnings = {
  title: 'Ganancias mensuales',
  values: [38, 62, 45, 78, 55, 92, 70],
  labels: ['E', 'F', 'M', 'A', 'M', 'J', 'J'],
}

export const offers = [
  { title: 'Plan Premium', subtitle: '15 días gratis', tone: 'from-amber-300 to-amber-500' },
  { title: 'Plan Business', subtitle: 'Equipos ilimitados', tone: 'from-blue-400 to-blue-600' },
]

export const searchResults = [
  { title: 'Casa', meta: 'Documento · Plan A' },
  { title: 'Subtareas', meta: 'Documento · Plan A' },
  { title: 'ChatGPT', meta: 'Nota · Plan A' },
]

export const profileUser = {
  name: 'Ally Fadel',
  handle: '@allyfadel',
  initials: 'AF',
  tone: 'from-amber-300 to-amber-500',
  cover: 'from-[#f0a868] via-[#a4648a] to-[#3b2a4d]',
  bio: 'Diseñadora de producto. Me obsesiona la simplicidad, los sistemas de diseño y las interfaces que se sienten bien.',
  interests: ['Diseño', 'UI', 'Fotografía'],
  stats: [
    { label: 'Siguiendo', value: '3' },
    { label: 'Seguidores', value: '12' },
    { label: 'Publicaciones', value: '150' },
  ],
}

export const profileGrid = [
  { tone: 'from-violet-500 to-blue-600' },
  { tone: 'from-orange-400 to-red-500' },
  { tone: 'from-neutral-800 to-neutral-950' },
  { tone: 'from-amber-300 to-amber-500' },
  { tone: 'from-blue-500 to-indigo-800' },
  { tone: 'from-rose-500 to-purple-800' },
  { tone: 'from-emerald-400 to-teal-700' },
  { tone: 'from-slate-500 to-slate-800' },
]

export const mobileNav = [
  { id: 'inicio', label: 'Home', icon: 'home' },
  { id: 'tareas', label: 'Tareas', icon: 'check' },
  { id: 'explorar', label: 'Explorar', icon: 'compass' },
  { id: 'chat', label: 'Chat', icon: 'message' },
  { id: 'perfil', label: 'Perfil', icon: 'user' },
]
