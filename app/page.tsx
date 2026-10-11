"use client";

import React, { useState } from "react";
import { 
  Dumbbell, 
  Lock, 
  Award, 
  Flame, 
  CircleCheck,
  ShieldAlert,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function VyronFitApp() {
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    goal: "hypertrophy",
    days: "4",
    experience: "intermediate"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Welcome ${formData.name}! Coach Murthy will review your specs shortly.`);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-neutral-100 font-sans selection:bg-red-600 selection:text-white">

      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#070707]/90 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Vyron Fit Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter uppercase leading-none">
                VYRON<span className="text-red-600">FIT</span>
              </span>
              <span className="text-[9px] tracking-widest text-neutral-400 font-mono uppercase">Discipline ● Strength</span>
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase text-neutral-400">
            <a href="#hero" className="hover:text-red-500 transition-colors">Philosophy</a>
            <a href="#coach" className="hover:text-red-500 transition-colors">Coach Murthy</a>
            <a href="#intake" className="hover:text-red-500 transition-colors">Join Elite</a>
          </div>

          <a href="#intake" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-sm transition-all">
            Get Custom Plan
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-800/60 bg-red-950/30 text-red-500 text-xs font-mono tracking-widest uppercase mb-6">
            <ShieldAlert className="w-3.5 h-3.5" /> For Serious Lifters Only
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
            FORGE REAL <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-neutral-200">
              STRENGTH.
            </span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-2xl font-light mb-10 leading-relaxed">
            Stop scrolling generic routines. Vyron Fit bridges the gap between raw intent and elite transformation with custom periodization engineered directly for you.
          </p>

          <a href="#intake" className="group inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 text-sm font-black uppercase tracking-widest rounded-sm hover:bg-red-700 transition-all">
            Claim Your Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-900">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 block mb-3">Our Core Conviction</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Why Just "Fitness"? <br/>
              <span className="text-neutral-500">Health Is Lifelong Armor.</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed font-light mb-8">
              A gym isn't just about mirror photos. It's about mental resilience, physical longevity, and structural discipline. We act as your training partner in the trenches—someone who checks your form, refines your volume, and keeps you accountable every step of the journey.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: "No Cookie-Cutter Splits", desc: "Schedules built around your limits, desk hours, and goals." },
              { title: "Form-First Mentorship", desc: "Lift heavier without destroying your joints or spine." },
              { title: "Real Progression Tracking", desc: "Weekly recalibration of your macros and loading schemes." }
            ].map((pillar, idx) => (
              <div key={idx} className="p-6 bg-neutral-900/40 border border-neutral-800 rounded-sm">
                <div className="flex items-center gap-3 mb-2">
                  <CircleCheck className="w-5 h-5 text-red-500" />
                  <h3 className="font-bold uppercase tracking-wider text-sm">{pillar.title}</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pl-8">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COACH MURTHY ================= */}
      <section id="coach" className="py-24 bg-[#050505] border-t border-neutral-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-neutral-800">
            {/* Direct reference to the file with spaces */}
            <img 
              src="/Murthy Photo.jpeg" 
              alt="Coach Murthy Gowda" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase mb-1">
                <Flame className="w-4 h-4 fill-current" /> Head Coach & Founder
              </div>
              <h3 className="text-2xl font-black uppercase text-white">Murthy Gowda 🦈</h3>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-red-500 tracking-widest mb-3">
              <Award className="w-4 h-4" /> Credentials & Pedigree
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-6">
              Train Under <br/>
              <span className="text-neutral-500">Mr. India '22 Runner Up</span>
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed mb-8">
              Discipline isn't born from motivation; it is forged through repetition. With over 8 years in the fitness industry and more than 500 successful transformations, Murthy Gowda brings an uncompromising standard of training to every individual enrolled in Vyron Fit.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-sm">
                <span className="text-xs font-mono text-red-500 uppercase block">National Podium</span>
                <p className="text-sm font-bold text-white uppercase">Mr. India '22 Runner Up</p>
              </div>
              <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-sm">
                <span className="text-xs font-mono text-red-500 uppercase block">Verified Results</span>
                <p className="text-sm font-bold text-white uppercase">500+ Transformations</p>
              </div>
            </div>

            <a href="https://www.instagram.com/vyron.fit.ka/?hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-neutral-900 border border-neutral-700 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase hover:bg-neutral-800 transition-colors">
               Follow @vyron.fit.ka On Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTAKE FORM ================= */}
      <section id="intake" className="py-24 bg-black border-t border-neutral-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500 block mb-2">Phase 1 Assessment</span>
            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Drop Your <span className="text-neutral-500">Specs</span></h2>
            <p className="text-sm text-neutral-400 font-light max-w-xl mx-auto">
              Fill in your details below. Coach Murthy will analyze your current schedule and design your custom training roadmap.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0b0b0b] border border-neutral-800 p-8 rounded-sm space-y-6 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-[#141414] border border-neutral-800 p-4 text-white focus:border-red-600 outline-none transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-neutral-400">Instagram Handle</label>
                <input type="text" name="instagram" required value={formData.instagram} onChange={handleInputChange} className="w-full bg-[#141414] border border-neutral-800 p-4 text-white focus:border-red-600 outline-none transition-colors" placeholder="@yourhandle" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-400">Primary Goal</label>
              <select name="goal" value={formData.goal} onChange={handleInputChange} className="w-full bg-[#141414] border border-neutral-800 p-4 text-white focus:border-red-600 outline-none transition-colors">
                <option value="hypertrophy">Hypertrophy (Muscle Growth)</option>
                <option value="strength">Raw Strength (Powerlifting)</option>
                <option value="fat-loss">Fat Loss & Recomposition</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 mt-6 text-sm transition-colors">
              Lock In Assessment
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 bg-[#050505] border-t border-neutral-900 text-center text-neutral-600 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 VYRON FIT. ALL RIGHTS RESERVED.</p>
          <p>BUILT FOR DISCIPLINE & STRENGTH.</p>
        </div>
      </footer>

    </div>
  );
}