"use client";

import { ArrowDown, Award, Briefcase, DollarSign, Clock } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

export default function HeroSection() {
  const { lang, t } = useLanguage();

  const badges = [
    { icon: Award, text: t.hero.kpi1, color: "text-sea-green", bg: "bg-emerald-50" },
    { icon: Briefcase, text: t.hero.kpi2, color: "text-sea-primary", bg: "bg-blue-50" },
    { icon: DollarSign, text: t.hero.kpi3, color: "text-sea-gold", bg: "bg-amber-50" },
    { icon: Clock, text: t.hero.kpi4, color: "text-sea-accent", bg: "bg-teal-50" },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-28 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sea-primary/5 via-slate-50 to-white"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sea-gold/30 bg-sea-gold/10 px-4 py-1.5 text-sm font-semibold text-sea-gold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sea-gold"></span>
            </span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-sea-primary mb-6 leading-[1.2]">
            {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-l from-sea-accent to-sea-primary">{t.hero.title2}</span> <br className="hidden sm:block"/>
            {t.hero.title3}
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            {t.hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#wizard" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-sea-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-sea-primary/20 hover:bg-sea-primary-light hover:-translate-y-1 transition-all duration-300"
            >
              {t.hero.btnApply}
            </a>
            <a 
              href="#programs" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-700 hover:border-sea-accent hover:text-sea-accent hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
            >
              {t.hero.btnExplore}
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${badge.bg} ${badge.color}`}>
                  <badge.icon size={24} />
                </div>
                <p className={`text-sm font-bold text-slate-800 leading-tight ${lang === "ar" ? "text-right" : "text-left"}`}>
                  {badge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
