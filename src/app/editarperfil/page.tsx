"use client"

import React, { useState, ChangeEvent, FormEvent } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import logo from "@/assets/logo.png"
import {
  User,
  Calendar,
  Book,
  MapPin,
  Map,
  Mail,
  Home,
  BarChart2,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react"

const primaryBlue = "#316BFF"

interface FormData {
  nome: string
  idade: string
  curso: string
  cidade: string
  estado: string
  email: string
}

export default function PerfilPage(): JSX.Element {
  const [form, setForm] = useState<FormData>({
    nome: "",
    idade: "",
    curso: "",
    cidade: "",
    estado: "",
    email: "",
  })

  const [sidebarOpen, setSidebarOpen] = useState(true)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    alert("Dados salvos (simulado). Veja o console.")
    console.log(form)
  }

  return (
    <main
      className="min-h-screen w-full font-sans text-gray-800"
      style={{ backgroundColor: "#f3f3f4" }}
    >
      {/* Top bar */}
      <header className="w-full bg-white flex items-center justify-between px-8 py-4 shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src={logo} alt="Minha Logo" width={150} height={50} />
          </div>

          <nav className="hidden md:flex items-center gap-4 ml-6 text-sm">
            <a
              className="px-3 py-1 rounded-md text-[#316BFF] bg-[#e9f0ff]"
              href="#"
            >
              Início
            </a>
            <a className="px-3 py-1 rounded-md hover:text-[#316BFF]" href="#">
              Trilhas
            </a>
            <a className="px-3 py-1 rounded-md hover:text-[#316BFF]" href="#">
              Rankings
            </a>
            <a className="px-3 py-1 rounded-md hover:text-[#316BFF]" href="#">
              Jornada
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Input de busca moderno */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Buscar"
              className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#316BFF] text-sm transition"
            />
            <Search
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="avatar"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </header>

      {/* Layout */}
      <div className="flex relative">
        {/* Sidebar */}
        <aside
          className={`bg-white h-screen border-r border-gray-100 transition-all duration-300 ease-in-out relative flex flex-col`}
          style={{ width: sidebarOpen ? 240 : 64 }}
        >
          {/* Botão toggle da sidebar */}
          <div className="flex justify-center mt-4 mb-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="cursor-pointer w-10 h-10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#316BFF] bg-gray-100 border border-gray-300 rounded-full shadow transition"
            >
              {sidebarOpen ? (
                <ChevronLeft size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </motion.button>
          </div>

          {/* Área do Aluno */}
          <div className="flex items-center gap-3 p-6">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{
                background: "linear-gradient(135deg,#5b6cff 0%, #2ea1ff 100%)",
              }}
            >
              <User size={18} />
            </div>
            {sidebarOpen && (
              <span className="text-base font-semibold">Área do Aluno</span>
            )}
          </div>

          {/* Menu */}
          <nav className="flex flex-col gap-4 text-sm text-gray-600 border-t border-b border-gray-100 py-4 mt-2 px-2">
            <a
              className="flex items-center gap-3 p-2 rounded hover:bg-[#e6f0ff] hover:text-[#316BFF] transition"
              href="#"
            >
              <Home size={20} />
              {sidebarOpen && <span>Início</span>}
            </a>
            <a
              className="flex items-center gap-3 p-2 rounded hover:bg-[#e6f0ff] hover:text-[#316BFF] transition"
              href="#"
            >
              <BarChart2 size={20} />
              {sidebarOpen && <span>Informações Pessoais</span>}
            </a>
            <a
              className="flex items-center gap-3 p-2 rounded hover:bg-[#e6f0ff] hover:text-[#316BFF] transition"
              href="#"
            >
              <Zap size={20} />
              {sidebarOpen && <span>Informações Acadêmicas</span>}
            </a>
            <a
              className="flex items-center gap-3 p-2 rounded hover:bg-[#e6f0ff] hover:text-[#316BFF] transition"
              href="#"
            >
              <Users size={20} />
              {sidebarOpen && <span>Jornada</span>}
            </a>
          </nav>
        </aside>

        {/* Content */}
        <section className="flex-1 p-10" style={{ backgroundColor: "#f3f3f4" }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-2xl font-bold text-[#1f2a37]">
                Editar Perfil
              </h1>
              <p className="text-sm text-gray-500">
                / Edite seu nome, informações pessoais, etc
              </p>
            </div>

            <div
              className="h-[3px] w-24 rounded-full mb-10"
              style={{ backgroundColor: primaryBlue }}
            />

            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-10 mb-8">
                <div className="w-36 h-36 rounded-full bg-gray-200" />
                <div className="flex items-center gap-4">
                  {/* Botão Trocar Imagem */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 6px 12px rgba(49,107,255,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full px-8 py-3 text-white font-medium text-sm shadow-md cursor-pointer"
                    style={{ background: primaryBlue }}
                  >
                    Trocar Imagem
                  </motion.button>

                  {/* Botão Excluir */}
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#f9f9ff",
                      boxShadow: "0px 4px 10px rgba(49,107,255,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full px-8 py-3 text-sm font-medium border-2 cursor-pointer transition"
                    style={{ borderColor: primaryBlue, color: primaryBlue }}
                  >
                    Excluir
                  </motion.button>
                </div>
              </div>

              <div className="border-t border-gray-300 mb-6" />

              <h2 className="text-xl font-semibold mb-4">Editar Detalhes</h2>

              <div
                className="p-8 rounded-xl mb-8"
                style={{
                  border: `3px solid ${primaryBlue}`,
                  background: "transparent",
                }}
              >
                <form onSubmit={handleSubmit}>
                  {/* Inputs */}
                  <div className="mb-6 flex flex-col">
                    <label className="flex items-center gap-2 text-sm mb-2 text-gray-700">
                      <User size={16} /> Nome
                    </label>
                    <input
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Digite seu nome"
                      className="w-full rounded-lg px-4 py-4 text-sm bg-transparent"
                      style={{
                        border: `2px solid ${primaryBlue}`,
                        borderRadius: 12,
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        name: "idade",
                        label: "Idade",
                        icon: <Calendar size={16} />,
                      },
                      {
                        name: "curso",
                        label: "Curso",
                        icon: <Book size={16} />,
                      },
                      {
                        name: "cidade",
                        label: "Cidade",
                        icon: <MapPin size={16} />,
                      },
                      {
                        name: "estado",
                        label: "Estado",
                        icon: <Map size={16} />,
                      },
                    ].map(({ name, label, icon }) => (
                      <div key={name}>
                        <label className="flex items-center gap-2 text-sm mb-2 text-gray-700">
                          {icon} {label}
                        </label>
                        <input
                          name={name}
                          value={(form as unknown)[name]}
                          onChange={handleChange}
                          placeholder={`Digite seu ${label.toLowerCase()}`}
                          className="w-full rounded-lg px-4 py-4 text-sm bg-transparent"
                          style={{
                            border: `2px solid ${primaryBlue}`,
                            borderRadius: 12,
                          }}
                        />
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <label className="flex items-center gap-2 text-sm mb-2 text-gray-700">
                        <Mail size={16} /> E-mail
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Digite seu e-mail"
                        className="w-full rounded-lg px-4 py-4 text-sm bg-transparent"
                        style={{
                          border: `2px solid ${primaryBlue}`,
                          borderRadius: 12,
                        }}
                      />
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="flex justify-end gap-6 mt-10 items-center">
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#f9f9ff",
                        boxShadow: "0px 4px 10px rgba(49,107,255,0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="px-6 py-3 rounded-full text-sm font-medium border-2 cursor-pointer transition"
                      style={{ borderColor: primaryBlue, color: primaryBlue }}
                    >
                      Cancelar
                    </motion.button>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 6px 12px rgba(49,107,255,0.4)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-8 py-3 rounded-full text-sm font-medium text-white shadow-lg cursor-pointer"
                      style={{ background: primaryBlue }}
                    >
                      Salvar
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
