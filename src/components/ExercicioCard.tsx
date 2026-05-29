import { FileText, Zap, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { exercicioService } from "../../service/ExercicioService";

interface ExercicioCardProps {
  exercicio: {
    id: number;
    unidade_id: number;
    enunciado: string;
  };
  moduloId: number | string;
  jornadaId: number | string;
  trilhaId: number | string;
  personalizada?: boolean;
}

export default function ExercicioCard({
  exercicio,
  moduloId,
  jornadaId,
  trilhaId,
  personalizada
}: ExercicioCardProps) {
  const [status, setStatus] = useState<{
    concluido: boolean;
    pontos: number;
    data: string | null;
  }>({
    concluido: false,
    pontos: 0,
    data: null,
  });

  useEffect(() => {
    async function carregarStatus() {
      try {
        const { data } = await exercicioService.obterStatusExercicio(exercicio.id);
        setStatus(data);
      } catch (err) {
        console.error("Erro ao carregar status do exercício:", err);
      }
    }

    carregarStatus();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 mt-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <Zap className="w-6 h-6 text-normal-blue" />
          <h2 className="text-2xl font-bold text-dark-blue">
            Exercício #{exercicio.id}
          </h2>
        </div>

        {status.concluido && (
          <div className="flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            <CheckCircle className="w-4 h-4" />
            <span>Concluído</span>
          </div>
        )}
      </div>

      <p className="text-gray-700 mb-4 font-semibold">{exercicio.enunciado}</p>

      {status.concluido && (
        <div className="mb-4 text-sm text-gray-600">
          <p>
            <span className="font-bold">Pontos recebidos:</span>{" "}
            {status.pontos}
          </p>
          <p>
            <span className="font-bold">Data:</span>{" "}
            {new Date(status.data!).toLocaleDateString("pt-BR")}
          </p>
        </div>
      )}

{status.concluido ? (
  <div className="flex items-center justify-center bg-green-100 text-green-700 px-4 py-3 rounded-xl font-semibold cursor-not-allowed">
    <CheckCircle className="w-4 h-4 mr-2" />
    Exercício já concluído
  </div>
) : (
  <a
    href={`/exercicio/${exercicio.id}?unidade=${exercicio.unidade_id}&modulo=${moduloId}&trilha=${trilhaId}&jornada=${jornadaId}&personalizada=${personalizada ? "true" : "false"}`}
    className="flex items-center justify-center bg-normal-blue hover:bg-dark-blue text-white px-4 py-3 rounded-xl font-semibold transition"
  >
    <FileText className="w-4 h-4 mr-2" />
    Iniciar Avaliação
  </a>
)}
    </div>
  );
}
