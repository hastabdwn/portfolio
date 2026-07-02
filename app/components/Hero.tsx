import { heroData, jsonLines } from "@/data/hero";

export default function Hero() {
  return (
    <section className="py-28 md:pt-40 flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10" id="hero">
      <div className="text-center md:text-left z-10 flex-1">
        <p className="text-muted-foreground font-medium mb-4">
          {heroData.greeting} <span className="text-primary">{heroData.name}</span>
        </p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {heroData.title}
        </h2>
        <p className="text-muted-foreground max-w-xl leading-relaxed text-lg">
          {heroData.description}
        </p>
      </div>

      <div className="relative w-full max-w-md shrink-0">
        <div className="absolute inset-0 rounded-full translate-y-4"></div>
        <div className="relative border border-border rounded-xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 duration-500">
          <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            <div className="ml-2 text-xs text-muted-foreground font-mono">hasta.json</div>
          </div>

          <div className="p-5 md:p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-left">
            {jsonLines.map((line, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-muted-foreground/60 select-none">{index + 1}</span>

                {line.type === "brace" && <p className="text-foreground/70">{line.text}</p>}

                {line.type === "property" && (
                  <p className="pl-4">
                    <span className="text-blue-400">"{line.key}"</span>
                    <span className="text-foreground/70">: </span>
                    <span className="text-green-400">"{line.value}"</span>
                    <span className="text-foreground/70">,</span>
                  </p>
                )}

                {line.type === "array-start" && (
                  <p className="pl-4">
                    <span className="text-blue-400">"{line.key}"</span>
                    <span className="text-foreground/70">: [</span>
                  </p>
                )}

                {line.type === "array-items" && line.items && (
                  <p className="pl-12">
                    {line.items.map((item: string, i: number) => (
                      <span key={item}>
                        <span className="text-green-400">"{item}"</span>
                        {i < line.items.length - 1 && <span className="text-foreground/70">, </span>}
                      </span>
                    ))}
                  </p>
                )}

                {line.type === "array-end" && <p className="pl-4 text-foreground/70">]</p>}
              </div>
            ))}

            <div className="flex gap-4 mt-2 items-center">
              <span className="text-muted-foreground/60 select-none">{jsonLines.length + 1}</span>
              <span className="w-1 h-4 bg-foreground animate-cursor-blink"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
