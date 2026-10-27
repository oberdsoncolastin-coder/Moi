import { createContext, useCallback, useContext, useMemo, useState } from 'react';

/**
 * @typedef {Object} AppContextValue
 * @property {Set<string>} liked
 * @property {Set<string>} saved
 * @property {Set<string>} following
 * @property {string | null} toast
 * @property {(id: string) => void} toggleLike
 * @property {(id: string) => void} toggleSave
 * @property {(nom: string) => void} toggleFollow
 * @property {(message: string) => void} notify
 * @property {() => void} dismissToast
 */

const AppContext = createContext(null);

/**
 * État global léger de l'application (likes, favoris, notifications).
 * @param {{ children: React.ReactNode }} props
 */
function AppProvider({ children }) {
  const [liked, setLiked] = useState(() => new Set());
  const [saved, setSaved] = useState(() => new Set());
  const [following, setFollowing] = useState(() => new Set());
  const [toast, setToast] = useState(null);

  const notify = useCallback((message) => {
    setToast(message);
    window.setTimeout(() => setToast((current) => (current === message ? null : current)), 2200);
  }, []);

  const value = useMemo(
    () => ({
      liked,
      saved,
      following,
      toast,
      toggleLike: (id) =>
        setLiked((prev) => {
          const next = new Set(prev);
          next.has(id) ? next.delete(id) : next.add(id);
          return next;
        }),
      toggleSave: (id) =>
        setSaved((prev) => {
          const next = new Set(prev);
          next.has(id) ? next.delete(id) : next.add(id);
          return next;
        }),
      toggleFollow: (nom) =>
        setFollowing((prev) => {
          const next = new Set(prev);
          next.has(nom) ? next.delete(nom) : next.add(nom);
          return next;
        }),
      notify,
      dismissToast: () => setToast(null),
    }),
    [liked, saved, following, toast, notify]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

/**
 * Accès au contexte applicatif.
 * @returns {AppContextValue}
 */
function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp doit être utilisé dans AppProvider');
  return ctx;
}

export { AppProvider, useApp };
