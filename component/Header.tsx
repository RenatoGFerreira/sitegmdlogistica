"use-client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/assets/objects";

export default function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isShrunk = isScrolled && !isHovered;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-dark-blue/80 backdrop-blur-sm fixed top-0 left-0 right-0  z-50 p-4 shadow-2xl transition-all duration-200 ease-in-out ${
        isShrunk ? "-translate-y-2 opacity-20" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="#">
          <Image
            src="/logo.png"
            alt="Logo da empresa GMD LOGISTICA"
            width={100}
            height={80}
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 text-light-gray">
          <NavLink href="#sistems">Sistemas</NavLink>
          <NavLink href="#Aboutme">Quem Somos</NavLink>
          <NavLink href="#contact">Fale Conosco</NavLink>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden text-light-gray">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            <svg
              className="w-8 h-8 text-light-grey"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col items-center space-y-4 text-light-gray">
            <NavLink href="#sistems">Sistemas</NavLink>
            <NavLink href="#Aboutme">Quem Somos</NavLink>
            <NavLink href="#contact">Fale Conosco</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

