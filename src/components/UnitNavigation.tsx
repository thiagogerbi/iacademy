interface NavProps {
    onPrevious: () => void;
    onNext: () => void;
  }
  
  export default function UnitNavigation({ onPrevious, onNext }: NavProps) {
    return (
      <div className="flex justify-between mt-8">
        <button
          onClick={onPrevious}
          className="px-6 py-3 rounded-lg bg-zinc-200 hover:bg-zinc-300 font-medium"
        >
          ← Anterior
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium"
        >
          Próxima →
        </button>
      </div>
    );
  }
  