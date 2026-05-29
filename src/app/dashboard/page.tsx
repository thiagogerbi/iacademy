"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { JornadaService } from "../../../service/JornadaService";
import ProfileCard from "@/components/ProfileCard";
import TopBar from "@/components/TopBar";
import TrilhaProgresso from "@/components/TrilhaProgresso";
import Recomendacoes from "@/components/Recomendacoes";
import TopInstituicoes from "@/components/TopInstituicoes";
import ComunidadesCard from "@/components/ComunidadesCard";
import TrailCard from "@/components/TrailCard";

interface Trail {
  id: number;
  nome: string;
  descricao: string;
  pontos: number;
  tempo: string;
}

interface Jornada {
  id: number;
  nome: string;
  descricao: string;
  trilha?: Trail[];
}

export default function DashboardPage() {
  const router = useRouter();
  const [search] = useState("");
  const [jornada, setJornada] = useState<Jornada | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJornada = async () => {
      try {
        const service = new JornadaService();
        const response = await service.obterJornadaPorId(1); // 🔹 busca jornada 1
        setJornada(response.data);
      } catch (err) {
        console.error("Erro ao buscar jornada:", err);
        setError("Erro ao carregar jornada.");
      } finally {
        setLoading(false);
      }
    };

    fetchJornada();
  }, []);

  // Pega apenas a primeira trilha da jornada (se existir)
  const trilhaUnica = jornada?.trilha ? [jornada.trilha[0]] : [];

  const filtered = trilhaUnica.filter((t) =>
    t.nome.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="p-10 text-center text-gray-500">Carregando trilhas...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <>
      <TopBar />
      <main className="px-10 py-8 bg-gradient-to-br bg-light-grey min-h-screen">
        <div className="grid grid-cols-12 gap-6">
          {/* COLUNA ESQUERDA */}
          <div className="col-span-3 space-y-6">
            <ProfileCard />
            <TrilhaProgresso />
          </div>

          {/* COLUNA CENTRAL */}
          <div className="col-span-6 space-y-6">
            {jornada ? (
              <section
                onClick={() => router.push(`/jornada/${jornada.id}`)}
                className="cursor-pointer"
              >
                {filtered.map((trail) => (
                  <TrailCard
                    key={trail.id}
                    id={trail.id}
                    titulo={trail.nome}
                    descricao={trail.descricao}
                    pontos={trail.pontos}
                    tempo={trail.tempo}
                  />
                ))}
              </section>
            ) : (
              <p>Carregando jornada...</p>
            )}
            <Recomendacoes />
          </div>

          {/* COLUNA DIREITA */}
          <div className="col-span-3 space-y-6">
            <TopInstituicoes />
            <ComunidadesCard />
          </div>
        </div>
      </main>
    </>
  );
}
