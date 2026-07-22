import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Nexus Discord Solutions" },
      { name: "description", content: "Terms governing use of Nexus Discord Solutions services and website." },
      { property: "og:title", content: "Terms of Service — Nexus" },
      { property: "og:description", content: "Our terms of service." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="The rules for using our services." />
      <section className="container-nds max-w-3xl py-16 space-y-6 text-muted-foreground">
        <p>By using the Nexus Discord Solutions website or engaging our services, you agree to the terms below.</p>
        <div><h3 className="mb-2 font-display text-xl font-semibold text-foreground">Services</h3><p>We provide Discord server design, bot development, security and management services as described on our website.</p></div>
        <div><h3 className="mb-2 font-display text-xl font-semibold text-foreground">Payments</h3><p>Payments are milestone-based. Refunds are available for work not yet started.</p></div>
        <div><h3 className="mb-2 font-display text-xl font-semibold text-foreground">Ownership</h3><p>You own the final deliverables once payment is complete. We retain rights to reusable code libraries and templates.</p></div>
        <div><h3 className="mb-2 font-display text-xl font-semibold text-foreground">Liability</h3><p>Our liability is limited to the amount paid for the specific engagement.</p></div>
        <p className="text-xs">Last updated: 2026-07-22</p>
      </section>
    </>
  );
}
