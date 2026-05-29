import Image from 'next/image'

export default function Recomendacoes() {
    const cursos = [
      { nome: "Curso JavaScript Avançado", img: "/prog.jpg" },
      { nome: "Curso Python Básico", img: "/prog.jpg" },
      { nome: "Curso Introdução a Hardware", img: "/prog.jpg" },
      { nome: "Curso Inteligência Artificial", img: "/prog.jpg" }
    ];
  
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-normal-blue mb-2">
          Recomendações
        </h2>
        <p className="text-lg text-zinc-500 mb-4">
          Trilhas recomendadas com base na sua experiência até agora!
        </p>
  
        <div className="flex gap-4 overflow-x-auto pb-2">
          {cursos.map((c, i) => (
            <div key={i} className="h-70 min-w-[60px] bg-zinc-50 rounded-xl shadow-sm hover:shadow-md transition p-2 cursor-pointer">
              <Image
                src={c.img}
                width={200}
                height={300}
                alt={c.nome}
                className="rounded-xl h-55"
              />
              <p className="text-center mt-2 text-sm font-medium text-zinc-700">{c.nome}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  