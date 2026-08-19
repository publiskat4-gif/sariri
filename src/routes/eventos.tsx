import { createFileRoute, Link } from "@tanstack/react-router";
import { Cake, Church, Baby, Users, Briefcase, Gem } from "lucide-react";
import { SectionHeading } from "@/components/site/Ornament";

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
  { icon: Cake, label: "Cumpleaños" },
  { icon: Gem, label: "Matrimonios" },
  { icon: Church, label: "Bautizos" },
  { icon: Baby, label: "Comuniones" },
  { icon: Users, label: "Reuniones" },
  { icon: Briefcase, label: "Eventos Empresariales" },
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
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        title="Eventos"
        subtitle="Hacemos de tus momentos algo inolvidable"
      />

      <div className="mt-12 grid grid-cols-3 gap-4 md:grid-cols-6">
        {tipos.map((t) => (
          <div
            key={t.label}
            className="flex flex-col items-center gap-2 rounded-sm border border-border bg-card p-4 text-center"
          >
            <t.icon className="size-6 text-forest" />
            <p className="text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground">
              {t.label}
            </p>
          </div>
        ))}
      </div>

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
