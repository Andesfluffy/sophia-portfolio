import { Agencies } from "@/components/Agencies";
import { Cursor } from "@/components/Cursor";
import { Dock } from "@/components/Dock";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Press } from "@/components/Press";
import { SectionMarquee } from "@/components/SectionMarquee";
import { Stats } from "@/components/Stats";
import { WorkGrid } from "@/components/WorkGrid";

export default function Home() {
  return (
    <main>
      <div className="grain" aria-hidden />
      <Cursor />
      <Nav />
      <Dock />
      <Hero />
      <Stats />
      <SectionMarquee text="Selected work" id="work" />
      <WorkGrid />
      <Press />
      <Agencies />
      <Footer />
    </main>
  );
}
