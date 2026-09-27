import { MapPin, Phone, Mail } from "lucide-react";
import logoImg from "../assets/logo.png";

// Custom SVG for Instagram just to be absolutely sure it renders without import errors
const InstagramIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-black py-16 border-t border-white/5 z-30 overflow-hidden">
      {/* Subtle bottom red glow */}  
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-600/10 rounded-t-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoImg} 
              alt="O Planète Logo" 
              className="h-16 w-auto mb-6 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            />
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              L'Élégance de la Gastronomie. <br />
              Découvrez un buffet à volonté d'exception au cœur de Vénissieux.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Contact</h4>
            <div className="flex flex-col space-y-4 items-center md:items-start">
              <div className="flex items-center space-x-3 text-zinc-400">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">32 Allée des Savoies, 69200 Vénissieux, France</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">04 78 75 63 56</span>
              </div>
              <div className="flex items-center space-x-3 text-zinc-400">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <a href="mailto:restaurant.oplanete@gmail.com" className="text-sm hover:text-red-500 transition-colors">
                  restaurant.oplanete@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Socials & Quick Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Suivez-nous</h4>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://www.instagram.com/oplanete_venissieux/" 
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 p-3 rounded-full text-zinc-400 hover:text-white hover:bg-red-600 transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:-translate-y-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-2">
              <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Réserver une table</a>
              <a href="#" className="text-zinc-500 hover:text-red-500 transition-colors text-sm">Découvrir le Menu</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 tracking-wide">
          <p>© {new Date().getFullYear()} O Planète. Tous droits réservés.</p>
          <p className="mt-4 md:mt-0">Design & Développement : Prototype</p>
        </div>
      </div>
    </footer>
  );
}
