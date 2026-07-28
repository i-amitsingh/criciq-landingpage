import type { NavLink, FooterLink } from '../utils/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'For Who', href: '#for-who' },
  { label: 'About', href: '#about' },
];

export const NAV_ITEMS = [
  { label: 'About', href: null, page: 'about' },
  { label: 'Features', href: '#features', page: null },
  { label: 'For Who', href: '#for-who', page: null },
] as const;

export const HERO = {
  headline: "Welcome to India's First AI\nCricket Coaching App.",
  headlineParts: {
    line1prefix: "Welcome to India's  ",
    line1highlight: 'First AI Cricket ',
    line2: 'Coaching App.',
  },
  subheadline:
    'Record with your phone. Get ball speed, pitch maps, biomechanics, and AI coaching - instantly. No gear needed.',
  ctaPrimary: 'Download Beta',
  badge: 'AI-Powered Cricket Analysis',
} as const;

export const FEATURES_SECTION = {
  badge: 'Features',
  title: 'Every tool your game needs',
  description:
    'Professional cricket analysis — ball speed, biomechanics, pitch maps, 3D trajectory, swing detection, and AI coaching — all from one smartphone video.',
  ctaTitle: 'Ready to level up your cricket?',
  ctaDescription: 'All 8 modules included in every plan. No hardware required.',
  ctaButton: 'Download Beta',
} as const;

export const FEATURES = [
  {
    id: 'pitch-map',
    title: 'Pitch Map',
    description:
      'See where every ball lands on an interactive pitch map. Spot patterns and weak zones instantly.',
  },
  {
    id: 'ball-speed',
    title: 'Ball Speed',
    description:
      'Measure pace, release point, and speed changes across your session - from your phone camera.',
  },
  {
    id: 'biomechanics',
    title: 'Biomechanics',
    description:
      'AI maps your body movement - run-up, action, stance - and flags what to fix before it becomes a habit.',
  },
  {
    id: 'swing-seam',
    title: 'Swing Analysis',
    description:
      'Track lateral movement and seam position frame-by-frame. Know exactly what makes each ball move.',
  },
  {
    id: 'line-length',
    title: 'Line & Length',
    description:
      'Heatmap of every ball shows where you leak runs and what length gets you wickets.',
  },
  {
    id: 'trajectory-3d',
    title: '3D Trajectory',
    description:
      'See every delivery from any angle - top-down, front-on, side-on - built from a single phone video.',
  },
  {
    id: 'injury-risk',
    title: 'Injury Risk',
    description:
      'Catch overuse and risky movement patterns early. Protect your body with smart load tracking.',
  },
  {
    id: 'ai-coaching',
    title: 'AI Coach',
    description:
      'Get session summaries, drills, benchmarks, and a game plan - written by AI, personalised for you.',
  },
];

export const AUDIENCE_SECTION = {
  badge: 'Built For',
  title: 'Cricket at every level',
  description:
    "Whether you're a weekend cricketer or running a national academy, CricIQ gives you the same AI tools the pros use.",
} as const;

export const AUDIENCE = [
  {
    title: 'Players',
    subtitle: 'From gully cricket to the national team',
    description:
      'Get the same analysis that pro teams use. Just point your phone, play, and get a full report after every session.',
    cta: 'Start analysing your game',
  },
  {
    title: 'Coaches',
    subtitle: 'Data-driven coaching made simple',
    description:
      'Upload footage and get instant breakdowns - biomechanics, pitch maps, AI notes - for every player, every session.',
    cta: 'Upgrade your coaching',
  },
  {
    title: 'Academies',
    subtitle: 'Scale analysis across your squad',
    description:
      'One dashboard for your entire academy. Track every player, spot talent early, share reports with parents.',
    cta: 'Bring CricIQ to your academy',
  },
];

export const APP_VIDEO = {
  placeholder: 'App walkthrough coming soon',
} as const;

export const TESTIMONIAL = {
  quote:
    'CricIQ is giving every cricketer access to the kind of analysis that was once reserved for international squads. This is the future of coaching.',
  name: 'Parthiv Patel',
  role: 'Former Indian International Wicketkeeper-Batsman & Investor, CricIQ',
} as const;

export const CTA_BANNER = {
  badge: 'Now in Beta - Free to Join',
  title: 'Analyse smarter.',
  titleHighlight: 'Play better.',
  description:
    'Join players, coaches, and academies already using CricIQ. Point your phone - get professional-grade analytics instantly. No hardware. No wearables.',
  ctaButton: 'Download Beta',
  footnote: 'No credit card required · Available on iOS & Android',
} as const;

export const FOOTER = {
  description:
    'Real-time cricket analytics by SportZengage - for coaches, broadcasters, and boards worldwide.',
  companyName: 'SportZengage',
  copyright: 'CricIQ by SportZengage. All rights reserved.',
} as const;

export const DOWNLOAD_FAB = {
  label: 'Download Beta',
} as const;

export const FOOTER_LINKS: FooterLink[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'For Players', href: '#for-who' },
      { label: 'For Coaches', href: '#for-who' },
      { label: 'For Academies', href: '#for-who' },
    ],
  },
  {
    heading: 'Company',
    links: [{ label: 'About', href: 'about' }],
  },
  {
    heading: 'Legal',
    links: [{ label: 'Privacy Policy', href: 'privacy' }],
  },
];
