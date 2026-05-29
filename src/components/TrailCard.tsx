"use client";

import { useRouter } from "next/navigation";

interface TrailCardProps {
  id: number;
  titulo: string;
  descricao: string;
  pontos?: number; // agora é opcional
  tempo?: string;
}

export default function TrailCard({
  id,
  titulo,
  descricao,
  pontos = 0, // valor padrão
  tempo = "Indefinido",
}: TrailCardProps) {
  const limite = 100;
  const desc = descricao.length > limite ? descricao.slice(0, limite) + "..." : descricao;

  const router = useRouter();

  return (
    <div
    onClick={() => router.push(`/jornada/${id}`)}
    className="border bg-white border-gray-200 rounded-xl shadow-sm cursor-pointer p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <span className="text-normal-blue text-lg font-bold">S</span>
        </div>
        <div>
          <h3 className="text-dark-blue font-semibold text-lg hover:underline">
            {titulo}
          </h3>
          <p className="text-sm text-darker-grey mt-1">{desc}</p>
          <p className="text-sm text-normal-grey mt-2">
            +{pontos.toLocaleString()} pontos
          </p>
        </div>
      </div>
      <div className="mt-3 sm:mt-0 text-sm text-normal-grey">{tempo}</div>
    </div>
  );
}
