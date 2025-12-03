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
    <div className="relative min-h-screen w-full overflow-hidden">
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

      <header className="relative z-20">
        <nav
          data-state={menuState && "active"}
          className="group w-full border-b border-dashed border-white/10 bg-black/20 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" aria-label="home" className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-paw-orange to-paw-peach shadow-warm">
                    <Cat className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-extrabold text-white">Paw</span>
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
              <div className="border-t border-white/10 py-4 lg:hidden">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="block text-white/70 duration-150 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-col gap-2">
                  <Button asChild variant="outline" size="sm" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                    <a href="#">Login</a>
                  </Button>
                  <Button asChild size="sm">
                    <a href="#">Inscreva-se</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="overflow-hidden">
          <div className="relative px-6 py-28 lg:px-12 lg:py-32">
            <div className="max-w-xl">
              <div className="relative z-10 text-left">
                <a
                  href="#"
                  className="flex w-fit items-center gap-2 rounded-lg border border-white/20 bg-white/10 p-1 pr-3 backdrop-blur-sm"
                >
                  <span className="rounded-md bg-paw-orange px-2 py-1 text-xs font-semibold text-white">
                    Novo
                  </span>
                  <span className="text-sm text-white/90">Guia completo de raças</span>
                  <span className="block h-4 w-px bg-white/30"></span>
                  <ArrowRight className="size-4 text-white/70" />
                </a>

                <h1 className="mt-10 text-balance text-4xl font-bold text-white md:text-5xl xl:text-5xl">
                  Tudo sobre{" "}
                  <span className="bg-gradient-to-r from-paw-orange to-paw-peach bg-clip-text text-transparent">
                    gatos
                  </span>{" "}
                  em um só lugar
                </h1>
                <p className="mt-8 text-white/80">
                  Descubra dicas, histórias encantadoras e tudo que você precisa saber
                  para cuidar do seu felino com muito amor e carinho.
                </p>

                <div>
                  <form action="" className="my-10 max-w-sm lg:my-12">
                    <div className="relative grid grid-cols-[1fr_auto] items-center rounded-2xl border border-white/20 bg-white/10 pr-1 shadow backdrop-blur-sm has-[input:focus]:ring-2 has-[input:focus]:ring-paw-orange/30">
                      <Mail className="pointer-events-none absolute inset-y-0 left-5 my-auto size-5 text-white/60" />

                      <input
                        placeholder="Seu melhor e-mail"
                        className="h-14 w-full bg-transparent pl-12 text-white placeholder:text-white/50 focus:outline-none"
                        type="email"
                      />

                      <div className="md:pr-1.5 lg:pr-0">
                        <Button aria-label="submit" className="rounded-xl">
                          <span className="hidden md:block">Inscrever-se</span>
                          <SendHorizonal
                            className="relative mx-auto size-5 md:hidden"
                            strokeWidth={2}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>

                  <ul className="list-inside list-disc space-y-2 text-white/70">
                    <li>
                      <span className="font-medium text-white">500+</span> Artigos exclusivos
                    </li>
                    <li>
                      <span className="font-medium text-white">100+</span> Raças catalogadas
                    </li>
                    <li>
                      <span className="font-medium text-white">50k+</span> Leitores mensais
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HeroSection;
