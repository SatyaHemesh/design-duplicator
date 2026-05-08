import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const areas = [
  "Transit Hubs", "Commercial Spaces", "Educational Institutions",
  "Healthcare Facilities", "Corporate & Office Spaces", "Hospitality & Travel",
  "Public & Civic Infrastructure", "Entertainment & Leisure", "Religious & Cultural Sites",
  "Residential & Urban Living", "Logistics & Utility Locations",
];

function ServicesPage() {
  return (
    <Layout>
      <PageBanner title="Service Areas" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service Areas" }]} />
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div key={area} className="border border-border rounded-2xl p-8 hover:shadow-lg hover:border-red transition-all group">
              <div className="w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center text-red mb-6 text-2xl group-hover:bg-red group-hover:text-primary-foreground transition-colors">🏢</div>
              <h3 className="text-xl font-bold mb-3">{area}</h3>
              <p className="text-muted-foreground text-sm mb-4">When an unknown printer took a galley of type and scrambled it to make a specimen book.</p>
              <span className="text-red text-sm font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                Know more <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}