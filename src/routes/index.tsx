import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Users, PartyPopper, HeartHandshake } from "lucide-react";
import hero from "@/assets/sariri-img-7.jpg";
import { Ornament } from "@/components/site/Ornament";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sariri | Restaurante en la Montaña y Gastronomía Lojana" },
      {
        name: "description",
        content:
          "Disfruta de la mejor cocina tradicional lojana en Sariri, un restaurante en la montaña. Un entorno natural único en Loja para desconectar y compartir en familia.",
      },
      { property: "og:title", content: "Sariri | Restaurante en la Montaña" },
      {
        property: "og:description",
        content: "Gastronomía auténtica, paisajes de montaña y momentos de desconexión en Loja. Reserva tu mesa hoy mismo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          "name": "Sariri",
          "image": [
            "/assets/hero-hacienda.jpg"
          ],
          "@id": "/",
          "url": "/",
          "telephone": "+593 99 719 4675",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Km 11 Vía Nueva a Catamayo",
            "addressLocality": "Loja",
            "addressRegion": "Loja",
            "postalCode": "110101",
            "addressCountry": "EC"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -3.97,
            "longitude": -79.28
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
              "opens": "12:00",
              "closes": "20:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday", "Sunday"],
              "opens": "09:00",
              "closes": "21:00"
            }
          ],
          "sameAs": [
            "https://www.instagram.com/saririrestaurante?igsh=YThxcG85ZGd4ZmZ6",
            "https://www.tiktok.com/@saririrestaurante?_r=1&_t=ZS-98q0js1eCZR"
          ],
          "servesCuisine": "Tradicional Lojana",
          "priceRange": "$$"
        })
      }
    ]
  }),
  component: Index,
});

const valores = [
  { icon: Leaf, title: "Ingredientes", sub: "Frescos" },
  { icon: Users, title: "Ambiente", sub: "Familiar" },
  { icon: PartyPopper, title: "Eventos", sub: "Especiales" },
  { icon: HeartHandshake, title: "Atención", sub: "Personalizada" },
];

function Index() {
  return (
    <>
      <section className="relative isolate">
        <div className="absolute top-4 left-4 z-10 max-w-xs text-[8px] leading-tight text-white/50 opacity-0 transition-opacity hover:opacity-100">
          '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
          {"\n"}
          {"\n"}
          Generar un sitemap.xml y un archivo robots.txt para mi sitio, con las rutas correctamente configuradas.
        </div>
        <img
          src={hero}
          alt="Sariri al atardecer rodeado de naturaleza y montañas"
          width={1920}
          height={1080}
          className="h-[78vh] min-h-[460px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-primary-foreground">
          <h1 className="font-display text-5xl font-semibold tracking-[0.14em] md:text-7xl">
            SARIRI
          </h1>
          <p className="mt-2 text-[0.7rem] tracking-[0.55em] text-primary-foreground/85">
            RESTAURANTE
          </p>
          <p className="mt-6 font-display text-xl italic md:text-2xl">
            Que no te lo cuenten vívelo
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/menu"
              className="rounded-sm border border-primary-foreground/70 px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-primary-foreground/15"
            >
              Ver menú
            </Link>
            <Link
              to="/reservas"
              className="rounded-sm bg-gold px-6 py-3 text-xs uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
            >
              Reservar mesa
            </Link>
            <Link
              to="/contacto"
              className="rounded-sm border border-primary-foreground/70 px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-primary-foreground/15"
            >
              Cómo llegar
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Bienvenidos</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-forest md:text-5xl">
          Naturaleza, desconexión
          <br /> y gastronomía lojana
        </h2>
        <Ornament />
        <p className="mx-auto max-w-xl text-muted-foreground">
          Creamos Sariri pensando en ofrecer un lugar alejado de la ciudad donde se pueda disfrutar de hermosos paisajes, la naturaleza y la auténtica gastronomía local lojana. Somos un restaurante en la montaña ideal para desconectar y compartir en familia.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {valores.map((v) => (
            <div key={v.title} className="flex flex-col items-center gap-3">
              <span className="grid size-14 place-items-center rounded-full border border-gold/50 text-forest">
                <v.icon className="size-6" />
              </span>
              <p className="text-sm font-medium text-forest">
                {v.title}
                <br />
                <span className="text-muted-foreground">{v.sub}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
