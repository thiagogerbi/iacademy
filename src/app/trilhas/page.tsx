"use client" // ⚠️ tem que ser a primeira linha, sem comentários acima

import React, { useEffect, useState } from "react"
import TopBar from "@/components/TopBar" // usa o seu TopBar original
import { JornadaService } from "../../../service/JornadaService"
import TrailCard from "@/components/TrailCard"

interface Trail {
  id: number,
  nome: string
  descricao: string
  pontos: number
  tempo: string
}


export default function TrilhasPage() {
  const [trilhas, setTrilhas] = useState<Trail[]>([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTrilhas() {
      try{
        const service = new JornadaService()
        const response = await service.getTrilhas()
        setTrilhas(response.data)
      } catch (err){
        console.error("Erro ao buscar trilhas:", err)
        setError("Erro ao carregar trilhas.")
      } finally {
        setLoading(false)
      }
      
    }

    fetchTrilhas()
  }, [])

  const filtered = trilhas.filter((t) =>
    t.nome.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <div className="p-10 text-center text-gray-500">Carregando trilhas...</div>
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>


  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <TopBar />

      <main className="max-w-7xl mx-auto py-10 px-4 lg:px-6 flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-1/4 border border-gray-200 rounded-lg p-4 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-[#032D60]">Filtro</h2>
          {/* seus filtros */}
        </aside>

        <section className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-[#032D60]">
              Trilhas{" "}
              <span className="text-gray-500 font-normal">
                ({filtered.length} resultado(s))
              </span>
            </h2>

            <div className="flex gap-4 w-full md:w-auto">
              <input
                type="text"
                placeholder="Pesquisa rápida"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-300 rounded-md p-2 text-sm flex-1"
              />
            </div>
          </div>

          <div className="space-y-6">
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
          </div>
        </section>
      </main>
    </div>
  )
}