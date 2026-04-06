import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTENT } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#' },
    { name: 'Τομείς Πρακτικής', href: '#practice-areas' },
    { name: 'Η Δικηγόρος', href: '#about' },
    { name: 'Media', href: '#media' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-display text-xl md:text-2xl font-bold tracking-widest ${scrolled ? 'text-brand-900' : 'text-white'}`}>
            {CONTENT.name}
          </span>
          <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${scrolled ? 'text-accent-600' : 'text-accent-300'}`}>
            {CONTENT.title}
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-accent-500 transition-colors ${scrolled ? 'text-brand-900' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:${CONTENT.phones[0]}`}
            className="flex items-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white px-5 py-2.5 rounded-sm transition-all shadow-lg shadow-accent-600/20"
          >
            <Phone size={16} />
            <span className="text-sm font-semibold">ΚΛΗΣΗ</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${scrolled ? 'text-brand-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-brand-900 border-b border-gray-100 pb-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${CONTENT.phones[0]}`}
                className="flex items-center justify-center space-x-3 bg-brand-900 text-white py-4 rounded-sm"
              >
                <Phone size={20} />
                <span className="font-bold">ΕΠΙΚΟΙΝΩΝΙΑ</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
