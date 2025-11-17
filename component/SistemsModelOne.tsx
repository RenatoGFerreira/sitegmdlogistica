import Image, { StaticImageData } from "next/image";
import { PropostaButton } from "@/assets/objects";
import React from "react";

export interface componentStyle {
  what: string;
  title: string;
  text: string;
  image: string | StaticImageData;
}

// const PropostaButton = () => (
//   <button
//     className="
//         flex items-center bg-secondary-blue hover:bg-secondary-blue/90 
//         text-light-gray font-semibold py-3 px-6 rounded-lg 
//         transition-colors duration-200
//       "
//   >
//     <svg
//       className="w-5 h-5 mr-2"
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fillRule="evenodd"
//         d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//         clipRule="evenodd"
//       ></path>
//       <path
//         fillRule="evenodd"
//         d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//         clipRule="evenodd"
//       ></path>
//     </svg>
//     Conheça este sistema
//   </button>
// );


// const PropostaButton = () => (
//   <a
//     href="https://wa.me/5531999999999" 
    
//     target="_blank"
    
//     rel="noopener noreferrer"
    
//     className="
//         flex items-center bg-secondary-blue hover:bg-secondary-blue/90 
//         text-light-gray font-semibold py-3 px-6 rounded-lg 
//         transition-colors duration-200
//       "
//   >
//     <svg
//       className="w-5 h-5 mr-2"
//       fill="currentColor"
//       viewBox="0 0 20 20"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fillRule="evenodd"
//         d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//         clipRule="evenodd"
//       ></path>
//       <path
//         fillRule="evenodd"
//         d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//         clipRule="evenodd"
//       ></path>
//     </svg>
//     Conheça este sistema
//   </a>
// );

export default function SistemsModelTwo({
  what,
  title,
  text,
  image,
}: componentStyle) {
  return (
    <section
      className="
          relative w-full overflow-hidden border border-light-gray 
        "
    >
      <div
        className="
            relative mx-auto max-w-full 
            hover:scale-[1.02] transition-transform duration-300 
          "
      >
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
            <h2 className="text-base font-semibold leading-7 text-light-gray">
              {what}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight uppercase text-secondary-blue sm:text-4xl">
              {title}
            </p>
            <p className="mt-6 text-lg leading-8 text-light-gray">{text}</p>
            <div className="mt-6 lg:mt-10 lg:flex justify-center lg:justify-start">
              <PropostaButton text={"Saiba mais"} />
            </div>
          </div>

          <div
            className="
                    relative flex-1 min-h-[250px] md:min-h-auto 
                    col-start-1 row-start-1 z-10"
          >
            <Image
              src={image}
              alt="mulher com tablet da gmd"
              fill
              quality={80}
              className="z-0 object-bottom object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
