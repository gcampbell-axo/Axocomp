import React from 'react';
import { PARTNER_STEPS, PARTNER_TYPES } from '../../data/axocompData';
import type { ContactPrefill, ViewId } from '../../types/axocomp';
import { SectionHeader } from '../SectionHeader';

interface PartnerWithUsViewProps {
  onNavigate: (view: ViewId, prefill?: ContactPrefill) => void;
}

export function PartnerWithUsView({ onNavigate }: PartnerWithUsViewProps) {
  return (
    <section className="bg-white py-[clamp(64px,8vw,112px)]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
        <SectionHeader
          label="Partner with us"
          title="Bring specialist neurology to injured workers in your area."
          lede="Axocomp grows by partnering with organizations that already serve injured workers or have room to host a clinic. Each new location runs on the same model, so partners get a proven process from the first day."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PARTNER_TYPES.map((item) => (
            <div
              key={item.title}
              className="bg-[#F4F4F2] rounded-[6px] p-7 grid gap-2.5 content-start"
            >
              <h3 className="font-display font-extrabold text-[24px] text-[#13294B]">
                {item.title}
              </h3>
              <p className="text-[16px] text-[#2A3850]">{item.body}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display font-extrabold text-[clamp(24px,2.6vw,32px)] text-[#13294B] mt-[72px] mb-6">
          What partners can expect
        </h3>
        <ol className="list-none m-0 p-0 grid grid-cols-1 lg:grid-cols-5 gap-4">
          {PARTNER_STEPS.map((step) => (
            <li
              key={step.num}
              className="bg-white border border-[#D9D9D4] rounded-[6px] p-[22px] grid grid-cols-[36px_1fr] lg:grid-cols-1 gap-x-4 gap-y-2.5 content-start"
            >
              <span className="row-span-2 lg:row-span-1 w-9 h-9 rounded-full bg-[#F1D97B] text-[#13294B] grid place-items-center font-display font-extrabold text-[15px] tabular-nums">
                {step.num}
              </span>
              <h3 className="font-display font-extrabold text-[20px] text-[#13294B]">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#5E6B7E]">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
          <div className="bg-[#FAF2D1] border border-[#EADBA0] rounded-[6px] p-7 grid gap-3 content-start">
            <h3 className="font-display font-extrabold text-[24px] text-[#13294B]">
              Start the conversation
            </h3>
            <p className="text-[16px] text-[#2A3850]">
              Tell us who you are, where you&rsquo;re located and how
              you&rsquo;d like to work together. A member of our leadership team
              will follow up.
            </p>
          </div>
          <div className="bg-[#13294B] text-[#C9D2DF] rounded-[6px] p-7 grid gap-3 content-start">
            <h3 className="font-display font-extrabold text-[24px] text-white">
              Get in touch
            </h3>
            <div>
              <button
                type="button"
                onClick={() =>
                  onNavigate('contact', { subject: 'Partnership' })
                }
                className="inline-flex items-center justify-center bg-[#E8590C] text-[#13294B] hover:bg-[#B5450A] hover:text-white font-semibold text-[15px] px-5 py-[13px] rounded-[4px] cursor-pointer transition-colors duration-150"
              >
                Go to the contact form
              </button>
            </div>
            <p className="text-[14px] text-[#C9D2DF]">
              Use &ldquo;Partnership&rdquo; as the subject.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
