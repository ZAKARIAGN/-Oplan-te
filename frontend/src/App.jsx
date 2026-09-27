import Navbar from "./NavBar/Navbar";
import Hero from "./Hero/Hero";
import Buffet from "./Buffet/Buffet";
import APropos from "./APropos/APropos";
import Galerie from "./Galerie/Galerie";
import Info from "./Info/Info";
import Footer from "./Footer/Footer";
import heroImg from "./assets/hero.jpg";

function App() {
  return (
    <div 
      className="relative min-h-screen bg-black bg-cover bg-center bg-fixed bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Global dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none fixed" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Buffet />
        <APropos />
        <Galerie />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
