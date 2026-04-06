import { motion } from 'motion/react';
import { CONTENT } from '../constants';
import * as Icons from 'lucide-react';

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="section-padding bg-brand-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent-600 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            ΕΞΕΙΔΙΚΕΥΣΕΙΣ
          </span>
          <h2 className="text-4xl md:text-5xl text-brand-900 mb-6">
            Ολοκληρωμένες Νομικές Υπηρεσίες
          </h2>
          <div className="h-1 w-20 bg-accent-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.practiceAreas.map((area, index) => {
            const IconComponent = (Icons as any)[area.icon];
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-10 border border-brand-100 hover:border-accent-400 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-200/50 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 -mr-12 -mt-12 rounded-full transition-transform group-hover:scale-150 duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-brand-900 flex items-center justify-center mb-8 group-hover:bg-accent-500 transition-colors duration-500">
                    {IconComponent && <IconComponent size={32} className="text-accent-300 group-hover:text-white" />}
                  </div>
                  
                  <h3 className="text-2xl text-brand-900 mb-4 font-serif">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
