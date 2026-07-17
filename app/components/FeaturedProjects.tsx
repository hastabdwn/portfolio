import { projects, Project } from "@/data/projects";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section className="py-20" id="projects">
      <div className="space-y-12">
        <h2 className="text-4xl font-bold">
          Selected
          <span className="text-muted-foreground"> Work</span>
        </h2>
        {projects.map((project: Project, index: number) => (
          <div
            key={index}
            className="bg-background border border-border p-6 md:p-8 rounded-4xl flex flex-col md:flex-row gap-10 shadow-sm"
          >
            <div className="flex-1 aspect-16/10 bg-secondary/50 rounded-2xl border border-border relative overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-primary/50 gap-2">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span className="font-mono text-xs uppercase tracking-widest">
                    Project Preview
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-5">
              <div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                  Featured Project
                </span>
                <h4 className="text-3xl font-bold mt-1 text-foreground">
                  {project.title}
                </h4>
              </div>

              <div className="bg-secondary/30 p-6 rounded-2xl border border-border">
                <p className="text-foreground leading-relaxed font-light">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold text-primary px-3 py-1 rounded-md bg-primary/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 pt-2">
                {project.github && project.github !== "" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold hover:text-primary transition flex items-center gap-1"
                  >
                    GitHub <ArrowUpRight size={16} />
                  </a>
                )}

                {project.link && project.link.trim() !== "" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold hover:text-primary transition flex items-center gap-1"
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
