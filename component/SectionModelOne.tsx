import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { motion, Variants } from "framer-motion";



const features = [
  {
    name: "Atuação em Cenários Críticos",
    description: "Indicada para cenários com risco de ruptura produtiva.",
  },
  {
    name: "Aplicações Estratégicas",
    description:
      "Aplicável a operações Just-in-Time, gestão de riscos e fornecedores críticos.",
  },
  {
    name: "Entregáveis e Resultados",
    description:
      "Gera plano de ação, checkpoints e relatórios para estabilizar entregas e assegurar fluxo contínuo de materiais.",
  },
];

const gridContainerVariants: Variants = { 
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = { 
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SectionModelOne: React.FC = () => {
  return (
    <section className="bg-light-gray py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-base font-semibold leading-7 text-dark-gray">
              SISTEMA DE MONITORAMENTO
            </h2>
          <h2 className="text-3xl font-bold tracking-tight text-primary-blue sm:text-4xl">
            GMD READINESS
          </h2>
          <p className="mt-4 text-xl text-dark-gray">
            Acompanhamento logístico e técnico em fornecedores e
            subfornecedores.
          </p>
          <p className="mt-4 text-lg leading-8 text-dark-gray">
            Nossa equipe especializada monitora prazos, capacidade e informação,
            atuando também em questões de qualidade quando necessário.
          </p>
        </div>
        <div className="mt-16 max-w-none">
          <motion.dl
            className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col bg-light-gray p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1"
                variants={cardVariants}
              >
                <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-dark-gray">
                  <CheckCircleIcon
                    className="h-6 w-6 flex-none text-primary-blue"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2 flex-auto text-base leading-7 text-dark-gray">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default SectionModelOne;
