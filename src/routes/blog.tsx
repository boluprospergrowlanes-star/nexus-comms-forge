import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Nexus Discord Solutions" },
      { name: "description", content: "Insights on Discord community strategy, security, bots and automation." },
      { property: "og:title", content: "Blog — Nexus" },
      { property: "og:description", content: "Discord strategy and engineering insights." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { t: "How to secure a 10k member Discord server", d: "A field guide to anti-raid, verification and role hygiene.", tag: "Security" },
  { t: "Building an AI support bot with OpenAI + Discord.js", d: "Ship a tier-1 support bot in an afternoon.", tag: "Bots" },
  { t: "The perfect onboarding flow for Web3 communities", d: "Wallet verification, token gating, and first-message wins.", tag: "Web3" },
  { t: "Discord for SaaS: turn users into champions", d: "Community-led growth playbook for B2B SaaS.", tag: "Growth" },
];

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Insights & <span className="gradient-text">playbooks.</span></>}
        subtitle="Community strategy, Discord engineering, and lessons from 500+ builds."
      />
      <section className="container-nds py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.t} className="group cursor-pointer rounded-2xl border border-border bg-card p-6 transition hover:border-brand/50 hover:shadow-elegant">
              <div className="text-xs font-semibold uppercase tracking-widest text-brand-glow">{p.tag}</div>
              <h2 className="mt-2 font-display text-2xl font-bold group-hover:gradient-text">{p.t}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              <div className="mt-5 text-sm font-button font-semibold text-brand-glow">Read article →</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
