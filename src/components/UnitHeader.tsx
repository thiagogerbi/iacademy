import { BookOpen } from "lucide-react";

interface UnitHeaderProps {
  title: string;
  subtitle: string;
  duration: string;
}

export default function UnitHeader({ title, subtitle, duration }: UnitHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-normal-blue to-dark-blue text-white w-4xl rounded-2xl p-8 shadow-md">
      <div className="flex items-center gap-3">
        <BookOpen className="w-8 h-8" />
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <p className="mt-2 text-lg opacity-90">{subtitle}</p>
      <p className="mt-2 text-sm opacity-75">⏱ {duration}</p>
    </div>
  );
}
