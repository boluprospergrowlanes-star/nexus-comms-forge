import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/nds/PageHero";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Nexus Discord Solutions" },
      { name: "description", content: "Transparent Discord agency pricing. Starter, Professional and Enterprise plans." },
      { property: "og:title", content: "Pricing — Nexus" },
      { property: "og:description", content: "Choose the plan that fits your community." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter", price: "$299", tag: "For new servers",
    features: ["Server setup & structure", "Basic branding & icons", "Roles & permissions", "Welcome system", "Basic moderation", "7-day post-launch support"],
    cta: "Get Started",
  },
  {
    name: "Professional", price: "$899", tag: "Most popular", featured: true,
    features: ["Everything in Starter", "Custom branded design", "Verification system", "Ticket system", "Advanced anti-raid", "Custom bot (5 features)", "30-day support"],
    cta: "Choose Professional",
  },
  {
    name: "Enterprise", price: "Custom", tag: "For large communities",
    features: ["Everything in Professional", "Fully custom bot & dashboard", "AI automation & support", "Dedicated project manager", "Ongoing management", "24/7 priority SLA"],
    cta: "Talk to Sales",
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Simple plans, <span className="gradient-text">premium delivery.</span></>}
        subtitle="Every plan includes strategy, design, implementation and post-launch support."
      />
      <section className="container-nds py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`relative flex flex-col p-8 ${p.featured ? "border-brand bg-gradient-to-b from-brand/10 to-card shadow-glow" : "border-border bg-card"}`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-glow">
                  <Sparkles className="mr-1 inline h-3 w-3" /> {p.tag}
                </div>
              )}
              <div className="text-sm uppercase tracking-widest text-muted-foreground">{p.name}</div>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-display text-5xl font-bold">{p.price}</span>
                {p.price !== "Custom" && <span className="mb-2 text-sm text-muted-foreground">one-time</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.featured ? "Best value for growing communities" : p.tag}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`mt-8 font-button ${p.featured ? "bg-brand hover:bg-brand/90" : "bg-surface text-foreground hover:bg-surface/80"}`}
              >
                <Link to="/contact">{p.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          All prices in USD. Need something custom? <Link to="/contact" className="text-brand-glow underline">Contact us</Link>.
        </p>
      </section>
    </>
  );
}
