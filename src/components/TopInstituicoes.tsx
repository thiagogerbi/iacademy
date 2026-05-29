export default function TopInstituicoes() {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 text-center">
        <h2 className="text-lg font-bold text-normal-blue mb-4">
          Top Instituições
        </h2>
        <div className="flex justify-center items-end gap-4">
          <div className="text-sm text-zinc-500">
            <p className="font-bold text-normal-blue">#2</p>
            <p>ETEC</p>
            <p className="text-xs">Ourinhos</p>
          </div>
          <div className="text-sm text-zinc-500">
            <p className="font-bold text-normal-blue text-lg">#1</p>
            <p>FATEC</p>
            <p className="text-xs">São Caetano</p>
          </div>
          <div className="text-sm text-zinc-500">
            <p className="font-bold text-normal-blue">#3</p>
            <p>FATEC</p>
            <p className="text-xs">Santos</p>
          </div>
        </div>
        <a href="/ranking" className="text-xs text-normal-blue mt-3 cursor-pointer hover:underline">
          Ver ranking completo
        </a>
      </div>
    );
  }
  