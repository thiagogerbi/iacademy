import { axiosInstance } from "./axios";

export class JornadaService {
  async getTrilhas() {
    return axiosInstance.get(`/jornada`);
  }

  async obterJornadaPorId(id: number) {
    return axiosInstance.get(`/jornada/${id}`);
  }

  async obterUnidadePorModulo(moduloId: number) {
    return axiosInstance.get(`/unidade/${moduloId}`);
  }

  async obterUnidadePorId(
    id: number,
    moduloId: number,
    trilhaId: number,
    jornadaId: number,
    personalizada: boolean = false // <- ADICIONADO AQUI
  ) {
    return axiosInstance.get(`/unidade/unit/${id}`, {
      params: {
        modulo: moduloId,
        trilha: trilhaId,
        jornada: jornadaId,
        personalizada // <- ENVIADO PARA O BACK
      }
    });
  }
}

export const jornadaService = new JornadaService();
