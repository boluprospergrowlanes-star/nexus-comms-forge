import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/nds/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, MessageSquare, Download, FileText, Settings, Circle } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Client Dashboard — Nexus Discord Solutions" },
      { name: "description", content: "Track your Discord project, upload requirements and manage your account." },
      { property: "og:title", content: "Client Dashboard — Nexus" },
      { property: "og:description", content: "Your project hub with Nexus Discord Solutions." },
    ],
  }),
  component: DashboardPage,
});

const projects = [
  { name: "PixelForge Rebuild", status: "In progress", progress: 65, eta: "3 days" },
  { name: "AI Support Bot", status: "Design", progress: 20, eta: "10 days" },
];

const invoices = [
  { id: "INV-0142", amount: "$899", status: "Paid" },
  { id: "INV-0141", amount: "$249", status: "Paid" },
  { id: "INV-0140", amount: "$499", status: "Due" },
];

function DashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Dashboard"
        title={<>Welcome back, <span className="gradient-text">Marcus</span></>}
        subtitle="Track your active projects, invoices and requirements — all in one place."
      />
      <section className="container-nds py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-xl font-bold">Active Projects</h3>
                <Badge className="bg-brand/20 text-brand-glow">{projects.length} active</Badge>
              </div>
              <div className="space-y-5">
                {projects.map((p) => (
                  <div key={p.name} className="rounded-lg border border-border bg-surface p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{p.name}</div>
                        <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Circle className="h-2 w-2 fill-brand-glow text-brand-glow" /> {p.status} · ETA {p.eta}
                        </div>
                      </div>
                      <span className="font-display font-bold">{p.progress}%</span>
                    </div>
                    <Progress value={p.progress} className="mt-3 h-1.5" />
                  </div>
                ))}
              </div>
            </Card>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: Upload, t: "Upload requirements" },
                { icon: MessageSquare, t: "Chat with support" },
                { icon: Download, t: "Download files" },
              ].map((a) => (
                <Card key={a.t} className="cursor-pointer border-border bg-card p-5 text-center transition hover:border-brand/50">
                  <a.icon className="mx-auto h-6 w-6 text-brand-glow" />
                  <div className="mt-2 text-sm font-medium">{a.t}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">Invoices</h3>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="space-y-3">
                {invoices.map((i) => (
                  <div key={i.id} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
                    <div className="text-sm">
                      <div className="font-medium">{i.id}</div>
                      <div className="text-xs text-muted-foreground">{i.amount}</div>
                    </div>
                    <Badge variant={i.status === "Paid" ? "outline" : "default"} className={i.status === "Paid" ? "border-success/40 text-success" : "bg-brand text-white"}>
                      {i.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="border-border bg-card p-6">
              <div className="mb-3 flex items-center gap-2">
                <Settings className="h-4 w-4 text-brand-glow" />
                <h3 className="font-display text-lg font-bold">Account</h3>
              </div>
              <p className="text-sm text-muted-foreground">Manage your profile, billing and notification preferences.</p>
              <Button asChild variant="outline" className="mt-4 w-full font-button">
                <Link to="/contact">Manage settings</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
