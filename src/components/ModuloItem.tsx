import { useState } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface ModuloItemProps {
  modulo: unknown;
  index: number;
  jornadaId: string | number;
  trilhaId: string | number;
  ehPersonalizada?: boolean; // <- ADICIONADO
}

export default function ModuloItem({
  modulo,
  index,
  jornadaId,
  trilhaId,
  ehPersonalizada = false, // <- PADRÃO FALSE
}: ModuloItemProps) {
  const [aberto, setAberto] = useState(false);

  // 🔵 IMPORTANTE: Decide se usa unidade normal ou personalizada
  const unidades = ehPersonalizada
    ? modulo.unidade_personalizada
    : modulo.unidade;

  return (
    <div className="bg-light-blue max-w-6xl rounded-2xl shadow-md border border-blue-200 overflow-hidden mt-4">
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex items-center h-25 justify-between px-6 py-4 cursor-pointer hover:bg-light-hover-blue transition"
      >
        <div className="flex items-center gap-4">
          <div className="bg-normal-blue text-white font-bold text-xl px-4 py-3 rounded-xl shadow">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold text-dark-blue">
              {modulo.titulo}
            </h3>
          </div>
        </div>

        {aberto ? (
          <ChevronUp className="text-normal-blue w-5 h-5" />
        ) : (
          <ChevronDown className="text-normal-blue w-5 h-5" />
        )}
      </button>

      {aberto && (
        <div className="space-y-3 px-6 pb-6">
          {unidades?.map((unidade: unknown, i: number) => (
            <Link
              key={i}
              href={`/unidade/${unidade.id}?modulo=${modulo.id}&trilha=${trilhaId}&jornada=${jornadaId}&personalizada=${ehPersonalizada}`}
            >
              <div className="flex justify-between items-center bg-white px-5 py-4 border border-blue-100 rounded-xl hover:shadow-md hover:bg-light-hover-blue transition cursor-pointer">
                <div>
                  <p className="text-normal-blue text-lg font-semibold">
                    {unidade.titulo}
                  </p>
                  <p className="text-base text-zinc-500">Unidade {i + 1}</p>
                </div>
                <div className="flex items-center gap-1 text-normal-grey text-base">
                  <Clock className="w-4 h-4" />
                  <span>{unidade.duracao || "Indefinida"}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
