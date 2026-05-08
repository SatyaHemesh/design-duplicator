import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import projectImg from "@/assets/project-1.jpg";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

const categories = ["All", "Design", "App", "Branding", "Development"];

function ProjectsPage() {
  return (
    <Layout>
      <PageBanner title="Projects" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]} />
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((c, i) => (
              <button key={c} className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${i === 0 ? "bg-red text-primary-foreground" : "border border-border hover:border-red hover:text-red"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all">
                <img src={projectImg} alt={`Project ${i + 1}`} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="p-6">
                  <h3 className="font-bold mb-1">Business Development</h3>
                  <p className="text-sm text-muted-foreground">Digital marketing</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}