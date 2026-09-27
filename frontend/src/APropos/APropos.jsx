import aboutImg from "../assets/about.jpg";

export default function APropos() {
  return (
    <div id="apropos" className="relative w-full bg-black py-24 sm:py-32 overflow-hidden z-20 border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="mb-4 text-sm font-bold tracking-widest text-red-500 uppercase">
            À PROPOS DE NOUS
          </h2>
          <h3 className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif italic">
            L'Histoire d'O Planète
          </h3>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Bienvenue dans notre buffet asiatique! Savourez un large choix de plats, des sushis frais aux nouilles savoureuses, en passant par de délicieux dim sums. Ne manquez pas l'occasion de découvrir notre sélection et de vous régaler !
          </p>
          <button className="rounded-full bg-red-600 px-8 py-4 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-1">
            En savoir plus
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-[2rem] transition-colors duration-500 z-20 pointer-events-none" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <img 
              src={aboutImg} 
              alt="Intérieur du restaurant O Planète" 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            {/* Subtle dark vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
