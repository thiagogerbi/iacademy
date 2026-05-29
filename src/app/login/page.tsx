"use client"

import loginImg from "../../assets/img-login.png"
import Image from "next/image"
import logo from "@/assets/logo.png" // Logo do projeto
import microsoftLogo from "@/assets/microsoft.png" // Logo da Microsoft
import { useRouter } from "next/navigation"
import { useState } from "react"
import Input from "../../components/Input"
import { UsuarioService } from "../../../service/UsuarioService"

export default function Login() {
  const usuarioService = new UsuarioService()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function login() {
    if (!email || !senha) {
      alert("Preencha todos os campos")
      return
    }

    try {
      const response = await usuarioService.loginUsuario({ email, senha })

      console.log("Login realizado:", response.data)
      localStorage.setItem("token", response.data.token)
      router.push("/inicio")
    } catch (error: unknown) {
      console.error("Erro ao logar:", error)
      if (error.response?.data?.error) {
        alert(error.response.data.error)
      } else {
        alert("Erro inesperado ao tentar fazer login.")
      }
    }
  }

  return (
    <div className="flex flex-row justify-between items-start m-30">
      {/* Coluna da logo e título alinhada à esquerda */}
      <div className="flex flex-col items-start">
        {/* Logo IAcademy */}
        <div className="mb-4 -ml-11">
          <Image src={logo} alt="Logo IAcademy" width={200} height={200} />
        </div>

        {/* Título Bem-vindo ao IAcademy */}
        <div className="mb-2 mt-8 text-left">
          <h2 className="text-cinza-texto text-xl">Bem-vindo ao</h2>
          <h1 className="text-foreground font-extrabold text-3xl">IAcademy</h1>
        </div>

        {/* Botão Microsoft com imagem */}
        <div className="mt-10 mb-6">
          <button
            className="w-94 h-13 flex items-center justify-center gap-2 text-darker-grey text-base border-1 border-normal-grey rounded-xl
                       hover:bg-normal-hover-blue hover:text-white hover:border-0 cursor-pointer"
          >
            <Image
              src={microsoftLogo}
              alt="Microsoft Logo"
              width={20}
              height={20}
              className="hover: text-white"
            />
            Microsoft
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-6 mt-1">
          <Input
            label="E-mail"
            placeholder="Digite seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {/* Esqueceu a senha */}
        <div className="w-94 mt-2 text-right text-normal-blue">
          <a href="#" className="font-bold text-base">
            Esqueceu a senha?
          </a>
        </div>

        {/* Botão Entrar */}
        <div className="mt-7">
          <button
            className="w-94 h-13 bg-normal-blue text-white font-semibold size-22 rounded-xl hover:bg-normal-hover-blue hover:text-white cursor-pointer"
            type="button"
            onClick={login}
          >
            Entrar
          </button>
        </div>

        {/* Link Cadastro */}
        <div className="w-93 mt-6 flex flex-row">
          <p className="text-darker-grey">Ainda não tem uma conta?</p>
          <a href="/cadastro" className="ml-1 font-semibold text-normal-blue">
            Cadastre-se
          </a>
        </div>
      </div>

      {/* Imagem lateral */}
      <div className="flex flex-col ml-20">
        <Image src={loginImg} alt="Imagem lateral" />
      </div>
    </div>
  )
}
