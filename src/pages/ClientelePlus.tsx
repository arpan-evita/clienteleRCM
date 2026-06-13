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

  // State Management
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  
  // OCR Interactive State
  const [ocrMode, setOcrMode] = useState<'optionA' | 'optionB'>('optionA');
  const [ocrStatus, setOcrStatus] = useState<'idle' | 'scanning' | 'done'>('idle');
  const [ocrProgress, setOcrProgress] = useState(0);
  const [ocrType, setOcrType] = useState<'dl' | 'insurance' | null>(null);

  // Eligibility Check state
  const [eligibilityStatus, setEligibilityStatus] = useState<'idle' | 'running' | 'completed'>('idle');
  const [eligibilityReport, setEligibilityReport] = useState<any>(null);

  // Booking state
  const [selectedProvider, setSelectedProvider] = useState('Dr. Park · Internal Medicine');
  const [selectedLoc, setSelectedLoc] = useState('Westview Clinic');
  const [selectedSpecialty, setSelectedSpecialty] = useState('Annual physical');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:30 AM');
  const [bookingStep, setBookingStep] = useState<'idle' | 'booking' | 'confirmed'>('idle');

  // Chat thread routing active team
  const [chatChannel, setChatChannel] = useState<'front' | 'provider' | 'billing'>('front');

  // Claim scrubber demo
  const [scrubStatus, setScrubStatus] = useState<'dirty' | 'scrubbing' | 'clean'>('dirty');
  const [scrubErrors, setScrubErrors] = useState<string[]>([
    'Missing CPT Modifier -25',
    'Subscriber Name Mismatch on Ins. Entry',
    'Invalid Bundling Protocol (99214 + 20550)'
  ]);

  // Dashboards role active selector
  const [activeRole, setActiveRole] = useState<'patient' | 'provider' | 'front' | 'leadership'>('patient');

  // Slide Deck Structure replicating the exact pages
  const slides = [
    {
      id: '04',
      section: 'Vision',
      title: 'Transform healthcare administration with applied AI.',
      subtitle: 'Five shifts that move the operating model from human-dependent paperwork to AI-assisted, real-time intelligence.',
      type: 'shifts'
    },
    {
      id: '05',
      section: 'Strategy',
      title: '80% automation, 20% human intelligence.',
      subtitle: 'AI runs the predictable, repetitive volume. People are reserved for complex cases, exceptions and clinical judgement where they add the most value.',
      type: 'operatingModel'
    },
    {
      id: '06',
      section: 'Patient Console',
      title: 'From portal sign-in to fully closed billing cycle.',
      subtitle: 'From eight phone calls and a clipboard to one connected experience the patient runs themselves.',
      type: 'workflow8'
    },
    {
      id: '07',
      section: 'Smart Registration',
      title: '5 fields. Or a photo. That is the entire registration.',
      subtitle: 'Step 1 — Patient self-service. AI extracts demographics and insurance details automatically.',
      type: 'ocr'
    },
    {
      id: '08',
      section: 'Eligibility',
      title: 'Financial responsibility known before the patient walks in.',
      subtitle: 'Step 2 — AI eligibility verification. Immediately after registration, Pulse calls the payor in real-time.',
      type: 'eligibility'
    },
    {
      id: '09',
      section: 'EMR / EHR / PM Sync',
      title: 'Pulse writes verified data into your existing system of record.',
      subtitle: 'Step 3 — Zero-disruption integration. Bidirectional, real-time demographic and coverage updates.',
      type: 'emrSync'
    },
    {
      id: '10',
      section: 'Scheduling',
      title: 'Patient-controlled scheduling, no phone calls.',
      subtitle: 'Step 4 — AI appointment scheduling. Search availability, select slots, and confirm appointments.',
      type: 'scheduling'
    },
    {
      id: '11',
      section: 'Appointment Mgmt',
      title: 'Cut no-shows. Recapture empty slots.',
      subtitle: 'Step 5 — Automated appointment management. Proactive smart text alerts and instant release cycle.',
      type: 'mgmtGains'
    },
    {
      id: '12',
      section: 'Communication',
      title: 'One thread. Three teams. Zero phone tag.',
      subtitle: 'Step 6 — Patient communication hub. Every conversation tracked, routed and audited under one secure context.',
      type: 'commsThread'
    },
    {
      id: '13',
      section: 'Patient Dashboard',
      title: 'The full record in the patient\'s pocket.',
      subtitle: 'Step 7 — Patient health dashboard. Visually mapping visits, files, balances, and real-time medical updates.',
      type: 'pocketDashboard'
    },
    {
      id: '14',
      section: 'Provider Console',
      title: 'AI works alongside the clinician before, during and after the visit.',
      subtitle: 'Provider console — AI-assisted workflow. Minimize clinical documentation burden.',
      type: 'providerConsole'
    },
    {
      id: '15',
      section: 'RCM Automation',
      title: 'Complete revenue cycle automation from documentation to submission.',
      subtitle: 'AI-powered RCM automation. Eliminating the manual chaser overhead entirely.',
      type: 'rcmColumns'
    },
    {
      id: '16',
      section: 'Claims & AR',
      title: 'Real-time revenue visibility.',
      subtitle: 'Intelligent claims & AR management. Continuously monitoring every claim and AR bucket.',
      type: 'claimsBucket'
    },
    {
      id: '17',
      section: 'Denial Management',
      title: 'Stop the revenue leak before it spreads.',
      subtitle: 'AI denial management. Real-time root-cause analysis and automated corrective queues.',
      type: 'denialPrv'
    },
    {
      id: '18',
      section: 'Dashboards',
      title: 'Role-based intelligence: everyone sees what matters to them.',
      subtitle: 'Real-time dashboards. Segmented portals representing live coordination loops.',
      type: 'liveDashboards'
    },
    {
      id: '19',
      section: 'Benefits',
      title: 'Operational transformation across every team that touches the patient.',
      subtitle: 'Business benefits. Driving quantifiable savings, care focus, and lightning-fast RCM performance.',
      type: 'benefitsPX'
    },
    {
      id: '20',
      section: 'Why Pulse',
      title: 'The future of connected healthcare, delivered on one platform.',
      subtitle: 'A smarter healthcare ecosystem — real-time automation, optimal patient coverage alignment, and clean claims.',
      type: 'whyFinal'
    }
  ];

  // Autoplay Logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoplay) {
      timer = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 5500);
    }
    return () => clearInterval(timer);
  }, [autoplay]);

  // OCR Sim action
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
    }, 120);
  };

  // Eligibility request action
  const runEligibilityChecker = () => {
    setEligibilityStatus('running');
    setTimeout(() => {
      setEligibilityStatus('completed');
      setEligibilityReport({
        active: '🟢 Fully Active Standard Coverage',
        carrier: 'Blue Cross Blue Shield Plan Choice Plus',
        copay: '$25.00 Copayment (Specialist)',
        deductible: '$1,500.00 Total ($350.00 Met)',
        coinsurance: '15% Covered Coinsurance Weight',
        oop: '$4,000.00 Limit ($1,200.00 Met)',
        restrictions: 'Prior Authorization checklist mandatory on CPT 20550',
      });
    }, 1500);
  };

  // Simulate slot booking
  const triggerSelfBooking = () => {
    setBookingStep('booking');
    setTimeout(() => {
      setBookingStep('confirmed');
    }, 1500);
  };

  // Claim Scrubber Scrub action
  const runScrubber = () => {
    setScrubStatus('scrubbing');
    setTimeout(() => {
      setScrubStatus('clean');
      setScrubErrors([]);
    }, 1800);
  };

  return (
    <div className="bg-[#FAFBFD] text-navy min-h-screen text-left">
      {/* HEADER HERO AREA */}
      <section className="relative overflow-hidden bg-white border-b border-neutral-100 pt-20 pb-12">
        <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/4 right-[-10%] w-[450px] h-[450px] bg-teal/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[-10%] w-[300px] h-[300px] bg-[#F56A00]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F56A00]/25 bg-[#F56A00]/5 px-4 py-1 text-xs font-semibold text-[#F56A00]">
              <Sparkles className="size-3.5" /> Clientele Plus Suite Launch
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Clientele Plus <br />
              <span className="text-neutral-500 font-sans text-3xl sm:text-4xl block mt-2 font-normal">
                Autonomous Revenue Cycle & Operational Intelligence
              </span>
            </h1>
            <p className="text-neutral-500 max-w-xl text-sm sm:text-base leading-relaxed">
              Experience the complete, unedited product architecture and operating model compiled directly from our executive deck. Replicated in live, functional modules under a unified high-integrity design.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#interactive-deck"
                className="rounded-full bg-navy hover:bg-navy-deep text-white text-xs font-bold px-6 py-3 transition-transform hover:-translate-y-0.5"
              >
                Launch Slide Deck Simulator ↓
              </a>
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className="rounded-full border border-neutral-200 hover:bg-neutral-50 text-neutral-600 text-xs font-bold px-6 py-3 transition-transform hover:-translate-y-0.5"
              >
                Request Custom Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK STATS TOP BAR */}
      <section className="bg-navy border-b border-teal/20 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-r border-white/10 pr-4">
            <div className="text-2xl font-bold text-teal">80%</div>
            <div className="text-[10px] font-mono tracking-widest text-white/60 uppercase mt-0.5">Automated Workloads</div>
          </div>
          <div className="border-r border-white/10 pr-4">
            <div className="text-2xl font-bold text-white">&lt; 30s</div>
            <div className="text-[10px] font-mono tracking-widest text-white/60 uppercase mt-0.5">Payer Eligibility Rate</div>
          </div>
          <div className="border-r border-white/10 pr-4">
            <div className="text-2xl font-bold text-teal">99.2%</div>
            <div className="text-[10px] font-mono tracking-widest text-white/60 uppercase mt-0.5">Clean-Claim Fidelity</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">-35%</div>
            <div className="text-[10px] font-mono tracking-widest text-white/60 uppercase mt-0.5">Average No-Shows</div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DECK VIEWER */}
      <section id="interactive-deck" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Slide Index Navigation (5 Cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-neutral-100 p-4 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
              <span className="text-xs font-bold text-navy uppercase font-mono tracking-wider">Executive Presentation</span>
              <button
                onClick={() => setAutoplay((prev) => !prev)}
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer ${
                  autoplay 
                    ? 'bg-[#F56A00]/15 text-[#F56A00]' 
                    : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
                }`}
              >
                <div className={`size-1.5 rounded-full ${autoplay ? 'bg-[#F56A00] animate-pulse' : 'bg-neutral-400'}`} />
                {autoplay ? 'Autoplay On' : 'Autoplay Off'}
              </button>
            </div>

            {/* Scrollable list of slides */}
            <div className="space-y-1 max-h-[580px] overflow-y-auto pr-1 no-scrollbar">
              {slides.map((s, index) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setActiveSlide(index);
                    setAutoplay(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                    activeSlide === index
                      ? 'bg-navy text-white font-semibold'
                      : 'hover:bg-neutral-50 text-neutral-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs ${activeSlide === index ? 'text-teal' : 'text-neutral-450 text-neutral-400'}`}>
                      {s.id}
                    </span>
                    <div className="truncate">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#F56A00] -mb-0.5">
                        {s.section}
                      </div>
                      <div className={`text-xs truncate max-w-[200px] ${activeSlide === index ? 'text-white' : 'text-navy'}`}>
                        {s.title}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`size-3.5 transition-transform ${activeSlide === index ? 'text-teal translate-x-0.5' : 'text-neutral-400 opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
            
            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-neutral-400 font-mono">
              <span>Clientele Pulse Platform</span>
              <span>Slide {slides[activeSlide].id} / 21</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Slide Canvas (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Slide Header Indicator */}
            <div className="flex justify-between items-center bg-white border border-neutral-100 outline-none p-4 rounded-xl shadow-xs">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#F56A00] animate-ping" />
                <span className="text-[11px] font-mono text-[#F56A00] uppercase font-bold tracking-wider">
                  ACTIVE MODAL WORKLOAD — Slide {slides[activeSlide].id}
                </span>
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => {
                    setActiveSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
                    setAutoplay(false);
                  }}
                  className="size-8 rounded-lg border border-neutral-200 hover:bg-neutral-50 flex items-center justify-center text-xs text-navy font-bold cursor-pointer"
                >
                  ←
                </button>
                <button
                  onClick={() => {
                    setActiveSlide((prev) => (prev + 1) % slides.length);
                    setAutoplay(false);
                  }}
                  className="size-8 rounded-lg bg-navy hover:bg-navy-deep text-white flex items-center justify-center text-xs font-bold cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>

            {/* MAIN INTERACTIVE AREA CELL */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-6 sm:p-8 shadow-sm">
              <div className="pb-6 border-b border-neutral-100 mb-6 text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F56A00]">
                    {slides[activeSlide].section}
                  </span>
                  <span className="size-1 rounded-full bg-neutral-300" />
                  <span className="font-mono text-[10px] text-neutral-400">OPERATING SPEC: {slides[activeSlide].id}/21</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold tracking-tight">
                  {slides[activeSlide].title}
                </h2>
                <p className="mt-2 text-sm text-neutral-500 font-sans leading-relaxed">
                  {slides[activeSlide].subtitle}
                </p>
              </div>

              {/* RENDER DYNAMIC COMPONENT BASED ON TYPE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[350px] flex flex-col justify-between"
                >
                  
                  {/* TYPE 1: SHIFTS (Slide 1 Vision) */}
                  {slides[activeSlide].type === 'shifts' && (
                    <div className="space-y-4">
                      {[
                        { from: 'Manual', to: 'Automated', color: 'border-orange-200/50 hover:bg-orange-50/10' },
                        { from: 'Reactive', to: 'Real-Time', color: 'border-blue-200/50 hover:bg-blue-50/10' },
                        { from: 'Disconnected', to: 'Connected', color: 'border-purple-200/50 hover:bg-purple-50/10' },
                        { from: 'Paperwork', to: 'Intelligence', color: 'border-teal-200/50 hover:bg-teal-50/10' },
                        { from: 'Human Dependency', to: 'AI-Assisted Workflow', color: 'border-emerald-200/50 hover:bg-emerald-50/10' }
                      ].map((item, idx) => (
                        <div key={idx} className={`grid grid-cols-11 items-center border border-neutral-100 p-3 rounded-xl transition-all ${item.color}`}>
                          <div className="col-span-4 text-left">
                            <span className="text-[10px] uppercase font-bold text-neutral-400 font-mono block">From</span>
                            <span className="text-sm font-semibold text-navy">{item.from}</span>
                          </div>
                          <div className="col-span-3 flex justify-center text-neutral-400">
                            <ArrowRight className="size-4 text-[#F56A00] animate-pulse" />
                          </div>
                          <div className="col-span-4 text-left bg-navy px-4 py-2 rounded-lg text-white">
                            <span className="text-[9px] uppercase font-bold text-teal font-mono block">To</span>
                            <span className="text-xs font-bold text-white tracking-wide">{item.to}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* TYPE 2: OPERATING MODEL (Slide 2 Strategy) */}
                  {slides[activeSlide].type === 'operatingModel' && (
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                      {/* Left: 80% AI */}
                      <div className="bg-navy rounded-xl p-5 border border-white/5 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded text-[10px] font-mono text-teal">
                          <Activity className="size-3 animate-pulse" /> Live Automation
                        </div>
                        <div>
                          <div className="text-4xl font-black text-teal font-display">80%</div>
                          <p className="text-xs font-bold tracking-widest text-[#F56A00] uppercase mt-1">AI MANAGES</p>
                          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-[11px] text-white/75 font-sans">
                            <li>• Registration</li>
                            <li>• Scheduling</li>
                            <li>• AI Scribing</li>
                            <li>• Claim Creation</li>
                            <li>• Payment Posting</li>
                            <li>• Denial Mgmt</li>
                            <li>• Eligibility Verif</li>
                            <li>• Claim Scrubbing</li>
                          </ul>
                        </div>
                        <div className="text-[9px] text-[#FAFBFD]/45 font-mono mt-4 pt-2 border-t border-white/10">
                          Automating predictable, high-volume tasks.
                        </div>
                      </div>

                      {/* Right: 20% Human Link */}
                      <div className="bg-[#FAFBFD] rounded-xl p-5 border border-neutral-200/80 flex flex-col justify-between">
                        <div>
                          <div className="text-4xl font-black text-navy font-display">20%</div>
                          <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase mt-1">HUMAN-IN-THE-LOOP</p>
                          <ul className="mt-4 space-y-2 text-xs text-neutral-600 font-sans">
                            <li className="flex items-center gap-1.5"><Check className="size-3.5 text-teal" /> Complex/Edge Cases</li>
                            <li className="flex items-center gap-1.5"><Check className="size-3.5 text-teal" /> Exceptions Handling</li>
                            <li className="flex items-center gap-1.5"><Check className="size-3.5 text-teal" /> Clinical Judgement</li>
                            <li className="flex items-center gap-1.5"><Check className="size-3.5 text-teal" /> Escalations Management</li>
                            <li className="flex items-center gap-1.5"><Check className="size-3.5 text-teal" /> AI Guidance & Oversight</li>
                          </ul>
                        </div>
                        <div className="text-[9px] text-neutral-400 font-mono mt-4 pt-2 border-t border-neutral-100">
                          Reserving staff focus for maximum clinic value.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE 3: WORKFLOW 8 PIPELINE (Slide 3 Patient Console) */}
                  {slides[activeSlide].type === 'workflow8' && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                        {[
                          { step: '01', title: 'Open Portal', desc: 'Patient lands on practice customized portal' },
                          { step: '02', title: 'Create Account', desc: 'Secure profile generation with auth' },
                          { step: '03', title: 'Insurance Verif', desc: 'Real-time coverage checks' },
                          { step: '04', title: 'Appt Booking', desc: 'Select providers and calendar slots' },
                          { step: '05', title: 'EMR Update', desc: 'Instant bilateral sync parameters' },
                          { step: '06', title: 'Provider Prep', desc: 'Clinician chart summaries' },
                          { step: '07', title: 'Visit Complete', desc: 'Voice scribe transcript sync' },
                          { step: '08', title: 'Closed Billing', desc: 'Finalized claim RCM cycle closed' }
                        ].map((w, index) => (
                          <div
                            key={w.step}
                            className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                              index === 2 
                                ? 'border-[#F56A00] bg-[#F56A00]/5 shadow-glow ring-1 ring-[#F56A00]/10' 
                                : 'border-neutral-100 bg-neutral-50/20'
                            }`}
                          >
                            <div className="text-xs font-mono font-bold text-navy-deep">{w.step}</div>
                            <div className="text-[10px] font-bold text-navy mt-1 leading-tight">{w.title}</div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-[#FAFBFD] rounded-xl border border-neutral-200/80 p-4">
                        <div className="text-xs font-bold text-[#F56A00] uppercase tracking-wide mb-1">What Changes for the Patient</div>
                        <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                          From eight exhausting phone calls and a manual clipboard to one integrated, patient-centered digital sequence that they run themselves on their own phones. No retyping, zero benefit phone tag, and one thread for all communication.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TYPE 4: SMART REGISTRATION OCR (Slide 4 Smart Registration) */}
                  {slides[activeSlide].type === 'ocr' && (
                    <div className="space-y-6 text-left">
                      <div className="flex gap-4 border-b border-neutral-100 pb-3">
                        <button
                          onClick={() => {
                            setOcrMode('optionA');
                            setOcrStatus('idle');
                          }}
                          className={`text-xs font-bold pb-2 relative transition-colors cursor-pointer ${
                            ocrMode === 'optionA' ? 'text-[#F56A00]' : 'text-neutral-400 hover:text-navy'
                          }`}
                        >
                          Option A: Manual Fields
                          {ocrMode === 'optionA' && <div className="absolute bottom-[-13px] left-0 right-0 h-0.5 bg-[#F56A00]" />}
                        </button>
                        <button
                          onClick={() => {
                            setOcrMode('optionB');
                            setOcrStatus('idle');
                          }}
                          className={`text-xs font-bold pb-2 relative transition-colors cursor-pointer ${
                            ocrMode === 'optionB' ? 'text-[#F56A00]' : 'text-neutral-400 hover:text-navy'
                          }`}
                        >
                          Option B: Auto-OCR Capture
                          {ocrMode === 'optionB' && <div className="absolute bottom-[-13px] left-0 right-0 h-0.5 bg-[#F56A00]" />}
                        </button>
                      </div>

                      <div className="grid md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-6 bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200">
                          {ocrMode === 'optionA' ? (
                            <div className="space-y-3">
                              <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">Type 5 Core Fields</span>
                              <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder="First Name" value="Anita" disabled className="text-xs p-2 rounded border border-neutral-100 bg-white" />
                                <input type="text" placeholder="Last Name" value="Lopez" disabled className="text-xs p-2 rounded border border-neutral-100 bg-white" />
                              </div>
                              <input type="text" placeholder="Date of Birth" value="04/12/1986" disabled className="text-xs p-2.5 rounded w-full border border-neutral-100 bg-white" />
                              <div className="grid grid-cols-2 gap-2">
                                <input type="text" placeholder="Primary Insurance" value="BCBS Illinois" disabled className="text-xs p-2.5 rounded border border-neutral-100 bg-white" />
                                <input type="text" placeholder="Member ID" value="XOF-890218765" disabled className="text-xs p-2.5 rounded border border-neutral-100 bg-white" />
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">Upload Documents</span>
                              <div className="grid grid-cols-2 gap-3">
                                <button
                                  onClick={() => runOcrSim('dl')}
                                  className="p-4 border border-dashed rounded-xl flex flex-col items-center justify-center bg-white hover:bg-neutral-50 cursor-pointer"
                                >
                                  <Smartphone className="size-5 text-neutral-450 border-neutral-200" />
                                  <span className="text-[10px] font-bold text-navy mt-1">Driver&apos;s License</span>
                                </button>
                                <button
                                  onClick={() => runOcrSim('insurance')}
                                  className="p-4 border border-dashed rounded-xl flex flex-col items-center justify-center bg-white hover:bg-neutral-50 cursor-pointer"
                                >
                                  <FileText className="size-5 text-neutral-450 border-neutral-200" />
                                  <span className="text-[10px] font-bold text-navy mt-1">Insurance Card</span>
                                </button>
                              </div>
                              {ocrStatus === 'scanning' && (
                                <div className="space-y-1.5">
                                  <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                                    <span>AI OCR Scanning...</span>
                                    <span>{ocrProgress}%</span>
                                  </div>
                                  <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-[#F56A00] h-full" style={{ width: `${ocrProgress}%` }} />
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="md:col-span-6 bg-navy text-white p-5 rounded-xl border border-white/5 space-y-4">
                          <div className="text-xs font-mono text-teal uppercase font-bold tracking-wider flex items-center justify-between">
                            <span>Auto-Extracted Data</span>
                            {ocrStatus === 'done' && <CheckCircle className="size-4 text-teal" />}
                          </div>

                          <div className="space-y-3 text-xs">
                            <div className="bg-white/5 p-3 rounded-lg space-y-1">
                              <div className="text-[10px] text-teal font-mono uppercase tracking-wider">Demographics</div>
                              <div className="flex justify-between text-white/80"><span>Full Name:</span> <strong className="text-white">Anita Lopez</strong></div>
                              <div className="flex justify-between text-white/80"><span>DOB:</span> <strong className="text-white">04/12/1986</strong></div>
                              <div className="flex justify-between text-white/80"><span>Gender:</span> <strong className="text-white">Female</strong></div>
                            </div>

                            <div className="bg-white/5 p-3 rounded-lg space-y-1">
                              <div className="text-[10px] text-teal font-mono uppercase tracking-wider">Insurance Card Detail</div>
                              <div className="flex justify-between text-white/80"><span>Carrier:</span> <strong className="text-white">BCBS Illinois</strong></div>
                              <div className="flex justify-between text-white/80"><span>Member ID:</span> <strong className="text-white font-mono">XOF-890218765</strong></div>
                              <div className="flex justify-between text-white/80"><span>Group No:</span> <strong className="text-white font-mono">BC-9921-A</strong></div>
                            </div>
                          </div>

                          <div className="flex gap-2 justify-center text-[10px] font-mono text-[#F56A00] bg-[#F56A00]/5 px-3 py-1.5 rounded-lg border border-[#F56A00]/10">
                            <span>✓ No typing required</span>
                            <span>·</span>
                            <span>✓ No front-desk assistance</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE 5: ELIGIBILITY VERIFICATION (Slide 5 Eligibility) */}
                  {slides[activeSlide].type === 'eligibility' && (
                    <div className="space-y-5 text-left">
                      <div className="grid md:grid-cols-2 gap-6 items-start">
                        {/* Trigger flow */}
                        <div className="bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200/80 space-y-4">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">1. Process Workflow Trigger</span>
                          <div className="flex items-center justify-between border border-neutral-100 bg-white p-3 rounded-lg">
                            <span className="text-xs font-bold text-navy">Patient Enrolls</span>
                            <ChevronRight className="size-3 text-neutral-400" />
                            <span className="text-xs font-bold text-[#F56A00] bg-[#F56A00]/5 px-2.5 py-1 rounded">Pulse Core</span>
                            <ChevronRight className="size-3 text-neutral-400" />
                            <span className="text-xs font-bold text-white bg-navy px-2.5 py-1 rounded">Payor Gateway</span>
                          </div>
                          
                          <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                            Instantaneous 270/271 transaction maps coverage limits, dynamic copays, coinsurances, and deductible parameters before checkout.
                          </p>

                          <button
                            onClick={runEligibilityChecker}
                            className="w-full rounded-lg bg-navy hover:bg-navy-deep text-white font-semibold text-xs py-3 flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <RefreshCw className={`size-3.5 ${eligibilityStatus === 'running' ? 'animate-spin' : ''}`} />
                            {eligibilityStatus === 'idle' ? 'Simulate Real-Time Payer Call' : eligibilityStatus === 'running' ? 'Querying Portals (< 30s)...' : 'Query Succeeded'}
                          </button>
                        </div>

                        {/* Return details list */}
                        <div className="bg-white p-5 rounded-xl border border-[#F56A00]/15 space-y-3 relative overflow-hidden">
                          <div className="absolute top-2 right-2 bg-teal/10 text-teal px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider">
                            Response Received
                          </div>
                          <span className="text-[10px] font-mono uppercase text-[#F56A00] font-bold block">Verified Payer Outcomes</span>
                          
                          <ul className="space-y-1.5 text-xs">
                            <li className="flex justify-between border-b border-neutral-50 pb-1.5">
                              <span className="text-neutral-500 flex items-center gap-1.5">✓ Active Coverage Status</span>
                              <strong className="text-navy">{eligibilityReport?.active || 'Pending...'}</strong>
                            </li>
                            <li className="flex justify-between border-b border-neutral-50 pb-1.5">
                              <span className="text-neutral-500 flex items-center gap-1.5">✓ Copay Mapping</span>
                              <strong className="text-navy">{eligibilityReport?.copay || 'Pending...'}</strong>
                            </li>
                            <li className="flex justify-between border-b border-neutral-50 pb-1.5">
                              <span className="text-neutral-500 flex items-center gap-1.5">✓ Plan Exclusion Rules</span>
                              <strong className="text-navy">{eligibilityReport?.restrictions || 'Pending...'}</strong>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-neutral-500 flex items-center gap-1.5">✓ Deductible Met Tracker</span>
                              <strong className="text-navy">{eligibilityReport?.deductible || 'Pending...'}</strong>
                            </li>
                          </ul>

                          {eligibilityStatus === 'idle' && (
                            <div className="text-xs text-neutral-400 italic text-center py-4 font-mono">
                              Click the button on the left to fire the real-time API call.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE 6: EMR SYNC (Slide 6 EMR / EHR / PM Sync) */}
                  {slides[activeSlide].type === 'emrSync' && (
                    <div className="space-y-6 text-left">
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-dashed border-neutral-200 p-4 rounded-xl bg-neutral-50/20">
                        <div>
                          <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold block">Source Context</span>
                          <span className="text-xs font-bold text-navy flex items-center gap-1.5 mt-0.5">
                            <CheckCircle className="size-4 text-teal" /> Verified Pulse Profile
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#F56A00]">
                          <Activity className="size-4 text-[#F56A00] animate-pulse" /> 
                          <span>Bi-directional Real-Time Sync</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold block">Target System</span>
                          <span className="text-xs font-bold text-navy flex items-center gap-1.5 mt-0.5">
                            <Database className="size-4 text-purple-600" /> Existing Clinic EMR
                          </span>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-4 gap-4">
                        {[
                          { title: 'Patient Profile', task: 'Master Demographics Record', query: 'Audited back to DL upload source.' },
                          { title: 'Insurance Record', task: 'Key Hierarchy Mapping', query: 'Carrier, plan, member ID, group synced.' },
                          { title: 'Appointment Info', task: 'EMR Calendar Sync', query: 'Time slot, clinician, specialty linked.' },
                          { title: 'Visit Prep Data', task: 'Clinical Eligibility Files', query: 'Uploaded documents & eligibility snapshots.' }
                        ].map((item, idx) => (
                          <div key={idx} className="p-4 rounded-xl bg-[#FAFBFD] border border-neutral-200/50 hover:shadow-sm transition-shadow">
                            <div className="text-xs font-bold text-navy-deep">{item.title}</div>
                            <div className="text-[10px] font-medium text-[#F56A00] uppercase font-mono mt-1">{item.task}</div>
                            <p className="text-[11px] text-neutral-500 mt-2 font-sans leading-relaxed">{item.query}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TYPE 7: SCHEDULING (Slide 7 AI Scheduling) */}
                  {slides[activeSlide].type === 'scheduling' && (
                    <div className="space-y-5 text-left">
                      <div className="grid md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-7 bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200/80 space-y-4">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">Patient Selects Parameter</span>
                          
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="space-y-1">
                              <span className="text-[10px] text-neutral-500 font-semibold block">01 · Provider</span>
                              <select
                                value={selectedProvider}
                                onChange={(e) => setSelectedProvider(e.target.value)}
                                className="w-full text-xs p-2 rounded border border-neutral-200 bg-white"
                              >
                                <option>Dr. Park · Internal Medicine</option>
                                <option>Dr. Lopez · Specialty Ortho</option>
                              </select>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] text-neutral-500 font-semibold block">02 · Location</span>
                              <select
                                value={selectedLoc}
                                onChange={(e) => setSelectedLoc(e.target.value)}
                                className="w-full text-xs p-2 rounded border border-neutral-200 bg-white"
                              >
                                <option>Westview Clinic</option>
                                <option>Eastside Outpatient</option>
                              </select>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] text-neutral-500 font-semibold block">03 · Specialty</span>
                              <select
                                value={selectedSpecialty}
                                onChange={(e) => setSelectedSpecialty(e.target.value)}
                                className="w-full text-xs p-3 rounded border border-neutral-200 bg-white col-span-2"
                              >
                                <option>Annual physical</option>
                                <option>Orthopedic Outpatient consultation</option>
                              </select>
                            </div>

                            <div className="space-y-1">
                              <span className="text-[10px] text-neutral-500 font-semibold block">04 · Time Slot</span>
                              <div className="grid grid-cols-4 gap-1.5 pt-1">
                                {['9:00', '9:30', '10:00', '10:30', '11:00', '1:00', '1:30', '2:00'].map((slot) => (
                                  <button
                                    key={slot}
                                    onClick={() => setSelectedTimeSlot(`${slot} AM`)}
                                    className={`py-1 rounded text-[10px] font-bold text-center border cursor-pointer ${
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
                            className="w-full rounded-lg bg-navy hover:bg-navy-deep text-white font-semibold text-xs py-3 flex items-center justify-center gap-2 cursor-pointer mt-4"
                          >
                            <Calendar className="size-4" /> Book Appointmemt Instantly (Click)
                          </button>
                        </div>

                        <div className="md:col-span-5 bg-navy text-white p-5 rounded-xl border border-white/5 space-y-3 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-teal uppercase font-bold tracking-wider">Clientele Pulse Handles</span>
                            <div className="text-sm font-bold text-white mt-1">Unified Multi-move Engine</div>
                            
                            <ul className="mt-4 space-y-2.5 text-xs text-white/80">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                                <span>Checks provider calendar live availability.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                                <span>Secures appointment in system of records.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                                <span>Instantly coordinates EMR calendar.</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" />
                                <span>Sends SMS verification with instructions.</span>
                              </li>
                            </ul>
                          </div>

                          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-neutral-400">
                            Status: {bookingStep === 'idle' ? 'Awaiting Interaction' : bookingStep === 'booking' ? 'Booking...' : '🟢 Outpatient slot booked and verified.'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE 8: APPOINTMENT MGMT GAINS (Slide 8 Appointment Mgmt) */}
                  {slides[activeSlide].type === 'mgmtGains' && (
                    <div className="space-y-6 text-left">
                      <div className="grid md:grid-cols-3 gap-6">
                        
                        <div className="bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">01 · Patient Receives</span>
                          <div className="text-xs font-bold text-navy mt-1">Proactive Nudges</div>
                          <ul className="mt-4 space-y-2.5 text-xs text-neutral-600 font-sans">
                            <li>• Appointment confirmation.</li>
                            <li>• Smart text reminders tuned by visit type.</li>
                            <li>• Streamlined reschedule link.</li>
                            <li>• One-click cancellation options.</li>
                          </ul>
                        </div>

                        <div className="bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">02 · Patient Can</span>
                          <div className="text-xs font-bold text-navy mt-1">Self-Serve Anytime</div>
                          <ul className="mt-4 space-y-2.5 text-xs text-neutral-600 font-sans">
                            <li>• Cancel appointment any time.</li>
                            <li>• Reschedule time slots without office calls.</li>
                            <li>• Multi-calendar sync integrations.</li>
                            <li className="text-[#F56A00] font-semibold">• Cancelled slot instantly flows back to open pool.</li>
                          </ul>
                        </div>

                        <div className="bg-navy text-white p-5 rounded-xl border border-white/5 space-y-4">
                          <span className="text-[10px] font-mono uppercase text-teal font-bold block">03 · Verified Results</span>
                          <div className="text-xs font-bold text-white mt-1">Strategic Operations Gains</div>
                          
                          <div className="space-y-2.5">
                            <div>
                              <div className="flex justify-between text-xs text-white/95">
                                <span>No-Shows Rate</span>
                                <span className="font-mono text-xs font-bold text-teal">-35% Target</span>
                              </div>
                              <div className="w-full bg-white/10 h-1 rounded-full"><div className="bg-teal h-full w-[35%]" /></div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs text-white/95">
                                <span>Empty Slots Recapture</span>
                                <span className="font-mono text-xs font-bold text-teal">-60% Saved</span>
                              </div>
                              <div className="w-full bg-white/10 h-1 rounded-full"><div className="bg-teal h-full w-[60%]" /></div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs text-white/95">
                                <span>Staff Follow-up Calls</span>
                                <span className="font-mono text-xs font-bold text-[#F56A00]">-80% Less</span>
                              </div>
                              <div className="w-full bg-white/10 h-1 rounded-full"><div className="bg-[#F56A00] h-full w-[80%]" /></div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TYPE 9: PATIENT COMMUNICATION THREADS (Slide 9 Communication) */}
                  {slides[activeSlide].type === 'commsThread' && (
                    <div className="space-y-5 text-left">
                      <div className="grid md:grid-cols-12 gap-6 items-stretch">
                        
                        {/* Selector lists */}
                        <div className="md:col-span-5 bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200/80 flex flex-col justify-between">
                          <div className="space-y-3">
                            <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">Central Communication Loop</span>
                            
                            <button
                              onClick={() => setChatChannel('front')}
                              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                                chatChannel === 'front' ? 'border-[#F56A00] bg-white shadow-xs' : 'border-neutral-100 bg-neutral-50/20'
                              }`}
                            >
                              <div>
                                <div className="text-xs font-bold text-navy">FD · Front Desk Channel</div>
                                <div className="text-[10px] text-neutral-450 text-neutral-400 font-mono mt-0.5">Forms &amp; registration, schedule changes.</div>
                              </div>
                              {chatChannel === 'front' && <div className="size-2 rounded-full bg-[#F56A00]" />}
                            </button>

                            <button
                              onClick={() => setChatChannel('provider')}
                              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                                chatChannel === 'provider' ? 'border-[#F56A00] bg-white shadow-xs' : 'border-neutral-100 bg-neutral-50/20'
                              }`}
                            >
                              <div>
                                <div className="text-xs font-bold text-navy">DR · Provider Channel</div>
                                <div className="text-[10px] text-neutral-450 text-neutral-400 font-mono mt-0.5">Clinical questions, care plans, dosage.</div>
                              </div>
                              {chatChannel === 'provider' && <div className="size-2 rounded-full bg-[#F56A00]" />}
                            </button>

                            <button
                              onClick={() => setChatChannel('billing')}
                              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                                chatChannel === 'billing' ? 'border-[#F56A00] bg-white shadow-xs' : 'border-neutral-100 bg-neutral-50/20'
                              }`}
                            >
                              <div>
                                <div className="text-xs font-bold text-navy">$ · Billing Team Channel</div>
                                <div className="text-[10px] text-neutral-450 text-neutral-400 font-mono mt-0.5">Statements, payments, EOB details, claim disputes.</div>
                              </div>
                              {chatChannel === 'billing' && <div className="size-2 rounded-full bg-[#F56A00]" />}
                            </button>
                          </div>
                        </div>

                        {/* Thread detail */}
                        <div className="md:col-span-7 bg-navy text-white p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b border-white/15">
                              <span className="text-[10px] font-mono text-teal font-bold uppercase tracking-wider">
                                {chatChannel === 'front' ? 'FRONT DESK QUEUE' : chatChannel === 'provider' ? 'PROVIDER NOTIFICATION' : 'BILLING OFFICE QUEUE'}
                              </span>
                              <span className="text-[10px] text-white/50 font-mono">Bilateral TLS Channel</span>
                            </div>

                            {chatChannel === 'front' && (
                              <div className="space-y-3 font-sans">
                                <div className="bg-white/5 p-3 rounded-lg text-xs leading-relaxed">
                                  <span className="text-teal font-bold block mb-1 font-mono text-[9px]">PATIENT INQUIRY</span>
                                  &quot;Can I move my Thursday visit? My work calendar changed.&quot;
                                </div>
                                <div className="p-3 rounded-lg text-xs leading-relaxed bg-[#F56A00]/10 border border-[#F56A00]/25 text-[#FAFBFD]/90">
                                  <span className="text-[#F56A00] font-bold block mb-1 font-mono text-[9px]">PULSE AUTO ROUTER RESPONSE</span>
                                  &quot;Routing to Front Desk. We noticed 2 open slots that match your provider slot on Thursday at 2:00 PM and 3:30 PM. Click here to swap.&quot;
                                </div>
                              </div>
                            )}

                            {chatChannel === 'provider' && (
                              <div className="space-y-3 font-sans">
                                <div className="bg-white/5 p-3 rounded-lg text-xs leading-relaxed">
                                  <span className="text-teal font-bold block mb-1 font-mono text-[9px]">PATIENT INQUIRY</span>
                                  &quot;Slight side effect on day 3 of recovery — is this response pattern normal?&quot;
                                </div>
                                <div className="p-3 rounded-lg text-xs leading-relaxed bg-[#F56A00]/10 border border-[#F56A00]/25 text-[#FAFBFD]/90">
                                  <span className="text-[#F56A00] font-bold block mb-1 font-mono text-[9px]">PROVIDER SECURE DECT QUEUE</span>
                                  &quot;Delivered directly to Dr. Park&apos;s chart dashboard. Average provider reply/escalation window: under 2 hours.&quot;
                                </div>
                              </div>
                            )}

                            {chatChannel === 'billing' && (
                              <div className="space-y-3 font-sans">
                                <div className="bg-white/5 p-3 rounded-lg text-xs leading-relaxed">
                                  <span className="text-teal font-bold block mb-1 font-mono text-[9px]">PATIENT INQUIRY</span>
                                  &quot;Under doctor orders, why was my specialty clinic copay $40 instead of $20?&quot;
                                </div>
                                <div className="p-3 rounded-lg text-xs leading-relaxed bg-[#F56A00]/10 border border-[#F56A00]/25 text-[#FAFBFD]/90">
                                  <span className="text-[#F56A00] font-bold block mb-1 font-mono text-[9px]">BILLING GATEWAY INTELLIGENCE</span>
                                  &quot;Route confirmed to billing ledger. Attached EOB and standard medical exclusions report for patient review.&quot;
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="text-[10px] text-[#FAFBFD]/40 font-mono pt-3 border-t border-white/5 text-center">
                            No more phone tag — every conversation is tracked, routed, and fully audited.
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TYPE 10: PATIENT POCKET DASHBOARD (Slide 10 Patient Dashboard) */}
                  {slides[activeSlide].type === 'pocketDashboard' && (
                    <div className="space-y-5 text-left">
                      <div className="grid md:grid-cols-12 gap-6 items-stretch">
                        
                        {/* Mobile preview frame */}
                        <div className="md:col-span-6 bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200 max-w-sm mx-auto w-full">
                          <div className="border border-neutral-100 bg-white rounded-2xl p-4 shadow-sm space-y-4">
                            <div className="flex justify-between items-center pb-2 border-b border-neutral-100">
                              <div>
                                <div className="text-xs font-bold text-navy">My Health · Pulse Portal</div>
                                <div className="text-[9px] text-neutral-400 font-mono mt-0.5">Anita Lopez · DOB 04/12/1986</div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="p-2.5 rounded-lg border border-neutral-100 text-left bg-neutral-50/30">
                                <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-neutral-400 block">Upcoming Visits</span>
                                <span className="text-xs font-bold text-navy-deep block mt-1">3 upcoming</span>
                                <span className="text-[9px] text-[#F56A00] block mt-0.5">Thu 10:30 · Dr. Park</span>
                              </div>
                              <div className="p-2.5 rounded-lg border border-neutral-100 text-left bg-neutral-50/30">
                                <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-neutral-400 block">Lab Reports</span>
                                <span className="text-xs font-bold text-emerald-600 block mt-1">2 new</span>
                                <span className="text-[9px] text-neutral-400 block mt-0.5">CBC &amp; Lipid panel</span>
                              </div>
                              <div className="p-2.5 rounded-lg border border-neutral-100 text-left bg-neutral-50/30">
                                <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-neutral-400 block">Uploaded Files</span>
                                <span className="text-xs font-bold text-navy-deep block mt-1">12 uploaded</span>
                                <span className="text-[9px] text-neutral-400 block mt-0.5">MRI, MRI summary</span>
                              </div>
                              <div className="p-2.5 rounded-lg border border-neutral-100 text-left bg-neutral-50/30">
                                <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-neutral-400 block">Statement Balance</span>
                                <span className="text-xs font-bold text-navy-deep block mt-1">$0.00 Outstanding</span>
                                <span className="text-[10px] text-teal-glow block font-bold mt-0.5">Closed Billing Ledger</span>
                              </div>
                            </div>

                            <div className="border border-dashed border-neutral-300 rounded-xl p-3 text-center bg-neutral-50/50">
                              <Upload className="size-4 text-neutral-400 mx-auto" />
                              <span className="text-[10px] font-bold text-neutral-500 block mt-1">+ Upload Medical Documents</span>
                            </div>
                          </div>
                        </div>

                        {/* Provider gets */}
                        <div className="md:col-span-6 bg-navy text-white p-6 rounded-xl border border-white/5 space-y-4">
                          <span className="text-[10px] font-mono text-teal uppercase font-bold block tracking-wider">Provider Dashboard Integration</span>
                          <div className="text-sm font-bold text-white leading-snug">Full picture before the visit. Clinical documentation updates automatically:</div>
                          
                          <ul className="space-y-3.5 text-xs text-white/80">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                              <span>✓ Previous Visit Summaries</span>
                              <strong className="text-teal uppercase font-mono text-[10px]">Indexed Automatically</strong>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                              <span>✓ Specialty Lab Reports</span>
                              <strong className="text-[#F56A00] uppercase font-mono text-[10px]">Flagged Values Surfaced</strong>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                              <span>✓ Ortho X-Ray &amp; MRI Scans</span>
                              <strong className="text-teal uppercase font-mono text-[10px]">Linked Viewer</strong>
                            </li>
                            <li className="flex justify-between">
                              <span>✓ External Medical Histories</span>
                              <strong className="text-teal uppercase font-mono text-[10px]">OCR-Searchable PDF</strong>
                            </li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TYPE 11: PROVIDER CONSOLE ASSISTANCE (Slide 11 Provider Console) */}
                  {slides[activeSlide].type === 'providerConsole' && (
                    <div className="space-y-5 text-left">
                      <div className="grid md:grid-cols-3 gap-6">
                        
                        <div className="bg-white p-5 rounded-xl border border-neutral-200">
                          <span className="inline-flex items-center gap-1.5 bg-amber-50 px-2.5 py-1 rounded text-[10px] font-bold text-amber-700 mb-3">
                            Phase 01 · Before Visit
                          </span>
                          <div className="text-xs font-bold text-navy">Pre-Visit Briefing</div>
                          <p className="text-[11px] text-neutral-500 mt-2 leading-relaxed">
                            Complete clinical context aggregated automatically on a single clinical entry screen:
                          </p>
                          <ul className="mt-3 space-y-2 text-xs text-neutral-600 font-sans">
                            <li>• Patient history review.</li>
                            <li>• Active insurance status snapshot.</li>
                            <li>• Verified Eligibility Confirmation.</li>
                            <li>• Uploaded external records summaries.</li>
                          </ul>
                        </div>

                        <div className="bg-navy text-white p-5 rounded-xl border border-white/5 space-y-3">
                          <span className="inline-flex items-center gap-1.5 bg-[#F56A00]/10 px-2.5 py-1 rounded text-[10px] font-bold text-[#F56A00] mb-1">
                            Phase 02 · During Visit
                          </span>
                          <div className="text-xs font-bold text-white">Hands Stay on Patient — Not Keyboard</div>
                          <p className="text-[11px] text-white/70 leading-relaxed">
                            State-of-the-art voice and clinical scribing updates chart slots instantly:
                          </p>
                          <ul className="space-y-2 text-xs text-white/80 font-sans">
                            <li>• Automated room voice scribing.</li>
                            <li>• Real-time clinically structured notes.</li>
                            <li>• Custom EHR structured templates.</li>
                            <li>• Specialty documentation modifier pre-checks.</li>
                          </ul>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-neutral-200">
                          <span className="inline-flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded text-[10px] font-bold text-blue-700 mb-3">
                            Phase 03 · After Visit
                          </span>
                          <div className="text-xs font-bold text-navy">Closing the Financial Loop</div>
                          <p className="text-[11px] text-neutral-500 mt-2 leading-relaxed">
                            Clinical data flows directly and securely to administrative desks in real-time:
                          </p>
                          <ul className="mt-3 space-y-2 text-xs text-neutral-600 font-sans">
                            <li>• Code modifier recommendations.</li>
                            <li>• Clean claim billing payload file.</li>
                            <li>• Patient summary with clear directions.</li>
                            <li>• Care pathway reminders queued.</li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TYPE 12: RCM AUTOMATION COLUMNS (Slide 12 RCM Automation) */}
                  {slides[activeSlide].type === 'rcmColumns' && (
                    <div className="space-y-5 text-left">
                      <div className="grid md:grid-cols-3 gap-6">
                        
                        <div className="bg-white p-5 rounded-xl border border-neutral-200/80">
                          <span className="size-8 rounded-lg bg-[#FAFBFD] flex items-center justify-center text-xs font-bold text-[#F56A00] mb-3">
                            PA
                          </span>
                          <div className="text-xs font-bold text-navy">Prior Authorization Automation</div>
                          <p className="text-[11px] text-neutral-500 mt-2 leading-relaxed">
                            Autonomously queries medical necessity criteria per modifier/CPT rules so providers bypass chaser overhead completely:
                          </p>
                          <ul className="mt-4 space-y-2 text-xs text-neutral-600">
                            <li>• Identifies criteria prerequisites automatically.</li>
                            <li>• Prepares complete clinical dossier.</li>
                            <li>• Logs, submits, &amp; monitors status.</li>
                            <li>• Flags human billing team on exception.</li>
                          </ul>
                        </div>

                        <div className="bg-white p-5 rounded-xl border border-neutral-200/80">
                          <span className="size-8 rounded-lg bg-[#FAFBFD] flex items-center justify-center text-xs font-bold text-blue-600 mb-3">
                            CD
                          </span>
                          <div className="text-xs font-bold text-navy">Autonomous Medical Coding</div>
                          <p className="text-[11px] text-neutral-500 mt-2 leading-relaxed">
                            AI analyzes chart notes, extracting ICD-10 codes, modifiers, and bundles, then passes to coders to confirm:
                          </p>
                          <ul className="mt-4 space-y-2 text-xs text-neutral-600">
                            <li>• Direct ICD-10 modifier suggest selection.</li>
                            <li>• Multi-modifier and CPT code alignments.</li>
                            <li>• Checks documentation completeness gaps.</li>
                            <li>• Local CMS coverage guideline checklists.</li>
                          </ul>
                        </div>

                        <div className="bg-navy text-white p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                          <div>
                            <span className="size-8 rounded-lg bg-white/5 flex items-center justify-center text-xs font-bold text-teal mb-3">
                              CL
                            </span>
                            <div className="text-xs font-bold text-white">Uncompromising Claim Scrubbing</div>
                            <p className="text-[11px] text-white/70 mt-2 leading-relaxed">
                              Clean claims standard validated pre-submission, eliminating payer denial loops upstream:
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-white/80">
                              <li>• Automatic structured file creation.</li>
                              <li>• Direct pre-submission scrubbing.</li>
                              <li>• Self-healing error auto-fix loops.</li>
                              <li>• Predictive score indices.</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TYPE 13: CLAIMS & AR / PAYMENT CHART (Slide 13 Claims & AR) */}
                  {slides[activeSlide].type === 'claimsBucket' && (
                    <div className="space-y-6 text-left">
                      <div className="grid md:grid-cols-3 gap-6">
                        
                        {/* Bucket 1 Claims tracker */}
                        <div className="bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200/80 space-y-4">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">Track 01 · Claim Buckets</span>
                          <div className="text-xs font-bold text-navy-deep">Submission Status</div>
                          
                          <div className="space-y-2 text-xs font-mono">
                            <div className="flex justify-between bg-white p-2 border border-neutral-100 rounded">
                              <span className="text-neutral-500">Submitted OK:</span>
                              <span className="font-bold text-navy">1,284 Claims</span>
                            </div>
                            <div className="flex justify-between bg-white p-2 border border-neutral-105 border-neutral-100 rounded">
                              <span className="text-neutral-500">Pending:</span>
                              <span className="font-bold text-amber-600">147 Claims</span>
                            </div>
                            <div className="flex justify-between bg-white p-2 border border-neutral-105 border-neutral-100 rounded">
                              <span className="text-neutral-500">Rejected:</span>
                              <span className="font-bold text-red-500">23 Claims</span>
                            </div>
                          </div>
                        </div>

                        {/* Bucket 2 Week Postings */}
                        <div className="bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200/80 space-y-4">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">Track 02 · Payments Posting</span>
                          <div className="text-xs font-bold text-navy">This Week Postings</div>
                          
                          <div className="grid grid-cols-7 items-end gap-1 h-24 pt-4">
                            {[15, 30, 45, 65, 80, 40, 20].map((val, idx) => (
                              <div key={idx} className="flex flex-col items-center">
                                <div className="bg-[#F56A00] w-2.5 rounded-t" style={{ height: `${val}px` }} />
                                <span className="text-[9px] text-neutral-400 font-mono mt-1">
                                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="text-[9px] text-neutral-400 font-mono text-center">
                            Automated payments balance ERA checklist.
                          </div>
                        </div>

                        {/* Bucket 3 AR aging */}
                        <div className="bg-navy text-white p-5 rounded-xl border border-white/5 space-y-4">
                          <span className="text-[10px] font-mono uppercase text-teal font-bold block">Track 03 · Accounts Receivable</span>
                          <div className="text-xs font-bold text-white">AR Aging Buckets</div>
                          
                          <div className="space-y-3.5 text-xs font-sans">
                            <div className="flex justify-between items-center text-[11px]">
                              <span>0–30 Days Outstanding</span>
                              <strong className="text-teal font-mono">62%</strong>
                            </div>
                            <div className="flex justify-between items-center text-[11px]">
                              <span>31–60 Days Outstanding</span>
                              <strong className="text-teal font-mono">21%</strong>
                            </div>
                            <div className="flex justify-between items-center text-[11px]">
                              <span>61–90 Days Outstanding</span>
                              <strong className="text-teal font-mono">11%</strong>
                            </div>
                            <div className="flex justify-between items-center text-[11px] text-[#F56A00]">
                              <span>90+ Days (High Risk)</span>
                              <strong className="font-mono">6%</strong>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TYPE 14: DENIAL PREVENTION & MANAGEMENT (Slide 14 Denial Mgmt) */}
                  {slides[activeSlide].type === 'denialPrv' && (
                    <div className="space-y-5 text-left">
                      <div className="grid md:grid-cols-12 gap-6 items-stretch">
                        
                        {/* What AI Identifies */}
                        <div className="md:col-span-6 bg-[#FAFBFD] p-5 rounded-xl border border-neutral-200/80 space-y-4">
                          <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block">What AI Identifies</span>
                          <div className="text-xs font-bold text-navy">Locating Claim Fault Signs</div>

                          {scrubStatus === 'dirty' ? (
                            <div className="space-y-3">
                              {scrubErrors.map((err, i) => (
                                <div key={i} className="flex gap-2 items-center bg-red-50 text-red-700 text-xs p-2.5 rounded border border-red-100">
                                  <AlertTriangle className="size-4 shrink-0" />
                                  <span>{err}</span>
                                </div>
                              ))}
                              <button
                                onClick={runScrubber}
                                className="w-full text-xs font-bold rounded-lg bg-navy hover:bg-navy-deep text-white py-2.5 flex items-center justify-center gap-1.5 cursor-pointer"
                              >
                                Run Claim Scrubber &amp; Repair
                              </button>
                            </div>
                          ) : scrubStatus === 'scrubbing' ? (
                            <div className="py-8 text-center text-xs text-neutral-500 font-mono">
                              <RefreshCw className="size-6 text-[#F56A00] animate-spin mx-auto mb-2" />
                              Repairing claim payloads based on payer billing patterns...
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <div className="p-4 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                                <CheckCircle className="size-4" />
                                All claims repaired! Clean Claim ready for submission.
                              </div>
                              <button
                                onClick={() => setScrubStatus('dirty')}
                                className="text-xs font-bold text-neutral-500 hover:text-navy block mx-auto underline cursor-pointer"
                              >
                                Reset Demo
                              </button>
                            </div>
                          )}
                        </div>

                        {/* What AI Provides */}
                        <div className="md:col-span-6 bg-navy text-white p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                          <div className="space-y-4">
                            <span className="text-[10px] font-mono text-teal uppercase font-bold block">Autonomous Path to Recovery</span>
                            
                            <ul className="space-y-3 text-xs text-white/85">
                              <li className="flex items-start gap-2.5">
                                <div className="size-5 rounded bg-white/10 flex items-center justify-center text-teal text-[10px] font-bold">1</div>
                                <div>
                                  <div className="font-bold text-white">Corrective action suggestions</div>
                                  <p className="text-[10px] text-white/60">Generated automatically and routed to coders for review.</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2.5">
                                <div className="size-5 rounded bg-white/10 flex items-center justify-center text-teal text-[10px] font-bold">2</div>
                                <div>
                                  <div className="font-bold text-white">Workflow corrective recommendation</div>
                                  <p className="text-[10px] text-white/60">Adjusts upstream criteria so repeat errors don&apos;t duplicate next cycles.</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-2.5">
                                <div className="size-5 rounded bg-white/10 flex items-center justify-center text-teal text-[10px] font-bold">3</div>
                                <div>
                                  <div className="font-bold text-white">Priority appeal handling</div>
                                  <p className="text-[10px] text-white/60">Organizes highest aging value claims first, protecting margins.</p>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <button className="w-full text-xs font-bold text-[#F56A00] text-center pt-3 mt-4 border-t border-white/10 uppercase tracking-widest block hover:text-[#D15900] transition-colors cursor-pointer">
                            REDUCE REVENUE LEAKAGE ↑
                          </button>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TYPE 15: ROLE-BASED DASHBOARDS (Slide 15 Dashboards) */}
                  {slides[activeSlide].type === 'liveDashboards' && (
                    <div className="space-y-5 text-left">
                      <div className="flex gap-2 border-b border-neutral-100 pb-3">
                        {['patient', 'provider', 'front', 'leadership'].map((role) => (
                          <button
                            key={role}
                            onClick={() => setActiveRole(role as any)}
                            className={`text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer ${
                              activeRole === role
                                ? 'bg-navy text-white'
                                : 'bg-[#FAFBFD] hover:bg-neutral-50 text-neutral-600 border border-neutral-200'
                            }`}
                          >
                            For {role === 'front' ? 'Front Office' : role === 'leadership' ? 'Leadership' : role.charAt(0).toUpperCase() + role.slice(1)}
                          </button>
                        ))}
                      </div>

                      <div className="bg-[#FAFBFD] border border-neutral-200 p-5 rounded-xl">
                        {activeRole === 'patient' && (
                          <div className="space-y-2">
                            <div className="text-xs font-bold text-navy">Patient Dashboard Home</div>
                            <p className="text-xs text-neutral-500">Patient manages active scheduled check-ins, EOB receipts, payments, and clinic reminders dynamically on a safe smartphone portal layout.</p>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-xs bg-white p-3 rounded-lg border border-neutral-100">
                              <div className="text-neutral-500">• Secure records and previous clinical summaries.</div>
                              <div className="text-neutral-500">• Upcoming outpatient coordinators.</div>
                            </div>
                          </div>
                        )}

                        {activeRole === 'provider' && (
                          <div className="space-y-2">
                            <div className="text-xs font-bold text-navy">Provider / Clinician Portal</div>
                            <p className="text-xs text-neutral-500">AGGREGATING patient readiness files, preceding lab transcripts, visit histories, in-room voice scribes status, and coding recommendations.</p>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-xs bg-white p-3 rounded-lg border border-neutral-100">
                              <div className="text-neutral-500">• Clinical notes modification queues.</div>
                              <div className="text-neutral-500">• Productivity and scheduling meters.</div>
                            </div>
                          </div>
                        )}

                        {activeRole === 'front' && (
                          <div className="space-y-2">
                            <div className="text-xs font-bold text-navy">Front Office Console</div>
                            <p className="text-xs text-neutral-500">Monitors registration checklist status, coverage alerts, real-time eligibility flags, and coordinated scheduling options.</p>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-xs bg-white p-3 rounded-lg border border-neutral-100">
                              <div className="text-neutral-500">• Auto-captured intake list ledger.</div>
                              <div className="text-neutral-500">• Communication threads routed by target team.</div>
                            </div>
                          </div>
                        )}

                        {activeRole === 'leadership' && (
                          <div className="space-y-2">
                            <div className="text-xs font-bold text-navy">Management Dashboard</div>
                            <p className="text-xs text-neutral-500">High-level financial KPIs: tracking claims submitted, payment postings, denial trends, clean claim score indices, and accounts receivable (AR).</p>
                            <div className="mt-4 grid grid-cols-2 gap-3 text-xs bg-white p-3 rounded-lg border border-neutral-100">
                              <div className="text-neutral-500">• AR aging buckets report.</div>
                              <div className="text-neutral-500">• Clean claims performance index tracking.</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* TYPE 16: TEAM BENEFITS GRID (Slide 16 Benefits) */}
                  {slides[activeSlide].type === 'benefitsPX' && (
                    <div className="space-y-5 text-left">
                      <div className="grid sm:grid-cols-4 gap-4">
                        {[
                          { title: 'PX · Patient Experience', list: ['Faster registration', 'Bilateral booking coordination', 'Shorter waiting delays', 'Transparent cost details'] },
                          { title: 'FO · Front Office staff', list: ['Minimized typing burden', 'No manual data entries', 'Less administrative phone calls', 'Automated coverage sync'] },
                          { title: 'PR · Provider comfort', list: ['Voice scribe charting', 'Pre-visit briefing indexes', 'More direct patient time', 'Fewer documentation hurdles'] },
                          { title: 'RCM · Billing Teams', list: ['Ultra-clean claim rates', 'Near-zero manual re-dos', 'Accelerated reimbursement', 'High AR collection rates'] }
                        ].map((b, idx) => (
                          <div key={idx} className="p-4 rounded-xl border border-neutral-205 border-neutral-200/80 bg-[#FAFBFD] hover:shadow-sm transition-shadow">
                            <div className="text-xs font-bold text-navy-deep">{b.title}</div>
                            <ul className="mt-3 space-y-2 text-[11px] text-neutral-500 font-sans">
                              {b.list.map((item, i) => (
                                <li key={i} className="flex items-center gap-1.5">
                                  <Check className="size-3 text-teal shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TYPE 17: WHY PULSE PLATFORM (Slide 17 Why Pulse) */}
                  {slides[activeSlide].type === 'whyFinal' && (
                    <div className="space-y-5 text-left">
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="space-y-3">
                          <span className="text-6xl font-black text-navy font-display select-none">Clientele Plus.</span>
                          
                          <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                            Clientele Plus wraps patient engagement, clinical documentation voice scribing, insurer authorization, eligibility checking, coding modifying, and closed-loop billing ledgers under one connected platform.
                          </p>

                          <div className="pt-2">
                            <a
                              href="/contact"
                              onClick={(e) => handleLinkClick(e, '/contact')}
                              className="inline-flex items-center gap-2 rounded-full bg-navy hover:bg-navy-deep text-white text-xs font-bold px-5 py-3 transition-transform hover:translate-x-0.5 shadow-sm"
                            >
                              Connect To Your EMR Now →
                            </a>
                          </div>
                        </div>

                        <div className="bg-navy text-white p-5 rounded-2xl border border-white/5 space-y-3 flex flex-col justify-between">
                          <span className="text-[10px] font-mono text-teal uppercase font-bold tracking-wider">Dynamic Outcomes</span>
                          
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between border-b border-white/5 pb-1.5"><span>01 · Patient Engagement</span> <strong className="text-teal font-mono">Self-Service Portals</strong></div>
                            <div className="flex justify-between border-b border-white/5 pb-1.5"><span>02 · Clinical Workflow</span> <strong className="text-teal font-mono">In-room Voice Scribing</strong></div>
                            <div className="flex justify-between border-b border-white/5 pb-1.5"><span>03 · Revenue Cycle Mgmt</span> <strong className="text-teal font-mono">Scrubbed Claims</strong></div>
                            <div className="flex justify-between"><span>04 · AI Suite Orchestration</span> <strong className="text-[#F56A00] font-mono">Connected Loop</strong></div>
                          </div>

                          <div className="mt-3 p-3 bg-white/5 border border-white/10 rounded-xl text-[10px] leading-relaxed text-white/85">
                            A smarter healthcare ecosystem — real-time automation, optimized staff coordination, and clean claim submissions.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* DIRECT MANUAL PDF VERIFIED SUMMARY CARD */}
            <div className="bg-white rounded-2xl border border-[#F56A00]/15 p-6 shadow-sm text-left">
              <span className="text-xs font-mono font-bold text-[#F56A00] uppercase tracking-wider block mb-2">Corporate Alignment Certificate</span>
              <h3 className="font-display font-bold text-navy text-xl">17 Pages of Elite Material Replicated</h3>
              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                This Clientele Plus Product Gateway delivers the exact operational blueprints, five-shift visions, 80/20 personnel strategy grids, patient registration steps, EMR bi-directional sync specifications, and clinical coding flow mechanics directly to our public portal with absolute visual integrity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DETAILED FEATURES REFERENCE GRID */}
      <section className="bg-white border-t border-b border-neutral-100 py-16 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-[#F56A00] text-[#F56A00] uppercase tracking-widest block mb-2">Platform Specifications Reference</span>
            <h2 className="font-display text-3xl font-bold text-navy leading-tight">
              A Closer Look at Clientele Plus Capabilities
            </h2>
            <p className="text-sm text-neutral-500 mt-2 font-sans">
              Designed by specialty healthcare billing experts to optimize and safeguard collections from documentation through final claims recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl border border-neutral-100 bg-[#FAFBFD] hover:shadow-xs transition-shadow space-y-3">
              <div className="size-10 bg-teal/15 rounded-xl text-teal flex items-center justify-center">
                <Brain className="size-5" />
              </div>
              <h4 className="font-bold text-navy text-sm">Applied Clinical AI Engine</h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                Continuous model finetuning aligned to orthopedic, pain management, anesthesia and physical therapy specific modifiers and CPT code rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-100 bg-[#FAFBFD] hover:shadow-xs transition-shadow space-y-3">
              <div className="size-10 bg-teal/15 rounded-xl text-teal flex items-center justify-center">
                <ShieldCheck className="size-5" />
              </div>
              <h4 className="font-bold text-navy text-sm">HIPAA &amp; Security Compliance</h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                Full end-to-end data isolate pipelines, complete audit logging, business associate agreements (BAA), SOC2 readiness, and HBMA guidelines.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-100 bg-[#FAFBFD] hover:shadow-xs transition-shadow space-y-3">
              <div className="size-10 bg-teal/15 rounded-xl text-teal flex items-center justify-center">
                <Zap className="size-5" />
              </div>
              <h4 className="font-bold text-navy text-sm">Instant Response Rates</h4>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                Real-time API queries and OCR processing return standard demographics, active payor details, and deductible stats in under 30 seconds.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION BLOCK */}
      <section className="bg-navy text-white relative overflow-hidden py-16 md:py-20 text-center">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-teal" />
        <div className="absolute inset-0 bg-hero opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to Accelerate Your Clinical Collections?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            Eliminate manual clipboard errors, stop administrative eligibility chase delays, and streamline clean billing submissions with Clientele Plus.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="rounded-full bg-teal text-navy hover:bg-teal-glow font-bold text-xs px-8 py-3.5 transition-transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Schedule Platform Demonstration
            </a>
            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className="rounded-full border border-white/20 hover:bg-white/5 text-white font-bold text-xs px-8 py-3.5 transition-transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Learn About Our Firm
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
