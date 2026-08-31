import auditoriumImage from "@/assets/vibeathon-auditorium.jpg";

export default function AboutSection() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <img
        src={auditoriumImage}
        alt="Dark auditorium filled with participants during a VIBEATHON stage briefing"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-linear-to-b from-background via-background/35 to-background" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
        <div className="reveal-up" data-reveal>
          <p className="mb-5 text-sm font-extrabold uppercase text-violet">
            About the hackathon
          </p>

          <h2 className="font-display text-6xl leading-[0.9] md:text-8xl lg:text-9xl">
            From ideas to the final challenge.
          </h2>
        </div>

        <div
          className="reveal-up max-w-xl text-lg leading-9 text-foreground md:ml-auto"
          data-reveal
        >
          <p>
            VIBEATHON is a multi-round innovation hackathon where teams begin
            by submitting their project ideas and then present them before a
            panel of judges online.
          </p>

          <p className="mt-7 text-muted-foreground">
            The strongest teams from the online presentation round advance to
            the offline Grand Finale, where they face a challenge from the
            judges and must think, build, and adapt under real constraints.
          </p>
        </div>
      </div>
    </section>
  );
}