export function Ornament() {
  return (
    <div className="ornament my-4 text-gold">
      <span className="text-sm">&#10022;</span>
    </div>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h1 className="section-title text-4xl text-forest md:text-5xl">{title}</h1>
      <Ornament />
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
