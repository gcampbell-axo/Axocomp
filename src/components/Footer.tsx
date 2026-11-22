import React from 'react';
import { CLINIC_INFO, FOOTER_NAV } from '../data/axocompData';
import type { ViewId } from '../types/axocomp';

interface FooterProps {
  onNavigate: (view: ViewId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewId) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="bg-[#E8590C] text-[#13294B]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)] py-[22px] flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-x-6 gap-y-3 text-[14px] font-medium">
        <a
          href="#home"
          onClick={(e) => handleNav(e, 'home')}
          className="font-display font-extrabold text-[24px] tracking-[-0.05em] leading-none text-[#13294B] whitespace-nowrap shrink-0"
        >
          axocomp
        </a>

        <span>
          Workers&rsquo; Comp &amp; Personal Injury Neurology &middot;{' '}
          {CLINIC_INFO.fullAddress}
        </span>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-[18px] gap-y-1.5">
          {FOOTER_NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              className="font-medium text-[#13294B] hover:underline whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <span className="whitespace-nowrap shrink-0">&copy; 2026 Axocomp</span>
      </div>
    </footer>
  );
}
