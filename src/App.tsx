import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CareersView } from './components/views/CareersView';
import { ContactView } from './components/views/ContactView';
import { HomeView } from './components/views/HomeView';
import { InjuredWorkersView } from './components/views/InjuredWorkersView';
import { LegalView } from './components/views/LegalView';
import { ModelView } from './components/views/ModelView';
import { PartnersView } from './components/views/PartnersView';
import { PartnerWithUsView } from './components/views/PartnerWithUsView';
import { SampleReportView } from './components/views/SampleReportView';
import { ServicesView } from './components/views/ServicesView';
import { TeamView } from './components/views/TeamView';
import { VIEW_TITLES } from './data/axocompData';
import type { ContactPrefill, ViewId } from './types/axocomp';

const VALID_VIEWS = new Set<ViewId>([
  'home',
  'services',
  'partners',
  'injured-workers',
  'model',
  'team',
  'contact',
  'careers',
  'partner',
  'sample-report',
  'privacy',
  'terms',
  'accessibility',
]);

function parseHashToView(): ViewId {
  const raw = (window.location.hash || '').replace(/^#/, '') as ViewId;
  if (VALID_VIEWS.has(raw)) {
    return raw;
  }
  return 'home';
}

export default function App() {
  const [activeView, setActiveView] = useState<ViewId>(parseHashToView);
  const [contactPrefill, setContactPrefill] = useState<ContactPrefill>({});

  const navigate = useCallback((view: ViewId, prefill?: ContactPrefill) => {
    if (prefill) {
      setContactPrefill(prefill);
    } else if (view !== 'contact') {
      setContactPrefill({});
    }
    setActiveView(view);
    const nextHash = view === 'home' ? '#top' : `#${view}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setActiveView(parseHashToView());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = VIEW_TITLES[activeView] || VIEW_TITLES.home;
  }, [activeView]);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white text-[#1C1C1C]">
      <Header activeView={activeView} onNavigate={navigate} />

      <main className="flex-1">
        {activeView === 'home' && <HomeView onNavigate={navigate} />}
        {activeView === 'services' && <ServicesView onNavigate={navigate} />}
        {activeView === 'partners' && <PartnersView onNavigate={navigate} />}
        {activeView === 'injured-workers' && (
          <InjuredWorkersView onNavigate={navigate} />
        )}
        {activeView === 'model' && <ModelView onNavigate={navigate} />}
        {activeView === 'team' && <TeamView onNavigate={navigate} />}
        {activeView === 'contact' && <ContactView prefill={contactPrefill} />}
        {activeView === 'careers' && <CareersView onNavigate={navigate} />}
        {activeView === 'partner' && (
          <PartnerWithUsView onNavigate={navigate} />
        )}
        {activeView === 'sample-report' && <SampleReportView />}
        {activeView === 'privacy' && (
          <LegalView mode="privacy" onNavigate={navigate} />
        )}
        {activeView === 'terms' && (
          <LegalView mode="terms" onNavigate={navigate} />
        )}
        {activeView === 'accessibility' && (
          <LegalView mode="accessibility" onNavigate={navigate} />
        )}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
