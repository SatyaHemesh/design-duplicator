import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Shield, TrendingUp, Palette, ChevronDown, Star, ArrowRight, Clock, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-delivery.png";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import aboutImg from "@/assets/about-image.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const faqs = [
  { q: "What Warranties Do I Have for Installation?", a: "In relation to websites and apps, UI design considers the look, interactivity of the making product. It's all about making sure that the user interface." },
  { q: "How long does it take to build a new website?", a: "Typically 4-8 weeks depending on complexity and requirements." },
  { q: "What do you need to start my website?", a: "We need your branding assets, content, and a clear brief of your goals." },
  { q: "How to soft launch your business?", a: "We help you plan a phased rollout with beta testing and feedback loops." },
  { q: "How does the trial work?", a: "Start with a free 12-day trial with full access to all features." },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 z-10">
            <span className="inline-block bg-red/20 text-red text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              Next-Level Productivity, Simplified
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Empower Your <span className="text-red underline decoration-red">Growth</span><br />Without Barriers
            </h1>
            <p className="text-primary-foreground/70 text-base md:text-lg mb-8 max-w-lg">
              Provide a brief overview of your SaaS product, explaining what it does and how it can benefit the user.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-red text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-red-light transition-colors">
              Get Started Free <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={heroImg} alt="Delivery illustration" width={500} height={400} className="max-w-md w-full" />
          </div>
        </div>
        {/* Stats bar */}
        <div className="bg-red">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-8">
            <span className="text-primary-foreground font-bold text-2xl">30K</span>
            <span className="text-primary-foreground/80 text-sm">Our 30k Instruction Clients Worldwide</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: "⚙️", title: "Software Features", desc: "We define deep understanding your target competitors." },
            { icon: "🎨", title: "Custom Options", desc: "We solve design understanding your target competitors." },
            { icon: "📞", title: "Customer Support", desc: "24/7 expert support understanding your target competitors." },
          ].map((f) => (
            <div key={f.title} className="text-center p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xl md:text-2xl font-medium max-w-3xl mx-auto px-4 leading-relaxed">
          We empower businesses with smart software solutions that combine strategy, innovation, and expert support helping you work smarter, grow faster, and achieve lasting success.
        </p>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-red text-xs font-semibold mb-2">+ Who We Are? +</span>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Highlights of Our Key Milestones</h2>
              <div className="flex items-end gap-4 mb-6">
                <div>
                  <span className="text-6xl font-bold">9+</span>
                  <p className="text-sm text-muted-foreground">Years Work Experience</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg">4.9</span>
                  <div className="flex gap-0.5 text-red">
                    {Array(5).fill(0).map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-xs text-muted-foreground">More 200+ Reviews</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red text-primary-foreground rounded-xl px-6 py-4 text-center">
                  <span className="text-2xl font-bold">620+</span>
                  <p className="text-xs">Finished Projects</p>
                </div>
                <div className="bg-red text-primary-foreground rounded-xl px-6 py-4 text-center">
                  <span className="text-2xl font-bold">200+</span>
                  <p className="text-xs">Skilled Experts</p>
                </div>
                <div className="bg-red text-primary-foreground rounded-xl px-6 py-4 text-center">
                  <span className="text-2xl font-bold">98%</span>
                  <p className="text-xs">Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img src={aboutImg} alt="Software dashboard" width={640} height={512} className="rounded-2xl w-full" loading="lazy" />
              <p className="text-sm text-muted-foreground mt-4">
                Scale your software operations through a custom engineering team that integrates with your existing processes and delivers high-quality solutions.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-red text-sm font-semibold mt-2 hover:underline">
                More About Us <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-red text-xs font-semibold mb-2">+ Software Features +</span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">What You Get with Our<br />Software Services</h2>
            <Link to="/services" className="mt-4 md:mt-0 text-red text-sm font-semibold flex items-center gap-1 hover:underline">
              View All Services <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: "Future-Ready Security", desc: "Comprehensive security solutions that protect your infrastructure and data." },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Smart Growth Strategy", desc: "Data-driven growth strategies that scale your business effectively." },
              { icon: <Palette className="w-8 h-8" />, title: "Design That Delivers", desc: "User-centered designs that convert visitors into loyal customers." },
            ].map((s) => (
              <div key={s.title} className="border border-border rounded-2xl p-8 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-red/10 rounded-xl flex items-center justify-center text-red mb-6 group-hover:bg-red group-hover:text-primary-foreground transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <span className="text-red text-sm font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                  Read More <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg mb-8">Trusted by <span className="text-red font-bold">2300+</span> business worldwide</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="text-2xl font-bold text-foreground/50">Logo{i + 1}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-red text-xs font-semibold mb-2">+ Our Process +</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">The Process of Excellence,<br />Designed for You</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Scalable Solutions", "Web Design", "Data Strategy", "Unified Workflow"].map((step, i) => (
              <div key={step} className="bg-background rounded-xl p-6 text-center border border-border hover:border-red transition-colors">
                <div className="w-10 h-10 bg-red/10 rounded-full flex items-center justify-center text-red font-bold text-sm mx-auto mb-4">
                  0{i + 1}
                </div>
                <h4 className="font-semibold text-sm">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Get Started with a Free 12-Day Trial!
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Join 13k+ teams streamlining project management and remote collaboration.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-primary-foreground px-8 py-3.5 rounded-full font-semibold hover:bg-navy-light transition-colors">
            Get Started Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <span className="inline-block text-red text-xs font-semibold mb-2">+ Question +</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions? Find Your Answers Here</h2>
            <p className="text-muted-foreground text-sm mb-6">
              In relation to websites and apps, UI design considers the look, interactivity of the making product.
            </p>
            <Link to="/faqs" className="inline-flex items-center gap-2 bg-red text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-light transition-colors">
              Ask Your Question <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex-1 space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm hover:bg-muted transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-red text-xs font-semibold mb-2">+ Our Testimonials +</span>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Honest Reviews From our<br />Loyal Customers!</h2>
          <div className="max-w-3xl mx-auto bg-background rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex gap-1 text-red justify-center mb-6">
              {Array(5).fill(0).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <blockquote className="text-center text-lg leading-relaxed mb-6 italic">
              "He quickly delivered excellent design as per required specifications. New landing page will have refreshing simple look, while page load light on images and at the same time keeping professional look."
            </blockquote>
            <div className="text-center">
              <p className="font-bold">Alexander Cameron</p>
              <p className="text-sm text-muted-foreground">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <div>
              <span className="inline-block text-red text-xs font-semibold mb-2">+ News & Updates +</span>
              <h2 className="text-3xl md:text-4xl font-bold">Our Latest News & Articles</h2>
            </div>
            <Link to="/blogs" className="hidden md:inline-flex items-center gap-2 border border-red text-red px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red hover:text-primary-foreground transition-colors">
              View All Blogs
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: blog1, date: "06 Jun", time: "5 Min", title: "Everything You Need to Know Before Choosing Multiora." },
              { img: blog2, date: "08 Jun", time: "6 Min", title: "Customer Success Stories: How Businesses Grow Using AI" },
              { img: blog3, date: "10 Jun", time: "8 Min", title: "5 Major Challenges Our Software Eliminates Instantly" },
            ].map((post) => (
              <div key={post.title} className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all">
                <div className="relative overflow-hidden">
                  <img src={post.img} alt={post.title} width={640} height={512} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-red text-primary-foreground text-xs font-bold px-3 py-1 rounded">{post.date}</span>
                </div>
                <div className="p-6">
                  <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.time}</span>
                    <span className="flex items-center gap-1"><User className="w-3 h-3" />Alam Khan</span>
                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" />3</span>
                  </div>
                  <h3 className="font-bold mb-3 group-hover:text-red transition-colors">{post.title}</h3>
                  <Link to="/blogs" className="text-red text-sm font-semibold flex items-center gap-1 hover:underline">
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
