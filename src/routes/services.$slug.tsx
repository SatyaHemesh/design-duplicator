import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { ArrowRight, Phone, Mail, MapPin, FileText, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import aboutImg from "@/assets/about-image.png";

export const Route = createFileRoute("/services/$slug")({
  head: () => ({
    meta: [
      { title: "Service Detail — Zibomo Sprint Safe" },
      { name: "description", content: "Explore our specialized service offerings." },
    ],
  }),
  component: ServiceDetailPage,
});

const serviceList = [
  "Transit Hubs", "Commercial Spaces", "Educational Institutions", "Healthcare Facilities",
  "Corporate & Office Spaces", "Hospitality & Travel", "Public & Civic Infrastructure",
  "Entertainment & Leisure", "Religious & Cultural Sites", "Residential & Urban Living", "Logistics & Utility Locations",
];
const features = ["Railway Stations", "Metro Stations", "Airports", "Bus Terminals", "Parking Complexes"];
const faqs = [
  { q: "What is vision for the future?", a: "Augue enim ut sem vulputate nunc eu ultrices nec bibendum. Nullam non at eu tincidunt non purus vitae.leo nam quam elit imperdiet. Sit malesuada massa scelerisque tincidunt." },
  { q: "Do you offer free resources?", a: "Yes, we offer a variety of free guides and templates." },
  { q: "Can help to find investors?", a: "We can connect you with our investor network." },
  { q: "What services do you offer?", a: "Full-service software, design, and growth strategy." },
];

function ServiceDetailPage() {
  const params = Route.useParams();
  const title = params.slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  const [open, setOpen] = useState(0);

  return (
    <Layout>
      <PageBanner title={title} breadcrumbs={[{ label: "Home", to: "/" }, { label: "Service Areas", to: "/services" }, { label: title }]} />
      <section className="py-16 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <aside className="space-y-6">
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-bold mb-4">Services List</h3>
            <div className="space-y-2">
              {serviceList.map((s) => (
                <Link key={s} to="/services" className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm ${s === title ? "bg-red text-primary-foreground" : "bg-background hover:bg-red/10"}`}>
                  {s} <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-bold mb-1">Need Any Help?</h3>
            <p className="text-xs text-muted-foreground mb-4">Need Any Help, Call Us 24/7 For Support</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3"><span className="w-9 h-9 rounded-full bg-background flex items-center justify-center"><Phone className="w-4 h-4" /></span><div><p className="text-xs text-muted-foreground">Call Us</p><p className="font-semibold">+123 456 7890</p></div></div>
              <div className="flex items-center gap-3"><span className="w-9 h-9 rounded-full bg-background flex items-center justify-center"><Mail className="w-4 h-4" /></span><div><p className="text-xs text-muted-foreground">Email Us</p><p className="font-semibold">info@example.com</p></div></div>
              <div className="flex items-center gap-3"><span className="w-9 h-9 rounded-full bg-background flex items-center justify-center"><MapPin className="w-4 h-4" /></span><div><p className="text-xs text-muted-foreground">Office Address</p><p className="font-semibold">125 Berlin, Germany</p></div></div>
            </div>
          </div>
          <div className="bg-cream rounded-2xl p-6">
            <h3 className="font-bold mb-3">Download Our Brochures</h3>
            <div className="flex gap-3 items-start mb-4">
              <FileText className="w-8 h-8 text-red flex-shrink-0" />
              <p className="text-xs text-muted-foreground">Business is a marketing discipline focused on growing visibility organ (non-paid) technic required.</p>
            </div>
            <button className="w-full bg-red text-primary-foreground py-2.5 rounded-full text-sm font-semibold hover:bg-red-light transition-colors">Download</button>
          </div>
        </aside>

        <div className="lg:col-span-2 space-y-6">
          <img src={aboutImg} alt={title} className="rounded-2xl w-full h-80 object-cover" />
          <p className="text-muted-foreground">When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a book bethas survived not only five when anner year unknown printer eed little help from friend from time to time.</p>
          <p className="text-muted-foreground">Although we offer the one-stop convenience, unknown printer took galley type year anddey unknown printer took scrambled.</p>
          <ul className="space-y-3">
            {["Sed nisl fusce est consequat mollis habitasse facilisi rutrum nisle.", "Cubilia quisque ad accumsan lorem platea elementum nisl curabitur dapibus.", "Egestas magnis sapien hack vehicula condimentum dui enim justo site."].map((t) => (
              <li key={t} className="flex gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-red flex-shrink-0 mt-0.5" />{t}</li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img src={aboutImg} alt="Detail" className="rounded-xl w-full h-44 object-cover" />
            <img src={aboutImg} alt="Detail" className="rounded-xl w-full h-44 object-cover" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {features.map((f) => (
              <div key={f} className="bg-cream rounded-xl p-4 text-center text-sm font-semibold">{f}</div>
            ))}
          </div>

          <h2 className="text-2xl font-bold pt-4">Frequently Asked Question</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="bg-cream rounded-xl overflow-hidden">
                <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm">
                  {f.q}
                  <ChevronDown className={`w-4 h-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}