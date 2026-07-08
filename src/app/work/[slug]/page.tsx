import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { getWork, model, works } from "@/lib/data";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.title} — ${work.client} · ${model.name}`,
    description: work.description,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const index = works.findIndex((w) => w.slug === work.slug);
  const prev = works[(index - 1 + works.length) % works.length];
  const next = works[(index + 1) % works.length];

  return (
    <main>
      <div className="grain" aria-hidden />
      <Nav />

      <article className="relative overflow-hidden px-5 pb-16 pt-10">
        <div className="glow right-[-10%] top-[5%] h-80 w-120 bg-accent/15" aria-hidden />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-smoke transition-colors hover:text-accent"
            >
              ← All work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-7xl">
              {work.title}
              <span className="mt-2 block font-script text-3xl font-normal text-accent sm:ml-4 sm:mt-0 sm:inline sm:align-middle sm:text-6xl">
                for {work.client}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[work.category, work.date, work.location].map((pill, i) => (
                <span
                  key={pill}
                  className={`rounded-full border border-line px-4 py-1.5 text-[11px] uppercase tracking-[0.12em] text-smoke ${
                    i % 2 ? "-rotate-2" : "rotate-1"
                  }`}
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80">{work.description}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl border border-line">
              <Image
                src={work.src}
                alt={`${work.title} — ${work.client}`}
                fill
                priority
                sizes="(max-width: 1152px) 100vw, 1104px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-3">
              {work.credits.map((c) => (
                <span
                  key={c.role}
                  className="rounded-full border border-line bg-card px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-smoke"
                >
                  {c.role} — <span className="text-bone/80">{c.name}</span>
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {work.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-3xl border border-line ${
                    i % 2 ? "sm:mt-10 sm:-rotate-1" : "sm:rotate-1"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${work.title} — frame ${i + 2}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 flex flex-col gap-5 rounded-3xl border border-line bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="order-2 flex items-center justify-between gap-4 sm:contents">
                <Link href={`/work/${prev.slug}`} className="group text-left sm:order-1">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-smoke">← Previous</p>
                  <p className="mt-1 font-semibold transition-colors group-hover:text-accent">{prev.title}</p>
                </Link>
                <Link href={`/work/${next.slug}`} className="group text-right sm:order-3">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-smoke">Next →</p>
                  <p className="mt-1 font-semibold transition-colors group-hover:text-accent">{next.title}</p>
                </Link>
              </div>
              <a
                href={`${model.whatsapp}?text=${encodeURIComponent(
                  `Hi ${model.firstName}, I'd like to book you for a project.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="order-1 rounded-full bg-accent px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-85 sm:order-2"
              >
                Book {model.firstName} {"↗︎"}
              </a>
            </div>
          </Reveal>
        </div>
      </article>
    </main>
  );
}
