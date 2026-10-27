import { useState } from 'react'
import {
  Bell,
  CheckSquare,
  ChevronRight,
  Compass,
  Home,
  MessageCircle,
  Plus,
  Search,
  Send,
  Share2,
  User,
} from 'lucide-react'
import {
  brand,
  categories,
  docRows,
  docTabs,
  mobileNav,
  profileGrid,
  profileUser,
} from '../data/mock'
import { useApp } from '../store'
import { Avatar, HexMark, Thumb, Verified } from './ui'

const navIcons = { home: Home, check: CheckSquare, compass: Compass, message: MessageCircle, user: User }

function MobileNav({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-around border-t border-line bg-white py-2">
      {mobileNav.map((item) => {
        const Icon = navIcons[item.icon as keyof typeof navIcons]
        const isActive = item.id === active
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center gap-1 ${isActive ? 'text-ink' : 'text-muted'}`}
          >
            <span className={`relative grid h-7 w-7 place-items-center rounded-full ${isActive ? 'bg-[#F3F4F6]' : ''}`}>
              <Icon size={17} strokeWidth={isActive ? 2.3 : 1.8} />
              {item.id === 'tareas' && (
                <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-danger" />
              )}
            </span>
            <span className="text-[9.5px] font-semibold">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

function SplashScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-night-950 px-8 text-center">
      <HexMark size={62} tone="amber" />
      <p className="mt-5 text-[30px] font-black tracking-[0.24em] text-amber">OBERLAST</p>
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
        {brand.baseline}
      </p>
      <p className="mt-6 max-w-[280px] text-[12.5px] leading-relaxed text-neutral-400">
        {brand.paragraph}
      </p>
      <button
        onClick={onStart}
        className="mt-9 rounded-full bg-amber px-8 py-3 text-[13px] font-extrabold text-ink"
      >
        Empezar
      </button>
      <div className="absolute bottom-6 flex items-center gap-2 text-[10.5px] font-semibold text-neutral-600">
        <span>English ▾</span>
        <span className="text-neutral-800">•</span>
        <span>Português ▾</span>
      </div>
    </div>
  )
}

function MobileHome() {
  const { notify } = useApp()
  const [tab, setTab] = useState(docTabs[0])
  return (
    <div className="min-h-screen bg-[#F7F7F8] pb-16">
      <header className="flex items-center gap-2 border-b border-line bg-white px-4 py-3">
        <HexMark size={22} tone="light" />
        <span className="text-[15px] font-black tracking-[0.18em] text-ink">OBERLAST</span>
        <span className="rounded bg-amber px-1.5 py-[1px] text-[9px] font-bold text-ink">PRO</span>
        <div className="ml-auto flex items-center gap-3 text-ink">
          <Bell size={17} />
          <Search size={17} />
        </div>
      </header>

      <div className="px-3 pt-3">
        <section className="relative overflow-hidden rounded-[14px] bg-night-950 px-4 py-5">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber/25 blur-2xl" />
          <p className="text-[17px] font-black tracking-[0.2em] text-white">
            OBERLAST<sup className="align-super text-[8px] text-amber">®</sup>
          </p>
          <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {brand.baseline}
          </p>
          <p className="mt-3 text-[11.5px] leading-relaxed text-neutral-400">{brand.paragraph}</p>
          <button
            onClick={() => notify('Explorando el sistema')}
            className="mt-4 rounded-full bg-amber px-4 py-2 text-[11.5px] font-extrabold text-ink"
          >
            Explorar el sistema
          </button>
        </section>
      </div>

      <section className="px-3 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[13px] font-bold text-ink">Categorías principales</h2>
          <button className="text-[11px] font-semibold text-muted">Ver más</button>
        </div>
        <div className="mt-3 flex gap-3.5 overflow-x-auto no-scrollbar">
          {categories.map((category, index) => (
            <button key={index} className="flex w-[52px] shrink-0 flex-col items-center gap-1.5">
              <span className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${category.tone}`}>
                <span className="text-[10px] font-black text-white/90">{category.label.slice(0, 1)}</span>
              </span>
              <span className="w-full truncate text-center text-[9px] font-semibold text-muted">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="mx-3 mt-4 overflow-hidden rounded-[14px] border border-line bg-white">
        <div className="flex items-center justify-between px-3.5 pt-3">
          <h3 className="text-[13px] font-bold text-ink">Mis documentos</h3>
          <button className="text-[10.5px] font-semibold text-muted">Ver más</button>
        </div>
        <div className="mt-2 flex gap-4 border-b border-line px-3.5">
          {docTabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`relative pb-2 text-[11.5px] font-semibold ${tab === item ? 'text-ink' : 'text-muted'}`}
            >
              {item}
              {tab === item && <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-ink" />}
            </button>
          ))}
        </div>
        {docRows.slice(0, 4).map((row) => (
          <div key={row.title + row.tone} className="flex items-center gap-2.5 border-b border-line px-3.5 py-2.5 last:border-b-0">
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-[7px] bg-gradient-to-br ${row.tone}`}>
              <span className="text-[9.5px] font-black text-white/90">{row.title.slice(0, 1)}</span>
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-bold text-ink">{row.title}</p>
              <p className="truncate text-[9.5px] text-muted">{row.subtitle}</p>
            </div>
            <ChevronRight size={14} className="text-muted" />
          </div>
        ))}
      </section>
    </div>
  )
}

function MobileExplore() {
  const [query, setQuery] = useState('')
  return (
    <div className="min-h-screen bg-white pb-16">
      <header className="flex items-center justify-between px-4 pt-5">
        <h1 className="text-[22px] font-extrabold tracking-tight text-ink">Explorar</h1>
        <Search size={19} className="text-ink" />
      </header>

      <div className="px-4 pt-3">
        <div className="flex items-center gap-2 rounded-full border border-line bg-[#F7F7F8] px-3 py-2">
          <Search size={14} className="text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar"
            className="w-full bg-transparent text-[12px] placeholder:text-muted focus:outline-none"
          />
        </div>
      </div>

      <div className="px-4 pt-5">
        <p className="text-[12px] font-bold text-ink">Categorías</p>
        <ul className="mt-3 divide-y divide-line">
          {categories.map((category, index) => (
            <li key={index}>
              <button className="flex w-full items-center gap-3 py-3 text-left">
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-gradient-to-br ${category.tone}`}>
                  <span className="text-[11px] font-black text-white/90">{category.label.slice(0, 1)}</span>
                </span>
                <span className="flex-1 text-[13px] font-semibold text-ink">{category.label}</span>
                <ChevronRight size={16} className="text-muted" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MobileDetail() {
  const { notify } = useApp()
  const [tab, setTab] = useState(docTabs[0])
  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="relative h-[280px] bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 px-4 pt-4">
        <button onClick={() => notify('Volver')} className="rounded-full bg-black/30 px-3 py-1.5 text-[11px] font-semibold text-white">
          Volver
        </button>
        <div className="mt-4 h-[150px] rounded-[14px] bg-white/15 p-3 backdrop-blur-sm">
          <div className="h-2 w-1/3 rounded-full bg-white/70" />
          <div className="mt-2 grid grid-cols-3 gap-2">
            <div className="h-20 rounded-[10px] bg-white/25" />
            <div className="h-20 rounded-[10px] bg-white/15" />
            <div className="h-20 rounded-[10px] bg-white/35" />
          </div>
          <div className="mt-2 h-2 w-1/2 rounded-full bg-white/40" />
        </div>
        <span className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          Community
        </span>
      </div>

      <div className="-mt-6 rounded-t-[18px] bg-white px-4 pt-4">
        <h2 className="text-[19px] font-extrabold text-ink">Home</h2>
        <p className="mt-1 text-[11.5px] text-muted">Community / Home</p>

        <div className="mt-3 flex gap-4 border-b border-line">
          {docTabs.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`relative pb-2 text-[12px] font-semibold ${tab === item ? 'text-ink' : 'text-muted'}`}
            >
              {item}
              {tab === item && <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-ink" />}
            </button>
          ))}
        </div>

        <p className="mt-3 text-[12.5px] leading-relaxed text-body">
          Discover explore and share your knowledge on mobile. Organiza tus documentos, comparte
          con tu equipo y descubre lo que otros están creando dentro de la comunidad.
        </p>

        <p className="mt-4 text-[12px] font-bold text-ink">Personas</p>
        <div className="mt-2 flex gap-2">
          {['from-amber-300 to-amber-500', 'from-teal-400 to-teal-600', 'from-blue-400 to-blue-600'].map(
            (tone, index) => (
              <Avatar key={index} initials={['GU', 'NA', 'AP'][index]} tone={tone} size={30} />
            ),
          )}
        </div>

        <div className="mt-5 rounded-[14px] bg-night-950 px-4 py-4">
          <p className="text-[13px] font-bold text-amber">Únete a OBERLAST</p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-neutral-400">
            15 días gratis y acceso completo a todas las herramientas.
          </p>
          <button
            onClick={() => notify('Explorando más')}
            className="mt-3 w-full rounded-full bg-amber py-2.5 text-[12px] font-extrabold text-ink"
          >
            Explorar más
          </button>
        </div>
      </div>
    </div>
  )
}

function MobileProfile() {
  const { notify } = useApp()
  return (
    <div className="min-h-screen bg-[#F7F7F8] pb-16">
      <div className={`relative h-[190px] bg-gradient-to-br ${profileUser.cover}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.4),transparent_45%)]" />
        <div className="absolute right-3 top-3 flex gap-2">
          <button onClick={() => notify('Compartiendo perfil')} className="rounded-full bg-black/30 p-2 text-white">
            <Share2 size={14} />
          </button>
        </div>
      </div>

      <div className="-mt-10 rounded-t-[18px] bg-white px-4 pt-3">
        <div className="flex items-end gap-3">
          <Avatar initials={profileUser.initials} tone={profileUser.tone} size={72} ring />
          <div className="flex-1 pb-1">
            <div className="flex items-center gap-1.5">
              <p className="text-[17px] font-extrabold text-ink">{profileUser.name}</p>
              <Verified />
            </div>
            <p className="text-[11.5px] text-muted">
              {profileUser.handle} · Siguiendo
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-6">
          {profileUser.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[15px] font-extrabold text-ink">{stat.value}</p>
              <p className="text-[10.5px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[11.5px] font-bold text-ink">Sobre mí</p>
        <p className="mt-1 text-[12px] leading-relaxed text-body">{profileUser.bio}</p>

        <p className="mt-4 text-[11.5px] font-bold text-ink">Intereses</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {profileUser.interests.map((interest) => (
            <span key={interest} className="rounded-full bg-[#F3F4F6] px-2.5 py-1 text-[11px] font-semibold text-body">
              {interest}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {profileGrid.map((item, index) => (
            <Thumb key={index} tone={item.tone} kind="gradient" className="h-[110px] w-full rounded-[10px]" />
          ))}
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-14 z-20 border-t border-line bg-white px-4 py-2.5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => notify('Mensaje enviado')}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-amber py-2.5 text-[12px] font-extrabold text-ink"
          >
            <Send size={13} /> Enviar mensaje
          </button>
          <button
            onClick={() => notify('Compartiendo perfil')}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink"
          >
            <Share2 size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

export function MobileApp() {
  const [screen, setScreen] = useState<string | null>(null)
  const [nav, setNav] = useState('inicio')

  if (screen === null) {
    return (
      <div className="md:hidden">
        <SplashScreen onStart={() => setScreen('home')} />
      </div>
    )
  }

  const handleNav = (id: string) => {
    setNav(id)
    if (id === 'inicio') setScreen('home')
    else if (id === 'explorar') setScreen('explorar')
    else if (id === 'perfil') setScreen('perfil')
    else setScreen('chat')
  }

  return (
    <div className="md:hidden">
      {screen === 'home' && <MobileHome />}
      {screen === 'explorar' && <MobileExplore />}
      {screen === 'detalle' && <MobileDetail />}
      {screen === 'perfil' && <MobileProfile />}
      {screen === 'chat' && (
        <div className="min-h-screen bg-white px-4 pt-6">
          <h1 className="text-[22px] font-extrabold text-ink">Chat</h1>
          <p className="mt-1 text-[12px] text-muted">Tus conversaciones con la comunidad.</p>
          <div className="mt-5 space-y-2">
            {['Gustavo', 'Naomi', 'Apple', 'Meta'].map((name, index) => (
              <div key={name} className="flex items-center gap-3 rounded-[12px] border border-line p-3">
                <Avatar initials={name.slice(0, 2).toUpperCase()} tone={categories[index + 1].tone} size={34} />
                <p className="flex-1 text-[13px] font-bold text-ink">{name}</p>
                <span className="text-[11px] text-muted">Ahora</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <MobileNav active={nav} onChange={handleNav} />
      <button
        onClick={() => setScreen('detalle')}
        className="fixed right-4 bottom-20 z-20 grid h-11 w-11 place-items-center rounded-full bg-amber text-ink shadow-lg"
      >
        <Plus size={20} />
      </button>
    </div>
  )
}
