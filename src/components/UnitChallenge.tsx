interface ChallengeProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
  }
  
  export default function UnitChallenge({ question, options, onAnswer }: ChallengeProps) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 shadow-md">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Desafio</h3>
        <p className="mb-6 text-blue-800">{question}</p>
        <div className="space-y-3">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(opt)}
              className="w-full text-left px-4 py-3 bg-white border border-blue-200 rounded-lg hover:bg-blue-100 transition"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }
  