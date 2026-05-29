"use client"

import { motion } from "framer-motion"
import IllustrationGirl from "@/assets/svg-footer.png"
import LogoCPS from "@/assets/cps.png"

export default function CallToActionSection() {
  return (
    <section className="w-full py-32 relative overflow-visible">
      {/* 🌈 MESH GRADIENT DE FUNDO */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.45),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.35),transparent_45%),radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.35),transparent_50%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-0 relative">
        {/* CARD PRINCIPAL COM ANIMAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="
            relative border border-blue-300/50
            rounded-2xl p-20
            grid grid-cols-1 lg:grid-cols-2 
            items-center gap-24
            bg-white/40 backdrop-blur-xl
            shadow-[0_8px_40px_rgba(0,0,0,0.07)]
            transition-all
          "
        >
          {/* ILUSTRAÇÃO */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <motion.img
              src={IllustrationGirl.src}
              alt="Pessoa estudando"
              className="h-[420px] object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* TEXTOS */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 leading-snug text-gray-900">
              Pronto para trilhar seu <br />
              caminho na programação?
            </h2>

            <motion.div
              className="w-24 h-[4px] bg-blue-500 mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            />

            <p className="text-gray-700 mb-14 leading-relaxed text-lg">
              Explore um mundo de possibilidades e conhecimento no universo da
              programação. Comece gratuitamente e evolua com a iAcademy!
            </p>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.2 }}
              className="
                bg-blue-600 hover:bg-blue-700 
                text-white px-12 py-4 
                rounded-full text-lg font-medium 
                shadow-md transition cursor-pointer
              "
            >
              Começar Trilha
            </motion.button>
          </motion.div>
        </motion.div>

        {/* LOGO INFERIOR COM ANIMAÇÃO */}
        <motion.div
          className="flex items-center justify-center mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <motion.img
            src={LogoCPS.src}
            alt="Centro Paula Souza"
            className="h-26 object-contain"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
