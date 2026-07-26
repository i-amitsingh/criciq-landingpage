export type Theme = 'light' | 'dark'

export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface FooterLinkItem {
  label: string
  href: string
}

export interface FooterLink {
  heading: string
  links: FooterLinkItem[]
}
