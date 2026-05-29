interface UnitContentProps {
    content: string;
  }
  
  export default function UnitContent({ content }: UnitContentProps) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-md leading-relaxed text-zinc-800 border border-zinc-200">
        <p>{content}</p>
      </div>
    );
  }
  