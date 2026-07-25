import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40">
      <div className="container-nds grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo />
          <p className="max-w-sm text-sm text-muted-foreground">
            Nexus Discord Solutions builds professional, secure, and automated Discord
            communities for creators, businesses, gaming studios, and Web3 projects.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
            Secure. Organized. Automated.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
            <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-nds flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Nexus Discord Solutions (NDS). All rights reserved.</span>
          <span>Building Professional Discord Communities.</span>
        </div>
      </div>
    </footer>
  );
}
