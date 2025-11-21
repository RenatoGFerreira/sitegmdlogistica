import React from "react";
import Image from "next/image";
import { PropostaButton } from "@/assets/objects";
import { componentStyle } from "@/assets/interfaces";

export default function SistemsModelTwo({
  what,
  title,
  text,
  image,
  number,
  encodedMessage,
  isWhatsappLink,
  alternateHref,
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
                    p-2 md:p-12 lg:p-16 
                    max-w-lg md:max-w-xl mx-auto md:mx-0 
                    
                    col-start-1 row-start-1 z-20  
                    items-center text-center    
                    md:items-start md:text-left  
                  "
          >
            <h2 className="text-base font-semibold leading-7 text-light-gray ">
              {what}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight uppercase text-secondary-blue sm:text-4xl">
              {title}
            </p>
            <p className="mt-6 text-lg leading-8 text-light-gray">{text}</p>
            <div className="mt-6 lg:mt-10 lg:flex justify-center lg:justify-start">
              <PropostaButton
                text={"Saiba mais"}
                number={number}
                encodedMessage={encodedMessage}
                isWhatsappLink={isWhatsappLink}
                alternateHref={alternateHref}
              />
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
