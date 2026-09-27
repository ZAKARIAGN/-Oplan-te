import sushiImg from "../assets/buffet/sushi.jpg";
import seafoodImg from "../assets/buffet/seafood.jpg";
import grillImg from "../assets/buffet/grill.jpg";
import dessertImg from "../assets/buffet/dessert.jpg";

const BUFFET_CATEGORIES = [
  {
    title: "SUSHI",
    image: sushiImg,
    action: "Découvrez"
  },
  {
    title: "FRUITS DE MER",
    image: seafoodImg,
    action: "Découvrez"
  },
  {
    title: "WOK & GRILLADES",
    image: grillImg,
    action: "Découvrez"
  },
  {
    title: "DESSERTS",
    image: dessertImg,
    action: "Découvrez"
  }
];
import darkWood from "../assets/dark_wood.jpg";

export default function Buffet() {
  return (
    <div 
      id="buffet"
      className="relative w-full px-6 py-24 sm:py-32 bg-cover bg-center shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/5"
      style={{ backgroundImage: `url(${darkWood})` }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      <div className="mx-auto max-w-7xl flex flex-col items-center text-center relative z-10">
        <h2 className="mb-4 text-sm font-bold tracking-widest text-red-500 uppercase">
          NOTRE BUFFET
        </h2>
        <h3 className="mb-16 text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif italic">
          Une grande variété de saveurs
        </h3>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BUFFET_CATEGORIES.map((cat, idx) => (
            <div 
              key={idx}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                {/* Gradient overlay to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>
              
              {/* Content overlayed on bottom of image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-center justify-end z-10">
                <h4 className="mb-3 text-2xl font-bold tracking-widest text-white uppercase">
                  {cat.title}
                </h4>
                <div className="flex items-center space-x-2 text-red-400 group-hover:text-red-300 transition-colors">
                  <span className="text-sm font-semibold tracking-widest uppercase">
                    {cat.action}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
