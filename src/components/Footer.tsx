import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-navy-light rounded-2xl p-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red rounded-xl flex items-center justify-center text-primary-foreground text-xl">✉</div>
            <div>
              <h3 className="text-xl font-bold">Subscribe to Our Newsletter</h3>
            </div>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 rounded-l-lg bg-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 outline-none flex-1 md:w-72 text-sm"
            />
            <button className="bg-red text-primary-foreground px-5 py-3 rounded-r-lg font-semibold hover:bg-red-light transition-colors">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 pb-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">zibomo</h2>
          <p className="text-sm text-primary-foreground/70 mb-4">
            We are team of passionate designers, marketers, and strategists who work together.
          </p>
          <div className="flex gap-2">
            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
              <span key={i} className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center hover:bg-red transition-colors cursor-pointer">
                <Icon className="w-4 h-4" />
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Link</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/blogs", label: "Blog Standard" },
              { to: "/projects", label: "Project" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-red transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">What we Offer</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Our Story", "Latest Posts", "Help Center", "Support Center"].map((t) => (
              <li key={t}><span className="hover:text-red transition-colors cursor-pointer">{t}</span></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Business Strategy", "Software Design", "Data Security", "Social Marketing", "FutureLearn"].map((t) => (
              <li key={t}><span className="hover:text-red transition-colors cursor-pointer">{t}</span></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/60">
          <span>© 2026. All Rights Reserved. zibomo sprintsafe pvt. ltd.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-red cursor-pointer">Terms & Condition</span>
            <span className="hover:text-red cursor-pointer">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}