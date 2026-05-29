"use client";

import TopBar from "@/components/TopBar";
import ProfileHeader from "@/components/ProfileHeader";
import RankingCard from "@/components/RankingCard";
import CertificadosCard from "@/components/CertificadosCard";
import BadgesCard from "@/components/BadgesCard";
import ComunidadesCard from "@/components/ComunidadesCard";


export default function PerfilPage() {

  return (
    <>
      <TopBar />
      <main className="bg-[#f6f8fa] min-h-screen px-10 py-10 flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <ProfileHeader />
            <CertificadosCard />
            <BadgesCard />
          </div>

          {/* Coluna lateral */}
          <div className="flex flex-col gap-6">
            <RankingCard />
            <ComunidadesCard />
          </div>
        </div>
      </main>
    </>
  );
}
