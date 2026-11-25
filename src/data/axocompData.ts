import type { NavItem, ViewId } from '../types/axocomp';

export const VIEW_TITLES: Record<ViewId, string> = {
  home: 'Axocomp — Workers’ Comp & Personal Injury Neurology',
  services: 'Services · Axocomp',
  partners: 'Referral partners · Axocomp',
  'injured-workers': 'Injured workers · Axocomp',
  model: 'Why Axocomp',
  team: 'The team · Axocomp',
  contact: 'Refer a patient · Axocomp',
  careers: 'Careers · Axocomp',
  partner: 'Partner with us · Axocomp',
  'sample-report': 'Sample report · Axocomp',
  privacy: 'Privacy policy · Axocomp',
  terms: 'Terms of use · Axocomp',
  accessibility: 'Accessibility · Axocomp',
};

export const PRIMARY_NAV: NavItem[] = [
  { id: 'services', label: 'Services' },
  { id: 'partners', label: 'Referral partners' },
  { id: 'injured-workers', label: 'Injured workers' },
  { id: 'model', label: 'Why Axocomp' },
  { id: 'team', label: 'The team' },
];

export const DRAWER_EXTRA_NAV: NavItem[] = [
  { id: 'careers', label: 'Careers' },
  { id: 'partner', label: 'Partner with us' },
];

export const FOOTER_NAV: NavItem[] = [
  { id: 'careers', label: 'Careers' },
  { id: 'partner', label: 'Partner with us' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'terms', label: 'Terms' },
  { id: 'accessibility', label: 'Accessibility' },
];

export const CLINIC_INFO = {
  phone: '615-623-0750',
  fax: '615-623-0752',
  ombudsmanPhone: '800-332-2667',
  addressLine1: '5651 Frist Blvd, Suite 416-B',
  addressLine2: 'Hermitage, TN 37076',
  fullAddress: '5651 Frist Blvd, Suite 416-B, Hermitage, TN 37076',
};

export const HERO_DELIVERABLES = [
  {
    num: '01',
    title: 'Diagnostics',
    description: 'Evaluation, EMG/NCS and video EEG under one roof.',
  },
  {
    num: '02',
    title: 'Documentation',
    description: 'Diagnosis, causation and work status, stated clearly.',
  },
  {
    num: '03',
    title: 'Disposition',
    description: 'MMI, impairment rating and return to work.',
  },
];

export const AUDIENCE_CARDS: Array<{
  kicker: string;
  title: string;
  target: ViewId;
}> = [
  {
    kicker: 'I was hurt at work',
    title: 'Injured workers',
    target: 'injured-workers',
  },
  {
    kicker: 'I manage claims',
    title: 'Adjusters & case managers',
    target: 'partners',
  },
  {
    kicker: 'I represent a client',
    title: 'Attorneys',
    target: 'partners',
  },
  {
    kicker: 'I have an injured employee',
    title: 'Employers',
    target: 'partners',
  },
];

export const SERVICES_LIST = [
  {
    num: '01',
    title: 'Diagnostics',
    summary:
      "Objective testing under one roof, so the workup doesn't stall between offices.",
    items: [
      'Neurological evaluation for work and accident injuries',
      'EMG and nerve conduction studies',
      '5-day video EEG monitoring',
      'Concussion and traumatic brain injury',
      'Nerve injury, radiculopathy, post-traumatic headache',
    ],
  },
  {
    num: '02',
    title: 'Documentation',
    summary:
      'Records written for the people who act on them: adjusters, case managers and counsel.',
    items: [
      'Clear diagnosis and causation opinions',
      'Work status and restrictions on every note',
      'Visit notes and test reports available within 24 hours of the visit',
    ],
    hasSampleLink: true,
  },
  {
    num: '03',
    title: 'Disposition',
    summary: 'A defined endpoint for every case, not open-ended follow-up.',
    items: [
      'Treatment plan with expected timeline',
      'Maximum medical improvement (MMI)',
      'Impairment ratings',
      'Return-to-work guidance',
    ],
  },
];

export const PARTNER_PROMISES = [
  {
    big: '2 weeks',
    title: 'From referral to first visit',
    body: 'New patients are seen within 2 weeks of referral, and you get confirmation when the appointment is set.',
  },
  {
    big: 'Every note',
    title: 'Work status and restrictions',
    body: 'Every visit note includes current work status and restrictions.',
  },
  {
    big: 'One roof',
    title: 'Testing in house',
    body: 'EMG/NCS and video EEG are done here, with no outside scheduling delays.',
  },
  {
    big: 'One contact',
    title: 'A single point of contact',
    body: 'One person to call for scheduling, records and status updates.',
  },
  {
    big: 'Plain English',
    title: 'Opinions you can act on',
    body: 'Diagnosis, causation and next steps stated clearly, not buried in the note.',
  },
  {
    big: 'An endpoint',
    title: 'MMI and ratings',
    body: 'We work toward a defined disposition: MMI, a rating and return to work.',
  },
];

