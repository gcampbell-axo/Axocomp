import React from 'react';
import {
  CLINIC_INFO,
  WORKER_BASICS,
  WORKER_FRUSTRATIONS,
  WORKER_GLOSSARY,
  WORKER_STEPS,
} from '../../data/axocompData';
import type { ViewId } from '../../types/axocomp';
import { SectionHeader } from '../SectionHeader';

interface InjuredWorkersViewProps {
  onNavigate: (view: ViewId) => void;
}

export function InjuredWorkersView({ onNavigate }: InjuredWorkersViewProps) {
  return (
    <section className="bg-white py-[clamp(64px,8vw,112px)]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
        <SectionHeader
          label="For injured workers"
          title="Hurt at work? Here's how workers' comp works."
          lede="Workers' comp can feel confusing and slow. This guide explains the Tennessee process in plain language so you know what to expect and who to call."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {WORKER_BASICS.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#D9D9D4] rounded-[6px] p-7 grid gap-3 content-start"
            >
              <h3 className="font-display font-extrabold text-[24px] text-[#13294B]">
                {item.title}
              </h3>
              <p className="text-[17px] text-[#2A3850]">{item.body}</p>
            </div>
          ))}
        </div>

        <ol className="list-none m-0 p-0">
          {WORKER_STEPS.map((step) => (
            <li
              key={step.num}
              className="grid grid-cols-[44px_1fr] md:grid-cols-[56px_1fr_1.4fr] gap-x-4 md:gap-x-7 gap-y-2 py-[26px] border-t border-[#D9D9D4] last:border-b items-start"
            >
              <span className="w-11 h-11 rounded-full bg-[#F1D97B] border-2 border-[#F1D97B] text-[#13294B] grid place-items-center font-display font-extrabold text-[16px] tabular-nums">
                {step.num}
              </span>

              <div>
                <h3 className="font-display font-extrabold text-[22px] text-[#13294B]">
                  {step.title}
                </h3>
                <span className="inline-block mt-2 text-[13px] font-semibold text-[#B5450A] tracking-[0.04em] uppercase">
                  {step.when}
                </span>
              </div>

              <div className="col-start-2 md:col-start-3 space-y-2.5">
                {step.paragraphs.map((p) => (
                  <p key={p} className="text-[16px] text-[#2A3850]">
                    {p}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>

        <h3 className="font-display font-extrabold text-[clamp(24px,2.6vw,32px)] text-[#13294B] mt-[72px] mb-6">
          Common frustrations, answered
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WORKER_FRUSTRATIONS.map((item) => (
            <div
              key={item.question}
              className="bg-[#FAF2D1] border border-[#EADBA0] rounded-[6px] p-6 grid gap-2 content-start"
            >
              <h4 className="font-display font-extrabold text-[19px] text-[#13294B]">
                {item.question}
              </h4>
              <p className="text-[15px] text-[#2A3850]">{item.answer}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display font-extrabold text-[clamp(24px,2.6vw,32px)] text-[#13294B] mt-[72px] mb-6">
          Words you&rsquo;ll hear
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 m-0 border-t border-[#D9D9D4]">
          {WORKER_GLOSSARY.map((entry, idx) => (
            <div
              key={entry.term}
              className={`py-[18px] pb-5 border-b border-[#D9D9D4] grid gap-1 content-start sm:pr-[18px] ${
                idx % 2 === 1 ? 'sm:border-l sm:pl-[18px]' : ''
              } ${
                idx % 4 !== 0
                  ? 'lg:border-l lg:pl-[18px]'
                  : 'lg:border-l-0 lg:pl-0'
              }`}
            >
              <dt className="font-display font-extrabold text-[18px] text-[#13294B] justify-self-start shadow-[inset_0_-0.35em_0_#F1D97B]">
                {entry.term}
              </dt>
              <dd className="m-0 text-[15px] text-[#5E6B7E]">
                {entry.definition}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
          <div className="bg-[#FAF2D1] border border-[#EADBA0] rounded-[6px] p-7 grid gap-3 content-start">
            <h3 className="font-display font-extrabold text-[24px] text-[#13294B]">
              Having trouble with your claim?
            </h3>
            <p className="text-[17px] text-[#2A3850]">
              The Tennessee Bureau of Workers&rsquo; Compensation has free
              ombudsmen who answer questions and help when benefits or care are
              delayed or denied. If you were hurt in a car or other accident and
              have an attorney, call your attorney first.
            </p>
            <p className="text-[13px] text-[#5E6B7E]">
              This guide is general information about Tennessee workers&rsquo;
              compensation, not legal advice. Your claim may be different.
            </p>
          </div>

          <div className="bg-[#13294B] text-[#C9D2DF] rounded-[6px] p-7 grid gap-3 content-start">
            <h3 className="font-display font-extrabold text-[24px] text-white">
              TN workers&rsquo; comp ombudsman
            </h3>
            <span className="font-display font-extrabold text-[clamp(30px,3.4vw,40px)] text-[#E8590C] tracking-[-0.02em] leading-none tabular-nums">
              {CLINIC_INFO.ombudsmanPhone}
            </span>
            <p className="text-[14px] text-[#C9D2DF]">
              Free help for injured workers without an attorney.
            </p>
            <p className="text-[14px] text-[#C9D2DF]">
              Questions about your Axocomp appointment or tests? Call us at{' '}
              <a
                href="tel:6156230750"
                className="font-semibold text-white hover:text-[#F1D97B] underline underline-offset-2 tabular-nums"
              >
                {CLINIC_INFO.phone}
              </a>{' '}
              or{' '}
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="font-semibold text-[#F1D97B] hover:underline cursor-pointer"
              >
                send a message
              </button>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
