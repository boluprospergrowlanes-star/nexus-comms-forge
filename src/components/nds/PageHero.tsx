import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeading";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="container-nds relative py-20 text-center md:py-28">
        <div className="mb-5 flex justify-center"><Eyebrow>{eyebrow}</Eyebrow></div>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
