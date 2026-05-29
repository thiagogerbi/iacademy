"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { JornadaService } from "../../../../service/JornadaService";
import TopBar from "@/components/TopBar";
import ExercicioCard from "@/components/ExercicioCard";

export default function UnidadePage() {
  const { id } = useParams();
  const searchParams = useSearchParams();

  const moduloId = searchParams.get("modulo");
  const jornadaId = searchParams.get("jornada");
  const trilhaId = searchParams.get("trilha");
  const personalizada = searchParams.get("personalizada") === "true"; // 👈 ADICIONADO

  const [unidade, setUnidade] = useState<unknown>(null);

  useEffect(() => {
    if (!id || !moduloId || !jornadaId || !trilhaId) return;

    async function fetchUnidade() {
      try {
        const service = new JornadaService();

        const response = await service.obterUnidadePorId(
          Number(id),
          Number(moduloId),
          Number(trilhaId),
          Number(jornadaId),
          personalizada // 👈 ENVIADO PARA A API
        );

        setUnidade(response.data);
      } catch (err) {
        console.error("Erro ao buscar unidade:", err);
      }
    }

    fetchUnidade();
  }, [id, moduloId, trilhaId, jornadaId, personalizada]);

  if (!unidade) {
    return (
      <div className="p-6 text-center text-gray-500">
        Carregando conteúdo da unidade...
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <div className="p-7 max-w-7xl mx-auto text-justify">
        <h1 className="text-3xl font-bold text-dark-blue mb-4">{unidade.titulo}</h1>
        <p className="text-lg text-gray-700 mb-6">{unidade.descricao}</p>

        {unidade.video && (
          <div className="mb-6">
            <video controls className="rounded-lg w-full shadow-md">
              <source src={unidade.video} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        )}

        {unidade.conteudo && (
          <div
            className="prose prose-blue"
            dangerouslySetInnerHTML={{ __html: unidade.conteudo }}
          />
        )}

        {unidade.exercicio && unidade.exercicio.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-dark-blue border-b pb-2 mb-4">
              Avaliações e Exercícios
            </h2>

            {unidade.exercicio.map((exercicio: unknown) => (
              <ExercicioCard
                key={exercicio.id}
                exercicio={exercicio}
                moduloId={moduloId!}
                jornadaId={jornadaId!}
                trilhaId={trilhaId!}
                personalizada={unidade.personalizada}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
