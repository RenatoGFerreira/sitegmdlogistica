import React from "react";

export const SolutionsIntro: React.FC = () => {
  return (
    <section id="sistems" className="bg-light-gray relative ">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <p className="text-base font-semibold leading-7 text-secondary-blue">
            SOLUÇÕES COMPLETAS
          </p>
          <h2 className="uppercase mt-2 text-4xl font-bold tracking-tight text-primary-blue lg:text-5xl">
            Conheça nossas principais soluções para sua empresa de logística
          </h2>
          <p className="mt-6 text-lg leading-8 text-dark-gray">
            Tecnologia de ponta para otimizar cada etapa da sua operação, do TMS
            ao Compliance e Rastreamento em tempo real.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 max-w-lg mx-auto">
        
        {/* <svg
          className="w-full" 
          height="1px" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="2" 
            x2="100%"
            y2="2" 
            strokeDasharray="12 5"
            className="stroke-secondary-blue" 
            strokeWidth="4" 
          />
        </svg> */}
      </div>
    </section>
  );
};
