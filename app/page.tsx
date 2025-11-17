"use client";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { HeroCarousel } from "@/component/HeroCarousel";
import { SolutionsIntro } from "@/component/SolutionsIntro";
import { StatsSection } from "@/component/StatsSection";
import WhatsAppButton from "@/component/WhatsappButton";
import Contacts from "@/component/Contacts";
import SistemsModelOne from "@/component/SistemsModelOne";
import SistemsModelTwo from "@/component/SistemsModelTwo";
import AboutSection from "@/component/AboutSection";
import AboutSection2 from "@/component/AboutSection2";
import Institutional from "@/component/Institutional";

export default function Home() {
  const WHATSAPP_PHONE_NUMBER = "5531984378974";
  const WHATSAPP_MESSAGE =
    "Olá! Visitei seu site e gostaria de mais informações.";
  return (
    <div className="bg-light-gray text-dark-gray">
      <Header />
      <main>
        <HeroCarousel />
        <StatsSection />
        <AboutSection />
        <SolutionsIntro />
        <SistemsModelOne
          what={"SISTEMA DE GESTÃO"}
          title={"GMD – SISTEMA DE GESTÃO LOGÍSTICA"}
          text={
            "Gestão integrada de recebimentos, expedições e janelas logísticas. Suporta a operação diária e a decisão tática com dados confiáveis para sua empresa."
          }
          image={"/gestao-logistica.jpg"}
        />
        <SistemsModelTwo
          what={"SISTEMA DE MONITORAMENTO"}
          title={"GMD READINESS"}
          text={
            "Acompanhamento logístico e técnico em fornecedores e subfornecedores. Nossa equipe especializada monitora prazos, capacidade e informação, atuando também em questões de qualidade quando necessário."
          }
          image={"/modelo-action.jpg"}
        />
        <SistemsModelOne
          what={"SISTEMA DE TRANSPORTE"}
          title={"GMD Transporta"}
          text={
            "Plataforma completa para gestão de transportes, integrando contratação, controle de entregas e performance. Otimiza rotas, reduz custos e garante visibilidade da operação do início ao fim."
          }
          image={"/gmdtrasporta.jpg"}
        />
        <SistemsModelTwo
          what={"SISTEMA DE BUSSINES PROCESS OUTSOURCING"}
          title={"GMD BPO Logístico"}
          text={
            "Terceirização estratégica de processos logísticos com expertise operacional. Assumimos rotinas críticas para liberar seu time, garantindo eficiência, conformidade e redução de custos com indicadores reais."
          }
          image={"/bpo-asd.jpg"}
        />
        <SistemsModelOne
          what={"SISTEMA DE GESTÃO DE CARGA"}
          title={" GMD Frete Seguro"}
          text={
            "Solução integrada para monitoramento de risco, prevenção de sinistros e gestão de seguros. Protege a carga, reduz perdas e assegura o cumprimento das exigências legais e contratuais."
          }
          image={"/frete-seguro.jpg"}
        />
        <SistemsModelTwo
          what={"SISTEMA DE MONITORAMENTO"}
          title={"GMD Track & Trace"}
          text={
            "Monitoramento em tempo real com visibilidade ponta a ponta. Acompanhe cada etapa do transporte, receba alertas automáticos e tome decisões rápidas baseadas em dados confiáveis."
          }
          image={"/tracktrace.jpg"}
        />
        <SistemsModelOne
          what={"SISTEMAS PERSONALIZADOS"}
          title={"GMD – Soluções Sistêmicas Sob Medida"}
          text={
            "Desenvolvimento de sistemas personalizados para sua operação. Criamos soluções que se adaptam ao seu fluxo, integram equipes e aumentam produtividade com tecnologia feita sob medida."
          }
          image={"/sob-medida.jpg"}
        />

        <Institutional />
        <AboutSection2 />
        <Contacts />
      </main>
      <Footer />
      <WhatsAppButton
        phoneNumber={WHATSAPP_PHONE_NUMBER}
        message={WHATSAPP_MESSAGE}
      />
    </div>
  );
}
