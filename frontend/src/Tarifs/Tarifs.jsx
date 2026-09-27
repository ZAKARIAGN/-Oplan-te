export default function Tarifs() {
  return (
    <div className="relative w-full px-6 py-24 sm:py-32 bg-black overflow-hidden z-20">
      {/* Decorative Red Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-5xl flex flex-col items-center text-center z-10">
        <h2 className="mb-4 text-sm font-bold tracking-widest text-red-500 uppercase">
          NOS TARIFS
        </h2>
        <h3 className="mb-16 text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif italic">
          Une formule adaptée à tous
        </h3>

        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Déjeuner */}
          <div className="flex flex-col justify-center items-center p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2">
            <h4 className="mb-6 text-2xl font-bold tracking-widest text-white uppercase">Déjeuner</h4>
            <div className="text-zinc-400 font-medium tracking-widest uppercase text-xs mb-2">À partir de</div>
            <div className="text-6xl font-extrabold text-white flex items-start justify-center">
              17,90
              <span className="text-2xl text-red-500 ml-1 mt-1">€</span>
            </div>
          </div>

          {/* Dîner */}
          <div className="flex flex-col justify-center items-center p-10 rounded-[2rem] border border-red-500/50 bg-red-950/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] relative">
            <div className="absolute -top-4 bg-red-600 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
              Le plus populaire
            </div>
            <h4 className="mb-6 text-2xl font-bold tracking-widest text-white uppercase">Dîner</h4>
            <div className="text-red-400 font-medium tracking-widest uppercase text-xs mb-2">À partir de</div>
            <div className="text-6xl font-extrabold text-white flex items-start justify-center drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
              24,90
              <span className="text-2xl text-red-500 ml-1 mt-1">€</span>
            </div>
          </div>

          {/* Enfant */}
          <div className="flex flex-col justify-center items-center p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2">
            <h4 className="mb-6 text-2xl font-bold tracking-widest text-white uppercase">Enfant</h4>
            <div className="text-zinc-400 font-medium tracking-widest uppercase text-xs mb-2">À partir de</div>
            <div className="text-6xl font-extrabold text-white flex items-start justify-center">
              5,00
              <span className="text-2xl text-red-500 ml-1 mt-1">€</span>
            </div>
            <div className="mt-4 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-zinc-300">
              Moins de 5 ans
            </div>
          </div>
        </div>

        <button className="rounded-full bg-white text-black px-12 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-1">
          VOIR TOUS LES TARIFS
        </button>
      </div>
    </div>
  );
}
