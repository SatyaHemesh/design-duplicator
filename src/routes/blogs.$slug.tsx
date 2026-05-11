import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Search, ArrowRight, Clock, User, MessageSquare, Facebook, Linkedin, Instagram, Twitter, CheckCircle2 } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/blogs/$slug")({
  head: () => ({
    meta: [
      { title: "Blog Detail — Zibomo Sprint Safe" },
      { name: "description", content: "Read the latest insights from Zibomo Sprint Safe." },
    ],
  }),
  component: BlogDetailPage,
});

const categories = ["Technology", "Apps Development", "Business", "Social Marketing", "Business Intelligence", "Marketing"];
const recent = [
  { img: blog1, title: "Driving Business Growth with Custom Software Solutions in 2025" },
  { img: blog2, title: "How Custom Software Solutions Drive Business Growth in 2025" },
  { img: blog3, title: "Powering Business—Always On, Always Ready." },
];
const tags = ["Agency", "Business", "Design", "Marketing", "Planting", "Trend", "Mobile", "All Project"];

function BlogDetailPage() {
  return (
    <Layout>
      <PageBanner title="Blog Detail" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blogs" }, { label: "Blog Detail" }]} />
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <article className="lg:col-span-2">
          <img src={blog1} alt="Article cover" className="w-full h-80 object-cover rounded-2xl mb-6" />
          <div className="flex gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />5 Min</span>
            <span className="flex items-center gap-1"><User className="w-3 h-3" />Alam Khan</span>
            <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />3</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-5">How Custom Software Solutions Drive Business Growth in 2025</h1>
          <p className="text-muted-foreground mb-4">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat.</p>
          <p className="text-muted-foreground mb-6">Use both direct conversations and indirect observations to get visibility into employees' challenges and concerns. Use every opportunity to make clear to employees that you support and care them.</p>
          <blockquote className="border-l-4 border-red bg-cream rounded-r-xl p-6 italic mb-6">
            "We appreciate the consistent high-quality service provided by their team — goes above and beyond concerns promptly."
          </blockquote>
          <p className="text-muted-foreground mb-6">Vast numbers of employees now work remotely, and it's too late to develop a set of remote-work policies if you didn't already have one. But there are ways to make the remote-work experience productive and engaging.</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img src={blog2} alt="Detail" className="rounded-xl w-full h-48 object-cover" />
            <img src={blog3} alt="Detail" className="rounded-xl w-full h-48 object-cover" />
          </div>
          <h3 className="text-xl font-bold mb-3">Real-World Example:</h3>
          <p className="text-muted-foreground mb-4">In a recent commercial build, the project was falling behind due to unclear task assignments. Weekly team huddles and daily update boards helped align everyone, resulting in:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {["Start with a Communication Plan", "Use Simple, Direct Language", "Be Present on Site", "Visual Aids Are Powerful", "Keep Everyone Informed", "Respect Time and Roles"].map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-red flex-shrink-0" />{p}</div>
            ))}
          </div>
          <h3 className="text-xl font-bold mb-3">Conclusion:</h3>
          <p className="text-muted-foreground mb-6">Clear, consistent, and respectful communication can make or break a construction project. When your team feels heard and informed, work flows smoother, problems are solved.</p>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">Tags:</span>
              {["Business", "Design", "Development"].map((t) => (
                <span key={t} className="text-xs bg-cream px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <div className="flex gap-2">
              {[Twitter, Linkedin, Instagram, Facebook].map((I, i) => (
                <span key={i} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-red hover:text-primary-foreground hover:border-red transition-colors cursor-pointer">
                  <I className="w-3.5 h-3.5" />
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 border border-border rounded-2xl p-6">
            <Link to="/blogs" className="flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-full bg-cream flex-shrink-0" />
              <div>
                <span className="text-xs text-red flex items-center gap-1">Previous ↗</span>
                <p className="text-sm font-semibold group-hover:text-red">Turning Clicks Into Conversions.</p>
              </div>
            </Link>
            <Link to="/blogs" className="flex items-center gap-3 md:flex-row-reverse md:text-right group">
              <div className="w-14 h-14 rounded-full bg-cream flex-shrink-0" />
              <div>
                <span className="text-xs text-red flex items-center gap-1 md:justify-end">Next ↗</span>
                <p className="text-sm font-semibold group-hover:text-red">Elevating Brand Websites</p>
              </div>
            </Link>
          </div>
        </article>

        <aside className="space-y-6">
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-bold mb-3">Search Here</h3>
            <div className="flex items-center bg-background rounded-full overflow-hidden">
              <input className="flex-1 px-4 py-2.5 text-sm bg-transparent outline-none" placeholder="Search here" />
              <button className="w-10 h-10 bg-red text-primary-foreground flex items-center justify-center"><Search className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-bold mb-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((c, i) => (
                <div key={c} className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm cursor-pointer ${i === 0 ? "bg-red text-primary-foreground" : "bg-background hover:bg-red/10"}`}>
                  {c} <ArrowRight className="w-3 h-3" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-bold mb-3">Recent Posts</h3>
            <div className="space-y-4">
              {recent.map((r) => (
                <div key={r.title} className="flex gap-3">
                  <img src={r.img} alt={r.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <p className="text-xs text-red mb-1">09 May, 2024</p>
                    <p className="text-sm font-semibold leading-snug">{r.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-bold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <span key={t} className={`text-xs px-3 py-1.5 rounded-full cursor-pointer ${i === 6 ? "bg-red text-primary-foreground" : "bg-background"}`}>{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </Layout>
  );
}