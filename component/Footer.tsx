import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-gray-400 py-6 md:py-8 px-2 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mt-4 font-bold text-center pb-10 text-gray-200 text-sm border-b border-gray-700">
          <p>Sistemas Inteligente para Gestão de Logística</p>
          <p> &copy; {new Date().getFullYear()} | GMD Logística LTDA </p>
          <p>CNPJ: 48.864.926/0001-51</p>
        </div>
        <div className="mt-2 text-center text-gray-600 text-sm">
          <p>Tenha um site deste você também com a IoNext</p>
        </div>
      </div>
    </footer>
  );
}
