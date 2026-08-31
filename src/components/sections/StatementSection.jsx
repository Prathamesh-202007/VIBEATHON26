import { statementLines } from "@/data/eventData";

export default function StatementSection() {
  return <section id="about" className="bg-section-fade px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-5xl text-center">
        {statementLines.map((line) => <h2
    key={line}
    className="reveal-up font-display text-[17vw] leading-[0.88] text-foreground md:text-8xl lg:text-9xl"
    data-reveal
  >
            {line}
          </h2>)}
      </div>
    </section>;
}
