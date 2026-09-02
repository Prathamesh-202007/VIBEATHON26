import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, registrationUrl } from "@/data/eventData";
import vibeathonLogo from "@/assets/vibeathon-logo.png";

export default function Navbar({
  menuOpen,
  setMenuOpen,
  closeMenu,
}) {
  const handleNavClick = (href) => {
    closeMenu();

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 z-9999 w-[90%] max-w-6xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/80 px-5 py-3 shadow-2xl backdrop-blur-xl">

        {/* Logo */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex items-center"
          aria-label="Go to top"
        >
          <img
            src={vibeathonLogo}
            alt="VIBEATHON 2026"
            className="h-14 w-auto object-contain md:h-16"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Register Button */}
        <Button
          onClick={() => {
            if (registrationUrl && registrationUrl !== "#") {
              window.open(registrationUrl, "_blank");
            } else {
              document
                .querySelector("#register")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }
          }}
          className="hidden rounded-full bg-white px-5 text-black hover:bg-white/90 md:flex"
        >
          REGISTER NOW →
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-black/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="rounded-lg px-4 py-3 text-left text-white/80 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}

            <Button
              className="mt-2 w-full bg-white text-black"
              onClick={() => {
                closeMenu();

                if (registrationUrl && registrationUrl !== "#") {
                  window.open(registrationUrl, "_blank");
                } else {
                  document
                    .querySelector("#register")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }
              }}
            >
              REGISTER NOW →
            </Button>

          </div>
        </div>
      )}
    </nav>
  );
}
