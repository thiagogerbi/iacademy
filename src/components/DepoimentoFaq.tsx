"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import bolinhas from "@/assets/bolinhas.png" // <-- IMPORTANDO A IMAGEM

// =====================================
//          DADOS DAS AVALIAÇÕES
// =====================================
const avaliacoes = [
  {
    texto:
      "“Aprender Java nunca foi tão fácil. A plataforma me guiou passo a passo!”",
    nome: "Thiago Gerbi",
    cargo: "Aluno na FATEC São Caetano do Sul",
  },
  {
    texto: "“Os exercícios práticos realmente me ajudaram a fixar o conteúdo.”",
    nome: "Maria Silva",
    cargo: "Aluna da FATEC Santo André",
  },
  {
    texto:
      "“A comunidade é muito engajada, o que facilita o aprendizado colaborativo.”",
    nome: "Carlos Souza",
    cargo: "Aluno da ETEC Jorge Street",
  },
]

export default function DepoimentoFaq() {
  const [index, setIndex] = useState(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  const faqs = [
    {
      pergunta: "Como faço meu cadastro?",
      resposta:
        "Para fazer seu cadastro, clique em “Comece Agora” e preencha os dados pessoais. Depois clique em finalizar e pronto: sua conta foi criada.",
    },
    {
      pergunta: "Como funcionam as trilhas?",
      resposta: "As trilhas são organizadas em...",
    },
    {
      pergunta: "Como funciona a IA?",
      resposta: "Nossa IA utiliza modelos avançados para...",
    },
    {
      pergunta: "Como funciona a IA?",
      resposta: "Item duplicado igual no design.",
    },
    {
      pergunta: "Como funcionam os módulos?",
      resposta: "Os módulos são estruturados em...",
    },
  ]

  // AUTO CARROSSEL
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % avaliacoes.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goPrev = () =>
    setIndex((prev) => (prev - 1 + avaliacoes.length) % avaliacoes.length)

  const goNext = () => setIndex((prev) => (prev + 1) % avaliacoes.length)

  return (
    <section className="bg-[#0F1B48] w-full flex flex-col items-center pb-32 pt-20">
      {/* ======================================== */}
      {/*          CARROSSEL DE COMENTÁRIOS        */}
      {/* ======================================== */}
      <div className="relative w-[90%] md:w-[70%]">
        {/* BOLINHAS ATRÁS DO CARD */}
        <motion.img
          src={bolinhas.src}
          alt="bolinhas"
          className="absolute -top-10 -left-10 w-36 opacity-70 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* BOLINHAS EM CIMA DO CARD */}
        <motion.img
          src={bolinhas.src}
          alt="bolinhas"
          className="absolute -bottom-10 -right-10 w-40 opacity-60 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <div className="bg-gradient-to-r from-[#4da0ff] to-[#89b6ff] rounded-xl p-10 text-white relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-8 text-center">
            O que nossos usuários dizem?
          </h2>

          {/* CAIXA MAIOR DE COMENTÁRIOS */}
          <div className="relative flex justify-center items-center min-h-[260px] md:min-h-[300px] px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5 }}
                className="text-center px-10 py-10"
              >
                <p className="italic text-2xl mb-8 leading-relaxed">
                  {avaliacoes[index].texto}
                </p>

                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-white/40 mb-4"></div>
                  <p className="font-bold text-lg">{avaliacoes[index].nome}</p>
                  <p className="text-sm opacity-90">
                    {avaliacoes[index].cargo}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* SETAS */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition cursor-pointer"
          >
            <ChevronRight />
          </button>

          {/* PONTOS */}
          <div className="flex justify-center mt-6 gap-2">
            {avaliacoes.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================== */}
      {/*                FAQ GORDINHO              */}
      {/* ======================================== */}
      <h2 className="text-white text-4xl font-bold mt-24 mb-6">Dúvidas?</h2>

      <p className="text-blue-200 text-center w-[80%] md:w-[60%] mb-10">
        Aqui estão as principais perguntas frequentes sobre a plataforma. Caso
        sua dúvida não esteja abaixo, entre em contato conosco!
      </p>

      <div className="w-[90%] md:w-[70%] flex flex-col gap-8">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            onClick={() => setFaqOpen(faqOpen === i ? null : i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.25)",
            }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="
              bg-[#112867]
              text-white
              px-10
              py-10
              rounded-3xl
              cursor-pointer
              shadow-xl
            "
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-xl">{faq.pergunta}</h3>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  faqOpen === i ? "rotate-180" : ""
                }`}
              />
            </div>

            <AnimatePresence>
              {faqOpen === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-blue-200 text-base mt-4 overflow-hidden leading-relaxed"
                >
                  {faq.resposta}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
