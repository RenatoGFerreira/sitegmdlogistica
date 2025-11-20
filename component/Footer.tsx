import Image from "next/image"; 
import React from "react";

const IconLinkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
          <div className="max-w-sm">
            <Image src="/logo.png" width={75} height={20} alt="GMD Logística" />
            {/* <h2 className="text-2xl font-bold text-white">GMD LOGÍSTICA</h2> */}

            <p className="mt-4 text-gray-300">
              Uma solução inteligente para o seu negócio ou sua logística.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <h3 className="font-semibold text-white">Navegação</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="#sistems"
                    className="hover:text-white transition-colors"
                  >
                    Sistemas
                  </a>
                </li>
                <li>
                  <a
                    href="#Aboutme"
                    className="hover:text-white transition-colors"
                  >
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Siga-nos</h3>
              <div className="flex mt-4 space-x-5">
                <a
                  href="https://www.linkedin.com/company/gmd-log%C3%ADstica/?viewAsMember=true"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/gmdlogistica/"
                  aria-label="Instagram"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} GMD Logística Ltda.</p>
            <p>CNPJ: 09.629.680/0001-55</p>
          </div>

          <div className="text-sm text-center md:text-right text-gray-500">
            <p>
              Site criado por{" "}
              <a
                href="https://ionext.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                IoNext
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
