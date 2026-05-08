import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Play, Star } from "lucide-react";
import aboutImg from "@/assets/about-image.png";
import blog1 from "@/assets/blog-1.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageBanner title="About Us" breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]} />

      {/* About Company */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-red text-xs font-semibold">+ About Company +</span>
          <div className="flex flex-col lg:flex-row gap-12 mt-4 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Startups to Scale Smarter</h2>
              <div className="bg-cream rounded-2xl p-8">
                <span className="text-red font-bold text-lg">SINCE 2006</span>
                <p className="text-muted-foreground text-sm mt-3">
                  Sed perspiciatis unde omnis natus voluptatem ea accusantiuc doloremue laudantium totamem eaq aperiam eaque quinventore veritatis architecto a beatae vitae dicta ways.
                </p>
              </div>
            </div>
            <div className="flex-1 text-right">
              <div className="inline-flex items-center gap-3 bg-cream rounded-xl px-6 py-3">
                <span className="text-4xl font-bold">19+</span>
                <span className="text-sm text-muted-foreground text-left">Years of Pro<br />Experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-red text-xs font-semibold">+ Working Process +</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">Working Process, How Does We Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { num: "01", title: "Target Audience" },
              { num: "02", title: "Competitor Analysis", highlight: true },
              { num: "03", title: "Evaluation and review" },
              { num: "04", title: "Implementation Support" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold mb-4 ${step.highlight ? "bg-red text-primary-foreground" : "border-2 border-border text-foreground"}`}>
                  {step.num}
                </div>
                <h4 className="font-semibold text-sm">{step.title}</h4>
                {step.highlight && <p className="text-xs text-muted-foreground mt-2">Whether you're building a startup landing page, a dashboard.</p>}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <img src={aboutImg} alt="Dashboard" width={640} height={512} className="rounded-2xl w-full" loading="lazy" />
              <button className="absolute bottom-6 left-6 w-14 h-14 bg-red rounded-full flex items-center justify-center text-primary-foreground">
                <Play className="w-5 h-5 fill-current" />
              </button>
              <div className="absolute bottom-6 left-24 bg-red text-primary-foreground rounded-xl px-4 py-2">
                <span className="text-xl font-bold">19+</span>
                <p className="text-xs">Years of Experience</p>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              {[
                { num: "356+", label: "Project Complete" },
                { num: "55k+", label: "Satisfied Customers" },
                { num: "98%", label: "Positive Reviews" },
              ].map((stat) => (
                <div key={stat.label} className="bg-background rounded-xl p-5 border border-border flex items-center gap-4">
                  <span className="text-3xl font-bold">{stat.num}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-red text-xs font-semibold">+ Team Members +</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-10">See Our Professional Team Members</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Brooklyn Simmons", role: "Founder & CCO" },
              { name: "Mariana Mia", role: "Founder & CCO" },
              { name: "Dianne Russell", role: "HR manager" },
              { name: "Harry Brush", role: "Web Developer" },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="bg-muted rounded-2xl h-64 mb-4 overflow-hidden">
                  <img src={blog1} alt={member.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
                <h4 className="font-bold">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-navy">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-red text-xs font-semibold">+ Our Testimonials +</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-10">Honest Reviews From our Loyal Customers!</h2>
          <div className="flex gap-1 justify-center mb-6">
            {Array(5).fill(0).map((_, i) => <Star key={i} className="w-5 h-5 text-red fill-current" />)}
          </div>
          <blockquote className="text-primary-foreground/80 text-lg italic mb-6">
            "Comprehensive strategies, the realm of consulting caters to a spectrum of needs with its array of versatile offerings."
          </blockquote>
          <p className="text-primary-foreground font-bold">Brooklyn Simmons</p>
          <p className="text-primary-foreground/60 text-sm">Lead Developer</p>
        </div>
      </section>
    </Layout>
  );
}