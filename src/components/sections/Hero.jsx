import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/vibeathon-hero.jpg";

function scrollToId(event, id) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}
export default function Hero() {
  return <section id="top" className="relative min-h-[102svh] overflow-hidden bg-cinematic">
      <img
    src={heroImage}
    alt="Student builders facing a violet portal at VIBEATHON 2026"
    width={1920}
    height={1080}
    className="absolute inset-0 h-full w-full scale-105 object-cover opacity-80"
  />
      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/5 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-transparent to-background/50" />

      <div className="relative z-10 mx-auto flex min-h-[102svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-28 md:px-8 md:pt-36">
        <div className="flex items-start justify-between gap-6">
          <p className="reveal-up text-xs font-extrabold uppercase tracking-[0.18em] text-foreground md:text-sm" data-reveal>
            ACPCE IT DEPT
          </p>
          <p className="reveal-up text-xs font-extrabold uppercase tracking-[0.18em] text-foreground md:text-sm" data-reveal>
            03 OCT 2026
          </p>
        </div>

        <div className="mt-10 text-center md:mt-14">
          <h1 className="font-display text-[19vw] leading-[0.8] text-foreground md:text-[15vw] lg:text-[13.5vw]">
            VIBEATHON26
          </h1>
          <p className="reveal-up mt-6 text-[0.7rem] font-extrabold uppercase tracking-[0.42em] text-muted-foreground md:text-sm" data-reveal>
            THINK. BUILD. EVOLVE.
          </p>
          <div className="reveal-up mt-10 flex justify-center" data-reveal>
            <Button asChild variant="cinematic" size="xl">
              <a href="https://unstop.com/o/dcjKCLm" onClick={(event) => scrollToId(event, "register")}>
                REGISTER NOW →
              </a>
            </Button>
          </div>
          <p className="reveal-up mt-10 text-xs font-extrabold uppercase tracking-[0.3em] text-foreground md:text-sm" data-reveal>
            08:00 AM – 08:00 PM
          </p>
        </div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-bold uppercase">Scroll</span>
        <ChevronDown className="size-5 animate-bounce" aria-hidden="true" />
      </div>
    </section>;
}
