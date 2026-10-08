"use client";

import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t-[8px] border-sea-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-16 w-auto items-center justify-center">
                <img src="/saea-logo-white.png" alt="SAEA Logo" className="h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{t.header.title}</h3>
                <p className="text-xs text-slate-400">Saudi Entertainment Academy</p>
              </div>
            </div>
            <p className="text-sm font-medium leading-relaxed max-w-sm mb-6">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sea-accent hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sea-accent hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sea-accent hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.links}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="https://ar.saea.sa/about" target="_blank" className="hover:text-sea-accent transition-colors">{t.footer.about}</a></li>
              <li><a href="https://ar.saea.sa/entertainment-diplomas" target="_blank" className="hover:text-sea-accent transition-colors">{t.footer.programs}</a></li>
              <li><a href="#wizard" className="hover:text-sea-accent transition-colors">{t.footer.terms}</a></li>
              <li><a href="#tracker" className="hover:text-sea-accent transition-colors">{t.footer.track}</a></li>
              <li><a href="https://ar.saea.sa#contactus" target="_blank" className="hover:text-sea-accent transition-colors">{t.footer.faq}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sea-accent shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-sea-accent shrink-0" />
                <a href="mailto:info@saea.sa" className="hover:text-white transition-colors">info@saea.sa</a>
              </li>
              <li className="flex items-center gap-3 pl-8">
                <a href="mailto:recruitment@saea.sa" className="hover:text-white transition-colors">recruitment@saea.sa</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
          <p>{t.footer.rights}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">{t.footer.tos}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.policy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
