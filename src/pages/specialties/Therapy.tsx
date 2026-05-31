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
  TrendingDown,
  LineChart,
  HelpCircle,
  Stethoscope,
  Network
} from 'lucide-react';

interface TherapyProps {
  navigate: (path: string) => void;
}

export default function Therapy({ navigate }: TherapyProps) {
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

  // State for Service Accordion
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // State for Specialty Depth Tabs
  const [activeTab, setActiveTab] = useState<'pt' | 'ot' | 'st' | 'rtm' | 'chiro'>('pt');

  // Accordion Data (5 content layers matching briefs)
  const accordionData = [
    {
      id: "front-end",
      title: "Front-End: Eligibility, Authorization & Plan of Care Management",
      summary: "Managing visitor compliance and therapy auth limits systematically.",
      description: "Real-time eligibility verification via Clientele AI Module 1 — therapy benefits verified at scheduling including visit limits, therapy cap status, and authorization requirements per payer. Plan of care tracking: renewal cycles tracked per payer and per patient. Authorization renewal alerts generated before the current auth expires — not after the claim denies. Payer-specific therapy benefit rules maintained for all major payers in MI, IL, FL, NY, CT, NJ, and DC — including visit limits, authorization thresholds, and functional documentation requirements.",
      chips: ["Plan of care renewal", "Auth tracking", "Visit limits", "Therapy cap status"]
    },
    {
      id: "mid-cycle",
      title: "Mid-Cycle: Timed Unit Calculation, G-codes & Modifier Application",
      summary: "Ensuring 8-minute thresholds and CMS functional codes are applied exactly.",
      description: "8-minute rule applied at claim level — timed service minutes entered from the clinical note; unit calculation reviewed against cumulative session time before submission. Systematic undercoding prevention: evaluation level reviewed against clinical note complexity — 97161/97162/97163 and 97165/97166/97167 selected based on documented complexity, not defaulted to lowest level. G-code pair compliance: functional limitation code + severity modifier reviewed at evaluation, every 10 visits, and at discharge. KX modifier applied to all claims where therapy cap threshold is reached and clinical note supports continued medical necessity.",
      chips: ["97161–97163", "97165–97167", "G-codes", "KX modifier", "8-min units"]
    },
    {
      id: "rtm-billing",
      title: "RTM Billing: Full Compliance Management",
      summary: "Coordinating remote therapeutic monitoring protocols with therapist codes.",
      description: "Complete RTM billing workflow managed alongside traditional therapy billing. 98975 (initial setup) tracked as one-time per device type — never billed monthly. 98976 (MSK device supply) and 98977 (respiratory device supply) billed when 16-day transmission threshold is confirmed — never billed on patient-reported data. 98980 (first 20 minutes treatment management) and 98981 (additional 20 minutes) billed by qualified clinical staff under physician direction with documented: staff name and credential, date and duration, findings. Monthly interactive communication confirmed before 98980/98981 submission. RTM + RPM stacking reviewed per patient — both billed in same month where different data types are being monitored.",
      chips: ["98975", "98976", "98977", "98980", "98981", "16-day", "RTM+RPM stacking"]
    },
    {
      id: "back-end",
      title: "Back-End: Denial Management & A/R Recovery",
      summary: "Targeted appeal strategies for therapy exemptions and compliance.",
      description: "Therapy denial patterns cluster around four categories: therapy cap denials (missing KX), G-code gaps, evaluation level downcoding, and RTM compliance failures. Each category has a dedicated appeal protocol. Therapy cap appeals: clinical note review confirming continued medical necessity, KX documentation, and payer-specific LCD citation. G-code gap appeals: documentation of functional status at the appropriate visit interval. Evaluation level downcoding appeals: clinical complexity argument built from the note — patient history, clinical decision-making, and examination findings cited. RTM denials: documentation audit confirms 16-day threshold, interactive communication record, and qualified staff credentials.",
      chips: ["Therapy cap appeal", "G-code gap", "KX documentation", "RTM compliance audit"]
    },
    {
      id: "group-concurrent",
      title: "Group Therapy & Concurrent Billing Protocol",
      summary: "Compliance boundaries for concurrent treatments and multi-therapist environments.",
      description: "Group therapy (97150) billed only when documentation reflects group delivery — patient-to-therapist ratio documented in the clinical note. Individual codes never billed for group sessions and vice versa. Concurrent therapy (therapist treating more than one patient individually at the same time) documented per Medicare requirements. Co-treatment sessions (two therapists treating one patient simultaneously) reviewed for medical necessity documentation and billed correctly per payer policy.",
      chips: ["97150", "Group ratio", "Concurrent therapy", "Co-treatment"]
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans select-text text-left">
      
      {/* SECTION 1 — PIPELINE POSITION INDICATOR (Sub-Nav Sticky Strip) */}
      <div className="bg-white border-b border-neutral-200 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-none">
          <div className="flex items-center space-x-4 py-3.5 whitespace-nowrap text-xs font-semibold select-none">
            <span className="text-neutral-400 font-mono text-[10px] uppercase tracking-wider">
              RCM Stage Sequence:
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-neutral-500">Front-End RCM</span>
              <ChevronRight className="size-3 text-neutral-300" />
              <span className="text-neutral-500">Prior Authorization</span>
              <ChevronRight className="size-3 text-neutral-300" />
              <span className="text-neutral-500">ICD &amp; CPT Coding</span>
              <ChevronRight className="size-3 text-neutral-300" />
              <span className="text-neutral-500">Claims Submission</span>
              <ChevronRight className="size-3 text-neutral-300" />
              <span className="bg-[#1D9E75]/10 text-teal border border-[#1D9E75]/20 px-2.5 py-1 rounded-full font-bold">
                Comprehensive Therapy Specialty (Active)
              </span>
              <ChevronRight className="size-3 text-neutral-300" />
              <span className="text-neutral-500">RTM / RPM Integration</span>
              <ChevronRight className="size-3 text-neutral-300" />
              <span className="text-neutral-500">Back-End &amp; A/R</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb strip */}
      <div className="bg-neutral-50 border-b border-neutral-100 py-3">
        <div className="max-w-7xl mx-auto px-6 text-[11px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2 select-none">
          <a href="/specialties" onClick={(e) => handleLinkClick(e, '/specialties')} className="hover:text-navy transition-colors">Specialties</a>
          <ChevronRight className="size-3 text-neutral-300" />
          <span className="text-teal font-bold">Comprehensive Therapy Billing</span>
        </div>
      </div>

      {/* SECTION 2 — HERO (Dark Navy background) */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Block */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
                Specialty Billing — Comprehensive Therapy (PT / OT / ST)
              </span>
              <div className="h-[1px] w-12 bg-teal/50 mb-6" />
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.10] tracking-tight text-white mb-6">
                Therapy Billing Has Layer Upon Layer of Compliance. We Manage Every Layer.
              </h1>
              
              <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-8 font-sans">
                The 8-minute rule. Functional limitation G-codes. KX modifier for therapy cap exceptions. RTM billing running alongside traditional therapy codes. Treatment plan renewal cycles. Most billing companies handle one layer. We handle all of them — simultaneously.
              </p>
              
              {/* CTA Action Block */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <a
                  href="#assessment"
                  onClick={(e) => handleLinkClick(e, '#assessment')}
                  className="rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2 select-none"
                >
                  Request a Therapy Billing Assessment →
                </a>
                <a
                  href="#rtm-integration"
                  onClick={(e) => handleLinkClick(e, '#rtm-integration')}
                  className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center select-none"
                >
                  See How We Handle RTM + Therapy Billing Together
                </a>
              </div>

              {/* Trust micro-copy - strictly limited to specified states */}
              <div className="text-white/45 text-[11px] font-mono flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                <span>🛡️ AAPC-Certified Therapy Coders</span>
                <span>•</span>
                <span>RTM + Traditional Billing Managed Simultaneously</span>
                <span>•</span>
                <span className="text-teal-light font-semibold">Active states: MI, IL, FL, NY, CT, NJ, DC</span>
              </div>
            </div>
            
            {/* Right-side Stat Cards */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 bg-teal/10 rounded-3xl blur-2xl opacity-30 pointer-events-none" />
              
              <div className="relative space-y-4">
                
                {/* Stat 1 */}
                <div className="bg-navy-deep/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-teal/30 transition-all flex items-center gap-5">
                  <div className="size-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="size-6 text-teal" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-display text-white">99%</span>
                      <span className="text-xs text-neutral-400 font-mono">Clean Claim Rate</span>
                    </div>
                    <p className="text-xs text-white/50 mt-1">Achieved across therapy accounts vs. industry average of 85–90%.</p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-navy-deep/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-teal/30 transition-all flex items-center gap-5">
                  <div className="size-12 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                    <FileCheck className="size-6 text-teal" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-display text-white">98%</span>
                      <span className="text-xs text-neutral-400 font-mono">First-Pass Resolution Rate</span>
                    </div>
                    <p className="text-xs text-white/50 mt-1">Fewer rejections and accelerated cash-flow straight to reimbursement.</p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-navy-deep/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-teal/30 transition-all flex items-center gap-5">
                  <div className="size-12 rounded-xl bg-[#185FA5]/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Network className="size-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-display text-white">1 Team</span>
                      <span className="text-xs text-neutral-400 font-mono">Coordinated</span>
                    </div>
                    <p className="text-xs text-white/50 mt-1">RTM + traditional therapy compliance managed simultaneously under one billing roof.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — PROBLEM SECTION (Light amber tint) */}
      <section className="bg-[#FAF6F0] py-20 lg:py-28 text-left border-b border-amber-200/40 relative">
        <div className="max-w-7xl mx-auto px-6 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800 mb-4 select-none">
              ⚠️ REVENUE RISK SPOTS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              The Billing Challenges That Cost PT, OT, and ST Practices the Most
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto font-sans">
              Therapy billing compliance sits at the intersection of CMS rules, payer-specific policies, functional documentation requirements, and emerging RTM codes. Here&apos;s where revenue leaks — and how Clientele closes each gap.
            </p>
          </div>

          {/* Six Problem Cards Grid (amber top border) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-6 shadow-xs border-t-4 border-amber-500 flex flex-col justify-between hover:shadow-md transition-shadow font-sans">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 tracking-wider block uppercase mb-1">01 / TIMING CALCULATION</span>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base mb-3">
                  The 8-minute rule miscalculation
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Medicare&apos;s 8-minute rule governs how timed therapy units are billed. A service must be performed for at least 8 minutes to bill one unit; the rounding thresholds are precise. One additional unit requires cumulative timed minutes to cross the next threshold. Errors in unit calculation — especially across multiple timed codes in a single session — result in systematic overbilling exposure or underbilling revenue loss.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">Timed units</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">8-min rule</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">Medicare</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-6 shadow-xs border-t-4 border-amber-500 flex flex-col justify-between hover:shadow-md transition-shadow font-sans">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 tracking-wider block uppercase mb-1">02 / OUTCOME TRACKING</span>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base mb-3">
                  Functional limitation reporting gaps (G-codes)
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Medicare requires functional limitation reporting at evaluation, every 10 treatment visits, and at discharge. Missing or late G-codes trigger claim-level denials and potential audit exposure. The G-code pair (functional limitation + severity modifier) must match the treatment diagnosis and functional status documented in the clinical note.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">G-codes</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">G8978–G9089</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">Severity modifier</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-6 shadow-xs border-t-4 border-amber-500 flex flex-col justify-between hover:shadow-md transition-shadow font-sans">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 tracking-wider block uppercase mb-1">03 / CLINICAL COMPLEXITY</span>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base mb-3">
                  Evaluation level undercoding
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  PT evaluations (97161–97163) and OT evaluations (97165–97167) are leveled by clinical complexity. Low, moderate, and high complexity evaluations have distinct documentation requirements. Most undercoding occurs when the therapist documents a high-complexity evaluation but the biller defaults to 97161 or 97165 — leaving reimbursement on the table.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">97161</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">97162</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">97163</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">97165</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-6 shadow-xs border-t-4 border-amber-500 flex flex-col justify-between hover:shadow-md transition-shadow font-sans">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 tracking-wider block uppercase mb-1">04 / EXEMPTION PATHS</span>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base mb-3">
                  KX modifier missing on therapy cap exceptions
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Medicare&apos;s therapy cap requires KX modifier to signal that services are medically necessary beyond the cap threshold. Missing KX on claims above the therapy cap threshold triggers automatic denial. The clinical note must support the KX with documentation of continued medical necessity.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">KX modifier</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">Therapy cap</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">Medicare</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl p-6 shadow-xs border-t-4 border-amber-500 flex flex-col justify-between hover:shadow-md transition-shadow font-sans">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 tracking-wider block uppercase mb-1">05 / MONITORING INTEGRATION</span>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base mb-3">
                  RTM billing errors alongside traditional therapy
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  RTM codes 98975–98981 are billable alongside traditional therapy codes — but require separate documentation trails: 16 days of device data transmission for 98976/98977, monthly interactive communication for 98980/98981, and a one-time-only 98975 setup code. Billing 98975 monthly is the most common RTM compliance error in therapy practices.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">98975</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">98976</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">98980</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">16-day rule</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl p-6 shadow-xs border-t-4 border-amber-500 flex flex-col justify-between hover:shadow-md transition-shadow font-sans">
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 tracking-wider block uppercase mb-1">06 / GROUP PROTOCOLS</span>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base mb-3">
                  Group vs. individual therapy miscoding
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Group therapy (97150) and individual therapy codes are mutually exclusive for the same time block. Billing individual codes when the documentation reflects a group session — or vice versa — triggers payer audits and recoupment. The patient-to-therapist ratio must be documented.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">97150</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">Group vs. individual</span>
                <span className="font-mono text-[9px] font-bold bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded">Ratio doc</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4 — THE RTM INTEGRATION STORY (White — standalone sub-section, powerful differentiator) */}
      <section id="rtm-integration" className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Block */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest block">
                The Differentiator — RTM + Traditional Therapy
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
                Most Billing Companies Can Handle Therapy. Almost None Can Handle RTM at the Same Time.
              </h2>
              <p className="text-neutral-500 font-medium text-xs md:text-sm leading-relaxed font-sans">
                RTM billing alongside traditional therapy is the emerging standard for PT, OT, and SLP practices — and the most common billing failure point as practices try to add it.
              </p>
              
              <div className="prose prose-neutral text-xs md:text-sm text-neutral-600 leading-relaxed space-y-4 font-sans">
                <p>
                  Remote Therapeutic Monitoring codes (98975–98981) were introduced specifically for therapy providers — not physician practices. PT, OT, SLP, and RT staff are the qualified clinical staff who perform RTM treatment management under physician direction. That means the billing workflow lives entirely within the therapy practice — and it must coexist with every existing claim without creating compliance exposure.
                </p>
                <p>
                  The problem most practices face isn&apos;t RTM billing in isolation. It&apos;s managing RTM documentation timelines — 16-day device data transmission thresholds, monthly interactive communication requirements, and treatment management session logging — alongside the existing therapy billing cycle. Two parallel documentation streams. Two separate compliance rules. One billing team that needs to manage both without errors on either side.
                </p>
                <p className="font-bold text-navy">
                  Clientele manages both simultaneously with robust checkpoints:
                </p>
              </div>

              {/* Checkpoints Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2 font-sans select-none">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-teal/10 text-teal border border-teal/20 shrink-0 mt-0.5">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-navy">RTM device data tracking</h5>
                    <p className="text-[11px] text-neutral-500">16-day transmission threshold monitored per patient.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-teal/10 text-teal border border-teal/20 shrink-0 mt-0.5">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-navy">Interactive logging</h5>
                    <p className="text-[11px] text-neutral-500">Monthly interactive communication documentation checked.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-teal/10 text-teal border border-teal/20 shrink-0 mt-0.5">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-navy">98975 setup validation</h5>
                    <p className="text-[11px] text-neutral-500">Billed once per device type; never repeated systematically.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-full bg-teal/10 text-teal border border-teal/20 shrink-0 mt-0.5">
                    <Check className="size-3.5" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-bold text-navy">Dual-stream checking</h5>
                    <p className="text-[11px] text-neutral-500">Tiered treatment billing checks aligned with physician workflows.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right-side Call out and illustration */}
            <div className="lg:col-span-5">
              <div className="bg-[#050B14] text-white rounded-2xl p-8 border border-white/10 relative overflow-hidden shadow-card font-sans">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
                
                <h4 className="font-display font-semibold text-white text-base mb-4 flex items-center gap-2">
                  <Sparkles className="size-5 text-teal" /> Dual Monitoring Stacking Opportunity
                </h4>
                
                <div className="space-y-4 text-xs text-white/80 leading-relaxed">
                  <p>
                    CMS allows RTM and RPM billing in the same month for the same patient when different clinical metrics/systems are monitored.
                  </p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2">
                      <span className="font-mono text-teal">RPM (Hypertension)</span>
                      <span className="text-white/40">Blood Pressure</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-mono text-blue-400">RTM (Musculoskeletal)</span>
                      <span className="text-white/40">Exercise &amp; ROM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-teal-light text-xs leading-relaxed italic border-l-2 border-teal pl-4 bg-teal/5 py-2">
                    &quot;If your practice is billing RPM for a post-surgical orthopedic patient and RTM for their exercise and ROM monitoring — both are billable in the same month. CMS allows it. Most billing companies don&apos;t know how to execute it. We do.&quot;
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — SERVICE DEEP-DIVE ACCORDION (White - continuous) */}
      <section className="bg-white py-16 lg:py-24 border-b border-neutral-100 text-left">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold block mb-1">
              PROTOCOL DETAIL
            </span>
            <div className="h-[2px] w-8 bg-teal mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              How We Handle Therapy Billing Across Every Compliance Layer
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 leading-relaxed font-sans">
              Click any stage to see the specific protocols Clientele applies for PT, OT, and ST practices — built around the codes, rules, and documentation requirements your therapists actually work with.
            </p>
          </div>

          <div className="space-y-4">
            {accordionData.map((item, idx) => (
              <div 
                key={item.id} 
                className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-teal/10 text-teal text-[10px] font-mono font-bold uppercase">
                      STAGE {idx + 1}
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
                      <div className="p-6 md:p-8 bg-neutral-50/50 space-y-6">
                        <div className="text-xs md:text-sm text-neutral-600 leading-relaxed font-sans font-medium">
                          {item.summary}
                        </div>
                        
                        <div className="border-l-2 border-teal pl-4 py-2 bg-teal/5">
                          <p className="text-neutral-700 text-xs md:text-[13px] leading-relaxed font-sans">
                            {item.description}
                          </p>
                        </div>

                        {/* Associated chips */}
                        <div className="pt-2 border-t border-neutral-100 flex flex-wrap gap-1.5 items-center">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold mr-2">
                            ASSOCIATED CPTS &amp; COMPLIANCE LIMITS:
                          </span>
                          {item.chips.map((chip, chipIdx) => (
                            <span 
                              key={chipIdx} 
                              className="bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-neutral-200"
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

      {/* SECTION 6 — AI WORKFLOW (Dark Navy background) */}
      <section className="bg-[#0A1628] text-white py-20 lg:py-28 text-left border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            
            {/* Left AI module panel */}
            <div className="lg:col-span-5 bg-navy-deep/80 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between backdrop-blur-md">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-teal">
                  <Brain className="size-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Clientele AI Engine status</span>
                </div>
                
                <h3 className="font-display font-bold text-white text-xl">
                  Therapy Workflow Automation Status
                </h3>
                
                <p className="text-xs text-white/60 leading-relaxed font-sans">
                  Therapy billing compliance has more moving parts than almost any other specialty — timed units, G-code intervals, therapy cap thresholds, and RTM documentation cycles all running simultaneously. Clientele AI is configured to track every one of these cycles at the patient level — so nothing falls through between billing periods.
                </p>

                {/* Module status block */}
                <div className="space-y-3.5 pt-4 border-t border-white/10 font-mono text-xs select-none">
                  <div className="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
                    <span className="text-white/70">Module 1 — Eligibility Verification:</span>
                    <span className="bg-teal/20 text-teal border border-teal/30 px-2 py-0.5 rounded text-[10px] font-bold">Active May 2026</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
                    <span className="text-white/70">Module 2 — Prior Auth Management:</span>
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded text-[10px] font-bold">Coming Q2 2026</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-lg border border-white/5">
                    <span className="text-white/70">Module 3 — ICD &amp; CPT Coding Assist:</span>
                    <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded text-[10px] font-bold">Coming Q3 2026</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-[11px] text-white/40">
                🚀 Dynamic workflow state engine initialized for all 7 active states.
              </div>
            </div>

            {/* Right side — 4-step AI workflow */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 font-sans">
              <div className="space-y-2">
                <span className="text-teal font-mono text-xs uppercase tracking-wider block">AI-MANAGED PHASES</span>
                <h4 className="font-display font-bold text-white text-2xl lg:text-3xl">How Clientele AI Manages RTM Compliance and Therapy Billing in Parallel</h4>
              </div>

              <div className="space-y-6">
                
                {/* Step 1 */}
                <div className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-teal/20 transition-all">
                  <div className="size-8 rounded-full bg-teal/15 text-teal border border-teal/30 flex items-center justify-center font-bold font-mono text-xs shrink-0">1</div>
                  <div>
                    <h5 className="font-bold text-white text-sm flex items-center justify-between flex-wrap gap-2">
                      <span>Pre-Service / Eligibility + therapy cap status</span>
                      <span className="text-[10px] uppercase font-mono bg-teal/15 text-teal px-2 py-0.5 rounded border border-teal/25 font-bold">Module 1 — Live May 2026</span>
                    </h5>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Clientele AI checks therapy benefit limits, cap threshold status, and authorization requirements before the appointment. Visit limit alerts generated for payers with hard caps.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-teal/20 transition-all">
                  <div className="size-8 rounded-full bg-teal/15 text-teal border border-teal/30 flex items-center justify-center font-bold font-mono text-xs shrink-0">2</div>
                  <div>
                    <h5 className="font-bold text-white text-sm flex items-center justify-between flex-wrap gap-2">
                      <span>Pre-Submission / RTM threshold + G-code check</span>
                      <span className="text-[10px] uppercase font-mono bg-[#185FA5]/35 text-blue-300 px-2 py-0.5 rounded border border-blue-500/25 font-bold">Module 4 — Coming Q3 2026</span>
                    </h5>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      System confirms 16-day RTM data transmission before 98976/98977 submission. G-code interval tracking flags when functional limitation reporting is due. KX modifier threshold tracked per patient per payer.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-start bg-teal/5 p-4 rounded-xl border border-teal/20">
                  <div className="size-8 rounded-full bg-teal text-navy flex items-center justify-center font-bold font-mono text-xs shrink-0">3</div>
                  <div>
                    <h5 className="font-bold text-teal-light text-sm flex items-center justify-between flex-wrap gap-2">
                      <span>Human Review / AAPC coder sign-off</span>
                      <span className="text-[10px] uppercase font-mono bg-teal/20 text-teal px-2 py-0.5 rounded border border-teal/30 font-bold">Human-Guided Automation</span>
                    </h5>
                    <p className="text-xs text-white/70 mt-1 leading-relaxed">
                      Timed unit calculation, evaluation level selection, and RTM compliance reviewed by AAPC-certified therapy coder before submission. <strong>Human-Guided Automation</strong> — AI handles volume, humans handle compliance complexity.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5 hover:border-teal/20 transition-all">
                  <div className="size-8 rounded-full bg-teal/15 text-teal border border-[#1D9E75]/30 flex items-center justify-center font-bold font-mono text-xs shrink-0">4</div>
                  <div>
                    <h5 className="font-bold text-white text-sm flex items-center justify-between flex-wrap gap-2">
                      <span>Post-Payment / Denial pattern analysis</span>
                      <span className="text-[10px] uppercase font-mono bg-[#185FA5]/35 text-blue-300 px-2 py-0.5 rounded border border-blue-500/25 font-bold">Module 6 — Coming Q4 2026</span>
                    </h5>
                    <p className="text-xs text-white/60 mt-1 leading-relaxed">
                      Therapy cap, G-code, and RTM denial patterns tracked at payer + code level. Protocol updates triggered by pattern — not just individual appeals.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — SPECIALTY DEPTH TABS (Light amber tint) */}
      <section className="bg-[#FAF6F0] py-20 lg:py-28 text-left border-y border-amber-200/40">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
              DISCIPLINE DEEP DIVE
            </span>
            <div className="h-[2px] w-8 bg-[#185FA5] mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Specialty Depth by Therapy Discipline
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
              Each therapy discipline has its own evaluation codes, documentation standards, and payer coverage rules. Select a discipline to see how Clientele handles billing for your specific practice type.
            </p>
          </div>

          {/* Interactive tabs strip */}
          <div className="border-b border-neutral-200/60 mb-8 select-none">
            <nav className="flex flex-wrap gap-2 -mb-px font-sans" aria-label="Discipline Tabs">
              {[
                { key: 'pt', label: 'Physical Therapy (PT)' },
                { key: 'ot', label: 'Occupational Therapy (OT)' },
                { key: 'st', label: 'Speech-Language Pathology (ST)' },
                { key: 'rtm', label: 'RTM — Therapy-Integrated' },
                { key: 'chiro', label: 'Chiropractic & Rehab' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`border-b-2 py-3.5 px-5 font-bold text-xs sm:text-sm tracking-wide transition-colors cursor-pointer ${
                    activeTab === tab.key 
                      ? 'border-[#185FA5] text-[#185FA5]' 
                      : 'border-transparent text-neutral-500 hover:text-navy hover:border-neutral-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Active Tab Content Panel */}
          <div className="bg-white rounded-2xl border border-neutral-200/75 p-6 md:p-8 shadow-xs font-sans">
            <AnimatePresence mode="wait">
              {activeTab === 'pt' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div>
                    <h4 className="font-display font-bold text-navy text-lg mb-4">Physical Therapy (PT) Common Pitfalls</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Evaluation level selection (97161–97163) defaulted to low complexity due to system laziness.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">8-minute rule calculation errors across multiple timed codes within single treatment blocks.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">KX modifier missing on Medicare claims exceeding automatic caps.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">G-code pair missing at 10-visit intervals, leading to immediate claim level rejection.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Neuromuscular re-education (97112) vs. therapeutic exercise (97110) selection based on clinical notes.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#FAF6F0] p-6 rounded-xl border border-amber-200/50 space-y-4">
                    <h5 className="text-[13px] font-bold text-navy uppercase tracking-wider font-mono">Our PT Solution Workflow</h5>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Evaluation level reviewed against note complexity before coding. Timed unit calculation applied at claim level from session minutes. KX threshold tracked per patient. G-code intervals monitored per visit count.
                    </p>
                    <div className="pt-3 border-t border-neutral-200/60 flex flex-wrap gap-1.5 matches-cpts">
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97161</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97162</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97163</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97110</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97112</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">KX</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">G-codes</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'ot' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div>
                    <h4 className="font-display font-bold text-navy text-lg mb-4">Occupational Therapy (OT) Common Pitfalls</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Evaluation level selection (97165–97167) regularly undercoded due to default billing template shortcuts.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">E/M or ADL assessment vs. work-related evaluation documentation requirements.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Hand therapy CPT selection (97760 orthotics vs. 97761 custom fitting) resulting in bundling error.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Co-treatment with PT without appropriate billing coordination or distinct documentation trails.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#FAF6F0] p-6 rounded-xl border border-amber-200/50 space-y-4">
                    <h5 className="text-[13px] font-bold text-navy uppercase tracking-wider font-mono">Our OT Solution Workflow</h5>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      OT evaluation level reviewed independently of PT evaluation — separate complexity criteria apply. Hand therapy codes reviewed against operative note or prescription. Co-treatment sessions flagged for billing coordination.
                    </p>
                    <div className="pt-3 border-t border-neutral-200/60 flex flex-wrap gap-1.5 matches-cpts">
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97165</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97166</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97167</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97760</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97761</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">97530</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'st' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div>
                    <h4 className="font-display font-bold text-navy text-lg mb-4">Speech-Language Pathology (ST) Common Pitfalls</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Incorrect evaluation vs. treatment code selection for dysphagia, aphasia, and fluency disorders.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Medicare coverage criteria for swallowing evaluation (92610) vs. modified barium swallow study (92611 — facility billed).</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Pediatric vs. adult payer rule differences for language delay services.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Cognitive communication disorders clinical necessity omissions.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#FAF6F0] p-6 rounded-xl border border-amber-200/50 space-y-4">
                    <h5 className="text-[13px] font-bold text-navy uppercase tracking-wider font-mono">Our ST Solution Workflow</h5>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      SLP-aware coders apply CMS coverage criteria for each condition category. Swallowing evaluation billing differentiated by setting (clinical vs. imaging). Pediatric payer rules applied per payer contract. Medical necessity documentation checklist per condition.
                    </p>
                    <div className="pt-3 border-t border-neutral-200/60 flex flex-wrap gap-1.5 matches-cpts">
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">92507</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">92521</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">92522</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">92610</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">92611</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">V57.3</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'rtm' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div>
                    <h4 className="font-display font-bold text-navy text-lg mb-4">RTM — Therapy-Integrated Common Pitfalls</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Billed monthly: 98975 is a ONE-TIME setup code only. Billing it monthly triggers instant audits.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Incorrect supply code selection: mixing 98976 (MSK) with 98977 (respiratory).</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Treatment codes (98980/98981) billed without documented interactive communication matching time logs.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Enrolling commercial patients before state-level program coverage checks occur.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#FAF6F0] p-6 rounded-xl border border-amber-200/50 space-y-4">
                    <h5 className="text-[13px] font-bold text-navy uppercase tracking-wider font-mono">Our RTM Solution Workflow</h5>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Full RTM compliance workflow managed in parallel with traditional therapy billing. 98975 tracking per device type — one-time only. 16-day transmission threshold confirmed before 98976/98977 submission. Interactive communication documented before 98980/98981 billed. Payer coverage verified before RTM enrollment for commercial patients.
                    </p>
                    <div className="pt-3 border-t border-neutral-200/60 flex flex-wrap gap-1.5 matches-cpts">
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98975</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98976</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98977</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98980</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98981</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">16-day rule</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'chiro' && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                  className="grid md:grid-cols-2 gap-8 items-start"
                >
                  <div>
                    <h4 className="font-display font-bold text-navy text-lg mb-4">Chiropractic &amp; Rehab Common Pitfalls</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Active vs. Maintenance care distinction: Medicare does not cover routine maintenance chiropractic sessions.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Spinal manipulation code selection (98940–98942) based on spinal region tracking errors.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Medicare frequency limits reached without appropriate ABN notification execution.</p>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#E24B4A] font-bold shrink-0 mt-0.5">•</span>
                        <p className="text-xs text-neutral-600">Billing E/M visits alongside manipulations without diagnostic distinction or modifier -25.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#FAF6F0] p-6 rounded-xl border border-amber-200/50 space-y-4">
                    <h5 className="text-[13px] font-bold text-navy uppercase tracking-wider font-mono">Our Chiropractic Workflows</h5>
                    <p className="text-xs text-neutral-700 leading-relaxed">
                      Active vs. maintenance status tracked per patient per visit — ABN workflow triggered when maintenance care begins. Spinal manipulation code selected based on documented region count. E/M visit billing reviewed for -25 modifier eligibility and distinct diagnosis documentation.
                    </p>
                    <div className="pt-3 border-t border-neutral-200/60 flex flex-wrap gap-1.5 matches-cpts">
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98940</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98941</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98942</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">98943</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">-25 modifier</span>
                      <span className="text-[9px] font-mono font-bold bg-[#185FA5]/10 text-[#185FA5] px-2 py-0.5 rounded">ABN workflow</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 8 — RTM CPT CODE REFERENCE (Light blue tint bg-[#F0F7FB], distinct compliance reference signal) */}
      <section className="bg-[#EEF7FC] py-20 lg:py-28 text-left border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1">
              RTM CPT REFERENCE CODEBOOK
            </span>
            <div className="h-[2px] w-8 bg-[#185FA5] mx-auto mb-5" />
            
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              The RTM Billing Rules Every Therapy Practice Needs to Know
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 leading-relaxed font-sans">
              RTM billing compliance errors are costly and auditable. Here&apos;s the complete reference for how each code works — and the rules Clientele enforces on every claim.
            </p>
          </div>

          {/* Code reference cards (5 Cards) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            
            {/* Card 98975 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100/80 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow font-sans">
              <div>
                <span className="text-2xl font-black font-display text-[#185FA5] block">98975</span>
                <span className="text-[10px] font-mono font-bold block bg-blue-100/50 text-[#185FA5] px-1.5 py-0.5 rounded w-fit mt-1">Initial Setup &amp; Ed</span>
                
                <div className="space-y-2 mt-4 text-[11px] text-neutral-600">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Rate:</span>
                    <span className="font-bold text-navy">~$19–21</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Frequency:</span>
                    <span className="font-bold text-[#E24B4A]">ONE-TIME</span>
                  </div>
                  <p className="border-t border-neutral-100 pt-2 text-[10px] italic leading-relaxed text-neutral-500">
                    <strong>Critical rule:</strong> This code is billed once at enrollment — never again for the same device type. Billing it monthly is the most common RTM compliance error in therapy practices.
                  </p>
                </div>
              </div>
              <div className="bg-[#FAF6F0] p-2.5 rounded-lg border border-amber-100 mt-4 text-[10px] text-amber-900 leading-snug">
                <strong>Control:</strong> Tracked per patient per device type — system prevents re-billing.
              </div>
            </div>

            {/* Card 98976 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100/80 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow font-sans">
              <div>
                <span className="text-2xl font-black font-display text-[#185FA5] block">98976</span>
                <span className="text-[10px] font-mono font-bold block bg-blue-100/50 text-[#185FA5] px-1.5 py-0.5 rounded w-fit mt-1">MSK Device Supply</span>
                
                <div className="space-y-2 mt-4 text-[11px] text-neutral-600">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Rate:</span>
                    <span className="font-bold text-navy">~$55–64</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Frequency:</span>
                    <span className="font-bold text-neutral-700">Monthly</span>
                  </div>
                  <p className="border-t border-neutral-100 pt-2 text-[10px] italic leading-relaxed text-neutral-500">
                    <strong>Critical rule:</strong> Requires 16+ days of device data transmission in the billing period. Cannot be billed for patient-reported data — must be device-generated. For MSK only.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 mt-4 text-[10px] text-[#185FA5] leading-snug">
                <strong>Control:</strong> 16-day threshold confirmed from device data before submission.
              </div>
            </div>

            {/* Card 98977 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100/80 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow font-sans">
              <div>
                <span className="text-2xl font-black font-display text-[#185FA5] block">98977</span>
                <span className="text-[10px] font-mono font-bold block bg-blue-100/50 text-[#185FA5] px-1.5 py-0.5 rounded w-fit mt-1 font-sans">Resp Device Supply</span>
                
                <div className="space-y-2 mt-4 text-[11px] text-neutral-600">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Rate:</span>
                    <span className="font-bold text-navy">~$55–64</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Frequency:</span>
                    <span className="font-bold text-neutral-700">Monthly</span>
                  </div>
                  <p className="border-t border-neutral-100 pt-2 text-[10px] italic leading-relaxed text-neutral-500">
                    <strong>Critical rule:</strong> For respiratory data only (peak flow, spirometry, breath frequency). Cannot be used interchangeably with 98976 — data type must match the code.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 mt-4 text-[10px] text-[#185FA5] leading-snug">
                <strong>Control:</strong> Device data type confirmed before code selection — MSK vs. respiratory verified.
              </div>
            </div>

            {/* Card 98980 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100/80 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow font-sans">
              <div>
                <span className="text-2xl font-black font-display text-[#185FA5] block">98980</span>
                <span className="text-[10px] font-mono font-bold block bg-blue-100/50 text-[#185FA5] px-1.5 py-0.5 rounded w-fit mt-1">Management: First 20m</span>
                
                <div className="space-y-2 mt-4 text-[11px] text-neutral-600">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Rate:</span>
                    <span className="font-bold text-navy">~$50–54</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Frequency:</span>
                    <span className="font-bold text-neutral-700">Monthly</span>
                  </div>
                  <p className="border-t border-neutral-100 pt-2 text-[10px] italic leading-relaxed text-neutral-500">
                    <strong>Critical rule:</strong> Billed by qualified clinical staff under physician direction. Requires documented interactive communication with the patient at least once monthly.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 mt-4 text-[10px] text-[#185FA5] leading-snug">
                <strong>Control:</strong> Interactive communication documentation reviewed before submission.
              </div>
            </div>

            {/* Card 98981 */}
            <div className="bg-white rounded-xl p-5 border border-blue-100/80 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow font-sans">
              <div>
                <span className="text-2xl font-black font-display text-[#185FA5] block">98981</span>
                <span className="text-[10px] font-mono font-bold block bg-blue-100/50 text-[#185FA5] px-1.5 py-0.5 rounded w-fit mt-1">Management: Add&apos;l 20m</span>
                
                <div className="space-y-2 mt-4 text-[11px] text-neutral-600">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Rate:</span>
                    <span className="font-bold text-navy">~$40–44</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Frequency:</span>
                    <span className="font-bold text-neutral-700">Monthly</span>
                  </div>
                  <p className="border-t border-neutral-100 pt-2 text-[10px] italic leading-relaxed text-neutral-500">
                    <strong>Critical rule:</strong> Billed in addition to 98980 for each additional 20-minute block of treatment management time. Total time documented must support units.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 mt-4 text-[10px] text-[#185FA5] leading-snug">
                <strong>Control:</strong> Total documented time reconciled against units billed before submission.
              </div>
            </div>

          </div>

          {/* Compliance Advisory Callouts Box */}
          <div className="grid md:grid-cols-2 gap-6 pt-2 font-sans select-none text-left">
            <div className="bg-white/65 p-6 rounded-2xl border border-blue-100">
              <h5 className="font-bold text-navy text-sm mb-2 flex items-center gap-2">
                <AlertTriangle className="size-4 text-amber-500 shrink-0" />
                Commercial Payer Coverage Rules
              </h5>
              <p className="text-[11px] md:text-xs text-neutral-650 leading-relaxed">
                Medicare provides full RTM coverage. Medicaid varies by state. Commercial payers are still evolving — coverage must be verified before enrolling each patient. <strong>Clientele verifies commercial RTM coverage before RTM billing begins for every new patient.</strong>
              </p>
            </div>

            <div className="bg-white/65 p-6 rounded-2xl border border-blue-100">
              <h5 className="font-bold text-navy text-sm mb-2 flex items-center gap-2">
                <Layers className="size-4 text-[#185FA5] shrink-0" />
                RTM + RPM Stacking Strategy
              </h5>
              <p className="text-[11px] md:text-xs text-neutral-650 leading-relaxed">
                CMS allows RTM and RPM billing in the same month for the same patient when different data types are being monitored. Example: post-surgical orthopedic patient with hypertension — RPM for blood pressure monitoring + RTM for MSK exercise and ROM tracking. Both are billable. <strong>Clientele reviews every eligible patient for stacking opportunity.</strong>
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9 — PERFORMANCE PROOF + TESTIMONIAL (Light warm gray bg-[#F2F0EC]) */}
      <section className="bg-[#F2F0EC] py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#1D9E75] font-bold block mb-1 font-mono">
              Performance Proof
            </span>
            <div className="h-[2px] w-8 bg-[#1D9E75] mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              What Therapy Practices See After Switching to Clientele
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch font-sans">
            
            {/* Stat Cards - Grid on Left (4 stats inline) */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black font-display text-navy block">99%</span>
                  <p className="text-xs font-bold text-[#1D9E75] uppercase font-mono tracking-wider mt-1">Clean claim rate</p>
                </div>
                <p className="text-[11px] text-neutral-500 mt-4 leading-relaxed">Systematic clearing-house passing vs. industry average of 85–90%.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black font-display text-navy block">98%</span>
                  <p className="text-xs font-bold text-[#1D9E75] uppercase font-mono tracking-wider mt-1">First-pass resolution</p>
                </div>
                <p className="text-[11px] text-neutral-500 mt-4 leading-relaxed">Fewer complex rejections requiring intensive post-facto coder overrides.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black font-display text-navy block">32-day</span>
                  <p className="text-xs font-bold text-[#1D9E75] uppercase font-mono tracking-wider mt-1">Average A/R Window</p>
                </div>
                <p className="text-[11px] text-neutral-500 mt-4 leading-relaxed">Accelerated reimbursement timeline resulting in healthier clinical payroll flow.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-neutral-200/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-bold font-display text-navy block font-sans">Coordinated</span>
                  </div>
                  <p className="text-xs font-bold text-[#185FA5] uppercase font-mono tracking-wider mt-1">RTM + Therapy managed</p>
                </div>
                <p className="text-[11px] text-neutral-500 mt-4 leading-relaxed">Most billing companies can&apos;t manage both — we handle them in parallel seamlessly.</p>
              </div>

            </div>

            {/* Testimonials - Two vertically stacked on the Right */}
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              
              {/* Testimonial card 1 */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/60 shadow-xs flex-1 flex flex-col justify-between border-l-4 border-teal">
                <p className="text-xs sm:text-[13px] text-neutral-600 font-sans italic leading-relaxed">
                  &quot;We&apos;d been trying to layer RTM billing onto our existing therapy claims for months. Our old biller had no protocol for it — 98975 was getting billed monthly, which is wrong, and we had no documentation trail for the interactive communication requirement. Clientele cleaned it up in the first week and built a process that runs automatically now.&quot;
                </p>
                <div className="pt-4 border-t border-neutral-100 mt-4">
                  <p className="text-xs font-bold text-navy">Director of Rehabilitation Services</p>
                  <p className="text-[10px] text-neutral-400 font-mono">Multi-Specialty Practice · New Jersey</p>
                </div>
              </div>

              {/* Testimonial card 2 (KX therapy cap specific) */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/60 shadow-xs flex-1 flex flex-col justify-between border-l-4 border-[#185FA5]">
                <p className="text-xs sm:text-[13px] text-neutral-600 font-sans italic leading-relaxed">
                  &quot;The KX modifier issue alone was costing us thousands a month. Patients were hitting the therapy cap and claims were denying because the modifier wasn&apos;t being applied. Clientele tracks cap status per patient — the KX goes on automatically when it&apos;s needed.&quot;
                </p>
                <div className="pt-4 border-t border-neutral-100 mt-4 font-sans">
                  <p className="text-xs font-bold text-navy">Practice Manager</p>
                  <p className="text-[10px] text-neutral-400 font-mono">Outpatient Physical Therapy Group · Michigan</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 10 — SERVICE NAVIGATION CROSS-LINKS (White) */}
      <section className="bg-white py-16 lg:py-24 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-1 text-center">
            Related Specialists
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy leading-tight mb-12 text-center">
            Explore Other Specialties We Serve
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            
            {/* Card 1 - Orthopedics */}
            <div className="border border-neutral-200 rounded-xl p-5 hover:border-teal hover:shadow-sm transition-all bg-white flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base">Orthopedic RCM</h4>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  Advanced modifiers, surgical bundle exclusions, joint revisions, and automated pre-auth pipelines.
                </p>
              </div>
              <a 
                href="/specialties/orthopedics" 
                onClick={(e) => handleLinkClick(e, '/specialties/orthopedics')}
                className="text-xs font-bold text-teal mt-4 flex items-center gap-1 select-none hover:gap-2 transition-all cursor-pointer"
              >
                Explore Orthopedic RCM <ArrowRight className="size-3.5" />
              </a>
            </div>

            {/* Card 2 - Pain management */}
            <div className="border border-neutral-200 rounded-xl p-5 hover:border-teal hover:shadow-sm transition-all bg-white flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base">Pain Management RCM</h4>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  Navigating image guides, drug tests, and multi-session blocks cleanly.
                </p>
              </div>
              <a 
                href="/specialties/pain-management" 
                onClick={(e) => handleLinkClick(e, '/specialties/pain-management')}
                className="text-xs font-bold text-teal mt-4 flex items-center gap-1 select-none hover:gap-2 transition-all cursor-pointer"
              >
                Explore Pain Management <ArrowRight className="size-3.5" />
              </a>
            </div>

            {/* Card 3 - Anesthesia */}
            <div className="border border-neutral-200 rounded-xl p-5 hover:border-teal hover:shadow-sm transition-all bg-white flex flex-col justify-between">
              <div>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base">Anesthesia Billing</h4>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  Time-unit algorithms, ASA crosswalk accuracy, and concurrency models.
                </p>
              </div>
              <a 
                href="/specialties/anesthesia" 
                onClick={(e) => handleLinkClick(e, '/specialties/anesthesia')}
                className="text-xs font-bold text-teal mt-4 flex items-center gap-1 select-none hover:gap-2 transition-all cursor-pointer"
              >
                Explore Anesthesia <ArrowRight className="size-3.5" />
              </a>
            </div>

            {/* Card 4 - Chiropractic & Rehab */}
            <div className="border border-[#185FA5]/30 rounded-xl p-5 hover:border-[#185FA5] hover:shadow-sm transition-all bg-[#185FA5]/5 flex flex-col justify-between border-t-2">
              <div>
                <h4 className="font-display font-bold text-navy text-[15px] sm:text-base">Chiropractic &amp; Rehab</h4>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  Focused care limits, spinal region matrices, and active treatment compliance.
                </p>
              </div>
              <button 
                onClick={() => {
                  setActiveTab('chiro');
                  const el = document.getElementById('Discipline Tabs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-bold text-[#185FA5] mt-4 flex items-center gap-1 select-none hover:gap-2 transition-all cursor-pointer text-left w-fit"
              >
                See Depth Specifications <ArrowRight className="size-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 11 — FOOTER CTA BAND (Dark Navy) */}
      <section id="assessment" className="bg-[#0A1628] text-white py-16 lg:py-24 text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white mb-4">
            Ready to Get Every Therapy Compliance Layer Under Control?
          </h2>
          
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Request a free therapy billing assessment. We&apos;ll review your current RTM billing setup, G-code compliance, therapy cap management, and denial patterns — and show you exactly what&apos;s costing you revenue.
          </p>
          
          <div className="flex justify-center flex-wrap gap-4 select-none">
            {/* Inline contact route drive instead of open forms block */}
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center"
            >
              Request a Free Therapy Billing Assessment →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
