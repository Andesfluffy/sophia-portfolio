import { model, statCards, statSpecs, trustStrip } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Stats() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Primary vitals — big-number cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {statCards.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-line bg-card px-4 py-6 sm:px-6 sm:py-8">
                <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-smoke sm:text-[11px] sm:tracking-[0.15em]">
                  <span className="text-accent">•</span> {card.label}
                </p>
                <p className="mt-5 text-2xl font-semibold tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
                  {card.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Comp-card panel — secondary specs + availability */}
        <Reveal delay={0.15}>
          <div className="mt-3 overflow-hidden rounded-3xl border border-line sm:mt-4">
            <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
              {statSpecs.map((spec) => (
                <div key={spec.label} className="bg-card px-5 py-5 sm:px-6 sm:py-6">
                  <dt className="text-[10px] uppercase tracking-[0.15em] text-smoke">
                    {spec.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium tracking-tight text-bone">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-line bg-card px-5 py-4 sm:px-6 sm:py-5">
              <div className="flex items-center gap-3">
                <span className="text-sm tracking-[0.25em] text-accent" aria-hidden>
                  ★★★★★
                </span>
                <p className="text-sm text-bone/80">{trustStrip.left}</p>
              </div>
              <a
                href={`${model.whatsapp}?text=${encodeURIComponent(
                  `Hi ${model.firstName}, could you send your comp card?`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-smoke transition-colors hover:border-accent/60 hover:text-bone"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                {trustStrip.right}
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
