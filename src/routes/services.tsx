import { createFileRoute, Link } from "@tanstack/react-router";
import { Bot, Shield, MessageSquare, Users, Lock, Zap, Ticket, Sparkles, HeartHandshake, Cog, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/nds/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexus Discord Solutions" },
      { name: "description", content: "Discord server setup, custom bot development, security, moderation, AI automation and ongoing management." },
      { property: "og:title", content: "Discord Agency Services — Nexus" },
      { property: "og:description", content: "Full-service Discord development: servers, bots, security, AI and community management." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: MessageSquare, title: "Discord Server Setup", desc: "Full server architecture with categories, channels, permissions and branded design.", features: ["Custom structure", "Roles & permissions", "Branded assets", "Onboarding flow"], time: "3–5 days", price: "$249" },
  { icon: Bot, title: "Custom Bot Development", desc: "Purpose-built Discord bots with AI, automation and dashboards.", features: ["Custom commands", "Database integration", "Web dashboard", "24/7 hosting"], time: "5–14 days", price: "$499" },
  { icon: Shield, title: "Security Configuration", desc: "Hardened anti-raid, anti-spam and permission auditing.", features: ["Anti-raid shield", "Auto-mod rules", "Audit logs", "Backup system"], time: "2–3 days", price: "$149" },
  { icon: Users, title: "Moderation Systems", desc: "Layered moderation with warnings, mutes, kicks and appeals.", features: ["Warning system", "Auto-actions", "Mod dashboard", "Appeal channel"], time: "2–4 days", price: "$179" },
  { icon: Lock, title: "Verification Setup", desc: "Captcha, wallet or role-gated verification for member trust.", features: ["Captcha bot", "Wallet verify", "Multi-step", "Anti-alt"], time: "1–2 days", price: "$99" },
  { icon: Ticket, title: "Ticket Systems", desc: "Professional support ticket workflows with logs and categories.", features: ["Categories", "Transcripts", "Staff routing", "SLA tracking"], time: "2–3 days", price: "$129" },
  { icon: Sparkles, title: "Role Configuration", desc: "Reaction roles, auto-roles, level roles and self-serve menus.", features: ["Reaction roles", "Auto roles", "Level roles", "Menu UI"], time: "1–2 days", price: "$89" },
  { icon: Zap, title: "AI Automation", desc: "AI-powered support, moderation, tagging and content workflows.", features: ["AI support bot", "Smart mod", "Auto-tagging", "Custom prompts"], time: "5–10 days", price: "$399" },
  { icon: HeartHandshake, title: "Community Management", desc: "Ongoing engagement, events and moderator training.", features: ["Daily engagement", "Event planning", "Mod training", "Weekly reports"], time: "Monthly", price: "$599/mo" },
  { icon: Cog, title: "Ongoing Maintenance", desc: "Long-term care: updates, monitoring and continuous improvements.", features: ["Uptime monitoring", "Feature updates", "Priority support", "Monthly review"], time: "Monthly", price: "$249/mo" },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={<>Full-service Discord <span className="gradient-text">development.</span></>}
        subtitle="Every service you need to launch, secure and scale a professional Discord community — from a single package or as an ongoing partnership."
      />
      <section className="container-nds py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="flex flex-col border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-elegant">
              <div className="mb-4 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/15 text-brand-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="border-brand/40 text-brand-glow">from {s.price}</Badge>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-foreground/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {s.time}</span>
                <Button asChild size="sm" variant="ghost" className="font-button text-brand-glow hover:text-white hover:bg-brand/20">
                  <Link to="/contact">Order <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
