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

import { phoneNumber, messageText } from "@/assets/objects";

const encodedMessage = encodeURIComponent(
  messageText || "Olá! Gostaria de mais informações sobre a GMD Logística."
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

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
            Plataforma GMD. Inteligência em toda a logística.{" "}
          </h1>
          <h1 className="mb-4 p-4 text-xl font-extrabold text-accent-yellow md:text-2xl lg:text-3xl">
            Sistema, gestão de transportes e fretes, fornecedores e BPO em um
            portfólio completo para estruturar sua operação com inteligência.
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
          src="/banner/banner1.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background de Logística"
          className="z-0"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 p-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Transporte, recebimento e expedição sob controle.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-light-gray">
            Gestão de agendas, conferência fiscal, transportadoras e prazos com
            dados confiáveis para decisões operacionais e visibilidade logística
            integrada.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-6 rounded-lg bg-secondary-blue px-5 py-3 font-medium text-light-gray hover:bg-secondary-blue/90"
          >
            Solicitar Demonstração
          </a>
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
          src="/banner/banner5.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background de Logística"
          className="z-0"
        />

        <div className="relative z-10 flex h-full w-full bg-white/50 flex-col items-center justify-center p-6 text-center text-dark-gray">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl text-dark-gray">
            Fornecedores críticos acompanhados de perto.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-gray">
            Serviço GMD para acompanhar prazos, capacidade e qualidade de
            fornecedores e prevenir falhas no fluxo produtivo.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-6 rounded-lg bg-dark-gray px-5 py-3 font-medium text-light-gray hover:bg-dark-blue/90"
          >
            Solicitar Demonstração
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    style: { backgroundColor: "#cecece" },
    content: (
      <div className="relative h-full w-full text-light-gray">
        <Image
          src="/banner/banner4.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background de Logística"
          className="z-0"
        />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 p-6 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Serviços e Operações realizados por especialistas.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-light-gray">
            GMD executa rotinas logísticas com equipe dedicada, organização por
            método e visibilidade por indicadores da própria operação.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-6 rounded-lg bg-secondary-blue px-5 py-3 font-medium text-light-gray hover:bg-secondary-blue/90"
          >
            Solicitar Demonstração
          </a>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    style: { backgroundColor: "#cecece" },
    content: (
      <div className="relative h-full w-full">
        <Image
          src="/banner/banner2.jpg"
          layout="fill"
          objectFit="cover"
          alt="Background de Logística"
          className="z-0"
        />

        <div className="relative z-10 flex h-full w-full bg-white/50 flex-col items-center justify-center p-6 text-center text-dark-gray">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl text-dark-gray">
            Sistemas que se adaptam à sua operação.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-dark-gray">
            Desenvolvemos soluções sistêmicas conforme sua necessidade, com foco
            em integração, fluxo real e visibilidade para a tomada de decisão.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            className="mt-6 rounded-lg bg-dark-gray px-5 py-3 font-medium text-light-gray hover:bg-dark-blue/90"
          >
            Solicitar Demonstração
          </a>
        </div>
      </div>
    ),
  },
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 20000, stopOnInteraction: true })
  );

  return (
    <div className="">
      <div className="h-21 bg-dark-blue top-0 left-0 w-full z-0"></div>
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
