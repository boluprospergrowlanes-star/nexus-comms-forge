import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Github, MessageCircle, Target, Shield, Rocket, Heart } from "lucide-react";
import face9 from "@/assets/Face_9.jpeg.asset.json";
import face11 from "@/assets/Face_11.jpeg.asset.json";
import face7 from "@/assets/Face_7.jpeg.asset.json";
import face8 from "@/assets/Face_8.jpeg.asset.json";
import face10 from "@/assets/Face_10.jpeg.asset.json";
import face6 from "@/assets/Face_6.jpeg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexus Discord Solutions" },
      { name: "description", content: "Meet the team behind Nexus Discord Solutions — Discord architects, engineers and designers building premium communities." },
      { property: "og:title", content: "About — Nexus" },
      { property: "og:description", content: "Our mission, values and team." },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Ethan Carter", role: "Founder & CEO", bio: "Leads strategy, client relationships and business development.", socials: ["li", "x"], avatar: face9.url },
  { name: "Sophia Bennett", role: "Project Manager", bio: "Coordinates every project from kickoff to launch.", socials: ["li", "x"], avatar: face11.url },
  { name: "Liam Brooks", role: "Senior Discord Developer", bio: "Server architecture, permissions and verification systems.", socials: ["gh", "d"], avatar: face7.url },
  { name: "Noah Walker", role: "Bot & Automation Engineer", bio: "Custom bots, AI integrations and advanced automation.", socials: ["gh", "x"], avatar: face8.url },
  { name: "Ava Mitchell", role: "UI/UX & Brand Designer", bio: "Server layouts, branding, icons and banners.", socials: ["li", "x"], avatar: face10.url },
  { name: "Mason Reed", role: "Community & Support Manager", bio: "Client support, engagement and moderator training.", socials: ["d", "x"], avatar: face6.url },
];

const socialIcon = { li: Linkedin, x: Twitter, gh: Github, d: MessageCircle } as const;


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

      {/* TEAM */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="container-nds py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Meet the Experts Behind <span className="gradient-text">Nexus</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              A team of Discord architects, engineers and designers committed to delivering
              professional Discord solutions — from first message to long after launch.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <Card key={m.name} className="glass group relative overflow-hidden border-border p-6 transition hover:border-brand/50 hover:shadow-elegant">
                <div className="flex items-center gap-4">
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="h-16 w-16 rounded-full object-cover shadow-glow ring-2 ring-brand/40"
                  />
                  <div>
                    <div className="font-display text-lg font-semibold">{m.name}</div>
                    <Badge variant="outline" className="mt-1 border-brand/40 text-brand-glow">{m.role}</Badge>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <div className="flex gap-1.5">
                    {m.socials.map((s) => {
                      const Icon = socialIcon[s as keyof typeof socialIcon];
                      return (
                        <a key={s} href="#" className="grid h-8 w-8 place-items-center rounded-md bg-surface text-muted-foreground transition hover:text-brand-glow" aria-label={s}>
                          <Icon className="h-3.5 w-3.5" />
                        </a>
                      );
                    })}
                  </div>
                  <a href="/contact" className="text-xs font-button font-semibold uppercase tracking-wider text-brand-glow hover:underline">Contact</a>
                </div>
              </Card>
            ))}
          </div>
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
