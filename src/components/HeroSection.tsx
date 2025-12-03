import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cat, Mail, SendHorizonal, ArrowRight, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Início", href: "#" },
  { name: "Artigos", href: "#" },
  { name: "Raças", href: "#" },
  { name: "Cuidados", href: "#" },
  { name: "Sobre", href: "#" },
];

const HeroSection = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-bg-new.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Smooth gradient overlay from left to right */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/60 to-transparent" />

      {/* Content wrapper - flex column to distribute space */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header */}
        <header className="flex-shrink-0">
          <nav
            data-state={menuState && "active"}
            className="group w-full border-b border-dashed border-white/10 bg-black/20 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-14 items-center justify-between sm:h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link to="/" aria-label="home" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-paw-orange to-paw-peach shadow-warm sm:h-9 sm:w-9 sm:rounded-xl">
                      <Cat className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-lg font-extrabold text-white sm:text-xl">Paw</span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:gap-6">
                  <ul className="flex items-center gap-6 text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="whitespace-nowrap text-white/70 duration-150 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                    <Button asChild variant="outline" size="sm" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                      <a href="#">Login</a>
                    </Button>
                    <Button asChild size="sm">
                      <a href="#">Inscreva-se</a>
                    </Button>
                  </div>
                </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Fechar Menu" : "Abrir Menu"}
                  className="relative z-20 block p-2 lg:hidden"
                >
                  <Menu className={`size-6 text-white transition-all duration-200 ${menuState ? 'rotate-180 scale-0 opacity-0' : ''}`} />
                  <X className={`absolute inset-0 m-auto size-6 text-white transition-all duration-200 ${menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`} />
                </button>
              </div>

              {/* Mobile Navigation */}
              {menuState && (
                <div className="border-t border-white/10 py-3 lg:hidden">
                  <ul className="space-y-3">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="block text-sm text-white/70 duration-150 hover:text-white"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                      <a href="#">Login</a>
                    </Button>
                    <Button asChild size="sm" className="flex-1">
                      <a href="#">Inscreva-se</a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>

        {/* Main Content - flex-1 to take remaining space, centered */}
        <main className="flex flex-1 items-center">
          <div className="w-full px-4 sm:px-6 lg:px-12">
            <div className="max-w-xl">
              {/* Badge */}
              <a
                href="#"
                className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 p-1 pr-2.5 backdrop-blur-sm sm:gap-2 sm:pr-3"
              >
                <span className="rounded-md bg-paw-orange px-1.5 py-0.5 text-[10px] font-semibold text-white sm:px-2 sm:py-1 sm:text-xs">
                  Novo
                </span>
                <span className="text-xs text-white/90 sm:text-sm">Guia completo de raças</span>
                <span className="hidden h-4 w-px bg-white/30 sm:block"></span>
                <ArrowRight className="hidden size-4 text-white/70 sm:block" />
              </a>

              {/* Heading */}
              <h1 className="mt-4 text-balance text-2xl font-bold text-white sm:mt-6 sm:text-3xl md:text-4xl lg:mt-8 lg:text-5xl">
                Tudo sobre{" "}
                <span className="bg-gradient-to-r from-paw-orange to-paw-peach bg-clip-text text-transparent">
                  gatos
                </span>{" "}
                em um só lugar
              </h1>

              {/* Description */}
              <p className="mt-3 text-sm text-white/80 sm:mt-4 sm:text-base lg:mt-6">
                Descubra dicas, histórias encantadoras e tudo que você precisa saber
                para cuidar do seu felino com muito amor e carinho.
              </p>

              {/* Email Form */}
              <form action="" className="mt-4 max-w-sm sm:mt-6 lg:mt-8">
                <div className="relative grid grid-cols-[1fr_auto] items-center rounded-xl border border-white/20 bg-white/10 pr-1 shadow backdrop-blur-sm has-[input:focus]:ring-2 has-[input:focus]:ring-paw-orange/30 sm:rounded-2xl">
                  <Mail className="pointer-events-none absolute inset-y-0 left-3 my-auto size-4 text-white/60 sm:left-4 sm:size-5" />

                  <input
                    placeholder="Seu melhor e-mail"
                    className="h-10 w-full bg-transparent pl-9 text-sm text-white placeholder:text-white/50 focus:outline-none sm:h-12 sm:pl-11 sm:text-base lg:h-14 lg:pl-12"
                    type="email"
                  />

                  <div>
                    <Button aria-label="submit" size="sm" className="h-8 rounded-lg px-3 sm:h-10 sm:rounded-xl sm:px-4 lg:h-12">
                      <span className="hidden text-sm md:block">Inscrever-se</span>
                      <SendHorizonal
                        className="relative mx-auto size-4 md:hidden"
                        strokeWidth={2}
                      />
                    </Button>
                  </div>
                </div>
              </form>

              {/* Stats */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/70 sm:mt-6 sm:gap-6 sm:text-sm lg:mt-8">
                <div>
                  <span className="font-bold text-white">500+</span> Artigos
                </div>
                <div>
                  <span className="font-bold text-white">100+</span> Raças
                </div>
                <div>
                  <span className="font-bold text-white">50k+</span> Leitores
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;
