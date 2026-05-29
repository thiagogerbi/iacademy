"use client";
import { useState } from "react";

export default function RankingTabs({ onTabChange }: { onTabChange: (t: string) => void }) {
  const [tab, setTab] = useState("alunos");

  const handleTabChange = (novaTab: string) => {
    setTab(novaTab);
    onTabChange(novaTab);
  };

  return (
    <div className="flex gap-4 border-b border-zinc-200 mb-6">
      {["alunos", "faculdades"].map((t) => (
        <button
          key={t}
          onClick={() => handleTabChange(t)}
          className={`pb-2 text-lg font-semibold capitalize cursor-pointer ${
            tab === t
              ? "text-normal-blue border-b-4 border-normal-blue"
              : "text-zinc-500 hover:text-normal-blue"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
