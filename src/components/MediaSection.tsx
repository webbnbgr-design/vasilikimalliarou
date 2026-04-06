import { motion } from 'motion/react';
import { CONTENT } from '../constants';
import { Play, Tv, Newspaper } from 'lucide-react';

export default function MediaSection() {
  return (
    <section id="media" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-600 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              ΑΝΑΓΝΩΡΙΣΙΜΟΤΗΤΑ
            </span>
            <h2 className="text-4xl md:text-5xl text-brand-900 mb-8 font-serif">
              {CONTENT.media.title}
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
              {CONTENT.media.description}
            </p>
            
            <div className="space-y-6">
              {CONTENT.media.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-6 bg-brand-50 border-l-4 border-accent-500 group hover:bg-brand-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6 shadow-sm group-hover:scale-110 transition-transform">
                    <Tv size={20} className="text-brand-900" />
                  </div>
                  <div>
                    <span className="text-accent-600 text-xs font-bold uppercase tracking-wider">{item.channel}</span>
                    <h4 className="text-brand-900 font-bold">{item.topic}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-brand-900 rounded-sm overflow-hidden shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                alt="Legal Documents and Gavel"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-900/20" />
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-accent-400 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-accent-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
