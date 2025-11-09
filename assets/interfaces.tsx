import { StaticImageData } from "next/image"; 
export interface AdvCardProps {
  icon: string | StaticImageData;
  title: string;
  text: string;
  link: string;
}

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface GalleryItemProps {
  imageSrc: string | StaticImageData;
  altText: string;
  label: string;
  href: string;
}
export interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  controls?: boolean;
  mute?: boolean;
}
export interface FaqItemProps {
  question: string;
  answer: string;
}

export type FooterProps = {
  phone?: string;
  message?: string;
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};
export interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}