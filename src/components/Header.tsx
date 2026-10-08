"use client";

import { useState } from "react";
import { Search, ArrowLeft, ArrowRight, Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

export default function Header() {
  const { lang, t, toggleLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo & Branding */}
          <div className="flex items-center shrink-0">
            <div className="flex h-12 sm:h-14 items-center justify-center p-1 bg-white rounded-xl">
              <img src="/saea-logo-color.png" alt="SAEA Logo" className="h-full object-contain" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="/" className="text-sm font-semibold text-sea-primary hover:text-sea-accent transition-colors">{t.header.home}</a>
            <a href="https://ar.saea.sa/about" target="_blank" className="text-sm font-semibold text-slate-600 hover:text-sea-accent transition-colors">{t.header.about}</a>
            <a href="https://ar.saea.sa/entertainment-diplomas" target="_blank" className="text-sm font-semibold text-slate-600 hover:text-sea-accent transition-colors">{t.header.packages}</a>
            <a href="https://ar.saea.sa#contactus" target="_blank" className="text-sm font-semibold text-slate-600 hover:text-sea-accent transition-colors">{t.header.developments}</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-lg border-2 border-slate-200 px-3 py-2 text-xs sm:text-sm font-bold text-slate-700 hover:border-sea-primary transition-all"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{lang === "ar" ? "EN" : "عربي"}</span>
            </button>
            <a 
              href="#tracker" 
              className="hidden md:flex items-center gap-2 rounded-lg border-2 border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:border-sea-primary hover:bg-slate-50 transition-all"
            >
              <Search size={16} />
              {t.header.track}
            </a>
            <a 
              href="#wizard"
              className="group hidden sm:flex items-center gap-2 rounded-lg bg-sea-accent px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-sea-accent-hover hover:shadow-lg transition-all"
            >
              {t.header.apply}
              <Arrow size={16} className={`transition-transform ${lang === "ar" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <a href="/" className="text-base font-semibold text-sea-primary p-2 border-b border-slate-100">{t.header.home}</a>
          <a href="https://ar.saea.sa/about" className="text-base font-semibold text-slate-700 p-2 border-b border-slate-100">{t.header.about}</a>
          <a href="https://ar.saea.sa/entertainment-diplomas" className="text-base font-semibold text-slate-700 p-2 border-b border-slate-100">{t.header.packages}</a>
          <a href="https://ar.saea.sa#contactus" className="text-base font-semibold text-slate-700 p-2 border-b border-slate-100">{t.header.developments}</a>
          
          <a href="#wizard" className="flex justify-center items-center gap-2 rounded-lg bg-sea-accent px-5 py-3 text-sm font-bold text-white mt-2">
            {t.header.apply}
          </a>
        </div>
      )}
    </header>
  );
}
