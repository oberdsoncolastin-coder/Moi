import { useState } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Header, RightRail, Sidebar } from './components/shell'
import { ActionBar, CategoryRow, DocumentCard, Hero } from './components/panels'
import { MobileApp } from './components/mobile'
import { Avatar, Thumb } from './components/ui'
import { categories, docRowsSecondary, profileGrid, profileUser } from './data/mock'
import { useApp } from './store'

function DesktopShell() {
  const location = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="hidden min-h-screen flex-col bg-white md:flex">
      <Header />
      {searchOpen && (
        <div className="border-b border-line bg-white px-5 py-2.5">
          <input
            autoFocus
            placeholder="Buscar documentos, categorías y personas"
            className="w-full max-w-md rounded-[9px] border border-line px-3 py-2 text-[12.5px] text-ink placeholder:text-muted focus:border-amber focus:outline-none"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setSearchOpen(false)
                navigate('/mis-documentos')
              }
            }}
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

function HomePage() {
  return (
    <div className="mx-auto w-full max-w-[640px] border-x border-line px-4 pb-8">
      <Hero />
      <CategoryRow />
      <DocumentCard />
      <DocumentCard title="Plan A Dashboard" rows={docRowsSecondary} secondary />
      <ActionBar />
    </div>
  )
}

function DocumentsPage() {
  return (
    <div className="mx-auto w-full max-w-[640px] border-x border-line pb-8">
      <DocumentCard title="Plan A Mis documentos" />
    </div>
  )
}

function ProfilePage() {
  const { following, toggleFollow, notify } = useApp()
  const isFollowing = following.has(profileUser.name)
  return (
    <div className="mx-auto w-full max-w-[640px] border-x border-line pb-8">
      <div className={`relative h-[150px] w-full overflow-hidden bg-gradient-to-br ${profileUser.cover}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_40%)]" />
      </div>
      <div className="-mt-10 px-4">
        <div className="flex items-end gap-3">
          <Avatar initials={profileUser.initials} tone={profileUser.tone} size={76} ring />
          <div className="pb-1">
            <p className="text-[17px] font-extrabold text-ink">{profileUser.name}</p>
            <p className="text-[12px] text-muted">{profileUser.handle}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-6">
          {profileUser.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[15px] font-extrabold text-ink">{stat.value}</p>
              <p className="text-[11.5px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[12.5px] leading-relaxed text-body">{profileUser.bio}</p>
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => notify('Mensaje enviado')}
            className="rounded-[10px] bg-amber px-4 py-2 text-[12px] font-bold text-ink"
          >
            Enviar mensaje
          </button>
          <button
            onClick={() => toggleFollow(profileUser.name)}
            className="rounded-[10px] border border-line px-4 py-2 text-[12px] font-bold text-ink"
          >
            {isFollowing ? 'Dejar de seguir' : 'Seguir'}
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 px-4">
        {profileGrid.slice(0, 6).map((item, index) => (
          <Thumb key={index} tone={item.tone} kind="gradient" className="h-24 w-full rounded-[10px]" />
        ))}
      </div>
    </div>
  )
}

function ListPage({ title, subtitle }: { title: string; subtitle: string }) {
  const { notify } = useApp()
  return (
    <div className="mx-auto w-full max-w-[640px] border-x border-line px-4 py-5">
      <h2 className="text-[17px] font-extrabold text-ink">{title}</h2>
      <p className="mt-1 text-[12px] text-muted">{subtitle}</p>

      <div className="mt-4 space-y-2.5">
        {categories.map((category, index) => (
          <div key={`${category.label}-${index}`} className="flex items-center gap-3 rounded-[12px] border border-line p-3">
            <span className={`grid h-9 w-9 place-items-center rounded-[9px] bg-gradient-to-br ${category.tone}`}>
              <span className="text-[11px] font-black text-white/90">{category.label.slice(0, 1)}</span>
            </span>
            <p className="flex-1 text-[13px] font-bold text-ink">{category.label}</p>
            <button
              onClick={() => notify(`Siguiendo ${category.label}`)}
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
          <Route path="/" element={<HomePage />} />
          <Route path="/mis-documentos" element={<DocumentsPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/categorias" element={<ListPage title="Categorías" subtitle="Explora los temas de la comunidad." />} />
          <Route path="/tareas" element={<ListPage title="Tareas" subtitle="Tus tareas y subtareas pendientes." />} />
          <Route path="/traducciones" element={<ListPage title="Traducciones" subtitle="Idiomas disponibles en tu espacio." />} />
          <Route path="/recordatorios" element={<ListPage title="Recordatorios" subtitle="Avisos programados." />} />
          <Route path="/subtareas" element={<ListPage title="Subtareas" subtitle="Divide tus proyectos en pasos." />} />
          <Route path="/colaboradores" element={<ListPage title="Colaboradores" subtitle="Personas de tu equipo." />} />
          <Route path="/notificaciones" element={<ListPage title="Notificaciones" subtitle="Actividad reciente." />} />
          <Route path="/mensajes" element={<ListPage title="Mensajes" subtitle="Tus conversaciones directas." />} />
          <Route path="/plantillas" element={<ListPage title="Plantillas" subtitle="Plantillas listas para usar." />} />
          <Route path="/ajustes" element={<ListPage title="Ajustes" subtitle="Configura tu experiencia." />} />
          <Route path="/premium" element={<ListPage title="Premium" subtitle="Desbloquea todo el ecosistema." />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
