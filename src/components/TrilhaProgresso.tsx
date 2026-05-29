import { ArrowRight } from "lucide-react";

export default function TrilhaProgresso() {
  const trilhas = [
    { nome: "JavaScript Avançado", progresso: 37 },
    { nome: "React para Iniciantes", progresso: 12 },
    { nome: "HTML e CSS básico", progresso: 87 },
    { nome: "Figma UI/UX iniciante", progresso: 18 },
    { nome: "Python para Iniciantes", progresso: 5 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-normal-blue mb-4">
        Acompanhe suas trilhas
      </h2>

      <ul className="space-y-4">
        {trilhas.map((t, i) => (
          <li
            key={i}
            className="flex items-center justify-between text-lg text-dark-blue hover:underline cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{t.progresso}%</span>
              <p>{t.nome}</p>
            </div>
            <ArrowRight className="w-4 h-4" />
          </li>
        ))}
      </ul>
    </div>
  );
}
