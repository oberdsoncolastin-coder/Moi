import { useState } from 'react'
import {
  Bookmark,
  ChevronDown,
  Copy,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
  Sparkles,
  Zap,
} from 'lucide-react'
import type { Post } from '../data/mock'
import { Avatar, Thumb, Verified } from './ui'
import { useApp } from '../store'

export function Hero() {
  return (
    <section className="relative h-[145px] overflow-hidden rounded-[12px] bg-gradient-to-r from-night-950 via-[#2A2015] to-amber-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.35),transparent_35%)]" />
      <div className="absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="relative h-[110px] w-[86px] rotate-[-8deg] rounded-[12px] border border-white/25 bg-gradient-to-b from-white/25 to-black/40 p-1.5 shadow-2xl">
          <div className="h-full w-full rounded-[8px] bg-gradient-to-b from-night-900 to-night-950 p-1.5">
            <div className="h-1.5 w-8 rounded-full bg-amber" />
            <div className="mt-2 h-8 rounded bg-white/15" />
            <div className="mt-1.5 h-1 w-full rounded-full bg-white/20" />
            <div className="mt-1 h-1 w-4/5 rounded-full bg-white/15" />
            <div className="mt-2 h-5 rounded bg-amber/70" />
          </div>
        </div>
        <div className="absolute -left-14 top-3 h-16 w-24 rotate-[-6deg] rounded-lg border border-white/20 bg-white/10" />
        <div className="absolute -bottom-6 -left-20 h-14 w-28 rotate-[6deg] rounded-lg border border-white/20 bg-white/10" />
      </div>
      <div className="absolute right-5 top-4 grid h-8 w-8 place-items-center rounded-full bg-teal shadow-lg">
        <Sparkles size={15} className="text-white" />
      </div>

      <div className="relative flex h-full flex-col justify-center px-6">
        <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-amber">Discover · Explorar · Pairings</p>
        <h2 className="mt-1 text-[26px] font-black tracking-tight text-white">OBERLAST</h2>
        <p className="mt-1.5 max-w-[330px] text-[11.5px] leading-relaxed text-neutral-300">
          La plataforma perfecta para conectar y compartir con otros profesionales. Explore nuestro ecosistema de
          herramientas.
        </p>
      </div>
    </section>
  )
}

export function CategoryChips({
  labels,
  active,
  onSelect,
}: {
  labels: string[]
  active: string
  onSelect: (label: string) => void
}) {
  const [more, setMore] = useState(false)
  const visible = more ? labels : labels.slice(0, 6)
  return (
    <div className="no-scrollbar flex items-center gap-2 overflow-x-auto py-1">
      {visible.map((label) => {
        const isActive = label === active
        return (
          <button
            key={label}
            onClick={() => onSelect(label)}
            className={`shrink-0 rounded-full px-3 py-[6px] text-[11.5px] font-semibold transition-colors ${
              isActive
                ? 'bg-ink text-white'
                : 'border border-line bg-white text-body hover:border-neutral-300 hover:text-ink'
            }`}
          >
            {label}
          </button>
        )
      })}
      <button
        onClick={() => setMore((v) => !v)}
        className="flex shrink-0 items-center gap-1 rounded-full border border-line bg-white px-3 py-[6px] text-[11.5px] font-semibold text-body hover:border-neutral-300"
      >
        Más <ChevronDown size={12} className={more ? 'rotate-180 transition-transform' : 'transition-transform'} />
      </button>
    </div>
  )
}

