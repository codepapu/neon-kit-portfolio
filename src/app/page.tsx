import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SplitSection } from "@/components/SplitSection";
import { sections } from "@/data/site";

export default function Home() {
  return (
    <>
      <main id="main-content" className="flex min-h-0 flex-1 flex-col">
        <Hero />
        {sections.map((item) => (
          <SplitSection key={item.id} item={item} />
        ))}
      </main>
      <SiteFooter />
    </>
  );
}
