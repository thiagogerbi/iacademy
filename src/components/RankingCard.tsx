"use client";

export default function RankingCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <p className="text-zinc-500 text-sm mb-2">Ranking</p>
      <h2 className="text-3xl font-bold text-normal-blue mb-2">#146</h2>
      <p className="text-zinc-700">
        Você tem <span className="font-semibold text-normal-blue">34.764</span> pontos
      </p>

      <div className="flex justify-around mt-4 text-sm text-normal-blue font-semibold">
        <div className="flex flex-col items-center">
          <span className="text-2xl">07</span>
          <p className="text-lg text-zinc-500">Exercícios</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">02</span>
          <p className="text-lg text-zinc-500">Trilhas</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">16</span>
          <p className="text-lg text-zinc-500">Interações</p>
        </div>
      </div>

      <a href="#" className="text-normal-blue text-sm mt-3 block hover:underline">
        Ver Ranking Completo
      </a>
    </div>
  );
}
