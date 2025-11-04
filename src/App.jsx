import Header from './components/Header';
import Hero3D from './components/Hero3D';
import GalleryMarquee from './components/GalleryMarquee';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#0b0b10] to-black text-white">
      <Header />
      <Hero3D />
      <GalleryMarquee />
      <Footer />
    </div>
  );
}

export default App;
