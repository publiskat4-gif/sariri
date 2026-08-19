import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/menu", label: "Menú" },
  { to: "/galeria", label: "Galería" },
  { to: "/eventos", label: "Eventos" },
  { to: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Sariri Logo"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-forest [&.active]:text-gold"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/reservas"
            className="rounded-sm bg-forest px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-forest-deep"
          >
            Reservar
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          className="text-forest lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <nav className="grid gap-2 border-t border-border bg-background px-5 py-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm uppercase tracking-[0.14em] text-foreground/85 [&.active]:text-gold"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/reservas"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm bg-forest py-2.5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground"
          >
            Reservar
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
