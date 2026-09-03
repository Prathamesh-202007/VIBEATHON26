import { prizes } from "@/data/eventData";

export default function PrizesSection() {
  return (
    <section id="prizes" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="reveal-up" data-reveal>
            <p className="mb-4 text-sm font-extrabold uppercase text-violet">
              Prizes
            </p>

            <h2 className="font-display text-7xl leading-[0.9] md:text-9xl">
              Build for the podium.
            </h2>
          </div>

          <p
            className="reveal-up max-w-sm text-lg leading-8 text-muted-foreground"
            data-reveal
          >
            Compete, build, and earn your place at the top.
          </p>
        </div>

        {/* Two Prize Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {prizes.slice(0, 2).map((prize) => (
            <article
              key={prize.title}
              className="reveal-up group relative overflow-hidden rounded-lg border border-line bg-card p-8 transition-transform duration-500 hover:-translate-y-2"
              data-reveal
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-violet opacity-80" />

              <p className="font-display text-8xl leading-none text-smoke transition-colors group-hover:text-violet">
                {prize.code}
              </p>

              <h3 className="mt-16 font-display text-6xl leading-none">
                {prize.title}
              </h3>

              <p className="mt-5 text-lg font-bold text-muted-foreground">
                {prize.prize}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
