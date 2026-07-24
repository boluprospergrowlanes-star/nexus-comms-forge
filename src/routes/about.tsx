import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Shield, Rocket, Heart, Linkedin, Twitter } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import oliverBennett from "@/assets/oliver-bennett.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexus Discord Solutions" },
      { name: "description", content: "Meet Oliver Bennett, Founder & CEO of Nexus Discord Solutions — Discord architects, engineers and designers building premium communities." },
      { property: "og:title", content: "About — Nexus" },
      { property: "og:description", content: "Our mission, values and founder." },
    ],
  }),
  component: AboutPage,
});


const values = [
  { icon: Shield, t: "Security first", d: "Every server is hardened against raids, spam and abuse by default." },
  { icon: Target, t: "Craft & precision", d: "Pixel-perfect design and clean code — no shortcuts." },
  { icon: Rocket, t: "Fast delivery", d: "Most projects live within 3–10 days without cutting corners." },
  { icon: Heart, t: "Client obsession", d: "Fast replies, honest advice, long-term partnership." },
];

const timeline = [
  { year: "2022", t: "Nexus founded", d: "Started as two developers building bots for gaming communities." },
  { year: "2023", t: "First 100 clients", d: "Grew into a full agency with dedicated design and moderation." },
  { year: "2024", t: "AI automation launch", d: "Rolled out AI-powered support and moderation systems." },
  { year: "2025", t: "500+ servers", d: "Trusted by SaaS, Web3 and Fortune brands worldwide." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nexus"
        title={<>Discord experts, <span className="gradient-text">by design.</span></>}
        subtitle="Our mission is to help businesses and communities build secure, organized and engaging Discord servers that strengthen their brands."
      />

      {/* VALUES */}
      <section className="container-nds py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Card key={v.t} className="border-border bg-card p-6">
              <div className="mb-3 grid h-11 w-11 place-items-center rounded-lg bg-brand/15 text-brand-glow">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container-nds py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              The vision behind Nexus Discord Solutions — building secure, scalable and
              high-performing communities worldwide.
            </p>
          </div>
          <FounderProfile />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-nds py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Our journey</h2>
          <p className="mt-4 text-muted-foreground">From two developers to a full-service agency.</p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative border-l border-border pl-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative mb-10 last:mb-0">
                <div className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full bg-brand text-[10px] font-bold text-white shadow-glow">•</div>
                <div className="text-xs uppercase tracking-widest text-brand-glow">{t.year}</div>
                <div className="mt-1 font-display text-xl font-semibold">{t.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FounderProfile() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>();

function FounderProfile() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Card className="glass relative mt-14 overflow-hidden border-border p-6 sm:p-8 lg:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
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

        {/* Text */}
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
