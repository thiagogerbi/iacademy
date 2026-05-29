"use client";

import { useEffect, useState } from "react";
import { Star, Award } from "lucide-react";
import { rankingService } from "../../service/RankingService";

export default function RankingStats() {
  const [aluno, setAluno] = useState<unknown>(null);
  const [instituicao, setInstituicao] = useState<unknown>(null);

  useEffect(() => {
    async function carregarRanking() {
      try {
        const alunoRes = await rankingService.getRankingAluno();
        const instRes = await rankingService.getRankingInstituicao();

        setAluno(alunoRes.data.aluno);
        setInstituicao(instRes.data);
      } catch (err) {
        console.error("Erro ao carregar ranking:", err);
      }
    }

    carregarRanking();
  }, []);

  if (!aluno || !instituicao)
    return <p className="text-center text-zinc-500">Carregando ranking...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

      {/* Card do Aluno */}
      <div className="bg-white rounded-2xl shadow-md border border-zinc-200 p-6 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-normal-blue flex items-center gap-2">
          <Award className="text-yellow-500" /> Seu Desempenho
        </h2>

        <p className="text-lg text-zinc-700 font-medium">{aluno.nome}</p>

        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="text-3xl font-bold text-normal-blue">
              {aluno.pontuacao.toLocaleString()}
            </p>
            <p className="text-md text-zinc-500">Pontos</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-normal-blue">
              {aluno.exerciciosConcluidos || 0}
            </p>
            <p className="text-md text-zinc-500">Exercícios</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-normal-blue">
              {aluno.interacoes || 0}
            </p>
            <p className="text-md text-zinc-500">Interações</p>
          </div>
        </div>

        <div className="mt-3 flex justify-center text-sm">
          <p className="bg-light-blue px-4 py-2 rounded-lg font-medium text-zinc-700">
            Posição atual:{" "}
            <span className="text-normal-blue font-bold">
              #{aluno.posicao}
            </span>
          </p>
        </div>
      </div>

      {/* Card da Instituição */}
      <div className="bg-white rounded-2xl shadow-md border border-zinc-200 p-6 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-dark-blue flex items-center gap-2">
          <Star className="text-yellow-400" /> Sua Instituição
        </h2>

        <p className="text-lg text-zinc-700 font-medium">
          {instituicao.nomeInstituicao}
        </p>

        <div className="grid grid-cols-3 text-center">
          <div>
            <p className="text-3xl font-bold text-dark-blue">
              {instituicao.pontosTotais?.toLocaleString() || 0}
            </p>
            <p className="text-md text-zinc-500">Pontos Totais</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-dark-blue">
              {instituicao.alunosAtivos || 0}
            </p>
            <p className="text-md text-zinc-500">Alunos Ativos</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-dark-blue">
              {instituicao.mediaTrilhas || 0}
            </p>
            <p className="text-md text-zinc-500">Média Trilhas</p>
          </div>
          
        </div>
        <div className="mt-3 flex justify-center text-sm">
          <p className="bg-light-blue px-4 py-2 rounded-lg font-medium text-zinc-700">
            Posição atual:{" "}
            <span className="text-normal-blue font-bold">
              #{instituicao.posicao || "0"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
