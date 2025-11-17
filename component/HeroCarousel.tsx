import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const slidesData = [
  {
    id: 1,
    style: {
      backgroundImage:
        "linear-gradient(rgba(26,59,122,0.5), rgba(26,59,122,0.9)), url('/background.png')",
    },
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-light-gray md:flex-row md:justify-around md:items-center">
        <div className="max-w-90 md:max-w-120 lg:max-w-full">
          <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
            SISTEMAS LOGÍSTICOS QUE ORGANIZAM, CONTROLAM E ENTREGAM{" "}
          </h1>
          <h1 className="mb-4 text-xl font-extrabold text-accent-yellow md:text-2xl lg:text-4xl">
            SOLUÇÕES EM TMS • COMPLIANCE • RASTREAMENTO
          </h1>
        </div>
        <Image
          src="/people5.png"
          width={1000}
          height={1000}
          alt="Sistema para Gestão Logística"
          className="hidden mt-4 w-1/8 md:self-end lg:block lg:w-1/5  lg:self-end "
        />
      </div>
    ),
  },
  {
    id: 2,
    style: { backgroundColor: "#cecece" },
    content: (
      <div className="relative h-full w-full text-light-gray">
        <Image
          src="/logistica-banner1.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background de Logística"
          className="z-0"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 p-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Sua operação logística, 100% sob controle.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-light-gray">
            Plataforma completa para gestão de frotas, otimização de rotas e
            rastreamento em tempo real.
          </p>
          <button className="mt-6 rounded-lg bg-secondary-blue px-5 py-3 font-medium text-light-gray hover:bg-secondary-blue/90">
            Solicitar Demonstração
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    style: { backgroundColor: "#cecece" },
    content: (
      <div className="relative h-full w-full">
        <Image
          src="/logistica-banner2.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background de Logística"
          className="z-0"
        />

        <div className="relative z-10 flex h-full w-full bg-white/50 flex-col items-center justify-center p-6 text-center text-dark-gray">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl text-dark-gray">
            Fale com Nossos Consultores
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-gray">
            Agende uma conversa pelo whatsapp e veja como podemos reduzir seus
            custos.
          </p>
          <button className="mt-6 rounded-lg bg-dark-gray px-5 py-3 font-medium text-light-gray hover:bg-dark-blue/90">
            Solicitar Demonstração
          </button>
        </div>
      </div>
    ),
  },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 60000, stopOnInteraction: true })
  );

  return (
    <div className="">
      <div className="h-21 bg-dark-blue top-0 left-0 w-full z-0">
      </div>
      <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {slidesData.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="h-[70vh] w-full" style={slide.style}>
              {slide.content}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-4" />
    </Carousel>
    </div>
  );
}
