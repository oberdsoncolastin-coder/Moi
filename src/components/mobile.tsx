import { useState } from 'react'
import {
  Bell,
  ChevronRight,
  Compass,
  Home,
  Plus,
  Search,
  Sparkles,
  User,
  Zap,
} from 'lucide-react'
import { Avatar, Logo, Thumb } from './ui'
import { CategoryChips, Hero, PostCard } from './PostCard'
import { authors, chipLabels, exploreItems, posts, profilePosts } from '../data/mock'
import { useApp } from '../store'

export function BottomNav({ active, onChange }: { active: string; onChange: (v: string) => void }) {
  const items = [
    { id: 'inicio', icon: Home, label: 'Inicio' },
    { id: 'explorar', icon: Compass, label: 'Explorar' },
    { id: 'crear', icon: Plus, label: 'Crear' },
    { id: 'fil', icon: Sparkles, label: 'Fil' },
    { id: 'perfil', icon: User, label: 'Perfil' },
  ]
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-line bg-white/95 py-2 backdrop-blur md:hidden">
      {items.map((item) => {
        const Icon = item.icon
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center gap-0.5 px-3 ${
              isActive ? 'text-amber' : 'text-neutral-400'
            }`}
          >
            <Icon size={19} strokeWidth={isActive ? 2.4 : 1.8} />
            <span className="text-[10px] font-semibold">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export function MobileSplash({ onStart }: { onStart: () => void }) {
  return (
    <div className="relative flex min-h-[100vh] flex-col justify-end overflow-hidden bg-night-950 px-7 pb-12 pt-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%]">
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-amber/25 blur-3xl" />
        <div className="absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 400 300" fill="none">
          <path d="M0 240 L120 140 L220 210 L320 110 L400 180" stroke="#E3B341" strokeWidth="1" />
          <path d="M0 270 L140 190 L240 250 L340 170 L400 220" stroke="#E3B341" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative">
        <Logo tone="dark" size="lg" />
        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-amber">
          Discover · Explorar · Pairings
        </p>
        <p className="mt-3 max-w-[300px] text-[13px] leading-relaxed text-neutral-400">
          La plataforma perfecta para conectar y compartir con otros profesionales. Explore nuestro ecosistema de
          herramientas.
        </p>
        <button
          onClick={onStart}
          className="mt-7 w-full rounded-full bg-amber py-3.5 text-[13px] font-extrabold text-ink"
        >
          Iniciar sesión
        </button>
        <p className="mt-3 text-center text-[11.5px] text-neutral-500">… o seguir como invitado</p>
      </div>
    </div>
  )
}

export function MobileHome({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [chip, setChip] = useState('Tecnología')
  return (
    <div className="min-h-[100vh] bg-white pb-20">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-white px-4 py-3">
        <Logo size="sm" />
        <div className="flex items-center gap-3">
          <Search size={18} className="text-ink" />
          <Bell size={18} className="text-ink" />
        </div>
      </header>

      <div className="px-4 pt-3">
        <div className="flex items-center gap-2 rounded-[9px] border border-line px-3 py-2">
          <Search size={15} className="text-muted" />
          <input
            placeholder="Buscar"
            className="w-full bg-transparent text-[12.5px] text-ink placeholder:text-muted focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-3">
        <CategoryChips
          labels={chipLabels}
          active={chip}
          onSelect={setChip}
        />
      </div>

      <div className="px-4 pt-3">
        <div className="relative overflow-hidden rounded-[12px] bg-gradient-to-r from-night-950 via-[#2A2015] to-amber-500 px-4 py-4">
          <div className="h-24 w-20 rotate-[-8deg] rounded-[10px] border border-white/25 bg-white/10" />
          <div className="absolute inset-y-0 right-3 w-28 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.4),transparent_55%)]" />
          <div className="relative">
            <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-amber">
              Discover · Explorar · Pairings
            </p>
            <h2 className="mt-1 text-[20px] font-black tracking-tight text-white">OBERLAST</h2>
            <p className="mt-1 max-w-[220px] text-[11px] leading-relaxed text-neutral-300">
              Comparte herramientas, recursos y referencias con la comunidad.
            </p>
          </div>
        </div>
      </div>

      <h3 className="mt-5 px-4 text-[14.5px] font-bold text-ink">Descubrimientos</h3>
      <div className="mt-1 border-b border-line">
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} compact />
        ))}
      </div>

      <button
        onClick={() => onNavigate('fil')}
        className="mx-4 mt-4 w-[calc(100%-2rem)] rounded-full bg-amber py-3 text-[12.5px] font-extrabold text-ink"
      >
        Explorar todos los recursos
      </button>
    </div>
  )
}

export function MobileExplore() {
  const { notify } = useApp()
  return (
    <div className="min-h-[100vh] bg-night-950 px-4 pb-24 pt-5 text-white">
      <h1 className="text-[22px] font-extrabold">Explorar</h1>
      <p className="mt-1 text-[12px] text-neutral-500">Colecciones y categorías de la comunidad</p>

      <div className="mt-4 space-y-2.5">
        {exploreItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-[12px] bg-white p-3 text-ink"
          >
            <span className={`grid h-9 w-9 place-items-center rounded-[9px] bg-gradient-to-br ${item.tone}`}>
              <Zap size={16} className="text-white" fill="currentColor" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-bold">{item.title}</p>
              <p className="text-[11.5px] text-muted">{item.subtitle}</p>
            </div>
            <ChevronRight size={17} className="text-muted" />
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[12px] bg-night-900 p-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-teal">
            <Sparkles size={16} className="text-white" />
          </span>
          <div className="flex-1">
            <p className="text-[13px] font-bold">Suscripción premium</p>
            <p className="text-[11.5px] text-neutral-500">Acceso ilimitado a todo el ecosistema</p>
          </div>
        </div>
        <button
          onClick={() => notify('Suscripción actualizada')}
          className="mt-3 w-full rounded-full bg-amber py-2.5 text-[12.5px] font-extrabold text-ink"
        >
          Actualizar
        </button>
      </div>
    </div>
  )
}

export function MobileFeed() {
  const post = posts.find((p) => p.product) ?? posts[0]
  return (
    <div className="min-h-[100vh] bg-white pb-40">
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-line bg-white px-4 py-3">
        <Logo size="sm" />
        <Bell size={18} className="text-ink" />
      </header>

      <div className="border-b border-line px-4 py-4">
        <div className="flex items-center gap-2.5">
          <Avatar initials={post.author.initials} tone={post.author.tone} size={38} />
          <div>
            <p className="text-[13.5px] font-bold text-ink">{post.author.name}</p>
            <p className="text-[11.5px] text-muted">{post.author.time}</p>
          </div>
        </div>
        <p className="mt-2 text-[13px] leading-[1.55] text-body">{post.text}</p>

        <div className="mt-3 overflow-hidden rounded-[12px] bg-gradient-to-br from-[#7C3AED] to-[#A855F7] p-4">
          <h4 className="text-[15px] font-extrabold text-white">Casos</h4>
          <p className="text-[12px] font-semibold text-white/85">Pruebas de usabilidad</p>
          <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/80">{post.product?.body}</p>
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {post.product?.media.map((m, index) => (
              <Thumb key={index} tone={m.tone} kind={m.kind} className="aspect-[4/3] w-full rounded-[8px]" />
            ))}
          </div>
          <span className="mt-3 inline-block rounded-full bg-black/30 px-2.5 py-1 text-[10.5px] font-bold text-white">
            1 / 5
          </span>
        </div>
      </div>

      <div className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[14.5px] font-bold text-ink">Tus descubrimientos</h3>
          <span className="text-[12px] font-semibold text-muted">Ver más</span>
        </div>
        {posts.slice(1, 3).map((p) => (
          <PostCard key={p.id} post={p} compact />
        ))}
      </div>
    </div>
  )
}

export function MobileProfile() {
  const [tab, setTab] = useState('Publicaciones')
  const jose = authors.jose
  return (
    <div className="min-h-[100vh] bg-white pb-24">
      <div className="relative h-[150px] w-full overflow-hidden bg-gradient-to-br from-[#3b2a4d] via-[#6b4a3a] to-amber-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_40%)]" />
      </div>

      <div className="-mt-10 px-4">
        <div className="flex items-end gap-3">
          <Avatar initials={jose.initials} tone={jose.tone} size={76} />
          <div className="pb-1">
            <p className="text-[17px] font-extrabold text-ink">{jose.name}</p>
            <p className="text-[12px] text-muted">{jose.role}</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-6">
          {[
            { label: 'Publicaciones', value: '24' },
            { label: 'Seguidores', value: '1.2K' },
            { label: 'Siguiendo', value: '310' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[15px] font-extrabold text-ink">{stat.value}</p>
              <p className="text-[11.5px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-5 border-b border-line">
          {['Publicaciones', 'Me gusta', 'Guardados'].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`relative pb-2.5 text-[12.5px] font-bold ${
                tab === item ? 'text-ink' : 'text-muted'
              }`}
            >
              {item}
              {tab === item && <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-ink" />}
            </button>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {profilePosts.map((item, index) => (
            <Thumb key={index} tone={item.tone} label={item.label} className="aspect-square w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function MobileApp() {
  const [screen, setScreen] = useState<'splash' | 'app'>('splash')
  const [tab, setTab] = useState('inicio')

  if (screen === 'splash') return <MobileSplash onStart={() => setScreen('app')} />

  return (
    <div className="md:hidden">
      {tab === 'inicio' && <MobileHome onNavigate={setTab} />}
      {tab === 'explorar' && <MobileExplore />}
      {tab === 'fil' && <MobileFeed />}
      {tab === 'perfil' && <MobileProfile />}
      {tab === 'crear' && (
        <div className="min-h-[100vh] bg-white px-4 pt-10">
          <h1 className="text-[20px] font-extrabold text-ink">Crear publicación</h1>
          <p className="mt-1 text-[12.5px] text-muted">Comparte un recurso con la comunidad.</p>
          <div className="mt-4 rounded-[12px] border border-line p-3">
            <textarea
              placeholder="Escribe aquí…"
              className="h-28 w-full resize-none bg-transparent text-[13px] text-ink placeholder:text-muted focus:outline-none"
            />
            <button className="w-full rounded-full bg-amber py-2.5 text-[12.5px] font-extrabold text-ink">
              Publicar
            </button>
          </div>
        </div>
      )}
      <BottomNav active={tab} onChange={setTab} />
    </div>
  )
}
