import React from 'react';
import { BarreLaterale, BarreSuperieure, RailDroit, NavigationMobile } from './components/shell.jsx';
import {
  Banniere,
  BandeCategories,
  FluxDecouvertes,
  PanneauTendances,
  PanneauRecommandations,
  VueExplorer,
  VueFavoris,
  VueProfil,
} from './components/panels.jsx';
import { AccueilMobile, ExplorerMobile, PublicationMobile } from './components/mobile.jsx';
import { useApp } from './store.jsx';

/**
 * Application OBERLAST — plateforme sociale de découverte d'applications.
 */
export default function App() {
  const [vue, setVue] = React.useState('accueil');
  const [mobile, setMobile] = React.useState('accueil');
  const [publier, setPublier] = React.useState(false);
  const { toast } = useApp();

  const naviguer = (cible) => {
    setVue(cible);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const naviguerMobile = (cible) => {
    setMobile(cible);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      {/* Bureau */}
      <div className="hidden lg:flex">
        <BarreLaterale vue={vue} onNaviguer={naviguer} />
        <div className="flex min-h-screen min-w-0 flex-1 flex-col">
          <BarreSuperieure />
          <main className="flex-1">
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-6 px-8 py-6 2xl:grid-cols-[minmax(0,1fr)_320px]">
              <div className="min-w-0 space-y-8">
                {vue === 'accueil' ? (
                  <>
                    <Banniere onExplorer={() => naviguer('explorer')} />
                    <BandeCategories onVoirTout={() => naviguer('categories')} />
                    <FluxDecouvertes />
                  </>
                ) : null}
                {vue === 'explorer' || vue === 'categories' ? <VueExplorer /> : null}
                {vue === 'tendances' ? <PanneauTendances /> : null}
                {vue === 'recommandations' ? <PanneauRecommandations /> : null}
                {vue === 'favoris' ? <VueFavoris /> : null}
                {vue === 'profil' || vue === 'publications' ? <VueProfil /> : null}
                {vue === 'classements' ? <PanneauTendances /> : null}
                {vue === 'collections' ? <VueFavoris /> : null}
                {vue === 'notifications' || vue === 'messagers' || vue === 'parametres' ? (
                  <VueFavoris />
                ) : null}
              </div>
              <div className="hidden 2xl:block">
                <PanneauTendances />
              </div>
            </div>
          </main>
        </div>
        <RailDroit onPublier={() => setPublier(true)} />
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        {mobile === 'explorer' ? (
          <ExplorerMobile onRetour={() => setMobile('accueil')} />
        ) : null}
        {mobile === 'accueil' ? (
          <AccueilMobile onExplorer={() => setMobile('explorer')} onProfil={() => setMobile('profil')} />
        ) : null}
        {mobile === 'favoris' ? <div className="px-4 pt-4"><VueFavoris /></div> : null}
        {mobile === 'profil' ? <div className="px-4 pt-4"><VueProfil /></div> : null}
        <NavigationMobile vue={mobile} onNaviguer={naviguerMobile} />
      </div>

      {publier ? <PublicationMobile onFermer={() => setPublier(false)} /> : null}

      {toast ? (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-white/10 bg-[#16161b] px-4 py-2.5 text-sm text-white/85">
          {toast}
        </div>
      ) : null}
    </div>
  );
}
