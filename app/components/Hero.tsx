import { heroData } from "@/data/hero";
import TerminalCard from "./TerminalCard";

export default function Hero() {
  return (
    <section className="py-28 md:pt-40 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10" id="hero">
      <div className="text-center md:text-left z-10 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {heroData.greeting} <span className="text-primary">{heroData.name}</span>
        </h1>
        <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {heroData.title}
        </h3>
        <p className="text-muted-foreground max-w-xl leading-relaxed text-lg">
          {heroData.description}
        </p>
      </div>

      <TerminalCard />
    </section>
  );
}
