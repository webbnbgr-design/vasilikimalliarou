import { motion } from 'motion/react';
import { CONTENT } from '../constants';
import { Star, Quote } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="relative py-24 bg-brand-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-[20rem] font-serif select-none">"</div>
        <div className="absolute bottom-10 right-10 text-[20rem] font-serif select-none">"</div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={32} className="text-accent-400 fill-accent-400" />
            ))}
          </div>
          
          <h2 className="text-3xl md:text-5xl text-white font-serif leading-tight mb-10 italic">
            "{CONTENT.socialProof.text}"
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-display font-bold text-accent-400 mb-2">328</span>
              <span className="text-gray-400 uppercase tracking-widest text-xs">Θετικές Κριτικές</span>
            </div>
            
            <div className="w-px h-12 bg-brand-800 hidden md:block" />
            
            <div className="flex flex-col items-center">
              <span className="text-5xl font-display font-bold text-accent-400 mb-2">5/5</span>
              <span className="text-gray-400 uppercase tracking-widest text-xs">Βαθμολογία Google</span>
            </div>

            <div className="w-px h-12 bg-brand-800 hidden md:block" />

            <div className="flex flex-col items-center">
              <span className="text-5xl font-display font-bold text-accent-400 mb-2">100%</span>
              <span className="text-gray-400 uppercase tracking-widest text-xs">Αφοσίωση</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
