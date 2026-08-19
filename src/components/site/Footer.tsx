import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const socials = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/saririrestaurante?igsh=YThxcG85ZGd4ZmZ6",
    label: "Instagram",
  },
  {
    icon: TiktokIcon,
    href: "https://www.tiktok.com/@saririrestaurante?_r=1&_t=ZS-98q0js1eCZR",
    label: "TikTok",
  },
];


export function Footer() {
  return (
    <footer className="mt-24 bg-forest-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl tracking-wide">SARIRI RESTAURANTE</p>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/75">
            Sabores auténticos en la montaña. Naturaleza, desconexión y gastronomía
            local desde el año 2020.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid size-9 place-items-center rounded-full border border-primary-foreground/30 transition-colors hover:bg-primary-foreground/10"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Navegación</p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
            {[
              { to: "/nosotros", label: "Nosotros" },
              { to: "/menu", label: "Menú" },
              { to: "/hacienda", label: "El Lugar" },
              { to: "/galeria", label: "Galería" },
              { to: "/eventos", label: "Eventos" },
              { to: "/contacto", label: "Contacto" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-primary-foreground/80">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Visítanos</p>
          <p className="flex gap-2">
            <MapPin className="size-4 shrink-0 text-gold" /> Km 11 Vía Nueva a Catamayo,
            Loja, Ecuador
          </p>
          <p className="flex gap-2">
            <Phone className="size-4 shrink-0 text-gold" />{" "}
            <a href="tel:+593997194675" className="hover:text-gold transition-colors">
              0997194675
            </a>
          </p>
          <p className="flex gap-2">
            <Clock className="size-4 shrink-0 text-gold" /> Lunes a Domingo · 08:00 —
            22:00
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15 py-5 text-center font-display text-sm italic text-primary-foreground/70">
        "Gracias por ser parte de nuestra historia. ¡Te esperamos pronto!"
      </div>
    </footer>
  );
}
