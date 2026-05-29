"use client";

import { useMemo, useState } from "react";
import FiltroRanking from "./FiltroRanking";
import Paginacao from "./Paginacao";
import RankingTable from "./RankingTable";

export default function RankingAlunos({ data }: { data: unknown[] }) {
  const [pagina, setPagina] = useState(1);
  const [busca, setBusca] = useState("");

  const ITENS_POR_PAGINA = 10;

  const filtrados = useMemo(() => {
    return data.filter((item) =>
      (item.nome + item.instituicao)
        .toLowerCase()
        .includes(busca.toLowerCase())
    );
  }, [data, busca]);

  const totalPaginas = Math.ceil(filtrados.length / ITENS_POR_PAGINA);
  const inicio = (pagina - 1) * ITENS_POR_PAGINA;
  const exibidos = filtrados.slice(inicio, inicio + ITENS_POR_PAGINA);

  return (
    <>
      <FiltroRanking value={busca} onChange={setBusca} />

      <RankingTable data={exibidos} />

      <Paginacao pagina={pagina} totalPaginas={totalPaginas} mudarPagina={setPagina} />
    </>
  );
}
