import { createFileRoute } from "@tanstack/react-router";
import img2 from "@/assets/sariri-img-2.jpg";
import img7 from "@/assets/sariri-img-7.jpg";
import img9 from "@/assets/sariri-img-9.jpg";
import { Ornament } from "@/components/site/Ornament";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nuestra Historia | Sariri" },
      {
        name: "description",
        content:
          "Conoce la historia, misión y visión de Sariri, un restaurante en la montaña fundado en el año 2020 en Loja, Ecuador.",
      },
      { property: "og:title", content: "Nuestra Historia | Sariri" },
      {
        property: "og:description",
        content: "Conoce la historia y la misión de Sariri en Loja, Ecuador.",
      },
    ],
  }),
  component: Nosotros,
});

const stats = [
  { n: "6+", l: "Años de historia" },
  { n: "15K+", l: "Clientes felices" },
  { n: "30+", l: "Platos especiales" },
  { n: "50+", l: "Eventos realizados" },
];

function Nosotros() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="section-title text-4xl text-forest md:text-5xl">
            Nuestra Historia
          </h1>
          <div className="ornament my-5 max-w-[200px] text-gold">
            <span className="text-sm">&#10022;</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Sariri nace en el año 2020, fundado en medio de la pandemia, con la visión de crear un espacio único alejado de la ciudad. Queríamos ofrecer un lugar rodeado de hermosos paisajes y naturaleza donde las personas pudieran desconectar y disfrutar de la mejor gastronomía lojana tradicional.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Como un restaurante en la montaña, nuestros valores se centran en la integridad, la innovación y el trabajo en equipo, brindando un ambiente cálido e inolvidable para compartir en familia.
          </p>
        </div>

        <div className="relative">
          <img
            src={img9}
            alt="Naturaleza y entorno en Sariri"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full rotate-[-2deg] rounded-sm border-8 border-card object-cover shadow-[var(--shadow-soft)] grayscale"
          />
          <img
            src={img7}
            alt="Instalaciones de Sariri"
            width={1200}
            height={800}
            loading="lazy"
            className="absolute -bottom-10 -left-4 w-1/2 rotate-[3deg] rounded-sm border-8 border-card object-cover shadow-[var(--shadow-soft)] grayscale"
          />
        </div>
      </div>

      <div className="relative mt-28 overflow-hidden rounded-sm">
        <img
          src={img2}
          alt="Interiores de Sariri"
          width={1200}
          height={800}
          loading="lazy"
          className="h-[380px] w-full object-cover"
        />
        <div className="absolute inset-y-6 right-6 hidden w-80 flex-col justify-center rounded-sm bg-forest-deep/90 p-8 text-center text-primary-foreground md:flex">
          <p className="font-display text-2xl">Nuestra misión</p>
          <Ornament />
          <p className="text-xs text-primary-foreground/85">
            Ser la vitrina del corredor turístico noroccidental de la ciudad de Loja y convertirnos en un referente de la gastronomía lojana, valorando siempre la naturaleza que nos rodea.
          </p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-y-8 rounded-sm bg-forest py-10 text-center text-primary-foreground md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l}>
            <p className="font-display text-4xl text-gold">{s.n}</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/80">
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
