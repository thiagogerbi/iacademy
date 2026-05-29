import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface Usuario {
    id: number,
    email: string,
    senha: string,
    tipo_usuario: string,
    data_criacao: Timestamp
}