import React from 'react';
import { MODEL_PILLARS } from '../../data/axocompData';
import type { ViewId } from '../../types/axocomp';
import { SectionHeader } from '../SectionHeader';

interface ModelViewProps {
  onNavigate: (view: ViewId) => void;
}

export function ModelView({ onNavigate: _onNavigate }: ModelViewProps) {
  return (
    <section className="bg-[#13294B] text-[#C9D2DF] py-[clamp(64px,8vw,112px)]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
        <SectionHeader
          dark
          label="Why Axocomp"
          title="One standard. Every location."
          lede="Axocomp is built as a repeatable neurology unit, so every location delivers the same care and the same documentation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODEL_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="border-t-[3px] border-t-[#F1D97B] pt-5 grid gap-2 content-start"
            >
              <h3 className="font-display font-extrabold text-[22px] text-white">
                {pillar.title}
              </h3>
              <p className="text-[15px] text-[#C9D2DF]">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
