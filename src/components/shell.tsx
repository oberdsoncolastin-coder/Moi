import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Bell,
  CheckSquare,
  Clock,
  Compass,
  Crown,
  Folder,
  Grid3x3,
  Languages,
  LayoutTemplate,
  ListTree,
  MessageCircle,
  Search,
  Settings,
  Users,
} from 'lucide-react'
import {
  communityUsers,
  earnings,
  headerUser,
  offers,
  railProfile,
  recommendations,
  searchResults,
  sidebarItems,
} from '../data/mock'
import { useApp } from '../store'
import { AmberButton, Avatar, HexMark, Logo, Thumb } from './ui'

const iconMap = {
  compass: Compass,
  grid: Grid3x3,
  check: CheckSquare,
  languages: Languages,
  clock: Clock,
  list: ListTree,
  users: Users,
  bell: Bell,
  message: MessageCircle,
  template: LayoutTemplate,
  settings: Settings,
  folder: Folder,
  crown: Crown,
} as const

const sidebarPaths = [
  '/',
  '/categorias',
  '/tareas',
  '/traducciones',
  '/recordatorios',
  '/subtareas',
  '/colaboradores',
  '/notificaciones',
  '/mensajes',
  '/plantillas',
  '/ajustes',
  '/mis-documentos',
  '/premium',
]

export function Header() {
  const navigate = useNavigate()
  const { notify } = useApp()
  const [query, setQuery] = useState('')

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-line bg-white px-5">
      <Logo size="sm" />
      <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-muted lg:inline">
        Layers
      </span>

      <div className="mx-auto flex w-full max-w-[360px] items-center gap-2 rounded-full border border-line bg-[#F7F7F8] px-3 py-1.5">
        <Search size={14} className="text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar documentos…"
          className="w-full bg-transparent text-[12px] text-ink placeholder:text-muted focus:outline-none"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button onClick={() => navigate('/notificaciones')} className="relative text-ink">
          <Bell size={17} />
          <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-danger" />
        </button>
        <button onClick={() => navigate('/mensajes')} className="text-ink">
          <MessageCircle size={17} />
        </button>
        <div className="flex items-center gap-2 border-l border-line pl-4">
          <Avatar initials={headerUser.initials} tone={headerUser.tone} size={28} />
          <span className="text-[12px] font-semibold text-ink">{headerUser.name}</span>
        </div>
        <button
          onClick={() => notify('Suscripción premium')}
          className="rounded-full bg-amber px-3 py-1.5 text-[11px] font-bold text-ink"
        >
          PRO
        </button>
      </div>
    </header>
  )
}

