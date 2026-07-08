import Image from "next/image";
import { digitals } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Digitals() {
  return (
    <section className="px-5 pb-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-smoke">
            <span className="text-accent">•</span> Portraits — natural light
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {digitals.map((d, i) => (
            <Reveal key={d.src} delay={i * 0.06}>
              <figure className="group relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-card">
                <Image
                  src={d.src}
                  alt={`Portrait — ${d.label}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 280px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute bottom-3 left-3 rounded-full border border-line bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-bone/80 backdrop-blur">
                  {d.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
