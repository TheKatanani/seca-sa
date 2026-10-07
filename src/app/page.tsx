"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsShowcase from "@/components/ProgramsShowcase";
import AdmissionWizard from "@/components/AdmissionWizard";
import StatusTracker from "@/components/StatusTracker";
import Footer from "@/components/Footer";

import { LanguageProvider } from "@/LanguageContext";

export default function Home() {
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [applicationId, setApplicationId] = useState<string>("");

  const handleCompleteWizard = (id: string) => {
    setApplicationId(id);
    document.getElementById("tracker")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col bg-slate-50 selection:bg-sea-accent selection:text-white overflow-x-hidden">
        <Header />
        
        <main className="flex-grow">
          <HeroSection />
          
          <ProgramsShowcase onSelectProgram={setSelectedProgram} />
          
          <AdmissionWizard 
            selectedProgram={selectedProgram} 
            onComplete={handleCompleteWizard} 
          />
          
          <StatusTracker applicationId={applicationId} />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
