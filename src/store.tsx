import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

interface Collection {
  id: string
  name: string
  items: number
  createdAt: number
}

interface AppState {
  liked: Set<string>
  saved: Set<string>
  following: Set<string>
  collections: Collection[]
  toast: string | null
  toggleLike: (id: string) => void
  toggleSave: (id: string) => void
  toggleFollow: (name: string) => void
  createCollection: (name: string) => void
  notify: (message: string) => void
  dismissToast: () => void
}

const AppContext = createContext<AppState | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [liked, setLiked] = useState<Set<string>>(new Set())
  const [saved, setSaved] = useState<Set<string>>(new Set())
  const [following, setFollowing] = useState<Set<string>>(new Set(['LabGroup']))
  const [collections, setCollections] = useState<Collection[]>([])
  const [toast, setToast] = useState<string | null>(null)

  const notify = useCallback((message: string) => {
    setToast(message)
    window.setTimeout(() => setToast((current) => (current === message ? null : current)), 2200)
  }, [])

  const value = useMemo<AppState>(
    () => ({
      liked,
      saved,
      following,
      collections,
      toast,
      toggleLike: (id) =>
        setLiked((prev) => {
          const next = new Set(prev)
          next.has(id) ? next.delete(id) : next.add(id)
          return next
        }),
      toggleSave: (id) =>
        setSaved((prev) => {
          const next = new Set(prev)
          next.has(id) ? next.delete(id) : next.add(id)
          return next
        }),
      toggleFollow: (name) =>
        setFollowing((prev) => {
          const next = new Set(prev)
          next.has(name) ? next.delete(name) : next.add(name)
          return next
        }),
      createCollection: (name) =>
        setCollections((prev) => [
          { id: `c${prev.length + 1}`, name, items: 0, createdAt: Date.now() },
          ...prev,
        ]),
      notify,
      dismissToast: () => setToast(null),
    }),
    [liked, saved, following, collections, toast, notify],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
