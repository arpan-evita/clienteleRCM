import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  Lock, 
  CheckCircle, 
  Award, 
  Globe, 
  ChevronRight, 
  ArrowRight, 
  AlertTriangle, 
  Users, 
  Activity, 
  Server, 
  FileText, 
  HelpCircle, 
  Check, 
  Clock, 
  UserCheck, 
  Database, 
  RefreshCw,
  Sparkles,
  Search,
  Settings,
  Flame,
  ChevronDown,
  FileCheck
} from 'lucide-react';

interface TransitionProps {
  navigate: (path: string) => void;
}

export default function Transition({ navigate }: TransitionProps) {
  // Local state for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll to active timeline target
  const scrollToTimeline = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('timeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to contact/assessment
  const handleConsultationClick = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('assessment');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // EMR chips configuration (all 11 referenced by name)
  const emrSystems = [
    'eClinicalWorks',
    'Meditech',
    'Medisoft',
    'Allscripts-Veradigm',
    'Practice Fusion (Tebra)',
    'Office Ally',
    'AdvancedMD',
    'Cerner',
    'GE Centricity',
    'ModMed',
    'ChartPerfect'
  ];

  const fearCards = [
    {
      title: "We'll lose revenue during the switch.",
      desc: "A parallel run period ensures we operate alongside your existing system before taking full ownership — no revenue gap, no claims dropped mid-cycle."
    },
    {
      title: "What happens to our in-flight claims?",
      desc: "We conduct a complete A/R audit at intake. All open claims, pending authorizations, and A/R aging items are documented and handed off without interruption."
    },
    {
      title: "Our staff won't have time to train a new team.",
      desc: "Your team's time investment is less than 3 hours total across the 30-day onboarding. We do the heavy lifting — your staff keeps doing their job."
    },
    {
      title: "Our EMR is too complex to migrate.",
      desc: "We've integrated with 11 EMR systems — including eClinicalWorks, Cerner, ModMed, and AdvancedMD. Chances are we've done this before. Exact same system."
    }
  ];

  const steps = [
    {
      id: "Step 01",
      phase: "ASSESS",
      title: "Discovery & Audit",
      time: "Week 1",
      desc: "We audit your current billing workflows, denial patterns, payer mix, open A/R, and pending authorizations. No assumptions — only your data."
    },
    {
      id: "Step 02",
      phase: "CONFIGURE",
      title: "Build & Configure",
      time: "Week 2",
      desc: "Services and Clientele AI modules configured for your specialty, payers, and EMR. Coder team assigned. Workflows mapped. Credentials set up."
    },
    {
      id: "Step 03",
      phase: "DEPLOY",
      title: "Integration & Parallel Run",
      time: "Week 3",
      desc: "We run alongside your existing system. EMR integration completed. Claims tested. Staff brief completed. Zero disruption to your workflows."
    },
    {
      id: "Step 04",
      phase: "OPTIMIZE",
      title: "Full Go-Live & Oversight",
      time: "Week 4+",
      desc: "Your dedicated RCM team takes ownership. Real-time dashboards live. Weekly performance check-ins for the first 60 days post-launch."
    }
  ];

  const weeksTimeline = [
    {
      week: "Week 1",
      title: "Discovery & Audit",
      items: [
        "Full A/R aging review — open claims catalogued by payer and age",
        "Payer mix analysis — ERA enrollment status, fee schedule review",
        "Denial pattern audit — top denial codes from prior 90 days",
        "Pending authorization inventory — all open auth requests transferred",
        "EMR access and credentialing initiated"
      ]
    },
    {
      week: "Week 2",
      title: "Configuration",
      items: [
        "Specialty coder team assigned and briefed on your payer mix",
        "Clientele AI eligibility module configured for your patient population",
        "Custom claim scrubbing rules set per specialty and top payers",
        "Authorization tracking workflow built for your procedure mix",
        "Denial management protocol established based on Week 1 audit findings"
      ]
    },
    {
      week: "Week 3",
      title: "Integration, Testing & Training",
      items: [
        "EMR integration completed and tested — first claims submitted in parallel",
        "ERA and EFT enrollment confirmed with all payers",
        "Staff brief (under 2 hours) — communication protocol, escalation path, reporting access",
        "In-flight claims fully transferred with no gaps in submission or follow-up",
        "First dashboard access granted to practice leadership"
      ]
    },
    {
      week: "Week 4+",
      title: "Full Go-Live",
      items: [
        "Full billing ownership transferred — previous vendor fully offboarded",
        "Weekly check-in calls for first 60 days post-go-live",
        "First performance report delivered at 30-day mark",
        "Denial patterns and early A/R trends reviewed jointly"
      ]
    }
  ];

  const inFlightClaimsFlow = [
    { num: "01", title: "Full A/R inventory taken", text: "Every open balance and historical submission is indexed." },
    { num: "02", title: "Claim ownership transferred", text: "Outstanding claim lines assigned to our follow-up teams." },
    { num: "03", title: "Active follow-up begins Week 3", text: "Direct payer contacts commence in parallel with the launch." },
    { num: "04", title: "30-day A/R report issued", text: "Full status update delivered representing recovery velocity." }
  ];

  const faqs = [
    {
      q: "How do you handle the transition if our current vendor is uncooperative?",
      a: "We are highly accustomed to uncooperative outgoing billing companies. We retrieve claims status independently, re-route ERAs immediately with clearinghouses, and run deep system audits on billing registers. You do not need to mediate or manage conflicts with your previous vendor; we take over raw logistics and coordinate every step."
    },
    {
      q: "What if we're mid-authorization cycle on complex procedures during the switch?",
      a: "During Week 1 directory reviews, we map all active and pending prior authorizations. Any complex procedures scheduled within Weeks 3–4 are logged and individually tracked. We bridge communications directly with insurance payers to ensure authorization validity transitions without any clinical or administrative gap."
    },
    {
      q: "Does the 30-day timeline apply to larger, multi-location practices?",
      a: "Yes. For multi-site regional practices or complex medical groups, we plan staggered, parallel timelines, but the core launch cycles typically fit comfortably within a 30-day window. We assign extra credentialing coordinators to process payer enrollments quickly."
    },
    {
      q: "How much time will our staff need to invest during onboarding?",
      a: "Your staff's time investment is extremely minimal — less than 3 hours total across the entire 30-day timeline. This is divided between a 45-minute launch consultation, an hour of system credential handoffs, and under an hour of dashboard briefing in Week 3. We manage all manual data migrations and file validations."
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans select-text">
      
      {/* SECTION 1 — HERO (Dark Navy) */}
      <section className="relative bg-navy text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full text-left">
          {/* Breadcrumb */}
          <div className="text-white/40 text-[11px] uppercase tracking-widest font-mono mb-6 flex items-center gap-2 select-none">
            <span>Home</span>
            <ChevronRight className="size-3 text-white/20" />
            <span className="text-teal font-medium">Transition &amp; Onboarding</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left aligned content block (55-60%) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal mb-6 w-fit select-none">
                <Clock className="size-3.5" /> 30-Day Guaranteed Go-Live
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.10] tracking-tight text-white mb-6">
                From Signed Contract<br />
                to Full Go-Live<br />
                <span className="text-teal italic font-semibold">in 30 Days.</span>
              </h1>
              
              <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Specialty-focused RCM for Orthopedics, Pain Management, Anesthesia, Comprehensive Therapy &amp; Multispecialties, with human-guided automation that reduces denials, accelerates cash flow, and never leaves compliance to chance.
              </p>
              
              {/* CTA Block */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
                <button
                  onClick={handleConsultationClick}
                  className="rounded-full bg-teal text-navy px-6 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2"
                >
                  Schedule a Transition Consultation →
                </button>
                <a
                  href="#timeline"
                  onClick={scrollToTimeline}
                  className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center"
                >
                  See the 30-Day Timeline
                </a>
              </div>

              {/* Trust micro-copy */}
              <div className="text-white/40 text-xs mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 font-mono">
                <span className="flex items-center gap-1">🔒 No revenue gap during switchover</span>
                <span>•</span>
                <span className="flex items-center gap-1">💻 Works with all 11 EMR systems</span>
                <span>•</span>
                <span className="flex items-center gap-1">📂 HIPAA-compliant data migration</span>
              </div>
            </div>
            
            {/* Right side element: Stat Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              
              {/* Stat 1 */}
              <div className="bg-navy-deep/60 p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-teal/30 transition-all backdrop-blur-sm">
                <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                  <Clock className="size-5" />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-2xl text-white">30 Days</div>
                  <div className="text-xs font-semibold text-teal uppercase tracking-wide mt-0.5">From contract to full go-live</div>
                  <p className="text-xs text-white/50 mt-1">Including parallel run — ensuring no revenue is compromised and no claim slides backward.</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-navy-deep/60 p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-teal/30 transition-all backdrop-blur-sm">
                <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                  <Server className="size-5" />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-2xl text-white">11+</div>
                  <div className="text-xs font-semibold text-teal uppercase tracking-wide mt-0.5">EMR systems fully supported</div>
                  <p className="text-xs text-white/50 mt-1">No rip-and-replace. We integrate and run with what you already have in production.</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-navy-deep/60 p-6 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-teal/30 transition-all backdrop-blur-sm">
                <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                  <Users className="size-5" />
                </div>
                <div className="text-left">
                  <div className="font-display font-bold text-2xl text-white">1 Assigned</div>
                  <div className="text-xs font-semibold text-teal uppercase tracking-wide mt-0.5">Dedicated transition manager</div>
                  <p className="text-xs text-white/50 mt-1">A single, dedicated expert contact point overseeing your parallel run from launch to audit metrics.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 — THE FEAR SECTION (Light blue background #F7F9FF) */}
      <section className="relative bg-[#F7F9FF] py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Risk Mitigation</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              The Real Concerns Behind Every RCM Vendor Switch
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 max-w-2xl leading-relaxed">
              We hear the same fears from every practice considering a transition. Here's why they don't apply when switching to Clientele RCM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {fearCards.map((fear, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-neutral-200/80 p-6 md:p-8 flex flex-col justify-between shadow-xs border-l-[4px] border-l-red-500 hover:shadow-sm transition-all">
                <div>
                  <h3 className="font-display font-semibold text-navy text-base md:text-lg mb-3">
                    &ldquo;{fear.title}&rdquo;
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                    {fear.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Answer Callout Card */}
          <div className="p-6 md:p-8 rounded-2xl border-l-[4px] border-teal bg-teal/5 border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <h4 className="text-sm font-semibold text-teal uppercase tracking-wider mb-1">Our Process Answer</h4>
              <p className="font-display font-medium text-navy text-sm md:text-base leading-relaxed">
                Every concern above has a structured answer built into the Clientele Transition Method. This isn't an offboarding problem — it's a process problem. And process is what we do.
              </p>
            </div>
            <button
              onClick={handleConsultationClick}
              className="rounded-full bg-navy hover:bg-navy-deep text-white px-5 py-3 font-bold text-xs shrink-0 cursor-pointer transition-all active:scale-98"
            >
              Analyze Your Current Risk
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE CLIENTELE TRANSITION METHOD (White background) */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">The Clientele Method</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Four Steps. Zero Guesswork.
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Every transition follows the same structured four-phase process — applied to your specialty, your payer mix, and your EMR environment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((st, i) => (
              <div key={i} className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between relative group">
                <span className="absolute top-0 inset-x-0 h-1 bg-neutral-200 group-hover:bg-teal transition-colors rounded-t-2xl"></span>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono text-neutral-400 font-bold tracking-wider">{st.id}</span>
                    <span className="bg-teal/10 text-teal text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {st.time}
                    </span>
                  </div>

                  <h3 className="text-navy font-display font-bold text-base md:text-lg mb-1">{st.title}</h3>
                  <p className="text-[10px] text-teal font-bold uppercase tracking-wider mb-3">{st.phase}</p>
                  
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WEEK-BY-WEEK TIMELINE (Light Blue background #F7F9FF) */}
      <section id="timeline" className="bg-[#F7F9FF] py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Task Timelines</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Week by Week — Exactly What Happens
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 max-w-2xl leading-relaxed">
              No vague promises. Here's reference documentation showing the exact sequence of every transition activity and who owns it.
            </p>
          </div>

          <div className="relative border-l-2 border-neutral-200/80 ml-4 pl-8 space-y-12 py-4">
            {weeksTimeline.map((wk, idx) => (
              <div key={idx} className="relative group">
                {/* Visual Circle Marker on line */}
                <div className="absolute -left-[41px] top-1.5 size-6 rounded-full border-4 border-[#F7F9FF] bg-teal flex items-center justify-center text-navy text-[10px] font-bold group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>

                <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 md:p-8 hover:shadow-sm transition-all max-w-4xl text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-100 mb-5">
                    <h3 className="font-display text-navy font-bold text-lg md:text-xl">
                      {wk.week} — {wk.title}
                    </h3>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-teal p-1.5 bg-teal/5 border border-teal/10 rounded-lg">
                      Guaranteed Completion
                    </span>
                  </div>

                  <ul className="space-y-3.5">
                    {wk.items.map((it, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 leading-relaxed">
                        <span className="size-4.5 rounded-full bg-teal/5 text-teal flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3" />
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — THE PARALLEL RUN (White background) */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Risk Avoidance Strategy</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              The Parallel Run: How We Ensure Zero Claims Disruption
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              In Week 3, Clientele runs billing in parallel alongside your existing vendor before taking full ownership. Here's how that protects you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch pt-4">
            
            {/* Left Box: Without Parallel Run */}
            <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-1 bg-red-100 text-red-800 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-4">
                  Without a Parallel Run (Traditional Switchover)
                </span>
                <h3 className="font-display text-navy font-semibold text-lg mb-4">The Standard Vendor Risk Gap</h3>
                
                <ul className="space-y-3.5">
                  {[
                    "Claims fall directly into vendor switchover gap",
                    "Authorizations lapse mid-cycle with zero checks",
                    "Payer clearinghouse ERA re-routing configuration confusion",
                    "Outstanding A/R orphaned and written off quickly",
                    "Unavoidable 20-35% revenue dip during months 1-2"
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-500">
                      <span className="size-4.5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-[11px] font-mono text-red-600/70">
                ⚠️ Exposed to immediate liquidity and operational stress.
              </div>
            </div>

            {/* Right Box: With Clientele Parallel Run */}
            <div className="bg-[#EFFFFA] rounded-2xl border border-teal/20 p-6 md:p-8 flex flex-col justify-between shadow-sm border-t-[4px] border-t-teal relative">
              <div>
                <span className="inline-flex items-center gap-1 bg-teal/10 border border-teal/20 text-teal text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-4 animate-pulse">
                  With The Clientele Parallel Run (Protected)
                </span>
                <h3 className="font-display text-navy font-bold text-lg mb-4">The Clientele Safe Bridge</h3>
                
                <ul className="space-y-3.5">
                  {[
                    "All active & in-flight claims catalogued and tracked",
                    "Prior authorizations transferred claim by claim in active files",
                    "Payer ERA and EFT re-routing validated and confirmed",
                    "Historical A/R formally handed off with full follow-up tracking",
                    "Strict zero revenue interruption during live service flipover"
                  ].map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <span className="size-4.5 rounded-full bg-teal-glow text-navy flex items-center justify-center shrink-0 mt-0.5">✓</span>
                      <span className="font-medium">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 text-[11px] font-mono text-teal font-bold uppercase tracking-wider">
                🛡️ Verified 100% Cash Flow Continuity Guarantee
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6 — IN-FLIGHT CLAIMS PROTOCOL (Light Blue background #F7F9FF) */}
      <section className="bg-[#F7F9FF] py-20 lg:py-28 text-left border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Continuity Protocol</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              What Happens to Your Open Claims During the Transition?
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              A comprehensive A/R handover workflow guarantees no claim file is abandoned during transition weeks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
            {inFlightClaimsFlow.map((flow, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-neutral-200/80 p-6 flex flex-col justify-between shadow-xs relative">
                <div>
                  <span className="text-2xl font-display font-black text-teal/20 block mb-2">{flow.num}</span>
                  <h3 className="font-semibold text-navy text-sm md:text-base mb-2">{flow.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {flow.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — DEDICATED TRANSITION MANAGER (Dark Navy) */}
      <section className="relative bg-[#0A1628] text-white py-24 lg:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Commitments SLA Box */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold block mb-1">Human Accountability</span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-4">
                One Name. One Number.<br />Every Step of the Way.
              </h2>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6">
                You're assigned a dedicated transition manager from day one of your contract — not a ticketing system, not a rotating support pool of generalists. One named resource who knows your practice, your payer mix, and your history.
              </p>

              {/* SLA Box Container */}
              <div className="bg-navy-deep/60 p-6 rounded-2xl border border-white/10 space-y-4 backdrop-blur-sm/85 text-left">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-white/40 block">Guaranteed Transition SLAs</span>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="size-4.5 rounded-full bg-teal/20 text-teal flex items-center justify-center shrink-0 mt-0.5">⏱</span>
                    <span><strong>4-Hour Response Guarantee:</strong> Responds to all inquiries within 4 business hours directly via personal phone or secure console.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="size-4.5 rounded-full bg-teal/20 text-teal flex items-center justify-center shrink-0 mt-0.5">📅</span>
                    <span><strong>Weekly Performance Calls:</strong> Live, recurring briefings detailing checkpoint metrics for the first 60 days post-go-live.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="size-4.5 rounded-full bg-teal/20 text-teal flex items-center justify-center shrink-0 mt-0.5">🎯</span>
                    <span><strong>Direct Access Pathway:</strong> No routing through generic ticketing systems or support queues. Straight to your manager.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs text-white/90">
                    <span className="size-4.5 rounded-full bg-teal/20 text-teal flex items-center justify-center shrink-0 mt-0.5">🛡</span>
                    <span><strong>Senior Escalation Path:</strong> Direct, unbuffered bridge to a senior RCM director if any complex go-live queries emerge.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Card Handles Card */}
            <div className="lg:col-span-6">
              <div className="bg-navy-deep/40 p-6 md:p-8 rounded-2xl border border-white/10 text-left">
                <h3 className="font-display font-semibold text-white text-base md:text-lg mb-6 pb-4 border-b border-white/5 flex items-center gap-2">
                  <UserCheck className="size-5 text-teal" /> What your transition manager handles:
                </h3>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 text-xs text-white/80">
                  <li className="space-y-1">
                    <div className="font-semibold text-teal flex items-center gap-1.5">
                      <div className="size-1.5 bg-teal rounded-full"></div> Credential Coordinates
                    </div>
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      Coordinates EMR access and credentialing structures securely across teams.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-teal flex items-center gap-1.5">
                      <div className="size-1.5 bg-teal rounded-full"></div> Vendor Outreach
                    </div>
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      Liaises with outgoing billing vendors directly for professional A/R handoffs.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-teal flex items-center gap-1.5">
                      <div className="size-1.5 bg-teal rounded-full"></div> Front Office Briefing
                    </div>
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      Briefs your front office staff on workflows in under 2 hours total time.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-teal flex items-center gap-1.5">
                      <div className="size-1.5 bg-teal rounded-full"></div> ERA/EFT Routing
                    </div>
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      Tracks payer ERA/EFT re-enrollment status and validates clean re-routing.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-teal flex items-center gap-1.5">
                      <div className="size-1.5 bg-teal rounded-full"></div> Performance Reviews
                    </div>
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      Delivers comprehensive, metrics-backed first 30/60-day performance reviews.
                    </p>
                  </li>

                  <li className="space-y-1">
                    <div className="font-semibold text-teal flex items-center gap-1.5">
                      <div className="size-1.5 bg-teal rounded-full"></div> Incident Response
                    </div>
                    <p className="text-white/50 text-[11px] leading-relaxed">
                      Manages active escalation and immediate remediation for any go-live issues.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8 — EMR INTEGRATIONS (White background) */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">System Integrations</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Works With the EMR You Already Use
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              No rip-and-replace. Clientele RCM integrates directly with 11+ leading EMR and practice management platforms. If you're already using it, we've likely worked with it.
            </p>
          </div>

          {/* Static Chips Grid */}
          <div className="flex flex-wrap justify-center gap-3.5 max-w-4xl mx-auto mb-10">
            {emrSystems.map((emr, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-[#F8F9FA] px-4 py-2.5 text-xs font-semibold text-navy shadow-xs select-none"
              >
                <div className="size-1.5 bg-teal rounded-full"></div>
                {emr}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-teal/20 bg-teal/5 px-4 py-2.5 text-xs font-bold text-teal select-none">
              + More
            </span>
          </div>

          <div className="text-center text-xs text-neutral-400 font-medium">
            &ldquo;Don't see your EMR? <button onClick={() => alert('We support dozens of regional and specialty-specific systems. Feel free to request an integration review with our engineers during call onboarding.')} className="text-teal hover:underline font-bold bg-transparent border-0 p-0 cursor-pointer">Ask us</button> — we've likely worked with it.&rdquo;
          </div>
        </div>
      </section>

      {/* SECTION 9 — TESTIMONIALS (Light warm gray) */}
      <section className="bg-[#F6F7F9] py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Practice Experiences</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              What Practices Say After the First Year
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Honest validation of real transition outcomes from clinical administrators who navigated switchovers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 md:p-8 flex flex-col justify-between shadow-xs border-l-[3px] border-l-teal">
              <div>
                <div className="flex text-amber-500 gap-1 mb-4 select-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="font-display italic text-neutral-700 text-xs md:text-sm leading-relaxed mb-6">
                  &ldquo;We'd been burned by a vendor transition before — revenue dropped for two months. With Clientele, Week 4 looked cleaner than anything we saw in the previous quarter. The parallel run was the difference.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 text-[11px] uppercase tracking-wider text-teal font-bold font-mono">
                Practice Administrator · Orthopedic Surgery Group · Michigan
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 md:p-8 flex flex-col justify-between shadow-xs border-l-[3px] border-l-teal">
              <div>
                <div className="flex text-amber-500 gap-1 mb-4 select-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <p className="font-display italic text-neutral-700 text-xs md:text-sm leading-relaxed mb-6">
                  &ldquo;The transition manager knew our payer mix before our first call was over. We had one point of contact, one escalation path, and for the first time in years, a billing team that felt like an extension of our staff.&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 text-[11px] uppercase tracking-wider text-teal font-bold font-mono">
                Director of Operations · Multi-Location Pain Management Practice · Florida
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 10 — FAQ ACCORDION (White background) */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Frequently Asked Questions</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Transition Logistics FAQ
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Frequently audited logistics questions answered factually.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-neutral-200 rounded-xl overflow-hidden bg-white transition-all">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-display text-navy font-semibold text-xs md:text-sm hover:bg-neutral-50 transition-colors select-none cursor-pointer outline-none border-0"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`size-4 text-neutral-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-neutral-500 leading-relaxed border-t border-neutral-100 bg-neutral-50/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FOOTER CTA BAND (Dark Navy) */}
      <section className="relative bg-[#0A1628] text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 mesh-glow opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
            Ready to Switch Without the Risk?
          </h2>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Schedule a 30-minute transition consultation. We'll walk you through exactly what the onboarding process looks like for your specialty, payer mix, and EMR environment — at no cost, no obligation.
          </p>
          
          <button
            onClick={handleConsultationClick}
            className="rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 shadow-glow cursor-pointer"
          >
            Schedule a Transition Consultation →
          </button>
        </div>
      </section>

    </div>
  );
}
