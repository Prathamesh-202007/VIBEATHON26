import { Button } from "@/components/ui/button";
import { mapsLink } from "@/data/eventData";

export default function VenueSection() {
  return <section id="venue" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="reveal-up" data-reveal>
          <p className="mb-4 text-sm font-extrabold uppercase text-violet">Venue</p>
          <h2 className="font-display text-6xl leading-[0.9] md:text-9xl">WHERE THE VIBE HAPPENS.</h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="reveal-up" data-reveal>
            <p className="font-display text-4xl md:text-5xl">VIBEATHON 2026</p>
            <p className="mt-6 text-lg font-bold text-foreground">📍 A. C. Patil College of Engineering</p>
            <p className="mt-2 text-base leading-8 text-muted-foreground">
              Kharghar, Navi Mumbai, Maharashtra, India
            </p>
            <div className="mt-8 space-y-1">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-foreground">03 OCTOBER 2026</p>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-muted-foreground">08:00 AM – 08:00 PM</p>
            </div>
            <Button asChild variant="glass" size="xl" className="mt-9">
              <a href={mapsLink} target="_blank" rel="noreferrer noopener">
                GET DIRECTIONS →
              </a>
            </Button>
          </div>

          <div className="reveal-up overflow-hidden rounded-lg border border-line" data-reveal>
            <iframe
    title="Map showing A. C. Patil College of Engineering, Kharghar"
    src="https://www.google.com/maps?q=A.+C.+Patil+College+of+Engineering,+Kharghar,+Navi+Mumbai&z=15&output=embed"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="h-72 w-full border-0 grayscale-35 contrast-[1.08] md:h-96"
  />
          </div>
        </div>
      </div>
    </section>;
}
