import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageBanner } from "@/components/PageBanner";
import { MapPin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <PageBanner title="Contact Us" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <MapPin className="w-6 h-6" />, title: "1st Floor, Pranavi Complex, Road No. 10, Manikonda, Hyderabad - 500089" },
              { icon: <Mail className="w-6 h-6" />, title: "Info@zibomo.ooo\ncontact@zibomo.ooo" },
              { icon: <Phone className="w-6 h-6" />, title: "+91. 7013 365 348\n+91. 9121 208 058" },
            ].map((c, i) => (
              <div key={i} className="text-center border border-border rounded-2xl p-8">
                <div className="w-14 h-14 bg-red rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">{c.icon}</div>
                <p className="text-sm whitespace-pre-line">{c.title}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Send Your Message To Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input placeholder="Enter Your Name" className="border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-red" />
              <input placeholder="Enter Your Number" className="border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-red" />
              <select className="border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-red text-muted-foreground">
                <option>Web Design</option><option>App Development</option><option>SEO</option>
              </select>
              <input placeholder="Your Email Address" className="border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-red" />
            </div>
            <textarea placeholder="Enter Your Message" rows={4} className="w-full border border-border rounded-lg px-4 py-3 text-sm outline-none focus:border-red mb-6" />
            <div className="text-center">
              <button className="bg-red text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-red-light transition-colors">Send Message Here →</button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-96 bg-muted flex items-center justify-center text-muted-foreground">
        <div className="text-center">
          <MapPin className="w-12 h-12 mx-auto mb-2 text-red" />
          <p className="font-semibold">Zibomo Sprint Safe</p>
          <p className="text-sm">Manikonda, Hyderabad</p>
        </div>
      </section>
    </Layout>
  );
}