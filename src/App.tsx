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
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-stone-50 border border-stone-100 transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Direct Management</h3>
                <p className="text-stone-600">We buy and manage properties directly, cutting out the middleman for a smoother experience.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-stone-50 border border-stone-100 transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ArrowRight size={32} />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Response</h3>
                <p className="text-stone-600">Time is of the essence. Our team is dedicated to providing quick feedback and rapid solutions.</p>
              </div>
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-stone-50 border border-stone-100 transition-transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <Key size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Housing</h3>
                <p className="text-stone-600">We are committed to creating quality housing opportunities for renters and families alike.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-24 bg-stone-900 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">About HABESOL GROUP</h2>
                <p className="text-xl text-stone-300 leading-relaxed mb-8">
                  HABESOL GROUP is a real estate investment company focused on helping homeowners find practical solutions while creating quality housing opportunities for renters and families.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-lg text-stone-200">Homeowner-focused solutions</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-lg text-stone-200">Quality rental opportunities</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-lg text-stone-200">Direct property management</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Modern Real Estate" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 p-8 bg-emerald-600 rounded-3xl shadow-xl hidden sm:block">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Direct Investment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forms Section */}
        <section id="forms" className="py-24 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-stone-900">How Can We Help You?</h2>
              <p className="text-stone-600">Select the option that best fits your needs and we'll get back to you shortly.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveForm('sell')}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeForm === 'sell' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-600'
                }`}
              >
                Sell Property
              </button>
              <button
                onClick={() => setActiveForm('rental')}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeForm === 'rental' 
                  ? 'bg-emerald-600 text-white shadow-md' 
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-emerald-600'
                }`}
              >
                Rental Request
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden min-h-[600px] p-4 sm:p-8">
              {activeForm === 'sell' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key="sell-form"
                >
                  <JotForm id="260752837722058" />
                </motion.div>
              )}
              {activeForm === 'rental' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key="rental-form"
                >
                  <JotForm id="260752939266064" />
                </motion.div>
              )}
              {!activeForm && (
                <div className="flex flex-col items-center justify-center h-[500px] text-center">
                  <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center text-stone-400 mb-6">
                    <ArrowRight size={40} />
                  </div>
                  <p className="text-xl text-stone-500 font-medium">Please select a form above to get started.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-white border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-stone-600 max-w-md">Our team is ready to discuss your real estate needs. Reach out to us directly via phone or email.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
                <a 
                  href="tel:+18773274757" 
                  className="flex items-center gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-emerald-600 transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-lg font-bold text-stone-900">+1 (877) 327-4757</p>
                  </div>
                </a>
                <a 
                  href="mailto:info@habesolgroup.com" 
                  className="flex items-center gap-4 p-6 bg-stone-50 rounded-2xl border border-stone-100 hover:border-emerald-600 transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-lg font-bold text-stone-900">info@habesolgroup.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 text-stone-400 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white">
                <Home size={18} />
              </div>
              <span className="text-lg font-bold text-white">HABESOL GROUP</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} HABESOL GROUP. All rights reserved.</p>
            <div className="flex gap-6">
              <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('trust')} className="hover:text-white transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('forms')} className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
