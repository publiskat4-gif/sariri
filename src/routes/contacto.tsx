import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Instagram,
} from "lucide-react";
import { SectionHeading } from "@/components/site/Ornament";

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

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contáctanos | Sariri" },
      {
        name: "description",
        content:
          "Dirección, teléfono, WhatsApp, correo y horarios de Sariri en Loja, Ecuador.",
      },
      { property: "og:title", content: "Contáctanos | Sariri" },
      {
        property: "og:description",
        content: "Estamos aquí para servirte. Encuéntranos en Loja, Ecuador.",
      },
    ],
  }),
  component: Contacto,
});

const datos = [
  {
    icon: MapPin,
    title: "Dirección",
    lines: ["Km 11 Vía Nueva a Catamayo", "Loja — Ecuador"],
  },
  {
    icon: Phone,
    title: "Teléfono",
    lines: ["0997194675"],
    href: "tel:+593997194675",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["0997194675"],
    href: "https://wa.me/593997194675",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["haciendasariri@gmail.com"],
    href: "mailto:haciendasariri@gmail.com",
  },
  {
    icon: Clock,
    title: "Horarios",
    lines: ["Lunes a Domingo", "08:00 AM - 10:00 PM"],
  },
];

function Contacto() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading title="Contáctanos" subtitle="Estamos aquí para servirte" />

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {datos.map((d) => (
            <div key={d.title} className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary text-forest">
                <d.icon className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest">{d.title}</p>
                {d.lines.map((l) => (
                  <p key={l} className="text-xs text-muted-foreground">
                    {d.href ? (
                      <a href={d.href} className="hover:underline hover:text-forest transition-colors">
                        {l}
                      </a>
                    ) : (
                      l
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-forest">Síguenos</p>
            <div className="mt-3 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full bg-forest text-primary-foreground transition-colors hover:bg-forest-deep"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Ubicación de Sariri en Loja"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-79.32%2C-4.00%2C-79.24%2C-3.94&layer=mapnik&marker=-3.97%2C-79.28"
            loading="lazy"
            className="h-[420px] w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
