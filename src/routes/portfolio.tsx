import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/nds/PageHero";
import { Quote } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg.asset.json";
import p2 from "@/assets/portfolio-2.jpg.asset.json";
import p3 from "@/assets/portfolio-3.jpg.asset.json";
import p4 from "@/assets/portfolio-4.jpg.asset.json";
import p5 from "@/assets/portfolio-5.jpg.asset.json";
import p6 from "@/assets/portfolio-6.jpg.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Nexus Discord Solutions" },
      { name: "description", content: "Selected Discord community builds for gaming, Web3, creator and SaaS brands." },
      { property: "og:title", content: "Portfolio — Nexus" },
      { property: "og:description", content: "Real Discord projects delivered by Nexus Discord Solutions." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { title: "PixelForge Gaming", type: "Gaming Community", members: "24k", features: ["Custom bot", "Anti-raid", "Ranked roles", "Tournaments"], tech: ["Discord.js", "PostgreSQL", "Redis"], feedback: "Doubled engagement, zero raids in 6 months.", gradient: "from-brand to-secondary" },
  { title: "Aether NFT", type: "Web3 / NFT", members: "18k", features: ["Wallet verify", "Token gating", "Mint alerts"], tech: ["Ethers.js", "Alchemy", "Node.js"], feedback: "Best onboarding flow we've ever had.", gradient: "from-accent to-brand" },
  { title: "StackFlow SaaS", type: "SaaS Community", members: "9k", features: ["AI support bot", "Ticket system", "Docs sync"], tech: ["OpenAI", "Supabase", "Vercel"], feedback: "Fully automated tier-1 support.", gradient: "from-secondary to-accent" },
  { title: "Nova Creators", type: "Creator Hub", members: "31k", features: ["Fan tiers", "Event bot", "Reaction roles"], tech: ["Discord.js", "Stripe"], feedback: "Turned our Discord into revenue.", gradient: "from-brand-glow to-accent" },
  { title: "Vanguard Esports", type: "Esports Team", members: "12k", features: ["Match scheduler", "Scrim finder", "Elo tracking"], tech: ["Node.js", "MongoDB"], feedback: "Streamlined our whole competitive stack.", gradient: "from-secondary to-brand" },
  { title: "Meridian Studios", type: "Business Server", members: "3k", features: ["Client portal", "Invoice bot", "Onboarding"], tech: ["Next.js", "Stripe"], feedback: "Professional from day one.", gradient: "from-accent to-brand-glow" },
];

function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={<>Selected <span className="gradient-text">client work.</span></>}
        subtitle="A snapshot of Discord communities we've architected, built and secured across gaming, Web3, creator and SaaS verticals."
      />
      <section className="container-nds py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.title} className="group overflow-hidden border-border bg-card p-0 transition hover:border-brand/50 hover:shadow-elegant">
              <div className={`relative h-40 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-40 mix-blend-overlay" />
                <div className="absolute bottom-3 left-4 text-white/90">
                  <div className="text-xs uppercase tracking-widest opacity-80">{p.type}</div>
                  <div className="font-display text-xl font-bold">{p.title}</div>
                </div>
                <Badge className="absolute right-3 top-3 border-white/30 bg-black/40 text-white backdrop-blur">
                  {p.members} members
                </Badge>
              </div>
              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {p.features.map((f) => (
                    <Badge key={f} variant="secondary" className="bg-surface text-foreground/80">{f}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {p.tech.map((t) => <span key={t}>{t}</span>).reduce<React.ReactNode[]>((acc, cur, i) => i === 0 ? [cur] : [...acc, <span key={`d${i}`}>•</span>, cur], [])}
                </div>
                <div className="mt-5 flex items-start gap-2 border-t border-border/60 pt-4 text-sm text-foreground/85">
                  <Quote className="h-4 w-4 shrink-0 text-brand-glow" />
                  <p>"{p.feedback}"</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
