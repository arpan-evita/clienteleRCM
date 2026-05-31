import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck, 
  Users, 
  TrendingUp, 
  FileText, 
  Database, 
  Activity, 
  Zap, 
  Briefcase, 
  FolderSync, 
  Sparkles, 
  Workflow, 
  RefreshCw, 
  AlertTriangle,
  Layers,
  HeartPulse,
  Brain,
  ShieldAlert,
  Clock,
  Settings,
  ArrowRightLeft,
  Lock,
  Star,
  FileCheck,
  TrendingDown
} from 'lucide-react';

interface AnesthesiaProps {
  navigate: (path: string) => void;
}

export default function Anesthesia({ navigate }: AnesthesiaProps) {
  // Navigation helper that scrolls to top
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const el = document.getElementById(path.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Accordion State (first open by default)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Interactive Time-Unit Calculator State
  const [casesPerMonth, setCasesPerMonth] = useState<number>(150);
  const [caseDuration, setCaseDuration] = useState<number>(90);
  const [systematicError, setSystematicError] = useState<boolean>(true);

  // Math calculations for calculator
  // Base units typically are: 15 mins = 1 billing unit.
  // 90 min duration = 6 units. Plus suppose 4 base units for a typical case = 10 units total.
  // We'll calculate units as: (duration / 15) base duration units.
  // A systematic 1-unit error means 1 unit lost per case.
  const timeUnitsPerCase = Math.round(caseDuration / 15);
  // Total billing units per month: assume average 4 base units + typical duration units
  const baseUnitsAvg = 4;
  const totalUnitsPerCase = baseUnitsAvg + timeUnitsPerCase;
  const totalMonthlyUnits = casesPerMonth * totalUnitsPerCase;
  
  const baseRate = 22; // approx Medicare rate
  const estMonthlyRevenueClean = totalMonthlyUnits * baseRate;
  
  const unitsLostPerMonth = systematicError ? casesPerMonth : 0;
  const estRevenueLost = unitsLostPerMonth * baseRate;

  const accordionData = [
    {
      title: "CRNA Modifier Accuracy",
      summary: "CRNA supervision models have four distinct billing modifiers. Mismatching any one to the documented model triggers immediate denial.",
      problem: "Anesthesia modifier selection isn't about preference — it's about documentation. AA (physician personally performs), QX (CRNA with physician supervision), QY (physician medically directs one CRNA), and QZ (CRNA without supervision) each describe a legally distinct care model. Billing QX when QZ is documented, or AA when the physician was directing multiple CRNAs, creates a modifier-to-documentation mismatch that denies on the first pass and flags the practice for audit on the second.",
      solution: "Every claim is cross-referenced against the anesthesia record's documented supervision model before submission. Our coders are trained specifically on the QX/QY/QZ/AA matrix and the payer-specific rules that further restrict which modifiers are accepted.",
      cpts: ["AA", "QX", "QY", "QZ"]
    },
    {
      title: "Time-Unit Calculation",
      summary: "15 minutes = 1 billing unit. Rounding errors, missing start/end times, and documentation gaps create systematic underpayment.",
      problem: "Anesthesia time billing runs on 15-minute base units. The math is simple — but only when documentation is clean. Rounding down instead of up, recording time in the wrong field, or failing to document actual start and end times in the anesthesia record all produce the same result: fewer units billed than earned. When this error is systemic across a practice's documentation workflow, the revenue loss is invisible and cumulative.",
      solution: "We audit anesthesia records at the documentation level — not just the claim level. Our workflow flags cases where start/end time fields are blank, where calculated units fall below what the case duration supports, and where time documentation is inconsistent with the surgical record.",
      cpts: ["15 Min = 1 Unit", "Audit Protocols"]
    },
    {
      title: "ASA Crosswalk Code Accuracy",
      summary: "Anesthesia is billed on ASA codes, not CPT codes. Every surgical CPT must crosswalk to the correct ASA code — and not every crosswalk is one-to-one.",
      problem: "Surgeons bill CPT codes. Anesthesiologists bill ASA codes. The crosswalk between them is not always direct: some CPT procedures map to multiple ASA codes depending on patient position, access site, or concurrent procedures. Selecting the wrong ASA code — even when the surgical CPT is correct — changes the base unit value and can trigger a denial if the payer's expected code doesn't match.",
      solution: "Our anesthesia coders maintain working knowledge of the ASA crosswalk and update their reference set as CMS publishes new crosswalk guidance. Every claim is validated for CPT-to-ASA accuracy before submission — not after a denial.",
      cpts: ["ASA Crosswalk", "CMS Guidance"]
    },
    {
      title: "Inclusive Code Detection",
      summary: "Certain procedures are globally included in the anesthesia service and cannot be billed separately — billing them triggers an automatic unbundling denial.",
      problem: "Anesthesia global services include many items that other specialties bill as separate line items: pre-anesthesia evaluation, insertion of routine monitoring lines, post-anesthesia care in some payer contracts. When a coder unfamiliar with anesthesia's global package attempts to separately bill any of these components, the clearinghouse or payer rejects it on NCCI grounds. The denial is automatic, predictable, and avoidable.",
      solution: "We apply NCCI edits specific to anesthesia services before submission. Our workflow flags any secondary code that falls within the anesthesia global package for the billed ASA code, and removes or restructures it before the claim leaves our system.",
      cpts: ["NCCI Edits", "Anesthesia Global Package"]
    },
    {
      title: "Qualifying Circumstance Add-Ons",
      summary: "Four add-on codes (99100, 99116, 99135, 99140) increase the base unit value when specific patient conditions are documented. They are often missed.",
      problem: "When anesthesia is provided under qualifying circumstances — extreme age (99100), utilization of controlled hypotension (99116), induced hypothermia (99135), or emergency conditions (99140) — an additional unit value is added to the case. These codes require specific documentation in the anesthesia record. Without that documentation, the add-on cannot be billed. Without a coder who knows to look for it, the documentation goes unreviewed and the additional revenue goes uncaptured.",
      solution: "Our anesthesia workflow includes a qualifying circumstance checklist on every case. Coders review the anesthesia record for documented patient conditions before finalizing the claim — ensuring that 99100, 99116, 99135, and 99140 are applied wherever they are supported and never missed.",
      cpts: ["99100", "99116", "99135", "99140"]
    },
    {
      title: "Concurrent Procedure and Cross-Billing Errors",
      summary: "When an anesthesiologist is directing multiple concurrent cases, specific modifier rules govern what can be billed — and by whom.",
      problem: "Concurrent case billing rules differ significantly by payer. Under Medicare, a physician medically directing two to four concurrent CRNA cases may bill with QK modifier at 50% of the allowed amount per case. Billing AA (personally performed) on cases where medical direction — not personal performance — is the documented care model overstates the physician's role and produces post-payment audit liability. The reverse error — billing QK when the physician was personally present — underpays.",
      solution: "For groups with both physicians and CRNAs, we implement a concurrent-case tracking layer that matches each claim to the correct care model based on the anesthesia record. AA, QK, QX, QY, and QZ are assigned at the record level — not assumed at the claim level.",
      cpts: ["QK Modifier", "Concurrency Rules"]
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans select-text text-left">
      
      {/* PIPELINE POSITION INDICATOR (Below Nav — Above Hero) */}
      <div className="bg-white border-b border-neutral-200 sticky top-[72px] z-45">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-none">
          <div className="flex flex-col md:flex-row py-3.5 gap-2 md:gap-4 items-start md:items-center justify-start text-xs font-semibold select-none">
            <span className="text-neutral-500 font-mono text-[11px] uppercase tracking-wider whitespace-nowrap">
              This specialty requires expertise across:
            </span>
            <div className="flex gap-2 items-center min-w-max">
              <a 
                href="/services/front-end" 
                onClick={(e) => handleLinkClick(e, '/services/front-end')}
                className="bg-[#185FA5] text-white px-3 py-1.5 rounded-full font-bold shadow-xs border border-blue-600/20 flex items-center gap-1 hover:brightness-110 transition-all"
              >
                Front-End RCM <span className="font-mono text-[10px]">✓</span>
              </a>
              <span className="text-neutral-300">→</span>
              
              <a 
                href="/services/mid-cycle" 
                onClick={(e) => handleLinkClick(e, '/services/mid-cycle')}
                className="bg-[#185FA5] text-white px-3 py-1.5 rounded-full font-bold shadow-xs border border-blue-600/20 flex items-center gap-1 hover:brightness-110 transition-all"
              >
                Mid-Cycle Intelligence <span className="font-mono text-[10px]">✓</span>
              </a>
              <span className="text-neutral-300">→</span>
              
              <a 
                href="/services/back-end" 
                onClick={(e) => handleLinkClick(e, '/services/back-end')}
                className="bg-[#185FA5] text-white px-3 py-1.5 rounded-full font-bold shadow-xs border border-blue-600/20 flex items-center gap-1 hover:brightness-110 transition-all"
              >
                Back-End &amp; A/R Recovery <span className="font-mono text-[10px]">✓</span>
              </a>
              <span className="text-neutral-300">→</span>
              
              <a 
                href="/services/rpm" 
                onClick={(e) => handleLinkClick(e, '/services/rpm')}
                className="border border-neutral-200 text-neutral-400 px-3 py-1.5 rounded-full font-bold hover:bg-neutral-50 hover:text-neutral-600 transition-colors"
              >
                RPM
              </a>
              <span className="text-neutral-300">→</span>
              
              <a 
                href="/services/rtm" 
                onClick={(e) => handleLinkClick(e, '/services/rtm')}
                className="border border-neutral-200 text-neutral-400 px-3 py-1.5 rounded-full font-bold hover:bg-neutral-50 hover:text-neutral-600 transition-colors"
              >
                RTM
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb strip */}
      <div className="bg-neutral-50 border-b border-neutral-100 py-3">
        <div className="max-w-7xl mx-auto px-6 text-[11px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2 select-none">
          <a href="/specialties" onClick={(e) => handleLinkClick(e, '/specialties')} className="hover:text-navy transition-colors">Specialties</a>
          <ChevronRight className="size-3 text-neutral-300" />
          <span className="text-[#185FA5] font-bold">Anesthesia Billing</span>
        </div>
      </div>

      {/* SECTION 1: HERO (Dark Navy background) */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold mb-3 block">
                SPECIALTY BILLING — ANESTHESIA
              </span>
              <div className="h-[1px] w-12 bg-blue-500/50 mb-6" />
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.10] tracking-tight text-white mb-6">
                Anesthesia Billing Has Almost No Margin for Error.
              </h1>
              
              <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-8 font-sans">
                Time units, CRNA modifiers, and ASA crosswalk codes must be precise on every claim. A two-minute documentation error compounds into systematic underpayment. We&apos;ve built our anesthesia billing workflow around the zero-tolerance standard this specialty demands.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <a
                  href="#assessment"
                  onClick={(e) => handleLinkClick(e, '#assessment')}
                  className="rounded-full bg-teal text-navy px-7 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2 select-none font-sans"
                >
                  Request a Free Anesthesia Billing Assessment →
                </a>
                <a
                  href="#accordion-section"
                  onClick={(e) => handleLinkClick(e, '#accordion-section')}
                  className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center select-none"
                >
                  See How We Handle CRNA Modifier Accuracy
                </a>
              </div>

              {/* Trust micro-copy */}
              <div className="text-white/40 text-[11px] font-mono flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                <span>🔒 HIPAA Certified</span>
                <span>•</span>
                <span>HBMA Member</span>
                <span>•</span>
                <span>SOC2 Compliance in Progress · expected Q3 2026</span>
                <span>•</span>
                <span>AAPC-Certified Anesthesia Coders</span>
              </div>
            </div>
            
            {/* Right Graphics/Statistics Side (Abstract Precision Grid, no clinical pictures) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-[#185FA5]/15 rounded-3xl blur-2xl opacity-40 pointer-events-none" />
              
              <div className="relative border border-white/10 rounded-2xl bg-navy-deep/80 p-8 backdrop-blur-md overflow-hidden shadow-card">
                {/* Thin blue accent line of anesthesia mapping across the visual */}
                <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-gradient-to-b from-blue-500/0 via-[#185FA5]/50 to-blue-500/0" />
                
                <h3 className="font-display font-semibold text-white text-lg mb-6 flex items-center gap-2 relative">
                  <Activity className="size-5 text-[#185FA5]" /> 
                  Time &amp; Quality Metrics
                </h3>
                
                <div className="space-y-6 relative">
                  {/* Grid element 1 */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-[#185FA5]/15 border border-[#185FA5]/30 flex items-center justify-center text-[#185FA5] shrink-0 font-mono text-xs font-bold">T1</div>
                    <div>
                      <h4 className="text-xs font-mono tracking-wider text-white/50 uppercase">Base Metrics</h4>
                      <p className="text-sm text-white/90 font-medium mt-1">
                        15 minutes = 1 dynamic billing unit calculated automatically.
                      </p>
                    </div>
                  </div>

                  {/* Grid element 2 */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-[#185FA5]/15 border border-[#185FA5]/30 flex items-center justify-center text-[#185FA5] shrink-0 font-mono text-xs font-bold font-sans">99%</div>
                    <div>
                      <h4 className="text-xs font-mono tracking-wider text-white/50 uppercase">Precision Standard</h4>
                      <p className="text-sm text-white/90 font-medium mt-1">
                        99% Clean Claim Rate achieved systematically across anesthesia lines.
                      </p>
                    </div>
                  </div>

                  {/* Grid element 3 */}
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-[#185FA5]/15 border border-[#185FA5]/30 flex items-center justify-center text-[#185FA5] shrink-0 font-mono text-xs font-bold">5+</div>
                    <div>
                      <h4 className="text-xs font-mono tracking-wider text-white/50 uppercase">Domain Experts</h4>
                      <p className="text-sm text-white/90 font-medium mt-1">
                        5–12 years specialty experience for every dedicated coder.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Abstract Line Grid Background Decoration */}
                <div className="absolute bottom-4 right-4 flex gap-1 pointer-events-none opacity-10">
                  <span className="w-[1px] h-12 bg-white" />
                  <span className="w-[1px] h-12 bg-white" />
                  <span className="w-[1px] h-12 bg-white" />
                  <span className="w-[1px] h-12 bg-white" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR (Credibility Strip) */}
      <section className="bg-white border-b border-neutral-200 py-6 text-center shadow-xs">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-start lg:justify-between gap-8 min-w-max text-xs text-neutral-600 font-medium select-none font-sans">
            
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-[#185FA5]" />
              <span>HIPAA Certified</span>
            </div>
            <span className="text-neutral-300 hidden lg:inline">|</span>

            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#185FA5]"></span>
              <span>Proud Member of HBMA</span>
            </div>
            <span className="text-neutral-300 hidden lg:inline">|</span>

            <div className="flex items-center gap-2">
              <Lock className="size-4 text-[#185FA5]" />
              <span>SOC2 Compliance · Q3 2026</span>
            </div>
            <span className="text-neutral-300 hidden lg:inline">|</span>

            <div className="flex items-center gap-2">
              <FileCheck className="size-4 text-[#185FA5]" />
              <span>AAPC-Certified Anesthesia Coders</span>
            </div>
            <span className="text-neutral-300 hidden lg:inline">|</span>

            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-[#185FA5]" />
              <span>99% Clean Claim Rate</span>
            </div>
            <span className="text-neutral-300 hidden lg:inline">|</span>

            <div className="flex items-center gap-2">
              <Star className="size-4 text-[#185FA5]" />
              <span>5–12 Years Specialty Experience</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE COST OF ERRORS */}
      <section className="bg-[#E6F1FB]/40 py-20 lg:py-28 text-left border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#185FA5] mb-5 w-fit">
                ⚙️ Systematic Underpayment Analysis
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight mb-6">
                In Anesthesia Billing, Every Error Compounds
              </h2>
              <div className="prose prose-neutral max-w-none text-neutral-650 text-sm md:text-base space-y-5 leading-relaxed font-sans">
                <p>
                  Anesthesia is the only surgical specialty where billing is time-based. <strong>Every 15 minutes of anesthesia time equals one billing unit.</strong> A two-minute documentation error — rounding down instead of up, missing a start time, recording end time incorrectly — doesn&apos;t just lose one claim. It loses one unit on every case where that error is systemic.
                </p>
                <p>
                  For a practice performing 200 cases per month, a single consistent unit error represents thousands of dollars in monthly underpayment — invisible until an audit surfaces it.
                </p>
                <p>
                  Add CRNA modifier mismatches, ASA crosswalk inaccuracies, and concurrent procedure errors on top of that, and you have a billing environment where precision isn&apos;t a best practice. It&apos;s the only practice.
                </p>
              </div>
            </div>

            {/* Right column - Data table illustration */}
            <div className="lg:col-span-6">
              <div className="border border-blue-200 rounded-2xl bg-white shadow-card overflow-hidden">
                <div className="bg-[#185FA5] text-white px-6 py-4 flex items-center justify-between">
                  <h4 className="font-display font-bold text-sm tracking-wide">Error Compounding Impact Matrix</h4>
                  <span className="text-[10px] font-mono bg-blue-600/30 px-2 py-0.5 rounded text-blue-100 uppercase font-bold">ANALYSIS</span>
                </div>
                
                <div className="divide-y divide-neutral-100 font-sans">
                  {/* Row 1 */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-5">
                      <p className="text-xs font-mono font-bold text-neutral-400">ERROR TYPE</p>
                      <p className="text-sm font-bold text-navy mt-1">1 time-unit documentation error</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-xs font-mono font-bold text-neutral-400">PER-CLAIM IMPACT</p>
                      <p className="text-sm font-semibold text-neutral-700 mt-1">~$22–28 lost per case</p>
                    </div>
                    <div className="md:col-span-4 text-left md:text-right">
                      <p className="text-xs font-mono font-bold text-[#185FA5]">MONTHLY IMPACT (200 CASES)</p>
                      <p className="text-base font-bold text-[#185FA5] mt-1">~$4,400–5,600 / mo</p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-5">
                      <p className="text-xs font-mono font-bold text-neutral-400">ERROR TYPE</p>
                      <p className="text-sm font-bold text-navy mt-1">CRNA modifier mismatch</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-xs font-mono font-bold text-neutral-400">PER-CLAIM IMPACT</p>
                      <p className="text-sm font-semibold text-[#E24B4A] mt-1">Full claim denial</p>
                    </div>
                    <div className="md:col-span-4 text-left md:text-right">
                      <p className="text-xs font-mono font-bold text-[#185FA5]">MONTHLY IMPACT (200 CASES)</p>
                      <p className="text-xs text-neutral-600 font-medium mt-1">Revenue held pending correction</p>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-5">
                      <p className="text-xs font-mono font-bold text-neutral-400">ERROR TYPE</p>
                      <p className="text-sm font-bold text-navy mt-1">ASA crosswalk inaccuracy</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-xs font-mono font-bold text-neutral-400">PER-CLAIM IMPACT</p>
                      <p className="text-sm font-semibold text-neutral-700 mt-1">Systematic underpayment</p>
                    </div>
                    <div className="md:col-span-4 text-left md:text-right">
                      <p className="text-xs font-mono font-bold text-[#185FA5]">MONTHLY IMPACT (200 CASES)</p>
                      <p className="text-xs text-neutral-600 font-medium mt-1">Compounds across all cases using that code</p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-50 px-6 py-4.5 border-t border-neutral-100">
                  <p className="text-[11px] text-neutral-500 italic leading-relaxed text-center">
                    Figures are illustrative based on approximate Medicare anesthesia unit rates. Actual impact varies by payer and case mix.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: ANESTHESIA BILLING CHALLENGES (Accordion component) */}
      <section id="accordion-section" className="bg-white py-20 lg:py-28 border-b border-neutral-100 text-left">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
              OPERATIONAL ACCURACY
            </span>
            <div className="h-[2px] w-8 bg-blue-500/50 mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Where Anesthesia Billing Goes Wrong — and How We Fix It
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 leading-relaxed font-sans">
              Six billing failure points. Each one specific to anesthesia. Each one covered in the Clientele workflow.
            </p>
          </div>

          <div className="space-y-4">
            {accordionData.map((item, idx) => (
              <div 
                key={idx} 
                className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-blue-100 text-[#185FA5] text-[10px] font-mono font-bold uppercase">
                      POINT {idx + 1}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-navy text-[15px] md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-1 font-normal md:hidden">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  {activeAccordion === idx ? (
                    <ChevronUp className="size-4 text-neutral-400" />
                  ) : (
                    <ChevronDown className="size-4 text-neutral-400" />
                  )}
                </button>
                
                <AnimatePresence initial={false}>
                  {activeAccordion === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-neutral-100"
                    >
                      <div className="p-6 md:p-8 bg-[#E6F1FB]/10 space-y-6">
                        <div className="text-xs md:text-sm text-neutral-500 leading-relaxed font-sans font-medium">
                          {item.summary}
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 pt-2 font-sans">
                          {/* The Problem (Red Left Border) */}
                          <div className="border-l-2 border-[#E24B4A] pl-4 py-1.5 space-y-1.5 bg-[#E24B4A]/5">
                            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-[#E24B4A]">
                              The Problem
                            </h4>
                            <p className="text-neutral-700 text-xs md:text-[13px] leading-relaxed">
                              {item.problem}
                            </p>
                          </div>

                          {/* How We Handle It (Teal Left Border) */}
                          <div className="border-l-2 border-[#1D9E75] pl-4 py-1.5 space-y-1.5 bg-[#1D9E75]/5">
                            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-[#1D9E75]">
                              How We Handle It
                            </h4>
                            <p className="text-neutral-700 text-xs md:text-[13px] leading-relaxed">
                              {item.solution}
                            </p>
                          </div>
                        </div>

                        {/* Associated CPT chips */}
                        <div className="pt-2 border-t border-neutral-100 flex flex-wrap gap-1.5 items-center">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold mr-2">
                            ASSOCIATED CPTS &amp; KEYS:
                          </span>
                          {item.cpts.map((chip, chipIdx) => (
                            <span 
                              key={chipIdx} 
                              className="bg-[#185FA5]/10 text-[#185FA5] font-mono text-[10px] font-bold px-2 py-0.5 rounded"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: CRNA MODIFIER REFERENCE */}
      <section className="bg-[#0A1628] text-white py-20 lg:py-28 text-left border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
              COMPLIANCE &amp; CODING
            </span>
            <div className="h-[2px] w-8 bg-blue-500/50 mx-auto mb-5" />
            
            <h2 className="font-display text-3xl sm:text-4xl text-white font-bold leading-tight">
              The CRNA Modifier Matrix — Know It Before You Bill It
            </h2>
            <p className="mt-4 text-xs md:text-sm text-white/60 font-sans leading-relaxed">
              Four modifiers. Four legally distinct care models. Matching the wrong one to the documented supervision model is one of the most common — and most audited — anesthesia billing errors.
            </p>
          </div>

          {/* Modifier Grid (Exactly 4 cards in exact requested order: AA, QX, QY, QZ) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            
            {/* Card AA */}
            <div className="bg-white text-navy rounded-xl overflow-hidden shadow-card flex flex-col justify-between border-t-4 border-[#185FA5] p-6 hover:-translate-y-1 transition-transform">
              <div className="font-sans">
                <span className="text-3xl font-black font-display text-[#185FA5] block">AA</span>
                <h4 className="text-sm font-bold text-navy mt-1">Physician Personally Performs</h4>
                <div className="h-[1px] w-8 bg-neutral-200 my-3" />
                
                <p className="text-xs text-neutral-500 mb-4 h-16 leading-relaxed">
                  <strong>Documentation required:</strong> Physician personally present for induction, maintenance, and emergence.
                </p>
              </div>
              <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100 font-sans">
                <span className="text-[9px] font-mono text-neutral-400 block uppercase font-bold">BILLING NOTE</span>
                <p className="text-[11px] text-neutral-700 mt-1 leading-snug">
                  Full allowed amount — not applicable when physician is concurrently directing CRNAs.
                </p>
              </div>
            </div>

            {/* Card QX */}
            <div className="bg-white text-navy rounded-xl overflow-hidden shadow-card flex flex-col justify-between border-t-4 border-[#185FA5] p-6 hover:-translate-y-1 transition-transform">
              <div className="font-sans">
                <span className="text-3xl font-black font-display text-[#185FA5] block">QX</span>
                <h4 className="text-sm font-bold text-navy mt-1">CRNA with Medical Direction</h4>
                <div className="h-[1px] w-8 bg-neutral-200 my-3" />
                
                <p className="text-xs text-neutral-500 mb-4 h-16 leading-relaxed">
                  <strong>Documentation required:</strong> Physician present for pre-anesthetic exam, induction, and immediately available throughout.
                </p>
              </div>
              <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100 font-sans">
                <span className="text-[9px] font-mono text-neutral-400 block uppercase font-bold">BILLING NOTE</span>
                <p className="text-[11px] text-neutral-700 mt-1 leading-snug">
                  Split billing with physician — payer rules govern percentage split.
                </p>
              </div>
            </div>

            {/* Card QY */}
            <div className="bg-white text-navy rounded-xl overflow-hidden shadow-card flex flex-col justify-between border-t-4 border-[#185FA5] p-6 hover:-translate-y-1 transition-transform">
              <div className="font-sans">
                <span className="text-3xl font-black font-display text-[#185FA5] block">QY</span>
                <h4 className="text-sm font-bold text-navy mt-1">Physician Medically Directs One CRNA</h4>
                <div className="h-[1px] w-8 bg-neutral-200 my-3" />
                
                <p className="text-xs text-neutral-500 mb-4 h-16 leading-relaxed">
                  <strong>Documentation required:</strong> Same requirements as QX; used when directing exactly one CRNA.
                </p>
              </div>
              <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100 font-sans">
                <span className="text-[9px] font-mono text-neutral-400 block uppercase font-bold">BILLING NOTE</span>
                <p className="text-[11px] text-neutral-700 mt-1 leading-snug">
                  Some payers distinguish QY from QX; verify by payer contract before applying.
                </p>
              </div>
            </div>

            {/* Card QZ */}
            <div className="bg-white text-navy rounded-xl overflow-hidden shadow-card flex flex-col justify-between border-t-4 border-[#185FA5] p-6 hover:-translate-y-1 transition-transform">
              <div className="font-sans">
                <span className="text-3xl font-black font-display text-[#185FA5] block">QZ</span>
                <h4 className="text-sm font-bold text-navy mt-1">CRNA Without Supervision</h4>
                <div className="h-[1px] w-8 bg-neutral-200 my-3" />
                
                <p className="text-xs text-neutral-500 mb-4 h-16 leading-relaxed">
                  <strong>Documentation required:</strong> No physician supervision documented in the anesthesia record.
                </p>
              </div>
              <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100 font-sans">
                <span className="text-[9px] font-mono text-neutral-400 block uppercase font-bold">BILLING NOTE</span>
                <p className="text-[11px] text-neutral-700 mt-1 leading-snug">
                  CRNA bills independently — physician may not also bill for the same case.
                </p>
              </div>
            </div>

          </div>

          {/* Compliance Callout Strip */}
          <div className="border border-blue-500/20 rounded-2xl bg-navy-deep/60 p-6 flex items-center flex-col md:flex-row gap-4 justify-between font-sans relative">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
                <ShieldAlert className="size-5" />
              </div>
              <p className="text-xs md:text-sm text-teal-light font-medium leading-relaxed max-w-4xl text-left">
                <strong>Modifier selection is determined by what the anesthesia record documents</strong> — not by billing staff preference, not by historical practice, and not by what the payer &quot;usually accepts.&quot; When the documentation and the modifier disagree, the practice owns the audit liability.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: TIME-UNIT CALCULATOR */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100 relative">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
              INTERACTIVE CALCULATOR
            </span>
            <div className="h-[2px] w-8 bg-blue-500/50 mx-auto mb-5" />
            
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              See What a Documentation Error Costs You
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 leading-relaxed font-sans">
              Enter your approximate case volume and duration. The calculator shows the revenue difference between clean documentation and a single systematic unit error — at scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch font-sans">
            
            {/* Input Parameters panel */}
            <div className="lg:col-span-6 bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
              
              <div className="space-y-6">
                
                {/* Cases Per Month */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-neutral-500 tracking-wider mb-3">
                    Cases per month:
                  </h4>
                  <div className="grid grid-cols-5 gap-2">
                    {[50, 100, 150, 200, 250].map((num) => (
                      <button
                        key={num}
                        onClick={() => setCasesPerMonth(num)}
                        className={`py-2 rounded-lg font-bold text-xs transition-colors cursor-pointer text-center ${
                          casesPerMonth === num 
                            ? 'bg-[#185FA5] text-white font-sans' 
                            : 'bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Average Case Duration */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-xs font-mono font-bold uppercase text-neutral-500 tracking-wider">
                      Average Case Duration:
                    </h4>
                    <span className="text-sm font-bold text-[#185FA5] font-mono">
                      {caseDuration} minutes
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="180"
                    step="15"
                    value={caseDuration}
                    onChange={(e) => setCaseDuration(Number(e.target.value))}
                    className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#185FA5]"
                  />
                  <div className="flex justify-between text-[11px] text-neutral-400 font-mono mt-2">
                    <span>30 m</span>
                    <span>90 m (default)</span>
                    <span>180 m</span>
                  </div>
                </div>

                {/* Systematic error toggle button pair */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-neutral-500 tracking-wider mb-3">
                    Systematic 1-time-unit Documentation Error Present?
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSystematicError(true)}
                      className={`py-3 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                        systematicError 
                          ? 'bg-[#185FA5] text-white' 
                          : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      Yes (1 Unit Lost Per Case)
                    </button>
                    <button
                      onClick={() => setSystematicError(false)}
                      className={`py-3 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                        !systematicError 
                          ? 'bg-[#185FA5] text-white' 
                          : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                      }`}
                    >
                      No (Clean Documentation)
                    </button>
                  </div>
                </div>

              </div>

              {/* Formula context note */}
              <div className="pt-6 border-t border-neutral-200 mt-6 text-[11px] text-neutral-500 flex items-start gap-2">
                <span className="text-[#185FA5] font-bold">•</span>
                <span>Calculating units lost using 15 mins block: time-units per case = {timeUnitsPerCase} units + base values. Every unit is valued at approx ${baseRate} Medicare rate.</span>
              </div>

            </div>

            {/* Results Display Panel */}
            <div className="lg:col-span-6 bg-[#0A1628] text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-[#185FA5] uppercase tracking-widest font-bold">REVENUE ESTIMATE MODEL</span>
                <div className="h-[1px] w-6 bg-[#185FA5]" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-xs font-mono text-white/40 uppercase">Cases / Mo</h5>
                    <p className="text-xl font-bold mt-1 text-white">{casesPerMonth}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono text-white/40 uppercase">Total Monthly Units</h5>
                    <p className="text-xl font-bold mt-1 text-white">{totalMonthlyUnits}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h5 className="text-xs font-mono text-white/40 uppercase">Estimated Monthly Revenue (Clean)</h5>
                  <p className="text-3xl font-black text-white mt-1">
                    ${estMonthlyRevenueClean.toLocaleString()}
                  </p>
                  <p className="text-[11px] text-white/40 mt-1">At approximate Medicare rate of ${baseRate} per base unit.</p>
                </div>

                {/* Show loss section if error is active */}
                {systematicError && (
                  <div className="pt-4 border-t border-white/10 bg-red-500/5 p-4 rounded-xl border border-red-500/10">
                    <div className="flex gap-2 items-center text-red-400">
                      <TrendingDown className="size-4 shrink-0" />
                      <h5 className="text-xs font-mono uppercase tracking-wider font-bold">Estimated Monthly Leakage</h5>
                    </div>
                    <p className="text-4xl font-black text-[#E24B4A] mt-2">
                      -${estRevenueLost.toLocaleString()}
                    </p>
                    <div className="flex justify-between items-center mt-2 text-[11px] text-white/60">
                      <span>Units lost per month:</span>
                      <span className="font-mono font-bold text-[#E24B4A]">{unitsLostPerMonth} Lost Units</span>
                    </div>
                  </div>
                )}

              </div>

              {/* MANDATORY DISCLAIMER LINE DO NOT MODIFY */}
              <div className="pt-6 border-t border-white/5 mt-6">
                <p className="text-[10px] text-white/35 italic leading-relaxed">
                  Figures are approximate estimates based on Medicare anesthesia base unit rates and are provided for illustrative purposes only. Actual reimbursement varies by payer, geographic locality, case complexity, and qualifying circumstances. This calculator does not constitute a billing or financial guarantee.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: THE CLIENTELE METHOD (4-Step process with lock label) */}
      <section className="bg-[#F2F0EC] py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
              ONBOARDING STANDARD
            </span>
            <div className="h-[2px] w-8 bg-blue-500/50 mx-auto mb-5" />
            
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              The Clientele Method
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 font-sans leading-relaxed">
              Our systematic approach ensures a clean transition with ZERO disruption to your cash flow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1: Assess */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200/60 shadow-xs relative overflow-hidden group">
              <span className="absolute right-4 top-4 text-6xl font-black text-neutral-100 font-display select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                01
              </span>
              <div className="size-11 rounded-xl bg-[#185FA5]/10 flex items-center justify-center text-[#185FA5] mb-5">
                <ShieldCheck className="size-5" />
              </div>
              
              <h3 className="font-display font-bold text-navy text-base mb-3">Assess</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                We audit your anesthesia records, time-unit documentation practices, CRNA staffing model, and current modifier usage. We identify any systemic documentation errors before they cost another month of revenue.
              </p>
            </div>

            {/* Step 2: Configure */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200/60 shadow-xs relative overflow-hidden group">
              <span className="absolute right-4 top-4 text-6xl font-black text-neutral-100 font-display select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                02
              </span>
              <div className="size-11 rounded-xl bg-[#185FA5]/10 flex items-center justify-center text-[#185FA5] mb-5">
                <Settings className="size-5" />
              </div>
              
              <h3 className="font-display font-bold text-navy text-base mb-3">Configure</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Your anesthesia-specific billing workflow is configured in our system — ASA crosswalk set, CRNA modifier matrix mapped to your group&apos;s supervision model, qualifying circumstance checklist activated, and concurrent case tracking set up if applicable.
              </p>
            </div>

            {/* Step 3: Deploy */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200/60 shadow-xs relative overflow-hidden group">
              <span className="absolute right-4 top-4 text-6xl font-black text-neutral-100 font-display select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                03
              </span>
              <div className="size-11 rounded-xl bg-[#185FA5]/10 flex items-center justify-center text-[#185FA5] mb-5">
                <Zap className="size-5" />
              </div>
              
              <h3 className="font-display font-bold text-navy text-base mb-3">Deploy</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Your dedicated anesthesia billing team goes live. Clientele AI handles eligibility verification and claim scrubbing at volume; AAPC-certified anesthesia coders review every modifier assignment, time-unit calculation, and crosswalk code before submission.
              </p>
            </div>

            {/* Step 4: Optimize */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200/60 shadow-xs relative overflow-hidden group">
              <span className="absolute right-4 top-4 text-6xl font-black text-neutral-100 font-display select-none pointer-events-none group-hover:scale-110 transition-transform duration-300">
                04
              </span>
              <div className="size-11 rounded-xl bg-[#185FA5]/10 flex items-center justify-center text-[#185FA5] mb-5">
                <TrendingUp className="size-5" />
              </div>
              
              <h3 className="font-display font-bold text-navy text-base mb-3">Optimize</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Monthly performance reviews surface any new denial patterns, payer policy changes affecting anesthesia modifier rules, or documentation trends that create risk. Your workflow evolves — it doesn&apos;t stay static.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: QUALIFYING CIRCUMSTANCES REFERENCE */}
      <section className="bg-[#EEF2F7] py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
              REVENUE RECOVERY
            </span>
            <div className="h-[2px] w-8 bg-blue-500/50 mx-auto mb-5" />
            
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Revenue That Most Practices Leave on the Table
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 leading-relaxed font-sans">
              Four qualifying circumstance codes add unit value to anesthesia cases where specific patient conditions are documented. They are among the most consistently missed line items in anesthesia billing.
            </p>
          </div>

          {/* Grid of exactly 4 cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 font-sans">
            
            {/* Card 99100 */}
            <div className="bg-white rounded-xl border border-neutral-200/60 p-6 flex flex-col justify-between shadow-xs border-t-4 border-[#185FA5]">
              <div>
                <span className="text-3xl font-black text-[#185FA5] font-display block">99100</span>
                <span className="text-sm font-bold text-navy block mt-1">Extreme Age</span>
                <div className="h-[1px] w-6 bg-neutral-200 my-3" />
                <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                  <strong>Trigger:</strong> Anesthesia for patient of extreme age: younger than 1 year or older than 70, documented explicitly.
                </p>
              </div>
              <span className="inline-flex items-center justify-center bg-teal/15 text-[#185FA5] px-3 py-1 rounded-full text-xs font-bold leading-none w-fit font-sans">
                +1 base unit
              </span>
            </div>

            {/* Card 99116 */}
            <div className="bg-white rounded-xl border border-neutral-200/60 p-6 flex flex-col justify-between shadow-xs border-t-4 border-[#185FA5]">
              <div>
                <span className="text-3xl font-black text-[#185FA5] font-display block">99116</span>
                <span className="text-sm font-bold text-navy block mt-1">Controlled Hypotension</span>
                <div className="h-[1px] w-6 bg-neutral-200 my-3" />
                <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                  <strong>Trigger:</strong> Anesthesia complicated by utilization of controlled hypotension documented by anesthesiologist.
                </p>
              </div>
              <span className="inline-flex items-center justify-center bg-teal/15 text-[#185FA5] px-3 py-1 rounded-full text-xs font-bold leading-none w-fit font-sans">
                +5 base units
              </span>
            </div>

            {/* Card 99135 */}
            <div className="bg-white rounded-xl border border-neutral-200/60 p-6 flex flex-col justify-between shadow-xs border-t-4 border-[#185FA5]">
              <div>
                <span className="text-3xl font-black text-[#185FA5] font-display block">99135</span>
                <span className="text-sm font-bold text-navy block mt-1">Induced Hypothermia</span>
                <div className="h-[1px] w-6 bg-neutral-200 my-3" />
                <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                  <strong>Trigger:</strong> Anesthesia complicated by utilization of induced hypothermia documented in anesthesia record.
                </p>
              </div>
              <span className="inline-flex items-center justify-center bg-teal/15 text-[#185FA5] px-3 py-1 rounded-full text-xs font-bold leading-none w-fit font-sans">
                +5 base units
              </span>
            </div>

            {/* Card 99140 */}
            <div className="bg-white rounded-xl border border-neutral-200/60 p-6 flex flex-col justify-between shadow-xs border-t-4 border-[#185FA5]">
              <div>
                <span className="text-3xl font-black text-[#185FA5] font-display block">99140</span>
                <span className="text-sm font-bold text-navy block mt-1">Emergency Conditions</span>
                <div className="h-[1px] w-6 bg-neutral-200 my-3" />
                <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                  <strong>Trigger:</strong> Anesthesia complicated by emergency conditions; delay would result in significant patient harm.
                </p>
              </div>
              <span className="inline-flex items-center justify-center bg-teal/15 text-[#185FA5] px-3 py-1 rounded-full text-xs font-bold leading-none w-fit font-sans">
                +2 base units
              </span>
            </div>

          </div>

          <div className="bg-neutral-100 rounded-xl p-4 border border-neutral-200 text-center max-w-3xl mx-auto">
            <p className="text-xs text-neutral-600 italic">
              <strong>Note:</strong> Add-on code billing requires supporting documentation in the anesthesia record. The code cannot be applied based on assumption or general practice type — documentation is the legal basis for billing.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 9: PERFORMANCE PROOF + TESTIMONIAL */}
      <section className="bg-[#F2F0EC] py-20 lg:py-28 text-left border-b border-neutral-200 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Stat Cards Column */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
                PERFORMANCE PROOF
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight mb-8">
                What Anesthesia Practices See After 90 Days
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                
                {/* Clean Claim Rate */}
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-3xl font-black font-display text-navy">99%</h4>
                    <span className="text-xs font-bold text-neutral-500 block mt-1">Clean Claim Rate</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono block mt-3">vs. industry avg 85-90%</span>
                </div>

                {/* Denial Rate */}
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-3xl font-black font-display text-navy">10% Today</h4>
                    <span className="text-xs font-bold text-neutral-500 block mt-1">Current Denial Rate</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono block mt-3">Targeting &lt;5% with Clientele AI</span>
                </div>

                {/* Day-to-Go-Live */}
                <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-3xl font-black font-display text-[#185FA5]">30 Days</h4>
                    <span className="text-xs font-bold text-neutral-500 block mt-1">Avg. Go-Live</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono block mt-3">From sign-off to active</span>
                </div>

              </div>
            </div>

            {/* Testimonial Column */}
            <div className="lg:col-span-6">
              <div className="bg-white border-l-4 border-[#185FA5] rounded-r-2xl p-8 shadow-card font-sans">
                <span className="text-[#185FA5] text-5xl font-serif leading-none block select-none pointer-events-none">
                  “
                </span>
                <p className="text-base text-neutral-700 italic leading-relaxed font-sans mb-6">
                  CRNA modifier errors were our single biggest denial driver. Clientele audited our last 90 days of records in the first week and found the documentation mismatch we&apos;d been billing through for months. It was fixed before the next billing cycle.
                </p>
                <div className="h-[1px] w-8 bg-neutral-100 mb-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 block">
                  RESOURCE ATTRIBUTION
                </span>
                <h5 className="text-sm font-bold text-navy mt-1">
                  Revenue Cycle Director
                </h5>
                <p className="text-xs text-neutral-500">
                  Anesthesia Group Practice · Illinois
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10: SERVICE NAVIGATION CROSS-LINKS */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-200 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
              SUPPORTING MATRIX
            </span>
            <div className="h-[2px] w-8 bg-blue-500/50 mx-auto mb-5" />
            
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Explore the Services Behind Anesthesia Billing Accuracy
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 leading-relaxed font-sans">
              Our full-stack revenue cycle optimization coordinates directly with specialized clinical teams across every core transition stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Front-End RCM Card */}
            <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between scroll-mt-24 hover:shadow-md transition-shadow duration-300 border-t-4 border-[#185FA5]">
              <div>
                <h3 className="font-display font-bold text-navy text-base mb-4 flex items-center justify-between">
                  Front-End RCM
                  <ArrowRight className="size-4 text-[#1D9E75]" />
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Prior authorization for complex anesthesia procedures and eligibility verification before every case — the documentation foundation that prevents back-end denials.
                </p>
              </div>
              <a 
                href="/services/front-end" 
                onClick={(e) => handleLinkClick(e, '/services/front-end')}
                className="mt-6 text-xs font-bold text-[#1D9E75] hover:text-navy transition-colors flex items-center gap-1.5 select-none font-mono tracking-wider"
              >
                EXPLORE FRONT-END SOLUTIONS →
              </a>
            </div>

            {/* Mid-Cycle Intelligence Card */}
            <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between scroll-mt-24 hover:shadow-md transition-shadow duration-300 border-t-4 border-[#185FA5]">
              <div>
                <h3 className="font-display font-bold text-navy text-base mb-4 flex items-center justify-between">
                  Mid-Cycle Intelligence
                  <ArrowRight className="size-4 text-[#1D9E75]" />
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Real-time coding review for every anesthesia claim — ASA crosswalk validation, modifier assignment, and qualifying circumstance capture before submission.
                </p>
              </div>
              <a 
                href="/services/mid-cycle" 
                onClick={(e) => handleLinkClick(e, '/services/mid-cycle')}
                className="mt-6 text-xs font-bold text-[#1D9E75] hover:text-navy transition-colors flex items-center gap-1.5 select-none font-mono tracking-wider"
              >
                EXPLORE MID-CYCLE SOLUTIONS →
              </a>
            </div>

            {/* Back-End & A/R Recovery Card */}
            <div className="bg-white border border-neutral-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between scroll-mt-24 hover:shadow-md transition-shadow duration-300 border-t-4 border-[#185FA5]">
              <div>
                <h3 className="font-display font-bold text-navy text-base mb-4 flex items-center justify-between">
                  Back-End &amp; A/R Recovery
                  <ArrowRight className="size-4 text-[#1D9E75]" />
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Anesthesia denial patterns are specific and recoverable. CRNA modifier mismatches, time-unit disputes, and crosswalk rejections are tracked, appealed, and fed back into the pre-submission workflow.
                </p>
              </div>
              <a 
                href="/services/back-end" 
                onClick={(e) => handleLinkClick(e, '/services/back-end')}
                className="mt-6 text-xs font-bold text-[#1D9E75] hover:text-navy transition-colors flex items-center gap-1.5 select-none font-mono tracking-wider"
              >
                EXPLORE BACK-END SOLUTIONS →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 11: FOOTER CTA BAND (assessment anchor) */}
      <section id="assessment" className="relative bg-[#0A1628] text-white py-24 border-t border-white/5 overflow-hidden text-center">
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" />
        <div className="absolute inset-0 mesh-glow opacity-60 pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
            CLAIM YOUR ASSESSMENT OF RISK
          </span>
          <div className="h-[1px] w-12 bg-teal/50 mx-auto mb-6" />
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-4">
            Anesthesia Billing Precision Starts Here
          </h2>
          
          <p className="text-base text-white/70 max-w-xl mx-auto leading-relaxed mb-10 font-sans">
            Request a free anesthesia billing assessment. We&apos;ll review your time-unit documentation practices, CRNA modifier usage, and ASA crosswalk accuracy — and show you exactly where revenue is being lost.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/about')}
              className="rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center select-none font-sans"
            >
              Request a Free Anesthesia Billing Assessment →
            </a>
            <a
              href="/specialties"
              onClick={(e) => handleLinkClick(e, '/specialties')}
              className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center select-none"
            >
              Explore All Specialties
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
