import React from 'react';

const icons = {
  home: ['M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z'],
  compass: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'm15.5 8.5-2 5-5 2 2-5z'],
  grid: ['M4 4h6v6H4z', 'M14 4h6v6h-6z', 'M4 14h6v6H4z', 'M14 14h6v6h-6z'],
  trophy: ['M7 4h10v4a5 5 0 0 1-10 0z', 'M7 6H4v2a4 4 0 0 0 4 4', 'M17 6h3v2a4 4 0 0 1-4 4', 'M12 13v7', 'M9 20h6'],
  trending: ['M3 17l6-6 4 4 8-8', 'M15 7h6v6'],
  sparkle: ['M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z'],
  heart: ['M12 20s-7-4.6-7-9.4A4 4 0 0 1 12 8a4 4 0 0 1 7 2.6C19 15.4 12 20 12 20z'],
  layers: ['M12 3 3 8l9 5 9-5z', 'm3 13 9 5 9-5'],
  bell: ['M6 9a6 6 0 1 1 12 0c0 4 1.5 5 2 6H4c.5-1 2-2 2-6z', 'M10 19a2 2 0 0 0 4 0'],
  message: ['M4 5h16v10H9l-5 4z'],
  user: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M4 21a8 8 0 0 1 16 0'],
  file: ['M6 3h8l4 4v14H6z', 'M14 3v4h4'],
  settings: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19.4 13a7.6 7.6 0 0 0 0-2l2-1.5-2-3.4-2.4 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.3 2.6a7.6 7.6 0 0 0-1.7 1l-2.4-1-2 3.4L6.6 11a7.6 7.6 0 0 0 0 2L4.6 14.5l2 3.4 2.4-1a7.6 7.6 0 0 0 1.7 1L11 21h4l.3-2.6a7.6 7.6 0 0 0 1.7-1l2.4 1 2-3.4z'],
  search: ['M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z', 'M20 20l-4.5-4.5'],
  plus: ['M12 5v14', 'M5 12h14'],
  arrowRight: ['M5 12h14', 'm13 6 6 6-6 6'],
  star: ['m12 3 2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z'],
  share: ['M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7', 'M12 15V3', 'm8 7 4-4 4 4'],
  bookmark: ['M7 4h10v16l-5-4-5 4z'],
  check: ['m5 13 4 4L19 7'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
  package: ['M12 3 3 7v10l9 4 9-4V7z', 'M3 7l9 4 9-4', 'M12 11v10'],
  clock: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 7v5l3 2'],
  chevronDown: ['m6 9 6 6 6-6'],
  idCard: ['M3 5h18v14H3z', 'M8 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z', 'M5 16c.6-1.6 1.7-2.4 3-2.4S10.4 14.4 11 16', 'M14 10h4', 'M14 14h3'],
  external: ['M14 4h6v6', 'M20 4l-8 8', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'],
  download: ['M12 3v12', 'm7 11 5 5 5-5', 'M5 21h14'],
  eye: ['M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
  megaphone: ['M3 11v3a1 1 0 0 0 1 1h2l4 5h2l-2-5h2l8 4V4L10 8H4a1 1 0 0 0-1 1z'],
  chart: ['M4 20V10', 'M10 20V4', 'M16 20v-7', 'M22 20H2'],
  gamepad: ['M7 12h2', 'M9 10v4', 'M16 13h.01', 'M18 11h.01', 'M6 7h12a4 4 0 0 1 4 4 4 4 0 0 1-7 3l-1-1h-4l-1 1a4 4 0 0 1-7-3 4 4 0 0 1 4-4z'],
  briefcase: ['M4 8h16v11H4z', 'M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2'],
  camera: ['M3 8h4l2-2h6l2 2h4v11H3z', 'M12 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z'],
  palette: ['M12 21a9 9 0 1 1 9-9c0 2-1.5 3-3 3h-1.5a2 2 0 0 0-1 2.6A2 2 0 0 1 12 21z', 'M7.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', 'M12 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z', 'M16.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'],
  wallet: ['M3 7h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M16 12h4'],
  map: ['M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z', 'M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'],
  music: ['M9 18V6l10-2v12', 'M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3z', 'M19 16a3 3 0 1 1-3-3 3 3 0 0 1 3 3z'],
  video: ['M3 7h11v10H3z', 'M14 11l7-4v10l-7-4z'],
  book: ['M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2z', 'M8 3v14'],
};

/**
 * Icône SVG (trait, 24×24).
 * @param {{ name: string, className?: string, fill?: string }} props
 */
export function Icon({ name, className = 'h-5 w-5', fill = 'none' }) {
  const traces = icons[name] || [];
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {traces.map((trace, index) => (
        <path key={index} d={trace} />
      ))}
    </svg>
  );
}

/** Logo OBERLAST. */
export function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold font-display text-lg font-bold text-gold">
        O
      </span>
      {!compact && <span className="font-display text-[15px] font-bold tracking-[0.2em] text-white">OBERLAST</span>}
    </div>
  );
}

/**
 * @param {{ children: React.ReactNode, variante?: 'primaire' | 'fantome' | 'sombre', className?: string }} props
 */
export function Bouton({ children, variante = 'primaire', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60';
  const variantes = {
    primaire: 'bg-gold text-black hover:bg-gold-soft',
    fantome: 'border border-white/15 text-white/80 hover:border-white/40 hover:text-white',
    sombre: 'bg-white/5 text-white/75 hover:bg-white/10',
  };
  return (
    <button className={`${base} ${variantes[variante]} ${className}`} {...props}>
      {children}
    </button>
  );
}

/**
 * @param {{ nom: string, taille?: string }} props
 */
export function Avatar({ nom, taille = 'h-9 w-9' }) {
  const initiale = nom.trim().charAt(0).toUpperCase();
  return (
    <span
      className={`${taille} flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep font-semibold text-black`}
    >
      {initiale}
    </span>
  );
}

/**
 * @param {{ valeur: number, votes?: number }} props
 */
export function Note({ valeur, votes }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-white/60">
      <span className="inline-flex items-center gap-1 font-medium text-gold">
        <Icon name="star" className="h-3.5 w-3.5" fill="currentColor" />
        {valeur.toFixed(1)}
      </span>
      {typeof votes === 'number' ? <span>({votes})</span> : null}
    </span>
  );
}

/**
 * @param {{ children: React.ReactNode, ton?: 'or' | 'gris' }} props
 */
export function Etiquette({ children, ton = 'or' }) {
  const tons = {
    or: 'bg-gold/15 text-gold ring-1 ring-gold/25',
    gris: 'bg-white/5 text-white/60 ring-1 ring-white/10',
  };
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${tons[ton]}`}>{children}</span>;
}
