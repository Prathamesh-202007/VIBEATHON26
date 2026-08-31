import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return <section id="register" className="relative overflow-hidden px-5 py-28 md:px-8 md:py-40">
      <div className="absolute inset-0 bg-section-fade" />
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="reveal-up mb-5 text-sm font-extrabold uppercase text-violet" data-reveal>
          Registration Fee: ₹500 per team
        </p>
        <h2 className="reveal-up font-display text-[18vw] leading-[0.82] md:text-[9rem] lg:text-[13rem]" data-reveal>
          READY TO
          <br />
          CATCH THE VIBE?
        </h2>
        <p className="reveal-up mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground" data-reveal>
          Bring your team, prove your idea, and step into a live challenge where adaptability becomes the advantage.
        </p>
        <Button asChild variant="cinematic" size="xl" className="reveal-up mt-10" data-reveal>
          <a href="https://example.com/register" target="_blank" rel="noreferrer">
            REGISTER YOUR TEAM →
          </a>
        </Button>
      </div>
    </section>;
}
