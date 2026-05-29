"use client";

export default function BadgesCard() {
  const badges = [
    { nome: "Top #10 Python IAcademy Junho de 2025", data: "01/06/2025" },
    { nome: "Ativo na comunidade!", data: "10/05/2025" },
    { nome: "Explorador de Trilhas", data: "03/04/2025" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-zinc-800 mb-4">Badges</h3>
      <ul className="space-y-3">
        {badges.map((badge, index) => (
          <li key={index} className="flex flex-col">
            <p className="text-normal-blue font-semibold">{badge.nome}</p>
            <span className="text-xs text-zinc-500">Conquistada em {badge.data}</span>
          </li>
        ))}
      </ul>
      <a href="#" className="text-normal-blue text-sm mt-3 block hover:underline">
        Ver mais badges
      </a>
    </div>
  );
}
