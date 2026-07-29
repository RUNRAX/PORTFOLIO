import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { certifications } from "@/lib/data";
import { LiquidBackground } from "@/components/portfolio/LiquidBackground";
import { Nav } from "@/components/portfolio/Nav";
import { ArrowLeft, Award } from "lucide-react";
import { LensCard } from "@/components/portfolio/LensCard";

export const Route = createFileRoute("/certifications/$certId")({
  loader: ({ params }) => {
    const cert = certifications.find((c) => c.id === params.certId);
    if (!cert) throw notFound();
    return cert;
  },
  component: CertDetail,
});

function CertDetail() {
  const cert = Route.useLoaderData();

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
                Certification
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                {cert.title}
              </h1>
              <p className="text-xl font-medium text-foreground/80">{cert.issuer}</p>
              <p className="text-sm text-foreground/60 mt-1">Issued: {cert.year}</p>
            </div>

            <div className="mt-8 pt-8">
              <button
                className="liquid-glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground transition-all duration-500 ease-out hover:bg-foreground/10 hover:scale-105"
              >
                <Award className="h-4 w-4" />
                View Certificate (Pending Upload)
              </button>
            </div>
          </LensCard>
        </div>
      </div>
    </main>
  );
}
