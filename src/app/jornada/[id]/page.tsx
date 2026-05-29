"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ModuloItem from "@/components/ModuloItem";
import { JornadaService } from "../../../../service/JornadaService";
import TopBar from "@/components/TopBar";
import Section from "@/components/Section";

export default function JornadaPage() {
  const { id } = useParams();
  const [jornada, setJornada] = useState<unknown>(null);
  const [modulos, setModulos] = useState<unknown[]>([]);

  const secs = [
    {
      id: "avaliacoes",
      label: "Avaliações",
      content: <p>⭐ Nenhuma avaliação disponível.</p>,
    },
    {
      id: "recursos",
      label: "Recursos",
      content: (
        <ul className="list-disc pl-6">
          <li>Guia do Salesforce em PDF</li>
          <li>Vídeo introdutório</li>
        </ul>
      ),
    },
  ];

  useEffect(() => {
    if (!id) return;

    async function carregarJornada() {
      try {
        const service = new JornadaService();
        const response = await service.obterJornadaPorId(Number(id));

        setJornada(response.data);

        // Mapear módulos incluindo o id da trilha
        const modulosComTrilha = response.data.trilha?.flatMap((t: unknown) =>
          t.modulo.map((m: unknown) => ({
            ...m,
            trilhaId: t.id, // adiciona o id da trilha
          }))
        ) || [];

        setModulos(modulosComTrilha);
      } catch (err) {
        console.error("Erro ao carregar jornada:", err);
      }
    }

    carregarJornada();
  }, [id]);

  return (
    <>
      <TopBar />
      <div className="p-6 max-w-6xl mx-auto">
        {jornada ? (
          <>
            <h1 className="text-3xl font-bold text-dark-blue mb-4">{jornada.titulo}</h1>
            <p className="text-lg text-gray-600 mb-6">{jornada.descricao}</p>

            <Section section={secs} />

            {modulos.length > 0 ? (
              modulos.map((modulo, index) => (
                <ModuloItem
                  key={modulo.id}
                  modulo={modulo}
                  index={index}
                  jornadaId={id as string}
                  trilhaId={modulo.trilhaId} // <- passando o id da trilha
                />
              ))
            ) : (
              <p className="text-gray-500">Nenhum módulo encontrado.</p>
            )}
          </>
        ) : (
          <p className="text-gray-500">Carregando jornada...</p>
        )}
      </div>
    </>
  );
}
