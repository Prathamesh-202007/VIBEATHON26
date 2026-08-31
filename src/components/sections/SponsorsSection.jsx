import { Button } from "@/components/ui/button";

export default function SponsorsSection() {
  return <section id="sponsors" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-end">
          <div className="reveal-up" data-reveal>
            <p className="mb-4 text-sm font-extrabold uppercase text-violet">Sponsors</p>
            <h2 className="font-display text-7xl leading-[0.9] md:text-9xl">
              POWERING THE NEXT
              <br />
              GENERATION OF BUILDERS.
            </h2>
          </div>
          <div className="reveal-up" data-reveal>
            <p className="text-lg leading-8 text-muted-foreground">
              Partner with VIBEATHON and support the next generation of innovators, builders, and problem solvers.
            </p>
            <Button asChild variant="glass" size="xl" className="mt-7">
              <a href="mailto:prathameshnagare@acpce.ac.in">BECOME A SPONSOR →</a>
            </Button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-lg border border-line md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => <div key={index} className="reveal-up flex min-h-32 items-center justify-center border-b border-r border-line p-6 last:border-r-0 md:min-h-40" data-reveal>
              <p className="text-center text-xs font-extrabold uppercase text-muted-foreground">YOUR BRAND HERE</p>
            </div>)}
        </div>
      </div>
    </section>;
}
