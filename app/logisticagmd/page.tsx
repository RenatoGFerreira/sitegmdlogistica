"use client";
import React from "react";
import Hero from "@/component/logisticagmd/Hero";
import Header from "@/component/logisticagmd/Header";
import Scheduling from "@/component/logisticagmd/Scheduling";
import Receive from "@/component/logisticagmd/Receive";
import Contacts from "@/component/logisticagmd/Contacts";
import Footer from "@/component/logisticagmd/Footer";
import Description from "@/component/logisticagmd/Description";
import Efforts from "@/component/logisticagmd/Efforts";
import Management from "@/component/logisticagmd/Management";
import Return from "@/component/logisticagmd/Return";
import Critics from "@/component/logisticagmd/Critics";
import Expedition from "@/component/logisticagmd/Expedition";
import WhatsAppButton from "@/component/logisticagmd/WhatsappButton";
import { phoneNumber, messageText } from "@/assets/objects";

export default function LandingPage() {
  const WHATSAPP_PHONE_NUMBER = phoneNumber;
  const WHATSAPP_MESSAGE = messageText;
  return (
    <div className="bg-light-gray text-dark-gray">
      <Header />
      <main>
        <Hero />
        <Description />
        <Efforts />
        <Scheduling />
        <Receive />
        <Critics />
        <Expedition />
        <Return />
        <Management />
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
