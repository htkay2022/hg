/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Home, Key, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';

// Component to handle JotForm iframe embed
const JotForm = ({ id }: { id: string }) => {
  return (
    <div className="w-full overflow-hidden">
      <iframe
        id={`JotFormIFrame-${id}`}
        title="JotForm"
        src={`https://form.jotform.com/${id}`}
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
        }}
        allowFullScreen={true}
        allow="geolocation; microphone; camera; fullscreen"
      />
    </div>
  );
};

export default function App() {
  const [activeForm, setActiveForm] = useState<'sell' | 'rental' | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openForm = (type: 'sell' | 'rental') => {
    setActiveForm(type);
    scrollToSection('forms');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <Home size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900">HABESOL GROUP</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">About Us</button>
              <button onClick={() => scrollToSection('trust')} className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Why Us</button>
              <button onClick={() => openForm('sell')} className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Sell Property</button>
              <button onClick={() => openForm('rental')} className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm">Rental Request</button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-stone-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-base font-medium text-stone-600">About Us</button>
                <button onClick={() => scrollToSection('trust')} className="block w-full text-left px-3 py-2 text-base font-medium text-stone-600">Why Us</button>
                <button onClick={() => openForm('sell')} className="block w-full text-left px-3 py-2 text-base font-medium text-emerald-600">Sell Property</button>
                <button onClick={() => openForm('rental')} className="block w-full text-left px-3 py-2 text-base font-medium text-emerald-600">Rental Request</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                  Real Estate Solutions
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-8">
                  Practical Solutions for <span className="text-emerald-600">Homeowners</span> & Families.
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed mb-10 max-w-2xl">
                  We buy and manage properties directly, providing fast responses and quality housing opportunities for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openForm('sell')}
                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-stone-900 text-white rounded-2xl font-bold hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Sell Your Property
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => openForm('rental')}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 rounded-2xl font-bold hover:border-emerald-600 hover:text-emerald-600 transition-all"
                  >
                    Rental Request
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl" />
             <div className="absolute bottom-1/4 right-1/2 w-96 h-96 bg-stone-400 rounded-full blur-3xl" />
          </div>
        </section>

        {/* Trust Elements Section */}
        <section id="trust" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-stone-50 border border-stone-100 transition-transform hover:-translate-y-1">...
              </div>
            </div>
          </div>
        </section>
        {/* About Us Section */}
        <section id="about" className="py-24 bg-stone-900 text-white overflow-hidden relative">...
        </section>
        {/* Forms Section */}
        <section id="forms" className="py-24 bg-stone-50">...
        </section>
        {/* Contact Info Section */}
        <section className="py-20 bg-white border-t border-stone-100">...
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 text-stone-400 border-t border-stone-800">...
      </footer>
    </div>
  );
}