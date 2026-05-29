"use client";

import { Trophy } from "lucide-react";

interface RankingItem {
  posicao: number;
  nome: string;
  instituicao?: string;
  pontos: number;
  exerciciosConcluidos: number;
  interacoes: number;
}

export default function RankingTable({ data }: { data: RankingItem[] }) {
  return (
    <table className="w-full border-collapse bg-white shadow-md rounded-2xl overflow-hidden">
      <thead className="bg-light-blue text-left text-zinc-700 text-sm uppercase tracking-wide">
        <tr>
          <th className="p-4">Posição</th>
          <th className="p-4">Nome</th>
          <th className="p-4">Instituição</th>
          <th className="p-4 text-center">Pontos</th>
          <th className="p-4 text-center">Exercícios Concluidos</th>
          <th className="p-4 text-center">Interações</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr
            key={item.posicao}
            className="border-t border-zinc-100 transition cursor-pointer hover:bg-light-active-blue"
          >
            <td className="p-4 flex items-center gap-2">
              {item.posicao <= 3 && (
                <Trophy
                  className={`w-4 h-4 ${
                    item.posicao === 1
                      ? "text-yellow-500"
                      : item.posicao === 2
                      ? "text-gray-400"
                      : "text-amber-700"
                  }`}
                />
              )}
              <span className="font-semibold text-zinc-700">{item.posicao}</span>
            </td>

            <td className="p-4 font-medium text-zinc-800">{item.nome}</td>
            <td className="p-4 text-zinc-600">{item.instituicao || "-"}</td>
            <td className="p-4 text-center font-semibold text-zinc-700">
              {Number(item.pontos ?? 0).toLocaleString()}
            </td>
            <td className="p-4 text-center text-zinc-600">{item.exerciciosConcluidos}</td>
            <td className="p-4 text-center text-zinc-600">{item.interacoes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
