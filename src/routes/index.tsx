import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Bot, Users, Zap, Check, Star, Sparkles, MessageSquare, Lock, Rocket, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Eyebrow, SectionHeading } from "@/components/nds/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexus Discord Solutions — Premium Discord Agency" },
      { name: "description", content: "We design, build, secure and manage professional Discord communities. Custom bots, verification, moderation and 24/7 support." },
      { property: "og:title", content: "Nexus Discord Solutions — Premium Discord Agency" },
      { property: "og:description", content: "We design, build, secure and manage professional Discord communities. Custom bots, verification, moderation and 24/7 support." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: MessageSquare, title: "Server Setup", desc: "Custom-designed servers with premium structure, roles and branding." },
  { icon: Bot, title: "Bot Development", desc: "Custom Discord bots with AI, automation and advanced logic." },
  { icon: Shield, title: "Security & Anti-Raid", desc: "Enterprise-grade protection against raids, spam and threats." },
  { icon: Users, title: "Community Management", desc: "Active moderation, engagement and growth strategies." },
  { icon: Lock, title: "Verification Systems", desc: "Captcha, wallet, role gating and multi-step verification." },
  { icon: Zap, title: "AI Automation", desc: "AI-powered support, tickets, moderation and workflows." },
];

const stats = [
  { value: "500+", label: "Servers Built" },
  { value: "320+", label: "Clients Served" },
  { value: "900+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime SLA" },
];

const testimonials = [
  { name: "Marcus J.", role: "Founder, PixelForge Gaming", quote: "Nexus rebuilt our 20k member server from scratch. Raids stopped overnight and engagement doubled." },
  { name: "Ava L.", role: "Community Lead, Aether NFT", quote: "The wallet verification and moderation setup is flawless. Best money we've spent on our community." },
  { name: "Daniel R.", role: "CEO, StackFlow SaaS", quote: "Professional, responsive, and delivered ahead of schedule. Our support tickets are now fully automated." },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-80" />
        <div className="container-nds relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <Eyebrow>Building Professional Discord Communities</Eyebrow>
            </div>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Premium Discord servers, <span className="gradient-text">built to scale.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Nexus Discord Solutions designs, secures, and automates Discord communities for
              gaming studios, creators, Web3 projects and SaaS brands.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="font-button bg-brand hover:bg-brand/90 shadow-glow">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-button border-border bg-surface/50">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["Trusted by 320+ brands", "24/7 support", "99.9% uptime", "Delivered in days"].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-card/40">
        <div className="container-nds grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold md:text-4xl gradient-text">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-nds py-24">
        <SectionHeading
          eyebrow="What we do"
          title={<>Everything your Discord needs<br />under <span className="gradient-text">one roof.</span></>}
          subtitle="From branding and setup to bots, moderation and long-term management."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group relative overflow-hidden border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-elegant">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-brand/15 text-brand-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="font-button">
            <Link to="/services">See all services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container-nds grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Why Nexus</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              A real agency, not a freelancer marketplace.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're a full team of Discord architects, bot engineers, designers and moderators —
              working under one roof to deliver production-grade communities.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { icon: Sparkles, t: "Premium branded design" },
                { icon: Shield, t: "Bulletproof security setup" },
                { icon: Rocket, t: "Delivery in 3–10 days" },
                { icon: Award, t: "Post-launch support included" },
              ].map((f) => (
                <li key={f.t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-md bg-brand/15 text-brand-glow">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{f.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass relative rounded-2xl p-8 shadow-elegant">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand/40 via-transparent to-accent/30 opacity-30 blur-2xl" />
            <div className="relative space-y-4">
              {[
                { l: "Servers protected", v: "500+" },
                { l: "Average setup time", v: "5 days" },
                { l: "Client retention", v: "94%" },
                { l: "Support response", v: "< 2h" },
              ].map((k) => (
                <div key={k.l} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
                  <span className="text-sm text-muted-foreground">{k.l}</span>
                  <span className="font-display text-xl font-bold">{k.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-nds py-24">
        <SectionHeading
          eyebrow="Loved by clients"
          title={<>What our clients say</>}
          subtitle="From 20k-member gaming servers to Fortune 500 SaaS brands."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border bg-card p-6">
              <div className="mb-3 flex gap-0.5 text-brand-glow">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-secondary text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-nds pb-24">
        <div className="glass relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/25 via-transparent to-accent/20" />
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-5xl">Ready to launch your <span className="gradient-text">dream Discord?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Get a free consultation and custom quote within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="font-button bg-brand hover:bg-brand/90 shadow-glow">
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-button">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
