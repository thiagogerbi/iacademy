interface JornadaHeaderProps {
  nome: string;
  descricao: string;
  imagem_url?: string;
}

export default function JornadaHeader({ nome, descricao, imagem_url }: JornadaHeaderProps) {
  return (
    <div className="text-left space-y-6">
      <h1 className="text-4xl font-extrabold text-zinc-900 mb-4">{nome}</h1>
      <p className="text-base text-zinc-600 max-w-3xl leading-relaxed">{descricao}</p>
      {imagem_url && <img src={imagem_url} className="w-28 rounded-xl" />}
    </div>
  );
}
