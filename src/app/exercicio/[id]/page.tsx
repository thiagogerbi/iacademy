"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { exercicioService } from "../../../../service/ExercicioService";
import { UsuarioService } from "../../../../service/UsuarioService";
import { useRouter } from "next/navigation";
import TopBar from "@/components/TopBar";

interface Exercicio {
  id: number;
  enunciado: string;
  alternativas: Record<string, string>;
  resposta_correta: string; // "A", "B", "C", "D"
}

export default function ExercicioPage() {
  const { id } = useParams();
  const router = useRouter();
  const usuarioService = new UsuarioService();
  const searchParams = useSearchParams();
  const unidadeId = searchParams.get("unidade");
  const moduloId = searchParams.get("modulo");
  const trilhaId = searchParams.get("trilha");
  const jornadaId = searchParams.get("jornada");
  const personalizada = searchParams.get("personalizada") === "true";



  const [exercicio, setExercicio] = useState<Exercicio | null>(null);
  const [alternativasArray, setAlternativasArray] = useState<string[]>([]);
  const [respostaIndex, setRespostaIndex] = useState<number | null>(null);

  const [selected, setSelected] = useState<number | null>(null);
  const [resultado, setResultado] = useState<"acerto" | "erro" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExercicio() {
      if (!id || !unidadeId) return;

      try {
        const response = await exercicioService.obterExercicio(
          Number(unidadeId),
          Number(id),
          personalizada
        );

        const data = response.data;

        // Converter alternativas de objeto → array
        const letras = Object.keys(data.alternativas); // ["A","B","C","D"]
        const alternativasArray = letras.map((k) => data.alternativas[k]);
        setAlternativasArray(alternativasArray);

        // Converter resposta correta (A/B/C/D) → índice
        const respostaIndex = letras.indexOf(data.resposta_correta);
        setRespostaIndex(respostaIndex);

        setExercicio(data);
      } catch (error) {
        console.error("Erro ao buscar exercício:", error);
        setExercicio(null);
      } finally {
        setLoading(false);
      }
    }

    fetchExercicio();
  }, [id, unidadeId]);

  // ────────────────────────────────────────────────
  //  VERIFICAR RESPOSTA + ADICIONAR PONTOS
  // ────────────────────────────────────────────────
  async function verificarResposta() {
    if (selected === null || respostaIndex === null || !exercicio) return;
  
    const acertou = selected === respostaIndex;
    setResultado(acertou ? "acerto" : "erro");
  
    try {
      const response = await usuarioService.adicionarPontos({
        exercicioId: exercicio.id,
        acertou: acertou
      });
  
      // --- NOVO: verificar se o exercício foi marcado como concluído ---
      if (response?.data?.concluido) {
        console.log("✔ Exercício concluído!");
      }
  
    } catch (err) {
      console.error("Erro ao adicionar pontos:", err);
    }
  }

  function proximo() {

    if (resultado === "acerto") {
      router.push(`/unidade/${unidadeId}?modulo=${moduloId}&trilha=${trilhaId}&jornada=${jornadaId}`);
      return;
    }

    setSelected(null);
    setResultado(null);
  }

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <Loader2 className="animate-spin w-10 h-10 text-normal-blue" />
      </div>
    );

  if (!exercicio)
    return (
      <div className="text-center mt-20 text-red-600 text-xl">
        Exercício não encontrado.
      </div>
    );

  return (
    <>
      <TopBar />
      <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg border border-indigo-100">
        <h1 className="text-3xl font-bold text-dark-blue mb-6">
          Exercício #{exercicio.id}
        </h1>

        <p className="text-gray-800 text-lg font-semibold mb-6 leading-relaxed">
          {exercicio.enunciado}
        </p>

        <div className="space-y-4">
          {alternativasArray.map((alt, index) => {
            const isSelected = selected === index;
            const isCorrect = resultado === "acerto" && index === respostaIndex;
            const isWrong = resultado === "erro" && isSelected;

            return (
              <button
                key={index}
                onClick={() => setSelected(index)}
                disabled={resultado !== null}
                className={`w-full text-left p-4 rounded-xl border transition font-medium cursor-pointer
                  ${isSelected ? "bg-normal-blue text-white border-normal-blue" : "bg-gray-50 hover:bg-gray-100 border-gray-300"}
                  ${isCorrect ? "border-green-500 bg-green-50 text-green-800" : ""}
                  ${isWrong ? "border-red-500 bg-red-50 text-red-800" : ""}
                `}
              >
                {alt}
              </button>
            );
          })}
        </div>

        {resultado === null ? (
          <button
            onClick={verificarResposta}
            disabled={selected === null}
            className="mt-6 w-full bg-normal-blue hover:bg-dark-blue text-white font-semibold py-3 rounded-xl shadow-md transition disabled:opacity-40 cursor-pointer"
          >
            Enviar Resposta
          </button>
        ) : (
          <div className="mt-6 text-center">
            {resultado === "acerto" ? (
              <div className="flex flex-col items-center">
                <CheckCircle className="text-green-600 w-12 h-12 mb-2" />
                <p className="text-green-700 font-bold text-xl">Correto!</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <XCircle className="text-red-600 w-12 h-12 mb-2" />
                <p className="text-red-700 font-bold text-xl">Resposta incorreta</p>
              </div>
            )}

            <button
              onClick={proximo}
              className="mt-6 w-full bg-normal-blue hover:bg-dark-blue text-white font-semibold py-3 rounded-xl shadow-md transition cursor-pointer"
            >
              Continuar
            </button>
          </div>
        )}
      </div>
    </>
  );
}
