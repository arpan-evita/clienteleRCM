import React, { useState } from 'react';
import { motion } from 'motion/react';
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
  ArrowUpRight,
  Award,
  Lock,
  Sparkles,
  DollarSign,
  ChevronDown,
  AlertTriangle,
  Play,
  RotateCcw
} from 'lucide-react';

interface ClientelePlusProps {
  navigate: (path: string) => void;
}

export default function ClientelePlus({ navigate }: ClientelePlusProps) {
  // Navigation Helper
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // State Management for Interactive Modules
  // 1. OCR Sim State
  const [ocrMode, setOcrMode] = useState<'optionA' | 'optionB'>('optionB');
  const [ocrStatus, setOcrStatus] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [ocrProgress, setOcrProgress] = useState(0);
  const [ocrType, setOcrType] = useState<'dl' | 'insurance' | null>(null);

  // 2. Eligibility Check State
  const [eligibilityStatus, setEligibilityStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [eligibilityReport, setEligibilityReport] = useState<any>({
    active: '🟢 Awaiting Real-Time Query',
    carrier: 'Blue Cross Blue Shield Plan Choice Plus',
    copay: '—',
    deductible: '—',
    restrictions: '—',
  });

  // 3. Billing & Booking Selection State
  const [selectedProvider, setSelectedProvider] = useState('Dr. Park · Internal Medicine');
  const [selectedLoc, setSelectedLoc] = useState('Westview Clinic');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Annual physical');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:30 AM');
  const [bookingStep, setBookingStep] = useState<'idle' | 'booking' | 'confirmed'>('idle');

  // 4. Communication Channel State
  const [chatChannel, setChatChannel] = useState<'front' | 'provider' | 'billing'>('front');

  // 5. Claims Scrubber State
  const [scrubStatus, setScrubStatus] = useState<'dirty' | 'scrubbing' | 'clean'>('dirty');
  const [scrubErrors, setScrubErrors] = useState<string[]>([
    'Missing CPT Modifier -25 on Orthopedic Consultation',
    'Subscriber Name Mismatch on Insurance Entry',
    'Invalid Bundling Protocol (99214 Evaluation + 20550 Injection)'
  ]);

  // 6. Dashboards Active view
  const [activeRole, setActiveRole] = useState<'patient' | 'provider' | 'front' | 'billing' | 'executive'>('patient');

  // 7. Pocket Interactive App Companion Switcher
  const [pocketActiveTab, setPocketActiveTab] = useState<'provider' | 'patient'>('provider');

  // 8. Automated Payment Posting Simulator states
  const [postingStatus, setPostingStatus] = useState<'idle' | 'posting' | 'success'>('idle');

  // 9. AR Automation Simulator states
  const [arAction, setArAction] = useState<'pathway' | 'generating' | 'submitted'>('pathway');
  const [arSelectedPath, setArSelectedPath] = useState<'correct' | 'appeal'>('correct');

  // Active section tracker for the sticky left navigation tape
  const sections = [
    { id: 'vision', label: '01 · Vision & Shifts' },
    { id: 'strategy', label: '02 · 80/20 Strategy' },
    { id: 'workflow', label: '03 · Patient Console' },
    { id: 'onboarding', label: '04 · Intake & OCR' },
    { id: 'eligibility', label: '05 · Instant Eligibility' },
    { id: 'scheduling', label: '06 · Custom Booking' },
    { id: 'comms', label: '07 · Live Comms' },
    { id: 'clinician', label: '08 · Clinician Assist' },
    { id: 'rcm', label: '09 · Revenue Cycle' },
    { id: 'denial-prevention', label: '10 · Denial Prevention' },
    { id: 'payment-posting', label: '11 · Payment Posting' },
    { id: 'ar-automation', label: '12 · AR Automation' },
    { id: 'analytics', label: '13 · Real-Time Dashboards' },
    { id: 'outcomes', label: '14 · Core Benefits' },
  ];

  // Helper smooth scroll
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Run Simulators
  const runOcrSim = (type: 'dl' | 'insurance') => {
    setOcrStatus('scanning');
    setOcrProgress(0);
    setOcrType(type);
    
    let currentPrg = 0;
    const interval = setInterval(() => {
      currentPrg += 10;
      setOcrProgress(currentPrg);
      if (currentPrg >= 100) {
        clearInterval(interval);
        setOcrStatus('done');
      }
    }, 100);
  };

  const runEligibilityChecker = () => {
    setEligibilityStatus('running');
    setTimeout(() => {
      setEligibilityStatus('completed');
      setEligibilityReport({
        active: '🟢 Fully Active Standard Coverage',
        carrier: 'Blue Cross Blue Shield Plan Choice Plus',
        copay: '$25.00 Copayment (Specialist Visit)',
        deductible: '$1,500.00 Total ($350.00 Met)',
        coinsurance: '15% Coinsurance Weight',
        oop: '$4,000.00 Limit ($1,200.00 Met)',
        restrictions: 'Prior Authorization checklist mandatory on CPT Code 20550',
      });
    }, 1200);
  };

  const triggerSelfBooking = () => {
    setBookingStep('booking');
    setTimeout(() => {
      setBookingStep('confirmed');
    }, 1200);
  };

  const runScrubber = () => {
    setScrubStatus('scrubbing');
    setTimeout(() => {
      setScrubStatus('clean');
      setScrubErrors([]);
    }, 1500);
  };

  return (
    <div className="bg-[#FAFBFD] text-navy min-h-screen text-left">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-white border-b border-neutral-100 pt-24 pb-16">
        <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-teal/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 left-[-5%] w-[350px] h-[350px] bg-[#F56A00]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F56A00]/20 bg-[#F56A00]/5 px-4 py-1.5 text-xs font-semibold text-[#F56A00]">
              <Sparkles className="size-3.5 fill-[#F56A00]/20" /> Clientele Plus Suite Launch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Clientele Plus <br />
              <span className="text-neutral-500 font-sans text-2xl sm:text-3xl lg:text-4xl block mt-3 font-normal">
                Autonomous Revenue Cycle & Operational Intelligence
              </span>
            </h1>
            <p className="text-neutral-600 max-w-2xl text-base leading-relaxed font-sans">
              Experience the complete, unedited product architecture and operating model compiled from our executive blueprints. Explore the strategic shift from human-dependent paperwork to AI-assisted, real-time intelligence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollToSection('vision')}
                className="rounded-full bg-navy hover:bg-navy-deep text-white text-xs font-bold px-7 py-3.5 transition-transform hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Platform Capabilities ↓
              </button>
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="rounded-full border border-neutral-250 hover:bg-neutral-50 text-neutral-600 text-xs font-bold px-7 py-3.5 transition-transform hover:-translate-y-0.5"
              >
                Request Practice Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS TOP STRIP */}
      <section className="bg-navy border-b border-teal/20 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-r border-white/10 pr-4">
            <div className="text-2xl font-bold text-teal">80%</div>
            <div className="text-[10px] font-mono tracking-widest text-[#B4C3D0] uppercase mt-0.5">Automated Workloads</div>
          </div>
          <div className="border-r border-white/10 pr-4">
            <div className="text-2xl font-bold text-white">&lt; 30s</div>
            <div className="text-[10px] font-mono tracking-widest text-[#B4C3D0] uppercase mt-0.5">Eligibility Verification</div>
          </div>
          <div className="border-r border-white/10 pr-4">
            <div className="text-2xl font-bold text-teal">99.2%</div>
            <div className="text-[10px] font-mono tracking-widest text-[#B4C3D0] uppercase mt-0.5">Clean-Claim Fidelity</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">-35%</div>
            <div className="text-[10px] font-mono tracking-widest text-[#B4C3D0] uppercase mt-0.5">Average No-Show Rate</div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

            {/* SECTION 1: VISION & SHIFTS */}
            <section id="vision" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">01 · Strategic Vision</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 1</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Transform Healthcare Administration of Modern Practices with Applied AI
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  The primary operations model shifts that transition clinical workflows from manual, paper-cluttered processes to connected, real-time automation.
                </p>
              </div>

              {/* 5 SHIFTS GRID */}
              <div className="space-y-3.5">
                {[
                  { from: 'Manual Administrative Redos', to: 'Autonomous Workload Dispatch', label: 'Operations Speed', desc: 'Predictive forms routing replaces manual typing.' },
                  { from: 'Reactive Claim Discrepancies', to: 'Real-Time Eligibility Checking', label: 'Payer Interface', desc: 'Queries eligibility immediately within 30 seconds.' },
                  { from: 'Disconnected EMR Records', to: 'Fully Unified Bilateral Sync', label: 'Fidelity', desc: 'Automated clinical data committing with zero front-desk interference.' },
                  { from: 'Exhausting Paperwork Audits', to: 'Applied Scribing Intelligence', label: 'Clinician Overhead', desc: 'AI ambient room scribing minimizes charting time.' },
                  { from: 'Staff Phone Tag Disputes', to: 'Single Secure Communication Context', label: 'Patient Experience', desc: 'One shared thread routes billing, provider, and admin updates.' }
                ].map((item, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 items-center border border-neutral-100 rounded-xl p-4 gap-4 bg-[#FAFBFD]/50 hover:bg-[#FAFBFD] transition-colors">
                    <div className="md:col-span-4 text-left">
                      <span className="text-[9px] uppercase font-bold text-neutral-400 font-mono block mb-1">Traditional Model</span>
                      <span className="text-xs font-semibold text-neutral-500">{item.from}</span>
                    </div>
                    <div className="md:col-span-1 flex justify-start md:justify-center text-[#F56A00]">
                      <ArrowRight className="size-4 rotate-90 md:rotate-0" />
                    </div>
                    <div className="md:col-span-5 text-left bg-navy text-white px-4 py-3 rounded-xl border border-white/5 shadow-xs">
                      <span className="text-[9px] uppercase font-bold text-teal font-mono block mb-0.5">{item.label}</span>
                      <span className="text-xs font-bold text-[#FAFBFD] tracking-wide block">{item.to}</span>
                      <p className="text-[10.5px] text-[#FAFBFD]/75 font-sans mt-1 leading-snug">{item.desc}</p>
                    </div>
                    <div className="md:col-span-2 text-right hidden md:block">
                      <span className="inline-flex items-center gap-1 rounded bg-teal/10 px-2 py-0.5 text-[10px] font-mono text-teal font-bold">
                        Shift 0{idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>


            {/* SECTION 2: THE 80/20 OPERATING MODEL */}
            <section id="strategy" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">02 · Resource Strategy</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 2</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  80% AI Automation. 20% Human-in-the-Loop Safeguards.
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  The artificial intelligence coordinates redundant, high-volume operations autonomously, leaving complex edge cases and clinical escalations to practitioners.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                {/* 80% AI CONTAINER */}
                <div className="bg-navy rounded-2xl p-6 border border-white/5 text-white flex flex-col justify-between relative overflow-hidden shadow-xs">
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-teal/10 px-2.5 py-1 rounded text-[10px] font-mono text-teal font-bold uppercase tracking-wider">
                    <Activity className="size-3 animate-pulse text-teal" /> Autonomous Dispatch
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-teal font-display">80%</h3>
                    <p className="text-xs font-bold tracking-widest text-[#F56A00] uppercase mt-1">Autonomous Workload</p>
                    <ul className="mt-6 space-y-3.5 text-xs text-[#E1EBF5] font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>Instant image OCR capture on demographics.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>Bilateral scheduling with EMR availability matrices.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>Pre-visit charting summarization & modifiers check.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>Pre-submission claim scrubbing and automated error repairs.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-6 pt-3 border-t border-white/10">
                    Eliminating manual data input and redundant office checks.
                  </div>
                </div>

                {/* 20% HUMAN IN THE LOOP */}
                <div className="bg-[#FAFBFD] rounded-2xl p-6 border border-neutral-200/80 flex flex-col justify-between shadow-xs">
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-neutral-200/50 px-2.5 py-1 rounded text-[10px] font-mono text-neutral-500 font-bold uppercase">
                    Verification Protocol
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-navy font-display">20%</h3>
                    <p className="text-xs font-bold tracking-widest text-neutral-500 uppercase mt-1">Practitioner Judgement</p>
                    <ul className="mt-6 space-y-3.5 text-xs text-neutral-600 font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-[#F56A00] shrink-0 mt-0.5" />
                        <span>Resolving billing code exceptions on scrub conflicts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-[#F56A00] shrink-0 mt-0.5" />
                        <span>Complex patient co-insurance disputes evaluation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-[#F56A00] shrink-0 mt-0.5" />
                        <span>Direct clinical consultation and patient comforting.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-[#F56A00] shrink-0 mt-0.5" />
                        <span>Review and sign-off on ambient scribed notes.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-6 pt-3 border-t border-neutral-200">
                    Frees staff focus for patient comfort and elite care services.
                  </div>
                </div>
              </div>
            </section>


            {/* SECTION 3: THE CONNECTED PATIENT JOURNEY (8 WORKFLOWS) */}
            <section id="workflow" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">03 · Patient Pipeline</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-450">Section 3</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  From Intelligent Access to Fully Closed Financial Loops
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  The client moves flawlessly through an 8-stage sequence they direct entirely from their personal browser, keeping practice staff out of the paperwork loop.
                </p>
              </div>

              {/* 8 PIPELINE MOVES */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { step: '01', title: 'Open Practise Portal', desc: 'Secure custom landing page matches user identity credentials.' },
                  { step: '02', title: 'Profile Registration', desc: 'No manual typing needed — credentials generated with multi-factor passkeys.' },
                  { step: '03', title: 'Coverage Check', desc: 'AI extracts insurance card info and queries national payers in real-time.' },
                  { step: '04', title: 'Immediate Booking', desc: 'Select specialist, clinics, and open calendar slots synced with provider EMRs.' },
                  { step: '05', title: 'EMR Sync Commit', desc: 'Pulse writes patient data back into practice records immediately with zero lag.' },
                  { step: '06', title: 'Provider Care Prep', desc: 'Aggregates previous lab reports and previous clinical histories systematically.' },
                  { step: '07', title: 'Visit Scribing', desc: 'Ambient voice parsing transcribes the patient encounter into clean, structured notes.' },
                  { step: '08', title: 'Closed RCM Loop', desc: 'Billing claims are automatically compiled, scrubbed for CPT errors, and submitted.' }
                ].map((item, index) => (
                  <div key={item.step} className="p-4 rounded-xl border border-neutral-100 bg-[#FAFBFD] hover:shadow-xs transition-shadow">
                    <span className="text-xs font-mono font-bold text-[#F56A00]">{item.step}</span>
                    <h4 className="font-bold text-navy text-xs mt-1.5 leading-tight">{item.title}</h4>
                    <p className="text-[10.5px] text-neutral-500 mt-1 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>


            {/* SECTION 4: SMART INTAKE & AUTO-OCR */}
            <section id="onboarding" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">04 · Intelligent Intake</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 4</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Intake Completed in 5 Input Fields. Or 1 Quick Photo.
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  Test the smart registration simulation below. Click the buttons to simulate patient uploading documents. Our applied computer-vision model auto-populates demographics immediately.
                </p>
              </div>

              {/* DEMO CONTAINER */}
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                
                {/* Left: Input upload trigger */}
                <div className="bg-[#FAFBFD] p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">Document Upload Hub</span>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => runOcrSim('dl')}
                        className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                          ocrType === 'dl' && ocrStatus === 'done'
                            ? 'border-teal bg-teal/5'
                            : 'border-neutral-200 border-dashed bg-white hover:bg-neutral-50'
                        }`}
                      >
                        <Smartphone className="size-6 text-neutral-550 border-neutral-200 text-neutral-500" />
                        <span className="text-xs font-bold text-navy mt-2">Driver&apos;s License</span>
                        <span className="text-[9px] text-neutral-400 mt-0.5">Front &amp; Back</span>
                      </button>
                      
                      <button
                        onClick={() => runOcrSim('insurance')}
                        className={`p-4 border rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                          ocrType === 'insurance' && ocrStatus === 'done'
                            ? 'border-teal bg-teal/5'
                            : 'border-neutral-200 border-dashed bg-white hover:bg-neutral-50'
                        }`}
                      >
                        <FileText className="size-6 text-neutral-550 border-neutral-200 text-neutral-500" />
                        <span className="text-xs font-bold text-navy mt-2">Insurance Card</span>
                        <span className="text-[9px] text-neutral-400 mt-0.5">Carrier side</span>
                      </button>
                    </div>

                    {ocrStatus === 'scanning' && (
                      <div className="space-y-1.5 p-3 bg-white border border-neutral-150 rounded-xl">
                        <div className="flex justify-between text-[10px] font-mono text-[#F56A00] font-bold">
                          <span>Applied Computer-Vision OCR Scanning...</span>
                          <span>{ocrProgress}%</span>
                        </div>
                        <div className="w-full bg-neutral-250 bg-neutral-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#F56A00] h-full transition-all duration-100" style={{ width: `${ocrProgress}%` }} />
                        </div>
                      </div>
                    )}

                    {ocrStatus === 'done' && (
                      <div className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-xs space-y-1">
                        <span className="font-bold flex items-center gap-1.5">
                          <CheckCircle className="size-4" /> OCR Extracted Successfully!
                        </span>
                        <p className="text-[11px] text-emerald-700 font-sans">
                          Pulse parsed the driver license and insurance parameters with high-integrity matching indexes.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-neutral-400 font-mono mt-4">
                    *Tuned specifically on high reflectivity and typical client smartphone focus bounds.
                  </div>
                </div>

                {/* Right: Output parsed view */}
                <div className="bg-navy text-white p-6 rounded-2xl border border-white/5 space-y-4 flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="text-xs font-mono text-teal uppercase font-bold tracking-wider flex items-center justify-between pb-3 border-b border-white/10">
                      <span>Live Demographics Record</span>
                      {ocrStatus === 'done' ? (
                        <span className="text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">Matched</span>
                      ) : (
                        <span className="text-[9px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Awaiting Upload</span>
                      )}
                    </div>

                    <div className="space-y-3.5 text-xs mt-4">
                      <div className="bg-white/5 p-3.5 rounded-xl space-y-1.5">
                        <div className="text-[9.5px] text-teal font-mono uppercase tracking-wider">Demographic Attributes</div>
                        <div className="flex justify-between text-white/80">
                          <span>Full Name:</span> 
                          <strong className={ocrStatus === 'done' ? 'text-white' : 'text-white/40'}>
                            {ocrStatus === 'done' ? 'Anita Lopez' : 'Awaiting sync...'}
                          </strong>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Date of Birth:</span> 
                          <strong className={ocrStatus === 'done' ? 'text-white' : 'text-white/40'}>
                            {ocrStatus === 'done' ? '04/12/1986' : 'Awaiting sync...'}
                          </strong>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Parsed Gender:</span> 
                          <strong className={ocrStatus === 'done' ? 'text-white' : 'text-white/40'}>
                            {ocrStatus === 'done' ? 'Female' : 'Awaiting sync...'}
                          </strong>
                        </div>
                      </div>

                      <div className="bg-white/5 p-3.5 rounded-xl space-y-1.5">
                        <div className="text-[9.5px] text-teal font-mono uppercase tracking-wider">Carrier &amp; Plan Parameters</div>
                        <div className="flex justify-between text-white/80">
                          <span>Carrier:</span> 
                          <strong className={ocrStatus === 'done' ? 'text-white' : 'text-white/40'}>
                            {ocrStatus === 'done' ? 'BCBS Illinois (Plan Choice)' : 'Awaiting card scanner...'}
                          </strong>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Member Identification:</span> 
                          <strong className={ocrStatus === 'done' ? 'text-white font-mono' : 'text-white/40'}>
                            {ocrStatus === 'done' ? 'XOF-890218765' : 'Awaiting card scanner...'}
                          </strong>
                        </div>
                        <div className="flex justify-between text-white/80">
                          <span>Group Identifier:</span> 
                          <strong className={ocrStatus === 'done' ? 'text-white font-mono' : 'text-white/40'}>
                            {ocrStatus === 'done' ? 'BC-9921-A' : 'Awaiting card scanner...'}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[9.5px] text-center text-[#F56A00] font-mono bg-[#F56A00]/5 py-2 rounded-lg border border-[#F56A00]/10">
                    ✓ Verified DL Matches Insurance Subscriber Record
                  </div>
                </div>

              </div>
            </section>


            {/* SECTION 5: REAL-TIME ELIGIBILITY VERIFICATION */}
            <section id="eligibility" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">05 · Eligibility Check</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 5</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Pre-Check Copays and Co-Insurance Before Patients Arrive
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  Once registered, Pulse calls national payer portals to resolve plan exclusions, CPT prior authorization mandates, and deductibles within 30 seconds.
                </p>
              </div>

              {/* ELIGIBILITY TRACKS */}
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                
                <div className="bg-[#FAFBFD] p-6 rounded-2xl border border-neutral-200 space-y-4 text-left flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">Payer Network API Integration</span>
                    <h3 className="font-bold text-navy text-sm">Automated Real-Time 270/271 Portals Query</h3>
                    
                    <p className="text-xs text-neutral-500 font-sans mt-2 leading-relaxed">
                      Instead of calling insurers or spending hours checking portals, the practice maps out copay and prior authorization (PA) checks instantly.
                    </p>

                    <div className="bg-white p-3 rounded-xl border border-neutral-100 mt-4 space-y-2">
                      <div className="flex justify-between text-xs font-mono text-neutral-500">
                        <span>Payer Connection:</span>
                        <strong className="text-navy">ANSI ASC X12 270/271</strong>
                      </div>
                      <div className="w-full bg-neutral-100 h-1 rounded-full overflow-hidden">
                        <div className={`h-full bg-teal transition-all ${eligibilityStatus === 'running' ? 'w-1/2 animate-pulse' : eligibilityStatus === 'completed' ? 'w-full' : 'w-0'}`} />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={runEligibilityChecker}
                    className="w-full rounded-xl bg-navy hover:bg-navy-deep text-white font-semibold text-xs py-3 flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <RefreshCw className={`size-3.5 ${eligibilityStatus === 'running' ? 'animate-spin' : ''}`} />
                    {eligibilityStatus === 'idle' ? 'Call Insurer Portal Live' : eligibilityStatus === 'running' ? 'Querying Portals (< 30s)...' : 'Carrier Query Complete'}
                  </button>
                </div>

                {/* Response Visualizer */}
                <div className="bg-white p-6 rounded-2xl border border-[#F56A00]/15 space-y-4 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-4 right-4 bg-teal/10 text-teal px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
                    Resolved Data
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#F56A00] font-bold block mb-2">Verified Coverage snap</span>
                    <ul className="space-y-2.5 text-xs">
                      <li className="flex justify-between border-b border-neutral-50 pb-2">
                        <span className="text-neutral-500">Active Status:</span>
                        <strong className="text-navy">{eligibilityStatus === 'completed' ? eligibilityReport.active : '🟢 Awaiting live trigger...'}</strong>
                      </li>
                      <li className="flex justify-between border-b border-neutral-50 pb-2">
                        <span className="text-neutral-500">Registered Carrier:</span>
                        <strong className="text-navy">{eligibilityStatus === 'completed' ? eligibilityReport.carrier : '—'}</strong>
                      </li>
                      <li className="flex justify-between border-b border-neutral-50 pb-2">
                        <span className="text-neutral-500">Dynamic Copay:</span>
                        <strong className="text-navy">{eligibilityStatus === 'completed' ? eligibilityReport.copay : '—'}</strong>
                      </li>
                      <li className="flex justify-between border-b border-neutral-50 pb-2">
                        <span className="text-neutral-500">Deductible Tracker:</span>
                        <strong className="text-navy">{eligibilityStatus === 'completed' ? eligibilityReport.deductible : '—'}</strong>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-neutral-500">CPT Prior Auth (PA) Rules:</span>
                        <strong className="text-[#F56A00] font-semibold">{eligibilityStatus === 'completed' ? eligibilityReport.restrictions : '—'}</strong>
                      </li>
                    </ul>
                  </div>

                  {eligibilityStatus === 'idle' && (
                    <div className="text-[11px] text-neutral-400 italic text-center py-4 font-mono">
                      *Click the button on the left to invoke the payer portals.
                    </div>
                  )}

                  <div className="text-[10px] text-neutral-400 font-mono mt-2">
                    Ensures clear financial estimates prior to scheduling clinical procedures.
                  </div>
                </div>

              </div>
            </section>


            {/* SECTION 6: SCHEDULING & APPOINTMENT MANAGEMENT */}
            <section id="scheduling" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">06 · Dynamic Calendars</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-440 text-neutral-400">Section 6</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Patient-Controlled Scheduling Paired with Smart Management Gains
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  From search eligibility fields straight into calendar synchronization with zero office phone calls or receptionist manual checkups.
                </p>
              </div>

              {/* INT SCHEDULER WIDGET */}
              <div className="grid md:grid-cols-12 gap-6 items-stretch">
                
                {/* Left booking selector (7 cols) */}
                <div className="md:col-span-7 bg-[#FAFBFD] p-6 rounded-2xl border border-neutral-200 space-y-4">
                  <span className="text-[10px] font-mono uppercase text-[#F56A00] font-bold block">Patient Booking Terminal</span>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <span className="text-[10px] text-neutral-500 font-bold block">Select Clinician</span>
                      <select
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-neutral-200 bg-white"
                      >
                        <option>Dr. Park · Internal Medicine</option>
                        <option>Dr. Lopez · Specialty Ortho</option>
                        <option>Dr. Harris · Pain Therapist</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-neutral-500 font-bold block">Clinic Location</span>
                      <select
                        value={selectedLoc}
                        onChange={(e) => setSelectedLoc(e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-neutral-200 bg-white"
                      >
                        <option>Westview Medical Clinic</option>
                        <option>Eastside Outpatient Facility</option>
                      </select>
                    </div>

                    <div className="space-y-1 col-span-2">
                      <span className="text-[10px] text-neutral-500 font-bold block">Visit Reasons / Specialties</span>
                      <select
                        value={selectedSpecialty}
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                        className="w-full text-xs p-2 rounded-lg border border-neutral-200 bg-white"
                      >
                        <option>Annual Physical Procedure</option>
                        <option>Orthopedic Outpatient consultation</option>
                        <option>Physical Therapy Joint Diagnostic</option>
                      </select>
                    </div>

                    <div className="space-y-1 col-span-2">
                      <span className="text-[10px] text-neutral-500 font-bold block">Available Time Slots (Synced live)</span>
                      <div className="grid grid-cols-4 gap-1.5 pt-1">
                        {['9:00', '9:30', '10:00', '10:30', '11:00', '1:00', '1:30', '2:00'].map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedTimeSlot(`${slot} AM`)}
                            className={`py-1.5 rounded-lg text-[10.5px] font-bold text-center border cursor-pointer transition-all ${
                              selectedTimeSlot.startsWith(slot)
                                ? 'bg-[#F56A00] text-white border-[#F56A00]'
                                : 'bg-white hover:bg-neutral-50 border-neutral-200 text-neutral-600'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={triggerSelfBooking}
                    className="w-full rounded-xl bg-navy hover:bg-navy-deep text-white font-semibold text-xs py-3 flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <Calendar className="size-4" /> 
                    {bookingStep === 'idle' ? 'Reserve Appointment Slot' : bookingStep === 'booking' ? 'Syncing with EMR...' : 'Appointment Saved Successfully'}
                  </button>
                </div>

                {/* Right outcomes tracker (5 cols) */}
                <div className="md:col-span-5 bg-navy text-white p-6 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] font-mono text-teal uppercase font-bold tracking-wider">Sync &amp; Coordination</span>
                    <div className="text-sm font-bold text-white mt-1 leading-tight">Zero-Disruption Integration</div>
                    
                    <ul className="mt-4 space-y-3 text-xs text-white/80 font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>Confirms doctor credential boundaries.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>Checks patient eligibility rules live.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>Commits slot directly to EMR calendars.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                        <span>Dispatches SMS verification directions.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 mt-4 text-[10px] font-mono">
                    <span className="text-teal font-bold tracking-widest uppercase block mb-1">Status Report:</span>
                    {bookingStep === 'idle' ? (
                      <span className="text-neutral-400">Awaiting slot confirmation...</span>
                    ) : bookingStep === 'booking' ? (
                      <span className="text-teal animate-pulse">Routing details...</span>
                    ) : (
                      <span className="text-emerald-400 font-semibold">🟢 Synced: {selectedTimeSlot} with {selectedProvider} at {selectedLoc}</span>
                    )}
                  </div>
                </div>

              </div>
            </section>


            {/* SECTION 7: ONE CONTEXT ROUTED COMMUNICATIONS */}
            <section id="comms" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">07 · Unified Messages</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 7</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  One Practice communication thread. Three Teams. Zero Phone Tag.
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  The client keeps one continuous thread. Behind the scenes, Pulse routes inquiries to either the front desk, provider chart, or billing office depending on context.
                </p>
              </div>

              {/* COMMS ROTATOR */}
              <div className="grid md:grid-cols-12 gap-6 items-stretch">
                
                {/* Channel Selector (5 Cols) */}
                <div className="md:col-span-5 bg-[#FAFBFD] p-5 rounded-2xl border border-neutral-200/80 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono uppercase text-navy font-bold block mb-2">Select Active Routing Channel</span>
                    
                    <button
                      onClick={() => setChatChannel('front')}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        chatChannel === 'front' ? 'border-[#F56A00] bg-white shadow-xs' : 'border-neutral-150 bg-neutral-100/30 hover:bg-neutral-100/60'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-navy">FD · Front Desk Routing</div>
                        <div className="text-[10px] text-neutral-450 text-neutral-400 font-mono mt-0.5">Scheduling steps, entry forms, arrival check-in.</div>
                      </div>
                      {chatChannel === 'front' && <div className="size-2 rounded-full bg-[#F56A00]" />}
                    </button>

                    <button
                      onClick={() => setChatChannel('provider')}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        chatChannel === 'provider' ? 'border-[#F56A00] bg-white shadow-xs' : 'border-neutral-150 bg-neutral-100/30 hover:bg-neutral-100/60'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-navy">DR · Provider Clinical Routing</div>
                        <div className="text-[10px] text-neutral-450 text-neutral-400 font-mono mt-0.5">Medical questions, post-ops help, lab results.</div>
                      </div>
                      {chatChannel === 'provider' && <div className="size-2 rounded-full bg-[#F56A00]" />}
                    </button>

                    <button
                      onClick={() => setChatChannel('billing')}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                        chatChannel === 'billing' ? 'border-[#F56A00] bg-white shadow-xs' : 'border-neutral-155 bg-neutral-100/30 hover:bg-neutral-100/60'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-navy">RCM · Practice Billing Routing</div>
                        <div className="text-[10px] text-neutral-450 text-neutral-400 font-mono mt-0.5">Claims posting statuses, insurer EOBs, deductible questions.</div>
                      </div>
                      {chatChannel === 'billing' && <div className="size-2 rounded-full bg-[#F56A00]" />}
                    </button>
                  </div>
                </div>

                {/* Secure Chat View (7 Cols) */}
                <div className="md:col-span-7 bg-navy text-white p-6 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xs">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-[10px] font-mono text-teal font-bold uppercase tracking-wider">
                        {chatChannel === 'front' ? 'FRONT DESK DISPATCH' : chatChannel === 'provider' ? 'PROVIDER CHART CONTEXT' : 'PULSE BILLING OFFICE'}
                      </span>
                      <span className="text-[10px] text-[#B4C3D0] font-mono">TLS Security Enabled</span>
                    </div>

                    {chatChannel === 'front' && (
                      <div className="space-y-3 text-xs leading-relaxed">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                          <span className="text-teal font-bold text-[9px] font-mono block mb-1">ANITA LOPEZ · PATIENT</span>
                          &quot;Can I change my physical procedure on Thursday to late afternoon? My team meeting moved.&quot;
                        </div>
                        <div className="bg-[#F56A00]/10 p-3 rounded-xl border border-[#F56A00]/30">
                          <span className="text-[#F56A00] font-bold text-[9px] font-mono block mb-1">PULSE CORE AUTO-AGENT</span>
                          &quot;Understood Anita, we found matching open slots with Dr. Park on Thursday at 2:30 PM &amp; 3:30 PM. Swap completed.&quot;
                        </div>
                      </div>
                    )}

                    {chatChannel === 'provider' && (
                      <div className="space-y-3 text-xs leading-relaxed">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                          <span className="text-teal font-bold text-[9px] font-mono block mb-1">ANITA LOPEZ · PATIENT</span>
                          &quot;I am on Day 3 of pain recovery. The surgical joint is slightly warm but bearable, is this expected?&quot;
                        </div>
                        <div className="bg-[#F56A00]/10 p-3 rounded-xl border border-[#F56A00]/30">
                          <span className="text-[#F56A00] font-bold text-[9px] font-mono block mb-1">CLINICAL DISPATCH ROUTER</span>
                          &quot;Alert piped straight to Dr. Park&apos;s chart brief queue. Prior visit notes preloaded. Replies average under 90 minutes.&quot;
                        </div>
                      </div>
                    )}

                    {chatChannel === 'billing' && (
                      <div className="space-y-3 text-xs leading-relaxed">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                          <span className="text-teal font-bold text-[9px] font-mono block mb-1">ANITA LOPEZ · PATIENT</span>
                          &quot;My insurer said my copay for orthopedic procedures is $25, but the estimate showed $40. Why?&quot;
                        </div>
                        <div className="bg-[#F56A00]/10 p-3 rounded-xl border border-[#F56A00]/30">
                          <span className="text-[#F56A00] font-bold text-[9px] font-mono block mb-1">RCM INTELLIGENCE ENGINE</span>
                          &quot;Pulled your latest 271 Eligibility report. BCBS Plan Choice Plus places orthopedic modifiers on specialist tiers. Attached details copy.&quot;
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-neutral-400 font-mono pt-3 border-t border-white/10 mt-4 text-center">
                    Auditable billing logs remain linked directly to the patient&apos;s master EMR files.
                  </div>
                </div>

              </div>
            </section>


            {/* SECTION 8: CLINICIAN ASSIST & SCRIBE */}
            <section id="clinician" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">08 · Clinician Support</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 8</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Minimize Administrative Burnout: AI Works Alongside Doctors
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  By structuring complete client narratives before, during, and after visits, clinical teams focus on direct diagnostic care rather than documentation hurdles.
                </p>
              </div>

              {/* ASSIST LOOPS GRID */}
              <div className="grid md:grid-cols-3 gap-6">
                
                <div className="bg-white rounded-2xl p-5 border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1 bg-amber-50 px-2 mt-1 rounded text-[10px] font-bold text-amber-700 uppercase font-mono">
                      Phase 1 · Pre-Visit Briefing
                    </span>
                    <h3 className="font-bold text-navy text-sm mt-3">Comprehensive Aggregation</h3>
                    <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                      Instantly indexes the patient&apos;s record, previous visits files, real-time insurer eligibility checkups, and diagnostic lab reports into a single screen.
                    </p>
                  </div>
                  <div className="border-t border-neutral-100 pt-3 mt-4 text-[10.5px] font-semibold text-[#F56A00]">
                    ✓ Preloaded &amp; Sorted 10m Prior
                  </div>
                </div>

                <div className="bg-navy text-white rounded-2xl p-5 border border-white/5 flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="inline-flex items-center gap-1 bg-[#F56A00]/10 px-2 mt-1 rounded text-[10px] font-bold text-[#F56A00] uppercase font-mono">
                      Phase 2 · During Visit
                    </span>
                    <h3 className="font-bold text-teal text-sm mt-3 font-display">Hands Off Keyboard</h3>
                    <p className="text-xs text-[#B4C3D0] mt-1.5 leading-relaxed">
                      Applied room sound parsing transcribes patient-physician dialogue into medically structured charting notes in real-time.
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-3 mt-4 text-[10.5px] font-semibold text-teal">
                    ✓ Ambient Voice Scribing Active
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1 bg-blue-50 px-2 mt-1 rounded text-[10px] font-bold text-blue-700 uppercase font-mono">
                      Phase 3 · Post-Visit RCM
                    </span>
                    <h3 className="font-bold text-navy text-sm mt-3">Closing Billing Payloads</h3>
                    <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">
                      Notes map directly to appropriate modifier recommendations, CPT codes, and prior authorization checklists to bypass down-stream denials.
                    </p>
                  </div>
                  <div className="border-t border-neutral-100 pt-3 mt-4 text-[10.5px] font-semibold text-teal-glow text-neutral-650">
                    ✓ Zero Manual Coding Lag
                  </div>
                </div>

              </div>
            </section>


            {/* SECTION 9: REVENUE CYCLE MANAGEMENT AUTOMATION */}
            <section id="rcm" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">09 · Autonomous billing</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 9</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Continuous Revenue Cycle Performance From Scribing through Claim Submission
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  The artificial intelligence automates prior authorization files and validates modifiers upstream to safeguard collections from payer denial loops.
                </p>
              </div>

              {/* RCM STACK PILLARS */}
              <div className="grid md:grid-cols-3 gap-6">
                
                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-neutral-200/60 hover:shadow-xs transition-shadow">
                  <span className="size-7 rounded bg-white border border-neutral-150 flex items-center justify-center text-xs font-bold text-[#F56A00] font-mono block mb-3 shadow-xs">
                    PA
                  </span>
                  <h4 className="font-bold text-navy text-sm">Prior Auth (PA) Orchestrator</h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    Queries diagnostic medical necessity rules and builds complete clinical dossiers automatically, passing rules directly to insurers.
                  </p>
                  <ul className="mt-3 text-[11px] text-neutral-600 space-y-1 bg-white p-2.5 rounded-lg border border-neutral-100 font-mono">
                    <li>• Automates criteria gathering.</li>
                    <li>• Zero hours spent on phone tag.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-neutral-200/60 hover:shadow-xs transition-shadow">
                  <span className="size-7 rounded bg-white border border-neutral-150 flex items-center justify-center text-xs font-bold text-blue-600 font-mono block mb-3 shadow-xs">
                    CD
                  </span>
                  <h4 className="font-bold text-navy text-sm">Autonomous Diagnostic Coding</h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    AI models search charted narratives to suggest appropriate modifiers, ICD-10 groupings, and bundled procedure validations.
                  </p>
                  <ul className="mt-3 text-[11px] text-neutral-600 space-y-1 bg-white p-2.5 rounded-lg border border-neutral-100 font-mono">
                    <li>• Evaluates bundling rules.</li>
                    <li>• Flags code exclusions prior to save.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-neutral-200/60 hover:shadow-xs transition-shadow">
                  <span className="size-7 rounded bg-[#F56A00]/10 border border-[#F56A00]/20 flex items-center justify-center text-xs font-bold text-[#F56A00] font-mono block mb-3 shadow-xs">
                    SB
                  </span>
                  <h4 className="font-bold text-navy text-sm">Interactive Claim Scrubbing</h4>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                    Runs over 200 real-time insurance validation protocols, resolving common entry fields mistakes before submitting claims.
                  </p>
                  <ul className="mt-3 text-[11px] text-neutral-600 space-y-1 bg-white p-2.5 rounded-lg border border-neutral-100 font-mono">
                    <li>• Pre-clearinghouse error repairs.</li>
                    <li>• 99.2% clean first-pass submission rate.</li>
                  </ul>
                </div>

              </div>
            </section>


            {/* SECTION 10: AUTOMATED CLAIM REPAIR & DENIAL PREVENTION (THE LIVE SCRUBBER SIMULATOR) */}
            <section id="denial-prevention" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">10 · Denial prevention</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 10</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Stop Financial Leaks with Pre-Submission Self-Healing Claims
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  Payer denial patterns change weekly. Pulse&apos;s auto-corrections engine repairs coding mistakes beforehand to maximize collections cashflow.
                </p>
              </div>

              {/* REPAIR INTERACTIVE WIDGET */}
              <div className="grid md:grid-cols-12 gap-6 items-stretch">
                
                {/* Left Live Scrubber panel (7 cols) */}
                <div className="md:col-span-7 bg-[#FAFBFD] p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#F56A00] font-bold block mb-2">Interactive Claim validation Hub</span>
                    
                    {scrubStatus === 'dirty' ? (
                      <div className="space-y-3">
                        <div className="bg-white p-3 rounded-xl border border-neutral-150 space-y-2">
                          <span className="text-[10px] font-mono text-neutral-400 uppercase block">Discovered Discrepancy Items:</span>
                          {scrubErrors.map((err, i) => (
                            <div key={i} className="flex gap-2 items-center bg-red-50 text-red-700 text-xs p-2.5 rounded-lg border border-red-100 font-sans">
                              <AlertTriangle className="size-4 shrink-0 text-red-500" />
                              <span className="font-medium">{err}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button
                          onClick={runScrubber}
                          className="w-full text-xs font-bold rounded-xl bg-navy hover:bg-navy-deep text-white py-3 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
                        >
                          <Zap className="size-3.5 text-teal" />
                          Invoke Self-Healing Claims Protocol
                        </button>
                      </div>
                    ) : scrubStatus === 'scrubbing' ? (
                      <div className="py-8 text-center text-xs text-neutral-500 font-mono space-y-2.5 bg-white rounded-xl border border-neutral-100">
                        <RefreshCw className="size-6 text-[#F56A00] animate-spin mx-auto" />
                        <p>Validating medical necessity boundaries against insurer rules databases...</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold flex flex-col gap-2 border border-emerald-100">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="size-4 text-emerald-600" />
                            <span>First-Pass Claim Fidelity Standard Succeeded!</span>
                          </div>
                          <p className="font-normal text-[11px] text-emerald-700 font-sans">
                            Pulse automatically attached modifier -25, matched patient database name, and unbundled the orthopaedic injection codes.
                          </p>
                        </div>
                        
                        <button
                          onClick={() => setScrubStatus('dirty')}
                          className="text-xs font-bold text-neutral-500 hover:text-navy block mx-auto underline cursor-pointer"
                        >
                          Reset Interactive Claim Simulator
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-neutral-400 font-mono mt-4 pt-4 border-t border-neutral-150">
                    *Self-healing logic resolves up to 88% of outpatient medical billing rejections automatically.
                  </div>
                </div>

                {/* Right static details (5 cols) */}
                <div className="md:col-span-5 bg-navy text-white p-6 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xs">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-teal uppercase font-bold block">Fidelity Standard gains</span>
                    <h3 className="font-bold text-white text-sm">Stopping the Revenue Leak Upstream</h3>
                    
                    <div className="space-y-3 font-sans text-xs">
                      <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg">
                        <span>First-Pass Submission</span>
                        <strong className="text-teal font-mono">99.2% OK</strong>
                      </div>
                      <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg">
                        <span>Payer Denial Loop Speed</span>
                        <strong className="text-teal font-mono">-75% Less</strong>
                      </div>
                      <div className="flex justify-between items-center bg-white/5 p-2.5 rounded-lg text-[#F56A00]">
                        <span>Days Sales Outstanding</span>
                        <strong className="font-mono">&lt; 14 Days</strong>
                      </div>
                    </div>
                  </div>

                  <div className="text-[9.5px] text-neutral-400 font-mono leading-relaxed mt-4">
                    Ensures clean electronic claims submissions to clearance networks without delayed billing disputes.
                  </div>
                </div>

              </div>
            </section>


            {/* SECTION 11: AUTOMATED PAYMENT POSTING */}
            <section id="payment-posting" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Section content (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">11 · Automated Payment Posting</span>
                      <span className="size-1 rounded-full bg-neutral-300" />
                      <span className="text-xs font-mono text-neutral-400">Payer Cash Flows</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                      Automated Payment Posting & Outcome Analyzer
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-2 leading-relaxed font-sans">
                      Clientele Pulse automatically posts payer payments, analyzes claim outcomes, and identifies underpayments, zero-payment claims, and unpaid claims. Exceptions are organized into prioritized worklists and assigned to dedicated human-in-the-loop teams for timely resolution — preventing AR buildup and improving revenue recovery.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5 pb-2">
                    {[
                      { title: 'Automated Payment Posting', desc: 'Auto-post payer remittances and update patient accounts' },
                      { title: 'Payment Variance Detection', desc: 'Identifies underpayments, short pays, and unexpected payment gaps' },
                      { title: 'Zero & No-Pay Claim Tracking', desc: 'Separates unpaid claims for immediate follow-up' },
                      { title: 'Priority AR Work Queue', desc: 'Routes high-impact cases to dedicated staff for action' },
                      { title: 'Human-in-the-Loop Revenue Recovery', desc: 'Enables focused intervention before claims age' },
                      { title: 'AR Aging Prevention', desc: 'Reduces claim backlog and improves cash flow' }
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-600 font-sans">
                        <Check className="size-3.5 text-teal mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-navy block">{feat.title}</strong>
                          <span className="text-[11px] text-neutral-500 mt-0.5 block">{feat.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Right Interactive Simulator Panel (5 cols) */}
                <div className="lg:col-span-5 bg-navy text-white p-6 rounded-2xl border border-white/5 flex flex-col justify-between shadow-xs relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-teal uppercase font-bold block">Interactive Posting Hub</span>
                    <h3 className="font-bold text-white text-sm">835 ERA Remittance Auto-Poster</h3>

                    {postingStatus === 'idle' && (
                      <div className="space-y-3">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/15 text-[11px] font-mono space-y-1.5 text-slate-350">
                          <span className="text-[9px] text-[#F56A00] block mb-1">UNPOSTED PAYER REMITTANCES</span>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                            <span>BlueCross standard care</span> <strong>$4,250.00</strong>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                            <span>Medicare Advantage</span> <strong>$6,105.00</strong>
                          </div>
                          <div className="flex justify-between border-b border-white/5 pb-1">
                            <span>Aetna PPO Outpatient</span> <strong>$2,450.00</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Pending Total:</span> <strong className="text-white">$12,805.00</strong>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setPostingStatus('posting');
                            setTimeout(() => setPostingStatus('success'), 1500);
                          }}
                          className="w-full text-xs font-bold rounded-xl bg-teal hover:bg-white text-navy py-3 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:-translate-y-0.5"
                        >
                          <Zap className="size-3.5" />
                          Auto-Post Remittances
                        </button>
                      </div>
                    )}

                    {postingStatus === 'posting' && (
                      <div className="py-8 text-center text-xs text-neutral-400 font-mono space-y-3 bg-white/5 rounded-xl border border-white/10">
                        <RefreshCw className="size-6 text-teal animate-spin mx-auto" />
                        <p className="animate-pulse">Parsing payer ANSI-835 electronic files...</p>
                        <p className="text-[10px] text-neutral-500">Matching patient database records...</p>
                      </div>
                    )}

                    {postingStatus === 'success' && (
                      <div className="space-y-3.5">
                        <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-xs text-emerald-400 font-sans">
                          <strong>✓ Succesfully Posted $12,805.00 Claims!</strong>
                          <p className="text-[10.5px] mt-1 text-emerald-300">
                            Remittances successfully processed and matched to corresponding EMR logs.
                          </p>
                        </div>

                        <div className="bg-white/5 p-3 rounded-xl border border-white/15 text-[10.5px] font-mono space-y-2">
                          <span className="text-[9px] text-teal block font-semibold">DETAILED OUTCOME DISPATCH:</span>
                          <div className="flex justify-between items-center text-emerald-400">
                            <span>BlueCross posted:</span>
                            <span>$4,250.00 (Zero Variance) ✓</span>
                          </div>
                          <div className="flex justify-between items-center text-emerald-400">
                            <span>Medicare posted:</span>
                            <span>$6,105.00 (Zero Variance) ✓</span>
                          </div>
                          <div className="flex flex-col gap-0.5 bg-[#F56A00]/10 p-2 rounded border border-[#F56A00]/20 text-stone-200">
                            <div className="flex justify-between text-[#F56A00] font-bold">
                              <span>Aetna PPO posted:</span>
                              <span>$2,010.00 Flagged ⚠</span>
                            </div>
                            <span className="text-[9px] text-stone-400 font-sans block">
                              *Variance detected: Underpaid by -$440.00. Exception routed to Priority AR Queue.
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => setPostingStatus('idle')}
                          className="text-xs font-semibold text-teal hover:text-white block mx-auto underline cursor-pointer"
                        >
                          Reset Remittance Poster
                        </button>
                      </div>
                    )}

                  </div>

                  <div className="text-[9px] text-neutral-400 font-mono mt-4 leading-relaxed border-t border-white/5 pt-3">
                    Reduces manual bank posting labor down of under 5 minutes. Autodetected payer variances prevent delayed AR aging metrics.
                  </div>
                </div>

              </div>
            </section>


            {/* SECTION 12: ACCOUNTS RECEIVABLE AUTOMATION */}
            <section id="ar-automation" className="bg-[#FAFBFD] rounded-2xl border border-neutral-200 p-8 shadow-xs scroll-mt-24">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Interactive AR Assistant console (5 cols) */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#F56A00] font-bold block mb-2">AR Resolution Path Planner</span>
                    <h3 className="font-bold text-navy text-sm font-sans mb-3">Unpaid Claim Exception Assistant</h3>

                    {arAction === 'pathway' && (
                      <div className="space-y-4">
                        <div className="bg-[#FAFBFD] p-3 rounded-xl border border-neutral-250 font-mono text-[10.5px] space-y-1 text-slate-800">
                          <span className="text-[9px] font-bold text-red-600 uppercase block mb-1">UNPAID CLAIM TARGET ISSUE</span>
                          <div className="flex justify-between">
                            <span>Claim ID:</span> <span className="font-bold">#2348 - M. Reyes</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Payer / Code:</span> <span className="text-red-600 font-bold">Aetna / CARC-97</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Reason:</span> <span>Benefit bundled (99214 + 20550)</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[9.5px] font-mono font-bold text-neutral-500 uppercase block">SELECT RESOLUTION PATH:</span>
                          
                          <div
                            onClick={() => setArSelectedPath('correct')}
                            className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                              arSelectedPath === 'correct'
                                ? 'bg-teal/5 border-teal text-navy font-semibold'
                                : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                            }`}
                          >
                            <input
                              type="radio"
                              readOnly
                              checked={arSelectedPath === 'correct'}
                              className="mr-2 text-teal border-neutral-300"
                            />
                            Correct Claim (Attach Modifier -25) <span className="text-teal font-sans ml-1 text-[10.5px] font-bold">[Recommended]</span>
                          </div>

                          <div
                            onClick={() => setArSelectedPath('appeal')}
                            className={`p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${
                              arSelectedPath === 'appeal'
                                ? 'bg-teal/5 border-teal text-navy font-semibold'
                                : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                            }`}
                          >
                            <input
                              type="radio"
                              readOnly
                              checked={arSelectedPath === 'appeal'}
                              className="mr-2 text-teal border-neutral-300"
                            />
                            Generate AI appealing letter &amp; clinical charts packet
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setArAction('generating');
                            setTimeout(() => setArAction('submitted'), 1500);
                          }}
                          className="w-full text-xs font-bold rounded-xl bg-navy hover:bg-navy-deep text-white py-3 flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <FileText className="size-3.5" />
                          Execute Recommended Path
                        </button>
                      </div>
                    )}

                    {arAction === 'generating' && (
                      <div className="py-8 text-center text-xs text-neutral-500 font-mono space-y-2 bg-neutral-50 rounded-xl border border-neutral-200">
                        <RefreshCw className="size-6 text-[#F56A00] animate-spin mx-auto" />
                        <p className="animate-pulse">Evaluating EMR medical documentation logs...</p>
                        <p className="text-[10px] text-neutral-400">Mapping CPT RARC/CARC codes...</p>
                      </div>
                    )}

                    {arAction === 'submitted' && (
                      <div className="space-y-3.5">
                        <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-3 rounded-xl text-xs font-sans">
                          <strong>✓ Action Dispatched &amp; Resubmitted!</strong>
                          <p className="text-[10.5px] mt-1 text-emerald-700">
                            {arSelectedPath === 'correct'
                              ? 'Modifier -25 attached to consulted evaluation billing. Corrected Claim submitted to payer clearinghouse.'
                              : 'AI appealed packet generated with clinical notes and orthopedic guidelines. Letter delivered to Aetna appeals.'}
                          </p>
                        </div>

                        <div className="bg-[#FAFBFD] p-3 rounded-xl border border-neutral-200 text-[10.5px] font-mono space-y-1 text-neutral-700">
                          <span className="text-[9px] text-[#F56A00] uppercase block font-semibold mb-1">REAL-TIME TRAFFIC STATE:</span>
                          <div className="flex justify-between bg-white p-1.5 rounded border border-neutral-100">
                            <span>Resolution target:</span> <strong className="text-emerald-500">Resolved</strong>
                          </div>
                          <div className="flex justify-between bg-white p-1.5 rounded border border-neutral-100">
                            <span>Response expectation:</span> <strong className="text-teal">&lt; 48 Hours</strong>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setArAction('pathway');
                            setArSelectedPath('correct');
                          }}
                          className="text-xs font-bold text-neutral-500 hover:text-navy block mx-auto underline cursor-pointer"
                        >
                          Resolve Another Exception
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="text-[10px] text-neutral-450 text-neutral-500 font-mono mt-4 pt-4 border-t border-neutral-150">
                    *Maintains a continuous loop ensuring claims do not age past 60 days on accounts receivable registries.
                  </div>
                </div>

                {/* Right Section Content (7 cols) */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">12 · Accounts Receivable Automation</span>
                      <span className="size-1 rounded-full bg-neutral-300" />
                      <span className="text-xs font-mono text-neutral-400">Aging Prevention</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                      Intelligent Real-Time Claim Recovery Loops
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-2 leading-relaxed font-sans">
                      Clientele Pulse continuously monitors claim status in real time through integrated payer networks and analyzes claim history from EMR/EHR data, payer policies, and specialty-specific billing guidelines to identify root causes of claim delays and denials.
                    </p>
                    <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed font-sans">
                      The platform recommends the optimal resolution path — whether to submit a corrected claim or initiate an appeal with supporting documentation. It maps RARC and CARC codes, automates appeal workflows, and enables one-click claim resubmission to accelerate payment recovery.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5 pb-2">
                    {[
                      { title: 'Real-Time Claim Status Monitoring', desc: 'Tracks claim lifecycle through integrated payor connectivity' },
                      { title: 'Root Cause Analysis', desc: 'Reviews EMR/EHR history, payor rules, and specialty guidelines to identify denial drivers' },
                      { title: 'Corrected Claim vs Appeal Guidance', desc: 'Recommends the right action pathway with required documentation' },
                      { title: 'RARC & CARC Code Intelligence', desc: 'Maps adjustment and denial codes to automate resolution workflows' },
                      { title: 'Automated Appeal Generation', desc: 'Creates documentation-driven appeals with one-click submission' },
                      { title: 'AI Revenue Learning Loop', desc: 'Learns from domain expert actions to continuously improve recommendations' },
                      { title: '60-Day AR Prevention Goal', desc: 'Prioritizes workflows to prevent claims from aging beyond 60 days from date of service' }
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-600 font-sans">
                        <Check className="size-3.5 text-teal mt-0.5 shrink-0" />
                        <div>
                          <strong className="text-navy block">{feat.title}</strong>
                          <span className="text-[11px] text-neutral-500 mt-0.5 block">{feat.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </section>


            {/* SECTION 13: REAL-TIME DASHBOARDS */}
            <section id="analytics" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">SPECIALIZED PORTALS</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-400">Section 13</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Role-Based Intelligence: Everyone Sees What Matters to Them
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans leading-relaxed">
                  Segmented layouts representing real-time synchronization loops for clinical, scheduling, billing, and practice leadership teams.
                </p>
              </div>

              {/* DYNAMIC PORTALS VIEW */}
              <div className="space-y-5 text-left">
                <div className="flex flex-wrap gap-2 border-b border-neutral-100 pb-3">
                  {[
                    { id: 'patient', label: 'Patient View' },
                    { id: 'provider', label: 'Clinician Portal' },
                    { id: 'front', label: 'Front Office Console' }
                  ].map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setActiveRole(role.id as any)}
                      className={`text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer ${
                        activeRole === role.id || (activeRole !== 'patient' && activeRole !== 'provider' && role.id === 'front')
                          ? 'bg-navy text-white shadow-xs'
                          : 'bg-[#FAFBFD] hover:bg-neutral-50 text-neutral-600 border border-neutral-250'
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>

                <div className="bg-[#FAFBFD] border border-neutral-200 p-6 rounded-2xl text-left shadow-xs">
                  {activeRole === 'patient' && (
                    <div className="space-y-5">
                      <div className="flex justify-between items-start border-b border-neutral-150 pb-2">
                        <div>
                          <span className="text-[10px] font-mono text-[#F56A00] uppercase font-bold tracking-wider">SECURE ACCESS MOBILE COMPANION</span>
                          <h4 className="font-bold text-navy text-lg font-display mt-0.5">Patient: Anita Lopez • Standard Records Companion</h4>
                        </div>
                        <span className="text-[10px] bg-teal/10 text-teal px-2.5 py-0.5 rounded-full font-mono font-medium">Standard Records</span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                        Clientele Pulse provides patients with a secure mobile and web companion that gives them control over their healthcare journey. Patients can access verified demographic information, manage insurance details, review benefits, schedule visits, communicate with care teams, and stay connected with their treatment plans — anytime, anywhere.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 mt-4 text-[11px] font-mono">
                        <div className="bg-white p-3 rounded-xl border border-neutral-150 flex items-center justify-between">
                          <span className="text-neutral-500 font-bold uppercase text-[9px] tracking-wider">Upcoming Visits:</span>
                          <strong className="text-[#F56A00] font-bold">📅 Thursday – 10:30 AM · Dr. Park</strong>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-neutral-150 flex items-center justify-between">
                          <span className="text-neutral-500 font-bold uppercase text-[9px] tracking-wider">Insurance Snapshot:</span>
                          <div className="bg-[#E1F7F4] text-teal border border-teal/10 px-2 py-0.5 rounded font-bold text-[10px] flex items-center gap-1">
                            <span>Met: $3,500 / $5,000 Payer OOP Met</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3.5 rounded-xl border border-neutral-150 text-[11px] font-mono flex flex-wrap gap-4 text-neutral-600 justify-around">
                        <span className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-teal" />
                          Deductible Limit: <strong className="text-navy">$5,000</strong>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-teal" />
                          Amount Met: <strong className="text-teal font-bold">$3,500</strong>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-[#F56A00]" />
                          Copay: <strong className="text-navy font-bold">$20</strong>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-violet" />
                          Co-Insurance: <strong className="text-navy font-bold">20%</strong>
                        </span>
                      </div>

                      <div className="pt-4 border-t border-neutral-150 space-y-3">
                        <h5 className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Key Features:</h5>
                        <div className="grid sm:grid-cols-2 gap-3 pb-2">
                          {[
                            { title: 'Verified Patient Profile', desc: 'View and manage validated demographic and contact information' },
                            { title: 'Insurance & COB Management', desc: 'Upload active insurance cards, verify coverage, and maintain coordination of benefits' },
                            { title: 'Real-Time Benefit Visibility', desc: 'View copay, coinsurance, deductible status, and estimated patient responsibility' },
                            { title: 'Appointment Management', desc: 'View upcoming visits, reschedule appointments, and manage availability' },
                            { title: 'Treatment & Diagnostic Plans', desc: 'Review care plans, recommended treatments, and diagnostic reports' },
                            { title: 'Prescription Refill Requests', desc: 'Submit refill requests directly through the secure portal' },
                            { title: 'Secure Care Team Communication', desc: 'Chat with front desk, providers, and billing teams through encrypted messaging' },
                            { title: 'Mobile-First Access', desc: 'Available through secure portal or mobile companion app' }
                          ].map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 font-sans p-2.5 bg-white rounded-lg border border-neutral-150">
                              <Check className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                              <div>
                                <strong className="text-navy block font-semibold">{feat.title}</strong>
                                <span className="text-[10.5px] text-neutral-500 mt-0.5 block leading-relaxed">{feat.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeRole === 'provider' && (
                    <div className="space-y-5">
                      <div className="flex justify-between items-start border-b border-neutral-150 pb-2">
                        <div>
                          <span className="text-[10px] font-mono text-[#F56A00] uppercase font-bold tracking-wider">CLINICIAN VISIT ASSISTANT</span>
                          <h4 className="font-bold text-navy text-lg font-display mt-0.5">Provider App – Clinician Visit Assistant</h4>
                        </div>
                        <span className="text-[10px] bg-teal/10 text-teal px-2.5 py-0.5 rounded-full font-mono font-medium">Point of Care</span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                        Clientele Pulse Clinician Visit Assistant empowers providers with a complete, real-time patient and revenue intelligence workspace. It delivers a 30-second pre-visit snapshot, clinical history, diagnostics, AI-powered documentation, coding guidance, and practice performance insights — helping clinicians focus on patient care while reducing administrative burden.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 mt-4 text-[11px] font-mono">
                        <div className="bg-white p-3 rounded-xl border border-neutral-150 flex items-center justify-between">
                          <span className="text-neutral-500 font-bold uppercase text-[9px] tracking-wider">Pre-Visit Status:</span>
                          <strong className="text-[#F56A50] font-bold">🩺 M. Reyes — Active Session Room 4</strong>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-neutral-150 flex items-center justify-between">
                          <span className="text-neutral-500 font-bold uppercase text-[9px] tracking-wider">AI Scribe Status: </span>
                          <span className="bg-[#E1F7F4] text-teal border border-teal/10 px-2 py-0.5 rounded font-bold text-[10px]">🎙️ Recording &amp; Note Scribing Active</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-neutral-150 space-y-3">
                        <h5 className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Key Features:</h5>
                        <div className="grid sm:grid-cols-2 gap-3 pb-2">
                          {[
                            { title: '30-Second Patient Pre-Visit Snapshot', desc: 'Quickly review patient history, active conditions, previous visits, medications, allergies, and care context before entering the exam room' },
                            { title: 'Clinical Records at Point of Care', desc: 'Access related X-rays, lab reports, diagnostic results, medical records, and medication history based on visit reason/chief complaint' },
                            { title: 'Digital Vital Tracking', desc: 'Capture and monitor patient vitals digitally with visit-level visibility' },
                            { title: 'AI Ambient Voice Scribing', desc: 'Convert patient-provider conversations into structured clinical notes in real time' },
                            { title: 'Medical Necessity Documentation Guidance', desc: 'Provide intelligent documentation suggestions to support compliant billing' },
                            { title: 'Coding Intelligence', desc: 'Recommend ICD-10, CPT codes, modifiers, and estimated average billed amount based on encounter details' },
                            { title: 'Visit & Revenue Dashboard', desc: 'Analyze provider performance by payor mix, billed amount, paid amount, denied claims, and collections' },
                            { title: 'Claim & Financial Visibility', desc: 'View billing outcomes connected to clinical encounters' },
                            { title: 'Integrated Care Workflow', desc: 'Connect clinical documentation, coding, billing, and revenue cycle insights in one provider workspace' }
                          ].map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 font-sans p-2.5 bg-white rounded-lg border border-neutral-150">
                              <Check className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                              <div>
                                <strong className="text-navy block font-semibold">{feat.title}</strong>
                                <span className="text-[10.5px] text-neutral-500 mt-0.5 block leading-relaxed">{feat.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeRole === 'front' && (
                    <div className="space-y-5">
                      <div className="flex justify-between items-start border-b border-neutral-150 pb-2">
                        <div>
                          <span className="text-[10px] font-mono text-[#F56A00] uppercase font-bold tracking-wider">CLIENTELE PULSE BRIDGE</span>
                          <h4 className="font-bold text-navy text-lg font-display mt-0.5">Front Office Portal – Clientele Pulse Bridge</h4>
                        </div>
                        <span className="text-[10px] bg-teal/10 text-teal px-2.5 py-0.5 rounded-full font-mono font-medium">Bilateral Sync</span>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans">
                        Clientele Pulse Bridge connects the front office workflow with the Patient App, Provider App, Payor Network, and EMR/EHR/PM systems to automate and streamline the complete patient journey — from registration through check-out. The platform enables front desk teams to deliver faster, smoother, and more accurate patient interactions through digital workflows, real-time verification, and integrated care coordination.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 mt-4 text-[11px] font-mono">
                        <div className="bg-white p-3 rounded-xl border border-neutral-150 flex items-center justify-between">
                          <span className="text-neutral-500 font-bold uppercase text-[9px] tracking-wider">Connectivity Node:</span>
                          <strong className="text-emerald-500 font-bold">🟢 Patient + Provider + Payor Bilaterally Linked</strong>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-neutral-150 flex items-center justify-between">
                          <span className="text-neutral-500 font-bold uppercase text-[9px] tracking-wider">Arrival Traffic: </span>
                          <span className="bg-[#E1F7F4] text-teal border border-teal/10 px-2 py-0.5 rounded font-bold text-[10px]">0 Alerts Outstanding · 100% Digital</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-neutral-150 space-y-3">
                        <h5 className="text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-widest">Key Features:</h5>
                        <div className="grid sm:grid-cols-2 gap-3 pb-2">
                          {[
                            { title: 'Unified System Connectivity', desc: 'Seamlessly connects Patient App, Provider App, Payors, and EMR/EHR/PM platforms' },
                            { title: 'Automated Patient Registration', desc: 'Captures and syncs patient demographics and registration details digitally' },
                            { title: 'Real-Time Insurance Verification', desc: 'Validates insurance eligibility, benefits, copay, coinsurance, and deductible information' },
                            { title: 'Appointment Management', desc: 'Enables appointment booking, rescheduling, and walk-in appointment scheduling' },
                            { title: 'Digital Check-In Experience', desc: 'Allows patients to complete check-in remotely or at the front desk' },
                            { title: 'Digital Consent Management', desc: 'Collects and stores HIPAA-compliant consent forms securely' },
                            { title: 'Digital Vital Tracking', desc: 'Captures patient vitals and makes them available for the clinical team before visits' },
                            { title: 'Front Desk Visit Dashboard', desc: 'Provides real-time visibility into patient flow, arrivals, pending tasks, and visit status' },
                            { title: 'Improved Check-In / Check-Out Workflow', desc: 'Reduces wait times, minimizes manual entry, and improves patient satisfaction' }
                          ].map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 font-sans p-2.5 bg-white rounded-lg border border-neutral-150">
                              <Check className="size-4 text-emerald-500 mt-0.5 shrink-0" />
                              <div>
                                <strong className="text-navy block font-semibold">{feat.title}</strong>
                                <span className="text-[10.5px] text-neutral-500 mt-0.5 block leading-relaxed">{feat.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </section>


            {/* NEW SECTION: CLIENTELE PULSE PRODUCT SUITE (PATIENT, CLINICIAN, BRIDGE) */}
            <section id="product-suites" className="w-full bg-[#08121E] rounded-3xl border border-white/5 p-8 sm:p-12 text-white overflow-hidden relative shadow-2xl scroll-mt-24">
              
              {/* Corner Ambient Glow Effects */}
              <div className="absolute -right-24 -top-24 size-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -bottom-24 size-80 bg-[#F56A00]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-widest text-teal-400 uppercase">
                  Clientele AI in your Pocket
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 leading-none">
                  Two apps. <span className="font-serif italic text-neutral-300 font-light">One platform.</span>
                </h2>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto font-sans">
                  Real, functional mobile apps for the people who actually use them — not portals dressed up as apps.
                </p>
              </div>

              {/* Dynamic Pill App Selector Switcher */}
              <div className="flex justify-center mt-8 relative z-10">
                <div className="inline-flex p-1 bg-[#122230]/80 rounded-full border border-white/5 shadow-inner">
                  <button
                    onClick={() => setPocketActiveTab('provider')}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                      pocketActiveTab === 'provider'
                        ? 'bg-teal-400 text-[#08121E] shadow-md font-semibold'
                        : 'text-neutral-400 hover:text-white font-medium'
                    }`}
                  >
                    Provider App
                  </button>
                  <button
                    onClick={() => setPocketActiveTab('patient')}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                      pocketActiveTab === 'patient'
                        ? 'bg-teal-400 text-[#08121E] shadow-md font-semibold'
                        : 'text-neutral-400 hover:text-white font-medium'
                    }`}
                  >
                    Patient App
                  </button>
                </div>
              </div>

              {/* Interactive Showcase Grid (Mockup & Content) */}
              <div className="grid lg:grid-cols-12 gap-10 items-center mt-12 relative z-10">
                
                {/* LEFT: Phone Mockup Container */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative w-64 h-[520px] bg-neutral-900 rounded-[38px] p-2.5 shadow-2xl border-4 border-neutral-800 shadow-teal-500/5 flex flex-col overflow-hidden">
                    
                    {/* Speaker notch */}
                    <div className="absolute top-0 inset-x-0 h-5 bg-transparent flex justify-center z-20">
                      <div className="w-28 h-4 bg-neutral-950 rounded-b-xl flex items-center justify-between px-3">
                        <div className="size-1 bg-neutral-800 rounded-full" />
                        <div className="w-8 h-0.5 bg-neutral-900 rounded" />
                      </div>
                    </div>

                    {/* Smartphone Screen Viewport */}
                    <div className="flex-1 bg-[#0A141D] rounded-[28px] p-3.5 font-sans text-white border border-white/5 relative flex flex-col justify-between overflow-y-auto scrollbar-thin select-none">
                      
                      <div className="h-2" />

                      {pocketActiveTab === 'provider' ? (
                        /* Provider App Mini UI */
                        <div className="space-y-3.5 flex-1 flex flex-col justify-between pt-1">
                          <div>
                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                              <div>
                                <span className="text-[8px] font-mono uppercase tracking-wider text-teal-400">Clientele AI</span>
                                <h4 className="text-[11px] font-bold leading-none mt-0.5">Provider App</h4>
                              </div>
                              <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400 font-semibold text-teal-400"></span>
                              </span>
                            </div>

                            <div className="space-y-2 mt-3 font-sans">
                              <div className="bg-[#122230]/70 p-2.5 rounded-lg border border-white/5 space-y-0.5">
                                <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest block">Next Patient</span>
                                <span className="text-[11px] font-bold block text-white">M. Reyes — 9:30</span>
                              </div>

                              <div className="bg-[#122230]/70 p-2.5 rounded-lg border border-white/5 space-y-0.5">
                                <div className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-1">
                                  Eligibility <span className="text-teal-400 font-semibold">✓</span>
                                </div>
                                <span className="text-[11px] font-semibold text-teal-300 block">Verified - BCBS PPO</span>
                              </div>

                              <div className="bg-[#122230]/70 p-2.5 rounded-lg border border-white/5 space-y-0.5">
                                <span className="text-[8px] font-mono text-[#F56A00] uppercase tracking-widest block">Ambient Note</span>
                                <span className="text-[11px] font-bold flex items-center gap-1.5 text-white">
                                  <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
                                  Recording...
                                </span>
                              </div>

                              <div className="bg-[#122230]/70 p-2.5 rounded-lg border border-white/5 space-y-0.5">
                                <span className="text-[8px] font-mono text-neutral-450 uppercase tracking-widest block">wRVU Today</span>
                                <span className="text-[11px] font-bold block text-white">42.6</span>
                              </div>

                              <div className="bg-[#122230]/70 p-2.5 rounded-lg border border-white/5 space-y-0.5">
                                <span className="text-[8px] font-mono text-neutral-450 uppercase tracking-widest block">Sign-offs Pending</span>
                                <span className="text-[11px] font-bold text-amber-500 block">3 claims</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-[8px] text-center text-neutral-500 font-mono pt-2 border-t border-white/5">
                            🔒 HIPAA Compliant TLS Secure
                          </div>
                        </div>
                      ) : (
                        /* Patient App Mini UI */
                        <div className="space-y-3.5 flex-1 flex flex-col justify-between pt-1">
                          <div>
                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                              <div>
                                <span className="text-[8px] font-mono uppercase tracking-wider text-teal-400">Clientele AI</span>
                                <h4 className="text-[11px] font-bold leading-none mt-0.5">Patient Companion</h4>
                              </div>
                              <span className="text-[8.5px] bg-teal-400/10 text-teal-400 px-1 py-0.5 rounded font-mono font-medium">Standard</span>
                            </div>

                            <div className="space-y-2 mt-3 font-sans">
                              <div className="bg-[#122230]/70 p-2.5 rounded-lg border border-white/5">
                                <span className="text-[7.5px] font-mono text-neutral-450 uppercase tracking-wider block mb-0.5">Anita Lopez</span>
                                <span className="text-[10.5px] font-bold text-white block">Verified Record Holder</span>
                              </div>

                              <div className="bg-[#122230]/70 p-2.5 rounded-lg border border-white/5 space-y-1">
                                <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest block">Upcoming Visits</span>
                                <div className="text-[10.5px] font-bold text-white flex items-center gap-1.5">
                                  <Calendar className="size-3 text-teal-400 shrink-0" />
                                  Thursday – 10:30 AM
                                </div>
                                <span className="text-[9.5px] text-neutral-400 block pl-4.5">Dr. Park</span>
                              </div>

                              <div className="bg-[#122230]/70 p-2.5 rounded-lg border border-white/5 space-y-1.5">
                                <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-widest block">Insurance Snapshot</span>
                                <div className="space-y-1 text-[9.5px]">
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400">Deductible / Met:</span>
                                    <span className="font-bold text-white">$5,000 / $3,500</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400">Copay:</span>
                                    <span className="font-bold text-teal-400">$20</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="text-neutral-400">Co-Insurance:</span>
                                    <span className="font-light text-neutral-300">20%</span>
                                  </div>
                                </div>
                              </div>

                              <div className="bg-[#122230]/70 p-2 rounded-lg border border-white/5 text-[9px] text-neutral-300 flex items-center justify-between">
                                <span className="text-neutral-400 font-medium">Refill companion:</span>
                                <span className="text-teal-400 font-semibold bg-teal-500/10 px-1 py-0.5 rounded text-[8.5px]">1 Active Refill</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-[8px] text-center text-neutral-500 font-mono pt-2 border-t border-white/5">
                            🔒 HIPAA Compliant TLS Secure
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Home Button Bar indicator */}
                    <div className="h-3 flex items-center justify-center">
                      <div className="w-16 h-1 bg-neutral-800 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* RIGHT: Selected App Feature Descriptions Grid */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block">
                      {pocketActiveTab === 'provider' ? 'Provider App – Clinician Visit Assistant' : 'Patient App – Secure Mobile & Web Companion'}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight mt-1">
                      {pocketActiveTab === 'provider'
                        ? 'Empowering providers with real-time patient and revenue intelligence.'
                        : 'Anita Lopez • Patient Companion View'}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mt-2 font-sans">
                      {pocketActiveTab === 'provider'
                        ? 'Clientele Pulse Clinician Visit Assistant empowers providers with a complete, real-time patient and revenue intelligence workspace. It delivers a 30-second pre-visit snapshot, clinical history, diagnostics, AI-powered documentation, coding guidance, and practice performance insights — helping clinicians focus on patient care while reducing administrative burden.'
                        : 'Clientele Pulse provides patients with a secure mobile and web companion that gives them control over their healthcare journey. Patients can access verified demographic information, manage insurance details, review benefits, schedule visits, communicate with care teams, and stay connected with their treatment plans — anytime, anywhere.'}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                    {pocketActiveTab === 'provider' ? (
                      /* Provider App 9 Core Feature Cards */
                      [
                        {
                          icon: Activity,
                          title: '30-Second Patient Pre-Visit Snapshot',
                          desc: 'Quickly review patient history, active conditions, previous visits, medications, allergies, and care context before entering the exam room'
                        },
                        {
                          icon: ClipboardList,
                          title: 'Clinical Records at Point of Care',
                          desc: 'Access related X-rays, lab reports, diagnostic results, medical records, and medication history based on visit reason/chief complaint'
                        },
                        {
                          icon: Activity,
                          title: 'Digital Vital Tracking',
                          desc: 'Capture and monitor patient vitals digitally with visit-level visibility'
                        },
                        {
                          icon: Brain,
                          title: 'AI Ambient Voice Scribing',
                          desc: 'Convert patient-provider conversations into structured clinical notes in real time'
                        },
                        {
                          icon: FileText,
                          title: 'Medical Necessity Documentation Guidance',
                          desc: 'Provide intelligent documentation suggestions to support compliant billing'
                        },
                        {
                          icon: ShieldCheck,
                          title: 'Coding Intelligence',
                          desc: 'Recommend ICD-10, CPT codes, modifiers, and estimated average billed amount based on encounter details'
                        },
                        {
                          icon: TrendingUp,
                          title: 'Visit & Revenue Dashboard',
                          desc: 'Analyze provider performance by payor mix, billed amount, paid amount, denied claims, and collections'
                        },
                        {
                          icon: Eye,
                          title: 'Claim & Financial Visibility',
                          desc: 'View billing outcomes connected to clinical encounters'
                        },
                        {
                          icon: Zap,
                          title: 'Integrated Care Workflow',
                          desc: 'Connect clinical documentation, coding, billing, and revenue cycle insights in one provider workspace'
                        }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-[#122230]/40 rounded-xl border border-white/5 p-4.5 hover:bg-[#122230]/70 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <span className="size-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-3">
                              <item.icon className="size-4 shrink-0" />
                            </span>
                            <h4 className="text-white text-xs font-bold font-sans">{item.title}</h4>
                            <p className="text-[11px] text-neutral-400 mt-1.5 leading-relaxed font-sans">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))
                    ) : (
                      /* Patient App 8 Core Feature Cards */
                      [
                        {
                          icon: UserCheck,
                          title: 'Verified Patient Profile',
                          desc: 'View and manage validated demographic and contact information'
                        },
                        {
                          icon: Shield,
                          title: 'Insurance & COB Management',
                          desc: 'Upload active insurance cards, verify coverage, and maintain coordination of benefits'
                        },
                        {
                          icon: DollarSign,
                          title: 'Real-Time Benefit Visibility',
                          desc: 'View copay, coinsurance, deductible status, and estimated patient responsibility'
                        },
                        {
                          icon: Calendar,
                          title: 'Appointment Management',
                          desc: 'View upcoming visits, reschedule appointments, and manage availability'
                        },
                        {
                          icon: ClipboardList,
                          title: 'Treatment & Diagnostic Plans',
                          desc: 'Review care plans, recommended treatments, and diagnostic reports'
                        },
                        {
                          icon: RefreshCw,
                          title: 'Prescription Refill Requests',
                          desc: 'Submit refill requests directly through the secure portal'
                        },
                        {
                          icon: MessageSquare,
                          title: 'Secure Care Team Communication',
                          desc: 'Chat with front desk, providers, and billing teams through encrypted messaging'
                        },
                        {
                          icon: Smartphone,
                          title: 'Mobile-First Access',
                          desc: 'Available through secure portal or mobile companion app'
                        }
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-[#122230]/40 rounded-xl border border-white/5 p-4.5 hover:bg-[#122230]/70 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <span className="size-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center mb-3">
                              <item.icon className="size-4 shrink-0" />
                            </span>
                            <h4 className="text-white text-xs font-bold font-sans">{item.title}</h4>
                            <p className="text-[11px] text-neutral-400 mt-1.5 leading-relaxed font-sans">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Android / iOS App Store Logos Badges */}
                  <div className="flex flex-wrap gap-3 pt-4 select-none">
                    <div className="bg-[#122230] border border-white/5 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-left cursor-not-allowed text-stone-300">
                      <Smartphone className="size-4 text-teal-400 shrink-0" />
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-400 font-medium leading-none">COMING SOON</span>
                        <span className="text-[11px] font-bold text-white tracking-tight">App Store</span>
                      </div>
                    </div>

                    <div className="bg-[#122230] border border-white/5 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-left cursor-not-allowed text-stone-300">
                      <Smartphone className="size-4 text-teal-400 shrink-0" />
                      <div>
                        <span className="block text-[8px] font-mono text-neutral-400 font-medium leading-none">COMING SOON</span>
                        <span className="text-[11px] font-bold text-white tracking-tight">Google Play</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connected Front Office Portal - Clientele Pulse Bridge Card Block */}
              <div className="mt-12 pt-10 border-t border-white/5 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#122230]/20 rounded-2xl border border-white/5 p-8">
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <span className="text-[10.5px] font-mono font-bold text-teal-400 uppercase tracking-widest block mb-0.5">
                        System Interconnect / Admin Console
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-1">
                        Front Office Portal – Clientele Pulse Bridge
                      </h3>
                      <p className="text-neutral-400 text-xs mt-2 leading-relaxed font-sans">
                        Clientele Pulse Bridge connects the front office workflow with the Patient App, Provider App, Payor Network, and EMR/EHR/PM systems to automate and streamline the complete patient journey — from registration through check-out. The platform enables front desk teams to deliver faster, smoother, and more accurate patient interactions through digital workflows, real-time verification, and integrated care coordination.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                      {[
                        'Unified System Connectivity – Seamlessly connects Patient App, Provider App, Payors, and EMR/EHR/PM platforms',
                        'Automated Patient Registration – Captures and syncs patient demographics and registration details digitally',
                        'Real-Time Insurance Verification – Validates insurance eligibility, benefits, copay, coinsurance, and deductible information',
                        'Appointment Management – Enables appointment booking, rescheduling, and walk-in appointment scheduling',
                        'Digital Check-In Experience – Allows patients to complete check-in remotely or at the front desk',
                        'Digital Consent Management – Collects and stores HIPAA-compliant consent forms securely',
                        'Digital Vital Tracking – Captures patient vitals and makes them available for the clinical team before visits',
                        'Front Desk Visit Dashboard – Provides real-time visibility into patient flow, arrivals, pending tasks, and visit status',
                        'Improved Check-In / Check-Out Workflow – Reduces wait times, minimizes manual entry, and improves patient satisfaction'
                      ].map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-neutral-300 font-sans">
                          <Check className="size-3.5 text-teal-400 mt-0.5 shrink-0" />
                          <span className="leading-normal">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-[#0A141D] rounded-xl p-5 border border-white/5 space-y-4 shadow-xl">
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <div>
                        <span className="text-[8.5px] font-mono uppercase text-teal-400 font-bold block">Connectivity Portal</span>
                        <h4 className="font-bold text-white text-xs mt-0.5">Unified System Linkages</h4>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        <span className="size-1 bg-emerald-400 rounded-full animate-ping" />
                        ONLINE
                      </span>
                    </div>

                    <div className="space-y-2 text-[10px] font-mono text-neutral-300">
                      <div className="flex justify-between items-center bg-[#122230]/60 p-2.5 rounded border border-white/5">
                        <span className="text-neutral-400">Patient App Link:</span>
                        <span className="text-emerald-400 font-bold uppercase text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded">Connected</span>
                      </div>
                      <div className="flex justify-between items-center bg-[#122230]/60 p-2.5 rounded border border-white/5">
                        <span className="text-neutral-400">Provider Sync Link:</span>
                        <span className="text-emerald-400 font-bold uppercase text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded">Connected</span>
                      </div>
                      <div className="flex justify-between items-center bg-[#122230]/60 p-2.5 rounded border border-white/5">
                        <span className="text-neutral-400">Payor Network Link:</span>
                        <span className="text-emerald-400 font-bold uppercase text-[9px] bg-emerald-500/10 px-1.5 py-0.5 rounded">Connected</span>
                      </div>
                      <div className="flex justify-between items-center bg-[#122230]/60 p-2.5 rounded border border-white/5">
                        <span className="text-neutral-400">EMR / EHR Sync:</span>
                        <span className="text-teal-400 font-bold uppercase text-[9px] bg-teal-500/10 px-1.5 py-0.5 rounded">Bilateral</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>


            {/* SECTION 12: CORE INTENDED BENEFITS */}
            <section id="outcomes" className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-xs scroll-mt-24">
              <div className="max-w-3xl mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-[#F56A00] font-mono uppercase tracking-wider">12 · Operational Wins</span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="text-xs font-mono text-neutral-450 text-neutral-400">Section 12</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight">
                  Strategic Transformation Across All Practice Stakeholders
                </h2>
                <p className="text-sm text-neutral-500 mt-2 font-sans">
                  The real value of Clientele Plus comes from integrating administrative, clinical, and financial silos into a single high-integrity platform.
                </p>
              </div>

              {/* 4 COL BENEFIT GRIDS */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: 'PX · Patient Experience', bg: 'bg-[#FAFBFD]/50 border-neutral-200/60', icon: Smartphone, list: ['Demographics and card photos uploaded from home in under 2 minutes.', 'Instant eligibility preloads prevent sudden checkout surprises.', 'Secure unilateral message threads route to the right desk automatically.', 'Schedules and reschedules saved directly with zero phone tag.'] },
                  { title: 'FO · Front Office Teams', bg: 'bg-[#FAFBFD]/50 border-neutral-200/60', icon: ClipboardList, list: ['Manual re-keying and clipboard errors decreased by over 80%.', 'Automated coverage pre-scrubbing resolves eligibility exceptions upstream.', 'Communication routing filters unnecessary telephone tag completely.', 'Slick dashboard monitors checking status and intake tasks seamlessly.'] },
                  { title: 'PR · Clinical Providers', bg: 'bg-[#FAFBFD]/50 border-neutral-200/60', icon: Brain, list: ['Pre-visit brief compiles historic documentation automatically before encounters.', 'Real-time ambient room listen-scribes compile charting notes flawlessly.', 'No administrative computer typing barriers during patient treatments.', 'Diagnostic billing modifier recommends flag discrepancies instantly.'] },
                  { title: 'RCM · Practice Billing', bg: 'bg-navy border-white/5 text-white', icon: DollarSign, list: ['Submits ultra-clean, unbundled claims to clearance networks.', 'Self-healing claim scripts automatically adjust typical validation items.', 'Reduces accounts receivable (AR) cycles downwards of under 14 days.', 'Continuous and predictable operations collections cashflow monitoring.'] }
                ].map((b, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between ${b.bg}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`size-8 rounded-lg flex items-center justify-center ${b.bg.includes('navy') ? 'bg-white/10 text-teal' : 'bg-navy/5 text-[#F56A00]'}`}>
                          <b.icon className="size-4" />
                        </span>
                        <h4 className="font-bold text-sm tracking-tight">{b.title}</h4>
                      </div>
                      
                      <ul className="space-y-2.5 text-xs">
                        {b.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 leading-snug">
                            <Check className="size-3.5 text-teal mt-0.5 shrink-0" />
                            <span className={b.bg.includes('navy') ? 'text-white/80' : 'text-neutral-600'}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

      </div>

      {/* 4. EXECUTIVE COMPILATION VERITY CARD */}
      <section className="bg-white border-t border-b border-neutral-100 py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-navy to-navy-deep text-white rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-md">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-4 max-w-2xl text-left">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-teal font-bold uppercase tracking-wider">
                Platform Alignment Verity
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                Complete Executive Architecture Replicated
              </h2>
              <p className="text-xs sm:text-sm text-[#B4C3D0] leading-relaxed font-sans">
                This Clientele Plus blueprint delivers the entire 17-page corporate operating deck systematically. Explore the 5 strategic visions, the 80/20 automation guidelines, intake computer-vision OCR workflows, EMR bilateral synchronization loops, and self-healing claim scrubbers under a continuous, high-integrity design.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-5 rounded-2xl min-w-xs space-y-3.5 text-left text-xs shrink-0">
              <span className="text-[9.5px] font-mono text-[#F56A00] uppercase font-bold tracking-wider">Expected Practice Gains</span>
              <div className="space-y-1 text-[#E1EBF5]">
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Claims Submission Fidelity</span> <strong className="text-white">99.2% Clear</strong></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Average No-Show Rates</span> <strong className="text-white">-35% Decrease</strong></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>Claim Recovery Cycles</span> <strong className="text-white">&lt; 14 Days DSO</strong></div>
                <div className="flex justify-between mt-1"><span>Scribe Charting Overhead</span> <strong className="text-teal font-bold">80% Saved</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION ACCELERATOR SECTION */}
      <section className="bg-navy text-white relative overflow-hidden py-20 text-center">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-teal" />
        <div className="absolute inset-0 bg-hero opacity-35 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Ready to Transform Your Practice Collections?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            Integrate your existing EMR/PM credentials with Clientele Pulse and bypass manual intake errors, coverage phone delays, and modifier rejections.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="rounded-full bg-teal text-navy hover:bg-white font-bold text-xs px-8 py-3.5 transition-transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Schedule Customized Demonstration
            </a>
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className="rounded-full border border-white/20 hover:bg-white/5 text-white font-bold text-xs px-8 py-3.5 transition-transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              Explore Firm Credentials
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
