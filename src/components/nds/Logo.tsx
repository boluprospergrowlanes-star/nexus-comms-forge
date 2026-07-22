import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-secondary shadow-glow transition-transform group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
          <path
            d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v9A2.5 2.5 0 0 1 17.5 17H10l-4 4v-4H6.5A2.5 2.5 0 0 1 4 14.5v-9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="rgba(255,255,255,0.12)"
          />
          <path d="M9 12l1.8 1.8L15 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
