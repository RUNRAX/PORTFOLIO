import { createFileRoute } from "@tanstack/react-router";
import { LiquidBackground } from "@/components/portfolio/LiquidBackground";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { TechArsenal } from "@/components/portfolio/TechArsenal";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rakshit Awati — Full-Stack Developer & Security Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Rakshit Awati. Building high-performance web applications and secure systems with React, Next.js, Node.js, Python and Supabase.",
      },
      {
        property: "og:title",
        content: "Rakshit Awati — Full-Stack Developer & Security Enthusiast",
      },
      {
        property: "og:description",
        content:
          "Selected work in production systems, security research and social-impact software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-dvh text-foreground">
      <LiquidBackground />
      <Nav />
      <div id="magnify-content" className="relative">
        <Hero />
        <TechArsenal />
        <Experience />
        <Projects />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
