import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/nds/PageHero";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Nexus Discord Solutions" },
      { name: "description", content: "Real reviews from clients who trusted Nexus with their Discord communities." },
      { property: "og:title", content: "Client Reviews — Nexus" },
      { property: "og:description", content: "5-star Discord agency, trusted by 320+ brands." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Marcus Johnson", company: "PixelForge Gaming", stars: 5, text: "Nexus rebuilt our 20k member server from scratch. Raids stopped overnight and engagement doubled within a month." },
  { name: "Ava Lin", company: "Aether NFT", stars: 5, text: "Wallet verification, mint alerts and moderation setup is flawless. Best investment for our community." },
  { name: "Daniel Reeves", company: "StackFlow SaaS", stars: 5, text: "Professional, responsive, delivered ahead of schedule. Our support tickets are now fully automated." },
  { name: "Priya Nair", company: "Nova Creators", stars: 5, text: "Turned our Discord into an actual revenue channel with fan tiers and Stripe integration." },
  { name: "Kenji Watanabe", company: "Vanguard Esports", stars: 5, text: "The scrim finder and Elo tracking bot is incredible. Feels like enterprise software." },
  { name: "Elena Ortiz", company: "Meridian Studios", stars: 5, text: "Every detail thought through. Our clients constantly compliment the server." },
  { name: "Tom H.", company: "Indie Dev Guild", stars: 5, text: "Best money we've spent on our community infrastructure this year." },
  { name: "Sara K.", company: "CryptoNest DAO", stars: 5, text: "Security setup is top-tier. We haven't had a single successful attack." },
  { name: "James P.", company: "Streamline Podcast", stars: 5, text: "The team gets it — polished, on-brand, and delivered fast." },
];

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Reviews"
        title={<>Rated <span className="gradient-text">5 stars</span> by our clients.</>}
        subtitle="Honest words from creators, founders and community leads we've worked with."
      />
      <section className="container-nds py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <Card key={r.name} className="border-border bg-card p-6">
              <div className="mb-3 flex gap-0.5 text-brand-glow">
                {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-foreground/90">"{r.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand to-accent text-sm font-bold text-white">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
