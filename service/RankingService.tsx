import { axiosInstance } from "./axios";

export class RankingService {

    getRankingGeral() {
    return axiosInstance.get("/ranking");
  }

  getRankingAluno() {
    return axiosInstance.get("/ranking/aluno");
  }

  getRankingInstituicao() {
    return axiosInstance.get("/ranking/instituicao");
  }
}

export const rankingService = new RankingService();
