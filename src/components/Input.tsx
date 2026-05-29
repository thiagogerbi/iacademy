
import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // Alteração: readOnly opcional e do tipo boolean
  readOnly?: boolean; 
  disabled?: boolean; // Adicionei disabled para maior controle, como no meu esboço
}

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  readOnly = false, // Valor padrão como false
  disabled = false,
}: InputProps) {
  
  // Classes base do seu input, aprimoradas com classes Tailwind para design e responsividade.
  const baseClasses = "w-94 h-14 border-1 border-normal-grey rounded-xl placeholder:opacity-75 pl-2";

  // Classes de foco e cor
  const focusClasses = "focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none";

  // Classes para campo somente leitura/desabilitado
  const readonlyClasses = (readOnly || disabled) 
    ? "bg-gray-100 cursor-not-allowed text-gray-500" 
    : focusClasses;

  return (
    <div className="mt-8 flex flex-col text-darker-grey">
      <label className="mb-2 ml-1 font-medium">
        {label}
      </label>
      <input
        // Aplicando as classes aprimoradas
        className={`${baseClasses} ${readonlyClasses}`} 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
      />
    </div>
  );
}