export const PARTNER_AUDIENCES = [
  {
    title: 'Adjusters',
    summary:
      'Objective findings and work status on every note, so you can decide without chasing records.',
    bullets: [
      'Add Axocomp to your C-42 panels for neurological injuries',
      'Authorization requests come with the clinical reason attached',
    ],
  },
  {
    title: 'Nurse case managers',
    summary: 'One point of contact from first visit through disposition.',
    bullets: [
      'Reports available within 24 hours of each visit',
      'We tell you before a delay becomes a problem',
    ],
  },
  {
    title: 'Attorneys',
    summary:
      'Neurologist-level opinions on diagnosis and causation for comp and personal injury matters.',
    bullets: [
      'Objective testing to support the record',
      'Clear documentation from intake through MMI',
    ],
  },
  {
    title: 'Employers',
    summary:
      'Specialist care that gets injured employees evaluated quickly and back to work safely.',
    bullets: [
      'Clear restrictions for light-duty planning',
      'Focused on return to work from the first visit',
    ],
  },
];

export const REFERRAL_STEPS = [
  {
    num: '1',
    title: 'Refer',
    body: 'Send the referral with claim details and records. We confirm receipt and authorization.',
  },
  {
    num: '2',
    title: 'Evaluate',
    body: 'A neurologist sees the patient and orders the testing the case needs.',
  },
  {
    num: '3',
    title: 'Test',
    body: 'EMG/NCS and video EEG are done in house.',
  },
  {
    num: '4',
    title: 'Document',
    body: 'Diagnosis, causation opinion, work status and plan, in writing.',
  },
  {
    num: '5',
    title: 'Close',
    body: 'We bring the case to MMI, impairment rating and return to work.',
  },
];

export const WORKER_BASICS = [
  {
    title: 'What is workers’ compensation?',
    body: "It's insurance your employer carries for work injuries. If you're hurt on the job, it pays for your medical care and part of your lost wages while you recover.",
  },
  {
    title: 'Who pays for my care?',
    body: "It's a no-fault system. In most cases it doesn't matter who caused the accident, and you don't pay for care from your authorized doctor on an accepted claim.",
  },
];

export const WORKER_STEPS = [
  {
    num: '1',
    title: 'Report the injury',
    when: 'Right away',
    paragraphs: [
      "Tell your supervisor or the person named on your workplace's workers' comp poster as soon as possible, even if the injury seems minor. Ask for a copy of the injury report.",
    ],
  },
  {
    num: '2',
    title: 'Choose your doctor from a panel',
    when: 'Form C-42',
    paragraphs: [
      'In Tennessee, your employer gives you a list of at least three doctors, called a panel. You pick one by signing Form C-42. That doctor becomes your authorized treating physician (ATP) and directs your care.',
      "Keep a copy of your signed form. In an emergency, get care first. The panel comes after you're stable.",
    ],
  },
  {
    num: '3',
    title: 'Get evaluated and referred',
    when: 'ATP referral',
    paragraphs: [
      "If your injury involves your nerves, brain or spine, your ATP may refer you to a neurologist like Axocomp, or Axocomp may be on your panel. Specialist visits and tests usually need the insurance adjuster's approval first.",
    ],
  },
  {
    num: '4',
    title: 'Follow your work status',
    when: 'Every visit',
    paragraphs: [
      "After each visit your doctor sets your work status: full duty, light duty with restrictions, or off work. If your employer offers light duty within your restrictions, you're expected to take it. Turning it down can stop your wage benefits.",
    ],
  },
  {
    num: '5',
    title: "Wage benefits if you're off work",
    when: 'After 7 days',
    paragraphs: [
      "If your ATP takes you off work, temporary disability benefits usually pay about two-thirds of your average weekly wage. They start on day 8. If you're off 14 days or more, you're paid back to day 1. Your employer's insurance company pays these benefits, not the state.",
    ],
  },
  {
    num: '6',
    title: 'Reach MMI and a rating',
    when: 'End of treatment',
    paragraphs: [
      "Maximum medical improvement (MMI) means you've reached the point where your doctor doesn't expect further improvement. Your doctor then decides whether you have a lasting impairment and gives it a rating, which is used to figure out any permanent disability benefit.",
    ],
  },
];

export const WORKER_FRUSTRATIONS = [
  {
    question: 'Why is everything taking so long?',
    answer:
      "Most visits and tests need the adjuster's approval before they can be scheduled. We send authorization requests quickly, follow up, and tell you when we're waiting on approval.",
  },
  {
    question: "Why didn't I get paid for my first week off?",
    answer:
      "Tennessee doesn't pay wage benefits for the first 7 days unless you end up off work 14 days or more. Check whether your employer lets you use sick or vacation time.",
  },
  {
    question: 'Can I see my own doctor?',
    answer:
      'Your care is directed by the ATP you picked from the panel. You can get a second opinion on your own, but you may have to pay for it. Ask the adjuster before you see anyone outside the claim.',
  },
  {
    question: 'Do I get paid for driving to appointments?',
    answer:
      "You can ask for mileage reimbursement when the trip is more than 15 miles one way. Keep a log of your trips. Time at appointments usually isn't paid unless your employer's policy covers it.",
  },
];

