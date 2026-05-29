"use client";
import { useState } from "react";

export default function RankingHeader({ onPeriodoChange }: { onPeriodoChange: (p: string) => void }) {
  const [periodo, setPeriodo] = useState("mensal");

  const handleChange = (novoPeriodo: string) => {
    setPeriodo(novoPeriodo);
    onPeriodoChange(novoPeriodo);
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-zinc-800">Ranking</h1>
      <div className="flex gap-3 bg-white rounded-xl shadow-sm p-2 border border-zinc-200 ">
        {["mensal", "semestral", "anual"].map((p) => (
          <button
            key={p}
            onClick={() => handleChange(p)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition cursor-pointer ${
              periodo === p ? "bg-normal-blue text-white" : "text-zinc-600 hover:bg-light-active-blue"
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}
