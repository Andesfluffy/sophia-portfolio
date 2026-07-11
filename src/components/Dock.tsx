"use client";

import { useEffect, useState } from "react";

const items = [
  {
    id: "home",
    label: "Home",
    d: "M3 10.5 12 3l9 7.5M5.5 9.5V21h13V9.5",
  },
  {
    id: "about",
    label: "Stats",
    d: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9c1.4-3.8 4.6-5.5 8-5.5s6.6 1.7 8 5.5",
  },
  {
    id: "work",
    label: "Work",
    d: "M4 4h6.5v6.5H4V4Zm9.5 0H20v6.5h-6.5V4ZM4 13.5h6.5V20H4v-6.5Zm9.5 0H20V20h-6.5v-6.5Z",
  },
  {
    id: "press",
    label: "Experience",
    d: "M5 4h11v16H5V4Zm11 4h3v12h-14M8 8h5M8 12h5M8 16h5",
  },
];

export function Dock() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-line bg-card/80 p-2 backdrop-blur-md md:flex"
    >
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          title={item.label}
          aria-label={item.label}
          className={`grid h-10 w-10 place-items-center rounded-full transition-all hover:-rotate-12 ${
            active === item.id ? "bg-accent text-ink" : "text-smoke hover:text-bone"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={item.d} />
          </svg>
        </a>
      ))}
    </nav>
  );
}
