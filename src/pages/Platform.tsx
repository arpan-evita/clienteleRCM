import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle, 
  Check,
  ArrowRight, 
  Brain, 
  Calendar, 
  Shield, 
  Activity, 
  UserCheck, 
  ClipboardList, 
  Laptop, 
  Smartphone, 
  FileCheck, 
  Landmark, 
  RefreshCw, 
  Upload, 
  Zap, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  FileText, 
  Database, 
  Plus, 
  Eye, 
  ShieldCheck, 
  ChevronRight, 
  ArrowUpRight 
} from 'lucide-react';

interface PlatformProps {
  navigate: (path: string) => void;
}

export default function Platform({ navigate }: PlatformProps) {
  // Navigation helper
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Section 2: Ecosystem Interactive State
  const [activeEcosystemNode, setActiveEcosystemNode] = useState<'patient' | 'provider' | 'payor' | 'emr' | 'checkin'>('patient');

  // Section 3: Patient Journey Interactive Timeline
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  // Section 4: Smart Registration Interactive State
  const [ocrDocumentType, setOcrDocumentType] = useState<'dl' | 'ic' | null>(null);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [ocrStatus, setOcrStatus] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [ocrData, setOcrData] = useState<any>(null);

  // Section 9: Provider Console Interactive State
  const [activeProviderTab, setActiveProviderTab] = useState<'before' | 'during' | 'after'>('before');

  // Section 13: Interactive Dashboard Tabs
  const [activeDashboardTab, setActiveDashboardTab] = useState<'patient' | 'provider' | 'frontdesk' | 'management'>('patient');

  // Multi-step Timeline Steps
  const timelineSteps = [
    {
      num: '01',
      title: 'Smart Registration',
      desc: 'Patient captures a photo of their ID and insurance card. Pure OCR with no manual keyboard input.'
    },
    {
      num: '02',
      title: 'Eligibility Verification',
      desc: 'Instantly runs 270/271 eligibility requests against payor portals in under 30 seconds.'
    },
    {
      num: '03',
      title: 'EMR Sync',
      desc: 'Pulse bi-directionally pushes verified demographics and schedule slots straight into the EMR.'
    },
    {
      num: '04',
      title: 'AI Scheduling',
      desc: 'Patients choose open timeslots online without having to call the front office clinic staff.'
    },
    {
      num: '05',
      title: 'Appointment Management',
      desc: 'Automated SMS & email reminders, cancellation tracking, and prompt waitlist fills.'
    },
    {
      num: '06',
      title: 'Communication Hub',
      desc: 'Central secure dialogue threads routing registration, medical details, and invoices.'
    },
    {
      num: '07',
      title: 'Patient Dashboard',
      desc: 'Secure portal keeping medical summaries, upcoming appointments, and statements.'
    },
    {
      num: '08',
      title: 'Billing & RCM',
      desc: 'Automated claim scrubbers and post-visit coding handoffs wrapping the entire cycle.'
    },
  ];

  // OCR Triggers
  const handleOcrSimulate = (type: 'dl' | 'ic') => {
    setOcrProgress(0);
    setOcrDocumentType(type);
    setOcrStatus('scanning');
    setOcrData(null);

    const interval = setInterval(() => {
      setOcrProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setOcrStatus('done');
          if (type === 'dl') {
            setOcrData({
              fullName: 'Anita Lopez',
              dob: '04/12/1986',
              gender: 'Female',
              address: '742 Evergreen Terr, Springfield, IL',
              licenseNo: 'DL-98218-IL'
            });
          } else {
            setOcrData({
              carrier: 'Blue Cross Blue Shield of Illinois',
              memberId: 'XOF-890218765',
              groupNumber: 'BC-9921-A',
              planName: 'PPO Choice Premium',
              coverageLevel: 'Individual Primary'
            });
          }
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="bg-[#FFFFFF] text-navy overflow-x-hidden font-sans text-left">
      
      {/* SECTION 1: HERO SECTION - Premium White Canvas with Orange Glow */}
      <section className="relative bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-neutral-100 overflow-hidden">
        {/* Subtle decorative grid and glow */}
        <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-[#F56A00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/2 left-[-10%] w-[350px] h-[350px] bg-teal/15 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headline and detail */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F56A00]/25 bg-[#F56A00]/5 px-4 py-1 text-xs font-semibold text-[#F56A00] uppercase tracking-wider">
                <Zap className="size-3 text-[#F56A00] animate-pulse" /> The Pulse Platform
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold text-navy leading-[1.1] tracking-tight">
                The Intelligent Healthcare <br />
                <span className="relative">
                  Automation Platform
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#F56A00]/85 rounded-full" />
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-neutral-500 max-w-xl leading-relaxed">
                Connect patients, providers, payors, and EMR/EHR systems through one AI-powered platform that automates registration, scheduling, documentation, claims, denials, and revenue cycle management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="rounded-full bg-navy py-3.5 px-7 font-bold text-sm text-white hover:bg-navy-deep hover:-translate-y-0.5 transition-all text-center"
                >
                  Schedule Demo
                </a>
                <a
                  href="#platform-ecosystem"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('platform-ecosystem')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="rounded-full border border-neutral-300 py-3.5 px-7 font-semibold text-sm text-neutral-600 hover:bg-neutral-50 hover:text-navy transition-all text-center"
                >
                  See Platform Overview
                </a>
              </div>

              {/* Connected components count */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-100">
                <div>
                  <div className="text-2xl font-bold font-sans text-navy">5,000+</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1">Claims Scrubbed / Day</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-sans text-navy">Under 30s</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1">Eligibility Response</div>
                </div>
                <div className="hidden md:block">
                  <div className="text-2xl font-bold font-sans text-navy">99.2%</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mt-1">Clean-Claim Fidelity</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Circular Ecosystem Diagram */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              
              {/* Custom SVG Ecosystem visualization */}
              <div className="relative w-full max-w-[460px] aspect-square rounded-full flex items-center justify-center p-4 select-none">
                
                {/* Orbit Circles */}
                <div className="absolute inset-4 rounded-full border border-dashed border-neutral-200/80 animate-[spin_50s_linear_infinite]" />
                <div className="absolute inset-16 rounded-full border border-neutral-100" />
                <div className="absolute inset-28 rounded-full border border-dashed border-neutral-200/50" />

                {/* Concentric waves centered around Pulse */}
                <div className="absolute size-48 rounded-full bg-gradient-to-tr from-[#F56A00]/5 to-teal/5 animate-pulse" />

                {/* Hub: Clientele Pulse */}
                <div className="absolute z-20 size-24 rounded-full bg-navy border border-white flex flex-col items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 bg-[#F56A00] opacity-15 rounded-full filter blur animate-ping duration-1000" />
                  <Activity className="size-6 text-[#F56A00]" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white mt-1">PULSE</span>
                  {/* Subtle cardiogram lines inside */}
                </div>

                {/* Satellite Nodes mapping */}
                {/* 1. Patient Console (Top Center) */}
                <button
                  onClick={() => setActiveEcosystemNode('patient')}
                  className={`absolute -translate-y-36 flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    activeEcosystemNode === 'patient' ? 'scale-110 z-30' : 'scale-95 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className={`size-11 rounded-full flex items-center justify-center border font-semibold ${
                    activeEcosystemNode === 'patient' ? 'bg-[#F56A00] text-white shadow-lg border-[#F56A00]' : 'bg-white text-neutral-600 border-neutral-200 shadow-sm'
                  }`}>
                    <Smartphone className="size-4" />
                  </div>
                  <span className="text-[10px] font-bold text-navy bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs">Patient</span>
                </button>

                {/* 2. Provider Console (Right Center) */}
                <button
                  onClick={() => setActiveEcosystemNode('provider')}
                  className={`absolute translate-x-36 -translate-y-12 flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    activeEcosystemNode === 'provider' ? 'scale-110 z-30' : 'scale-95 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className={`size-11 rounded-full flex items-center justify-center border font-semibold ${
                    activeEcosystemNode === 'provider' ? 'bg-[#F56A00] text-white shadow-lg border-[#F56A00]' : 'bg-white text-neutral-600 border-neutral-200 shadow-sm'
                  }`}>
                    <Laptop className="size-4" />
                  </div>
                  <span className="text-[10px] font-bold text-navy bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs">Provider</span>
                </button>

                {/* 3. Payor Integration (Bottom Right) */}
                <button
                  onClick={() => setActiveEcosystemNode('payor')}
                  className={`absolute translate-x-24 translate-y-28 flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    activeEcosystemNode === 'payor' ? 'scale-110 z-30' : 'scale-95 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className={`size-11 rounded-full flex items-center justify-center border font-semibold ${
                    activeEcosystemNode === 'payor' ? 'bg-[#F56A00] text-white shadow-lg border-[#F56A00]' : 'bg-white text-neutral-600 border-neutral-200 shadow-sm'
                  }`}>
                    <Landmark className="size-4" />
                  </div>
                  <span className="text-[10px] font-bold text-navy bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs">Payor</span>
                </button>

                {/* 4. EMR / EHR / PM (Bottom Left) */}
                <button
                  onClick={() => setActiveEcosystemNode('emr')}
                  className={`absolute -translate-x-24 translate-y-28 flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    activeEcosystemNode === 'emr' ? 'scale-110 z-30' : 'scale-95 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className={`size-11 rounded-full flex items-center justify-center border font-semibold ${
                    activeEcosystemNode === 'emr' ? 'bg-[#F56A00] text-white shadow-lg border-[#F56A00]' : 'bg-white text-neutral-600 border-neutral-200 shadow-sm'
                  }`}>
                    <Database className="size-4" />
                  </div>
                  <span className="text-[10px] font-bold text-navy bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs">EMR/EHR</span>
                </button>

                {/* 5. Digital Check-In (Left Center) */}
                <button
                  onClick={() => setActiveEcosystemNode('checkin')}
                  className={`absolute -translate-x-36 -translate-y-12 flex flex-col items-center gap-1 cursor-pointer transition-all ${
                    activeEcosystemNode === 'checkin' ? 'scale-110 z-30' : 'scale-95 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className={`size-11 rounded-full flex items-center justify-center border font-semibold ${
                    activeEcosystemNode === 'checkin' ? 'bg-[#F56A00] text-white shadow-lg border-[#F56A00]' : 'bg-white text-neutral-600 border-neutral-200 shadow-sm'
                  }`}>
                    <UserCheck className="size-4" />
                  </div>
                  <span className="text-[10px] font-bold text-navy bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded shadow-xs">Intake</span>
                </button>

                {/* Live laser line animations (CSS) */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Dynamic glow connector lines based on selected satellite */}
                  <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="144" stroke="#FFF" strokeWidth="0" />
                    {/* Laser pulses traversing across to the active element */}
                    {activeEcosystemNode === 'patient' && (
                      <line x1="200" y1="200" x2="200" y2="56" stroke="#F56A00" strokeWidth="2.5" strokeDasharray="4 4" className="flow-line" />
                    )}
                    {activeEcosystemNode === 'provider' && (
                      <line x1="200" y1="200" x2="344" y2="188" stroke="#F56A00" strokeWidth="2.5" strokeDasharray="4 4" className="flow-line" />
                    )}
                    {activeEcosystemNode === 'payor' && (
                      <line x1="200" y1="200" x2="296" y2="308" stroke="#F56A00" strokeWidth="2.5" strokeDasharray="4 4" className="flow-line" />
                    )}
                    {activeEcosystemNode === 'emr' && (
                      <line x1="200" y1="200" x2="104" y2="308" stroke="#F56A00" strokeWidth="2.5" strokeDasharray="4 4" className="flow-line" />
                    )}
                    {activeEcosystemNode === 'checkin' && (
                      <line x1="200" y1="200" x2="56" y2="188" stroke="#F56A00" strokeWidth="2.5" strokeDasharray="4 4" className="flow-line" />
                    )}
                  </svg>
                </div>

              </div>

              {/* Absolute floating box displaying active node brief detail */}
              <div className="absolute bottom-[-15px] sm:bottom-0 bg-white border border-neutral-100 shadow-xl rounded-2xl p-4 w-11/12 max-w-xs text-xs select-none">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="size-1.5 rounded-full bg-[#F56A00] animate-ping" />
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-neutral-400">Ecosystem Highlight</span>
                </div>
                {activeEcosystemNode === 'patient' && (
                  <div>
                    <h4 className="font-bold text-navy">Patient Console</h4>
                    <p className="text-neutral-500 mt-1 leading-relaxed">Integrated registration portals, self-driven appointment coordinators, text thread updates, and real-time pocket-sized health catalogs.</p>
                  </div>
                )}
                {activeEcosystemNode === 'provider' && (
                  <div>
                    <h4 className="font-bold text-navy">Provider Console</h4>
                    <p className="text-neutral-500 mt-1 leading-relaxed">Clinician visit preparers, in-room voice scribes translating to custom forms, auto ICD-10 modifier recommendations, and biller queues.</p>
                  </div>
                )}
                {activeEcosystemNode === 'payor' && (
                  <div>
                    <h4 className="font-bold text-navy">Payor Integrations</h4>
                    <p className="text-neutral-500 mt-1 leading-relaxed">Direct automated communication corridors querying insurance eligibility parameters, authorization lists, and claims status reports.</p>
                  </div>
                )}
                {activeEcosystemNode === 'emr' && (
                  <div>
                    <h4 className="font-bold text-navy">EMR / EHR / PM</h4>
                    <p className="text-neutral-500 mt-1 leading-relaxed">Bidirectional seamless synchronization pushing clinical briefs, schedules, active coverages, and billing files directly to systems of record.</p>
                  </div>
                )}
                {activeEcosystemNode === 'checkin' && (
                  <div>
                    <h4 className="font-bold text-navy">Digital Check-In</h4>
                    <p className="text-neutral-500 mt-1 leading-relaxed">Self-serve registration capturing insurance documentation, automatically validating identity and extracting coverage details.</p>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: PLATFORM ECOSYSTEM MODULES */}
      <section id="platform-ecosystem" className="bg-[#FAFBFD] py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 select-none">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#F56A00] font-extrabold block mb-2">Interoperable SaaS Gateway</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              One Connected Healthcare Ecosystem
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-505 text-neutral-500 leading-relaxed font-sans">
              Clientele Pulse acts as a real-time data bridge between every stakeholder in the healthcare journey. Your healthcare operations stay connected without replacing your existing systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Component 1: Patient Console */}
            <div className={`bg-white border text-left p-5 rounded-2xl shadow-sm hover:shadow-md transition-all ${activeEcosystemNode === 'patient' ? 'ring-2 ring-[#F56A00]/20' : 'border-neutral-200/80'}`}>
              <div className="size-9 rounded-xl bg-orange-100/50 flex items-center justify-center text-[#F56A00] mb-4">
                <Smartphone className="size-4.5" />
              </div>
              <h3 className="font-sans font-bold text-navy text-sm">Patient Console</h3>
              <ul className="mt-4 space-y-2.5 text-xs text-neutral-500 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Registration</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Scheduling</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Communication</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Health Records</li>
              </ul>
            </div>

            {/* Component 2: Provider Console */}
            <div className={`bg-white border text-left p-5 rounded-2xl shadow-sm hover:shadow-md transition-all ${activeEcosystemNode === 'provider' ? 'ring-2 ring-[#F56A00]/20' : 'border-neutral-200/80'}`}>
              <div className="size-9 rounded-xl bg-teal/10 flex items-center justify-center text-teal-glow mb-4">
                <Laptop className="size-4.5" />
              </div>
              <h3 className="font-sans font-bold text-navy text-sm">Provider Console</h3>
              <ul className="mt-4 space-y-2.5 text-xs text-neutral-500 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> AI Scribing</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Clinical Documentation</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Coding Assistance</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Visit Preparation</li>
              </ul>
            </div>

            {/* Component 3: Payor Integration */}
            <div className={`bg-white border text-left p-5 rounded-2xl shadow-sm hover:shadow-md transition-all ${activeEcosystemNode === 'payor' ? 'ring-2 ring-[#F56A00]/20' : 'border-neutral-200/80'}`}>
              <div className="size-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Landmark className="size-4.5" />
              </div>
              <h3 className="font-sans font-bold text-navy text-sm">Payor Integration</h3>
              <ul className="mt-4 space-y-2.5 text-xs text-neutral-500 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Eligibility Verification</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Prior Authorization</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Claims Tracking</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Benefits Validation</li>
              </ul>
            </div>

            {/* Component 4: EMR / EHR / PM */}
            <div className={`bg-white border text-left p-5 rounded-2xl shadow-sm hover:shadow-md transition-all ${activeEcosystemNode === 'emr' ? 'ring-2 ring-[#F56A00]/20' : 'border-neutral-200/80'}`}>
              <div className="size-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                <Database className="size-4.5" />
              </div>
              <h3 className="font-sans font-bold text-navy text-sm">EMR / EHR / PM</h3>
              <ul className="mt-4 space-y-2.5 text-xs text-neutral-500 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Bi-directional Sync</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Patient Records</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Appointments</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Insurance Info</li>
              </ul>
            </div>

            {/* Component 5: Digital Check-In */}
            <div className={`bg-white border text-left p-5 rounded-2xl shadow-sm hover:shadow-md transition-all ${activeEcosystemNode === 'checkin' ? 'ring-2 ring-[#F56A00]/20' : 'border-neutral-200/80'}`}>
              <div className="size-9 rounded-xl bg-teal/10 flex items-center justify-center text-teal-glow mb-4">
                <UserCheck className="size-4.5" />
              </div>
              <h3 className="font-sans font-bold text-navy text-sm">Digital Check-In</h3>
              <ul className="mt-4 space-y-2.5 text-xs text-neutral-500 font-sans">
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Smart Intake</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Document Collection</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Insurance Upload</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-neutral-450 text-neutral-400" /> Patient Verification</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: PATIENT JOURNEY AUTOMATION (Horizontal Timeline) */}
      <section className="bg-white py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 select-none">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#F56A00] font-extrabold block mb-2">Automated Direct Actions</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              From Registration to Payment — Fully Automated
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans">
              Click a step below to inspect how Clientele Pulse converts historic phone queues and clipboard files into one digital experience controlled by patients.
            </p>
          </div>

          {/* Interactive Steps Scroller */}
          <div className="relative border-b border-neutral-200 pb-4 select-none overflow-x-auto no-scrollbar">
            <div className="flex gap-4 md:justify-between min-w-[900px] px-2">
              {timelineSteps.map((step, idx) => (
                <button
                  key={step.num}
                  onClick={() => setActiveTimelineStep(idx)}
                  className={`flex items-center gap-2.5 pb-4 px-2 relative transition-all cursor-pointer ${
                    activeTimelineStep === idx 
                      ? 'text-[#F56A00] font-bold scale-102' 
                      : 'text-neutral-500 hover:text-navy font-medium'
                  }`}
                >
                  <span className={`size-6 rounded-full flex items-center justify-center font-mono text-[10px] ${
                    activeTimelineStep === idx ? 'bg-[#F56A00] text-white' : 'bg-neutral-100 text-neutral-600'
                  }`}>
                    {step.num}
                  </span>
                  <span className="text-xs tracking-tight">{step.title}</span>
                  {activeTimelineStep === idx && (
                    <motion.div 
                      layoutId="timeline-underline" 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F56A00]" 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active step details block with high-fidelity summary card */}
          <div className="mt-8 bg-neutral-50/50 rounded-2xl border border-neutral-200/80 p-6 md:p-8 text-left grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#F56A00] uppercase tracking-wider">Step {timelineSteps[activeTimelineStep].num} Details</span>
                <span className="size-1.5 rounded-full bg-neutral-300" />
                <span className="text-xs text-neutral-500 font-medium">Automatic Execution</span>
              </div>
              <h3 className="font-display font-bold text-navy text-xl sm:text-2xl">
                {timelineSteps[activeTimelineStep].title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-xl">
                {timelineSteps[activeTimelineStep].desc}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-teal" /> HIPAA Isolated</span>
                <span className="flex items-center gap-1.5"><Zap className="size-4 text-[#F56A00]" /> Response: Instant (Real-Time)</span>
              </div>
            </div>

            <div className="md:col-span-5 bg-white border border-neutral-200/80 p-5 rounded-xl shadow-xs">
              <span className="text-[10px] uppercase font-bold text-neutral-400 font-mono">Operations Impact</span>
              <div className="mt-3 space-y-3">
                <div className="flex justify-between items-center text-xs border-b border-neutral-50 pb-2">
                  <span className="text-neutral-500">Manual Effort:</span>
                  <span className="font-semibold text-red-500 text-[11px] font-mono bg-red-50 px-2 py-0.5 rounded">0 Hours</span>
                </div>
                <div className="flex justify-between items-center text-xs border-b border-neutral-50 pb-2">
                  <span className="text-neutral-500">Patient Satisfaction Score:</span>
                  <span className="font-semibold text-[#F56A00] text-[11px] font-mono bg-[#F56A00]/5 px-2 py-0.5 rounded">98.4% Average</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500">EMR Update Status:</span>
                  <span className="font-semibold text-teal text-[11px] font-mono bg-teal/10 px-2 py-0.5 rounded">Bi-directional Sync OK</span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <button 
              onClick={() => setActiveTimelineStep((prev) => (prev + 1) % timelineSteps.length)}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#F56A00] hover:text-[#D15900] transition-colors"
            >
              Explore Patient Experience <ArrowRight className="size-4 animate-bounce" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 4: SMART REGISTRATION (OCR Interactive Sim) */}
      <section className="bg-[#FAFBFD] py-20 border-b border-neutral-100/80 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Interactive Simulated Device */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white border border-neutral-200 shadow-xl rounded-3xl p-6 relative overflow-hidden max-w-md mx-auto">
                <div className="flex items-center justify-between mb-6 border-b border-neutral-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-red-400" />
                    <span className="size-2 rounded-full bg-amber-400" />
                    <span className="size-2 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-neutral-400">Intake Document Scanner</span>
                </div>

                <p className="text-xs text-neutral-500 mb-4 font-sans">
                  Click a button below to simulate scanning a patient document with auto OCR.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button
                    onClick={() => handleOcrSimulate('dl')}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border border-dashed transition-all cursor-pointer ${
                      ocrDocumentType === 'dl' ? 'border-[#F56A00] bg-orange-50/20' : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
                    }`}
                  >
                    <Smartphone className="size-5 text-neutral-450 mb-2 text-neutral-400" />
                    <span className="text-[11px] font-bold text-navy font-sans">1. Driver&apos;s License</span>
                    <span className="text-[9px] text-[#F56A00] font-mono mt-0.5">Click to simulate</span>
                  </button>

                  <button
                    onClick={() => handleOcrSimulate('ic')}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border border-dashed transition-all cursor-pointer ${
                      ocrDocumentType === 'ic' ? 'border-[#F56A00] bg-orange-50/20' : 'border-neutral-200 hover:border-neutral-300 bg-neutral-50/50'
                    }`}
                  >
                    <FileText className="size-5 text-neutral-450 mb-2 text-neutral-400" />
                    <span className="text-[11px] font-bold text-navy font-sans">2. Insurance Card</span>
                    <span className="text-[9px] text-[#F56A00] font-mono mt-0.5">Click to simulate</span>
                  </button>
                </div>

                {/* Simulated Loading Bar */}
                {ocrStatus === 'scanning' && (
                  <div className="space-y-2 border border-neutral-100 rounded-xl p-4 bg-neutral-50/40">
                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400">
                      <span>Analyzing Document Matrix (AI OCR)...</span>
                      <span className="font-bold">{ocrProgress}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#F56A00] h-full transition-all duration-150" style={{ width: `${ocrProgress}%` }} />
                    </div>
                  </div>
                )}

                {/* Extracted output simulation details */}
                {ocrStatus === 'done' && ocrData && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3 bg-neutral-50/40 border border-[#F56A00]/20 rounded-xl p-4"
                  >
                    <div className="flex justify-between items-center border-b border-neutral-100 pb-1.5">
                      <span className="text-[10px] font-mono font-bold text-[#F56A00] uppercase tracking-wide">OCR Extraction Complete</span>
                      <CheckCircle className="size-3.5 text-teal" />
                    </div>
                    <div className="space-y-1.5 text-[11px] font-sans">
                      {ocrDocumentType === 'dl' ? (
                        <>
                          <div className="flex justify-between"><span className="text-neutral-500">Name:</span> <strong className="text-navy">{ocrData.fullName}</strong></div>
                          <div className="flex justify-between"><span className="text-neutral-500">DOB:</span> <strong className="text-navy">{ocrData.dob}</strong></div>
                          <div className="flex justify-between"><span className="text-neutral-500">Gender:</span> <strong className="text-navy">{ocrData.gender}</strong></div>
                          <div className="flex justify-between text-right"><span className="text-neutral-500">Address:</span> <strong className="text-navy ml-2">{ocrData.address}</strong></div>
                        </>
                      ) : (
                        <>
                          <div className="flex justify-between"><span className="text-neutral-500">Payer Carrier:</span> <strong className="text-navy">{ocrData.carrier}</strong></div>
                          <div className="flex justify-between"><span className="text-neutral-500">Member ID:</span> <strong className="text-navy font-mono">{ocrData.memberId}</strong></div>
                          <div className="flex justify-between"><span className="text-neutral-500">Group No:</span> <strong className="text-navy font-mono">{ocrData.groupNumber}</strong></div>
                          <div className="flex justify-between"><span className="text-neutral-500">Plan Code:</span> <strong className="text-navy">{ocrData.planName}</strong></div>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}

              </div>
            </div>

            {/* Right Column: Key Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-[#F56A00] uppercase tracking-wider block">Intelligent OCR Capture</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-snug">
                Registration in Minutes, Not Hours
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                By allowing patients to simply snap details on their smartphone cameras, front offices bypass traditional phone-tag and paper clipboard entries entirely.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 select-none">
                <div className="p-3 border border-neutral-100 rounded-xl bg-white flex gap-2 items-start">
                  <CheckCircle className="size-4 text-teal mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">No manual data entry</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Avoid typo errors and billing-related name mismatches.</p>
                  </div>
                </div>
                <div className="p-3 border border-neutral-100 rounded-xl bg-white flex gap-2 items-start">
                  <CheckCircle className="size-4 text-teal mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">No front desk dependency</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Patients configure details remotely or at check-in.</p>
                  </div>
                </div>
                <div className="p-3 border border-neutral-100 rounded-xl bg-white flex gap-2 items-start">
                  <CheckCircle className="size-4 text-teal mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Faster onboarding</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Intake is finalized securely in less than two minutes.</p>
                  </div>
                </div>
                <div className="p-3 border border-neutral-100 rounded-xl bg-white flex gap-2 items-start">
                  <CheckCircle className="size-4 text-teal mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-navy">Improved accuracy</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Cross-referenced against national registries automatically.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: ELIGIBILITY & INSURANCE VERIFICATION */}
      <section className="bg-white py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-[#F56A00] uppercase tracking-wider block">Payer Portal Checkpoint</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
                Real-Time Eligibility Verification
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                The moment a patient registers, Clientele Pulse connects with payor systems to verify coverage details, copays, and limits—safely reducing eligibility denial spikes upstream.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 border border-neutral-100 bg-[#FAFBFD] rounded-xl text-center">
                  <CheckCircle className="size-5 text-teal mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-navy">Active Coverage</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Identified instantly</p>
                </div>
                <div className="p-4 border border-neutral-100 bg-[#FAFBFD] rounded-xl text-center">
                  <CheckCircle className="size-5 text-teal mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-navy">Copay & Deductible</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Precise amounts mapped</p>
                </div>
                <div className="p-4 border border-neutral-100 bg-[#FAFBFD] rounded-xl text-center">
                  <CheckCircle className="size-5 text-teal mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-navy">Coinsurance</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Breakdowns per service</p>
                </div>
                <div className="p-4 border border-neutral-100 bg-[#FAFBFD] rounded-xl text-center">
                  <CheckCircle className="size-5 text-teal mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-navy">Plan Details</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Network alignments</p>
                </div>
                <div className="p-4 border border-neutral-100 bg-[#FAFBFD] rounded-xl text-center">
                  <CheckCircle className="size-5 text-teal mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-navy">Out-of-Pocket Status</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Amount hit tracking</p>
                </div>
                <div className="p-4 border border-neutral-100 bg-[#FAFBFD] rounded-xl text-center">
                  <CheckCircle className="size-5 text-teal mx-auto mb-2" />
                  <h4 className="text-xs font-bold text-navy">Payer Exclusions</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">Pre-auth mandates</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              {/* Highlight Badge Box with sleek glow */}
              <div className="bg-[#FAFBFD] rounded-2xl border border-neutral-200/80 p-8 text-center max-w-sm w-full shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F56A00]" />
                
                <span className="text-[10px] font-mono text-[#F56A00] font-bold uppercase tracking-wider block mb-2">Platform Average</span>
                <div className="text-5xl font-extrabold text-navy my-4 font-sans tracking-tight">
                  &lt; 30s
                </div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Average Response Time</h4>
                <p className="text-xs text-neutral-500 mt-2 max-w-xs mx-auto leading-relaxed font-sans">
                  Faster than standard portal queries. Connects and compiles response parameters, ensuring zero front desk wait delays.
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 bg-white border border-neutral-100 px-3 py-1 rounded-full">
                  <Activity className="size-3 text-[#F56A00] animate-pulse" /> Verified across 800+ national payors
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: SEAMLESS EMR/EHR INTEGRATION */}
      <section className="bg-[#FAFBFD] py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F56A00] font-extrabold block mb-2">Systems of Record Integration</span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold">Works With Your Existing Systems</h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-sans leading-relaxed">
              No migrations. No data disruption. No replacements. Clientele Pulse synchronizes with your current EMR/EHR/PM platform in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 bg-white rounded-2xl border border-neutral-200/65 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-lg bg-teal/15 text-teal-glow size-9 mb-4">
                <Database className="size-4" />
              </div>
              <h4 className="font-bold text-navy text-sm">Auto Patient Creation</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-sans">
                Intake details sync to form the clinical records instantly under the patient profile with zero typing.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-neutral-200/65 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-lg bg-teal/15 text-teal-glow size-9 mb-4">
                <ShieldCheck className="size-4" />
              </div>
              <h4 className="font-bold text-navy text-sm">Insurance Sync</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-sans">
                Automatically maps, stores, and attaches scanned cards and coverage limits to the correct payor fields.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-neutral-200/65 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-lg bg-teal/15 text-teal-glow size-9 mb-4">
                <Calendar className="size-4" />
              </div>
              <h4 className="font-bold text-navy text-sm">Appointment Sync</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-sans">
                Keep schedules optimized. Automatically updates EMR slots immediately upon booking or cancellation details.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-neutral-200/65 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-lg bg-teal/15 text-teal-glow size-9 mb-4">
                <FileText className="size-4" />
              </div>
              <h4 className="font-bold text-navy text-sm">Clinical Data Sync</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-sans">
                Seamless structured notes of scribing files stream directly into correct fields under clinician chart slots.
              </p>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-neutral-200/65 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-lg bg-teal/15 text-teal-glow size-9 mb-4">
                <Eye className="size-4" />
              </div>
              <h4 className="font-bold text-navy text-sm">Audit Trails</h4>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed font-sans">
                Each interaction and sync event tracks history records for total compliance security parameters.
              </p>
            </div>

            <div className="p-5 bg-neutral-100/70 rounded-2xl border border-[#F56A00]/10 flex flex-col justify-center items-center text-center">
              <span className="text-[11px] font-mono font-bold text-[#F56A00] uppercase tracking-wider mb-1">Pre-integrated standards</span>
              <h4 className="font-bold text-navy text-xs">Compatible with All Key Systems</h4>
              <p className="text-[10px] text-neutral-500 mt-1 max-w-xs font-sans leading-relaxed">
                Connects directly to Epic, Athena, NextGen, eClinicalWorks, and major private PMS frameworks.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: AI SCHEDULING (Statistics Cards) */}
      <section className="bg-white py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Stats Cards Left */}
            <div className="lg:col-span-6 grid sm:grid-cols-3 gap-6 select-none">
              
              <div className="p-5 rounded-2xl border border-neutral-200 bg-white hover:border-[#F56A00]/35 transition-all text-center space-y-2">
                <div className="text-3xl font-extrabold text-[#F56A00]">-35%</div>
                <h4 className="font-bold text-navy text-xs uppercase font-sans">Reduction</h4>
                <p className="text-[10px] text-neutral-500">No-Shows</p>
              </div>

              <div className="p-5 rounded-2xl border border-neutral-200 bg-white hover:border-[#F56A00]/35 transition-all text-center space-y-2">
                <div className="text-3xl font-extrabold text-[#F56A00]">-60%</div>
                <h4 className="font-bold text-navy text-xs uppercase font-sans">Reduction</h4>
                <p className="text-[10px] text-neutral-500 font-sans">Empty Slots</p>
              </div>

              <div className="p-5 rounded-2xl border border-[#F56A00]/25 bg-[#F56A00]/5 hover:shadow-md transition-all text-center space-y-2">
                <div className="text-3xl font-extrabold text-navy">-80%</div>
                <h4 className="font-bold text-[#F56A00]/90 text-xs uppercase font-sans">Reduction</h4>
                <p className="text-[10px] text-neutral-500 font-sans">Staff Calls</p>
              </div>

            </div>

            {/* Content Details Right */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-mono font-bold text-[#F56A00] uppercase tracking-wider block">Optimized Availability</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-snug">
                Reduce No-Shows and Fill More Appointments
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                Give patients total control over their appointments while streamlining active waitlists automatically behind the scenes.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex gap-3 items-start text-xs text-neutral-600">
                  <CheckCircle className="size-4.5 text-teal mt-0.5" />
                  <div>
                    <strong>Self-Service Scheduling:</strong> No more password barriers or portal login drops. Fast scheduling.
                  </div>
                </div>
                <div className="flex gap-3 items-start text-xs text-neutral-600">
                  <CheckCircle className="size-4.5 text-teal mt-0.5" />
                  <div>
                    <strong>Smart Reminders:</strong> Custom SMS text schedules optimized directly according to appointment profiles.
                  </div>
                </div>
                <div className="flex gap-3 items-start text-xs text-neutral-600">
                  <CheckCircle className="size-4.5 text-teal mt-0.5" />
                  <div>
                    <strong>Instant Rescheduling:</strong> Simple links allow prompt shifts, reverting empty spots back to lists.
                  </div>
                </div>
                <div className="flex gap-3 items-start text-xs text-neutral-600">
                  <CheckCircle className="size-4.5 text-teal mt-0.5" />
                  <div>
                    <strong>Calendar Sync:</strong> Fits natively alongside Google, Outlook, and private medical schedules.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: COMMUNICATION HUB */}
      <section className="bg-[#FAFBFD] py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F56A00] font-extrabold block mb-2">Unified Communications</span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold">One Thread. Every Conversation.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-xs relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-amber-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Front Desk
              </div>
              <h3 className="font-bold text-navy text-sm mt-2">Registration &amp; Scheduling</h3>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-sans">
                Coordinates onboarding checks, text schedule reminders, address confirmations, and portal check-in details automatically.
              </p>
              <div className="mt-4 bg-amber-50/50 p-2.5 rounded-lg border border-amber-100 text-[10px] font-mono text-amber-800">
                &ldquo;Can I move my Thursday visit?&rdquo; &rarr; <i>Auto-routed, 2 slots offered</i>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-xs relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Provider Team
              </div>
              <h3 className="font-bold text-navy text-sm mt-2">Clinical Communication</h3>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-sans">
                Routes secure symptoms reporting, medication follow-ups, post-operation checks, and provider inquiries safely.
              </p>
              <div className="mt-4 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 text-[10px] font-mono text-blue-800">
                &ldquo;Side effects on day 3 &mdash; normal?&rdquo; &rarr; <i>Scribed &amp; prepped for clinician review</i>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-xs relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-emerald-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Billing Team
              </div>
              <h3 className="font-bold text-navy text-sm mt-2">Payments &amp; Insurance</h3>
              <p className="text-xs text-neutral-500 mt-2 leading-relaxed font-sans">
                Sends digital statements immediately, manages payment installment layouts, and solves deductibles and copay questions.
              </p>
              <div className="mt-4 bg-emerald-50/55 p-2.5 rounded-lg border border-emerald-100 text-[10px] font-mono text-emerald-800">
                &ldquo;Why was my copay $30?&rdquo; &rarr; <i>Direct EOB explanation attached</i>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center select-none">
            <span className="inline-flex items-center gap-2 bg-navy text-white text-xs px-5 py-2.5 rounded-full font-sans shadow-sm font-semibold">
              <Activity className="size-4 text-[#F56A00] animate-pulse" />
              Benefit: All conversations are tracked, routed, and auditable.
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 9: PROVIDER CONSOLE (Interactive Workflow Tab Panel) */}
      <section className="bg-white py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Context Left */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#F56A00] uppercase tracking-wider block">Clinician Desktop Interface</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
                AI That Works Alongside Clinicians
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                Pulse works seamlessly in the medical arena, prepping paperwork before visits, scribing during patient meetings, and automating code structures.
              </p>

              {/* Clicking tabs updates right mockup content */}
              <div className="flex flex-col gap-2 select-none">
                <button
                  onClick={() => setActiveProviderTab('before')}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border cursor-pointer transition-all ${
                    activeProviderTab === 'before' ? 'border-[#F56A00] bg-orange-50/10' : 'border-neutral-100 hover:border-neutral-200'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-navy">1. Before Visit</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Automated Patient Briefing Profiles</p>
                  </div>
                  <ChevronRight className={`size-4 text-neutral-400 ${activeProviderTab === 'before' && 'text-[#F56A00]'}`} />
                </button>

                <button
                  onClick={() => setActiveProviderTab('during')}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border cursor-pointer transition-all ${
                    activeProviderTab === 'during' ? 'border-[#F56A00] bg-orange-50/10' : 'border-neutral-100 hover:border-neutral-200'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-navy">2. During Visit</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Real-Time voice scribing & note logging</p>
                  </div>
                  <ChevronRight className={`size-4 text-neutral-400 ${activeProviderTab === 'during' && 'text-[#F56A00]'}`} />
                </button>

                <button
                  onClick={() => setActiveProviderTab('after')}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left border cursor-pointer transition-all ${
                    activeProviderTab === 'after' ? 'border-[#F56A00] bg-orange-50/10' : 'border-neutral-100 hover:border-neutral-200'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-navy">3. After Visit</h4>
                    <p className="text-[10px] text-neutral-500 mt-0.5">Clinical Coding & direct billing handoff</p>
                  </div>
                  <ChevronRight className={`size-4 text-neutral-400 ${activeProviderTab === 'after' && 'text-[#F56A00]'}`} />
                </button>
              </div>
            </div>

            {/* Mockup Dashboard Panel Right */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAFBFD] rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-md min-h-[340px] flex flex-col justify-between">
                
                <div className="flex justify-between items-center border-b border-neutral-105 border-neutral-200 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#F56A00] animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase text-neutral-500">Pulse Provider Console</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-sky-100 text-sky-800 font-mono font-bold uppercase py-0.5 px-2 rounded-full">HIPAA Protected</span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {activeProviderTab === 'before' && (
                    <motion.div
                      key="before"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="font-sans font-bold text-navy text-sm flex items-center gap-2">
                        <Activity className="size-4 text-[#F56A00]" /> Pre-visit Briefing
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Clinicians scan summarized medical backdrops, active details, and insurance flags prior to entering treatment spaces.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3.5 pt-2">
                        <div className="p-3 bg-white border border-neutral-100 rounded-lg text-left text-xs">
                          <span className="text-[9px] uppercase font-bold text-neutral-400 block font-mono">Verified Eligibility</span>
                          <span className="font-bold text-navy mt-0.5 block">Medicare Part B OK</span>
                        </div>
                        <div className="p-3 bg-white border border-neutral-100 rounded-lg text-left text-xs">
                          <span className="text-[9px] uppercase font-bold text-neutral-400 block font-mono">Deductible status</span>
                          <span className="font-bold text-[#F56A00] mt-0.5 block">$150 Copay Active</span>
                        </div>
                        <div className="p-3 bg-white border border-neutral-100 rounded-lg text-left text-xs col-span-2">
                          <span className="text-[9px] uppercase font-bold text-neutral-400 block font-mono">Records attached</span>
                          <span className="font-bold text-navy mt-0.5 block">X-Ray (Left Knee) &amp; Lab Reports</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeProviderTab === 'during' && (
                    <motion.div
                      key="during"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="font-sans font-bold text-navy text-sm flex items-center gap-2">
                        <MessageSquare className="size-4 text-[#F56A00]" /> AI In-Room Scribing
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Clinician hands stay entirely on the patients. Ambient voice capture registers dialogue parameters, mapping medical outputs accurately.
                      </p>

                      <div className="bg-white border border-neutral-100 p-3.5 rounded-lg font-mono text-[10px] space-y-2 text-left text-neutral-600 bg-linear-to-r from-orange-50/10 to-teal-50/10">
                        <div className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-[#F56A00] animate-ping" /> Real-time sound wave capturing...</div>
                        <p className="italic">&ldquo;Patient reports localized swelling around joint...&rdquo;</p>
                        <div className="border-t border-neutral-100 pt-1.5 text-teal font-sans font-bold flex items-center gap-1.5">
                          <CheckCircle className="size-3 text-teal" /> Scribed summary details generated in EHR schema templates
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeProviderTab === 'after' && (
                    <motion.div
                      key="after"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <h3 className="font-sans font-bold text-navy text-sm flex items-center gap-2">
                        <Brain className="size-4 text-[#F56A00]" /> Coding &amp; Handoff Optimization
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        Automatic CPT and ICD-10 suggestions populate based on voice chart summaries, removing manual entry burdens for clinicians.
                      </p>

                      <div className="grid grid-cols-2 gap-3 pt-1 text-left">
                        <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs">
                          <span className="text-[9px] uppercase font-bold text-[#F56A00] block font-mono">icd-10 suggested</span>
                          <pre className="font-mono text-[10px] font-bold text-navy mt-0.5">M17.11 (Primary Osteo)</pre>
                        </div>
                        <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs">
                          <span className="text-[9px] uppercase font-bold text-teal block font-mono">modifier applied</span>
                          <pre className="font-mono text-[10px] font-bold text-navy mt-0.5">25 (Significant sep)</pre>
                        </div>
                        <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs col-span-2 flex items-center justify-between">
                          <div>
                            <span className="text-[9px] uppercase font-bold text-neutral-450 block font-mono">billing progress</span>
                            <span className="font-semibold text-neutral-500 text-[10px] mt-0.5 inline-block">Handoff to claims suite ready</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold bg-teal/10 text-teal px-2 py-1 rounded">SUBMITTED</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400 select-none">
                  <span>Specialty Models Activated</span>
                  <span>99.4% Note Alignment</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: AI REVENUE CYCLE AUTOMATION */}
      <section className="bg-[#FAFBFD] py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 select-none">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F56A00] font-extrabold block mb-2">Automated Revenue Management</span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold">End-to-End Revenue Cycle Management</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Prior Authorization */}
            <div className="bg-white border border-neutral-200 shadow-xs p-6 rounded-2xl">
              <div className="size-10 rounded-xl bg-orange-100/40 flex items-center justify-center text-[#F56A00] mb-5">
                <ClipboardList className="size-5" />
              </div>
              <h3 className="font-sans font-bold text-navy text-sm">Prior Authorization</h3>
              <ul className="mt-4 space-y-3 text-xs text-neutral-500">
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> Requirement Detection</li>
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> Documentation Preparation</li>
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> Submission Tracking</li>
              </ul>
            </div>

            {/* Coding */}
            <div className="bg-white border border-neutral-200 shadow-xs p-6 rounded-2xl">
              <div className="size-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal-glow mb-5">
                <Brain className="size-5" />
              </div>
              <h3 className="font-sans font-bold text-navy text-sm">Coding Assistance</h3>
              <ul className="mt-4 space-y-3 text-xs text-neutral-500">
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> ICD-10 Suggestions</li>
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> CPT Guidance</li>
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> Compliance Checks</li>
              </ul>
            </div>

            {/* Claims */}
            <div className="bg-white border border-neutral-200 shadow-xs p-6 rounded-2xl">
              <div className="size-10 rounded-xl bg-blue-105 bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
                <FileCheck className="size-5" />
              </div>
              <h3 className="font-sans font-bold text-navy text-sm">Claims Pipeline</h3>
              <ul className="mt-4 space-y-3 text-xs text-neutral-500">
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> Claim Creation</li>
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> Pre-submission Scrubbing</li>
                <li className="flex items-center gap-2"><Check className="size-3.5 text-teal shrink-0" /> Submission Readiness Score</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 11: CLAIMS & AR MANAGEMENT (Simulated Interactive Dashboard) */}
      <section className="bg-white py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 select-none">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F56A00] font-extrabold block mb-2">AR and Claims Oversight</span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold">Complete Revenue Visibility</h2>
            <p className="mt-3 text-xs text-neutral-500 font-sans">
              Real-time monitoring across claims, payment posting files, and aging AR buckets automatically updated every 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* 1. Claims Tracking */}
            <div className="lg:col-span-4 bg-[#FAFBFD] border border-neutral-200 rounded-2xl p-5 shadow-xs text-left flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#F56A00] tracking-wider block mb-3">01 // CLAIMS TRACKING</span>
                <h4 className="font-bold text-navy text-sm mb-4">Live Claims Flow (30 Day)</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3.5 bg-white border border-neutral-100 rounded-lg">
                    <span className="text-xs text-neutral-600 font-medium">Submitted Clean</span>
                    <strong className="text-sm font-sans text-navy">1,284</strong>
                  </div>
                  <div className="flex justify-between items-center p-3.5 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-amber-400" />
                      <span className="text-xs text-neutral-600 font-medium">Pending Payer Review</span>
                    </div>
                    <strong className="text-sm font-sans text-navy">147</strong>
                  </div>
                  <div className="flex justify-between items-center p-3.5 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-red-400" />
                      <span className="text-xs text-neutral-600 font-medium">Rejected</span>
                    </div>
                    <strong className="text-sm font-sans text-navy">23</strong>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-neutral-400 italic mt-6">Illustrative volumes tracking for an active specialized clinic pool</p>
            </div>

            {/* 2. Payment Posting */}
            <div className="lg:col-span-4 bg-[#FAFBFD] border border-neutral-200 rounded-2xl p-5 shadow-xs text-left flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-teal tracking-wider block mb-3">02 // PAYMENT POSTING</span>
                <h4 className="font-bold text-navy text-sm mb-4">ERA &amp; EOB Intake Desk</h4>
                
                <div className="space-y-4">
                  <div className="flex gap-2.5 items-start">
                    <CheckCircle className="size-4 text-teal mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold text-navy">ERA/EOB Reconciliation</h5>
                      <p className="text-[10px] text-neutral-400 mt-0.5 leading-relaxed">Automated matching of payment checks straight back into EMR records.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <CheckCircle className="size-4 text-teal mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold text-navy">Underpayment Alerts</h5>
                      <p className="text-[10px] text-neutral-400 mt-0.5 leading-relaxed">Live contract-matching engine scans if payors are paying below contracts.</p>
                    </div>
                  </div>

                  <div className="flex gap-2.5 items-start">
                    <CheckCircle className="size-4 text-teal mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold text-navy">Variance Detection</h5>
                      <p className="text-[10px] text-neutral-400 mt-0.5 leading-relaxed">Checks and alerts if payer payments mismatch expected amounts.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-neutral-400 mt-6">Integrated straight to clearinghouses and secure banks</p>
            </div>

            {/* 3. AR Management */}
            <div className="lg:col-span-4 bg-[#FAFBFD] border border-neutral-200 rounded-2xl p-5 shadow-xs text-left flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-blue-600 tracking-wider block mb-3">03 // AR PERFORMANCE</span>
                <h4 className="font-bold text-navy text-sm mb-4">AR Aging Distribution</h4>
                
                <div className="space-y-3.5">
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500 uppercase font-mono text-[10px]">0–30 Days (Clean Range)</span>
                      <strong className="text-navy">65%</strong>
                    </div>
                    <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal h-full" style={{ width: '65%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500 uppercase font-mono text-[10px]">31–60 Days</span>
                      <strong className="text-navy">20%</strong>
                    </div>
                    <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full" style={{ width: '20%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500 uppercase font-mono text-[10px]">61–90 Days</span>
                      <strong className="text-navy">10%</strong>
                    </div>
                    <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-400 h-full" style={{ width: '10%' }} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500 uppercase font-mono text-[10px]">90+ Days (Critical Bucket)</span>
                      <strong className="font-bold text-red-500">5%</strong>
                    </div>
                    <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full" style={{ width: '5%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-neutral-400 mt-6 font-mono text-center bg-white py-1 rounded">Overall Net Days in AR: 31 Days Average</p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 12: AI DENIAL MANAGEMENT */}
      <section className="bg-[#FAFBFD] py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono font-bold text-[#F56A00] uppercase tracking-wider block">Denial Desk Gatekeeper</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
                Stop Revenue Leakage Before It Happens
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed font-sans">
                Most denials are entirely preventable if scanned upstream. Clientele Pulse analyzes claim parameters prior to routing, tracking corrections and missing parameters accurately.
              </p>
              
              <div className="bg-white p-4 rounded-xl border border-neutral-200. flex items-center justify-center border-neutral-200 text-xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-navy">
                  <Activity className="size-4 text-[#F56A00] animate-pulse" /> Automatically generated appeal bundles
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 select-none">
              
              {/* Detect Module */}
              <div className="bg-white border border-neutral-200 p-5 rounded-2xl text-left space-y-4">
                <div className="flex items-center gap-2 border-b border-neutral-100 pb-2">
                  <span className="size-2 rounded-full bg-orange-500" />
                  <h4 className="font-bold text-navy text-xs uppercase font-mono">1. Detect Upstream</h4>
                </div>
                <ul className="space-y-3 text-xs text-neutral-500">
                  <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-[#F56A00] shrink-0" /> Denial Patterns Tracking</li>
                  <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-[#F56A00] shrink-0" /> Missing Information Alerts</li>
                  <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-[#F56A00] shrink-0" /> Documentation Gaps Flags</li>
                  <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-[#F56A00] shrink-0" /> Pre-submission Coding Errors</li>
                </ul>
              </div>

              {/* Recover Module */}
              <div className="bg-white border border-neutral-200 p-5 rounded-2xl text-left space-y-4">
                <div className="flex items-center gap-2 border-b border-neutral-100 pb-2">
                  <span className="size-2 rounded-full bg-teal" />
                  <h4 className="font-bold text-navy text-xs uppercase font-mono">2. Recover Downstream</h4>
                </div>
                <ul className="space-y-3 text-xs text-neutral-500">
                  <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Corrective Actions Workflow</li>
                  <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Upstream recommendations</li>
                  <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Appeal Letter Compilers</li>
                  <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Electronic status monitoring</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 13: ROLE-BASED DASHBOARDS (Simulation Deck Tabs) */}
      <section className="bg-white py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-14 select-none">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F56A00] font-extrabold block mb-2">Targeted Visual Analytics</span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold">The Right Insights for Every Team</h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-sans leading-relaxed">
              We separate clinical metrics, patient statements, front desk workloads, and executive performance data into custom screens.
            </p>
          </div>

          {/* Interactive tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 select-none">
            {[
              { id: 'patient', label: 'Patient Portal' },
              { id: 'provider', label: 'Clinician Console' },
              { id: 'frontdesk', label: 'Front Office Desk' },
              { id: 'management', label: 'Executive Leadership' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDashboardTab(tab.id as any)}
                className={`py-2 px-5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                  activeDashboardTab === tab.id
                    ? 'bg-navy border-navy text-white shadow-sm'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-500 hover:bg-neutral-100 hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dashboard Container Box */}
          <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-sm min-h-[300px]">
            
            <AnimatePresence mode="wait">
              {activeDashboardTab === 'patient' && (
                <motion.div
                  key="patient"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 text-left"
                >
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                    <h4 className="font-bold text-navy text-sm font-sans">Patient Portal view &mdash; My Health Desk</h4>
                    <span className="text-[10px] bg-teal/10 text-teal px-2 py-0.5 rounded font-mono font-bold">Patient Connected</span>
                  </div>
                  <div className="grid sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Upcoming Appointment</span>
                      <strong className="text-navy mt-1 block">Dr. Park (Thu 10:30 AM)</strong>
                    </div>
                    <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Lab Reports</span>
                      <strong className="text-teal mt-1 block">2 new results autochecked</strong>
                    </div>
                    <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Statements &amp; Statements</span>
                      <strong className="text-navy mt-1 block">$0.00 Balance met</strong>
                    </div>
                    <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Medical Files</span>
                      <strong className="text-neutral-500 mt-1 block">12 documents uploaded</strong>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeDashboardTab === 'provider' && (
                <motion.div
                  key="provider"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 text-left"
                >
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                    <h4 className="font-bold text-navy text-sm font-sans">Clinician Companion dashboard &mdash; Dr. Park Desk</h4>
                    <span className="text-[10px] bg-blue-105 bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-mono font-bold">AI Scribe Console</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-3.5 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Active Patient readiness</span>
                      <strong className="text-navy mt-1 block">Anita Lopez (Details Prepped)</strong>
                    </div>
                    <div className="p-3.5 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Scribing Note Session</span>
                      <strong className="text-[#F56A00] mt-1 block">Voice Waveform Ready (Click record)</strong>
                    </div>
                    <div className="p-3.5 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Coding suggestions</span>
                      <strong className="text-navy mt-1 block">Auto mapping ICD-10 suggestions</strong>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeDashboardTab === 'frontdesk' && (
                <motion.div
                  key="frontdesk"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 text-left"
                >
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                    <h4 className="font-bold text-navy text-sm font-sans">Front Office intake hub &mdash; Reception Core</h4>
                    <span className="text-[10px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded font-mono font-bold">Active Intake Queue</span>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-3.5 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Smart Intake Status</span>
                      <strong className="text-teal mt-1 block">9 New check-ins digitized today</strong>
                    </div>
                    <div className="p-3.5 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Active Scheduling alerts</span>
                      <strong className="text-navy mt-1 block">Waitlist auto-fill queue active</strong>
                    </div>
                    <div className="p-3.5 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Copay confirmations</span>
                      <strong className="text-[#F56A00] mt-1 block">Pre-registration eligibility verified</strong>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeDashboardTab === 'management' && (
                <motion.div
                  key="management"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="space-y-4 text-left"
                >
                  <div className="flex justify-between items-center border-b border-neutral-200 pb-3">
                    <h4 className="font-bold text-navy text-sm font-sans">Corporate Executive dashboard &mdash; Operations Console</h4>
                    <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-mono font-bold">Executive RCM KPI</span>
                  </div>
                  <div className="grid sm:grid-cols-4 gap-4 pt-2">
                    <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Days in AR</span>
                      <strong className="text-navy mt-1 block">31.2 Days (Target met)</strong>
                    </div>
                    <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Claim clean pass rate</span>
                      <strong className="text-[#F56A00] mt-1 block">99.2% Average Pass</strong>
                    </div>
                    <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Denial rate</span>
                      <strong className="text-teal mt-1 block">2.4% (Historic low)</strong>
                    </div>
                    <div className="p-3 bg-white border border-neutral-100 rounded-lg text-xs leading-relaxed">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block">Monthly collections</span>
                      <strong className="text-navy mt-1 block">$1.4M (Up 18% YoY)</strong>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* SECTION 14: BUSINESS IMPACT */}
      <section className="bg-[#FAFBFD] py-20 border-b border-neutral-100 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 select-none">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F56A00] font-extrabold block mb-2">Quantifiable Value Delivery</span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold">Operational Transformation Across Every Department</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Block 1 */}
            <div className="p-5 bg-white border border-neutral-200 rounded-2xl shadow-xs space-y-4">
              <div className="font-mono text-xs font-bold text-[#F56A00] uppercase tracking-wide">PX // PATIENT EXPERIENCE</div>
              <h3 className="font-bold text-navy text-sm font-sans">Patient Experience</h3>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-sans">
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Faster Registration</li>
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Better Communication</li>
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Less Waiting</li>
              </ul>
            </div>

            {/* Block 2 */}
            <div className="p-5 bg-white border border-neutral-200 rounded-2xl shadow-xs space-y-4">
              <div className="font-mono text-xs font-bold text-teal uppercase tracking-wide">FO // FRONT OFFICE</div>
              <h3 className="font-bold text-navy text-sm font-sans">Front Office</h3>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-sans">
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Reduced Workload</li>
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Automated Eligibility</li>
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> No Manual Data Entry</li>
              </ul>
            </div>

            {/* Block 3 */}
            <div className="p-5 bg-white border border-neutral-200 rounded-2xl shadow-xs space-y-4">
              <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wide">PR // PROVIDERS</div>
              <h3 className="font-bold text-navy text-sm font-sans">Providers</h3>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-sans">
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Less Documentation</li>
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> More Patient Focus</li>
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Auto Visit Preparation</li>
              </ul>
            </div>

            {/* Block 4 */}
            <div className="p-5 bg-navy text-white rounded-2xl shadow-xs space-y-4">
              <div className="font-mono text-xs font-bold text-[#F56A00] uppercase tracking-wide">RT // REVENUE TEAMS</div>
              <h3 className="font-bold text-white text-sm font-sans">Revenue Teams</h3>
              <ul className="space-y-2.5 text-xs text-white/80 font-sans">
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Faster Claims</li>
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Better Collections</li>
                <li className="flex gap-2 items-center"><CheckCircle className="size-4 text-teal shrink-0" /> Reduced Denials</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-navy py-20 text-white relative overflow-hidden text-center border-b border-white/5">
        
        {/* Subtle decorative glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#06172a] via-[#0A1628] to-[#122c4d] opacity-95" />
        <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#F56A00]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 space-y-8 z-10 select-none">
          
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-teal">
              Next-Generation Revenue cycle Management
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight max-w-2xl mx-auto text-white">
              The Intelligent Bridge Between Care Delivery and Revenue Success
            </h2>
            
            <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto font-sans">
              Connect. Automate. Optimize. Transform. Build clean medical claims from clinical records automatically with Clientele Pulse.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-bold text-sm">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="w-full sm:w-auto rounded-full bg-teal text-navy py-3.5 px-8 hover:bg-teal-glow hover:-translate-y-0.5 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 shadow-md"
              style={{ backgroundColor: '#1C9E75', color: '#ffffff' }}
            >
              Schedule a Demo <ArrowUpRight className="size-4" />
            </a>
            
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="w-full sm:w-auto rounded-full border border-white/20 hover:border-white text-white py-3.5 px-8 hover:bg-white/5 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
            >
              Talk to an Expert
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
