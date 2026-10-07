"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, UploadCloud, AlertCircle } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

interface AdmissionWizardProps {
  selectedProgram?: string;
  onComplete: (applicationId: string) => void;
}

export default function AdmissionWizard({ selectedProgram, onComplete }: AdmissionWizardProps) {
  const { lang, t } = useLanguage();
  const [step, setStep] = useState(1);
  const [isEligible, setIsEligible] = useState<boolean | null>(null);
  
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  
  const [generatedId, setGeneratedId] = useState<string>("");

  useEffect(() => {
    setGeneratedId("SEA-2026-" + Math.floor(1000 + Math.random() * 9000));
  }, []);

  const handleAnswer = (qId: number, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
    
    const newAnswers = { ...answers, [qId]: answer };
    if (Object.keys(newAnswers).length === 5) {
      const allYes = Object.values(newAnswers).every(v => v === true);
      setIsEligible(allYes);
    }
  };

  const nextStep = () => setStep(prev => Math.min(4, prev + 1));
  const prevStep = () => setStep(prev => Math.max(1, prev - 1));

  const questions = [
    { id: 1, text: t.wizard.s1Q1 },
    { id: 2, text: t.wizard.s1Q2 },
    { id: 3, text: t.wizard.s1Q3 },
    { id: 4, text: t.wizard.s1Q4 },
    { id: 5, text: t.wizard.s1Q5 },
  ];

  const ChevronNext = lang === "ar" ? ChevronLeft : ChevronRight;
  const ChevronPrev = lang === "ar" ? ChevronRight : ChevronLeft;

  return (
    <section id="wizard" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-sea-primary mb-4">{t.wizard.title}</h2>
            <p className="text-lg text-slate-600 font-medium">
              {t.wizard.desc}
            </p>
          </div>

          <div className="mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0 hidden sm:block"></div>
            <div className={`absolute top-1/2 ${lang === 'ar' ? 'right-0' : 'left-0'} h-1 bg-sea-accent -translate-y-1/2 z-0 transition-all duration-500 hidden sm:block`} style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
              {[t.wizard.step1, t.wizard.step2, t.wizard.step3, t.wizard.step4].map((label, index) => {
                const stepNumber = index + 1;
                const isActive = step === stepNumber;
                const isCompleted = step > stepNumber;
                
                return (
                  <div key={stepNumber} className="flex sm:flex-col items-center gap-3 sm:gap-2">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-sm transition-colors ${
                      isActive ? "bg-sea-primary text-white ring-4 ring-sea-primary/20" : 
                      isCompleted ? "bg-sea-accent text-white" : "bg-white text-slate-400 border-2 border-slate-200"
                    }`}>
                      {isCompleted ? <CheckCircle2 size={20} /> : stepNumber}
                    </div>
                    <span className={`text-sm font-bold ${isActive ? "text-sea-primary" : isCompleted ? "text-sea-accent" : "text-slate-400"}`}>
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 overflow-hidden relative min-h-[400px]">
            
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-sea-primary/10 text-sea-primary flex items-center justify-center text-lg">1</span>
                  {t.wizard.s1Title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  {questions.map((q) => (
                    <div key={q.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:border-sea-accent/30 transition-colors">
                      <p className="font-semibold text-slate-700">{q.text}</p>
                      <div className="flex gap-2 shrink-0">
                        <button 
                          onClick={() => handleAnswer(q.id, true)}
                          className={`px-6 py-2 rounded-lg font-bold text-sm transition-colors ${answers[q.id] === true ? "bg-sea-accent text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
                        >
                          {t.wizard.yes}
                        </button>
                        <button 
                          onClick={() => handleAnswer(q.id, false)}
                          className={`px-6 py-2 rounded-lg font-bold text-sm transition-colors ${answers[q.id] === false ? "bg-red-500 text-white" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"}`}
                        >
                          {t.wizard.no}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {isEligible === true && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 mb-8 animate-in zoom-in-95 flex items-start gap-3">
                    <CheckCircle2 className="shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">{t.wizard.s1Success}</h4>
                      <p className="text-sm mt-1">{t.wizard.s1SuccessDesc}</p>
                    </div>
                  </div>
                )}

                {isEligible === false && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 mb-8 animate-in zoom-in-95 flex items-start gap-3">
                    <AlertCircle className="shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold">{t.wizard.s1Fail}</h4>
                      <p className="text-sm mt-1">{t.wizard.s1FailDesc}</p>
                    </div>
                  </div>
                )}

                <div className={`flex ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                  <button 
                    onClick={nextStep}
                    disabled={isEligible !== true}
                    className="flex items-center gap-2 bg-sea-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-sea-primary-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {t.wizard.next}
                    <ChevronNext size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-sea-primary/10 text-sea-primary flex items-center justify-center text-lg">2</span>
                  {t.wizard.s2Title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.wizard.name}</label>
                    <input type="text" className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-sea-primary focus:ring-2 focus:ring-sea-primary/20 outline-none bg-slate-50 font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.wizard.idNumber}</label>
                    <input type="text" className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-sea-primary focus:ring-2 focus:ring-sea-primary/20 outline-none bg-slate-50 font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.wizard.email}</label>
                    <input type="email" className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-sea-primary focus:ring-2 focus:ring-sea-primary/20 outline-none bg-slate-50 font-medium text-left" dir="ltr" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.wizard.phone}</label>
                    <input type="tel" className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-sea-primary focus:ring-2 focus:ring-sea-primary/20 outline-none bg-slate-50 font-medium text-left" dir="ltr" placeholder="05XXXXXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.wizard.city}</label>
                    <select className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-sea-primary focus:ring-2 focus:ring-sea-primary/20 outline-none bg-slate-50 font-medium appearance-none">
                      <option value="">{t.wizard.selectCity}</option>
                      <option value="riyadh">{t.wizard.riyadh}</option>
                      <option value="jeddah">{t.wizard.jeddah}</option>
                      <option value="dammam">{t.wizard.dammam}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t.wizard.program}</label>
                    <select 
                      className="w-full p-3.5 rounded-xl border border-slate-200 focus:border-sea-primary focus:ring-2 focus:ring-sea-primary/20 outline-none bg-slate-50 font-medium appearance-none"
                      defaultValue={selectedProgram || ""}
                    >
                      <option value="crowd_management">{t.programs.list[0].title}</option>
                      <option value="centers_management">{t.programs.list[1].title}</option>
                      <option value="event_management">{t.programs.list[2].title}</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button 
                    onClick={prevStep}
                    className="flex items-center gap-2 text-slate-500 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                  >
                    <ChevronPrev size={18} />
                    {t.wizard.prev}
                  </button>
                  <button 
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-sea-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-sea-primary-light transition-colors"
                  >
                    {t.wizard.next}
                    <ChevronNext size={18} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-sea-primary/10 text-sea-primary flex items-center justify-center text-lg">3</span>
                  {t.wizard.s3Title}
                </h3>
                <p className="text-slate-500 mb-8 font-medium">{t.wizard.s3Desc}</p>
                
                <div className="space-y-6 mb-10">
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 hover:border-sea-primary transition-colors cursor-pointer">
                    <UploadCloud size={40} className="mx-auto text-slate-400 mb-4" />
                    <h4 className="font-bold text-slate-700 mb-1">{t.wizard.doc1}</h4>
                    <p className="text-sm text-slate-500">{t.wizard.drop}</p>
                  </div>
                  
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:bg-slate-50 hover:border-sea-primary transition-colors cursor-pointer">
                    <UploadCloud size={40} className="mx-auto text-slate-400 mb-4" />
                    <h4 className="font-bold text-slate-700 mb-1">{t.wizard.doc2}</h4>
                    <p className="text-sm text-slate-500">{t.wizard.drop}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button 
                    onClick={prevStep}
                    className="flex items-center gap-2 text-slate-500 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-100 transition-colors"
                  >
                    <ChevronPrev size={18} />
                    {t.wizard.prev}
                  </button>
                  <button 
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-sea-accent text-white px-8 py-3.5 rounded-xl font-bold hover:bg-sea-accent-hover shadow-lg shadow-sea-accent/30 transition-all"
                  >
                    {t.wizard.submit}
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-in zoom-in-95 duration-500 flex flex-col items-center justify-center text-center py-10">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">{t.wizard.s4Title}</h3>
                <p className="text-lg text-slate-600 mb-8 max-w-lg">
                  {t.wizard.s4Desc}
                </p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 w-full max-w-md mb-8">
                  <p className="text-sm text-slate-500 font-bold mb-2">{t.wizard.orderNumber}</p>
                  <p className="text-3xl font-black text-sea-primary tracking-wider" dir="ltr">{generatedId}</p>
                </div>

                <button 
                  onClick={() => onComplete(generatedId)}
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-sea-primary transition-colors"
                >
                  {t.wizard.goToTracker}
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
