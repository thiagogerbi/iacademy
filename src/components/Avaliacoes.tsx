import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react"; // Import useRef

type Avaliacao = {
  texto: string;
  nome: string;
  cargo: string;
  avatarUrl?: string; // pode ser link ou base64, ou deixar vazio para avatar padrão
};

const avaliacoes: Avaliacao[] = [
  {
    texto: '“Aprender Java nunca foi tão fácil. A plataforma me guiou passo a passo!”',
    nome: 'Thiago Gerbi',
    cargo: 'Aluno na FATEC São Caetano do Sul',
    avatarUrl: '', // sem imagem, usa padrão cinza
  },
  {
    texto: '“Os exercícios práticos realmente me ajudaram a fixar o conteúdo.”',
    nome: 'Maria Silva',
    cargo: 'Aluno da FATEC Santo André',
  },
  {
    texto: '“A comunidade é muito engajada, o que facilita o aprendizado colaborativo.”',
    nome: 'Carlos Souza',
    cargo: 'Aluno da ETEC Jorge Street',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function ComentariosAvaliacoes(): JSX.Element {
  // *** CHANGE MADE HERE: Ref type changed to HTMLSectionElement ***
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-[#192759] py-16 px-6 mx-auto mt-16" ref={ref}>
      <h2 className="text-white text-4xl font-bold mb-12 text-center">
        Comentários e Avaliações
      </h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {avaliacoes.map(({ texto, nome, cargo, avatarUrl }, i) => (
          <motion.div
            key={i}
            className="bg-[#3f56a1] rounded-lg p-6 shadow-lg text-white flex flex-col"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className="mb-6 text-lg font-semibold leading-relaxed italic">{texto}</p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt={`${nome} avatar`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-400" />
                )}
              </div>
              <div>
                <p className="font-semibold text-white">{nome}</p>
                <p className="text-sm text-blue-300">{cargo}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}