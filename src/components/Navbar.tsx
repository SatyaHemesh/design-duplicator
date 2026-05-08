import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/blogs", label: "Blog" },
  ] as const;

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> info@zibomo.ooo</span>
            <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +91. 9121 208 058</span>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {["f", "in", "ig", "x"].map((s) => (
              <span key={s} className="w-7 h-7 rounded-full bg-navy-light flex items-center justify-center text-xs cursor-pointer hover:bg-red transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-navy border-b border-navy-light">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="text-primary-foreground font-bold text-2xl tracking-tight">
            zibomo <span className="text-[10px] font-normal block leading-none tracking-widest uppercase text-red">Sprint Safe</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium transition-colors ${location.pathname === l.to ? "text-red" : "text-primary-foreground hover:text-red"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-red text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-light transition-colors"
            >
              Contact Us <span className="text-xs">↗</span>
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden text-primary-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-navy border-t border-navy-light px-4 pb-4 space-y-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-primary-foreground text-sm py-2">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block bg-red text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold text-center">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}