"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";

export default function UserIcon() {
  const router = useRouter();
  const { perfil } = useAuth();
  const letra = perfil?.nome?.charAt(0).toUpperCase() || "?";

  return (
    <div className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full bg-dark-blue text-white font-bold text-lg"
    onClick={() => router.push('/perfil')}>
      {letra}
    </div>
  );
}
