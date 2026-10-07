"use client";

import { Users, Building2, CalendarRange, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

interface ProgramsShowcaseProps {
  onSelectProgram: (program: string) => void;
}

export default function ProgramsShowcase({ onSelectProgram }: ProgramsShowcaseProps) {
  const { lang, t } = useLanguage();

  const handleSelect = (id: string) => {
    onSelectProgram(id);
    document.getElementById("wizard")?.scrollIntoView({ behavior: "smooth" });
  };

  const icons = [Users, Building2, CalendarRange];
  const colors = [
    { color: "text-sea-accent", bg: "bg-teal-50", borderColor: "group-hover:border-sea-accent" },
    { color: "text-sea-primary", bg: "bg-blue-50", borderColor: "group-hover:border-sea-primary" },
    { color: "text-sea-gold", bg: "bg-amber-50", borderColor: "group-hover:border-sea-gold" },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-sea-primary mb-4">{t.programs.title}</h2>
          <p className="text-lg text-slate-600 font-medium">
            {t.programs.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.programs.list.map((program, index) => {
            const Icon = icons[index];
            const theme = colors[index];

            return (
              <div 
                key={program.id} 
                className={`group relative flex flex-col rounded-3xl border-2 border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${theme.borderColor}`}
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg} ${theme.color} transition-transform group-hover:scale-110`}>
                  <Icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{program.title}</h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">{program.enTitle}</p>
                
                <div className="flex flex-col gap-3 mb-8">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg">
                    <Clock size={18} className="text-sea-primary shrink-0" />
                    {t.programs.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg">
                    <MapPin size={18} className="text-sea-primary shrink-0" />
                    {t.programs.mode}
                  </div>
                </div>

                <div className="mb-8 flex-grow">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">{t.programs.pathsTitle}</h4>
                  <ul className="space-y-2">
                    {program.paths.map((path: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-sea-green shrink-0"></span>
                        {path}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleSelect(program.id)}
                  className="mt-auto w-full rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-sea-accent hover:shadow-lg"
                >
                  {t.programs.btnSelect}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
