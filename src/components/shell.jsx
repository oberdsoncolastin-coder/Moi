import React from 'react';
import { Icon, Logo, Avatar, Bouton } from './ui.jsx';
import { navigation, compte, profil, railDroit } from '../data/mock.jsx';

/**
 * Barre latérale de navigation (bureau).
 * @param {{ vue: string, onNaviguer: (vue: string) => void }} props
 */
export function BarreLaterale({ vue, onNaviguer }) {
  return (
    <aside className="hidden w-[248px] shrink-0 flex-col border-r border-white/5 bg-[#0e0e11] px-4 py-5 lg:flex">
      <Logo />

      <nav className="mt-7 flex flex-1 flex-col gap-0.5">
        {navigation.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNaviguer(item.id)}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
              vue === item.id ? 'bg-white/[0.07] text-white' : 'text-white/50 hover:bg-white/5 hover:text-white/90'
            }`}
          >
            <Icon name={item.icon} className="h-[18px] w-[18px]" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge ? (
              <span className="rounded-full bg-gold px-2 py-0.5 text-[11px] font-semibold text-black">{item.badge}</span>
            ) : null}
          </button>
        ))}
      </nav>

      <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">Mon espace</p>
      <nav className="flex flex-col gap-0.5">
        {compte.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNaviguer(item.id)}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
              vue === item.id ? 'bg-white/[0.07] text-white' : 'text-white/50 hover:bg-white/5 hover:text-white/90'
            }`}
          >
            <Icon name={item.icon} className="h-[18px] w-[18px]" />
            <span className="flex-1 text-left">{item.label}</span>
          </button>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => onNaviguer('profil')}
        className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 px-3 py-2.5 text-left transition hover:border-white/25"
      >
        <Avatar nom={profil.nom} taille="h-8 w-8" />
        <span className="flex-1 text-sm text-white/80">{profil.nom}</span>
        <Icon name="chevronDown" className="h-4 w-4 text-white/40" />
      </button>
    </aside>
  );
}

/** Barre supérieure : recherche, notifications, badge, profil. */
export function BarreSuperieure() {
  return (
    <header className="flex items-center gap-4 border-b border-white/5 bg-[#0b0b0d]/80 px-4 py-3.5 backdrop-blur lg:px-8">
      <div className="lg:hidden">
        <Logo compact />
      </div>

      <div className="relative min-w-0 flex-1 md:max-w-xl">
        <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
        <input
          type="search"
          aria-label="Rechercher une application"
          placeholder="Rechercher une application, ou développez une catégorie..."
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-gold/50 focus:bg-white/[0.06]"
        />
      </div>

      <div className="relative hidden sm:block">
        <Icon name="bell" className="h-5 w-5 text-white/65" />
        <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
          3
        </span>
      </div>

      <button type="button" className="hidden text-white/65 transition hover:text-white sm:block" aria-label="Carte d'identité">
        <Icon name="idCard" className="h-5 w-5" />
      </button>

      <Avatar nom={profil.nom} />
    </header>
  );
}

/**
 * Colonne de droite : partage, profil développé, nouveautés, applications populaires.
 * @param {{ onPublier?: () => void }} props
 */
export function RailDroit({ onPublier }) {
  return (
    <aside className="hidden w-[300px] shrink-0 flex-col gap-4 border-l border-white/5 bg-[#0e0e11] p-5 xl:flex">
      <div className="rounded-2xl border border-white/8 bg-gradient-to-b from-[#1a1a20] to-[#101014] p-4">
        <h3 className="font-display text-sm font-semibold text-white">{railDroit.partage.titre}</h3>
        <p className="mt-2 text-xs leading-relaxed text-white/50">{railDroit.partage.texte}</p>
        <Bouton className="mt-4 w-full" variante="primaire" onClick={onPublier}>
          Créer une publication
        </Bouton>
      </div>

      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
        <h3 className="font-display text-sm font-semibold text-white">{railDroit.profilDeveloppe.titre}</h3>
        <div className="mt-3 flex items-center gap-3">
          <Avatar nom={railDroit.profilDeveloppe.application.nom} taille="h-9 w-9" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-white/85">{railDroit.profilDeveloppe.application.nom}</p>
            <p className="truncate text-xs text-white/40">{railDroit.profilDeveloppe.application.handle}</p>
          </div>
          <Bouton variante="fantome" className="px-3 py-1.5 text-xs">
            S'abonner
          </Bouton>
        </div>
      </div>

      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
        <p className="text-xs leading-relaxed text-white/50">{railDroit.nouveautes.texte}</p>
      </div>

      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm font-semibold text-white">Applications populaires</h3>
          <button type="button" className="inline-flex items-center gap-1 text-xs text-white/45 hover:text-white">
            Voir toutes
            <Icon name="arrowRight" className="h-3.5 w-3.5" />
          </button>
        </div>
        <ul className="mt-3 space-y-2.5">
          {['Canva', 'OpenAI', 'Notion', 'CapCut'].map((nom) => (
            <li key={nom} className="flex items-center gap-3">
              <Avatar nom={nom} taille="h-8 w-8" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-white/80">{nom}</p>
                <p className="truncate text-xs text-white/35">@{nom}</p>
              </div>
              <Icon name="plus" className="h-4 w-4 text-white/35" />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

/** Barre de navigation inférieure (mobile). */
export function NavigationMobile({ vue, onNaviguer }) {
  const items = [
    { id: 'accueil', label: 'Accueil', icon: 'home' },
    { id: 'explorer', label: 'Explorer', icon: 'compass' },
    { id: 'favoris', label: 'Favoris', icon: 'heart' },
    { id: 'profil', label: 'Profil', icon: 'user' },
  ];
  return (
    <nav className="flex items-center justify-around border-t border-white/5 bg-[#0e0e11] px-2 py-2.5 lg:hidden">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onNaviguer(item.id)}
          className={`flex flex-col items-center gap-1 rounded-lg px-3 py-1 text-[11px] transition ${
            vue === item.id ? 'text-gold' : 'text-white/40'
          }`}
        >
          <Icon name={item.icon} className="h-5 w-5" />
          {item.label}
        </button>
      ))}
    </nav>
  );
}
