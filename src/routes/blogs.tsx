import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Clock, User, MessageSquare, ArrowRight, Search } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";

export const Route = createFileRoute("/blogs")({
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <Layout>
      <PageBanner title="Blogs" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blogs" }]} />
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div className="flex-[2] space-y-8">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img src={blog1} alt="Blog post" className="w-full h-64 object-cover" loading="lazy" />
                <div className="p-6">
                  <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />5 Min</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />Alam Khan</span>
                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Driving Business Growth with Custom Software Solutions in 2025</h3>
                  <p className="text-sm text-muted-foreground mb-4">Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks.</p>
                  <span className="text-red text-sm font-semibold flex items-center gap-1 cursor-pointer hover:underline">View Details <ArrowRight className="w-3 h-3" /></span>
                </div>
              </div>
            ))}
          </div>
          <aside className="flex-1 space-y-8">
            <div className="border border-border rounded-2xl p-6">
              <h4 className="font-bold mb-4">Search Here</h4>
              <div className="flex border border-border rounded-lg overflow-hidden">
                <input placeholder="Search here" className="flex-1 px-4 py-2.5 text-sm outline-none" />
                <button className="bg-red text-primary-foreground px-4"><Search className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="border border-border rounded-2xl p-6">
              <h4 className="font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Technology", "Apps Development", "Business", "Social Marketing", "Business Intelligence", "Marketing"].map((c) => (
                  <li key={c} className="hover:text-red cursor-pointer transition-colors">{c}</li>
                ))}
              </ul>
            </div>
            <div className="border border-border rounded-2xl p-6">
              <h4 className="font-bold mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {["Agency", "Business", "Design", "Marketing", "Trend", "Mobile", "All Project"].map((t) => (
                  <span key={t} className="text-xs bg-muted px-3 py-1.5 rounded-full hover:bg-red hover:text-primary-foreground cursor-pointer transition-colors">{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}