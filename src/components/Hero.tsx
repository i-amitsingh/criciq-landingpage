import { HERO } from '../constants/content';
import stadiumLight from '../assets/StadiumLight.png';
import stadiumDark from '../assets/StadiumDark.png';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden sm:min-h-[90vh]">
      <img
        src={stadiumLight}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center dark:hidden"
      />
      <img
        src={stadiumDark}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover object-center dark:block"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 dark:from-black/75 dark:via-black/45 dark:to-black/85" />

      <div className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-4 pt-20 pb-20 text-center sm:min-h-[90vh] sm:pt-24 sm:pb-32">
        <h1 className="max-w-4xl text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
          {HERO.headlineParts.line1prefix}
          <br />
          <span className="text-brand-400">{HERO.headlineParts.line1highlight}</span>
          <br />
          {HERO.headlineParts.line2}
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
          {HERO.subheadline}
        </p>

        <a
          href="#"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-400 hover:-translate-y-0.5 hover:shadow-brand-500/50 sm:mt-8 sm:px-7 sm:py-3.5 sm:text-sm"
        >
          {HERO.ctaPrimary}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
