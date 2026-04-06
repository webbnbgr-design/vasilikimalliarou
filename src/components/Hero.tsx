import { motion } from 'motion/react';
import { CONTENT } from '../constants';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
          alt="Classical Architecture Columns"
          className="w-full h-full object-cover opacity-20 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-950/90" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-[1px] w-8 md:w-16 bg-accent-500" />
              <span className="text-accent-400 uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold">
                ESTABLISHED EXCELLENCE
              </span>
              <div className="h-[1px] w-8 md:w-16 bg-accent-500" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[1.05] mb-10 tracking-tight">
              {CONTENT.hero.title}
            </h1>
            
            <p className="text-gray-300 text-lg md:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto italic">
              {CONTENT.hero.subtitle}
            </p>

            <div className="flex flex-col items-center space-y-10">
              <a 
                href="#practice-areas"
                className="group relative px-12 py-5 overflow-hidden bg-transparent border border-accent-500 text-white font-bold tracking-[0.2em] transition-all hover:text-brand-950"
              >
                <div className="absolute inset-0 w-0 bg-accent-500 transition-all duration-300 ease-out group-hover:w-full -z-10" />
                ΤΟΜΕΙΣ ΠΡΑΚΤΙΚΗΣ
              </a>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} className="text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white font-display text-xl tracking-widest">328+ ΚΡΙΤΙΚΕΣ</span>
                  <div className="h-[1px] w-12 bg-accent-800 mt-2" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
