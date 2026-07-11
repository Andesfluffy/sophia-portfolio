import { disciplines } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Agencies() {
  return (
    <section className="px-5 pb-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-smoke">
            <span className="text-accent">•</span> Disciplines
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-line bg-card p-6">
                <p className="text-2xl font-semibold">{d.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
