import React from "react";
import Image from "next/image";

export const CallToActionSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-full ">
        <div className="relative z-20 grid min-h-[400px] bg-dark-gray text-light-gray md:flex md:flex-row">
          <div
            className="
          flex-1 flex flex-col justify-center 
          p- md:p-12 lg:p-16 
          max-w-lg md:max-w-xl mx-auto md:mx-0 
          
          col-start-1 row-start-1 z-20  
          items-center text-center    
          md:items-start md:text-left  
        "
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
              Otimizar o gerenciamento da sua transportadora agora?
            </h2>
            <button className="flex items-center bg-secondary-blue hover:bg-secondary-blue/90 text-light-gray font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
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
              Solicite uma proposta
            </button>
          </div>

          <div
            className="
          relative flex-1 min-h-[250px] md:min-h-auto 
          col-start-1 row-start-1 z-10"
          >
            <Image
              src="/modelo-action.jpg"
              alt="mulher com tablet da gmd"
              layout="fill"
              objectFit="cover"
              quality={80}
              className="z-0 object-bottom"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
