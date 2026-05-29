"use client";

import { useAuth } from "@/app/hooks/useAuth";



export default function Pontos() {
  const { perfil } = useAuth();

  const pontos = perfil?.pontuacao || 0;

  return (
    <div>
        <p className="text-xl text-dark-grey">
         <span className="text-normal-blue font-semibold">{pontos.toLocaleString()}</span>
        </p>
    </div>
  )
}