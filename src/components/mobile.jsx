import React from 'react';
import { Icon, Avatar, Bouton, Note, Etiquette } from './ui.jsx';
import { accueilMobile, ongletsExplorer, categoriesMobile, publications, profil } from '../data/mock.jsx';

/** Écran d'accueil mobile : en-tête, phrase d'accroche, catégorie, publication. */
export function AccueilMobile({ onExplorer, onProfil }) {
  const publication = publications[0];
  return (
    <div className="min-h-screen bg-[#0b0b0d] pb-24">
      <header className="flex items-center justify-between px-4 pb-3 pt-3">
        <span className="text-xs font-medium text-white/70">9:41</span>
        <span className="font-display text-sm font-bold tracking-[0.2em] text-white">OBERLAST</span>
        <button type="button" aria-label="Notifications" className="relative text-white/70">
          <Icon name="bell" className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </header>

      <div className="px-4">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
          Découvertes · Explorer · Partagez
        </p>

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#1a1a20] to-[#0f0f13]">
          <div className="px-4 py-5 text-center">
            <p className="text-[15px] leading-relaxed text-white/80">
              Le meilleur réseau social pour découvrir et partager les applications qui changent tout.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold font-display text-lg font-bold text-gold">
                O
              </span>
              <span className="font-display text-sm font-bold tracking-[0.2em] text-white">OBERLAST</span>
            </div>
          </div>
        </div>

        <button type="button" onClick={onExplorer} className="mt-4 flex w-full items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-left">
          <span className="text-sm text-white/80">Explorer</span>
          <Icon name="arrowRight" className="h-4 w-4 text-gold" />
        </button>

        <div className="mt-5 flex items-center justify-between">
          <h2 className="font-display text-sm font-semibold text-white">{accueilMobile.titre}</h2>
          <button type="button" onClick={onExplorer} className="text-xs text-white/45">
            {accueilMobile.action}
          </button>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {categoriesMobile.slice(0, 6).map((categorie) => (
            <button
              key={categorie.label}
              type="button"
              onClick={onExplorer}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/8 bg-white/[0.03] py-3 transition active:bg-white/[0.07]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-gold">
                <Icon name={categorie.icon} className="h-[18px] w-[18px]" />
              </span>
              <span className="text-[11px] text-white/70">{categorie.label}</span>
            </button>
          ))}
        </div>

        <h2 className="mt-6 font-display text-sm font-semibold text-white">{accueilMobile.section}</h2>

        <article className="mt-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
          <header className="flex items-center gap-2.5">
            <Avatar nom={publication.auteur} taille="h-9 w-9" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-white/90">{publication.auteur}</p>
              <p className="truncate text-[11px] text-white/40">{publication.handle}</p>
            </div>
            <span className="text-[10px] text-white/35">{publication.anciennete}</span>
          </header>

          <p className="mt-3 text-[13px] leading-relaxed text-white/75">{publication.texte}</p>

          <div className="mt-3 rounded-xl border border-white/8 bg-[#121217] p-3">
            <div className="flex items-center gap-2.5">
              <Avatar nom={publication.application.nom} taille="h-10 w-10" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-semibold text-white">{publication.application.nom}</p>
                <p className="truncate text-[11px] text-white/40">{publication.application.handle}</p>
              </div>
              <Note valeur={publication.application.note} votes={publication.application.votes} />
            </div>
            <p className="mt-2.5 text-[11px] leading-relaxed text-white/45">{publication.application.resume}</p>
            <div className="mt-3 flex gap-2">
              <Bouton variante="sombre" className="px-2.5 py-1.5 text-[11px]">
                Ouvrir sur le site officiel
              </Bouton>
              <Bouton variante="sombre" className="px-2.5 py-1.5 text-[11px]">
                App Store
              </Bouton>
            </div>
          </div>

          <footer className="mt-3 flex items-center gap-4 text-[11px] text-white/40">
            <span className="inline-flex items-center gap-1">
              <Icon name="heart" className="h-3.5 w-3.5" />
              {publication.likes}
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="message" className="h-3.5 w-3.5" />
              {publication.commentaires}
            </span>
            <button type="button" className="inline-flex items-center gap-1">
              <Icon name="share" className="h-3.5 w-3.5" />
              Partager
            </button>
          </footer>
        </article>

        <button type="button" onClick={onProfil} className="mt-4 flex w-full items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-left">
          <Avatar nom={profil.nom} taille="h-10 w-10" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-white/85">{profil.nom}</p>
            <p className="truncate text-[11px] text-white/40">{profil.handle}</p>
          </div>
          <Etiquette ton="or">Profil</Etiquette>
        </button>
      </div>
    </div>
  );
}

/** Écran « Explorer » mobile : recherche, onglets, catégories. */
export function ExplorerMobile({ onRetour }) {
  const [onglet, setOnglet] = React.useState(ongletsExplorer[0]);
  const [recherche, setRecherche] = React.useState('');
  return (
    <div className="min-h-screen bg-[#0b0b0d] pb-24">
      <header className="flex items-center gap-3 px-4 pb-3 pt-3">
        <span className="text-xs font-medium text-white/70">9:41</span>
        <span className="font-display text-sm font-bold tracking-[0.2em] text-white">OBERLAST</span>
        <button type="button" onClick={onRetour} aria-label="Fermer" className="ml-auto text-white/60">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </header>

      <div className="px-4">
        <div className="relative">
          <Icon name="search" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          <input
            type="search"
            value={recherche}
            onChange={(event) => setRecherche(event.target.value)}
            placeholder="Recherchons une application..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold/50"
          />
        </div>

        <div className="mt-4 flex gap-1 border-b border-white/8">
          {ongletsExplorer.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setOnglet(item)}
              className={`relative px-3 pb-2.5 text-xs transition ${
                onglet === item ? 'font-medium text-white' : 'text-white/40'
              }`}
            >
              {item}
              {onglet === item ? <span className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-gold" /> : null}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {categoriesMobile.map((categorie) => (
            <button
              key={categorie.label}
              type="button"
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/8 bg-white/[0.03] py-3 transition active:bg-white/[0.07]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-gold">
                <Icon name={categorie.icon} className="h-[18px] w-[18px]" />
              </span>
              <span className="text-center text-[11px] leading-tight text-white/70">{categorie.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Feuille de création de publication (mobile). */
export function PublicationMobile({ onFermer }) {
  const [texte, setTexte] = React.useState('');
  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-[#0b0b0d]">
      <header className="flex items-center justify-between px-4 pb-3 pt-3">
        <span className="text-xs font-medium text-white/70">9:41</span>
        <span className="font-display text-sm font-bold tracking-[0.2em] text-white">OBERLAST</span>
        <button type="button" onClick={onFermer} aria-label="Fermer" className="text-white/60">
          <Icon name="close" className="h-5 w-5" />
        </button>
      </header>

      <div className="flex-1 px-4">
        <h1 className="font-display text-lg font-semibold text-white">Créer une publication</h1>
        <textarea
          value={texte}
          onChange={(event) => setTexte(event.target.value)}
          rows={5}
          placeholder="J'ai découvert une pépite..."
          className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold/50"
        />
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
          <Avatar nom="CapCut" taille="h-10 w-10" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white">CapCut</p>
            <p className="truncate text-[11px] text-white/40">@CapCut</p>
          </div>
          <Etiquette ton="or">4.7</Etiquette>
        </div>
      </div>

      <div className="p-4">
        <Bouton className="w-full" onClick={onFermer}>
          Publier
        </Bouton>
      </div>
    </div>
  );
}
