"use client";

import { useState } from "react";
import { Search, CheckCircle2, Clock, Calendar, FileText, ChevronDown } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

interface StatusTrackerProps {
  applicationId?: string;
}

export default function StatusTracker({ applicationId }: StatusTrackerProps) {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState(applicationId || "");
  const [isSearching, setIsSearching] = useState(false);
  const [hasResult, setHasResult] = useState(!!applicationId);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setHasResult(true);
    }, 1500);
  };

  return (
    <section id="tracker" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-sea-primary mb-4">{t.tracker.title}</h2>
            <p className="text-lg text-slate-600 font-medium">
              {t.tracker.desc}
            </p>
          </div>

          <form onSubmit={handleSearch} className="mb-12">
            <div className="relative">
              <input
                type="text"
                className={`w-full p-4 ${lang === 'ar' ? 'pl-20 pr-6' : 'pr-20 pl-6'} rounded-2xl border-2 border-slate-200 focus:border-sea-primary focus:ring-4 focus:ring-sea-primary/10 outline-none transition-all font-medium text-lg bg-slate-50`}
                placeholder={t.tracker.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                dir="auto"
              />
              <button 
                type="submit"
                className={`absolute ${lang === 'ar' ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 bg-sea-primary text-white p-2.5 rounded-xl hover:bg-sea-primary-light transition-colors`}
              >
                <Search size={24} />
              </button>
            </div>
            
            <div className="mt-3 flex justify-center">
              <button 
                type="button"
                onClick={() => setSearchQuery("SEA-2026-9842")}
                className="text-sm font-semibold text-sea-accent hover:underline"
              >
                {t.tracker.tryActive}
              </button>
            </div>
          </form>

          {isSearching && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 border-4 border-slate-200 border-t-sea-primary rounded-full animate-spin mb-4"></div>
              <p className="text-slate-500 font-medium animate-pulse">جاري البحث في السجلات...</p>
            </div>
          )}

          {hasResult && !isSearching && (
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="bg-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{t.tracker.details} #{searchQuery || "SEA-2026-9842"}</h3>
                  <div className="flex items-center gap-2 text-sea-accent">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sea-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sea-accent"></span>
                    </span>
                    <span className="text-sm font-semibold">{t.tracker.waiting}</span>
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-3 text-sm font-medium">
                  {t.programs.list[0].title}
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <div className="relative">
                  <div className={`absolute top-0 bottom-0 w-0.5 bg-slate-200 ${lang === 'ar' ? 'right-[27px]' : 'left-[27px]'}`}></div>

                  <div className="space-y-8">
                    {/* Step 1 */}
                    <div className="relative flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sea-green text-white z-10 ring-4 ring-white">
                        <CheckCircle2 size={28} />
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{t.tracker.steps[0].title}</h4>
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-medium">
                          <Calendar size={16} />
                          {t.tracker.steps[0].date}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{t.tracker.steps[0].desc}</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sea-green text-white z-10 ring-4 ring-white">
                        <CheckCircle2 size={28} />
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{t.tracker.steps[1].title}</h4>
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-medium">
                          <Calendar size={16} />
                          {t.tracker.steps[1].date}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{t.tracker.steps[1].desc}</p>
                      </div>
                    </div>

                    {/* Step 3 (Active) */}
                    <div className="relative flex items-start gap-6">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sea-accent text-white z-10 ring-4 ring-white shadow-lg shadow-sea-accent/30">
                        <Clock size={28} />
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-bold text-sea-primary mb-1">{t.tracker.steps[2].title}</h4>
                        <div className="flex items-center gap-2 text-sm text-sea-accent mb-3 font-bold bg-teal-50 inline-flex px-3 py-1 rounded-lg">
                          <Calendar size={16} />
                          {t.tracker.steps[2].date}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{t.tracker.steps[2].desc}</p>
                        
                        <div className="flex gap-3">
                          <button className="flex items-center gap-2 rounded-lg bg-sea-primary px-4 py-2 text-sm font-bold text-white hover:bg-sea-primary-light transition-colors">
                            <FileText size={16} />
                            {t.tracker.pdf}
                          </button>
                          <button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                            {t.tracker.changeDate}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Step 4 (Pending) */}
                    <div className="relative flex items-start gap-6 opacity-40">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-400 z-10 ring-4 ring-white">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{t.tracker.steps[3].title}</h4>
                        <p className="text-slate-500 text-sm">{t.tracker.steps[3].date}</p>
                      </div>
                    </div>

                    {/* Step 5 (Pending) */}
                    <div className="relative flex items-start gap-6 opacity-40">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-400 z-10 ring-4 ring-white">
                        <span className="text-xl font-bold">5</span>
                      </div>
                      <div className="pt-3">
                        <h4 className="text-lg font-bold text-slate-900 mb-1">{t.tracker.steps[4].title}</h4>
                        <p className="text-slate-500 text-sm">{t.tracker.steps[4].date}</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-4 border-t border-slate-100 flex justify-center">
                <button className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-sea-primary transition-colors">
                  {t.tracker.support}
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
