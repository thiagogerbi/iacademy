"use client";

import { useEffect, useState } from "react";
import { Pencil, Linkedin } from "lucide-react";
import { UsuarioService } from "../../service/UsuarioService";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function ProfileHeader() {
  const router  = useRouter()
  const { perfil: perfilContext } = useAuth(); // mantém compatibilidade com o contexto
  const [perfilData, setPerfilData] = useState<unknown>(perfilContext || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const service = new UsuarioService();
        const res = await service.getUsuarioLogado();
        console.log("Perfil carregado:", res.data);

        // Salva os dados no estado local
        setPerfilData(res.data.perfil);
      } catch (err) {
        console.error("Erro ao buscar perfil:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfil();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 text-center text-zinc-600">
        Carregando perfil...
      </div>
    );
  }

  // Usa os dados do perfil carregado da API
  const nome = perfilData.nome || "Usuário";
  const cidade = perfilData?.cidade || "Cidade não informada";
  const instituicao = perfilData?.instituicoes?.nome || "Instituição não informada";
  const linkedin = perfilData?.linkedin || "#";
  const letra = nome?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Banner */}
      <div className="w-full h-38 rounded-xl bg-gradient-to-r from-dark-blue to-normal-blue relative">
        <div className="absolute -bottom-13 left-6 w-30 h-30 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center text-3xl font-bold text-blue-700">
          {letra}
        </div>
      </div>

      {/* Info */}
      <div className="mt-18 ml-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-zinc-800">{nome}</h2>
          <button className="text-normal-blue hover:underline flex items-center gap-1 text-sm" onClick={()=> router.push("/edit") }>
            <Pencil size={14} /> Editar
          </button>
        </div>
        <p className="text-zinc-600 mt-1">{instituicao}</p>
        <p className="text-zinc-500 text-sm">{cidade}</p>

        <div className="flex items-center gap-4 mt-3">
          {linkedin !== "#" && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-normal-blue hover:text-dark-blue transition"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>

        <div className="mt-4 p-3 border-2 w-75 rounded-2xl text-normal-blue">
          <p className="text-sm text-zinc-600">
            iacademy.com/perfil/{nome.toLowerCase().replace(/\s+/g, "")}
          </p>
        </div>
      </div>
    </div>
  );
}
