import { journey } from "@/data/eventData";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div data-reveal className="reveal-up">
            <p className="mb-4 text-sm font-extrabold uppercase text-violet">
              How VIBEATHON works
            </p>
            <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
              The event journey
            </h2>
          </div>

          <p
            className="reveal-up max-w-2xl text-lg leading-8 text-muted-foreground md:ml-auto"
            data-reveal
          >
            Three rounds from idea submission to the offline grand finale,
            designed to discover teams that can think, present, build, and
            adapt.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-line md:block" />

          {journey.map((step) => (
            <article
              key={step.number}
              className="reveal-up grid gap-5 border-t border-line py-10 md:grid-cols-[8rem_minmax(0,1fr)_26rem] md:gap-10 md:py-14"
              data-reveal
            >
              <div className="font-display text-5xl text-violet md:text-6xl">
                {step.number}
              </div>

              <h3 className="font-display text-5xl leading-none md:text-7xl">
                {step.title}
              </h3>

              <p className="self-center text-base leading-8 text-muted-foreground md:text-lg">
                {step.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}