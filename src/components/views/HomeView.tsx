import React from 'react';
import { AUDIENCE_CARDS, HERO_DELIVERABLES } from '../../data/axocompData';
import type { ViewId } from '../../types/axocomp';
import { AxocompBadge } from '../BrandMark';

interface HomeViewProps {
  onNavigate: (view: ViewId) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, view: ViewId) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Dictionary Strip */}
      <section
        aria-label="What axocomp means"
        className="bg-[#13294B] text-[#C9D2DF]"
      >
        <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)] py-[clamp(36px,5vw,56px)]">
          <dl className="m-0 grid gap-[14px]">
            <dt className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
              <span className="font-display font-extrabold text-[clamp(40px,5vw,56px)] leading-none tracking-[-0.03em] text-[#E8590C]">
                ax&middot;o&middot;comp
              </span>
              <span className="text-[18px] text-[#F1D97B]">
                /&#x02C8;ak-s&#x014D;-&#x02CC;k&#x00E4;mp/
              </span>
              <span className="text-[17px] italic text-[#C9D2DF]">noun</span>
            </dt>
            <dd className="m-0 text-[clamp(16px,1.6vw,19px)] leading-[1.6] text-[#C9D2DF]">
              <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[#F1D97B] mr-2.5">
                Etymology
              </span>
              From <i>axon</i>, the nerve fiber that carries signals through the
              nervous system, and <i>comp</i>, as in workers&rsquo;
              compensation.
            </dd>
          </dl>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white border-b border-[#D9D9D4]">
        <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)] py-[clamp(44px,7vw,96px)] grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-[clamp(32px,5vw,72px)] items-center">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.06em] uppercase text-[#5E6B7E]">
              <span
                aria-hidden="true"
                className="w-[18px] h-[3px] bg-[#E8590C] shrink-0"
              />
              Workers&rsquo; Comp &amp; Personal Injury Neurology
            </span>

            <h1 className="mt-[18px] font-display font-extrabold text-[clamp(32px,4.2vw,54px)] leading-[1.02] tracking-[-0.035em] text-[#13294B]">
              Neurologists for injured workers and{' '}
              <span className="shadow-[inset_0_-0.18em_0_#E8590C]">
                injury claims.
              </span>
            </h1>

            <p className="mt-[22px] text-[18px] sm:text-[19px] text-[#2A3850] leading-[1.6] max-w-[62ch]">
              Board-certified neurologists who see the patient, run the testing
              in house and send back documentation that moves the case forward.
              Now accepting referrals.
            </p>

            <p className="mt-[18px] font-display font-bold text-[20px] text-[#13294B]">
              We understand the assignment.
            </p>

            <div className="mt-[32px] flex gap-3 flex-wrap">
              <a
                href="#contact"
                onClick={(e) => handleNav(e, 'contact')}
                className="inline-flex items-center justify-center bg-[#E8590C] text-[#13294B] hover:bg-[#B5450A] hover:text-white font-semibold text-[15px] px-5 py-[13px] rounded-[4px] border-2 border-transparent whitespace-nowrap transition-colors duration-150"
              >
                Refer a patient
              </a>
              <a
                href="#injured-workers"
                onClick={(e) => handleNav(e, 'injured-workers')}
                className="inline-flex items-center justify-center border-2 border-[#13294B] text-[#13294B] hover:bg-[#13294B] hover:text-white font-semibold text-[15px] px-5 py-[13px] rounded-[4px] whitespace-nowrap transition-colors duration-150"
              >
                New to workers&rsquo; comp?
              </a>
            </div>
          </div>

          <div
            aria-label="What we deliver"
            className="min-w-0 bg-[#13294B] text-[#C9D2DF] p-[clamp(24px,3vw,36px)] rounded-[6px] grid gap-0"
          >
            <div className="flex items-center gap-3.5 mb-[22px]">
              <AxocompBadge size={52} />
            </div>

            {HERO_DELIVERABLES.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-[44px_1fr] gap-x-[14px] gap-y-1 py-[18px] border-t border-white/14"
              >
                <span className="row-span-2 font-display font-extrabold text-[15px] text-[#F1D97B] pt-1 tabular-nums">
                  {item.num}
                </span>
                <h3 className="font-display font-extrabold text-[24px] text-white leading-[1.08] min-w-0">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[#C9D2DF] leading-[1.6] min-w-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience cards */}
      <nav aria-label="Choose who you are" className="bg-[#F4F4F2]">
        <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)] py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUDIENCE_CARDS.map((card) => (
            <a
              key={card.title}
              href={`#${card.target}`}
              onClick={(e) => handleNav(e, card.target)}
              className="min-w-0 grid gap-1.5 bg-white border border-[#D9D9D4] rounded-[6px] pt-5 px-5 pb-[22px] transition-all duration-150 hover:border-[#F1D97B] hover:shadow-[0_0_0_3px_#FAF2D1]"
            >
              <span className="text-[13px] text-[#5E6B7E]">{card.kicker}</span>
              <h3 className="font-display font-extrabold text-[19px] text-[#13294B] flex justify-between gap-2">
                <span>{card.title}</span>
                <span className="text-[#E8590C]">&rarr;</span>
              </h3>
            </a>
          ))}
        </div>
      </nav>

      {/* Statement band */}
      <section className="flex-1 bg-[#FAF2D1] py-[clamp(28px,3.6vw,44px)]">
        <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)] grid grid-cols-12 gap-6">
          <p className="col-span-12 lg:col-span-9 min-w-0 font-display font-bold text-[clamp(24px,3.2vw,40px)] leading-[1.2] tracking-[-0.02em] text-[#13294B] max-w-none">
            Very few neurologists work in workers&rsquo; compensation and
            personal injury.{' '}
            <em className="not-italic text-[#E8590C]">
              At Axocomp, that&rsquo;s all we do.
            </em>
          </p>
        </div>
      </section>
    </div>
  );
}
