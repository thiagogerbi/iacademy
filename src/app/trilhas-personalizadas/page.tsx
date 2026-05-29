"use client";

import { useEffect, useState } from "react";
import { iaService } from "../../../service/IAService";
import TopBar from "@/components/TopBar";
import ModuloItem from "@/components/ModuloItem";

export default function TrilhasPersonalizadasPage() {
  const [trilha, setTrilha] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  async function carregarTrilha() {
    try {
      const response = await iaService.obterTrilhaAtiva();
      setTrilha(response.data);
    } catch (error) {
      console.error("Erro ao buscar trilha personalizada:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarTrilha();
  }, []);

  return (
    <>
      <TopBar />

      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-dark-blue mb-4">
          Trilhas Personalizadas 🎯
        </h1>

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : !trilha ? (
          <div>
            <p className="text-gray-500 mb-4">
              Nenhuma trilha personalizada encontrada.
            </p>

            <button
              onClick={async () => {
                await iaService.criarTrilhaPersonalizada();
                await carregarTrilha();
              }}
              className="px-4 py-2 bg-normal-blue text-white rounded-lg cursor-pointer"
            >
              Gerar Trilhas com IA 🤖
            </button>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">{trilha.descricao}</p>

            {trilha.modulos && trilha.modulos.length > 0 ? (
              trilha.modulos.map((modulo: unknown, index: number) => (
                <ModuloItem
                  key={modulo.id}
                  modulo={modulo}
                  index={index}
                  jornadaId={trilha.id}
                  trilhaId={trilha.id}
                  ehPersonalizada={true}
                />
              ))
            ) : (
              <p className="text-gray-500">Nenhum módulo encontrado.</p>
            )}
          </>
        )}
      </div>
    </>
  );
}
