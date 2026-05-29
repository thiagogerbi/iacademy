"use client";

export default function CertificadosCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-zinc-800 mb-4">Certificados</h3>
      <div className="flex items-center gap-6">
        <img
          src="https://img.freepik.com/free-vector/certificate-template-blue-modern-design_1017-12753.jpg"
          alt="Certificado"
          className="w-40 h-28 rounded-md object-cover border"
        />
        <div>
          <p className="text-zinc-700 font-medium">
            Certificado de conclusão: <br />
            <span className="text-normal-blue font-semibold">Trilha Python do Básico ao Avançado</span>
          </p>
        </div>
      </div>
    </div>
  );
}
