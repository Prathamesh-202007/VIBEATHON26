import { roundOne, roundTwo, roundThree } from "@/data/eventData";

export default function TimelineSection() {
  return (
    <section id="timeline" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center" data-reveal>
          <p className="mb-4 text-sm font-extrabold uppercase text-violet">
            Event timeline
          </p>

          <h2 className="font-display text-6xl leading-[0.9] md:text-8xl">
            Three rounds. One grand finale.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* ROUND 1 */}
          <div
            className="reveal-up rounded-lg border border-line bg-panel-texture p-7 md:p-9"
            data-reveal
          >
            <p className="font-display text-5xl">ROUND 1</p>

            <p className="mt-4 text-sm font-extrabold uppercase text-violet">
              PPT SUBMISSION
            </p>

            <div className="mt-8 space-y-4">
              {roundOne.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-xs font-extrabold text-violet">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-lg font-bold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROUND 2 */}
          <div
            className="reveal-up rounded-lg border border-line bg-card p-7 md:p-9"
            data-reveal
          >
            <p className="font-display text-5xl">ROUND 2</p>

            <p className="mt-4 text-sm font-extrabold uppercase text-violet">
              ONLINE PRESENTATION
            </p>

            <p className="mt-5 text-sm font-bold text-muted-foreground">
              26 SEPTEMBER 2026 • TENTATIVE
            </p>

            <div className="mt-8 space-y-4">
              {roundTwo.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-xs font-extrabold text-violet">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-lg font-bold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ROUND 3 */}
          <div
            className="reveal-up rounded-lg border border-line bg-panel-texture p-7 md:p-9"
            data-reveal
          >
            <p className="font-display text-5xl">ROUND 3</p>

            <p className="mt-4 text-sm font-extrabold uppercase text-violet">
              GRAND FINALE • OFFLINE
            </p>

            <p className="mt-5 text-sm font-bold text-muted-foreground">
              10 OCTOBER 2026
            </p>

            <div className="mt-8 space-y-4">
              {roundThree.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-xs font-extrabold text-violet">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-lg font-bold text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}