export function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState(() => Math.max(0, sidebarPaths.indexOf(location.pathname)))
  const { following, toggleFollow, notify } = useApp()

  return (
    <aside className="sticky top-14 flex h-[calc(100vh-3.5rem)] w-[236px] shrink-0 flex-col border-r border-line bg-white px-3 py-4">
      <div className="flex items-center gap-2 px-2">
        <HexMark size={26} tone="light" />
        <div className="leading-tight">
          <p className="text-[13px] font-black tracking-[0.16em] text-ink">OBERLAST</p>
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-muted">
            Workspace
          </p>
        </div>
      </div>

      <nav className="mt-4 flex-1 overflow-y-auto pr-1">
        {sidebarItems.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap]
          const isActive = index === active
          return (
            <button
              key={item.label}
              onClick={() => {
                setActive(index)
                navigate(sidebarPaths[index])
              }}
              className={`relative flex w-full items-center gap-2.5 rounded-[9px] px-2.5 py-[7px] text-left text-[12px] font-medium transition-colors ${
                isActive ? 'bg-[#F5F5F6] text-ink' : 'text-[#6B7280] hover:bg-[#FAFAFB]'
              }`}
            >
              {isActive && <span className="absolute -left-3 top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-r bg-ink" />}
              <Icon size={15} strokeWidth={isActive ? 2.2 : 1.7} />
              <span className="flex-1 truncate">{item.label}</span>
              {item.badge && (
                <span className="grid h-[15px] min-w-[15px] place-items-center rounded-full bg-danger px-1 text-[9px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}

        <div className="my-3 border-t border-line" />
        <button
          onClick={() => navigate('/perfil')}
          className="flex w-full items-center gap-2.5 rounded-[9px] px-2.5 py-[7px] text-left text-[12px] font-medium text-[#6B7280] hover:bg-[#FAFAFB]"
        >
          <Users size={15} strokeWidth={1.7} />
          Perfil
        </button>
        <button
          onClick={() => navigate('/ajustes')}
          className="flex w-full items-center gap-2.5 rounded-[9px] px-2.5 py-[7px] text-left text-[12px] font-medium text-[#6B7280] hover:bg-[#FAFAFB]"
        >
          <Settings size={15} strokeWidth={1.7} />
          Ajustes
        </button>
      </nav>

      <div className="mt-3 rounded-[12px] bg-night-950 p-3.5">
        <p className="text-[13px] font-bold text-amber">Únete a OBERLAST</p>
        <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
          Obtén 15 días gratis y desbloquea todo el ecosistema.
        </p>
        <button
          onClick={() => notify('Prueba gratis activada')}
          className="mt-3 w-full rounded-full bg-amber py-2 text-[11.5px] font-extrabold text-ink"
        >
          Empezar ahora
        </button>
      </div>
    </aside>
  )
}

function RailCard({
  title,
  action,
  children,
}: {
  title: string
  action?: string
  children: React.ReactNode
}) {
  return (
    <section className="border-b border-line px-4 py-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[13px] font-bold text-ink">{title}</h3>
        {action && (
          <button className="text-[11px] font-semibold text-muted hover:text-ink">{action}</button>
        )}
      </div>
      {children}
    </section>
  )
}

export function RightRail() {
  const { following, toggleFollow, notify } = useApp()

  return (
    <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-[300px] shrink-0 overflow-y-auto border-l border-line bg-white xl:block">
      <RailCard title="Explorar la comunidad" action="Ver más">
        <ul className="mt-3 space-y-2.5">
          {communityUsers.map((user) => {
            const isFollowing = following.has(user.name)
            return (
              <li key={user.name} className="flex items-center gap-2.5">
                <Avatar initials={user.initials} tone={user.tone} size={30} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12px] font-bold text-ink">{user.name}</p>
                  <p className="truncate text-[10.5px] text-muted">{user.role}</p>
                </div>
                <button
                  onClick={() => toggleFollow(user.name)}
                  className={`rounded-full px-2.5 py-1 text-[10.5px] font-bold ${
                    isFollowing ? 'bg-[#E9F7EF] text-[#12B76A]' : 'bg-[#12B76A] text-white'
                  }`}
                >
                  {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
              </li>
            )
          })}
        </ul>
      </RailCard>

      <RailCard title="Recomendaciones para ti">
        <ul className="mt-3 space-y-2.5">
          {recommendations.map((user) => (
            <li key={user.name} className="flex items-center gap-2.5">
              <Avatar initials={user.initials} tone={user.tone} size={28} />
              <p className="flex-1 truncate text-[12px] font-bold text-ink">{user.name}</p>
              <button
                onClick={() => notify(`Siguiendo a ${user.name}`)}
                className="rounded-full bg-amber px-2.5 py-1 text-[10.5px] font-bold text-ink"
              >
                Seguir
              </button>
            </li>
          ))}
        </ul>
      </RailCard>

      <section className="border-b border-line px-4 py-4">
        <div className={`h-20 w-full overflow-hidden rounded-[12px] bg-gradient-to-br ${railProfile.cover}`} />
        <p className="mt-3 text-[13.5px] font-bold text-ink">{railProfile.name}</p>
        <p className="text-[11px] text-muted">{railProfile.role}</p>
        <p className="mt-2 text-[11.5px] leading-relaxed text-body">{railProfile.bio}</p>
        <AmberButton className="mt-3 w-full" onClick={() => notify('Mensaje enviado')}>
          Enviar mensaje
        </AmberButton>
      </section>

      <RailCard title={earnings.title} action="Ver detalle">
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {earnings.values.map((value, index) => (
            <div key={index} className="flex flex-1 flex-col items-center gap-1">
              <div
                className="w-full rounded-t-[4px] bg-gradient-to-t from-amber to-amber-soft"
                style={{ height: `${value}%` }}
              />
              <span className="text-[8.5px] font-semibold text-muted">{earnings.labels[index]}</span>
            </div>
          ))}
        </div>
      </RailCard>

      <RailCard title="Ofertas">
        <div className="mt-3 space-y-2">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="flex items-center gap-3 rounded-[10px] border border-line p-2.5"
            >
              <Thumb tone={offer.tone} className="h-8 w-8 rounded-[8px]" />
              <div className="flex-1">
                <p className="text-[11.5px] font-bold text-ink">{offer.title}</p>
                <p className="text-[10.5px] text-muted">{offer.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </RailCard>

      <section className="bg-night-950 px-4 py-4">
        <p className="text-[12px] font-bold text-white">Explorar</p>
        <div className="mt-2.5 flex items-center gap-2 rounded-[9px] bg-white/10 px-2.5 py-2">
          <Search size={13} className="text-neutral-400" />
          <input
            placeholder="Buscar documentos…"
            className="w-full bg-transparent text-[11.5px] text-white placeholder:text-neutral-500 focus:outline-none"
          />
        </div>
        <ul className="mt-3 space-y-2">
          {searchResults.map((result) => (
            <li key={result.title} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              <p className="flex-1 text-[11.5px] text-neutral-200">{result.title}</p>
              <span className="text-[9.5px] text-neutral-500">{result.meta}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3">
          <Avatar initials={headerUser.initials} tone={headerUser.tone} size={24} />
          <span className="text-[11.5px] text-neutral-300">Hola 👋</span>
        </div>
      </section>
    </aside>
  )
}
