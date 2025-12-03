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
    <>
      <header>
        <nav
          data-state={menuState && "active"}
          className="group fixed z-20 w-full border-b border-dashed border-border bg-background/50 backdrop-blur-xl md:relative"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link to="/" aria-label="home" className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-paw-orange to-paw-peach shadow-warm">
                    <Cat className="h-6 w-6 text-background" />
                  </div>
                  <span className="text-2xl font-extrabold text-foreground">Paw</span>
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Fechar Menu" : "Abrir Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu className="m-auto size-6 text-foreground duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
                  <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 text-foreground opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
                </button>
              </div>

              <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-foreground/10 group-data-[state=active]:block md:flex-nowrap lg:group-data-[state=active]:flex lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="block text-muted-foreground duration-150 hover:text-foreground"
                        >
                          <span>{item.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:border-border lg:pl-6">
                  <Button asChild variant="outline" size="sm">
                    <a href="#">
                      <span>Login</span>
                    </a>
                  </Button>

                  <Button asChild size="sm">
                    <a href="#">
                      <span>Inscreva-se</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
            <div className="lg:flex lg:items-center lg:gap-12">
              <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <a
                  href="#"
                  className="mx-auto flex w-fit items-center gap-2 rounded-lg border border-border p-1 pr-3 lg:ml-0"
                >
                  <span className="rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                    Novo
                  </span>
                  <span className="text-sm text-foreground">Guia completo de raças</span>
                  <span className="block h-4 w-px bg-border"></span>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </a>

                <h1 className="mt-10 text-balance text-4xl font-bold text-foreground md:text-5xl xl:text-5xl">
                  Tudo sobre{" "}
                  <span className="bg-gradient-to-r from-paw-orange to-paw-peach bg-clip-text text-transparent">
                    gatos
                  </span>{" "}
                  em um só lugar
                </h1>
                <p className="mt-8 text-muted-foreground">
                  Descubra dicas, histórias encantadoras e tudo que você precisa saber
                  para cuidar do seu felino com muito amor e carinho.
                </p>

                <div>
                  <form action="" className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                    <div className="relative grid grid-cols-[1fr_auto] items-center rounded-2xl border border-border bg-background pr-1 shadow shadow-foreground/5 has-[input:focus]:ring-2 has-[input:focus]:ring-primary/20">
                      <Mail className="pointer-events-none absolute inset-y-0 left-5 my-auto size-5 text-muted-foreground" />

                      <input
                        placeholder="Seu melhor e-mail"
                        className="h-14 w-full bg-transparent pl-12 text-foreground placeholder:text-muted-foreground focus:outline-none"
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

                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      <span className="text-foreground font-medium">500+</span> Artigos exclusivos
                    </li>
                    <li>
                      <span className="text-foreground font-medium">100+</span> Raças catalogadas
                    </li>
                    <li>
                      <span className="text-foreground font-medium">50k+</span> Leitores mensais
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
              <div aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-r from-background from-35%" />
              <div className="relative">
                <img
                  className="hidden dark:block"
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80"
                  alt="Gato laranja olhando para câmera"
                  width={2796}
                  height={2008}
                />
                <img
                  className="dark:hidden"
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80"
                  alt="Gato laranja olhando para câmera"
                  width={2796}
                  height={2008}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
