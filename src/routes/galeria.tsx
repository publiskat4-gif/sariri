import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import img1 from "@/assets/sariri-img-1.jpg";
import img2 from "@/assets/sariri-img-2.jpg";
import img3 from "@/assets/sariri-img-3.jpg";
import img4 from "@/assets/sariri-img-4.jpg";
import img5 from "@/assets/sariri-img-5.jpg";
import img6 from "@/assets/sariri-img-6.jpg";
import img7 from "@/assets/sariri-img-7.jpg";
import img8 from "@/assets/sariri-img-8.jpg";
import img9 from "@/assets/sariri-img-9.jpg";
import img10 from "@/assets/sariri-img-10.jpg";
import gastro1 from "@/assets/sariri-img-gastro-1.jpg";
import gastro2 from "@/assets/sariri-img-gastro-2.jpg";
import galleryBus from "@/assets/sariri-img-gallery-bus.jpg";
import { SectionHeading } from "@/components/site/Ornament";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería | Sariri" },
      {
        name: "description",
        content:
          "Galería de fotos de nuestro restaurante, platos típicos lojanos, eventos y paisajes naturales en Sariri, Loja.",
      },
      { property: "og:title", content: "Galería | Sariri" },
      {
        property: "og:description",
        content: "Recorre en imágenes las instalaciones de Sariri, sus platos y sus eventos.",
      },
    ],
  }),
  component: Galeria,
});

const filtros = ["Todo", "Gastronomía", "Instalaciones", "Paisaje", "Videos"] as const;

const items = [
  { type: "image", src: img7, cat: "Instalaciones", alt: "Restaurante Sariri y entorno de montaña" },
  { type: "image", src: galleryBus, cat: "Instalaciones", alt: "El bus restaurante de Sariri" },
  { type: "image", src: gastro1, cat: "Gastronomía", alt: "Especialidad de la casa Sariri" },
  { type: "image", src: gastro2, cat: "Gastronomía", alt: "Plato tradicional lojano" },
  { type: "image", src: img2, cat: "Instalaciones", alt: "Interiores acogedores de Sariri" },
  { type: "image", src: img10, cat: "Instalaciones", alt: "Espacios campestres y familiares" },
  { type: "image", src: img1, cat: "Paisaje", alt: "Contacto con la naturaleza y animales" },
  { type: "image", src: img3, cat: "Paisaje", alt: "Atardeceres en la montaña" },
  { type: "image", src: img6, cat: "Instalaciones", alt: "Decoración romántica para momentos especiales" },
  { type: "image", src: img8, cat: "Instalaciones", alt: "Celebraciones familiares en nuestro comedor" },
  { type: "image", src: img4, cat: "Paisaje", alt: "Paisajes de montaña en Loja" },
  { type: "image", src: img5, cat: "Paisaje", alt: "Naturaleza y entorno natural" },
  { type: "image", src: img9, cat: "Paisaje", alt: "Atardeceres en Sariri" },
  { type: "video", src: "/sariri-video-1.mp4", cat: "Videos", alt: "Ambiente campestre Sariri" },
  { type: "video", src: "/sariri-video-2.mp4", cat: "Videos", alt: "Gastronomía en Sariri" },
  { type: "video", src: "/sariri-video-3.mp4", cat: "Videos", alt: "Paisajes de montaña" },
  { type: "video", src: "/sariri-video-4.mp4", cat: "Videos", alt: "Eventos especiales Sariri" },
  { type: "video", src: "/sariri-video-5.mp4", cat: "Videos", alt: "Experiencia en Sariri" },
];

function Galeria() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todo");
  const visibles = items.filter((f) => filtro === "Todo" || f.cat === filtro);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading title="Galería" />

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {filtros.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFiltro(f)}
            className={`rounded-sm border px-5 py-2 text-[0.65rem] uppercase tracking-[0.16em] transition-colors ${
              filtro === f
                ? "border-forest bg-forest text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-forest/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {visibles.map((f, i) => (
          <div key={i} className="group relative overflow-hidden rounded-sm bg-muted shadow-[var(--shadow-card)] aspect-[4/3]">
            {f.type === "video" ? (
              <video
                src={f.src}
                controls
                playsInline
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            ) : (
              <img
                src={f.src}
                alt={f.alt}
                width={1000}
                height={700}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
