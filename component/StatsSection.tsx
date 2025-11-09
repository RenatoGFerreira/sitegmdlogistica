"use client";
import React from "react";
import CountUp from "react-countup";

const statsData = [
  { id: 1, value: 25, prefix: "+", suffix: "", label: "Anos de Mercado" },
  { id: 2, value: 14, prefix: "-", suffix: "%", label: "de perdas logísticas" },
  { id: 3, value: 100, prefix: "+", suffix: "", label: "empresas utilizando nossos sistemas" },
  {
    id: 4,
    value: 10,
    prefix: "+",
    suffix: "mil",
    label: "usuários na plataforma",
  },
  { id: 5, value: 100, prefix: "+", suffix: "mil", label: "CT-es emitidos" },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-light-gray py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-3 lg:grid-cols-5">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center"
            >
              <span className="text-3xl font-bold text-primary-blue md:text-5xl">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={3}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyDelay={300}
                />
              </span>

              <p className="mt-2 text-sm font-medium text-dark-gray md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