export function FeedTabs({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const tabs = ['Siguiendo', 'Populares', 'Recientes']
  return (
    <div className="flex items-center gap-5">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative pb-1 text-[12.5px] font-bold transition-colors ${
            value === tab ? 'text-ink' : 'text-muted hover:text-body'
          }`}
        >
          {tab}
          {value === tab && <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-ink" />}
        </button>
      ))}
    </div>
  )
}

function MediaGrid({ media, extra }: { media: Post['media']; extra?: number }) {
  if (!media || media.length === 0) return null
  return (
    <div className="mt-3 grid grid-cols-4 gap-1.5">
      {media.slice(0, 4).map((m, index) => (
        <div key={index} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
          <Thumb tone={m.tone} kind={m.kind} label={m.label} className={`h-full w-full ${index === 0 ? 'min-h-[150px]' : 'min-h-[73px]'}`} />
        </div>
      ))}
      {extra ? (
        <span className="absolute bottom-2 right-2 rounded-full bg-black/80 px-2 py-0.5 text-[10.5px] font-bold text-white">
          +{extra}
        </span>
      ) : null}
    </div>
  )
}

function ProductBlock({ product }: { product: NonNullable<Post['product']> }) {
  return (
    <div className={`mt-3 overflow-hidden rounded-[12px] bg-gradient-to-br ${product.tone} p-4`}>
      <h4 className="text-[15px] font-extrabold text-white">{product.title}</h4>
      <p className="text-[12px] font-semibold text-white/85">{product.subtitle}</p>
      <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/80">{product.body}</p>
      <div className="relative mt-3 grid grid-cols-4 gap-1.5">
        {product.media.map((m, index) => (
          <Thumb
            key={index}
            tone={m.tone}
            kind={m.kind}
            className="aspect-[4/3] w-full rounded-[8px]"
          />
        ))}
        <span className="absolute bottom-2 right-2 rounded-full bg-black/75 px-2 py-0.5 text-[10px] font-bold text-white">
          +15
        </span>
      </div>
      {product.page && (
        <span className="mt-3 inline-block rounded-full bg-black/30 px-2.5 py-1 text-[10.5px] font-bold text-white">
          {product.page}
        </span>
      )}
    </div>
  )
}

export function PostCard({ post, compact = false }: { post: Post; compact?: boolean }) {
  const { liked, saved, toggleLike, toggleSave, notify } = useApp()
  const [copied, setCopied] = useState(false)
  const isLiked = liked.has(post.id)
  const isSaved = saved.has(post.id)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(post.text)
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true)
    notify('Texto copiado')
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <article className={`relative border-b border-line bg-white px-4 ${compact ? 'py-3.5' : 'py-4'}`}>
      <header className="flex items-start gap-2.5">
        <Avatar initials={post.author.initials} tone={post.author.tone} size={36} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[13.5px] font-bold text-ink">{post.author.name}</span>
            {post.author.verified && <Verified tone={post.author.verified} />}
            {post.author.handle && <span className="text-[11.5px] text-muted">{post.author.handle}</span>}
          </div>
          <p className="text-[11.5px] text-muted">
            {post.author.role} <span className="px-0.5">•</span> {post.time}
          </p>
        </div>
        <button aria-label="Más opciones" className="text-muted transition-colors hover:text-ink">
          <MoreHorizontal size={17} />
        </button>
      </header>

      <p className="mt-2 text-[13px] leading-[1.55] text-body">{post.text}</p>

      {post.product ? (
        <ProductBlock product={post.product} />
      ) : (
        <div className="relative">
          <MediaGrid media={post.media} extra={post.extraMedia} />
        </div>
      )}

      <footer className="mt-3 flex items-center gap-4">
        <button
          onClick={() => toggleLike(post.id)}
          aria-label="Me gusta"
          className={`flex items-center gap-1.5 transition-colors ${
            isLiked ? 'text-rose-500' : 'text-muted hover:text-ink'
          }`}
        >
          <Heart size={16} strokeWidth={1.8} fill={isLiked ? 'currentColor' : 'none'} />
          <span className="text-[12px] font-semibold">{post.likes + (isLiked ? 1 : 0)}</span>
        </button>

        <button aria-label="Comentarios" className="flex items-center gap-1.5 text-muted transition-colors hover:text-ink">
          <MessageCircle size={16} strokeWidth={1.8} />
          <span className="text-[12px] font-semibold">{post.comments}</span>
        </button>

        <button
          aria-label="Compartir"
          onClick={() => notify('Enlace copiado al portapapeles')}
          className="text-muted transition-colors hover:text-ink"
        >
          <Share2 size={16} strokeWidth={1.8} />
        </button>

        <button
          aria-label="Guardar"
          onClick={() => toggleSave(post.id)}
          className={`transition-colors ${isSaved ? 'text-amber' : 'text-muted hover:text-ink'}`}
        >
          <Bookmark size={16} strokeWidth={1.8} fill={isSaved ? 'currentColor' : 'none'} />
        </button>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => notify('Escribe una respuesta')}
            className="rounded-full border border-amber px-3 py-[5px] text-[11.5px] font-bold text-ink transition-colors hover:bg-amber/10"
          >
            Responder
          </button>
          <div className="group relative">
            <button
              onClick={copy}
              className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-[5px] text-[11.5px] font-semibold text-body transition-colors hover:border-neutral-300"
            >
              <Copy size={12} strokeWidth={1.9} />
              Copiar texto
            </button>
            <span className="pointer-events-none absolute -top-8 right-0 rounded-md bg-ink px-2 py-1 text-[10.5px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Copiar texto
            </span>
          </div>
        </div>
      </footer>

      {copied && (
        <span className="absolute right-4 top-3 rounded-md bg-ink px-2 py-1 text-[10.5px] font-semibold text-white">
          Copiado
        </span>
      )}
    </article>
  )
}

export function SectionTitle({ variant = 'Plus' }: { variant?: 'Plus' | 'Pair' }) {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-4">
      <h3 className="flex items-center gap-1.5 text-[15px] font-bold text-ink">
        <Zap size={15} className="text-amber" fill="currentColor" />
        {variant} – Recién descubiertos
      </h3>
      <button className="flex items-center gap-1 text-[12px] font-semibold text-muted transition-colors hover:text-ink">
        Ver más
        <ChevronDown size={13} className="-rotate-90" />
      </button>
    </div>
  )
}
