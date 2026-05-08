import { Link } from "@tanstack/react-router";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; to?: string }[];
}

export function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section className="bg-navy py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{title}</h1>
      <div className="flex items-center justify-center gap-2 text-sm">
        {breadcrumbs.map((b, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-primary-foreground/50">»</span>}
            {b.to ? (
              <Link to={b.to} className="text-primary-foreground/70 hover:text-red transition-colors">{b.label}</Link>
            ) : (
              <span className="text-primary-foreground">{b.label}</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}