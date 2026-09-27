import { MapPin, Phone, Globe, Clock } from "lucide-react";

export default function Info() {
  return (
    <div id="contact" className="relative w-full bg-black py-24 sm:py-32 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-30 overflow-hidden">
      {/* Decorative diagonal red glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950/80 to-red-950/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center z-10">
        
        {/* Info text section */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-10">
          <div>
            <h2 className="mb-2 text-sm font-bold tracking-widest text-red-500 uppercase">
              NOUS TROUVER
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Informations Pratiques
            </h3>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="flex items-start space-x-5 group">
              <div className="mt-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border border-red-500/30 bg-transparent text-red-500 transition-all duration-500 group-hover:border-red-500 group-hover:bg-red-600/20 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Adresse</h4>
                <p className="text-zinc-400 leading-relaxed text-sm">32 All. des Savoies<br/>69200 Vénissieux, France</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 group">
              <div className="mt-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border border-red-500/30 bg-transparent text-red-500 transition-all duration-500 group-hover:border-red-500 group-hover:bg-red-600/20 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Téléphone</h4>
                <p className="text-zinc-400 leading-relaxed text-sm">+33 4 78 75 63 56</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 group">
              <div className="mt-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border border-red-500/30 bg-transparent text-red-500 transition-all duration-500 group-hover:border-red-500 group-hover:bg-red-600/20 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Site Web</h4>
                <a href="https://www.restaurantoplanete.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-red-400 transition-colors text-sm">
                  restaurantoplanete.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-5 group">
              <div className="mt-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full border border-red-500/30 bg-transparent text-red-500 transition-all duration-500 group-hover:border-red-500 group-hover:bg-red-600/20 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 tracking-wide">Horaires</h4>
                <p className="text-zinc-400 leading-relaxed text-sm">Ouvert tous les jours<br/>Midi et Soir</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="w-full lg:w-2/3 h-[400px] sm:h-[500px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative group bg-zinc-900">
          {/* Subtle red hover border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-[2rem] transition-colors duration-500 z-20 pointer-events-none" />
          
          {/* Google Maps iFrame */}
          <iframe 
            src="https://www.google.com/maps?q=45.71676577320921,4.860374923168218&hl=fr&z=15&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full invert hue-rotate-180 contrast-90 opacity-80 mix-blend-screen"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
