import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { experience } from "@/lib/data";
import { LiquidBackground } from "@/components/portfolio/LiquidBackground";
import { Nav } from "@/components/portfolio/Nav";
import { ArrowLeft, FileBadge } from "lucide-react";
import { LensCard } from "@/components/portfolio/LensCard";

export const Route = createFileRoute("/experience/$experienceId")({
  loader: ({ params }) => {
    const exp = experience.find((e) => e.id === params.experienceId);
    if (!exp) throw notFound();
    return exp;
  },
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const exp = Route.useLoaderData();

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

          <LensCard className="p-6 rounded-3xl w-full flex flex-col">
            <div className="mb-8 border-b border-foreground/10 pb-8">
              <span className="liquid-glass-light rounded-full px-3 py-1 text-xs uppercase tracking-widest text-primary font-medium mb-4 inline-block">
                {exp.date}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                {exp.title}
              </h1>
              <p className="text-xl font-medium text-foreground/80">{exp.company}</p>
              <p className="text-sm text-foreground/60 mt-1">{exp.location}</p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Roles & Responsibilities</h2>
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-foreground/80 leading-relaxed text-lg">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-foreground/10">
              <button
                className="liquid-glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-all duration-500 ease-out hover:bg-foreground/10 hover:scale-105"
              >
                <FileBadge className="h-4 w-4" />
                View Certificate (Pending Upload)
              </button>
            </div>
          </LensCard>
        </div>
      </div>
    </main>
  );
}
