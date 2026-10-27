import React from 'react';
import { Icon, Avatar, Bouton, Note, Etiquette } from './ui.jsx';
import {
  categoriesPopulaires,
  ongletsDecouverte,
  publications,
  tendances,
  recommandees,
  populaires,
  profil,
} from '../data/mock.jsx';

/**
 * Bannière d'accueil.
 * @param {{ onExplorer: () => void }} props
 */
export function Banniere({ onExplorer }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-[#181820] via-[#111116] to-[#0a0a0d] px-7 py-9">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold font-display text-2xl font-bold text-gold">
          O
        </span>
        <span className="font-display text-2xl font-bold tracking-[0.22em] text-white">OBERLAST</span>
      </div>

      <h1 className="relative mt-6 font-display text-2xl font-semibold text-white sm:text-3xl">
        <span className="text-gold">Découvrez</span>
        <span className="mx-2 text-white/25">·</span>
        <span>Explorez</span>
        <span className="mx-2 text-white/25">·</span>
        <span>Partagez</span>
      </h1>

      <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-white/55">
        La plateforme sociale qui nous connecte aux meilleures applications et à leurs créateurs.
      </p>

      <div className="relative mt-6 flex flex-wrap gap-3">
        <Bouton onClick={onExplorer}>
          Explorer maintenant
          <Icon name="arrowRight" className="h-4 w-4" />
        </Bouton>
        <Bouton variante="fantome">Créer une publication</Bouton>
      </div>
    </section>
  );
}

/**
 * Bandeau des catégories populaires.
 * @param {{ onVoirTout: () => void }} props
 */
export function BandeCategories({ onVoirTout }) {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-white">Catégories populaires</h2>
        <button
          type="button"
          onClick={onVoirTout}
          className="inline-flex items-center gap-1 text-sm text-white/45 transition hover:text-white"
        >
          Voir toutes
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {categoriesPopulaires.map((categorie) => (
          <button
            key={categorie.label}
            type="button"
            className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-left transition hover:border-gold/40 hover:bg-white/[0.06]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gold transition group-hover:bg-gold/15">
              <Icon name={categorie.icon} className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm text-white/85">{categorie.label}</span>
              <span className="block truncate text-xs text-white/35">{categorie.applications} applications</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

/**
 * Carte d'une application dans une liste.
 * @param {{ application: import('../data/mock.jsx').Application }} props
 */
export function CarteApplication({ application }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3 transition hover:border-white/20">
      <Avatar nom={application.nom} taille="h-11 w-11" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-white/90">{application.nom}</p>
        <p className="truncate text-xs text-white/40">{application.categorie}</p>
        <div className="mt-1 flex items-center gap-2">
          <Note valeur={application.note} votes={application.votes} />
          {application.croissance ? <Etiquette ton="gris">+{application.croissance}</Etiquette> : null}
        </div>
      </div>
      <Icon name="plus" className="h-4 w-4 shrink-0 text-white/35" />
    </div>
  );
}

/** Liste « Tendances du moment ». */
export function PanneauTendances() {
  return (
    <section className="rounded-3xl border border-white/8 bg-white/[0.02] p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-base font-semibold text-white">Tendances du moment</h2>
        <button type="button" className="inline-flex items-center gap-1 text-xs text-white/45 hover:text-white">
          Voir en continu
          <Icon name="arrowRight" className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="mt-4 space-y-2.5">
        {tendances.map((application) => (
          <CarteApplication key={application.id} application={application} />
        ))}
      </div>
    </section>
  );
}

/** Liste « Recommandations pour vous ». */
export function PanneauRecommandations() {
  return (
    <section className="rounded-3xl border border-white/8 bg-white/[0.02] p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-base font-semibold text-white">Recommandations pour vous</h2>
        <button type="button" className="inline-flex items-center gap-1 text-xs text-white/45 hover:text-white">
          Voir toutes
          <Icon name="arrowRight" className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="mt-4 space-y-2.5">
        {recommandees.map((application) => (
          <CarteApplication key={application.id} application={application} />
        ))}
      </div>
    </section>
  );
}

/**
 * Publication avec aperçu de l'application partagée.
 * @param {{ publication: import('../data/mock.jsx').Publication }} props
 */
export function Publication({ publication }) {
  const { application } = publication;
  return (
    <article className="rounded-3xl border border-white/8 bg-white/[0.02] p-5">
      <header className="flex items-center gap-3">
        <Avatar nom={publication.auteur} taille="h-10 w-10" />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white/90">{publication.auteur}</p>
          <p className="truncate text-xs text-white/35">
            {publication.handle} · {publication.anciennete}
          </p>
        </div>
        <button type="button" aria-label="Enregistrer" className="ml-auto text-white/35 transition hover:text-gold">
          <Icon name="bookmark" className="h-5 w-5" />
        </button>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-white/70">{publication.texte}</p>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/8 bg-[#121217]">
        <div className="flex items-center gap-3 border-b border-white/5 p-4">
          <Avatar nom={application.nom} taille="h-12 w-12" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">{application.nom}</p>
            <p className="truncate text-xs text-white/40">{application.categorie}</p>
            <div className="mt-1 flex items-center gap-2">
              <Note valeur={application.note} votes={application.votes} />
              <Etiquette ton="gris">Créez comme un pro</Etiquette>
            </div>
          </div>
        </div>
        <p className="px-4 pt-3 text-xs leading-relaxed text-white/45">{application.resume}</p>
        <div className="flex items-center gap-2 p-4">
          <Bouton variante="sombre" className="px-3 py-1.5 text-xs">
            Ouvrir sur le site officiel
          </Bouton>
          <Bouton variante="sombre" className="px-3 py-1.5 text-xs">
            <Icon name="download" className="h-3.5 w-3.5" />
            App Store
          </Bouton>
          <Bouton variante="sombre" className="px-3 py-1.5 text-xs">
            <Icon name="download" className="h-3.5 w-3.5" />
            Google Play
          </Bouton>
        </div>
      </div>

      <footer className="mt-4 flex items-center gap-5 text-xs text-white/40">
        <span className="inline-flex items-center gap-1.5">
          <Icon name="heart" className="h-4 w-4" />
          {publication.likes}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Icon name="message" className="h-4 w-4" />
          {publication.commentaires}
        </span>
        <button type="button" className="inline-flex items-center gap-1.5 transition hover:text-white">
          <Icon name="share" className="h-4 w-4" />
          Partager
        </button>
        <button type="button" className="inline-flex items-center gap-1.5 transition hover:text-white">
          <Icon name="bookmark" className="h-4 w-4" />
          Enregistrer
        </button>
      </footer>
    </article>
  );
}

/** Flux « Plus des découvertes ». */
export function FluxDecouvertes() {
  const [onglet, setOnglet] = React.useState(ongletsDecouverte[0]);
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-white">Plus des découvertes</h2>
        <button type="button" className="inline-flex items-center gap-1 text-sm text-white/45 transition hover:text-white">
          Voir toutes
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 flex gap-1 border-b border-white/8">
        {ongletsDecouverte.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setOnglet(item)}
            className={`relative px-3.5 pb-2.5 text-sm transition ${
              onglet === item ? 'font-medium text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {item}
            {onglet === item ? <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gold" /> : null}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        {publications.map((publication) => (
          <Publication key={publication.id} publication={publication} />
        ))}
      </div>
    </section>
  );
}

/** Vue « Explorer » : recherche, onglets, catégories, applications populaires. */
export function VueExplorer() {
  const [onglet, setOnglet] = React.useState('Catégories');
  return (
    <div className="space-y-6">
      <div className="relative">
        <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
        <input
          type="search"
          aria-label="Rechercher une application"
          placeholder="Rechercher une application..."
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-2.5 pl-10 pr-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-gold/50"
        />
      </div>

      <div className="flex gap-1 border-b border-white/8">
        {['Catégories', 'Plateformes'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setOnglet(item)}
            className={`relative px-3.5 pb-2.5 text-sm transition ${
              onglet === item ? 'font-medium text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {item}
            {onglet === item ? <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gold" /> : null}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {categoriesPopulaires.map((categorie) => (
          <button
            key={categorie.label}
            type="button"
            className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-left transition hover:border-gold/40"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gold">
              <Icon name={categorie.icon} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm text-white/85">{categorie.label}</span>
              <span className="block truncate text-xs text-white/35">{categorie.applications} applications</span>
            </span>
            <Icon name="arrowRight" className="h-4 w-4 text-white/25" />
          </button>
        ))}
      </div>

      <button type="button" className="text-sm text-white/50 transition hover:text-white">
        Voir toutes les catégories
      </button>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-white">Applications populaires</h2>
          <button type="button" className="inline-flex items-center gap-1 text-sm text-white/45 hover:text-white">
            Voir tout
            <Icon name="arrowRight" className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 space-y-2.5">
          {populaires.map((application) => (
            <CarteApplication key={application.id} application={application} />
          ))}
        </div>
      </section>
    </div>
  );
}

/** Vue « Favoris ». */
export function VueFavoris() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-white">Favoris</h1>
      <div className="rounded-3xl border border-dashed border-white/12 bg-white/[0.02] p-10 text-center">
        <Icon name="heart" className="mx-auto h-8 w-8 text-gold" />
        <p className="mt-3 text-sm text-white/60">Vos applications favorites apparaîtront ici.</p>
        <p className="mt-1 text-xs text-white/35">Enregistrez une publication pour la retrouver facilement.</p>
      </div>
    </div>
  );
}

