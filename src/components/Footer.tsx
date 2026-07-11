import { model } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-card px-6 py-16 text-center sm:py-24">
            <div className="glow left-1/2 top-[-40%] h-80 w-140 -translate-x-1/2 bg-accent/20" aria-hidden />
            <p className="relative text-[11px] uppercase tracking-[0.2em] text-smoke">{model.role}</p>
            <p className="relative mt-3 font-script text-6xl leading-none text-bone sm:text-8xl">
              {model.firstName}
            </p>
            <p className="relative mx-auto mt-6 max-w-xl text-sm leading-relaxed text-smoke sm:text-base">
              {model.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col items-center gap-2 text-center text-[11px] uppercase tracking-[0.15em] text-smoke">
          <span>{model.location}</span>
          <span>
            © {new Date().getFullYear()} {model.name}
          </span>
        </div>
      </div>
    </footer>
  );
}
