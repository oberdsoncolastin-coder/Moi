import { createContext, useCallback, useContext, useMemo, useState } from "react";
const AppContext = createContext(null);
function AppProvider({ children }) {
  const [liked, setLiked] = useState(/* @__PURE__ */ new Set());
  const [saved, setSaved] = useState(/* @__PURE__ */ new Set());
  const [following, setFollowing] = useState(/* @__PURE__ */ new Set(["LabGroup"]));
  const [collections, setCollections] = useState([]);
  const [toast, setToast] = useState(null);
  const notify = useCallback((message) => {
    setToast(message);
    window.setTimeout(() => setToast((current) => current === message ? null : current), 2200);
  }, []);
  const value = useMemo(
    () => ({
      liked,
      saved,
      following,
      collections,
      toast,
      toggleLike: (id) => setLiked((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      }),
      toggleSave: (id) => setSaved((prev) => {
        const next = new Set(prev);
        next.has(id) ? next.delete(id) : next.add(id);
        return next;
      }),
      toggleFollow: (name) => setFollowing((prev) => {
        const next = new Set(prev);
        next.has(name) ? next.delete(name) : next.add(name);
        return next;
      }),
      createCollection: (name) => setCollections((prev) => [
        { id: `c${prev.length + 1}`, name, items: 0, createdAt: Date.now() },
        ...prev
      ]),
      notify,
      dismissToast: () => setToast(null)
    }),
    [liked, saved, following, collections, toast, notify]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
export {
  AppProvider,
  useApp
};
