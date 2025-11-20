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
import { phoneNumber, messageText } from "@/assets/objects";

export default function Home() {
  const WHATSAPP_PHONE_NUMBER = phoneNumber;
  const WHATSAPP_MESSAGE = messageText;
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
            "Gestão integrada de recebimentos, expedições e janelas logísticas. Agendamento validado, conferência de NF, alertas e visibilidade operacional. Suporta a rotina diária e contribui para decisões táticas com base em dados confiáveis."
          }
          image={"/module/1.png"}
          number={WHATSAPP_PHONE_NUMBER}
          encodedMessage={"Vi o site de vocês e gostaria de saber mais sobre o GMD – SISTEMA DE GESTÃO LOGÍSTICA"}
        />
        <SistemsModelTwo
          what={"SISTEMA DE TRANSPORTE"}
          title={"GMD SISTEMA TRANSPORTA"}
          text={
            "Acompanhamento logístico e técnico em fornecedores e subfornecedores. Nossa equipe especializada monitora prazos, capacidade e informação, atuando também em questões de qualidade quando necessário."
          }
          image={"/module/2.png"}
          number={WHATSAPP_PHONE_NUMBER}
          encodedMessage={"Vi o site de vocês e gostaria de saber mais sobre o GMD – SISTEMA TRANSPORTA"}
        />
        <SistemsModelOne
          what={"SISTEMA DE GESTÃO DE CARGA"}
          title={"GMD - SISTEMA FRETE SEGURO"}
          text={
            "Auditoria automática de fretes com regras configuráveis. Garante consistência contratual, identifica divergências e fortalece o compliance com transparência entre operação, finanças e transportadoras. Segurança, clareza e controle em um só lugar"
          }
          image={"/module/3.jpg"}
          number={WHATSAPP_PHONE_NUMBER}
          encodedMessage={"Vi o site de vocês e gostaria de saber mais sobre o GMD – SISTEMA FRETE SEGURO"}
        />
        <SistemsModelTwo
          what={"SISTEMA DE MONITORAMENTO"}
          title={"GMD - SISTEMA TRACK & TRACE"}
          text={
            "Visibilidade centralizada de transportes com ou sem rastreador. Gestão de ocorrências, alertas e relatórios por cliente ou rota. Informação confiável para agir com mais agilidade e controle operacional."
          }
          image={"/module/4.jpg"}
          number={WHATSAPP_PHONE_NUMBER}
          encodedMessage={"Vi o site de vocês e gostaria de saber mais sobre o GMD – SISTEMA TRACK & TRACE"}
        />
        <SistemsModelOne
          what={"SISTEMAS PERSONALIZADOS"}
          title={"GMD SERVIÇOS - SISTÊMICAS PERSONALIZADOS"}
          text={
            "Soluções sistêmicas sob medida para sua logística. Desenvolvemos sistemas personalizados que se adaptam ao seu fluxo, integram processos e ampliam a visibilidade com tecnologia alinhada à operação real."
          }
          image={"/module/5.jpg"}
          number={WHATSAPP_PHONE_NUMBER}
          encodedMessage={"Vi o site de vocês e gostaria de saber mais sobre o GMD – SISTEMAS PERSONALIZADOS"}
        />
        <SistemsModelTwo
          what={"SISTEMA DE MONITORAMENTO"}
          title={"GMD SERVICOS - READINESS"}
          text={
            "Serviço de acompanhamento logístico e técnico em fornecedores e subfornecedores. Monitoramos prazos, capacidade e qualidade para mitigar riscos e sustentar o fluxo produtivo em operações Just-in-Time ou críticas."
          }
          image={"/module/6.jpg"}
          number={WHATSAPP_PHONE_NUMBER}
          encodedMessage={"Vi o site de vocês e gostaria de saber mais sobre o GMD SISTEMA - READINESS"}
        />
        <SistemsModelOne
          what={"SISTEMA DE BUSSINES PROCESS OUTSOURCING"}
          title={"GMD SERVIÇOS - BPO LOGÍSTICO"}
          text={
            "BPO Logístico com equipe GMD dedicada. Assumimos rotinas críticas como PCM, PCP e torre de controle, com método, metas e indicadores para garantir eficiência, governança e alívio operacional."
          }
          image={"/module/7.jpg"}
          number={WHATSAPP_PHONE_NUMBER}
          encodedMessage={"Vi o site de vocês e gostaria de saber mais sobre o GMD – BPO LOGÍSTICO"}
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
