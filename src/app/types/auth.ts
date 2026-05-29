export type UserData = {
  id: number;
  email: string;
  tipo_usuario: string;
};

export type PerfilData = {
  id: number;
  nome: string;
  celular: string;
  usuario_id: number;
  pontuacao: number;
  exerciciosConcluidos?: number;
  posicao?: number;
  totalAlunos?: number;
};

export type AuthContextType = {
  user: UserData | null;
  perfil: PerfilData | null;
  token: string | null;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
};
