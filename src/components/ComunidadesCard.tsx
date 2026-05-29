"use client";

export default function ComunidadesCard() {
  const comunidades = [
    { nome: "Comunidade 1", descricao: "Lorem ipsum dolor sit amet..." },
    { nome: "Comunidade 2", descricao: "Lorem ipsum dolor sit amet..." },
    { nome: "Comunidade 3", descricao: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-zinc-800 mb-4">Comunidades</h3>
      <ul className="space-y-3">
        {comunidades.map((c, i) => (
          <li key={i} className="flex gap-3">
            <div className="w-10 h-10 bg-zinc-200 rounded-md"></div>
            <div>
              <p className="text-zinc-800 font-medium">{c.nome}</p>
              <p className="text-xs text-zinc-500">{c.descricao}</p>
            </div>
          </li>
        ))}
      </ul>
      <a href="#" className="text-normal-blue text-sm mt-4 block hover:underline">
        Ver todas as comunidades
      </a>
    </div>
  );
}
