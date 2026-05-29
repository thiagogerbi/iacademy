import { axiosInstance } from "./axios";

export class UsuarioService {
  cadastrarUsuario(dados: {
    nome: string;
    celular: string;
    email: string;
    senha: string;
  }) {
    return axiosInstance.post("/auth/register", dados);
  }

  loginUsuario(dados: { email: string; senha: string }) {
    return axiosInstance.post("/auth/login", dados);
  }

  getUsuarioLogado() {
    return axiosInstance.get("/perfil");
  }

  atualizarPerfil(dados: {
    nome?: string;
    celular?: string;
    idade?: number;
    curso?: string;
    cidade?: string;
    estado?: string;
    linkedin?: string;
    github?: string;
  }) {
    return axiosInstance.patch("/perfil/attperfil", dados);
  }

  adicionarPontos(data: { exercicioId: number; acertou: boolean }) {
    return axiosInstance.patch("/perfil/pontos", data);
  }
}
