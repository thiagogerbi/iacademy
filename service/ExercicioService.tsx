import { axiosInstance } from "./axios";

export class ExercicioService {
  async obterExercicio(idUnidade: number, idExercicio: number, personalizada = false) {
    return axiosInstance.get(`/exercicio/${idUnidade}/${idExercicio}`, {
      params: { personalizada }
    });
  }
  

  async obterStatusExercicio(idExercicio: number) {
    return axiosInstance.get(`/exercicio/status/${idExercicio}`);
  }
  
}


export const exercicioService = new ExercicioService();
