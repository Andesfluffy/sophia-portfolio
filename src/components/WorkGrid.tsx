import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/data";
import { Reveal } from "./Reveal";

export function WorkGrid() {
  return (
    <section className="px-5 pb-10">
      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
        {works.map((work, i) => {
          const isWide = works.length % 2 === 1 && i === works.length - 1;
          return (
            <Reveal key={work.slug} delay={(i % 2) * 0.1} className={isWide ? "sm:col-span-2" : undefined}>
              <Link href={`/work/${work.slug}`} data-cursor="view" className="group block">
                <article className="overflow-hidden rounded-3xl border border-line bg-card transition-colors group-hover:border-accent/40">
                  <div className={`relative overflow-hidden ${isWide ? "aspect-[4/3] sm:aspect-[21/9]" : "aspect-[4/3]"}`}>
                    <Image
                      src={work.src}
                      alt={`${work.title} — ${work.client}`}
                      fill
                      sizes={isWide ? "(max-width: 640px) 100vw, 1104px" : "(max-width: 640px) 100vw, 560px"}
                      className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" aria-hidden />
                  </div>

                  <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-smoke">{work.category}</p>
                      <h3 className="mt-1 text-xl font-semibold text-accent sm:text-2xl">
                        {work.title} <span className="text-bone/60 font-normal">— {work.client}</span>
                      </h3>
                      <span className="mt-3 inline-block -rotate-2 rounded-full border border-line px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-smoke transition-transform group-hover:rotate-0">
                        {work.date}
                      </span>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-accent/50 text-lg text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                      ↗
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
