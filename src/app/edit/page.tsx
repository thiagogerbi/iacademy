"use client";

import Input from "@/components/Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UsuarioService } from "../../../service/UsuarioService";
import TopBar from "@/components/TopBar";

export default function EditarPerfil() {
  const usuarioService = new UsuarioService();
  const router = useRouter();

  const [perfil, setPerfil] = useState<unknown>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await usuarioService.getUsuarioLogado();
        setPerfil(response.data.perfil);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerfil();
  }, []);

  async function atualizar() {
    try {
      const response = await usuarioService.atualizarPerfil(perfil);
      console.log("Perfil atualizado:", response.data);
      alert("Perfil atualizado com sucesso!");
      router.push("/perfil");
    } catch (error: unknown) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao atualizar perfil.");
    }
  }

  if (loading) return <p className="text-center mt-10">Carregando...</p>;

  return (
    <>
      <TopBar />
      <div className="flex flex-col md:flex-row justify-center p-10 gap-10">
        <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-6 text-dark-blue">
            Editar Perfil
          </h2>

          <Input
            label="Nome"
            type="text"
            placeholder=""
            value={perfil.nome || ""}
            onChange={(e) => setPerfil({ ...perfil, nome: e.target.value })}
          />
          <Input
            label="Celular"
            type="text"
            placeholder=""
            value={perfil.celular || ""}
            onChange={(e) => setPerfil({ ...perfil, celular: e.target.value })}
          />
          <Input
            label="Cidade"
            type="text"
            placeholder=""
            value={perfil.cidade || ""}
            onChange={(e) => setPerfil({ ...perfil, cidade: e.target.value })}
          />
          <Input
            label="Estado"
            type="text"
            placeholder=""
            value={perfil.estado || ""}
            onChange={(e) => setPerfil({ ...perfil, estado: e.target.value })}
          />
          <Input
            label="LinkedIn"
            type="text"
            placeholder=""
            value={perfil.linkedin || ""}
            onChange={(e) => setPerfil({ ...perfil, linkedin: e.target.value })}
          />
          <Input
            label="GitHub"
            type="text"
            placeholder=""
            value={perfil.github || ""}
            onChange={(e) => setPerfil({ ...perfil, github: e.target.value })}
          />

          <button
            type="button"
            onClick={atualizar}
            className="mt-6 w-full bg-normal-blue text-white font-semibold py-3 rounded-xl hover:bg-normal-hover-blue transition"
          >
            Salvar Alterações
          </button>
        </form>
      </div>
    </>
  );
}
