import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative h-9 w-9 overflow-hidden rounded-xl shadow-glow transition-transform group-hover:scale-105">
        <img
          src="/favicon.png"
          alt="Nexus Discord Solutions logo"
          className="h-full w-full object-cover"
        />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-tight text-foreground">
            Nexus
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Discord Solutions
          </span>
        </span>
      )}
    </Link>
  );
}
