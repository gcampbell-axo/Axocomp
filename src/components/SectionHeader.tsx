import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  lede?: string;
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  lede,
  dark = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`grid grid-cols-12 gap-x-6 gap-y-4 mb-10 sm:mb-12 ${className}`}>
      <div className="col-span-12 min-w-0">
        <span
          className={`inline-flex items-center gap-2.5 text-[13px] font-semibold tracking-[0.06em] uppercase ${
            dark ? 'text-[#F1D97B]' : 'text-[#5E6B7E]'
          }`}
        >
          <span
            aria-hidden="true"
            className={`w-[18px] h-[3px] shrink-0 ${
              dark ? 'bg-[#F1D97B]' : 'bg-[#E8590C]'
            }`}
          />
          {label}
        </span>
      </div>
      <h2
        className={`col-span-12 lg:col-span-8 min-w-0 text-[clamp(30px,4.2vw,52px)] leading-[1.08] tracking-[-0.02em] font-display font-extrabold ${
          dark ? 'text-white' : 'text-[#13294B]'
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`col-span-12 lg:col-span-7 min-w-0 text-[18px] sm:text-[19px] leading-[1.6] max-w-[62ch] ${
            dark ? 'text-[#C9D2DF]' : 'text-[#2A3850]'
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
