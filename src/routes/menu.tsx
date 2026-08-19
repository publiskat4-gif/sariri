import { createFileRoute, Link } from "@tanstack/react-router";
import { UtensilsCrossed, Star, Flame, Soup, IceCream, CupSoda } from "lucide-react";
import seco from "@/assets/plato-seco.jpg";
import cuy from "@/assets/plato-cuy.jpg";
import trucha from "@/assets/plato-trucha.jpg";
import parrillada from "@/assets/plato-parrillada.jpg";
import { SectionHeading } from "@/components/site/Ornament";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Nuestro Menú | Sariri" },
      {
        name: "description",
        content:
          "Platos tradicionales lojanos, parrilladas, entradas y postres: descubre las especialidades de Sariri en Loja.",
      },
      { property: "og:title", content: "Nuestro Menú | Sariri" },
      {
        property: "og:description",
        content: "Descubre nuestra exquisita gastronomía lojana en Loja.",
      },
    ],
  }),
  component: MenuPage,
});

const categorias = [
  { icon: UtensilsCrossed, label: "Platos Tradicionales" },
  { icon: Star, label: "Especialidades" },
  { icon: Flame, label: "Parrilladas" },
  { icon: Soup, label: "Entradas" },
  { icon: IceCream, label: "Postres" },
  { icon: CupSoda, label: "Bebidas" },
];

const platos = [
  {
    img: seco,
    name: "Seco de Chivo",
    desc: "Delicioso seco de chivo acompañado de arroz, menestra y ensalada.",
    price: "$12.50",
  },
  {
    img: cuy,
    name: "Cuy Asado",
    desc: "Cuy tierno asado al carbón con papas y salsa de maní.",
    price: "$14.50",
  },
  {
    img: trucha,
    name: "Trucha Frita",
    desc: "Trucha fresca frita, acompañada de papas, ensalada y arroz.",
    price: "$11.50",
  },
  {
    img: parrillada,
    name: "Parrillada Mixta",
    desc: "Selección de carnes a la parrilla con chorizo, papas y ensalada.",
    price: "$18.50",
  },
];

function MenuPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading title="Nuestro Menú" />

      <div className="mt-10 grid grid-cols-3 gap-6 md:grid-cols-6">
        {categorias.map((c) => (
          <div key={c.label} className="flex flex-col items-center gap-2 text-center">
            <span className="grid size-12 place-items-center rounded-full bg-secondary text-forest">
              <c.icon className="size-5" />
            </span>
            <p className="text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
              {c.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-16 text-center text-xs uppercase tracking-[0.28em] text-forest">
        Especialidades de la casa
      </p>
      <div className="mx-auto mt-2 h-px w-24 bg-gold" />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {platos.map((p) => (
          <article
            key={p.name}
            className="flex items-stretch gap-4 overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-card)]"
          >
            <img
              src={p.img}
              alt={p.name}
              width={800}
              height={800}
              loading="lazy"
              className="size-32 shrink-0 object-cover"
            />
            <div className="flex flex-col justify-center py-4 pr-4">
              <h2 className="font-display text-xl text-forest">{p.name}</h2>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {p.desc}
              </p>
              <p className="mt-3 font-display text-lg font-semibold text-clay">
                {p.price}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/reservas"
          className="inline-block rounded-sm bg-forest px-8 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-forest-deep"
        >
          Reservar mesa
        </Link>
      </div>
    </div>
  );
}
