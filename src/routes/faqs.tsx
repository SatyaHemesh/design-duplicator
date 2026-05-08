import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faqs")({
  component: FaqsPage,
});

const faqs = [
  { q: "What Warranties Do I Have for Installation?", a: "In relation to websites and apps, UI design considers the look, interactivity of the making product. It's all about making sure that the user interface." },
  { q: "How long does it take to build a new website?", a: "Typically 4-8 weeks depending on complexity." },
  { q: "What do you need to start my website?", a: "We need your branding, content, and project brief." },
  { q: "How long does it take to build a new website?", a: "Timeline depends on scope and features required." },
  { q: "How to soft launch your business?", a: "We help plan a phased rollout with beta testing." },
  { q: "How does the trial work?", a: "Start with a free 12-day trial with full feature access." },
];

function FaqsPage() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <Layout>
      <PageBanner title="FAQ's" breadcrumbs={[{ label: "Home", to: "/" }, { label: "FAQs" }]} />
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <span className="text-red text-xs font-semibold">+ Question +</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Have Questions? Find Your Answers Here</h2>
            <p className="text-muted-foreground text-sm mb-6">In relation to websites and apps, UI design considers the look, interactivity of the making product.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-red text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-red-light transition-colors">
              Ask Your Question <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="flex-1 space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm hover:bg-muted transition-colors">
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}