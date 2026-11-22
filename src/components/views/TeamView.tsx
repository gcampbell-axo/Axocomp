import React from 'react';
import { TEAM_MEMBERS } from '../../data/axocompData';
import type { ViewId } from '../../types/axocomp';
import { SectionHeader } from '../SectionHeader';

interface TeamViewProps {
  onNavigate: (view: ViewId) => void;
}

export function TeamView({ onNavigate: _onNavigate }: TeamViewProps) {
  return (
    <section className="bg-white py-[clamp(64px,8vw,112px)]">
      <div className="max-w-[1180px] mx-auto px-[clamp(18px,4vw,40px)]">
        <SectionHeader label="The team" title="Leadership" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="border border-[#D9D9D4] border-t-4 border-t-[#E8590C] rounded-[6px] p-6 grid gap-1.5 content-start"
            >
              <h3 className="font-display font-extrabold text-[21px] text-[#13294B]">
                {member.name}
              </h3>
              <span className="text-[15px] font-semibold text-[#13294B]">
                {member.title}
              </span>
              {member.roles.map((role) => (
                <span key={role} className="text-[15px] text-[#5E6B7E]">
                  {role}
                </span>
              ))}
              <span className="justify-self-start mt-0.5 text-[14px] font-medium text-[#13294B] leading-[1.6]">
                <span className="px-0.5 bg-[linear-gradient(transparent_64%,#F1D97B_64%,#F1D97B_90%,transparent_90%)]">
                  {member.org}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
