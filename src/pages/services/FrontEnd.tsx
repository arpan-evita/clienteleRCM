import React from 'react';
import { 
  Users, 
  Wallet, 
  FileSpreadsheet, 
  CheckCircle, 
  AlertTriangle, 
  Zap, 
  Bot, 
  ShieldAlert, 
  Calendar,
  Clock,
  ShieldCheck,
  ClipboardList,
  Smartphone,
  Laptop,
  Check,
  Activity,
  Heart,
  Network,
  FileText,
  UserCheck,
  Shield,
  DollarSign,
  BarChart3,
  ArrowRight,
  Sparkles,
  Timer
} from 'lucide-react';

interface FrontEndProps {
  navigate: (path: string) => void;
}

export default function FrontEnd({ navigate }: FrontEndProps) {
  const [activeJourneyStep, setActiveJourneyStep] = React.useState<number>(0);
  const [demoRequested, setDemoRequested] = React.useState<boolean>(false);

  const handleAssessmentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('assessment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const services = [
    {
      step: '01',
      title: 'Patient Scheduling & Access Management',
      desc: 'The revenue cycle starts at scheduling — and so do the first opportunities for error. We manage patient scheduling workflows with built-in verification triggers that catch potential issues before appointment confirmation.',
      bullets: [
        'New patient intake with complete demographic capture',
        'Insurance card capture and initial payer identification',
        'Appointment type mapping to expected CPT codes',
        'Referral requirement identification at scheduling'
      ],
      aiTouch: 'The Patient App enables 24/7 patient-initiated scheduling with auto-capture of demographics and insurance via photo, reducing manual entry errors.',
      specialtyNote: 'For orthopedic and pain management, appointment type mapping is critical — consultation vs. procedure differences are caught 5–7 days pre-visit.'
    },
    {
      step: '02',
      title: 'Insurance Eligibility Verification',
      badge: 'Module 1 Live — May 2026',
      desc: 'Eligibility errors are the #1 preventable denial driver. We verify coverage for every patient before every single visit, ensuring absolute accuracy at checkout and billing phases.',
      bullets: [
        'Real-time automated eligibility checks pre-visit',
        'Deductible, co-pay, and co-insurance calculation',
        'Coverage active status check and primary/secondary alignment',
        'Coordination of Benefits (COB) discrepancy flagging'
      ],
      aiTouch: 'Clientele AI queries payers automatically and produces pre-rendered visual summaries of coverages, co-insurance, and out-of-pocket limits.',
      specialtyNote: 'We run eligibility checks twice: once at scheduling and again 24 hours prior to the patient walking into the clinic to prevent lapsed policy issues.'
    },
    {
      step: '03',
      title: 'Prior Authorization Management',
      desc: 'Prior authorization isn\u2019t a checkbox — it is a complex workflow requiring daily discipline. We handle the entire auth pathway from pre-submission to final payer clearance.',
      bullets: [
        'Automatic CPT code scanning matching against payer rules',
        'Authorization requirement checklists by procedure and plan',
        'Clinical notes compilation and package submission to payers',
        'Constant follow-up with payers to secure authorization numbers'
      ],
      aiTouch: 'AI scans doctor schedules, auto-prioritizes high-risk procedure authorizations, and alerts the team 72 hours before code expiration.',
      specialtyNote: 'Pain Management add-on codes and Anesthesia base unit requirements are integrated into the initial submission.'
    },
    {
      step: '04',
      title: 'Digital Patient Registration & Check-In',
      desc: 'Manual registration is the biggest source of demographic errors. We automate registration to clean inputs and make patient check-in simple, secure, and compliant.',
      bullets: [
        'Contactless mobile pre-registration via self-service patient portal',
        'Insurance card OCR capture with instant name and ID validation',
        'Digital consent form collection and storage in EMR',
        'No-touch clinic kiosk setups and QR-code check-in flows'
      ],
      aiTouch: 'OCR structures patient-facing uploaded metadata and alerts the front desk instantly if the scanned card doesn\u2019t match payer registry files.',
      specialtyNote: 'Collects Medicare Secondary Payer (MSP) questionnaires automatically for all qualifying candidates.'
    },
    {
      step: '05',
      title: 'Real-Time Cost Estimation & Financial Clearance',
      desc: 'Patient financial transparency isn\u2019t just good customer service — it is an essential collection strategy. We estimate and secure clearance before care is rendered.',
      bullets: [
        'Payer contract-based allowable price estimates',
        'Accurate out-of-pocket cost calculations sent directly to patience',
        'Flexible custom payment plan setups based on estimated balance',
        'Pre-service payment collection or credit-on-file onboarding'
      ],
      aiTouch: 'Generates compliant Good Faith Estimates (GFE) based on current No Surprises Act frameworks inside the workflow.',
      specialtyNote: 'For physical therapy panels, visit limitation thresholds are cross-referenced to alert patients if they are nearing cap limits.'
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-hidden text-left">
      {/* Hero Header */}
      <section className="relative bg-hero text-white py-20 lg:py-28">
        <div className="absolute inset-0 mesh-glow opacity-90 animate-pulse" style={{ animationDuration: '10s' }} aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.05]" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
              <Zap className="size-3.5" /> Stage 1 — Front-End Prevention
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
              70% of Claim Denials <br />
              Start Here. <br />
              <span className="text-teal font-medium">So Does Their Prevention.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Front-end failures — eligibility errors, missing authorizations, incomplete registrations — are the most expensive and most preventable source of revenue loss in specialty practice. Our front-end services eliminate these failures before a single claim is ever created.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#assessment" 
                onClick={handleAssessmentClick}
                className="rounded-full bg-teal text-navy px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-navy transition-all hover:translate-x-0.5 active:scale-98 cursor-pointer"
              >
                Request a Front-End RCM Assessment
              </a>
              <a 
                href="#services-list"
                className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Front-End Services ↓
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-navy-deep/40 rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-card">
            <div className="text-5xl font-display font-bold text-teal">98%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-2">First-Pass Resolution Rate</div>
            <div className="text-sm text-white/60 mt-3 leading-relaxed">
              Achieved through our meticulous front-end verification. Ensuring patient insurance is valid and authorized before treatment begins.
            </div>
            <div className="h-px bg-white/10 my-6"></div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Real-Time Eligibility
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Proactive Auth Mapping
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Zero Patient Friction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Pipeline Map */}
      <section className="bg-neutral-50 py-12 border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center font-mono text-[11px] uppercase tracking-widest text-[#5bc0be] mb-6">
            RCM Pipeline Flow
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Scheduling & Access', active: true },
              { label: 'Eligibility Verification', active: true },
              { label: 'Prior Authorization', active: true },
              { label: 'Digital Check-In', active: true },
              { label: 'Financial Clearance', active: true }
            ].map((node, i) => (
              <div key={i} className="bg-white px-4 py-3 rounded-xl border border-neutral-100 shadow-sm flex items-center gap-3">
                <div className="size-6 font-mono font-bold text-xs bg-navy text-white flex items-center justify-center rounded-md">
                  {i+1}
                </div>
                <span className="text-xs font-semibold text-navy leading-tight">{node.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Loss Section */}
      <section className="py-20 bg-background border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">What's At Stake</div>
            <h2 className="font-display text-3xl lg:text-4xl text-navy leading-tight font-semibold">
              The Revenue Your Front End Is Already Losing.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="font-display text-4xl font-bold text-navy mb-3">60–70%</div>
                <h4 className="font-semibold text-navy mb-2">Of All Denials Start at the Front End</h4>
                <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                  The vast majority of payer rejections are due to simple, preventable errors in eligibility, auth rules, or demographic tracking.
                </p>
              </div>
            </div>

            <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="font-display text-4xl font-bold text-navy mb-3">$25–$118</div>
                <h4 className="font-semibold text-navy mb-2">Average Cost to Rework a Denied Claim</h4>
                <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                  Every time a billing clerk sits down to correct dates of birth, modifier conflicts, or missing info, it drains practice profits.
                </p>
              </div>
            </div>

            <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="font-display text-4xl font-bold text-navy mb-3">11 Days</div>
                <h4 className="font-semibold text-navy mb-2">Average Added A/R Delay</h4>
                <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                  Chasing patient accounts to fix demographic mismatches adds unnecessary delays, stretching cash cycles.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-navy rounded-2xl p-8 lg:p-10 text-white grid md:grid-cols-3 gap-8">
            <div className="border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <span className="text-[10px] font-mono uppercase bg-white/10 text-teal px-2 py-1 rounded inline-block mb-3">Scenario A</span>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Eligibility Error</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                A patient presents for a pain management injection. Insurance was verified at scheduling — but coverage has lapsed since. The claim submits, denies, and the practice spends 3 staff-hours on manual rework.
              </p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <span className="text-[10px] font-mono uppercase bg-white/10 text-teal px-2 py-1 rounded inline-block mb-3">Scenario B</span>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Authorization Gap</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                An orthopedic surgeon performs a bilateral procedure. Authorization was obtained for one side. The add-on CPT for the second side was never covered, leading to a permanent write-off.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase bg-white/10 text-teal px-2 py-1 rounded inline-block mb-3">Scenario C</span>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Demographic Mismatch</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                A patient's date of birth is entered incorrectly at registration. The claim sails through coding but gets rejected instantly by the clearinghouse, adding weeks of manual correction tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Block — Reimagined as Clientele Pulse Bridge */}
      <section className="py-20 lg:py-24 bg-[#FAFBFD] text-navy border-b border-neutral-200" id="services-list">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-2.5 py-1 text-[10px] font-mono font-bold text-teal mb-3 uppercase tracking-wider">
                <Sparkles className="size-3 text-teal" /> Smarter Front Office
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-tight">
                Clientele Pulse Bridge
              </h2>
              <p className="mt-2 text-md lg:text-lg font-medium text-neutral-500">
                Smarter Front Office. Stronger Revenue Cycle.
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 mt-3 max-w-2xl leading-relaxed">
                Clientele Pulse Bridge connects the patient app, clinician portal, payers, and PM/EMR systems into a single multi-directional intelligence link. By automating intake validation upstream, we complete the patient journey in under 2 minutes and eliminate billing friction.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <div className="bg-[#FFF4E5] text-[#F56A00] border border-[#F56A00]/15 rounded-xl px-4 py-2 text-left">
                <span className="text-[10px] font-mono font-bold block uppercase tracking-wider text-[#F56A00]/80">Complete Patient Journey</span>
                <strong className="text-sm font-bold flex items-center gap-1 mt-0.5 font-sans">
                  ⏱ IN UNDER 2 MINUTES!
                </strong>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">All loops synchronized real-time</span>
            </div>
          </div>

          {/* Interactive Core Terminal & Connectivity Mockup (Laptop + Phone Simulation) */}
          <div className="bg-white rounded-3xl border border-neutral-200 p-6 md:p-10 shadow-sm grid lg:grid-cols-12 gap-8 items-center mb-16">
            
            {/* Left/Center: Laptop & Phone Visual Mockups Simulator */}
            <div className="lg:col-span-8 space-y-6">
              <div className="text-left mb-4">
                <span className="text-[11px] font-mono font-bold text-teal uppercase tracking-widest block">INTERACTIVE SIMULATOR</span>
                <span className="text-xs text-neutral-400">Click each step to simulate patient progress through our under-2-minute loop:</span>
              </div>

              {/* Steps timeline buttons */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { label: "1. Register", val: 0 },
                  { label: "2. Verify", val: 1 },
                  { label: "3. Schedule", val: 2 },
                  { label: "4. All Set!", val: 3 }
                ].map((s) => (
                  <button
                    key={s.val}
                    onClick={() => setActiveJourneyStep(s.val)}
                    className={`px-3 py-2.5 rounded-xl font-mono text-[10px] sm:text-xs font-bold transition-all text-center cursor-pointer ${
                      activeJourneyStep === s.val
                        ? "bg-navy text-white shadow-md border-navy"
                        : "bg-neutral-50 text-neutral-500 hover:bg-neutral-100 border border-neutral-200"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Mockup Display Grid (Laptop frame + Phone stacking) */}
              <div className="grid md:grid-cols-12 gap-4 items-stretch">
                
                {/* Simulated Laptop Frame */}
                <div className="md:col-span-7 bg-[#091625] rounded-2xl border-4 border-neutral-800 flex flex-col justify-between shadow-xl overflow-hidden min-h-[220px]">
                  {/* Laptop Header Bar */}
                  <div className="bg-[#1A2F48]/40 px-3 py-1.5 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-red-500/85" />
                      <span className="size-2 rounded-full bg-amber-500/85" />
                      <span className="size-2 rounded-full bg-emerald-500/85" />
                    </div>
                    <span className="text-[9px] font-mono text-white/40">clientele-pulse-bridge.sh</span>
                    <span className="size-3" />
                  </div>
                  {/* Laptop Screen Content */}
                  <div className="p-4 flex-grow flex flex-col justify-center">
                    {activeJourneyStep === 0 && (
                      <div className="space-y-2 font-mono text-[10px] text-neutral-450 leading-relaxed">
                        <div className="text-teal font-bold border-b border-white/10 pb-1 flex items-center justify-between">
                          <span>💻 REGISTER NODE ACTIVE</span>
                          <span className="text-[8px] animate-pulse">● SYNCING</span>
                        </div>
                        <p className="text-white"><span className="text-teal">&gt;</span> capture_demographics_ai --model=fast-ocr</p>
                        <p className="text-emerald-400 font-semibold">[ID Capture] Scanning Government Photo ID...</p>
                        <p className="text-neutral-300">Name Resolved: Anita Lopez</p>
                        <p className="text-neutral-300">DOB Resolved: 10/14/1982 (100% matched to EMR database)</p>
                        <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded inline-block">MAPPED UNIFIED PROFILE OK</span>
                      </div>
                    )}
                    {activeJourneyStep === 1 && (
                      <div className="space-y-2 font-mono text-[10px] text-neutral-450 leading-relaxed">
                        <div className="text-[#5bc0be] font-bold border-b border-white/10 pb-1 flex items-center justify-between">
                          <span>💻 ELIGIBILITY LOOKUP</span>
                          <span className="text-emerald-400 font-semibold">[SUCCESS IN 1.4s]</span>
                        </div>
                        <p className="text-white"><span className="text-[#5bc0be]">&gt;</span> query_payer_directory --member="H12345678" --payer="BCBS"</p>
                        <p className="text-neutral-300">Coverage Status: ACTIVE PREMIUM</p>
                        <p className="text-teal">✔ Deductible: $5,000 | Amount Met: $3,500</p>
                        <p className="text-orange-400">✔ Patient Copay: $20.00 | Co-Insurance: 20%</p>
                        <p className="text-white font-bold">&gt;&gt; ESTIMATING OUT-OF-POCKET RESPONSIBILITY...</p>
                      </div>
                    )}
                    {activeJourneyStep === 2 && (
                      <div className="space-y-2 font-mono text-[10px] text-neutral-450 leading-relaxed">
                        <div className="text-white font-bold border-b border-white/10 pb-1 flex items-center justify-between">
                          <span>💻 ATTACH DIRECT APPOINTMENT</span>
                          <span className="text-neutral-400">[CONNECTED]</span>
                        </div>
                        <p className="text-white"><span className="text-teal">&gt;</span> assign_slot_scheduler --provider="Dr. Park" --slot="Thursday_1030"</p>
                        <p className="text-neutral-300">Clinician Schedule: Room 4 Reserved</p>
                        <p className="text-emerald-450">Conflict Check: PASSED with zero schedule overlap</p>
                        <p className="text-neutral-300 font-bold bg-[#FAFBFD]/5 p-1 rounded border border-white/5 text-center text-teal">
                          CONFIRMATIONS DISPATCHED BI-LATERALLY
                        </p>
                      </div>
                    )}
                    {activeJourneyStep === 3 && (
                      <div className="space-y-2 font-mono text-[10px] text-neutral-450 leading-relaxed">
                        <div className="text-emerald-400 font-bold border-b border-white/10 pb-1 flex items-center justify-between">
                          <span>💻 SINGLE PORTAL BRIDGE CLOSED</span>
                          <span className="bg-emerald-500 text-navy font-bold px-1 text-[8px] rounded">CLEARED 100%</span>
                        </div>
                        <p className="text-white font-bold">&gt;&gt; INTAKE SUMMARY MATRIX:</p>
                        <p className="text-emerald-400">✔ Payer eligibility checked, authenticated, copays logged</p>
                        <p className="text-emerald-400">✔ Digital client signoff &amp; HIPAA consent forms linked</p>
                        <p className="text-emerald-400">✔ Demographics synchronized to EMR/EHR system</p>
                        <div className="text-center font-display font-black text-xs text-teal tracking-widest pt-1 border-t border-white/15">
                          PATIENT PREPARED FOR THE exam room
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Keyboard Base Mockup element */}
                  <div className="bg-[#1A2F48] h-3.5 border-t border-neutral-700 flex items-center justify-center">
                    <span className="w-12 h-1 bg-neutral-900 rounded-full" />
                  </div>
                </div>

                {/* Simulated Phone Frame */}
                <div className="md:col-span-5 bg-navy border-4 border-neutral-800 rounded-3xl p-3 flex flex-col justify-between shadow-xl min-h-[220px] text-left relative overflow-hidden">
                  {/* Phone Speaker/Camera notch */}
                  <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-start">
                    <span className="w-12 h-2.5 bg-neutral-800 rounded-b-xl" />
                  </div>
                  
                  {/* Phone Screen Header */}
                  <div className="flex justify-between items-center text-[8px] dark:text-neutral-300 font-bold pt-2.5 px-1 pb-1 border-b border-white/5 font-mono">
                    <span>9:41 📡</span>
                    <span className="text-teal font-sans">CLIENTELE PLUS COMPANION</span>
                    <span>🔋 100%</span>
                  </div>

                  {/* Phone Screen body */}
                  <div className="bg-white rounded-2xl p-3 flex-grow flex flex-col justify-center text-navy shadow-inner text-xs my-2">
                    {activeJourneyStep === 0 && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <UserCheck className="size-4 text-blue-500 shrink-0" />
                          <span className="text-xs font-bold text-neutral-800">1. Instant ID Check</span>
                        </div>
                        <p className="text-[10px] text-neutral-500 leading-normal">
                          Scan active driver's license. Auto-verifies name, address, and DOB.
                        </p>
                        <div className="bg-neutral-50 border border-neutral-100 p-1 rounded flex items-center justify-between mt-1 text-[9px]">
                          <span className="text-neutral-400">Scan Status:</span>
                          <span className="text-emerald-600 font-bold">✔ Success</span>
                        </div>
                      </div>
                    )}
                    {activeJourneyStep === 1 && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle className="size-4 text-emerald-500 shrink-0" />
                          <span className="text-xs font-bold text-neutral-800">2. Active Insurance</span>
                        </div>
                        <p className="text-[10px] text-neutral-500 leading-normal">
                          Insurance details instantly extracted from connected payor network.
                        </p>
                        <div className="bg-neutral-50 border border-neutral-100 p-1 rounded flex justify-between items-center text-[9px]">
                          <span className="text-neutral-400">Today's Copay:</span>
                          <strong className="text-teal">$20.00</strong>
                        </div>
                      </div>
                    )}
                    {activeJourneyStep === 2 && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="size-4 text-purple-500 shrink-0" />
                          <span className="text-xs font-bold text-neutral-800">3. Fast Booking</span>
                        </div>
                        <p className="text-[10px] text-neutral-500 leading-normal">
                          Choose real-time vacancy spots with Dr. Park instantly from standard client slots.
                        </p>
                        <div className="bg-purple-50 border border-purple-100 py-1 px-2 rounded text-center text-[9px] text-purple-700 font-bold">
                          Appointment Reserved ✓
                        </div>
                      </div>
                    )}
                    {activeJourneyStep === 3 && (
                      <div className="text-center py-2 space-y-1.5">
                        <div className="size-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-605">
                          <Check className="size-4 stroke-[3]" />
                        </div>
                        <div>
                          <h5 className="font-bold text-[11px] text-navy">You're All Set!</h5>
                          <p className="text-[9px] text-neutral-500 leading-snug">
                            Your appointment is confirmed. Check-in fully complete digitially.
                          </p>
                        </div>
                        <button className="bg-navy hover:bg-navy/85 text-white font-bold text-[8.5px] px-3.5 py-1 rounded-full transition-all tracking-wider inline-block">
                          VIEW DETAILS
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Phone Home Indicator bar */}
                  <div className="w-full h-1 flex justify-center pb-0.5">
                    <span className="w-20 h-1 bg-white/40 rounded-full" />
                  </div>
                </div>

              </div>

              {/* Progress Simulator Hint info */}
              <div className="bg-[#FAFBFD] p-3 rounded-2xl border border-neutral-150 flex items-center gap-3 text-xs text-neutral-500">
                <Timer className="size-5 text-teal shrink-0" />
                <span>
                  <strong>Simulation Loop:</strong> Real-time coordination of patients, front desk teams, medical providers, and payor networks results in cleaner scheduling data, faster eligibility checkups, and fewer claim denials.
                </span>
              </div>
            </div>

            {/* Right: One Bridge. Total Connectivity. Panel */}
            <div className="lg:col-span-4 bg-[#FAFBFD] rounded-2.5xl p-6 border border-neutral-220 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-teal uppercase tracking-widest block mb-1">
                  ONE BRIDGE
                </span>
                <h4 className="font-display font-extrabold text-navy text-xl leading-snug">
                  Total Connectivity &amp; Seamless Integrations
                </h4>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  Bridge the expensive gap between patients, healthcare providers, insurance companies, and electronic records systems.
                </p>
              </div>

              {/* Timeline nodes listing connectivity links */}
              <div className="relative pl-6 space-y-6">
                {/* Visual timeline vertical border line */}
                <span className="absolute left-[9.5px] top-1 bottom-1 w-0.5 bg-dashed border-l border-neutral-300" />

                {[
                  { title: "Patient App Companion", desc: "Allows instant patient-driven registration, document scan uploads, and coverage overview from home.", color: "bg-blue-500" },
                  { title: "Clinician Visit Assistant App", desc: "Provides clinicians a 30-second pre-visit briefing and electronic vitals record checks.", color: "bg-purple-500" },
                  { title: "Live Payor Networks Link", desc: "Auto-queries active deductibles, remaining limits, coinsurance details, and copayment structures.", color: "bg-emerald-500" },
                  { title: "Bilateral EMR / EHR / PM Sync", desc: "Ensures demographic fields, scheduled slots, active vitals, and billing codes load directly.", color: "bg-navy" }
                ].map((node, nidx) => (
                  <div key={nidx} className="relative text-left">
                    {/* Circle Node */}
                    <span className={`absolute -left-[22.5px] top-1 size-2.5 rounded-full border-2 border-white ring-2 ring-neutral-200 ${node.color}`} />
                    <strong className="text-xs text-navy block font-bold leading-none">{node.title}</strong>
                    <span className="text-[10.5px] text-neutral-500 mt-1 block leading-relaxed">{node.desc}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-4 text-center">
                <span className="text-[11px] font-mono text-neutral-400">
                  All systems. One seamless experience.
                </span>
              </div>
            </div>

          </div>

          {/* Section: Powerful Features (7 Columns) */}
          <div className="space-y-8 my-20">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#F56A00]">
                POWERFUL FEATURES
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-navy">
                Streamlined Workflows Inside Simple Modules
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans mt-2">
                A structured breakdown of front-office automation. Designed to optimize patient throughput, eliminate billing bottlenecks and reduce the manual rework burden.
              </p>
            </div>

            {/* Grid of 7 modular cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
              
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-md transition-all group">
                <div>
                  <div className="size-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                    <UserCheck className="size-5.5 text-blue-500" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block mb-1">MODULE 01</span>
                  <h4 className="font-display font-bold text-sm text-navy uppercase tracking-tight mb-2">
                    1. Automated Patient Registration
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Capture and verify patient demographics in real time. Seamlessly sync with EMR/EHR/PM to bypass outdated and manual paper processes.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-blue-500 font-bold">
                  <span>REAL-TIME DATA MATCHING</span>
                  <Check className="size-3.5" />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-md transition-all group">
                <div>
                  <div className="size-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                    <CheckCircle className="size-5.5 text-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block mb-1">MODULE 02</span>
                  <h4 className="font-display font-bold text-sm text-navy uppercase tracking-tight mb-2">
                    2. Real-Time Insurance Verification
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Retrieve active eligibility scopes, coinsurance ratios, deductibles, and direct patient copays directly from connected payer networks.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-emerald-600 font-bold">
                  <span>UNDER 2-SECONDS QUERY</span>
                  <Check className="size-3.5" />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-md transition-all group">
                <div>
                  <div className="size-11 rounded-xl bg-indigo-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                    <Calendar className="size-5.5 text-indigo-500" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block mb-1">MODULE 03</span>
                  <h4 className="font-display font-bold text-sm text-navy uppercase tracking-tight mb-2">
                    3. Appointment Booking
                  </h4>
                  <p className="text-xs text-neutral-550 leading-relaxed">
                    Schedule, reschedule, or cancel patient appointments dynamically. Sync physician schedules and slot vacancies with walk-in support overlays.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-indigo-600 font-bold">
                  <span>BI-DIRECTIONAL SCHEDULES</span>
                  <Check className="size-3.5" />
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-md transition-all group">
                <div>
                  <div className="size-11 rounded-xl bg-[#FFF4E5] flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                    <ClipboardList className="size-5.5 text-[#F56A00]" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block mb-1">MODULE 04</span>
                  <h4 className="font-display font-bold text-sm text-navy uppercase tracking-tight mb-2">
                    4. Digital Check-In
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Allow clinic patients to complete registration check-ins securely from home via mobile web browser or instantly upon physical arrival.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-[#F56A00] font-bold">
                  <span>100% PAPERLESS CLINIC</span>
                  <Check className="size-3.5" />
                </div>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-md transition-all group">
                <div>
                  <div className="size-11 rounded-xl bg-teal/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                    <FileText className="size-5.5 text-teal" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block mb-1">MODULE 05</span>
                  <h4 className="font-display font-bold text-sm text-navy uppercase tracking-tight mb-2">
                    5. Digital Consent Management
                  </h4>
                  <p className="text-xs text-neutral-550 leading-relaxed">
                    Collect and archive encrypted signatures, digital releases, and HIPAA authorization forms with secure storage and immutable audit trails.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-teal font-bold">
                  <span>HIPAA &amp; EMR COMPLIANT</span>
                  <Check className="size-3.5" />
                </div>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-md transition-all group">
                <div>
                  <div className="size-11 rounded-xl bg-pink-50 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                    <Heart className="size-5.5 text-pink-500" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block mb-1">MODULE 06</span>
                  <h4 className="font-display font-bold text-sm text-navy uppercase tracking-tight mb-2">
                    6. Digital Vital Tracking
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Track vital parameters digitally to deliver structural visit-level information directly into clinician charts prior to entering treatment.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-pink-600 font-bold">
                  <span>CLINICIAN POINT-OF-CARE</span>
                  <Check className="size-3.5" />
                </div>
              </div>

              {/* Feature 7 */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 flex flex-col justify-between hover:shadow-md transition-all group lg:col-span-1 xl:col-span-2">
                <div>
                  <div className="size-11 rounded-xl bg-neutral-900/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-all">
                    <BarChart3 className="size-5.5 text-navy" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 font-bold block mb-1">MODULE 07</span>
                  <h4 className="font-display font-bold text-sm text-navy uppercase tracking-tight mb-2">
                    7. Visits &amp; Front Desk Dashboards
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    View real-time, interactive flow indicators, arrivals, appointment logs, and pending administrative tasks to optimize front desk team output and resource utilization.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-navy font-bold">
                  <span>COMPLETE CLINICAL FLOW</span>
                  <Check className="size-3.5" />
                </div>
              </div>

            </div>
          </div>

          {/* Section: Horizontal Benefits Strip (The Dark Panel) */}
          <div className="bg-[#0C1E2E] rounded-3xl p-8 border border-white/10 text-white text-left mt-16 shadow-card">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#5bc0be] mb-6 text-center">
              ONE BRIDGE. TOTAL CONNECTIVITY.
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-xs text-white/85">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-teal text-sm">
                  <Users className="size-4 shrink-0 text-teal" />
                  <span>Enhance Patient Experience</span>
                </div>
                <p className="text-white/60 leading-relaxed font-sans">
                  Shorter waiting times and transparent scheduling build happier, more loyal patients.
                </p>
              </div>
              <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
                <div className="flex items-center gap-2 font-bold text-teal text-sm">
                  <BarChart3 className="size-4 shrink-0 text-teal" />
                  <span>Reduce Workload</span>
                </div>
                <p className="text-white/60 leading-relaxed font-sans">
                  Automate repetitive verification duties and eradicate human-error-driven demographic write-offs.
                </p>
              </div>
              <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
                <div className="flex items-center gap-2 font-bold text-teal text-sm">
                  <DollarSign className="size-4 shrink-0 text-teal" />
                  <span>Improve Cash Flow</span>
                </div>
                <p className="text-white/60 leading-relaxed font-sans">
                  Collect accurate patient responsibilities upfront to permanently prevent denial workflows.
                </p>
              </div>
              <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
                <div className="flex items-center gap-2 font-bold text-teal text-sm">
                  <ShieldCheck className="size-4 shrink-0 text-teal" />
                  <span>HIPAA &amp; Secure</span>
                </div>
                <p className="text-white/60 leading-relaxed font-sans">
                  Enterprise-grade cloud encryption and secure user management you can fully trust.
                </p>
              </div>
              <div className="space-y-2 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-4">
                <div className="flex items-center gap-2 font-bold text-teal text-sm">
                  <Timer className="size-4 shrink-0 text-teal" />
                  <span>Smoother Outcomes</span>
                </div>
                <p className="text-white/60 leading-relaxed font-sans">
                  Achieve faster check-in loops and stress-free check-outs across all clinical workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Section: High Converting CTA Callout (Interactive Action) */}
          <div className="mt-16 bg-navy border border-teal/20 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden text-center shadow-lg">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
              <Sparkles className="size-60 text-white" />
            </div>
            <div className="relative max-w-xl mx-auto space-y-6">
              <span className="inline-block bg-teal/15 text-teal border border-teal/30 text-[10px] font-mono uppercase tracking-[0.2em] px-4 py-1.5 rounded-full font-bold">
                TRANSFORM YOUR RCM PROCESS
              </span>
              <h3 className="font-display text-2.5xl md:text-3xl lg:text-4xl font-black leading-tight text-white tracking-tight">
                Transform Your RCM Process <br />
                In Under 2 Minutes!
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed font-sans">
                Faster Intake. Fewer Denials. Better Collections. Provide a pristine patient experience while securing the financial integrity of your clinic.
              </p>

              {/* Action Response Display (Alternative to browser alerts per guidelines) */}
              {demoRequested ? (
                <div className="bg-teal/10 border border-teal/30 rounded-2xl p-4 text-left max-w-md mx-auto space-y-2">
                  <div className="flex items-center gap-2 text-teal font-bold text-xs">
                    <CheckCircle className="size-4 text-teal" />
                    <span>Demo Scheduled Successfully!</span>
                  </div>
                  <p className="text-[11px] text-white/80 leading-relaxed font-sans">
                    Thank you! An integration specialist from Clientele RCM has been assigned to your registration. We'll contact you at <strong className="text-teal">your registered email</strong> within 24 hours to schedule your 15-20 minute live demo today!
                  </p>
                </div>
              ) : (
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => setDemoRequested(true)}
                    className="bg-teal hover:bg-white text-navy font-extrabold text-sm tracking-wide px-7 py-3.5 rounded-full shadow-lg transition-all hover:scale-103 cursor-pointer"
                  >
                    SEE IT IN ACTION!
                  </button>
                  <a 
                    href="#assessment" 
                    onClick={handleAssessmentClick}
                    className="bg-white/5 hover:bg-white/10 border border-white/20 text-white font-extrabold text-xs tracking-wider px-7 py-3.5 rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>SCHEDULE YOUR 15-20 MINUTE LIVE DEMO TODAY!</span>
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Model Workflow Comparison */}
      <section className="py-20 bg-background border-b border-light text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Human-Guided Automation</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">Where Clientele AI Enters the Front-End.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal">
                  <Bot className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Clientele AI Automates</h4>
                  <p className="text-xs text-neutral-400">Processing volume at high computer speeds</p>
                </div>
              </div>
              <ul className="space-y-4 text-xs md:text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" /> 
                  <span><strong>Real-time eligibility queries:</strong> Direct API lookup checks insurance status automatically.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" /> 
                  <span><strong>Pre-visit summary boards:</strong> Instantly prepares co-pay, co-insurance estimates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" /> 
                  <span><strong>OCR card parsing:</strong> Converts card pictures to standard structured patient data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-4 text-teal shrink-0 mt-0.5" /> 
                  <span><strong>Discrepancy detection:</strong> Highlights mismatches in DOB, names on the fly.</span>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-navy/10 rounded-xl flex items-center justify-center text-navy">
                  <Users className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Certified Human Experts Guard</h4>
                  <p className="text-xs text-neutral-400">Validating complex exceptions manually</p>
                </div>
              </div>
              <ul className="space-y-4 text-xs md:text-sm text-neutral-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-4 text-[#5bc0be] shrink-0 mt-0.5" /> 
                  <span><strong>Auth submissions & follow-up:</strong> Interacts with stubborn peer reviews manually.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-4 text-[#5bc0be] shrink-0 mt-0.5" /> 
                  <span><strong>Complex discrepancies:</strong> Negotiates coverage disputes when OCR detects eligibility bugs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-4 text-[#5bc0be] shrink-0 mt-0.5" /> 
                  <span><strong>Patient financial counseling:</strong> Human-level conversations explaining payment options.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="size-4 text-[#5bc0be] shrink-0 mt-0.5" /> 
                  <span><strong>Exceptional cases:</strong> Manual routing overrides for workers compensation or car accidents.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Configuration Blocks */}
      <section className="py-20 bg-neutral-50 border-b border-light text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Specialty Precision</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight">Front-End Workflows Configured For Your Specialty.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <h4 className="font-display font-semibold text-lg text-navy mb-3">Orthopedics</h4>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                <strong>The Challenge:</strong> Pain procedures expand during surgery. Bilateral scope or multi-level procedures obtain denials because auth was written only for single levels.
              </p>
              <div className="mt-4 text-xs font-semibold text-[#5bc0be] flex items-center gap-1.5">
                <CheckCircle className="size-3.5" /> We auth for maximum probable scope to prevent surgical-level denials.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <h4 className="font-display font-semibold text-lg text-navy mb-3">Pain Management</h4>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                <strong>The Challenge:</strong> Add-on CPTs performed during the clinical visit are left off auth checklists. Payer excludes secondary codes.
              </p>
              <div className="mt-4 text-xs font-semibold text-[#5bc0be] flex items-center gap-1.5">
                <CheckCircle className="size-3.5" /> Risk flagging scanners predict multi-CPT needs pre-visit.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <h4 className="font-display font-semibold text-lg text-navy mb-3">Anesthesia</h4>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                <strong>The Challenge:</strong> Anesthesia policies are different from standard medical policies. Deductible structures are separate.
              </p>
              <div className="mt-4 text-xs font-semibold text-[#5bc0be] flex items-center gap-1.5">
                <CheckCircle className="size-3.5" /> Separate checks map specific CRNA billing limits.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <h4 className="font-display font-semibold text-lg text-navy mb-3">Physical & Occupational Therapy</h4>
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                <strong>The Challenge:</strong> Visit boundaries aren't tracked. Practice discovers patient exceeded therapy limits weeks after care.
              </p>
              <div className="mt-4 text-xs font-semibold text-[#5bc0be] flex items-center gap-1.5">
                <CheckCircle className="size-3.5" /> Automated limit trackers send staff alerts at visit 10.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Component */}
      <section className="py-20 bg-background text-navy border-b border-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-3xl font-serif text-neutral-300 mb-6">“</div>
          <p className="font-display text-lg md:text-xl text-navy italic leading-relaxed">
            Before Clientele RCM, we were catching eligibility issues after the claim denied — sometimes 45 days later. Now we catch them before the patient walks in. The difference in our A/R aging was immediate.
          </p>
          <div className="mt-6">
            <div className="font-bold text-sm text-navy">Billing Director</div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Multi-Location Pain Management Practice · Michigan</div>
          </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="bg-navy text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-teal font-mono text-xs uppercase tracking-[0.2em] mb-4">Take Action Upstream</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Ready to Secure Your Front End?</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
            Let us audit your current front-end procedures — eligibility processes, prior authorizations, and patient registration metrics — and pinpoint where cash leaks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#assessment" 
              onClick={handleAssessmentClick}
              className="rounded-full bg-teal text-navy px-8 py-4 font-semibold hover:bg-white hover:text-navy hover:scale-102 transition-all active:scale-98 cursor-pointer"
            >
              Request a Free Front-End Assessment
            </a>
            <button 
              onClick={() => navigate('/services')}
              className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold transition-all"
            >
              See All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
