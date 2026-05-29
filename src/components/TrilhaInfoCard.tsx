interface TrilhaInfoCardProps {
  nivel: string;
  duracao: string;
  pontos: number;
  progresso: number; // 0 a 100
}

export default function TrilhaInfoCard({ nivel, duracao, pontos, progresso }: TrilhaInfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl space-y-5 border border-zinc-200 max-w-md">
      <div className="flex items-center gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
          alt="Python"
          className="h-12 w-12"
        />
        <div>
          <p className="text-lg font-semibold text-zinc-800">{nivel}</p>
          <p className="text-sm text-zinc-500">{duracao}</p>
          <p className="text-sm text-zinc-500">+{pontos} pontos</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-zinc-700 mb-1">Progresso da trilha</p>
        <div className="w-full h-4 bg-zinc-200 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full" style={{ width: `${progresso}%` }} />
        </div>
        <p className="text-right text-xs mt-1 text-zinc-500">{progresso}%</p>
      </div>
    </div>
  );
}
