import React from 'react';
import {
  PARTNER_AUDIENCES,
  PARTNER_PROMISES,
  REFERRAL_STEPS,
} from '../../data/axocompData';
import type { ViewId } from '../../types/axocomp';
import { SectionHeader } from '../SectionHeader';

interface PartnersViewProps {
  onNavigate: (view: ViewId) => void;
}

export function PartnersView({ onNavigate }: PartnersViewProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewId) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <section className="bg-white py-[clamp(48px,8vw,112px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
          <SectionHeader
            label="Referral partners"
            title="Fewer phone calls. Cleaner files. Faster closure."
            lede="What you can count on with every Axocomp referral."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#D9D9D4]">
            {PARTNER_PROMISES.map((item, idx) => (
              <div
                key={item.big}
                className={`min-w-0 py-7 pb-[30px] border-b border-[#D9D9D4] grid gap-2 content-start ${
                  idx % 3 !== 0 ? 'lg:border-l lg:pl-7' : ''
                } lg:pr-7`}
              >
                <span className="font-display font-extrabold text-[clamp(28px,3vw,36px)] text-[#13294B] tracking-[-0.03em] leading-[1.05] tabular-nums">
                  {item.big}
                </span>
                <h3 className="font-sans font-semibold text-[17px] tracking-normal text-[#2A3850]">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#5E6B7E]">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-7">
            <a
              href="#sample-report"
              onClick={(e) => handleNav(e, 'sample-report')}
              className="inline-flex items-center justify-center border-2 border-[#13294B] text-[#13294B] hover:bg-[#13294B] hover:text-white font-semibold text-[15px] px-5 py-[13px] rounded-[4px] whitespace-nowrap transition-colors duration-150"
            >
              See a sample Axocomp report
            </a>
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {PARTNER_AUDIENCES.map((aud) => (
              <div
                key={aud.title}
                className="min-w-0 bg-[#F4F4F2] rounded-[6px] p-7 grid gap-2.5 content-start"
              >
                <h3 className="font-display font-extrabold text-[24px] text-[#13294B]">
                  {aud.title}
                </h3>
                <p className="text-[16px] text-[#2A3850]">{aud.summary}</p>
                <ul className="mt-1 mb-0 pl-[18px] list-disc text-[15px] text-[#5E6B7E] grid gap-1">
                  {aud.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="flex-1 bg-[#F4F4F2] py-[clamp(48px,8vw,112px)]"
      >
        <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
          <SectionHeader
            label="How a referral works"
            title="From referral to disposition."
          />

          <ol className="list-none m-0 p-0 grid grid-cols-1 lg:grid-cols-5 gap-4">
            {REFERRAL_STEPS.map((step) => (
              <li
                key={step.num}
                className="min-w-0 bg-white border border-[#D9D9D4] rounded-[6px] p-[22px] grid grid-cols-[36px_1fr] lg:grid-cols-1 gap-x-4 gap-y-2.5 content-start"
              >
                <span className="row-span-2 lg:row-span-1 w-9 h-9 rounded-full bg-[#F1D97B] text-[#13294B] grid place-items-center font-display font-extrabold text-[15px] tabular-nums">
                  {step.num}
                </span>
                <h3 className="min-w-0 font-display font-extrabold text-[20px] text-[#13294B]">
                  {step.title}
                </h3>
                <p className="min-w-0 text-[15px] text-[#5E6B7E]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
