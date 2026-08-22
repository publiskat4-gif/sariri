import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cake, Church, Users, Briefcase, Gem, X } from "lucide-react";
import { SectionHeading } from "@/components/site/Ornament";

import eventBirthday from "@/assets/sariri-img-event-birthday.jpg";
import eventProposal from "@/assets/sariri-img-event-proposal.jpg";
import eventFamily from "@/assets/sariri-img-event-family.jpg";
import eventReunion from "@/assets/sariri-img-event-reunion.jpg";
import eventCorporate from "@/assets/sariri-img-event-corporate.jpg";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos y Paquetes | Sariri" },
      {
        name: "description",
        content:
          "Cumpleaños, matrimonios, bautizos y eventos empresariales en Sariri, Loja.",
      },
      { property: "og:title", content: "Eventos | Sariri" },
      {
        property: "og:description",
        content: "Hacemos de tus momentos especiales algo inolvidable en Loja.",
      },
    ],
  }),
  component: Eventos,
});

const tipos = [
  {
    icon: Cake,
    label: "Cumpleaños",
    img: eventBirthday,
    desc: "Celebra tu día especial rodeado de naturaleza, fogatas y el mejor ambiente de montaña con tus seres queridos.",
  },
  {
    icon: Gem,
    label: "Matrimonios",
    img: eventProposal,
    desc: "Una boda inolvidable con espectaculares banquetes y mesas perfectamente decoradas para tu día de ensueño.",
  },
  {
    icon: Church,
    label: "Bautizos",
    img: eventFamily,
    desc: "Un día memorable de unión familiar rodeados de naturaleza, áreas verdes y juegos infantiles para los más pequeños.",
  },
  {
    icon: Users,
    label: "Reuniones",
    img: eventReunion,
    desc: "Reuniones familiares, almuerzos grupales y banquetes privados con la mejor atención personalizada.",
  },
  {
    icon: Briefcase,
    label: "Eventos Empresariales",
    img: eventCorporate,
    desc: "Sorprende a tu equipo en un entorno campestre inspirador con comida tradicional, mirador y área de fogata.",
  },
];

const paquetes = [
  {
    name: "Evento Básico",
    price: "$15",
    items: ["Menú Tradicional", "Decoración básica", "Capacidad 20-40 personas"],
    destacado: false,
  },
  {
    name: "Evento Premium",
    price: "$25",
    items: [
      "Menú Especial",
      "Decoración completa",
      "Capacidad 40-80 personas",
      "Atención personalizada",
    ],
    destacado: true,
  },
  {
    name: "Evento VIP",
    price: "$35",
    items: [
      "Menú Gourmet",
      "Decoración premium",
      "Capacidad 80+ personas",
      "Atención personalizada",
      "Música en vivo",
    ],
    destacado: false,
  },
];

function Eventos() {
  const [activeEvent, setActiveEvent] = useState<(typeof tipos)[number] | null>(null);

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        title="Eventos"
        subtitle="Hacemos de tus momentos algo inolvidable"
      />

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {tipos.map((t) => (
          <button
            key={t.label}
            type="button"
            onClick={() => setActiveEvent(t)}
            className="flex flex-col items-center gap-3 rounded-sm border border-border bg-card p-5 text-center cursor-pointer transition-all hover:border-forest hover:shadow-xs group"
          >
            <t.icon className="size-7 text-forest group-hover:scale-110 transition-transform" />
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground group-hover:text-forest">
              {t.label}
            </p>
          </button>
        ))}
      </div>

      {activeEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveEvent(null)}
        >
          <div
            className="relative max-w-md w-full rounded-sm bg-card p-6 shadow-xl border border-border animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground cursor-pointer"
              onClick={() => setActiveEvent(null)}
            >
              <X className="size-5" />
            </button>
            <h3 className="font-display text-2xl font-semibold text-forest tracking-wide text-center">
              {activeEvent.label}
            </h3>
            <p className="mt-1 text-center text-[0.6rem] text-gold uppercase tracking-[0.2em] font-semibold">
              Sariri Restaurante
            </p>
            <div className="mt-4 overflow-hidden rounded-sm aspect-[4/3] bg-muted shadow-sm">
              <img
                src={activeEvent.img}
                alt={activeEvent.label}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
              {activeEvent.desc}
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/contacto"
                onClick={() => setActiveEvent(null)}
                className="rounded-sm bg-forest px-6 py-2.5 text-center text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-forest-deep"
              >
                Cotizar ahora
              </Link>
            </div>
          </div>
        </div>
      )}

      <p className="mt-16 text-center text-xs uppercase tracking-[0.28em] text-forest">
        Paquetes especiales
      </p>
      <div className="mx-auto mt-2 h-px w-24 bg-gold" />

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {paquetes.map((p) => (
          <article
            key={p.name}
            className={`flex flex-col rounded-sm border p-6 text-center ${
              p.destacado
                ? "border-forest bg-forest text-primary-foreground shadow-[var(--shadow-soft)]"
                : "border-border bg-card"
            }`}
          >
            <h2
              className={`text-xs uppercase tracking-[0.18em] ${p.destacado ? "text-gold" : "text-forest"}`}
            >
              {p.name}
            </h2>
            <ul
              className={`mt-5 flex-1 space-y-2 text-left text-xs ${p.destacado ? "text-primary-foreground/85" : "text-muted-foreground"}`}
            >
              {p.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-gold">•</span>
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-4xl">{p.price}</p>
            <p
              className={`text-[0.6rem] uppercase tracking-[0.2em] ${p.destacado ? "text-primary-foreground/70" : "text-muted-foreground"}`}
            >
              Por persona
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/contacto"
          className="inline-block rounded-sm bg-forest px-8 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-forest-deep"
        >
          Cotizar mi evento
        </Link>
      </div>
    </div>
  );
}
