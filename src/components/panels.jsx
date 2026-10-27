import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  FolderOpen,
  Heart,
  MessageCircle,
  MessageSquare,
  Plus,
  Share2,
  Tag,
  Users
} from "lucide-react";
import { brand, categories, docRows, docRowsSecondary, docTabs } from "../data/mock";
import { useApp } from "../store";
import { HexMark, Thumb } from "./ui";
function PhoneIllustration() {
  return <div className="relative hidden h-[230px] flex-1 items-center justify-center lg:flex"><div className="absolute h-40 w-40 rounded-full bg-amber/20 blur-3xl" /><div className="relative h-[190px] w-[104px] rotate-[-8deg] rounded-[18px] border border-white/15 bg-gradient-to-b from-[#1b1b1f] to-black p-1.5 shadow-2xl"><div className="flex h-full flex-col gap-1.5 overflow-hidden rounded-[13px] bg-black/70 p-1.5"><div className="h-2 w-1/2 rounded-full bg-white/20" /><div className="h-12 rounded-[8px] bg-gradient-to-br from-violet-500 to-blue-600" /><div className="flex flex-1 gap-1.5"><div className="w-1/2 rounded-[6px] bg-white/85" /><div className="flex w-1/2 flex-col gap-1.5"><div className="h-6 rounded-[6px] bg-amber" /><div className="flex-1 rounded-[6px] bg-orange-500/80" /></div></div><div className="h-2 w-1/3 rounded-full bg-white/15" /></div></div><span className="absolute left-2 top-4 grid h-9 w-9 place-items-center rounded-full bg-blue-500/90 text-white shadow-lg"><Users size={15} /></span><span className="absolute right-4 top-14 grid h-9 w-9 place-items-center rounded-full bg-violet-500/90 text-white shadow-lg"><Heart size={15} /></span><span className="absolute bottom-6 right-10 grid h-9 w-9 place-items-center rounded-full bg-orange-500/90 text-white shadow-lg"><Share2 size={15} /></span><span className="absolute bottom-3 left-6 rounded-full bg-black/70 px-2.5 py-1 text-[9.5px] font-bold text-neutral-300">
        Todas · Inglés
      </span></div>;
}
function Hero() {
  const { notify } = useApp();
  return <section className="relative overflow-hidden rounded-[16px] bg-night-950 px-6 py-7"><div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-amber/20 blur-3xl" /><div className="pointer-events-none absolute bottom--10 right-0 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl" /><div className="relative flex items-center gap-6"><div className="min-w-0 flex-[1.15]"><div className="flex items-center gap-2"><HexMark size={22} tone="amber" /><span className="text-[22px] font-black tracking-[0.22em] text-white">
              OBERLAST
              <sup className="ml-0.5 align-super text-[10px] text-amber">®</sup></span></div><p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">{brand.baseline}</p><p className="mt-3 max-w-[420px] text-[12.5px] leading-relaxed text-neutral-300">{brand.paragraph}</p><div className="mt-5 flex flex-wrap items-center gap-2.5"><button
    onClick={() => notify("Explorando el sistema")}
    className="inline-flex items-center gap-1.5 rounded-full bg-amber px-4 py-2 text-[12px] font-extrabold text-ink"
  >
              Explorar el sistema <ChevronRight size={14} /></button><button className="rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold text-neutral-300">
              Ver plantillas
            </button></div><div className="mt-5 flex items-center gap-2"><button className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-neutral-300">
              English <ChevronDown size={12} /></button><button className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-neutral-300">
              Português <ChevronDown size={12} /></button></div></div><PhoneIllustration /></div></section>;
}
function CategoryRow() {
  return <section className="px-1 pt-5"><div className="flex items-center justify-between"><h2 className="text-[14px] font-bold text-ink">Categorías principales</h2><button className="text-[11.5px] font-semibold text-muted hover:text-ink">Ver más</button></div><div className="mt-3 flex gap-4 overflow-x-auto pb-1">{categories.map((category, index) => <button key={`${category.label}-${index}`} className="flex w-[54px] shrink-0 flex-col items-center gap-1.5"><span className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${category.tone}`}><span className="text-[11px] font-black text-white/90">{category.label.slice(0, 1)}</span></span><span className="w-full truncate text-center text-[9.5px] font-semibold text-muted">{category.label}</span></button>)}</div></section>;
}
function DocRowLine({
  title,
  subtitle,
  tone,
  tag,
  action,
  avatars,
  thumbs
}) {
  const { notify } = useApp();
  return <div className="border-b border-line px-4 py-3 last:border-b-0"><div className="flex items-center gap-3"><span className={`grid h-7 w-7 shrink-0 place-items-center rounded-[7px] bg-gradient-to-br ${tone}`}><span className="text-[10px] font-black text-white/90">{title.slice(0, 1)}</span></span><div className="min-w-0 flex-1"><div className="flex items-center gap-1.5"><p className="truncate text-[12.5px] font-bold text-ink">{title}</p>{tag && <span className="rounded bg-[#F1F2F4] px-1.5 py-[1px] text-[9px] font-bold text-[#6B7280]">{tag}</span>}</div><p className="truncate text-[11px] text-muted">{subtitle}</p></div>{action === "Abrir" && <button
    onClick={() => notify(`Abriendo ${title}`)}
    className="rounded-full bg-amber px-3 py-1 text-[11px] font-bold text-ink"
  >
            Abrir
          </button>}{action === "Avatars" && avatars && <div className="flex -space-x-2">{avatars.map((avatar, index) => <span
    key={index}
    className={`grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-gradient-to-br ${avatar}`}
  ><span className="text-[8px] font-bold text-white">U</span></span>)}</div>}</div>{thumbs && <div className="mt-2.5 flex items-center gap-2 pl-10">{[
    "from-emerald-300 to-emerald-600",
    "from-slate-400 to-slate-700",
    "from-blue-400 to-indigo-700",
    "from-neutral-600 to-neutral-900",
    "from-rose-400 to-purple-800"
  ].map((tone2, index) => <Thumb key={index} tone={tone2} kind="gradient" className="h-9 w-14 rounded-[6px]" />)}<button className="grid h-9 w-9 place-items-center rounded-[6px] border border-dashed border-neutral-300 text-muted"><Plus size={13} /></button></div>}</div>;
}
function DocumentCard({
  title = "Plan A Mis documentos",
  rows = docRows,
  secondary = false
}) {
  const [tab, setTab] = useState(docTabs[0]);
  return <section className="mt-4 overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]"><div className="flex items-center justify-between px-4 pt-3.5"><div><h3 className="text-[13.5px] font-bold text-ink">{title}</h3><p className="text-[10.5px] text-muted">{secondary ? "Comparte y organiza tus recursos" : "Tus documentos y proyectos"}</p></div><button className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted">
          Ver más <ChevronDown size={12} /></button></div><div className="mt-2 flex items-center gap-5 border-b border-line px-4">{docTabs.map((item) => <button
    key={item}
    onClick={() => setTab(item)}
    className={`relative pb-2 text-[12px] font-semibold ${tab === item ? "text-ink" : "text-muted"}`}
  >{item}{tab === item && <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-ink" />}</button>)}</div><div>{rows.map((row) => <DocRowLine key={row.title + row.tone} {...row} />)}</div>{secondary && <div className="p-4"><div className="rounded-[12px] bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 p-4"><p className="text-[13px] font-extrabold text-white">Community</p><p className="mt-1 max-w-[320px] text-[11.5px] leading-relaxed text-white/80">
              Discover explore and share your knowledge on mobile.
            </p><div className="mt-3 grid grid-cols-3 gap-2"><div className="h-10 rounded-[8px] bg-white/25" /><div className="h-10 rounded-[8px] bg-white/15" /><div className="h-10 rounded-[8px] bg-white/30" /></div></div></div>}<div className="flex items-center justify-between border-t border-line px-4 py-2.5"><button className="rounded-full bg-[#F3F4F6] px-3 py-1 text-[11px] font-semibold text-body">
          Explorar
        </button><div className="flex items-center gap-4"><button className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted"><FolderOpen size={13} /> Categorías
          </button><button className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted"><Tag size={13} /> Etiquetas
          </button><button className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted"><Users size={13} /> Empleados
          </button></div></div></section>;
}
function ActionBar() {
  const { liked, toggleLike, notify } = useApp();
  const actions = [
    { id: "like", label: "Like", icon: Heart, count: 2 },
    { id: "chat", label: "Chat", icon: MessageCircle, count: 1 },
    { id: "share", label: "Share", icon: Share2, count: 0 },
    { id: "comment", label: "Comment", icon: MessageSquare, count: 0 }
  ];
  return <div className="mt-4 flex items-center justify-around rounded-[12px] border border-line bg-white px-3 py-2.5">{actions.map((action) => {
    const Icon = action.icon;
    const isLiked = liked.has(action.id);
    return <button
      key={action.id}
      onClick={() => {
        if (action.id === "like") toggleLike(action.id);
        else notify(`${action.label} compartilhada`);
      }}
      className="relative flex flex-col items-center gap-0.5 text-[10.5px] font-semibold text-muted hover:text-ink"
    ><Icon size={15} className={isLiked ? "text-danger" : ""} fill={isLiked ? "currentColor" : "none"} />{action.label}{action.count > 0 && <span className="absolute -right-3 -top-1 grid h-[15px] min-w-[15px] place-items-center rounded-full bg-danger px-1 text-[9px] font-bold text-white">{action.count}</span>}</button>;
  })}</div>;
}
export {
  ActionBar,
  CategoryRow,
  DocumentCard,
  Hero,
  docRowsSecondary
};
