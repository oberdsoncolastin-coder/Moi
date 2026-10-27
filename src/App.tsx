import { useState } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Header, RightRail, Sidebar } from './components/shell'
import { CategoryChips, FeedTabs, Hero, PostCard, SectionTitle } from './components/PostCard'
import { MobileApp } from './components/mobile'
import { Avatar, Pill, Thumb } from './components/ui'
import { categories, chipLabels, currentUser, exploreItems, posts } from './data/mock'
import { useApp } from './store'

function DesktopShell() {
  const location = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  return (
    <div className="hidden min-h-screen flex-col bg-white md:flex">
      <Header onOpenSearch={() => setSearchOpen((v) => !v)} />
      {searchOpen && (
        <div className="border-b border-line bg-white px-5 py-2.5">
          <input
            autoFocus
            placeholder="Buscar publicaciones, colecciones y personas"
            className="w-full max-w-md rounded-[9px] border border-line px-3 py-2 text-[12.5px] text-ink placeholder:text-muted focus:border-amber focus:outline-none"
          />
        </div>
      )}
      <div className="flex flex-1 items-start">
        <Sidebar />
        <main className="min-w-0 flex-1" key={location.pathname}>
          <Outlet />
        </main>
        <RightRail />
      </div>
    </div>
  )
}

function FeedPage() {
  const [chip, setChip] = useState('Todas las colecciones')
  const [tab, setTab] = useState('Populares')
  return (
    <div className="mx-auto w-full max-w-[640px] border-x border-line">
      <div className="px-4 pt-4">
        <Hero />
      </div>

      <div className="px-4 pt-3">
        <CategoryChips labels={chipLabels} active={chip} onSelect={setChip} />
      </div>

      <SectionTitle variant="Plus" />

      <div className="px-4 pb-1 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-bold text-ink">Tus descubrimientos</h3>
          <FeedTabs value={tab} onChange={setTab} />
        </div>
      </div>

      <div className="border-t border-line">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

function ExplorePage() {
  return (
    <div className="mx-auto w-full max-w-[640px] border-x border-line">
      <div className="px-4 pb-1 pt-4">
        <h2 className="text-[17px] font-extrabold text-ink">Explorar</h2>
        <p className="mt-1 text-[12px] text-muted">
          Colecciones curadas por la comunidad de profesionales creativos y tech.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 py-4">
        {exploreItems.map((item) => (
          <div key={item.title} className="overflow-hidden rounded-[12px] border border-line">
            <Thumb tone={item.tone} className="h-24 w-full" />
            <div className="p-3">
              <p className="text-[12.5px] font-bold text-ink">{item.title}</p>
              <p className="text-[11px] text-muted">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <SectionTitle variant="Pair" />
        {posts.slice(0, 2).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

function ProfilePage() {
  const { following, toggleFollow, notify } = useApp()
  const stats = [
    { label: 'Publicaciones', value: '24' },
    { label: 'Seguidores', value: '1.2K' },
    { label: 'Siguiendo', value: String(following.size) },
  ]
  return (
    <div className="mx-auto w-full max-w-[640px] border-x border-line">
      <div className="relative h-[150px] w-full overflow-hidden bg-gradient-to-br from-[#3b2a4d] via-[#6b4a3a] to-amber-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_40%)]" />
      </div>
      <div className="-mt-10 px-4">
        <div className="flex items-end gap-3">
          <Avatar initials={currentUser.initials} tone={currentUser.tone} size={76} />
          <div className="pb-1">
            <p className="text-[17px] font-extrabold text-ink">{currentUser.name}</p>
            <p className="text-[12px] text-muted">{currentUser.role}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[15px] font-extrabold text-ink">{stat.value}</p>
              <p className="text-[11.5px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => notify('Perfil actualizado')}
            className="rounded-[10px] bg-amber px-4 py-2 text-[12px] font-bold text-ink"
          >
            Editar perfil
          </button>
          <button
            onClick={() => toggleFollow(currentUser.name)}
            className="rounded-[10px] border border-line px-4 py-2 text-[12px] font-bold text-ink"
          >
            {following.has(currentUser.name) ? 'Dejar de seguir' : 'Seguir'}
          </button>
        </div>
      </div>
      <div className="mt-4 border-t border-line">
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

function ListPage({ title, subtitle }: { title: string; subtitle: string }) {
  const { collections, notify } = useApp()
  return (
    <div className="mx-auto w-full max-w-[640px] border-x border-line px-4 py-5">
      <h2 className="text-[17px] font-extrabold text-ink">{title}</h2>
      <p className="mt-1 text-[12px] text-muted">{subtitle}</p>

      <div className="mt-4 space-y-2.5">
        {collections.map((collection) => (
          <div key={collection.id} className="flex items-center gap-3 rounded-[12px] border border-line p-3">
            <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-gradient-to-br from-amber-300 to-amber-500">
              <span className="text-[12px] font-bold text-ink">{collection.items}</span>
            </span>
            <p className="flex-1 text-[13px] font-bold text-ink">{collection.name}</p>
            <Pill className="px-2 py-[3px]">Abrir</Pill>
          </div>
        ))}
        {categories.slice(1).map((cat) => (
          <div key={cat.id} className="flex items-center gap-3 rounded-[12px] border border-line p-3">
            <span className={`grid h-9 w-9 place-items-center rounded-[9px] bg-gradient-to-br ${cat.tone}`} />
            <p className="flex-1 text-[13px] font-bold text-ink">{cat.label}</p>
            <span className="text-[12px] text-muted">{cat.count}</span>
            <button
              onClick={() => notify(`Siguiendo ${cat.label}`)}
              className="rounded-full border border-amber px-2.5 py-[3px] text-[11px] font-bold text-ink"
            >
              Seguir
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <MobileApp />
      <Routes>
        <Route element={<DesktopShell />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explorar" element={<ExplorePage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/mensajes" element={<ListPage title="Mensajes" subtitle="Tus conversaciones directas." />} />
          <Route
            path="/recomendaciones"
            element={<ListPage title="Recomendaciones" subtitle="Sugerencias personalizadas para ti." />}
          />
          <Route path="/intereses" element={<ListPage title="Intereses" subtitle="Temas que sigues." />} />
          <Route
            path="/colecciones"
            element={<ListPage title="Colecciones" subtitle="Recursos agrupados por tema." />}
          />
          <Route
            path="/notificaciones"
            element={<ListPage title="Notificaciones" subtitle="5 actividad reciente." />}
          />
          <Route
            path="/mis-colecciones"
            element={<ListPage title="Mis colecciones" subtitle="Tus colecciones creadas." />}
          />
          <Route
            path="/mis-seguimientos"
            element={<ListPage title="Mis seguimientos" subtitle="Perfiles y colecciones que sigues." />}
          />
          <Route
            path="/preferencias"
            element={<ListPage title="Preferencias" subtitle="Ajusta tu experiencia en Oberlast." />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
