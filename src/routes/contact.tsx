import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, HelpCircle, Send } from "lucide-react";
import { PageHero } from "@/components/nds/PageHero";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { z } from "zod";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexus Discord Solutions" },
      { name: "description", content: "Get in touch with Nexus Discord Solutions. Free consultation and quote within 24 hours." },
      { property: "og:title", content: "Contact — Nexus" },
      { property: "og:description", content: "Start your Discord project today." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2).max(150),
  message: z.string().trim().min(10, "Message too short").max(2000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build something <span className="gradient-text">great.</span></>}
        subtitle="Tell us about your project — we typically reply within a few hours."
      />
      <section className="container-nds grid gap-8 py-20 lg:grid-cols-[1fr_1.2fr]">
        {/* Info */}
        <div className="space-y-4">
          {[
            { icon: Clock, t: "Support hours", v: "Mon–Sun · 8am–10pm UTC" },
            { icon: HelpCircle, t: "FAQ", v: "See our FAQ page" },
          ].map((i) => (
            <Card key={i.t} className="flex items-center gap-4 border-border bg-card p-5">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/15 text-brand-glow">
                <i.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{i.t}</div>
                <div className="text-sm font-semibold">{i.v}</div>
              </div>
            </Card>
          ))}
        </div>


        {/* Form */}
        <Card className="border-border bg-card p-8">
          {sent ? (
            <div className="py-16 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                <Send className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">Message sent!</h3>
              <p className="mt-2 text-muted-foreground">We'll get back to you within a few hours.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" className="mt-2 bg-surface" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" className="mt-2 bg-surface" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="What do you need help with?" className="mt-2 bg-surface" />
                {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={6} placeholder="Tell us about your community, timeline and budget." className="mt-2 bg-surface" />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <Button type="submit" size="lg" className="w-full font-button bg-brand hover:bg-brand/90 shadow-glow">
                Send message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          )}
        </Card>
      </section>
    </>
  );
}
