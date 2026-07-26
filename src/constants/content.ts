import type { Feature, NavLink, FooterLink } from '../utils/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
]

export const HERO = {
  badge: 'Now in public beta · by SportZengage',
  headline: 'Smarter cricket\ninsights, instantly',
  subheadline:
    'CricIQ turns raw match data into real-time analytics your whole team can understand — from club coaches to international selectors.',
  ctaPrimary: 'Download Beta',
  ctaSecondary: 'Watch demo',
  stats: [
    { value: '50K+', label: 'Matches analysed' },
    { value: '120+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' },
  ],
} as const

export const FEATURES: Feature[] = [
  {
    icon: '📊',
    title: 'Live Match Analytics',
    description:
      'Real-time ball-by-ball data with predictive win probability, run-rate curves, and phase-wise breakdowns.',
  },
  {
    icon: '🎯',
    title: 'Player Intelligence',
    description:
      'Deep performance profiles — batting angles, bowling tendencies, pressure metrics, and peer comparisons.',
  },
  {
    icon: '🤖',
    title: 'AI Recommendations',
    description:
      'GPT-powered tactical suggestions for field placements, bowling changes, and batting order optimisation.',
  },
  {
    icon: '📱',
    title: 'Mobile-First Design',
    description:
      'Full-featured apps for iOS and Android so you get insights at the ground, not only at a desk.',
  },
  {
    icon: '🔗',
    title: 'API & Integrations',
    description:
      'Connect to Cricinfo, Hawkeye, and your own data sources through our unified REST & WebSocket API.',
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified, end-to-end encrypted, with granular role-based access for your whole organisation.',
  },
]

export const FOOTER_LINKS: FooterLink[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#changelog' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'SportZengage', href: '#sportzengage' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
      { label: 'Security', href: '#security' },
    ],
  },
]
