import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/lib/data";
import { LiquidBackground } from "@/components/portfolio/LiquidBackground";
import { Nav } from "@/components/portfolio/Nav";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { LensCard } from "@/components/portfolio/LensCard";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return project;
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();

  return (
    <main className="relative min-h-dvh text-foreground">
      <LiquidBackground />
      <Nav />
      <div id="magnify-content" className="relative z-10 min-h-dvh pt-32 pb-24 px-6 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <Link
            to="/"
            className="liquid-glass-light inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground mb-8 transition-all duration-500 ease-out hover:-translate-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <LensCard className="w-full flex flex-col">
            <div className="mb-8 border-b border-foreground/10 pb-8">
              <span className="liquid-glass-light rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary font-medium mb-4 inline-block">
                {project.role}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-foreground/70">{project.date}</p>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Problem Statement</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.problemStatement}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Bottlenecks & Challenges</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.bottlenecks}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Achievements</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {project.achievements}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="liquid-glass-light rounded-full px-4 py-1.5 text-sm font-medium text-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-all duration-500 ease-out hover:bg-foreground/10 hover:scale-105"
              >
                Visit Site
                <ExternalLink className="h-4 w-4" />
              </a>
              
              {project.id === "tcs-ion" && (
                <div className="liquid-glass-light inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-foreground/80">
                  Credentials: (Pending upload from user)
                </div>
              )}
            </div>
          </LensCard>
        </div>
      </div>
    </main>
  );
}
