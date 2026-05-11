import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { CheckCircle2, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import project1 from "@/assets/project-1.jpg";

export const Route = createFileRoute("/projects/$slug")({
  head: () => ({
    meta: [
      { title: "Project Detail — Zibomo Sprint Safe" },
      { name: "description", content: "Inside one of our recent client projects." },
    ],
  }),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  return (
    <Layout>
      <PageBanner title="Project Detail" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Portfolio", to: "/projects" }, { label: "Business Development" }]} />
      <section className="py-16 max-w-7xl mx-auto px-4">
        <img src={project1} alt="Project cover" className="w-full h-[420px] object-cover rounded-2xl mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <aside className="space-y-6">
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-bold mb-4">Project Information</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ["Clients:", "Hurraytheme"],
                  ["Start Date:", "14 July, 2024"],
                  ["End Date:", "07 September, 2024"],
                  ["Owner:", "Private"],
                  ["Categories:", "Finance, Marketing"],
                  ["Website:", "www.hurraytheme.com"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border pb-2 last:border-0">
                    <dt className="font-semibold">{k}</dt>
                    <dd className="text-muted-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-cream rounded-2xl p-6">
              <h3 className="font-bold mb-4">Social Icon</h3>
              <div className="flex gap-2">
                {[Twitter, Instagram, Youtube, Facebook].map((I, i) => (
                  <span key={i} className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors ${i === 1 ? "bg-red text-primary-foreground" : "bg-background hover:bg-red hover:text-primary-foreground"}`}>
                    <I className="w-4 h-4" />
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-2 space-y-6">
            <p className="text-muted-foreground">Phasellus fermentum id nisl pellentesque tempus. Praesent sapien diam, feugiat eu blandit ac, for laoreet tristique ante. Nunc a risus ac diam feugiat interdum. Mauris efficitur quam eu nisl mollis is mattis. Nulla quis pretium augue.</p>
            <h2 className="text-2xl font-bold">Project Outcome</h2>
            <p className="text-muted-foreground">After launching the new brand and website, XYZ Tech saw a 45% boost in conversions and a 30% increase in organic traffic within three months. Their sales team also reported improved customer engagement and higher-quality leads.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[["45% increase", "in conversion"], ["30% boost", "in organic traffic"]].map(([a, b]) => (
                <div key={a} className="bg-cream rounded-full px-6 py-4">
                  <p className="font-bold">{a}</p>
                  <p className="text-sm text-muted-foreground">{b}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={project1} alt="Detail" className="rounded-xl w-full h-48 object-cover" />
              <img src={project1} alt="Detail" className="rounded-xl w-full h-48 object-cover" />
            </div>
            <h2 className="text-2xl font-bold pt-4">The Challenge Of Project</h2>
            <ul className="space-y-3">
              {[
                "The housekeepers we hired are professionals who take pride in doing excellent work.",
                "Facilisi odio mus quam risus vestibulum torquent eleifend integer semper ridiculus.",
                "Laoreet mus quisque rhoncus himenaeos praesent enim tortor life dapibus pharetra.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 border border-border rounded-2xl p-6">
          <Link to="/projects" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full bg-cream flex-shrink-0" />
            <div>
              <span className="text-xs text-red">Previous ↗</span>
              <p className="text-sm font-semibold group-hover:text-red">Turning Clicks Into Conversions.</p>
            </div>
          </Link>
          <Link to="/projects" className="flex items-center gap-3 md:flex-row-reverse md:text-right group">
            <div className="w-14 h-14 rounded-full bg-cream flex-shrink-0" />
            <div>
              <span className="text-xs text-red">Next ↗</span>
              <p className="text-sm font-semibold group-hover:text-red">Elevating Brand Websites</p>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}