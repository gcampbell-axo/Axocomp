import React from 'react';
import { CAREERS_PILLARS, CAREERS_ROLES } from '../../data/axocompData';
import type { ContactPrefill, ViewId } from '../../types/axocomp';
import { SectionHeader } from '../SectionHeader';

interface CareersViewProps {
  onNavigate: (view: ViewId, prefill?: ContactPrefill) => void;
}

export function CareersView({ onNavigate }: CareersViewProps) {
  return (
    <section className="flex-1 bg-white py-[clamp(48px,8vw,112px)]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
        <SectionHeader
          label="Careers"
          title="Practice neurology where it matters most to the claim."
          lede="Axocomp builds neurologist-led teams for workers' compensation and personal injury care. Every location runs on the same protocols, the same documentation standard and the same support, so clinicians can focus on patients."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAREERS_PILLARS.map((item) => (
            <div
              key={item.title}
              className="min-w-0 bg-white border border-[#D9D9D4] border-t-4 border-t-[#E8590C] rounded-[6px] p-7 grid gap-3.5 content-start"
            >
              <span className="font-display font-extrabold text-[14px] text-[#B5450A] tracking-[0.04em]">
                {item.kicker}
              </span>
              <h3 className="font-display font-extrabold text-[28px] text-[#13294B]">
                {item.title}
              </h3>
              <p className="text-[16px] text-[#2A3850]">{item.body}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display font-extrabold text-[clamp(24px,2.6vw,32px)] text-[#13294B] mt-[72px] mb-6">
          Roles we hire for
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CAREERS_ROLES.map((role) => (
            <div
              key={role.title}
              className="min-w-0 bg-[#F4F4F2] rounded-[6px] p-7 grid gap-2.5 content-start"
            >
              <h3 className="font-display font-extrabold text-[24px] text-[#13294B]">
                {role.title}
              </h3>
              <p className="text-[16px] text-[#2A3850]">{role.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
          <div className="min-w-0 bg-[#FAF2D1] border border-[#EADBA0] rounded-[6px] p-7 grid gap-3 content-start">
            <h3 className="font-display font-extrabold text-[24px] text-[#13294B]">
              How to apply
            </h3>
            <p className="text-[16px] text-[#2A3850]">
              Send us a message through our contact form with &ldquo;Careers&rdquo;
              as the subject and the role that interests you. We&rsquo;ll reply
              with how to send your r&eacute;sum&eacute; or CV.
            </p>
          </div>
          <div className="min-w-0 bg-[#13294B] text-[#C9D2DF] rounded-[6px] p-7 grid gap-3 content-start">
            <h3 className="font-display font-extrabold text-[24px] text-white">
              Apply
            </h3>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('contact', { subject: 'Careers' })}
                className="inline-flex items-center justify-center bg-[#E8590C] text-[#13294B] hover:bg-[#B5450A] hover:text-white font-semibold text-[15px] px-5 py-[13px] rounded-[4px] cursor-pointer transition-colors duration-150"
              >
                Go to the contact form
              </button>
            </div>
            <p className="text-[14px] text-[#C9D2DF]">
              Axocomp is an equal opportunity employer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
