import { motion } from 'motion/react';
import { CONTENT } from '../constants';
import { Award, BookOpen, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent-600 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            ΠΡΟΣΩΠΙΚΗ ΠΡΟΣΕΓΓΙΣΗ
          </span>
          <h2 className="text-4xl md:text-5xl text-brand-900 mb-8 font-serif">
            {CONTENT.about.title}
          </h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            {CONTENT.about.text}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              "Προσωπική Ενασχόληση",
              "Στρατηγική Ανάλυση",
              "Απόλυτη Εχεμύθεια",
              "Δυναμική Υπεράσπιση"
            ].map((item) => (
              <div key={item} className="flex flex-col items-center space-y-3 p-6 bg-white shadow-sm border border-brand-100">
                <CheckCircle size={28} className="text-accent-500" />
                <span className="text-brand-900 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center space-x-4 bg-white p-6 shadow-md border-l-4 border-accent-500">
              <Award size={40} className="text-accent-500" />
              <div className="text-left">
                <span className="block text-2xl font-bold text-brand-900">15+ Έτη</span>
                <span className="text-gray-500 text-sm uppercase tracking-widest">Εμπειρίας</span>
              </div>
            </div>

            <button className="flex items-center space-x-3 text-brand-900 font-bold tracking-widest group">
              <span className="border-b-2 border-accent-400 pb-1 group-hover:border-brand-900 transition-colors">ΠΛΗΡΕΣ ΒΙΟΓΡΑΦΙΚΟ</span>
              <BookOpen size={20} className="text-accent-500 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