/** Vue « Profil » d'AlexTech. */
export function VueProfil() {
  const [onglet, setOnglet] = React.useState('Publications');
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/8 bg-white/[0.02] p-6">
        <div className="flex items-center gap-4">
          <Avatar nom={profil.nom} taille="h-16 w-16" />
          <div className="min-w-0">
            <h1 className="font-display text-xl font-semibold text-white">{profil.nom}</h1>
            <p className="text-sm text-white/40">{profil.handle}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-white/60">{profil.bio}</p>

        <div className="mt-5 flex gap-8 text-sm">
          <span className="text-white/50">
            <span className="font-display text-base font-semibold text-white">{profil.publications}</span> Publications
          </span>
          <span className="text-white/50">
            <span className="font-display text-base font-semibold text-white">{profil.abonnes}</span> Abonnés
          </span>
          <span className="text-white/50">
            <span className="font-display text-base font-semibold text-white">{profil.abonnements}</span> Abonnements
          </span>
        </div>
      </div>

      <div className="flex gap-1 border-b border-white/8">
        {['Publications', 'Abonnés', 'Abonnements'].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setOnglet(item)}
            className={`relative px-3.5 pb-2.5 text-sm transition ${
              onglet === item ? 'font-medium text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            {item}
            {onglet === item ? <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gold" /> : null}
          </button>
        ))}
      </div>

      <section>
        <h2 className="font-display text-lg font-semibold text-white">Applications</h2>
        <div className="mt-4 space-y-2.5">
          {populaires.map((application) => (
            <CarteApplication key={application.id} application={application} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-lg font-semibold text-white">Publications</h2>
        <div className="mt-4 space-y-4">
          {publications.map((publication) => (
            <Publication key={publication.id} publication={publication} />
          ))}
        </div>
      </section>
    </div>
  );
}
