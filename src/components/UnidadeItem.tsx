import { Clock } from "lucide-react";

export default function UnidadeItem({ unidade, index }: unknown) {
  return (
    <div className="flex justify-between items-center bg-white px-5 py-4 border border-blue-100 rounded-xl hover:shadow-sm transition">
      <div>
        <p className="text-indigo-600 font-medium">{unidade.nome}</p>
        <p className="text-xs text-zinc-500">Unidade 0{index + 1}</p>
      </div>
      <div className="flex items-center gap-1 text-zinc-500 text-sm">
        <Clock className="w-4 h-4" />
        <span>{unidade.duracao || "?"}</span>
      </div>
    </div>
  );
}
