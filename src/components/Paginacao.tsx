"use client";

export default function Paginacao({
  pagina,
  totalPaginas,
  mudarPagina,
}: {
  pagina: number;
  totalPaginas: number;
  mudarPagina: (p: number) => void;
}) {
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <button
        className="px-3 py-1 border rounded-lg bg-normal-blue text-white hover:bg-dark-blue disabled:opacity-40 cursor-pointer"
        onClick={() => mudarPagina(pagina - 1)}
        disabled={pagina === 1}
      >
        Anterior
      </button>

      <span className="text-sm text-zinc-600">
        Página {pagina} de {totalPaginas}
      </span>

      <button
        className="px-3 py-1 border rounded-lg bg-normal-blue text-white hover:bg-dark-blue disabled:opacity-40 cursor-pointer"
        onClick={() => mudarPagina(pagina + 1)}
        disabled={pagina === totalPaginas}
      >
        Próxima
      </button>
    </div>
  );
}