export const WORKER_GLOSSARY = [
  {
    term: 'Adjuster',
    definition:
      'The insurance company employee who manages your claim and approves care and payments.',
  },
  {
    term: 'Panel (C-42)',
    definition:
      'The list of at least three doctors from which you choose your treating physician.',
  },
  {
    term: 'ATP',
    definition:
      'Authorized treating physician: the doctor you chose from the panel, who directs your care.',
  },
  {
    term: 'Nurse case manager',
    definition:
      'A nurse the insurer may assign to coordinate your care and appointments.',
  },
  {
    term: 'Light duty',
    definition: 'Modified work within your restrictions while you recover.',
  },
  {
    term: 'TTD',
    definition:
      'Temporary total disability: wage benefits while your doctor has you off work.',
  },
  {
    term: 'MMI',
    definition:
      "Maximum medical improvement: the point where more recovery isn't expected.",
  },
  {
    term: 'Impairment rating',
    definition:
      'A percentage your doctor assigns at MMI if the injury left a lasting effect.',
  },
];

export const MODEL_PILLARS = [
  {
    title: 'Neurologist-led teams',
    body: 'Each location pairs a neurologist with an advanced practice provider for capacity and continuity.',
  },
  {
    title: 'Diagnostics on site',
    body: 'EMG/NCS and video EEG at the point of care.',
  },
  {
    title: 'Standard protocols',
    body: 'The same visit structure and documentation standard at every site.',
  },
  {
    title: 'Growing across Tennessee',
    body: 'New locations planned to bring specialist care closer to injured workers.',
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Gretchen H. Campbell, MD',
    title: 'Medical Director',
    roles: ['Neurodiagnostics Specialist'],
    org: 'Axocomp Neurology',
  },
  {
    name: 'Heather D. Horton, MD, MBA',
    title: 'Co-Medical Director',
    roles: [
      "Certified Workers' Compensation Neurologist",
      'Certified IME Specialist',
    ],
    org: 'Axocomp Neurology',
  },
  {
    name: 'Jamelle T. Magee, Esq.',
    title: 'Chief Executive Officer',
    roles: [],
    org: 'Axocomp Management Services, LLC',
  },
  {
    name: 'Ernie V. Campbell',
    title: 'Director, HR & Operations',
    roles: [],
    org: 'Axocomp Management Services, LLC',
  },
];

export const CAREERS_PILLARS = [
  {
    kicker: 'Why Axocomp',
    title: 'Focused work',
    body: 'One patient population, one set of questions to answer: diagnosis, causation, work status and disposition. No general neurology backlog.',
  },
  {
    kicker: 'Why Axocomp',
    title: 'Built-in structure',
    body: 'Standard visit templates, in-house EMG/NCS and video EEG, and administrative time built into the weekly schedule.',
  },
  {
    kicker: 'Why Axocomp',
    title: 'Room to grow',
    body: 'As Axocomp opens new locations, clinicians and staff have a path to lead a site, train new team members and shape the model.',
  },
];

export const CAREERS_ROLES = [
  {
    title: 'Neurologist',
    body: 'Board-certified or board-eligible. Leads evaluations, EMG/NCS, causation opinions, MMI determinations and impairment ratings.',
  },
  {
    title: 'Nurse practitioner or physician assistant',
    body: "Works alongside the neurologist on follow-up visits, work status updates and care coordination. Neurology experience preferred; we train on workers' comp.",
  },
  {
    title: 'Medical assistant',
    body: 'Rooms patients for both providers, keeps the clinic on schedule and supports in-office testing.',
  },
  {
    title: 'Operations and front office',
    body: 'Scheduling, authorizations and communication with adjusters and case managers.',
  },
];

export const PARTNER_TYPES = [
  {
    title: 'Host practices and facilities',
    body: 'Have exam rooms that sit empty part of the week? Axocomp can operate a location within your space, adding a specialty service for your community without your building it.',
  },
  {
    title: 'Insurers, TPAs and self-insured employers',
    body: 'Work with us to give your injured workers faster access to neurology, with consistent documentation and a defined path to MMI and return to work.',
  },
  {
    title: 'Referring physicians',
    body: 'Occupational medicine, orthopedic and urgent care physicians can refer patients with nerve, brain and spine injuries directly, and receive our findings promptly.',
  },
  {
    title: 'Clinicians who want to lead a site',
    body: 'Neurologists interested in opening an Axocomp location in their market can join a model with protocols, training and support already in place.',
  },
];

export const PARTNER_STEPS = [
  {
    num: '1',
    title: 'Conversation',
    body: 'We learn about your organization, your market and the injured workers you serve.',
  },
  {
    num: '2',
    title: 'Fit',
    body: 'We confirm referral volume, space and staffing for a location.',
  },
  {
    num: '3',
    title: 'Agreement',
    body: "We put terms in writing, reviewed by both sides' counsel.",
  },
  {
    num: '4',
    title: 'Launch',
    body: 'We bring our protocols, templates, training and testing services.',
  },
  {
    num: '5',
    title: 'Support',
    body: 'The same documentation standard and support as every Axocomp location.',
  },
];
