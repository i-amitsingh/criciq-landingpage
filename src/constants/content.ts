import type { Feature, NavLink, FooterLink, AudienceCard } from '../utils/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Features', href: '#features' },
  { label: 'For Who', href: '#for-who' },
  { label: 'About', href: '#about' },
];

export const HERO = {
  headline: `Your Personal AI\nCricket Coach`,
  subheadline:
    'Point your phone at the pitch. CricIQ turns any practice session into professional-grade analytics - ball speed, swing, biomechanics, injury risk and more. No hardware. No wearables. Just AI.',
  ctaPrimary: 'Download Beta',
  ctaSecondary: 'Watch Demo',
  stats: [
    { value: '8+', label: 'Analysis Modules' },
    { value: '0', label: 'Hardware Needed' },
    { value: 'AI', label: 'Powered Coaching' },
  ],
} as const;

export const FEATURES: Feature[] = [
  {
    icon: '🎯',
    title: 'Pitch Map',
    description:
      "Visualise every ball's landing zone on an interactive pitch map. Spot patterns, danger areas, and length distribution at a glance across any session.",
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&q=75',
  },
  {
    icon: '⚡',
    title: 'Ball Speed Tracking',
    description:
      'Measure delivery speed, release-point consistency, and pace variation across your entire session — all from a single smartphone camera.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=75',
  },
  {
    icon: '🦾',
    title: 'Biomechanics Analysis',
    description:
      'AI skeleton overlay maps your run-up, bowling action, and batting stance — highlighting inefficiencies before they become habits or injuries.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=75',
  },
  {
    icon: '🌀',
    title: 'Swing & Seam Analysis',
    description:
      'Detect lateral movement, seam position, and swing trajectory frame-by-frame. Understand exactly what makes each delivery dangerous.',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=75',
  },
  {
    icon: '📐',
    title: 'Line & Length Intelligence',
    description:
      "Heatmap scoring of every ball bowled tells you exactly where you're leaking runs — and what length your wickets come from.",
    image: 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?w=600&q=75',
  },
  {
    icon: '📦',
    title: '3D Ball Trajectory',
    description:
      "Bird's-eye and front-on 3D reconstructions of every delivery built from your phone video — no specialised cameras required.",
    image: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=75',
  },
  {
    icon: '🩺',
    title: 'Injury Risk Insights',
    description:
      'Spot high-load movement patterns and overuse signals before they become injuries. Protect your body with data-driven load management.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=75',
  },
  {
    icon: '🤖',
    title: 'AI Coaching Insights',
    description:
      'An LLM-powered personal coach delivers session summaries, improvement drills, peer benchmarks, and next-session game plans — automatically.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=75',
  },
];

export const AUDIENCE: AudienceCard[] = [
  {
    title: 'Cricket Players',
    subtitle: 'From grassroots to elite',
    description:
      'Get professional-grade feedback on your batting, bowling, and fielding — analysed from your own phone video. Track your progress session by session and compete with peers on technique scores.',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&q=80',
    cta: 'Start analysing your game',
  },
  {
    title: 'Coaches',
    subtitle: 'Data at your fingertips',
    description:
      'Upload match or training footage and get instant biomechanics breakdowns, pitch maps, and AI-generated coaching notes for every player. Spend less time on admin, more time coaching.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80',
    cta: 'Upgrade your coaching toolkit',
  },
  {
    title: 'Academies',
    subtitle: 'Scale professional analysis',
    description:
      'Run analytics across your entire squad from a single dashboard. Track cohort progress, identify talent early, share reports with parents, and benchmark your academy against national standards.',
    image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=900&q=80',
    cta: 'Bring CricIQ to your academy',
  },
];

export const TESTIMONIAL = {
  quote:
    'CricIQ is giving every cricketer access to the kind of analysis that was once reserved for international squads. This is the future of how the game is coached.',
  name: 'Parthiv Patel',
  role: 'Former Indian International Wicketkeeper-Batsman & Investor, CricIQ',
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
    links: [
      { label: 'About SportZengage', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Use', href: '#terms' },
      { label: 'Security', href: '#security' },
    ],
  },
];
