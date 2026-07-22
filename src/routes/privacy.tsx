import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nexus Discord Solutions" },
      { name: "description", content: "How Nexus Discord Solutions collects, uses and protects your data." },
      { property: "og:title", content: "Privacy Policy — Nexus" },
      { property: "og:description", content: "Our commitment to your privacy." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="How we handle your information." />
      <section className="container-nds max-w-3xl py-16 space-y-6 text-muted-foreground">
        <p>This page is maintained by Nexus Discord Solutions to explain how we collect and use information when you interact with our website and services.</p>
        <div><h3 className="mb-2 font-display text-xl font-semibold text-foreground">Information we collect</h3><p>Contact details you provide via forms (name, email, message), and basic analytics needed to operate the site.</p></div>
        <div><h3 className="mb-2 font-display text-xl font-semibold text-foreground">How we use it</h3><p>To respond to your inquiries, deliver services you've purchased, and improve our website.</p></div>
        <div><h3 className="mb-2 font-display text-xl font-semibold text-foreground">Data sharing</h3><p>We do not sell your data. We only share information with subprocessors strictly required to deliver services.</p></div>
        <div><h3 className="mb-2 font-display text-xl font-semibold text-foreground">Your rights</h3><p>You may request access, correction or deletion of your data at any time by contacting hello@nexusdiscord.dev.</p></div>
        <p className="text-xs">Last updated: 2026-07-22</p>
      </section>
    </>
  );
}
