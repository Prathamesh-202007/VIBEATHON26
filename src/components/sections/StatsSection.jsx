import { stats } from "@/data/eventData";

export default function StatsSection() {
  return <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {stats.map((stat) => <div key={stat.label} className="reveal-up border-t border-line pt-5" data-reveal>
            <p className="font-display text-6xl leading-none text-foreground md:text-7xl lg:text-8xl">{stat.value}</p>
            <p className="mt-3 text-xs font-extrabold uppercase leading-5 text-muted-foreground md:text-sm">{stat.label}</p>
          </div>)}
      </div>
    </section>;
}
