import React from 'react';
import { WhatsAppButtonProps } from '@/assets/interfaces';
import { WhatsAppIcon, phoneNumber, messageText } from '@/assets/objects';

const WhatsAppButton: React.FC<WhatsAppButtonProps> = () => {
  const encodedMessage = encodeURIComponent(messageText || 'Olá! Gostaria de mais informações sobre a GMD Logística.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-5 right-5 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition-transform transform hover:scale-110"
      aria-label="Contate-nos no WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;