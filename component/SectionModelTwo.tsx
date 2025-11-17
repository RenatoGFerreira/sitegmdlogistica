import React from "react";
import {
  CalendarDaysIcon,
  EyeIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { StaticImageData } from "next/image";

export interface componentStyle {
  what: string;
  title: string;
  text: string;
  image: string | StaticImageData;
}

const featuresList = [
  {
    name: "Controle Total da Agenda",
    description:
      "Gestão da agenda de entradas e saídas com agendamento validado, conferência de NF, alertas e relatórios.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Visibilidade em Tempo Real",
    description:
      "Reduza filas, gargalos e perdas operacionais com monitoramento e visibilidade completa da operação.",
    icon: EyeIcon,
  },
  {
    name: "Módulos Integrados",
    description:
      "Inclui os módulos Recebe, Expede, Críticos, Valida, Devoluções e Visibilidade & Gestão.",
    icon: CpuChipIcon,
  },
];

const PropostaButton = () => (
  <button
    className="
      flex items-center bg-secondary-blue hover:bg-secondary-blue/90 
      text-light-gray font-semibold py-3 px-6 rounded-lg 
      transition-colors duration-200
    "
  >
    <svg
      className="w-5 h-5 mr-2"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
    Conheça este sistema
  </button>
);

const SectionModelTwo: React.FC = () => {
  return (
    <section className="bg-dark-gray py-16 sm:py-24 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3),0_-25px_50px_-12px_rgba(0,0,0,0.3)] backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2 items-start">
          <div className="lg:order-first">
            <h2 className="text-base font-semibold leading-7 text-light-gray">
              SISTEMA DE GESTÃO
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-secondary-blue sm:text-4xl">
              GMD – SISTEMA DE GESTÃO LOGÍSTICA
            </p>
            <p className="mt-6 text-lg leading-8 text-light-gray">
              Gestão integrada de recebimentos, expedições e janelas logísticas.
              Suporta a operação diária e a decisão tática com dados confiáveis
              para sua empresa.
            </p>

            {/* --- WRAPPER DO BOTÃO MODIFICADO --- */}
            <div className="mt-6 lg:mt-10 hidden lg:flex justify-center lg:justify-start">
              <PropostaButton />
            </div>
          </div>

          <div className="lg:order-last">
            <dl className="flex flex-col gap-y-10">
              {featuresList.map((feature) => (
                <div
                  key={feature.name}
                  className="
                    relative 
                    border border-light-gray/10
                    bg-dark-gray      
                    p-8                
                    rounded-lg        
                    shadow-lg         
                    transition-all duration-300 ease-in-out 
                    hover:shadow-2xl hover:-translate-y-1    
                  "
                >
                  <dt className="text-lg font-semibold leading-7 text-secondary-blue pl-14">
                    <div
                      className="
                      absolute 
                      left-8 top-8  
                      flex h-10 w-10 items-center justify-center 
                      rounded-lg bg-secondary-blue
                    "
                    >
                      <feature.icon
                        className="h-6 w-6 text-light-gray"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-light-gray pl-14">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex justify-center lg:hidden">
            <PropostaButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionModelTwo;
