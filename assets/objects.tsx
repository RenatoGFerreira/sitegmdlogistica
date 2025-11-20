"use client";
import { useState } from "react";
import agendaValida from "../assets/images/description/agenda_valida.png";
import recebeValida from "../assets/images/description/recebe_valida.png";
import visibilidadeGestao from "../assets/images/description/visibilidade.png";
import criticos from "../assets/images/description/criticos.png";
import devolucoeslogisticas from "../assets/images/description/devolucoes.png";
import expede from "../assets/images/description/expede.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  BenefitCardProps,
  FaqItemProps,
  GalleryItemProps,
  NavLinkProps,
  AdvCardProps,
  Propose,
} from "@/assets/interfaces";

// CONFIGURAÇÕES DO WHATSAPP
export const phoneNumber = "5531984378974";
export const messageText =
  "Olá! Gostaria de mais informações sobre a GMD Logística.";

export const AdvCard: React.FC<AdvCardProps> = ({
  icon,
  title,
  text,
  link,
}) => {
  return (
    <div
      className="
        min-h-80
        flex flex-col   
        gap-2.5                
        border border-primary-blue/30 
        bg-light-gray
        p-4                    
        rounded-lg             
        max-w-[320px]      
        m-2                 
        transition-all         
        duration-300           
        ease-in                
        hover:scale-105        
        hover:cursor-pointer   
        hover:shadow-[0px_72px_49px_-51px_--theme(--color-secondary-blue/0.21)]
        hover:bg-linear-to-b from-transparent to-secondary-blue/10  
      "
    >
      <Image
        src={icon}
        alt="Caixa com qrcode"
        className="m-auto rounded-lg"
        width={240}
        height={280}
      />
      <h1 className="text-xl text-primary-blue ">{title}</h1>

      <p className="text-base text-justify text-dark-gray ">{text}</p>

      <Link
        href={link}
        className="mt-auto bg-accent-yellow py-2 px-6 rounded-2xl text-base text-center font-bold
        text-dark-gray opacity-70 hover:opacity-100 transition-opacity"
      >
        Agendar Diagnóstico
      </Link>
    </div>
  );
};

export const itemDescription = [
  {
    icon: agendaValida,
    title: "Agendamento Inteligente → GMD Agenda & Valida",
    text: "Sistema para controle automatizado de docas e janelas de entrega",
    link: "#contact",
  },
  {
    icon: recebeValida,
    title: "Recebimento com Conferência Automática → GMD Recebe & Valida",
    text: "Sistema para gestão de entrada de materiais com validação em tempo real",
    link: "#contact",
  },
  {
    icon: criticos,
    title: "Fluxo Prioritário para Itens Críticos → GMD Críticos",
    text: "Sistema que identifica e dá prioridade automática a entregas essenciais",
    link: "#contact",
  },
  {
    icon: expede,
    title: "Expedição Segura e Automatizada → GMD Expede",
    text: "Sistema que cruza nota fiscal e etiqueta antes da saída do caminhão",
    link: "#contact",
  },
  {
    icon: devolucoeslogisticas,
    title:
      "Gestão de Devoluções e Reversas → GMD Devoluções & Logística Reversa",
    text: "Controle de devoluções, avarias e retorno com rastreabilidade total",
    link: "#contact",
  },
  {
    icon: visibilidadeGestao,
    title: "Painel Logístico Integrado → GMD Visibilidade & Gestão",
    text: "Dashboard com indicadores atualizados e controle do fluxo logístico",
    link: "#contact",
  },
];

export const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="
        bg-light-gray p-6 rounded-lg shadow-sm flex flex-col items-start text-left
        border-b-4 border-secondary-blue 
        transition-all duration-300 ease-in-out 
        hover:scale-105 
        hover:shadow-lg hover:shadow-blue-400/40 
      "
    >
      <div className="mb-4 text-secondary-blue">{icon}</div>
      <h3 className="text-xl font-bold text-dark-gray mb-2">{title}</h3>
      <p className="text-secondary-blue text-xl leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4 bg-dark-gray">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-light-gray">{question}</span>
        <span className=" text-xl font-bold text-secondary-blue w-6 h-6 mr-3 mt-1 shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-secondary-blue">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export const GalleryItem: React.FC<GalleryItemProps> = ({
  imageSrc,
  altText,
  label,
  href,
}) => {
  const src =
    typeof imageSrc === "object" && "src" in imageSrc ? imageSrc.src : imageSrc;

  return (
    <a className="flex flex-col items-center p-2 text-center" href={href}>
      <div
        className="relative 
                        w-30 h-30 md:w-35 md:h-35 lg:w-40 lg:h-40 
                        rounded-full 
                        overflow-hidden 
                        border-2 
                        border-secondary-blue 
                        transition-all duration-300 
                        hover:shadow-[0_0_15px_5px_var(--color-secondary-blue)]
  "
      >
        <Image
          src={src}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover"
          width={500}
          height={500}
        />
      </div>
      <p className="mt-4 text-light-gray text-sm md:text-base font-semibold leading-tight max-w-[150px]">
        {label}
      </p>
    </a>
  );
};

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className=" font-bold text-light-gray hover:text-secondary-blue transition-colors duration-400 text-lg"
  >
    {children}
  </Link>
);

export const WhatsAppIcon = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.371c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

export const PropostaButton = ({
  text,
  number,
  encodedMessage,
  isWhatsappLink,
  alternateHref,
}: Propose) => (
  <a
    href={
      isWhatsappLink === "yes"
        ? `https://wa.me/${number}?text=${encodedMessage}`
        : alternateHref
    }
    target="_blank"
    rel="noopener noreferrer"
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
    {text}
  </a>
);
