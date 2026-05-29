"use client";

import { Search } from "lucide-react";

export default function FiltroRanking({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mb-4 flex items-center gap-2 bg-white border border-zinc-300 rounded-lg px-3 py-2 shadow-sm w-80">
      <Search className="w-4 h-4 text-zinc-500" />
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full outline-none text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
