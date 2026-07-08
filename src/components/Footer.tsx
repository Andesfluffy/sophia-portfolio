import { model, socials } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 px-5 pb-10 pt-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card px-6 py-16 text-center sm:py-24">
            <div className="glow left-1/2 top-[-40%] h-80 w-140 -translate-x-1/2 bg-accent/20" aria-hidden />
            <p className="relative text-[11px] uppercase tracking-[0.2em] text-smoke">Booking</p>
            <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s bring your ideas <span className="text-accent">to life</span>.
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-relaxed text-smoke sm:text-base">
              If my work aligns with your vision, I&apos;d love to be part of your next project — with
              creativity and professionalism. Videos and links to brand projects are available on request.
            </p>
            <a
              href={`${model.whatsapp}?text=${encodeURIComponent(
                `Hi ${model.firstName}, I'd like to book you for a project.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-opacity hover:opacity-85"
            >
              Book {model.firstName} on WhatsApp ↗
            </a>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-center gap-4 text-center text-[11px] uppercase tracking-[0.15em] text-smoke">
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-line text-bone/70 transition-colors hover:border-accent hover:text-accent"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
          <span>
            © {new Date().getFullYear()} {model.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
