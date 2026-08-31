import { navItems } from "@/data/eventData";

export default function Footer() {
  return <footer className="border-t border-line px-5 py-12 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="font-display text-4xl">VIBEATHON 2026</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">THINK. BUILD. ADAPT.</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase text-violet">Quick links</p>
          <div className="grid gap-2">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>)}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase text-violet">Contact</p>
          <div className="grid gap-2 text-sm font-bold text-muted-foreground">
            <a href="mailto:prathameshnagare@acpce.ac.in" className="transition-colors hover:text-foreground">prathameshnagare@acpce.ac.in</a>
            <a href="mailto:yashpurohit@acpce.ac.in" className="transition-colors hover:text-foreground">yashpurohit@acpce.ac.in</a>
            <a href="mailto:riteshyeragi@acpce.ac.in" className="transition-colors hover:text-foreground">riteshyeragi@acpce.ac.in</a>
            <span>College / Department Placeholder</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-line pt-6 text-xs font-bold uppercase text-muted-foreground md:flex-row md:items-center md:justify-between">
        <span>© 2026 VIBEATHON. All Rights Reserved.</span>
        <span>Offline • 10 October 2026</span>
      </div>
    </footer>;
}
