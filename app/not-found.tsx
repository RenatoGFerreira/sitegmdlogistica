import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Página Não Encontrada",
  description:
    "A página que você está procurando não existe. Em caso de dúvidas procure o administrador.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-gray-50">
      <h1>Página não encontrada</h1>
    </div>
  );
}