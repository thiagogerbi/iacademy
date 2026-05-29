// service/IaService.ts
import { axiosInstance } from "./axios";

export class IaService {
  // Gera a trilha (POST)
  async criarTrilhaPersonalizada() {
    return axiosInstance.post("/ia/criar-trilha");
  }

  // Buscar trilha ativa do usuário (opcional)
  async obterTrilhaAtiva() {
    return axiosInstance.get("/ia/trilha-ativa");
  }
}

export const iaService = new IaService();
