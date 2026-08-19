import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { User, Users, CalendarDays, Clock, Phone, PartyPopper } from "lucide-react";
import { toast } from "sonner";
import mesa from "@/assets/mesa-reserva.jpg";
import { SectionHeading } from "@/components/site/Ornament";

export const Route = createFileRoute("/reservas")({
  head: () => ({
    meta: [
      { title: "Reserva tu Mesa | Sariri" },
      {
        name: "description",
        content:
          "Asegura tu lugar en Sariri. Reserva en línea o por WhatsApp con al menos 2 horas de anticipación.",
      },
      { property: "og:title", content: "Reserva tu Mesa | Sariri" },
      {
        property: "og:description",
        content: "Reserva en línea y vive una experiencia única en Loja.",
      },
    ],
  }),
  component: Reservas,
});

const inputClass =
  "w-full rounded-sm border border-border bg-card py-3 pl-10 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-forest";

function Reservas() {
  const [enviado, setEnviado] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("nombre");
    const personas = formData.get("personas");
    const fecha = formData.get("fecha");
    const hora = formData.get("hora");
    const telefono = formData.get("telefono");
    const tipo = formData.get("tipo");
    const observaciones = formData.get("observaciones");

    const mensaje = `Hola Sariri, me gustaría realizar una reserva:
- *Nombre*: ${nombre}
- *Personas*: ${personas}
- *Fecha*: ${fecha}
- *Hora*: ${hora}
- *Teléfono*: ${telefono}
- *Tipo de evento*: ${tipo || "No especificado"}
- *Observaciones*: ${observaciones || "Ninguna"}`;

    const url = `https://wa.me/593997194675?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");

    setEnviado(true);
    toast.success("¡Redirigiendo a WhatsApp para enviar tu reserva!");
    e.currentTarget.reset();
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        title="Reserva tu Mesa"
        subtitle="Asegura tu lugar para vivir una experiencia única"
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input required name="nombre" placeholder="Nombre completo" className={inputClass} />
          </div>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              required
              type="number"
              min={1}
              name="personas"
              placeholder="Número de personas"
              className={inputClass}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input required type="date" name="fecha" className={inputClass} />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input required type="time" name="hora" className={inputClass} />
            </div>
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input required name="telefono" placeholder="Teléfono" className={inputClass} />
          </div>
          <div className="relative">
            <PartyPopper className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <select name="tipo" defaultValue="" className={inputClass}>
              <option value="">Tipo de evento</option>
              <option>Almuerzo familiar</option>
              <option>Cena</option>
              <option>Cumpleaños</option>
              <option>Evento empresarial</option>
            </select>
          </div>
          <textarea
            name="observaciones"
            rows={3}
            placeholder="Observaciones (opcional)"
            className="w-full rounded-sm border border-border bg-card p-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-forest"
          />
          <button
            type="submit"
            className="w-full rounded-sm bg-forest py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-forest-deep"
          >
            Reservar ahora
          </button>
          {enviado ? (
            <p className="text-center text-xs text-forest">
              ¡Redirigiendo a WhatsApp! Completa el envío en el chat.
            </p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-3 rounded-sm border border-border bg-card p-4">
            <p className="flex-1 text-xs text-muted-foreground">
              ¿Prefieres reservar por WhatsApp directo?
            </p>
            <a
              href="https://wa.me/593997194675"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm bg-whatsapp px-4 py-2 text-[0.65rem] uppercase tracking-[0.14em] text-primary-foreground"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </form>

        <div className="space-y-5">
          <img
            src={mesa}
            alt="Mesa preparada con copas y flores"
            width={900}
            height={1100}
            loading="lazy"
            className="h-72 w-full rounded-sm object-cover shadow-[var(--shadow-card)]"
          />
          <div className="rounded-sm border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-forest">
              Información importante
            </p>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-gold">•</span> Las reservas deben realizarse con
                al menos 2 horas de anticipación.
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span> Para eventos especiales, cotiza con
                anticipación.
              </li>
              <li className="flex gap-2">
                <span className="text-gold">•</span> Te confirmaremos tu reserva por
                teléfono o WhatsApp.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
