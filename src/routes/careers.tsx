import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Zibomo Sprint Safe" },
      { name: "description", content: "Join the Zibomo Sprint Safe team and build the future with us." },
      { property: "og:title", content: "Careers — Zibomo Sprint Safe" },
      { property: "og:description", content: "Open roles at Zibomo Sprint Safe." },
    ],
  }),
  component: CareersPage,
});

const jobs = [
  { title: "Senior Frontend Engineer", dept: "Engineering", location: "Hyderabad / Remote", type: "Full-time" },
  { title: "Product Designer", dept: "Design", location: "Hyderabad", type: "Full-time" },
  { title: "Business Strategy Lead", dept: "Strategy", location: "Remote", type: "Full-time" },
  { title: "Data Security Analyst", dept: "Security", location: "Hyderabad", type: "Full-time" },
  { title: "Social Marketing Manager", dept: "Marketing", location: "Remote", type: "Contract" },
  { title: "Customer Success Specialist", dept: "Support", location: "Hyderabad", type: "Full-time" },
];

function CareersPage() {
  return (
    <Layout>
      <PageBanner title="Careers" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]} />
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-red text-xs font-semibold mb-2">+ Join Our Team +</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build the Future with Zibomo</h2>
          <p className="text-muted-foreground">We're a team of passionate marketers, designers, and strategists working together to empower businesses worldwide.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((j) => (
            <div key={j.title} className="border border-border rounded-2xl p-6 hover:shadow-lg transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-red/10 rounded-xl flex items-center justify-center text-red">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold bg-cream px-3 py-1 rounded-full">{j.dept}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red transition-colors">{j.title}</h3>
              <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-5">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{j.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{j.type}</span>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-red text-sm font-semibold hover:underline">
                Apply Now <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}