"use client";
import { CallToActionSection } from "@/component/CallToActionSection";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { HeroCarousel } from "@/component/HeroCarousel";
import { SolutionsIntro } from "@/component/SolutionsIntro";
import { StatsSection } from "@/component/StatsSection";
import WhatsAppButton from "@/component/WhatsappButton";
import Contacts from "@/component/Contacts";
import SectionModelTwo from "@/component/SectionModelTwo";
import SectionModelOne from "@/component/SectionModelOne";

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
        <CallToActionSection />
        <SolutionsIntro />
        <SectionModelOne />
        <SectionModelTwo />
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
