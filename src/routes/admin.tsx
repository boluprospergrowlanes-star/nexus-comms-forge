import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Briefcase, DollarSign, TicketCheck, Package, TrendingUp, UserCog, FileText } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard — Nexus Discord Solutions" },
      { name: "description", content: "Manage orders, clients, projects, invoices and support from one place." },
      { property: "og:title", content: "Admin — Nexus" },
      { property: "og:description", content: "Internal admin dashboard." },
    ],
  }),
  component: AdminPage,
});

const kpis = [
  { icon: DollarSign, label: "Revenue (MTD)", value: "$48,290", change: "+12%" },
  { icon: Briefcase, label: "Active Projects", value: "27", change: "+4" },
  { icon: Users, label: "Clients", value: "324", change: "+18" },
  { icon: TicketCheck, label: "Open Tickets", value: "9", change: "-3" },
];

const orders = [
  { id: "#ORD-1042", client: "PixelForge Gaming", plan: "Professional", status: "In progress", amount: "$899" },
  { id: "#ORD-1041", client: "Aether NFT", plan: "Enterprise", status: "Delivered", amount: "$3,200" },
  { id: "#ORD-1040", client: "StackFlow", plan: "Professional", status: "Review", amount: "$899" },
  { id: "#ORD-1039", client: "Nova Creators", plan: "Starter", status: "Delivered", amount: "$299" },
];

const sections = [
  { icon: Package, t: "Orders", d: "Track and manage all incoming orders." },
  { icon: Users, t: "Clients", d: "CRM with client profiles and history." },
  { icon: UserCog, t: "Team", d: "Assign projects and manage staff." },
  { icon: Briefcase, t: "Projects", d: "Timelines, deliverables and status." },
  { icon: FileText, t: "Invoices", d: "Billing, payments and revenue." },
  { icon: TrendingUp, t: "Analytics", d: "Growth, retention and performance." },
  { icon: TicketCheck, t: "Support tickets", d: "Client support queue." },
  { icon: FileText, t: "Content", d: "Manage site content and blog." },
];

function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Admin"
        title={<>Nexus <span className="gradient-text">Operations.</span></>}
        subtitle="Internal admin dashboard for orders, clients, team and analytics."
      />
      <section className="container-nds py-16 space-y-8">
        <div className="grid gap-4 md:grid-cols-4">
          {kpis.map((k) => (
            <Card key={k.label} className="border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <k.icon className="h-5 w-5 text-brand-glow" />
                <Badge variant="outline" className="border-success/40 text-success">{k.change}</Badge>
              </div>
              <div className="mt-3 font-display text-2xl font-bold">{k.value}</div>
              <div className="text-xs text-muted-foreground">{k.label}</div>
            </Card>
          ))}
        </div>

        <Card className="border-border bg-card">
          <div className="flex items-center justify-between border-b border-border/60 p-5">
            <h3 className="font-display text-lg font-bold">Recent Orders</h3>
            <Badge className="bg-brand/20 text-brand-glow">Live</Badge>
          </div>
          <div className="divide-y divide-border/60">
            {orders.map((o) => (
              <div key={o.id} className="grid grid-cols-5 items-center gap-4 p-4 text-sm">
                <div className="font-mono text-xs text-muted-foreground">{o.id}</div>
                <div className="font-medium">{o.client}</div>
                <div className="text-muted-foreground">{o.plan}</div>
                <div>
                  <Badge
                    variant="outline"
                    className={
                      o.status === "Delivered" ? "border-success/40 text-success" :
                      o.status === "In progress" ? "border-brand/40 text-brand-glow" :
                      "border-accent/40 text-accent"
                    }
                  >
                    {o.status}
                  </Badge>
                </div>
                <div className="text-right font-semibold">{o.amount}</div>
              </div>
            ))}
          </div>
        </Card>

        <div>
          <h3 className="mb-4 font-display text-lg font-bold">Management</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((s) => (
              <Card key={s.t} className="cursor-pointer border-border bg-card p-5 transition hover:border-brand/50">
                <s.icon className="h-5 w-5 text-brand-glow" />
                <div className="mt-3 font-semibold">{s.t}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.d}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
