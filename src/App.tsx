import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import SocialProof from './components/SocialProof';
import MediaSection from './components/MediaSection';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PracticeAreas />
      <SocialProof />
      <About />
      <MediaSection />
      <Footer />
    </main>
  );
}
