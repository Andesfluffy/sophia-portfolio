import { pressIntro, pressRows } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Press() {
  return (
    <section id="press" className="relative scroll-mt-24 overflow-hidden px-5 py-16">
      <div className="glow left-[-8%] top-[30%] h-72 w-110 bg-accent/10" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-smoke">
            <span className="text-accent">•</span> Experience
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-3xl bg-gradient-to-br from-bone via-bone/80 to-bone/30 bg-clip-text text-2xl font-medium leading-snug text-transparent sm:text-4xl">
            {pressIntro}
          </p>
        </Reveal>

        <div className="mt-10 border-t border-line sm:mt-14">
          {pressRows.map((row, i) => {
            const rowInner = (
              <>
                <span className="w-7 shrink-0 text-sm tabular-nums text-smoke/50 transition-colors group-hover:text-accent sm:w-10 sm:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                    {row.title}
                  </p>
                  <p className="mt-0.5 text-sm text-smoke">{row.detail}</p>
                </div>
                <span className="shrink-0 rounded-full border border-line px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-smoke transition-colors group-hover:border-accent/50 group-hover:text-bone sm:px-4 sm:py-2 sm:text-[11px]">
                  {row.pill}
                </span>
              </>
            );
            const rowClass =
              "group flex items-center gap-4 border-b border-line py-5 transition-colors hover:border-accent/40 sm:gap-6 sm:py-6";
            return (
              <Reveal key={row.title + row.detail} delay={i * 0.05}>
                {row.href ? (
                  <a href={row.href} className={rowClass}>
                    {rowInner}
                  </a>
                ) : (
                  <div className={rowClass}>{rowInner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
