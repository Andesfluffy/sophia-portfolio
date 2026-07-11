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
