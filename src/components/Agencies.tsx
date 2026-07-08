import { bookings, model } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Agencies() {
  return (
    <section className="px-5 pb-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-smoke">
            <span className="text-accent">•</span> Bookings & enquiries
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {bookings.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <a
                href={`${model.whatsapp}?text=${encodeURIComponent(
                  `Hi ${model.firstName}, I'd like to enquire about ${b.title.toLowerCase()}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-3xl border border-line bg-card p-6 transition-colors hover:border-accent/50"
              >
                <p className="text-2xl font-semibold">{b.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{b.desc}</p>
                <p className="mt-6 flex items-center justify-between text-sm text-bone/70">
                  Enquire
                  <span className="text-accent transition-transform group-hover:translate-x-1">→</span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
