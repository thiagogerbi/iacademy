"use client";

import { useAuth } from "@/app/hooks/useAuth";
import Pontos from "./Pontos";
import { useEffect, useState } from "react";
import { rankingService } from "../../service/RankingService";

export default function ProfileCard() {
  const { perfil } = useAuth();

  const [stats, setStats] = useState({
    exerciciosResolvidos: 0,
    trilhasConcluidas: 0,
    interacoes: 0,
  });

  // 🔥 Busca dados do ranking do aluno
  useEffect(() => {
    rankingService
      .getRankingAluno()
      .then((res) => {
        setStats({
          exerciciosResolvidos: res.data.exerciciosResolvidos || 0,
          trilhasConcluidas: res.data.trilhasConcluidas || 0,
          interacoes: res.data.interacoes || 0,
        });
      })
      .catch((err) => {
        console.log("Erro ao buscar ranking:", err);
      });
  }, []);

  const nome = perfil?.nome || "Usuário";
  const letra = perfil?.nome?.charAt(0).toUpperCase() || "?";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2lg text-center flex flex-col items-center gap-4">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-dark-blue text-white text-2xl flex items-center justify-center font-bold shadow">
        {letra}
      </div>

      <p className="text-2xl font-semibold text-dark-grey">Olá, {nome}!</p>

      <Pontos />

      {/* Estatísticas */}
      <div className="flex justify-around w-full mt-5 text-normal-blue font-semibold text-sm">
        <div className="flex flex-col items-center">
          <span className="text-3xl">
            {stats.exerciciosResolvidos.toString().padStart(2, "0")}
          </span>
          <span className="text-base text-normal-grey font-medium">
            Exercícios<br />Resolvidos
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-3xl">
            {stats.trilhasConcluidas.toString().padStart(2, "0")}
          </span>
          <span className="text-base text-normal-grey font-medium">
            Trilhas<br />Concluídas
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-3xl">
            {stats.interacoes.toString().padStart(2, "0")}
          </span>
          <span className="text-base text-normal-grey font-medium">
            Interações
          </span>
        </div>
      </div>

      <div>
        <a href="/perfil" className="text-normal-blue">
          Ir para o perfil completo
        </a>
      </div>
    </div>
  );
}
