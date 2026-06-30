import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section
      className="py-20 max-w-5xl mx-auto flex flex-col md:flex-row gap-16"
      id="about"
    >
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-bold">
          About
          <br />
          <span className="text-muted-foreground">Me</span>
        </h2>

        {aboutData.description.map((text, i) => (
          <p key={i} className="text-foreground leading-relaxed">
            {text}
          </p>
        ))}

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-widest">
            Core Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {aboutData.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary rounded-md text-sm border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-10 border-l border-border pl-8 relative">
        {aboutData.experiences.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-10.25 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            <h4 className="font-bold text-lg">{exp.role}</h4>
            <p className="text-sm text-foreground">{exp.company}</p>
            <p className="text-xs text-foreground mt-1 mb-2">
              {exp.period}
            </p>
            <p className="text-sm text-foreground leading-relaxed">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
