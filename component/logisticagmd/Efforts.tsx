import { useRevealOnScroll } from "@/hooks/useRevealOnScrool";
import { MonitorCog, Truck, FileX2 } from 'lucide-react';
import {BenefitCard } from "@/assets/objects";

export default function Efforts() {
  const { ref, visible } = useRevealOnScroll();

  return (
    <section
      id="efforts"
      ref={ref}
      className="py-20 bg-dark-gray text-light-gray rounded-lg shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3),0_-25px_50px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="md:col-span-2">
          <h2
            ref={ref}
            className={`text-3xl font-bold mb-2 text-secondary-blue text-center md:text-start ${
              visible
                ? "opacity-100 translate-y-0 animate-fade-in-down"
                : "invisible opacity-0 translate-y-8"
            }`}
          >
            CHEGA DE CONTORNAR OS MESMOS PROBLEMAS TODOS OS DIAS.
          </h2>
          <h3
            ref={ref}
            className={`text-xl text-left text-light-gray  mb-12 ${
              visible
                ? "opacity-100 translate-y-0 animate-show-in"
                : "opacity-0 translate-y-8"
            }`}
          >
            A GMD nasceu da vivência em chão de fábrica. O sistema resolve as
            dores que mais comprometem o seu resultado — de forma prática,
            integrada e rastreável.
          </h3>
          <div className="mx-auto">
            <div className="text-center mb-12 ">
              <h2 className="text-3xl font-bold text-secondary-blue text-center md:text-start ">
                POR QUE GMD LOGÍSTICA?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-dark-gray">
              <BenefitCard
                icon={
                  <FileX2 />
                }
                title="Divergência entre nota e pedido?"
                description="Sua carga não fica na doca sem bater com o pedido, o sistema da GMD Logísitca bloqueia na entrada — e não deixa o problema virar retrabalho lá na frente."
              />

              <BenefitCard
                icon={
                  <Truck />
                }
                title="Fila de caminhões na portaria?"
                description="A GMD Logística organiza a fila com base na sua capacidade real de recebimento e evita congestionamento logístico."
              />

              <BenefitCard
                icon={
                  <MonitorCog />
                }
                title="Falta de controle do que está parado?"
                description="Você sabe exatamente quanto tempo o caminhão está parado e qual a doca e qual transportadora. A GMD Logísitca mostra tudo, em tempo real."
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className={`mt-10 container mx-auto px-2 py-8 sm:px-4 lg:px-6 ${
          visible
            ? "opacity-100 translate-y-0 animate-show-in"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <h3 className="text-3xl font-bold text-secondary-blue">
            TRANSFORME DOR EM DADO E DADO EM DECISÃO
          </h3>

          <a
            href="#contact"
            className="
      group
      relative
      inline-flex
      items-center
      justify-center
      overflow-hidden
      rounded-2xl
      bg-accent-yellow
      px-8
      py-3
      text-lg
      font-bold
      text-dark-gray
      transition-transform
      duration-300
      hover:scale-105
      focus:outline-none
      focus:ring-2
      focus:ring-accent-yellow
      focus:ring-offset-2
    "
          >
            <span
              className="
        relative
        flex
        items-center
        gap-2
        whitespace-nowrap
        after:absolute
        after:bottom-[-1px]
        after:left-0
        after:h-[2px]
        after:w-0
        after:bg-dark-gray/30
        after:transition-all
        after:duration-300
        after:ease-out
        group-hover:after:w-full
      "
            >
              Ver como funciona
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </a>
        </div>
        <div className="w-full h-px bg-light-gray my-4"></div>
      </div>
    </section>
  );
}
