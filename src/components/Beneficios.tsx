"use client"

import { motion, Variants, useInView } from "framer-motion"
import { useRef } from "react"
import {
  FaSearch,
  FaCertificate,
  FaTasks,
  FaTrophy,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa"
import bgElement from "@/assets/bg-element.png" // IMPORTANDO A IMAGEM

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
}

export default function Beneficios(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const cards = [
    {
      icon: <FaSearch className="text-4xl text-blue-500" />,
      title: "Trilha com IA",
      desc: "Aprenda no seu ritmo com recomendações personalizadas que se adaptam ao seu progresso.",
    },
    {
      icon: <FaCertificate className="text-4xl text-blue-700" />,
      title: "Badges e Certificados",
      desc: "Conquiste badges e certificados à medida que avança nas suas trilhas e cursos.",
    },
    {
      icon: <FaTasks className="text-4xl text-blue-500" />,
      title: "Exercícios Práticos",
      desc: "Aplique o que aprendeu com atividades interativas e acompanhe seu desempenho.",
    },
    {
      icon: <FaTrophy className="text-4xl text-blue-500" />,
      title: "Ranking",
      desc: "Veja sua posição no ranking e compare seu progresso com outros alunos.",
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500" />,
      title: "Comunidade",
      desc: "Participe da comunidade, troque experiências e cresça junto com outros aprendizes.",
    },
    {
      icon: <FaClipboardList className="text-4xl text-blue-600" />,
      title: "Tracking",
      desc: "Monitore seu desempenho e visualize sua evolução em tempo real.",
    },
  ]

  return (
    <section
      className="relative w-full py-20 px-4 bg-white overflow-hidden"
      ref={ref}
    >
      {/* BG IMAGE */}
      <img
        src={bgElement.src}
        alt="bg-shape"
        className="absolute left-0 top-32 w-[550px] opacity-70 -z-10 select-none pointer-events-none"
      />

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700">
          Nossos Benefícios e Features
        </h2>
        <div className="w-40 h-px bg-gray-200 mt-4 mb-8 mx-auto" />
        <p className="mt-4 text-gray-600 leading-relaxed text-sm">
          Você pode acompanhar suas trilhas de aprendizado, realizar cursos
          interativos, acessar materiais digitais e fazer avaliações online.
          Tudo é pensado para facilitar seu progresso: veja seu desempenho em
          tempo real, interaja com professores e aprenda no seu próprio ritmo.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={i}
            className="bg-white rounded-2xl shadow-lg px-6 py-10 text-center border border-gray-100 hover:shadow-xl transition"
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition font-medium cursor-pointer">
          Saber Mais
        </button>
      </div>
    </section>
  )
}
