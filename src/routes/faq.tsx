import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Nexus Discord Solutions" },
      { name: "description", content: "Answers to common questions about our Discord services, pricing and process." },
      { property: "og:title", content: "FAQ — Nexus" },
      { property: "og:description", content: "Everything you need to know before hiring Nexus." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "How long does a Discord server build take?", a: "Most projects are delivered within 3–10 business days depending on scope. Enterprise builds with custom bots take 2–4 weeks." },
  { q: "Do you offer ongoing management?", a: "Yes. We offer monthly community management, moderation and maintenance packages starting at $249/mo." },
  { q: "Can you build custom Discord bots?", a: "Absolutely. We build bots from scratch in Node.js/TypeScript with dashboards, databases and AI integrations." },
  { q: "Do you migrate existing servers?", a: "Yes — we can restructure and upgrade your existing server without losing members or history." },
  { q: "What kind of communities do you work with?", a: "Gaming, Web3/NFT, creators, SaaS, esports, DAOs, e-commerce and business communities." },
  { q: "What payment methods do you accept?", a: "Card, bank transfer, PayPal, USDC and major crypto." },
  { q: "Do you offer refunds?", a: "We offer milestone-based work. If we haven't started, you get a full refund." },
  { q: "Is my server safe with you?", a: "Yes. We use role-based access, audit logs, and never store credentials. All work is done through official Discord APIs." },
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={<>Frequently asked <span className="gradient-text">questions.</span></>}
        subtitle="Can't find what you need? Reach out and we'll respond within a few hours."
      />
      <section className="container-nds max-w-3xl py-16">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
