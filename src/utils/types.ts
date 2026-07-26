export type Theme = 'light' | 'dark';

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export interface AudienceCard {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  emoji?: string;
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLink {
  heading: string;
  links: FooterLinkItem[];
}
