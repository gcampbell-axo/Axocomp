import React from 'react';

interface BadgeProps {
  size?: number;
  className?: string;
}

export function AxocompBadge({ size = 44, className = '' }: BadgeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`block shrink-0 ${className}`}
    >
      <rect width="100" height="100" rx="22" fill="#E8590C" />
      <path
        d="M40.42 73.17Q35.90 73.17 32.76 71.43Q29.62 69.70 28.00 66.79Q26.38 63.89 26.38 60.38Q26.38 57.45 27.28 55.04Q28.18 52.62 30.19 50.76Q32.19 48.91 35.59 47.66Q37.93 46.81 41.16 46.14Q44.40 45.48 48.50 44.88Q52.59 44.27 57.50 43.53L53.68 45.64Q53.68 41.89 51.89 40.14Q50.09 38.38 45.88 38.38Q43.54 38.38 41.01 39.51Q38.47 40.64 37.46 43.53L27.87 40.49Q29.46 35.26 33.87 31.99Q38.28 28.71 45.88 28.71Q51.46 28.71 55.79 30.43Q60.12 32.14 62.34 36.35Q63.59 38.69 63.82 41.03Q64.06 43.37 64.06 46.26V72.00H54.78V63.34L56.10 65.14Q53.02 69.39 49.45 71.28Q45.88 73.17 40.42 73.17ZM42.69 64.82Q45.61 64.82 47.62 63.79Q49.63 62.76 50.82 61.43Q52.01 60.11 52.44 59.21Q53.25 57.49 53.39 55.21Q53.53 52.93 53.53 51.41L56.65 52.19Q51.93 52.97 49.00 53.49Q46.08 54.02 44.28 54.45Q42.49 54.88 41.12 55.39Q39.56 56.01 38.61 56.73Q37.65 57.45 37.21 58.31Q36.76 59.17 36.76 60.22Q36.76 61.66 37.48 62.70Q38.20 63.73 39.53 64.28Q40.85 64.82 42.69 64.82Z"
        fill="#1C1C1C"
      />
      <circle cx="74" cy="68" r="6" fill="#F4F4F2" />
    </svg>
  );
}

interface FullBleedLockupProps {
  className?: string;
}

export function FullBleedLockup({ className = '' }: FullBleedLockupProps) {
  return (
    <div
      className={`inline-flex flex-col bg-[#E8590C] py-3 pr-6 pl-7 sm:pl-9 ${className}`}
    >
      <span className="font-display font-extrabold text-[34px] sm:text-[38px] leading-[1.05] tracking-[-0.045em] text-white select-none">
        axocomp
      </span>
      <span className="mt-1.5 text-[12px] sm:text-[13px] font-bold leading-tight tracking-[0.004em] text-[#1C1C1C] whitespace-nowrap">
        Workers&rsquo; Comp &amp; Personal Injury Neurology
      </span>
    </div>
  );
}
