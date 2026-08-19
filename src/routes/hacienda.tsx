import { createFileRoute, Link } from "@tanstack/react-router";
import img2 from "@/assets/sariri-img-2.jpg";
import img4 from "@/assets/sariri-img-4.jpg";
import img5 from "@/assets/sariri-img-5.jpg";
import img7 from "@/assets/sariri-img-7.jpg";
import img9 from "@/assets/sariri-img-9.jpg";
import img10 from "@/assets/sariri-img-10.jpg";
import { SectionHeading } from "@/components/site/Ornament";

export const Route = createFileRoute("/hacienda")({
  head: () => ({
    meta: [
      { title: "El Lugar | Espacios y naturaleza" },
      {
        name: "description",
        content:
          "Jardines, miradores, áreas exteriores, juegos infantiles y parqueadero: un lugar para disfrutar y relajarse.",
      },
      { property: "og:title", content: "El Lugar" },
      {
        property: "og:description",
        content: "Conoce los hermosos espacios exteriores de Sariri en Loja.",
      },
    ],
  }),
  component: HaciendaPage,
});

const espacios = [
  { img: img9, label: "Jardines y Senderos" },
  { img: img7, label: "Restaurante Principal" },
  { img: img10, label: "Áreas Exteriores y Fogata" },
  { img: img5, label: "Juegos Infantiles y Áreas Verdes" },
  { img: img4, label: "Mirador de la Montaña" },
  { img: img2, label: "Salón Interior Acogedor" },
];

function HaciendaPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        title="El Lugar"
        subtitle="Un entorno natural para relajarse y disfrutar"
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {espacios.map((e) => (
          <figure
            key={e.label}
            className="overflow-hidden rounded-sm border border-border bg-card shadow-[var(--shadow-card)]"
          >
            <img
              src={e.img}
              alt={e.label}
              width={1000}
              height={700}
              loading="lazy"
              className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <figcaption className="py-3 text-center text-xs uppercase tracking-[0.16em] text-forest">
              {e.label}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 grid overflow-hidden rounded-sm md:grid-cols-[1.6fr_1fr]">
        <img
          src={img9}
          alt="Áreas verdes del restaurante"
          width={1000}
          height={700}
          loading="lazy"
          className="h-64 w-full object-cover md:h-full"
        />
        <div className="flex flex-col items-center justify-center gap-5 bg-forest p-10 text-center text-primary-foreground">
          <p className="font-display text-xl italic">
            Ven y vive una experiencia inolvidable en contacto con la naturaleza y la
            tradición.
          </p>
          <Link
            to="/reservas"
            className="rounded-sm border border-gold px-6 py-3 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-accent-foreground"
          >
            Reservar visita
          </Link>
        </div>
      </div>
    </div>
  );
}
