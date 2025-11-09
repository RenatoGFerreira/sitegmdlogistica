import React from "react";

export const SolutionsIntro: React.FC = () => {
  return (
    <section className="bg-light-gray py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
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
    </section>
  );
};
