import { useState } from "react";
import { Cat, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Artigos", href: "#" },
    { name: "Raças", href: "#" },
    { name: "Cuidados", href: "#" },
    { name: "Sobre", href: "#" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-warm-cream/10 bg-warm-brown/20 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-paw-orange to-paw-peach shadow-warm">
              <Cat className="h-6 w-6 text-warm-cream" />
            </div>
            <span className="text-2xl font-extrabold text-warm-cream">
              Paw
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-warm-cream/70 transition-colors hover:text-warm-cream"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default">
              Inscreva-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-warm-cream" />
            ) : (
              <Menu className="h-6 w-6 text-warm-cream" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-warm-cream/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-warm-cream/70 transition-colors hover:text-warm-cream"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="default" className="mt-2">
                Inscreva-se
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
