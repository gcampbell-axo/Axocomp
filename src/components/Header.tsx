import React, { useEffect, useState } from 'react';
import { DRAWER_EXTRA_NAV, PRIMARY_NAV } from '../data/axocompData';
import type { ViewId } from '../types/axocomp';
import { AxocompBadge } from './BrandMark';

interface HeaderProps {
  activeView: ViewId;
  onNavigate: (view: ViewId) => void;
}

export function Header({ activeView, onNavigate }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setDrawerOpen(false);
    }
    function handleResize() {
      if (window.innerWidth > 1000) setDrawerOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    view: ViewId
  ) => {
    e.preventDefault();
    setDrawerOpen(false);
    onNavigate(view);
  };

  return (
    <header className="sticky top-0 z-30 bg-white/96 backdrop-blur-md border-b border-[#D9D9D4]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)] h-[72px] flex items-center gap-8">
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, 'home')}
          aria-label="Axocomp home"
          className="block leading-none shrink-0"
        >
          <AxocompBadge size={44} />
        </a>

        <ul className="hidden lg:flex items-center gap-7 ml-auto list-none m-0 p-0">
          {PRIMARY_NAV.map((item) => {
            const isActive = activeView === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`text-[15px] font-medium text-[#13294B] py-1.5 border-b-2 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'border-[#E8590C]'
                      : 'border-transparent hover:border-[#E8590C]'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, 'contact')}
          className="hidden lg:inline-flex items-center justify-center bg-[#E8590C] text-[#13294B] hover:bg-[#B5450A] hover:text-white font-semibold text-[15px] px-5 py-[13px] rounded-[4px] border-2 border-transparent whitespace-nowrap shrink-0 transition-colors duration-150"
        >
          Refer a patient
        </a>

        <button
          type="button"
          onClick={() => setDrawerOpen((prev) => !prev)}
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav-drawer"
          className="lg:hidden ml-auto inline-flex items-center gap-2.5 border border-[#D9D9D4] rounded-[4px] px-3.5 py-2.5 text-[15px] font-semibold leading-none text-[#13294B] cursor-pointer whitespace-nowrap shrink-0"
        >
          <span aria-hidden="true" className="grid gap-1">
            <span className="block w-[18px] h-[2px] bg-current" />
            <span className="block w-[18px] h-[2px] bg-current" />
            <span className="block w-[18px] h-[2px] bg-current" />
          </span>
          <span>{drawerOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {drawerOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile"
          className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-[#D9D9D4] shadow-[0_18px_30px_rgba(19,41,75,0.12)] max-h-[calc(100dvh-72px)] overflow-y-auto z-40"
        >
          <ul className="list-none m-0 px-[clamp(18px,4vw,40px)] pt-1 pb-2">
            {[...PRIMARY_NAV, ...DRAWER_EXTRA_NAV].map((item) => {
              const isActive = activeView === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`block font-display font-bold text-[22px] py-4 border-b border-[#D9D9D4] ${
                      isActive ? 'text-[#B5450A]' : 'text-[#13294B]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="flex items-center justify-center mx-[clamp(18px,4vw,40px)] mt-4 mb-6 bg-[#E8590C] text-[#13294B] hover:bg-[#B5450A] hover:text-white font-semibold text-[15px] px-5 py-[13px] rounded-[4px] transition-colors duration-150"
          >
            Refer a patient
          </a>
        </nav>
      )}
    </header>
  );
}
