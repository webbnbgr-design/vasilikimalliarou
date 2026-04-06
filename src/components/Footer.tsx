import { CONTENT } from '../constants';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-950 text-white pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-8">
              <span className="font-display text-2xl font-bold tracking-widest text-white">
                {CONTENT.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-accent-400">
                {CONTENT.title}
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Νομικές υπηρεσίες υψηλού επιπέδου με έμφαση στο Ποινικό Δίκαιο και την αποτελεσματική εκπροσώπηση.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-accent-500 hover:border-accent-500 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-8 text-accent-300">Επικοινωνία</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin size={20} className="text-accent-500 shrink-0" />
                <span className="text-gray-400 font-light">{CONTENT.location}</span>
              </li>
              <li className="flex items-start space-x-4">
                <Phone size={20} className="text-accent-500 shrink-0" />
                <div className="flex flex-col">
                  {CONTENT.phones.map(phone => (
                    <a key={phone} href={`tel:${phone}`} className="text-gray-400 hover:text-white transition-colors">{phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Mail size={20} className="text-accent-500 shrink-0" />
                <a href={`mailto:${CONTENT.email}`} className="text-gray-400 hover:text-white transition-colors">{CONTENT.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-8 text-accent-300">Τομείς</h4>
            <ul className="space-y-4">
              {CONTENT.practiceAreas.slice(0, 4).map(area => (
                <li key={area.title}>
                  <a href="#practice-areas" className="text-gray-400 hover:text-white transition-colors font-light">{area.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif mb-8 text-accent-300">Ωράριο Γραφείου</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex justify-between">
                <span>Δευτέρα - Παρασκευή:</span>
                <span className="text-white">09:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Σάββατο:</span>
                <span className="text-white">Κατόπιν Ραντεβού</span>
              </li>
              <li className="flex justify-between">
                <span>Κυριακή:</span>
                <span className="text-white">Κλειστά</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {CONTENT.name}. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Πολιτική Απορρήτου</a>
            <a href="#" className="hover:text-white transition-colors">Όροι Χρήσης</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
