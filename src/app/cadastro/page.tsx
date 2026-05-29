"use client"

import Image from "next/image"
import vetor from "@/assets/cadastrovect.png"
import logo from "@/assets/logo.png"
import Input from "@/components/Input"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { UsuarioService } from "../../../service/UsuarioService"

export default function Cadastro() {
  const usuarioService = new UsuarioService()
  const router = useRouter()

  const [nome, setNome] = useState("")
  const [celular, setCelular] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function cadastrar() {
    if (!nome || !celular || !email || !senha) {
      alert("Preencha todos os campos!")
      return
    }

    try {
      const dadosUsuario = { nome, celular, email, senha }
      const response = await usuarioService.cadastrarUsuario(dadosUsuario)

      console.log("Usuário cadastrado:", response.data)
      router.push("/inicio")
    } catch (error: unknown) {
      console.error("Erro ao cadastrar usuário:", error)
      if (error.response) {
        console.log("Erro response.data:", error.response.data)
        console.log("Status:", error.response.status)
      } else {
        console.log("Erro desconhecido:", error.message)
      }
      alert("Erro ao cadastrar.")
    }
  }

  return (
    <>
      {/* Logo no topo, como estava */}
      <div className="m-10">
        <Image src={logo} alt="" />
      </div>

      <div className="flex flex-row p-5 m-10 h-170">
        <Image src={vetor} alt="" />

        <form className="ml-70">
          {/* Crie sua conta acima do primeiro input */}
          <p className="mb-6 text-4xl text-gray-800 font-semibold">
            Crie <span className="text-blue-800 font-semibold">sua conta</span>
          </p>

          <Input
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input
            label="Celular"
            placeholder="Digite seu numero de celular"
            type="text"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
          />

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

          <button
            className="mt-10 w-94 h-13 bg-normal-blue text-white font-semibold size-22 rounded-xl hover:bg-normal-hover-blue hover:text-white cursor-pointer"
            type="button"
            onClick={cadastrar}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  )
}
