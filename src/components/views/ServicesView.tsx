import React from 'react';
import { SERVICES_LIST } from '../../data/axocompData';
import type { ViewId } from '../../types/axocomp';
import { SectionHeader } from '../SectionHeader';

interface ServicesViewProps {
  onNavigate: (view: ViewId) => void;
}

export function ServicesView({ onNavigate }: ServicesViewProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewId) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <section className="bg-[#F4F4F2] py-[clamp(64px,8vw,112px)]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
        <SectionHeader
          label="Services"
          title="Three things every claim needs from neurology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((svc) => (
            <div
              key={svc.num}
              className="bg-white border border-[#D9D9D4] border-t-4 border-t-[#E8590C] rounded-[6px] p-7 grid gap-3.5 content-start"
            >
              <span className="font-display font-extrabold text-[14px] text-[#B5450A] tracking-[0.04em] tabular-nums">
                {svc.num}
              </span>
              <h3 className="font-display font-extrabold text-[28px] text-[#13294B]">
                {svc.title}
              </h3>
              <p className="text-[17px] text-[#2A3850] leading-[1.6]">
                {svc.summary}
              </p>

              <ul className="list-none mt-1.5 mb-0 p-0">
                {svc.items.map((item) => (
                  <li
                    key={item}
                    className="py-2.5 pl-[22px] border-t border-[#D9D9D4] text-[15px] text-[#2A3850] relative"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0.5 top-[19px] w-2 h-2 bg-[#E8590C]"
                    />
                    {item}
                  </li>
                ))}
                {svc.hasSampleLink && (
                  <li className="py-2.5 pl-[22px] border-t border-[#D9D9D4] text-[15px] relative">
                    <span
                      aria-hidden="true"
                      className="absolute left-0.5 top-[19px] w-2 h-2 bg-[#E8590C]"
                    />
                    <a
                      href="#sample-report"
                      onClick={(e) => handleNav(e, 'sample-report')}
                      className="font-semibold text-[#B5450A] hover:underline"
                    >
                      See a sample report &rarr;
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
