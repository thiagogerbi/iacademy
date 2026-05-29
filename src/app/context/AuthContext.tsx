"use client";

import { createContext, useEffect, useState } from "react";
import { AuthContextType, UserData, PerfilData } from "@/app/types/auth";
import { UsuarioService } from "../../../service/UsuarioService";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const usuarioService = new UsuarioService();

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [perfil, setPerfil] = useState<PerfilData | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, senha: string) => {
    const response = await usuarioService.loginUsuario({ email, senha });
    const { token, usuario, perfil } = response.data;

    localStorage.setItem("token", token);
    setUser(usuario);
    setPerfil(perfil);
    setToken(token);
  };

  const logout = () => {
    setUser(null);
    setPerfil(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const loadUserFromToken = async () => {
    const savedToken = localStorage.getItem("token");
    if (!savedToken) return;

    try {
      const response = await usuarioService.getUsuarioLogado();
      setUser(response.data.usuario);
      setPerfil(response.data.perfil);
      setToken(savedToken);
    } catch (err) {
      console.error("Token inválido:", err);
      logout();
    }
  };

  useEffect(() => {
    loadUserFromToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, perfil, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
