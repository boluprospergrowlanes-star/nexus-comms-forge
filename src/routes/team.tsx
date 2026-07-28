import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import oliverBennett from "@/assets/oliver-bennett.jpg.asset.json";
import face6 from "@/assets/Face_6.jpeg.asset.json";
import face7 from "@/assets/Face_7.jpeg.asset.json";
import face8 from "@/assets/Face_8.jpeg.asset.json";
import face9 from "@/assets/Face_9.jpeg.asset.json";
import face10 from "@/assets/Face_10.jpeg.asset.json";
import face11 from "@/assets/Face_11.jpeg.asset.json";

const team = [
  { name: "Ethan Carter", role: "Lead Discord Architect", img: face9.url, bio: "Designs scalable server structures and permission systems." },
  { name: "Sophia Bennett", role: "Head of Design", img: face11.url, bio: "Crafts branded visuals, banners and role icons that pop." },
  { name: "Liam Brooks", role: "Senior Bot Developer", img: face7.url, bio: "Builds custom bots and automation tailored to each client." },
  { name: "Noah Walker", role: "Automation Engineer", img: face8.url, bio: "Wires up workflows, integrations and AI-powered systems." },
  { name: "Ava Mitchell", role: "Community Manager", img: face10.url, bio: "Grows engaged communities with smart moderation strategy." },
  { name: "Mason Reed", role: "Client Success Lead", img: face6.url, bio: "Your point of contact from kickoff to launch and beyond." },
];


export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Nexus Discord Solutions" },
      { name: "description", content: "Meet Oliver Bennett, Founder & CEO of Nexus Discord Solutions — building secure, scalable and high-performing Discord communities." },
      { property: "og:title", content: "Team — Nexus Discord Solutions" },
      { property: "og:description", content: "Meet the founder behind Nexus Discord Solutions." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title={<>The people behind <span className="gradient-text">Nexus.</span></>}
        subtitle="A focused team led by an experienced founder — obsessed with building premium Discord experiences."
      />

      <section className="border-y border-border/60 bg-card/30">
        <div className="container-nds py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Meet Our <span className="gradient-text">Founder & CEO</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              The vision behind Nexus Discord Solutions — building secure, scalable and
              high-performing communities worldwide.
            </p>
          </div>
          <FounderProfile />
        </div>
      </section>

      <section className="container-nds py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A tight-knit crew of Discord architects, engineers, designers and community experts.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <Card key={m.name} className="group overflow-hidden border-border bg-card p-0">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={`${m.name} — ${m.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{m.name}</h3>
                <div className="mt-1 text-sm text-brand-glow">{m.role}</div>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}


function FounderProfile() {
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <Card className="glass relative mt-14 overflow-hidden border-border p-6 sm:p-8 lg:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div
          ref={imageRef}
          className={`relative mx-auto w-full max-w-sm lg:max-w-none ${imageVisible ? "animate-fade-in-left" : "opacity-0"}`}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl ring-1 ring-brand/30 shadow-elegant">
            <img
              src={oliverBennett.url}
              alt="Oliver Bennett — Founder & CEO of Nexus Discord Solutions"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gradient-to-br from-brand/20 to-secondary/20 blur-2xl" />
        </div>

        <div
          ref={textRef}
          className={`flex flex-col items-start text-center lg:text-left ${textVisible ? "animate-fade-in-right animation-delay-200" : "opacity-0"}`}
        >
          <h3 className="w-full text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Oliver Bennett
          </h3>
          <Badge
            variant="outline"
            className="mx-auto mt-3 border-brand/40 px-3 py-1 text-sm text-brand-glow lg:mx-0"
          >
            Founder & CEO
          </Badge>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Oliver Bennett is the Founder & CEO of Nexus Discord Solutions, specializing in
            building secure, scalable, and high-performing Discord communities for gaming studios,
            Web3 projects, SaaS businesses, content creators, and online brands. He has expertise in
            Discord server development, automation, moderation systems, custom bots, and community
            growth strategies, helping clients build engaging and successful online communities.
          </p>
          <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://discord.com/channels/@me/1531482908332654662"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-glow transition hover:bg-brand/90"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
