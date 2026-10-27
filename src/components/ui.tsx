import type { ReactNode } from 'react'
import { Check } from 'lucide-react'

export function HexMark({
  size = 32,
  tone = 'amber',
}: {
  size?: number
  tone?: 'amber' | 'dark' | 'light'
}) {
  const bg = tone === 'light' ? '#FFFFFF' : tone === 'amber' ? '#E3B341' : '#0B0B0B'
  const fg = tone === 'light' ? '#E3B341' : '#0B0B0B'
  return (
    <span
      className="grid shrink-0 place-items-center"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
        <polygon points="50,4 92,27 92,73 50,96 8,73 8,27" fill={bg} />
        <circle cx="50" cy="50" r="17" fill="none" stroke={fg} strokeWidth="9" />
      </svg>
    </span>
  )
}

export function Logo({
  tone = 'light',
  size = 'md',
  mark = true,
}: {
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  mark?: boolean
}) {
  const text = tone === 'dark' ? 'text-white' : 'text-ink'
  const sizes = {
    sm: { mark: 22, word: 'text-[14px]' },
    md: { mark: 28, word: 'text-[19px]' },
    lg: { mark: 40, word: 'text-[26px]' },
  }[size]

  return (
    <div className="flex items-center gap-2.5">
      {mark && <HexMark size={sizes.mark} tone={tone === 'dark' ? 'amber' : 'light'} />}
      <span className={`${sizes.word} ${text} font-black tracking-[0.18em]`}>OBERLAST</span>
    </div>
  )
}

export function Avatar({
  initials,
  tone,
  size = 36,
  rounded = 'full',
  ring = false,
}: {
  initials: string
  tone: string
  size?: number
  rounded?: 'full' | 'lg'
  ring?: boolean
}) {
  return (
    <span
      className={`grid shrink-0 place-items-center bg-gradient-to-br ${tone} font-bold text-white ${
        rounded === 'full' ? 'rounded-full' : 'rounded-lg'
      } ${ring ? 'ring-2 ring-amber' : ''}`}
      style={{ width: size, height: size, fontSize: Math.max(9, size * 0.36) }}
    >
      {initials}
    </span>
  )
}

export function Verified({ tone = 'amber' }: { tone?: 'amber' | 'blue' }) {
  const color = tone === 'amber' ? 'bg-amber text-ink' : 'bg-brand text-white'
  return (
    <span className={`${color} grid h-[15px] w-[15px] shrink-0 place-items-center rounded-full`}>
      <Check size={10} strokeWidth={4} />
    </span>
  )
}

export function Thumb({
  tone,
  kind = 'gradient',
  label,
  className = '',
}: {
  tone: string
  kind?: 'gradient' | 'ui' | 'phone' | 'dark'
  label?: string
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`}>
      {kind === 'ui' && (
        <div className="absolute inset-0 flex flex-col justify-center gap-1.5 p-3">
          <div className="h-1.5 w-2/3 rounded-full bg-white/45" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/25" />
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            <div className="h-6 rounded bg-white/25" />
            <div className="h-6 rounded bg-white/15" />
            <div className="h-6 rounded bg-white/35" />
          </div>
        </div>
      )}
      {kind === 'phone' && (
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-[70%] w-[38%] rounded-[10px] border-2 border-white/60 bg-black/45 p-1.5">
            <div className="mb-1 h-1 w-1/2 rounded-full bg-white/70" />
            <div className="h-3 w-full rounded bg-amber/80" />
            <div className="mt-1 h-1 w-full rounded-full bg-white/30" />
            <div className="h-1 w-4/5 rounded-full bg-white/20" />
          </div>
          {label && (
            <span className="absolute bottom-2 right-2 rounded bg-black/55 px-1.5 py-0.5 text-[9px] font-bold tracking-widest text-white">
              {label}
            </span>
          )}
        </div>
      )}
      {kind === 'dark' && (
        <div className="absolute inset-0">
          <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-amber/20 blur-xl" />
          <div className="absolute -bottom-6 -left-2 h-20 w-20 rounded-full bg-violet-500/20 blur-xl" />
        </div>
      )}
      {kind === 'gradient' && (
        <div className="absolute inset-0">
          <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-black/20 blur-2xl" />
        </div>
      )}
    </div>
  )
}

export function AmberButton({
  children,
  onClick,
  variant = 'solid',
  className = '',
  type = 'button',
}: {
  children: ReactNode
  onClick?: () => void
  variant?: 'solid' | 'outline'
  className?: string
  type?: 'button' | 'submit'
}) {
  const base =
    'inline-flex items-center justify-center gap-1.5 rounded-[10px] px-3.5 py-2 text-[12px] font-bold transition-colors'
  const styles =
    variant === 'solid'
      ? 'bg-amber text-ink hover:bg-amber-dark'
      : 'border border-amber bg-white text-ink hover:bg-amber/10'
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  )
}

export function Pill({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-amber px-2.5 py-1 text-[11px] font-bold text-ink ${className}`}
    >
      {children}
    </span>
  )
}
