"use client";
import { useState } from "react";

interface DynamicSection {
    section: {
        id: string;
        label: string;
        content: React.ReactNode;
    }[];
}

export default function Section({ section }: DynamicSection){
    const [activeSection, setActiveSection] = useState(section[0]?.id || "");
    
    return (
        <div className="mt-8 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          {/* Cabeçalho de abas */}
          <div className="flex gap-6 border-b border-gray-200 mb-4">
            {section.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`pb-2 font-medium transition-all ${
                  activeSection === sec.id
                    ? "text-normal-blue border-b-2 border-normal-blue"
                    : "text-normal-grey hover:text-blue-600"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
    
          {/* Conteúdo dinâmico */}
          <div className="mt-4">
            {section.map(
              (sec) =>
                sec.id === activeSection && (
                  <div key={sec.id} className="text-gray-700 leading-relaxed">
                    {sec.content}
                  </div>
                )
            )}
          </div>
        </div>
      );
}