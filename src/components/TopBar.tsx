"use client";

import { useRouter } from "next/navigation";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useAuth } from "@/app/hooks/useAuth";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";

export default function TopBar() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center h-20 px-10 w-full shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} width={270} alt="Logo IAcademy" />
      </div>

      {/* Navegação */}
      <div className="flex text-lg font-semibold items-center gap-8 text-dark-blue">
        {user && (
          <div className="flex gap-6 justify-between">
            <a href="/dashboard" className="p-1 hover:text-dark-hover-blue hover:bg-light-active-blue rounded-lg">Início</a>
            <a href="/trilhas" className="p-1 hover:text-dark-hover-blue hover:bg-light-active-blue rounded-lg">Trilhas</a>
            <a href="/trilhas-personalizadas" className="p-1 hover:text-dark-hover-blue hover:bg-light-active-blue rounded-lg">Trilhas Personalizadas</a>
            <a href="#" className="p-1 hover:text-dark-hover-blue hover:bg-light-active-blue rounded-lg">Comunidade</a>
            <a href="/ranking" className="p-1 hover:text-dark-hover-blue hover:bg-light-active-blue rounded-lg">Ranking</a>
          </div>
        )}

        {/* Autenticação */}
        {!user ? (
          <div className="flex items-center gap-4 ml-30">
            <button
              className="text-normal-blue hover:text-normal-hover-blue font-semibold cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Entrar
            </button>
            <button
              className="bg-darker-blue px-4 py-2 rounded-lg text-white cursor-pointer hover:bg-dark-hover-blue"
              type="button"
              onClick={() => router.push("/cadastro")}
            >
              Comece Agora
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4 ml-30">
            <SearchBar />
            <UserIcon />
          </div>
        )}
      </div>
    </div>
  );
}
