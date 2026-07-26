export type Theme = 'light' | 'dark';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export interface AudienceCard {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLink {
  heading: string;
  links: FooterLinkItem[];
}
