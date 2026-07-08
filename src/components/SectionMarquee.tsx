export function SectionMarquee({ text, id }: { text: string; id?: string }) {
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="flex items-center gap-6 pr-6">
          {i % 2 ? (
            <span className="font-script text-4xl leading-none text-accent sm:text-5xl">{text.toLowerCase()}</span>
          ) : (
            <span className="text-3xl font-semibold tracking-tight text-bone sm:text-4xl">{text}</span>
          )}
          <span className="text-lg text-accent">●</span>
        </span>
      ))}
    </div>
  );

  return (
    <div id={id} className="scroll-mt-24 px-5 py-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-card py-6">
        <div className="marquee-track">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
