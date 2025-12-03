import { Button } from "@/components/ui/button";
import { Cat, Heart, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-warm-brown">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster=""
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/95 via-warm-brown/70 to-warm-brown/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-warm-cream/20 bg-warm-cream/10 px-4 py-2 backdrop-blur-sm">
              <Cat className="h-4 w-4 text-paw-orange" />
              <span className="text-sm font-semibold text-warm-cream/90">
                O melhor conteúdo sobre gatos
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fade-up-delay-1 mb-6 text-5xl font-extrabold leading-tight text-warm-cream md:text-6xl lg:text-7xl">
              Bem-vindo ao{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-paw-orange to-paw-peach bg-clip-text text-transparent">
                  Paw
                </span>
                <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-paw-orange to-paw-peach opacity-60" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up-delay-2 mb-8 text-lg font-medium leading-relaxed text-warm-cream/80 md:text-xl">
              Descubra dicas, histórias encantadoras e tudo que você precisa
              saber para cuidar do seu felino com muito amor e carinho.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Blog
              </Button>
              <Button variant="heroOutline" size="xl">
                <Heart className="mr-2 h-5 w-5" />
                Sobre Nós
              </Button>
            </div>

            {/* Stats */}
            <div className="animate-fade-up-delay-3 mt-12 flex flex-wrap gap-8">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-paw-orange">500+</p>
                <p className="text-sm font-medium text-warm-cream/70">
                  Artigos
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-paw-orange">50k+</p>
                <p className="text-sm font-medium text-warm-cream/70">
                  Leitores
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-paw-orange">100+</p>
                <p className="text-sm font-medium text-warm-cream/70">
                  Raças Cobertas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-warm-cream/60">
            Scroll
          </span>
          <div className="h-12 w-6 rounded-full border-2 border-warm-cream/30 p-1">
            <div className="h-2 w-2 animate-pulse-slow rounded-full bg-paw-orange" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
