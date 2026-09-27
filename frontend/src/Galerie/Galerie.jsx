import img1 from "../assets/galeries/img1.jpg";
import img2 from "../assets/galeries/img2.jpg";
import img3 from "../assets/galeries/img3.jpg";
import img4 from "../assets/galeries/img4.jpg";
import img5 from "../assets/galeries/img5.jpg";
import img6 from "../assets/galeries/img6.jpg";
import img7 from "../assets/galeries/img7.jpg";
import img8 from "../assets/galeries/img8.jpg";

const GALLERY_IMAGES = [
  img1, img2, img3, img4, img5, img6, img7, img8
];

export default function Galerie() {
  return (
    <div id="galerie" className="relative w-full px-4 py-24 sm:py-32 bg-zinc-950 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden">
      {/* Decorative subtle texture/glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-red-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-[10%] -right-[10%] w-[400px] h-[400px] bg-red-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl flex flex-col items-center text-center z-10">
        <h2 className="mb-4 text-sm font-bold tracking-widest text-red-500 uppercase">
          NOTRE GALERIE
        </h2>
        <h3 className="mb-16 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          L'Ambiance O Planète
        </h3>

        <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
          {GALLERY_IMAGES.map((img, index) => {
            // Dynamic classes to create an elegant masonry-style grid
            let spanClass = "col-span-1 row-span-1";
            if (index === 0) spanClass = "col-span-2 row-span-2"; // Large feature block
            else if (index === 4) spanClass = "col-span-2 row-span-1"; // Wide block
            else if (index === 5) spanClass = "col-span-1 row-span-2"; // Tall block
            
            return (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-3xl bg-black ${spanClass} shadow-xl hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-500`}
              >
                {/* Initial moody dark overlay that disappears on hover to reveal the image fully */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                
                {/* Red subtle border overlay that appears on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-3xl transition-colors duration-500 z-20 pointer-events-none" />
                
                <img 
                  src={img} 
                  alt={`O Planète Galerie ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
