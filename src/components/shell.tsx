import { useState } from 'react'
import {
  Bell,
  ChevronDown,
  Compass,
  Grid3x3,
  Heart,
  Layers,
  Link2,
  MessageCircle,
  Search,
  SlidersHorizontal,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react'
import { Avatar, Logo, Pill, Verified } from './ui'
import { categories, currentUser, recommendations } from '../data/mock'
import { useApp } from '../store'

export function Header({ onOpenSearch }: { onOpenSearch?: () => void }) {
  const [menu, setMenu] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex h-[62px] max-w-[1440px] items-center gap-6 px-5">
        <div className="w-[200px] shrink-0">
          <Logo />
        </div>

        <p className="hidden flex-1 items-center text-[11.5px] leading-[1.45] text-muted lg:flex">
          Hola, ¿cómo estás hoy? Explore, conecte y crezca.
          <br />
          Descubra nuevo contenido…
        </p>

        <div className="ml-auto flex items-center gap-4">
          <button
            onClick={onOpenSearch}
            aria-label="Buscar"
            className="text-ink transition-colors hover:text-amber"
          >
            <Search size={19} strokeWidth={1.8} />
          </button>
          <button aria-label="Notificaciones" className="relative text-ink transition-colors hover:text-amber">
            <Bell size={19} strokeWidth={1.8} />
            <span className="absolute -right-1 -top-1 grid h-[15px] min-w-[15px] place-items-center rounded-full bg-danger px-1 text-[9px] font-bold text-white">
              5
            </span>
          </button>
          <button
            aria-label="Ayuda"
            className="grid h-[19px] w-[19px] place-items-center rounded-full border border-ink text-[11px] font-bold text-ink"
          >
            ?
          </button>

          <div className="relative flex items-center gap-2">
            <button
              onClick={() => setMenu((v) => !v)}
              className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2 transition-colors hover:bg-neutral-100"
            >
              <Avatar initials={currentUser.initials} tone={currentUser.tone} size={30} />
              <span className="text-[13px] font-bold text-ink">{currentUser.name}</span>
              <ChevronDown size={15} className="text-ink" />
            </button>
            {menu && (
              <div className="absolute right-0 top-[42px] z-50 w-48 rounded-xl border border-line bg-white p-1.5 text-[12.5px] shadow-lg">
                {['Mi perfil', 'Mis colecciones', 'Preferencias', 'Cerrar sesión'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setMenu(false)}
                    className="block w-full rounded-lg px-3 py-2 text-left font-medium text-body hover:bg-neutral-100"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

const navItems = [
  { icon: Compass, label: 'Explorar', active: true },
  { icon: Grid3x3, label: 'Explorar' },
  { icon: MessageCircle, label: 'Mensajes' },
  { icon: Zap, label: 'Recomendaciones' },
  { icon: Heart, label: 'Intereses' },
  { icon: Layers, label: 'Colecciones' },
  { icon: Bell, label: 'Notificaciones', badge: '5' },
  { icon: Users, label: 'Mensajes' },
  { icon: Grid3x3, label: 'Mis colecciones' },
  { icon: Link2, label: 'Mis seguimientos' },
  { icon: SlidersHorizontal, label: 'Preferencias' },
]

export function Sidebar() {
  const [active, setActive] = useState(0)
  return (
    <aside className="sticky top-[62px] hidden h-[calc(100vh-62px)] w-[220px] shrink-0 flex-col bg-gradient-to-b from-night-950 to-night-850 md:flex">
      <div className="px-4 pb-3 pt-5">
        <Logo tone="dark" />
      </div>

      <div className="px-3">
        <div className="flex items-center gap-2 rounded-[9px] bg-white/5 px-3 py-2">
          <Search size={15} className="text-neutral-500" />
          <input
            placeholder="Buscar"
            className="w-full bg-transparent text-[12.5px] text-white placeholder:text-neutral-500 focus:outline-none"
          />
        </div>
      </div>

      <nav className="mt-3 flex-1 overflow-y-auto px-2.5 pb-3">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = index === active
          return (
            <button
              key={`${item.label}-${index}`}
              onClick={() => setActive(index)}
              className={`mb-0.5 flex w-full items-center gap-2.5 rounded-[9px] px-2.5 py-[7px] text-[12.5px] font-medium transition-colors ${
                isActive ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Icon size={16} strokeWidth={1.8} className={isActive ? 'text-white' : 'text-neutral-500'} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="grid h-[16px] min-w-[16px] place-items-center rounded-full bg-danger px-1 text-[9px] font-bold text-white">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      <div className="m-3 rounded-[12px] border border-white/10 bg-black p-3.5">
        <p className="text-[12px] font-semibold leading-snug text-white">
          Ningún contenido se desperdicia.
          <br />
          ¿Quieres compartir algo?
        </p>
        <button className="mt-3 w-full rounded-full bg-amber py-2 text-[12px] font-extrabold text-ink transition-colors hover:bg-amber-dark">
          Iniciar sesión
        </button>
      </div>
    </aside>
  )
}

function RailCard({
  title,
  children,
  action,
}: {
  title?: string
  children: React.ReactNode
  action?: React.ReactNode
}) {
  return (
    <section className="border-b border-line px-4 py-4">
      {title && (
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[13.5px] font-bold text-ink">{title}</h3>
          {action}
        </div>
      )}
      {children}
    </section>
  )
}

export function RightRail() {
  const { createCollection, notify } = useApp()
  const [name, setName] = useState('')
  const [expanded, setExpanded] = useState(false)

  const submit = () => {
    const value = name.trim()
    if (!value) {
      notify('Escribe un nombre para la colección')
      return
    }
    createCollection(value)
    setName('')
    notify('Colección creada')
  }

  return (
    <aside className="hidden w-[300px] shrink-0 border-l border-line bg-white xl:block">
      <div className="sticky top-[62px] max-h-[calc(100vh-62px)] overflow-y-auto thin-scroll">
        <RailCard>
          <div className="relative">
            <div className="h-[70px] w-full overflow-hidden rounded-t-[10px] bg-gradient-to-r from-amber-400 via-olive-500 to-night-900">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
            </div>
            <div className="-mt-7 pl-3">
              <Avatar initials="PB" tone="from-amber-300 to-amber-500" size={56} />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1.5">
            <h3 className="text-[14px] font-bold text-ink">Perfil de Business</h3>
            <Verified tone="amber" />
          </div>
          <p className="mt-1 text-[11.5px] leading-relaxed text-muted">
            Una cuenta para marcas que quieren compartir recursos con su comunidad.
          </p>
          <button className="mt-3 w-full rounded-[10px] bg-amber py-2 text-[12px] font-bold text-ink transition-colors hover:bg-amber-dark">
            Ver todos los posts
          </button>
        </RailCard>

        <RailCard title="Destacados">
          <div className="flex items-center gap-2">
            <Avatar initials="PB" tone="from-amber-300 to-amber-500" size={30} rounded="lg" />
            <span className="text-[12.5px] font-bold text-ink">Perfil de Business</span>
          </div>
          <p className="mt-2 text-[11.5px] text-muted">Recomendamos este perfil</p>
          <Pill className="mt-2">Recomendamos</Pill>
        </RailCard>

        <RailCard title="Descubrimiento de contenido">
          <ul className="space-y-2.5">
            {categories.slice(1, 5).map((cat) => (
              <li key={cat.id} className="flex items-center gap-2.5">
                <span
                  className={`grid h-[26px] w-[26px] shrink-0 place-items-center rounded-[7px] bg-gradient-to-br ${cat.tone}`}
                >
                  <Sparkles size={13} className="text-white" />
                </span>
                <span className="flex-1 text-[12.5px] font-bold text-ink">{cat.label}</span>
                <span className="text-[12px] text-muted">{cat.count}</span>
                {cat.id === 'tecnologia' || cat.id === 'diseno' ? (
                  <Pill className="px-2 py-[3px]">Explorar</Pill>
                ) : null}
              </li>
            ))}
          </ul>
        </RailCard>

        <RailCard title="Recomendaciones para ti">
          <ul className="space-y-3">
            {recommendations.map((rec) => (
              <li key={rec.name} className="flex items-center gap-2.5">
                <Avatar initials={rec.initials} tone={rec.tone} size={28} rounded="lg" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[12.5px] font-bold text-ink">{rec.name}</p>
                  <p className="truncate text-[11px] text-muted">{rec.role}</p>
                </div>
                <Pill className="px-2 py-[3px]">Explorar</Pill>
              </li>
            ))}
          </ul>
        </RailCard>

        <RailCard title="Suscripción experimental">
          <div className="flex items-center gap-2">
            <Avatar initials="ZA" tone="from-blue-400 to-blue-600" size={28} rounded="lg" />
            <span className="text-[12.5px] font-bold text-ink">Zaize</span>
            <span className="text-[11px] text-muted">Escultor</span>
          </div>
          <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-neutral-200">
            <div className="h-full w-[68%] rounded-full bg-amber" />
          </div>
          <p className="mt-2 text-[11.5px] leading-relaxed text-muted">
            Tu prueba gratuita termina en 3 días. Mantén el acceso a los recursos premium.
          </p>
          <button
            onClick={() => notify(' explorations actualizados')}
            className="mt-2.5 w-full rounded-[10px] border border-amber bg-white py-2 text-[12px] font-bold text-ink transition-colors hover:bg-amber/10"
          >
            Explorar
          </button>
        </RailCard>

        <RailCard title="Crear colección">
          <p className="mb-2.5 text-[11.5px] leading-relaxed text-muted">
            Crea tu propia colección de herramientas y recursos
          </p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="Nombre de la colección"
            className="w-full rounded-[9px] border border-line px-3 py-2 text-[12.5px] text-ink placeholder:text-muted focus:border-amber focus:outline-none"
          />
          <div className="mt-2.5 flex items-center gap-2">
            <button
              onClick={submit}
              className="flex-1 rounded-[9px] bg-amber py-2 text-[12px] font-bold text-ink transition-colors hover:bg-amber-dark"
            >
              Crear colección
            </button>
            <button
              onClick={() => notify('Añade un elemento a la colección')}
              className="grid h-[34px] w-[34px] place-items-center rounded-[9px] border border-line text-[16px] font-bold text-ink transition-colors hover:border-amber"
            >
              +
            </button>
          </div>
        </RailCard>

        <RailCard title="Publicaciones destacadas">
          <p className="text-[11.5px] leading-relaxed text-muted">
            Crea una colección con herramientas y recursos que te acompañen en cada proyecto.
          </p>
          <button className="mt-2.5 w-full rounded-[10px] border border-amber bg-white py-2 text-[12px] font-bold text-ink transition-colors hover:bg-amber/10">
            Explorar
          </button>
        </RailCard>

        <div className="m-3 rounded-[12px] bg-night-950 p-3.5">
          <Sparkles size={18} className="text-amber" />
          <p className="mt-2 text-[13px] font-bold text-white">¿Quieres compartir algo?</p>
          <p className="text-[12px] text-neutral-400">Compartir un post</p>
          <div className="mt-2.5 flex items-center gap-2 rounded-[9px] bg-white/5 px-3 py-2">
            <input
              placeholder="Escribe aquí…"
              className="w-full bg-transparent text-[12.5px] text-white placeholder:text-neutral-500 focus:outline-none"
            />
            <button
              onClick={() => notify('Publicación compartida')}
              className="grid h-[28px] w-[28px] place-items-center rounded-[8px] bg-amber"
              aria-label="Enviar"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F1115" strokeWidth="2.4">
                <path d="M22 2 11 13" />
                <path d="M22 2 15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
