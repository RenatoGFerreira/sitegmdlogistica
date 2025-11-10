"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/assets/objects";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileSistemasOpen, setIsMobileSistemasOpen] = useState(false);
  const [isSistemasOpen, setIsSistemasOpen] = useState(false);
  const isShrunk = isScrolled && !isHovered;
  const sistemasMenuTimer = useRef<NodeJS.Timeout | null>(null);

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

  const handleSistemasEnter = () => {
    if (sistemasMenuTimer.current) {
      clearTimeout(sistemasMenuTimer.current);
    }
    setIsSistemasOpen(true);
  };

  const handleSistemasLeave = () => {
    sistemasMenuTimer.current = setTimeout(() => {
      setIsSistemasOpen(false);
    }, 200); 
  };

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
            alt="GMD LOGISTICA"
            width={100}
            height={80}
          />
        </Link>

        {/* --- Menu Desktop --- */}
        <nav className="hidden md:flex space-x-8 text-light-gray items-center">
          <NavLink href="#functionalities">Funcionalidades</NavLink>
          <div
            className="relative"
            onMouseEnter={handleSistemasEnter}
            onMouseLeave={handleSistemasLeave}
          >
            <button
              type="button"
              className="flex items-center space-x-1 group"
            >
              <span className="font-bold text-light-gray group-hover:text-secondary-blue transition-colors duration-400 text-lg">
                Sistemas
              </span>
              <svg
                className={`w-4 h-4 text-light-gray group-hover:text-secondary-blue transition-all duration-400 ${
                  isSistemasOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isSistemasOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-xl py-2 z-20">
                <Link
                  href="#readiness"
                  className="block px-4 py-2 text-sm text-dark-blue hover:bg-gray-100 transition-colors duration-150"
                >
                  GMD Readiness
                </Link>
                <Link
                  href="#readiness"
                  className="block px-4 py-2 text-sm text-dark-blue hover:bg-gray-100 transition-colors duration-150"
                >
                  GMD - Gestão Logística
                </Link>
                <Link
                  href="#readiness"
                  className="block px-4 py-2 text-sm text-dark-blue hover:bg-gray-100 transition-colors duration-150"
                >
                  GMD - Transporta
                </Link>
              </div>
            )}
          </div>
          <NavLink href="#contact">Fale Conosco</NavLink>
        </nav>

        {/* --- Menu Mobile --- */}
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
          <nav className="flex flex-col items-center space-y-4 text-light-gray w-full px-4">
            <NavLink href="#functionalities">Funcionalidades</NavLink>

            <button
              type="button"
              className="flex justify-center items-center w-full py-2 group"
              onClick={() => setIsMobileSistemasOpen(!isMobileSistemasOpen)}
            >
              <span className="font-bold mr-3  text-light-gray group-hover:text-secondary-blue transition-colors duration-400 text-lg">
                Sistemas
              </span>
              <svg
                className={`w-4 h-4 text-light-gray group-hover:text-secondary-blue transition-all duration-400 ${
                  isMobileSistemasOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isMobileSistemasOpen && (
              <div className="flex flex-col items-center space-y-3 w-full pl-4 border-l-2 border-gray-600">
                <NavLink href="#readiness">GMD Readiness</NavLink>
                <NavLink href="#readiness">GMD - Gestão Logística</NavLink>
                <NavLink href="#readiness">GMD Transporta</NavLink>
              </div>
            )}
            <NavLink href="#contact">Fale Conosco</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}