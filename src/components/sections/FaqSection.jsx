import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/eventData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return <section id="faq" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal-up lg:sticky lg:top-32 lg:self-start" data-reveal>
          <p className="mb-4 text-sm font-extrabold uppercase text-violet">FAQ</p>
          <h2 className="font-display text-7xl leading-[0.9] md:text-9xl">Got questions?</h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq, index) => <div key={faq.question} className="reveal-up" data-reveal>
              <button
    type="button"
    className="flex w-full items-center justify-between gap-6 py-6 text-left"
    aria-expanded={openIndex === index}
    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
  >
                <span className="text-lg font-extrabold text-foreground md:text-xl">{faq.question}</span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-violet">
                  {openIndex === index ? <Minus className="size-4" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
                </span>
              </button>
              <div className={`grid transition-all duration-500 ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 text-base leading-8 text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}
