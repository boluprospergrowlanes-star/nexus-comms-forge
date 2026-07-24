import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import oliverBennett from "@/assets/oliver-bennett.jpg.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Nexus Discord Solutions" },
      { name: "description", content: "Meet Oliver Bennett, Founder & CEO of Nexus Discord Solutions — building secure, scalable and high-performing Discord communities." },
      { property: "og:title", content: "Team — Nexus Discord Solutions" },
      { property: "og:description", content: "Meet the founder behind Nexus Discord Solutions." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={<>The people behind <span className="gradient-text">Nexus.</span></>}
        subtitle="A focused team led by an experienced founder — obsessed with building premium Discord experiences."
      />

      <section className="border-y border-border/60 bg-card/30">
        <div className="container-nds py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Meet Our <span className="gradient-text">Founder & CEO</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              The vision behind Nexus Discord Solutions — building secure, scalable and
              high-performing communities worldwide.
            </p>
          </div>
          <FounderProfile />
        </div>
      </section>
    </>
  );
}

function FounderProfile() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Card className="glass relative mt-14 overflow-hidden border-border p-6 sm:p-8 lg:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div
          ref={imageRef}
          className={`relative mx-auto w-full max-w-sm lg:max-w-none ${imageVisible ? "animate-fade-in-left" : "opacity-0"}`}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-brand/30 shadow-elegant">
            <img
              src={oliverBennett.url}
              alt="Oliver Bennett — Founder & CEO of Nexus Discord Solutions"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-brand/20 to-secondary/20 blur-2xl" />
        </div>

        <div
          ref={textRef}
          className={`flex flex-col items-start text-center lg:text-left ${textVisible ? "animate-fade-in-right animation-delay-200" : "opacity-0"}`}
        >
          <h3 className="w-full text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Oliver Bennett
          </h3>
          <Badge
            variant="outline"
            className="mx-auto mt-3 border-brand/40 px-3 py-1 text-sm text-brand-glow lg:mx-0"
          >
            Founder & CEO
          </Badge>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Oliver Bennett is the Founder & CEO of Nexus Discord Solutions, specializing in
            building secure, scalable, and high-performing Discord communities for gaming studios,
            Web3 projects, SaaS businesses, content creators, and online brands. He has expertise in
            Discord server development, automation, moderation systems, custom bots, and community
            growth strategies, helping clients build engaging and successful online communities.
          </p>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-muted-foreground transition hover:bg-brand/15 hover:text-brand-glow"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-xl bg-surface text-muted-foreground transition hover:bg-brand/15 hover:text-brand-glow"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex h-11 items-center rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-glow transition hover:bg-brand/90"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
