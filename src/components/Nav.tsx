import { model } from "@/lib/data";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-gradient-to-b from-ink/80 to-ink/50 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-2">
          <span className="text-base text-accent transition-[transform,color] duration-500 motion-safe:animate-[spin_9s_linear_infinite] group-hover:[animation-duration:1.5s]">
            {"✳︎"}
          </span>
          <span className="font-script text-2xl leading-none text-bone transition-colors group-hover:text-accent">
            {model.firstName}
          </span>
        </a>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-bone/80 transition-colors hover:-translate-y-px hover:border-accent/60 hover:text-bone sm:flex"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {model.availability}
        </a>

        <p className="text-right text-[11px] uppercase leading-tight tracking-[0.15em] text-smoke">
          {model.location.split(", ")[0]}
          <br className="sm:hidden" />
          <span className="hidden sm:inline">, </span>
          {model.location.split(", ")[1]}
        </p>
      </nav>
    </header>
  );
}
