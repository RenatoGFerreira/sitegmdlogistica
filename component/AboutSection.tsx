import React from "react";

export default function AboutSection() {
  return (
    <section 
      className="w-full bg-dark-gray py-16 md:py-24 shadow-xl"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base font-semibold leading-7 text-light-gray">
            QUEM SOMOS
          </p>

          <h2 className="uppercase mt-2 text-4xl font-bold tracking-tight text-secondary-blue lg:text-5xl">
            GMD LOGÍSTICA
          </h2>

          <p className="mt-6 text-xl italic leading-8 text-light-gray">
            "GMD Logística oferece soluções integradas para toda a cadeia.
            Tecnologia, auditoria de fretes, acompanhamento em fornecedores e
            BPO dedicado — tudo para estruturar, automatizar e controlar sua
            operação com inteligência. Eficiência e execução, lado a lado."
          </p>
        </div>
      </div>
    </section>
  );
}