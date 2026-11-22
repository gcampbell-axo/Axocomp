export type ViewId =
  | 'home'
  | 'services'
  | 'partners'
  | 'injured-workers'
  | 'model'
  | 'team'
  | 'contact'
  | 'careers'
  | 'partner'
  | 'sample-report'
  | 'privacy'
  | 'terms'
  | 'accessibility';

export interface NavItem {
  id: ViewId;
  label: string;
}

export interface ContactPrefill {
  subject?: string;
}
