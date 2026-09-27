export default function Hero() {
  return (
    <div id="accueil" className="relative flex min-h-screen w-full items-center justify-center pt-20">
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
        <span className="mb-4 rounded-full border border-red-600/50 bg-red-600/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-red-400 backdrop-blur-md uppercase">
          Découvrez O Planète
        </span>
        <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl font-serif italic">
          L'Élégance de la <br />
          <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            Gastronomie
          </span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-zinc-300 sm:text-xl leading-relaxed">
          Découvrez une expérience culinaire inoubliable au cœur de la ville. 
          Des saveurs authentiques, une ambiance raffinée et un service d'exception.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto rounded-full bg-red-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-red-700 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] hover:-translate-y-1">
            Réserver une table
          </button>
          <button className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30 hover:-translate-y-1">
            Découvrir le menu
          </button>
        </div>
      </div>
    </div>
  );
}
