import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, ShieldCheck, Award, Lock, ArrowRight, Bone, Activity, Wind, 
  HeartPulse, Plus, Star, ChevronDown, CheckCircle, Brain, Calendar, Info, Users, ArrowUpRight
} from 'lucide-react';

interface HomeProps {
  navigate: (path: string) => void;
}

// Simple CountUp animation helper using standard React hooks
function CountUp({ end, suffix = '', duration = 1200, stepSize = 1 }: { end: number; suffix?: string; duration?: number; stepSize?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <div ref={elementRef}>{count.toLocaleString()}{suffix}</div>;
}

export default function Home({ navigate }: HomeProps) {
  // Specialties Tabs
  const [activeSpecialty, setActiveSpecialty] = useState('Orthopedics');

  const specialties = [
    { id: 'Orthopedics', icon: Bone, label: 'Orthopedics' },
    { id: 'Pain Management', icon: Activity, label: 'Pain Management' },
    { id: 'Anesthesia', icon: Wind, label: 'Anesthesia' },
    { id: 'Therapy (PT/OT)', icon: HeartPulse, label: 'Therapy (PT/OT)' },
    { id: 'Chiropractic', icon: Users, label: 'Chiropractic & Rehab' },
  ];

  const specialtyDetails: Record<string, { challenges: string[]; solution: string; stat: string; statLabel: string }> = {
    'Orthopedics': {
      challenges: [
        'Medical documentation gaps leading to claim downgrades',
        'Bundling and bilateral procedure coding errors',
        'PCP referral and prior authorization failures'
      ],
      solution: 'Specialty coders with 5–12+ years of orthopedic billing experience manage your documentation review, modifier application, and auth workflows — before a claim ever touches the clearinghouse.',
      stat: '5–12+ yrs',
      statLabel: 'Coder ortho experience'
    },
    'Pain Management': {
      challenges: [
        'Frequent changes in local coverage determinations (LCDs) for injections',
        'Complex bundling of fluorographic guidance and therapeutic agents',
        'High rate of post-payment audits by commercial payers'
      ],
      solution: 'Our dedicated pain management team uses real-time LCD checks embedded block in Clientele AI and manual billing audits to prevent improper coding selections.',
      stat: '98.4%',
      statLabel: 'Interventional Pain Claim Acceptance'
    },
    'Anesthesia': {
      challenges: [
        'Inaccurate concurrency and physical status modifier reporting',
        'Unrecorded line placements (arterial, central) and block times',
        'Payer-defined base unit variances that lead to payment delays'
      ],
      solution: 'Anesthesia specific cross-walk coding and electronic time capturing to ensure every unit is billed, including qualifying medical direction states.',
      stat: '< 1%',
      statLabel: 'Base Unit Recoding Rate'
    },
    'Therapy (PT/OT)': {
      challenges: [
        'Medicare cap limitations and G-code reporting requirements',
        'Over-utilization flags and documentation of medical necessity',
        'Poor unit audit tracking leading to retrospective recoupment'
      ],
      solution: 'Automated 8-minute rule calculations and pre-billing checklist validation embedded directly in physical and occupational therapy workflows.',
      stat: '99.5%',
      statLabel: '8-Min Rule Compliance'
    },
    'Chiropractic': {
      challenges: [
        'Strict regional medical necessity guidelines on spinal manipulations',
        'Inaccurate manual therapy and modal unit pairings',
        'High denial rates due to wellness vs. active care documentation disputes'
      ],
      solution: 'Rigorous pre-submission validation of diagnosis pairing and daily treatment ledger review by certified chiropractic coding specialists.',
      stat: '< 18',
      statLabel: 'Average A/R Days post transition'
    }
  };

  // Calculator State
  const [claimsSubmitted, setClaimsSubmitted] = useState(2000);
  const [averageClaimValue, setAverageClaimValue] = useState(500);
  const [denialRate, setDenialRate] = useState(40);

  // Computed Values
  const deniedClaims = Math.round(claimsSubmitted * (denialRate / 100));
  const revenueAtRisk = deniedClaims * averageClaimValue;
  const estimatedUncollected = Math.round(revenueAtRisk * 0.40);
  const projectedRecovery = Math.round(estimatedUncollected * 0.60);
  const annualGain = projectedRecovery * 12;

  const formatCompactValue = (val: number) => {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(1)}M`;
    }
    if (val >= 1000) {
      return `$${(val / 1000).toFixed(1)}k`;
    }
    return `$${val}`;
  };

  // Lead Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formFields, setFormFields] = useState({
    practiceName: '',
    contactName: '',
    email: '',
    phone: '',
    specialty: 'Orthopedics',
    monthlyVolume: '500-1000',
    emr: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formFields.practiceName && formFields.email && formFields.contactName) {
      setFormSubmitted(true);
    }
  };

  const handleInternalLink = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative bg-hero text-white overflow-hidden min-h-[92svh] flex items-center">
        <div className="absolute inset-0 mesh-glow" aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.06]" aria-hidden="true"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs text-white/85 mb-6 md:mb-8 animate-fade-in">
              <Sparkles className="size-3.5 text-teal" />
              Built on a decade of healthcare billing expertise
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Revenue Integrity, <br />
              Powered by <span className="text-teal font-medium">AI.</span> <br />
              <span className="text-white/90">Proven Across a Decade.</span>
            </h1>
            
            <p className="mt-6 md:mt-8 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
              Specialty-focused RCM for Orthopedics, Pain Management, Anesthesia, Comprehensive Therapy & Multispecialties — with human-guided automation that reduces denials, accelerates cash flow, and never leaves compliance to chance.
            </p>
            
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="#assessment" 
                onClick={(e) => handleInternalLink(e, 'assessment')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal text-navy px-6 py-3.5 font-bold shadow-glow hover:bg-teal-glow transition-all active:scale-98 cursor-pointer text-center"
              >
                Request a Free RCM Assessment
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/platform" 
                onClick={(e) => { e.preventDefault(); navigate('/platform'); }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer text-center"
              >
                See How Clientele AI Works
              </a>
            </div>
            
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-xs text-white/60">
              <span className="flex items-center gap-1.5"><Lock className="size-3.5 text-teal" /> HIPAA Certified</span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5"><Award className="size-3.5 text-teal" /> HBMA Member</span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-teal" /> SOC2 In Progress</span>
              <span className="text-white/20">•</span>
              <span>Founded 2016</span>
            </div>
          </div>

          {/* Right Claims pipeline mock */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[400px] border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-card overflow-hidden">
              <div className="absolute inset-0 grid-noise opacity-[0.03]" aria-hidden="true"></div>
              
              <div className="relative h-full flex flex-col justify-between gap-4">
                <div className="flex items-center justify-between text-xs text-white/60">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-teal animate-pulse"></span> 
                    Clientele AI · Live
                  </span>
                  <span>Claims Pipeline</span>
                </div>

                <div className="flex flex-col gap-3 my-4">
                  {[
                    { label: 'Eligibility Verified', value: '1,284', active: true },
                    { label: 'Coding · AI + Human Review', value: '962', active: true },
                    { label: 'Scrubbing & Submission', value: '947', active: true },
                    { label: 'Payer Adjudication', value: 'Processing', active: false, running: true },
                    { label: 'Payment Posted', value: 'Pending', active: false }
                  ].map((pipe, index) => (
                    <div 
                      key={index}
                      className={`relative rounded-xl border border-white/5 p-3 flex items-center justify-between transition-colors ${
                        pipe.active 
                          ? 'bg-teal/5 border-teal/20 text-white' 
                          : pipe.running
                            ? 'bg-amber/5 border-amber/20 text-white/90'
                            : 'bg-white/[0.01] text-white/55'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`size-7 rounded-md flex items-center justify-center text-xs ${
                          pipe.active 
                            ? 'bg-teal/15 text-teal' 
                            : pipe.running
                              ? 'bg-amber/15 text-amber animate-pulse'
                              : 'bg-white/5 text-white/30'
                        }`}>
                          {pipe.active ? <CheckCircle className="size-4" /> : <Activity className="size-4" />}
                        </div>
                        <span className="text-sm font-medium">{pipe.label}</span>
                      </div>
                      <span className={`font-mono text-xs ${pipe.active ? 'text-teal' : pipe.running ? 'text-amber' : 'text-white/40'}`}>
                        {pipe.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-teal/10 border border-teal/20 p-4 mt-auto">
                  <div className="text-[10px] uppercase tracking-wider text-teal">Today</div>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="font-display text-2xl font-bold text-white">99.1%</span>
                    <span className="text-xs text-white/60">Clean Claim Rate</span>
                  </div>
                </div>

                {/* SVG Pipeline pulse indicator line */}
                <svg className="absolute -left-6 top-1/2 -translate-y-1/2 w-8 h-48 -z-0 pointer-events-none opacity-40 md:opacity-60" viewBox="0 0 32 160" fill="none">
                  <path d="M16 0 V160" stroke="#00bcbd" strokeWidth="1.5" className="flow-line"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS/TRUST BAR */}
      <section className="border-y border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-6 py-5 overflow-x-auto select-none no-scrollbar">
          <div className="flex items-center gap-x-8 gap-y-3 justify-between min-w-max md:min-w-0 md:flex-wrap">
            <div className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
              <CheckCircle className="size-4 text-teal" />
              HIPAA Certified Operations
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
              <Award className="size-4 text-teal" />
              HBMA Member (Healthcare Billing)
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
              <Lock className="size-4 text-teal" />
              SOC2 Type II Compliance Underway
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
              <Calendar className="size-4 text-teal" />
              10 Years of RCM Expertise
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/70 font-medium">
              <Users className="size-4 text-teal" />
              50+ Practices Served Across 7 States
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTDOWN SECTION */}
      <section className="relative bg-background py-20 border-b border-neutral-100">
        <div className="absolute inset-0 grid-noise opacity-15" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">By the numbers</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy">Performance you can audit, not assume.</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200">
            {[
              { label: 'Clean Claim Rate', value: 99, suffix: '.1%', desc: 'Industry average: 85–90%' },
              { label: 'First-Pass Resolution', value: 98, suffix: '.0%', desc: 'Fewer rejections, faster payouts' },
              { label: 'Average A/R Days', value: 18, suffix: ' Days', desc: 'Target: < 25 days post-transition' },
              { label: 'Certified RCM Professionals', value: 30, suffix: '+', desc: 'AAPC-certified coders & billers' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-background p-6 md:p-8 relative">
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-teal opacity-60"></div>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">Metric 0{idx+1}</div>
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-3 font-semibold text-navy/90 text-sm md:text-base">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-relaxed">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES DETAILS TAB SELECTION SECTION */}
      <section id="why" className="bg-neutral-50/50 py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-10 md:mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">Built for your specialty</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy leading-none">RCM Built for High-Complexity Specialties</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Generic billing companies handle your claims as a general queue. We understand your specialty's unique coding nuances, prior auth patterns, and documentation gaps.
            </p>
          </div>

          {/* Specialties Tabs list */}
          <div className="flex flex-wrap gap-2.5 mb-8 border-b border-neutral-200 pb-3 overflow-x-auto select-none no-scrollbar">
            {specialties.map((spec) => {
              const Icon = spec.icon;
              const isActive = activeSpecialty === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => setActiveSpecialty(spec.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-navy text-white shadow-md shadow-navy/10 translate-y-[-1px]' 
                      : 'bg-white text-foreground/75 hover:bg-neutral-50 hover:text-foreground border border-neutral-200'
                  }`}
                >
                  <Icon className="size-4 shrink-0" />
                  {spec.label}
                </button>
              );
            })}
          </div>

          {/* Tab active content layout block */}
          {Object.entries(specialtyDetails).map(([key, data]) => {
            if (activeSpecialty !== key) return null;
            return (
              <div 
                key={key} 
                className="grid lg:grid-cols-12 gap-8 bg-white border border-neutral-200 rounded-3xl p-8 md:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-300"
              >
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-navy mb-5 flex items-center gap-2">
                      <Info className="size-5 text-teal" />
                      Common Billing Challenges
                    </h3>
                    <ul className="space-y-4">
                      {data.challenges.map((chal, i) => (
                        <li key={i} className="flex gap-3 text-neutral-700 text-sm md:text-base leading-relaxed">
                          <span className="mt-2.5 size-1.5 rounded-full bg-teal shrink-0"></span>
                          <span>{chal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-100 flex items-start gap-4">
                    <div>
                      <div className="font-display text-4xl font-bold text-navy">{data.stat}</div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">{data.statLabel}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 lg:border-l lg:pl-10 border-neutral-100 flex flex-col justify-center">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-navy mb-5">How Clientele Handles It</h3>
                  <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                    {data.solution}
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#assessment" 
                      onClick={(e) => handleInternalLink(e, 'assessment')}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-teal/10 hover:bg-teal/20 text-navy font-bold px-5 py-3 text-sm transition-all cursor-pointer text-center"
                    >
                      Audit Your Specialty Claims
                    </a>
                    <a 
                      href="/about" 
                      onClick={(e) => { e.preventDefault(); navigate('/about'); }}
                      className="inline-flex items-center justify-center text-sm font-semibold text-neutral-500 hover:text-navy transition-colors py-3 px-4 block"
                    >
                      Read Specialty Case Studies →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PLATFORM MODULE LISTINGS SECTION */}
      <section id="platform-preview" className="relative bg-navy-deep text-white py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-glow" aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.06]" aria-hidden="true"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/35 px-3 py-1 text-xs font-semibold text-amber-300 mb-6">
              <span className="size-2 rounded-full bg-amber-400 animate-pulse"></span>
              Eligibility Module Live · May 2026
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Clientele AI — Automation that works the way your practice does.
            </h2>
            
            <p className="mt-6 text-white/70 text-sm md:text-base leading-relaxed">
              We're building end-to-end AI automation for the entire revenue cycle — not a bolt-on tool, but a fully integrated platform designed from the ground up for specialty healthcare practices.
            </p>
            
            <div className="mt-8 rounded-2xl border border-teal/20 bg-teal/5 p-5">
              <div className="flex items-center gap-2 text-teal text-xs uppercase tracking-wider font-bold mb-2">
                <Brain className="size-4 shrink-0" />
                Module 1 — Insurance Eligibility Verification
              </div>
              <p className="text-white/85 text-xs md:text-sm leading-relaxed">
                Real-time eligibility checks with automated discrepancy alerts, eliminating eligibility-related denials at the front door. Direct EMR pre-integration.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a 
                href="/platform" 
                onClick={(e) => { e.preventDefault(); navigate('/platform'); }}
                className="inline-flex items-center gap-2 rounded-full bg-teal text-navy px-5 py-3 text-sm font-bold shadow-md hover:bg-teal-glow transition-all"
              >
                Learn More About Clientele AI
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Illustrative Dashboard Mock */}
          <div className="relative">
            <div className="absolute -inset-6 bg-teal/10 blur-3xl rounded-full"></div>
            
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur p-5 md:p-6 shadow-glow">
              <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-red-400"></span>
                  <span className="size-2.5 rounded-full bg-amber-400"></span>
                  <span className="size-2.5 rounded-full bg-teal"></span>
                  <span className="text-xs font-mono text-white/50 pl-2">clientele.ai/dashboard</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Eligibility', val: '99.4%', color: 'text-white' },
                  { label: 'Auth Coverage', val: '97.1%', color: 'text-teal' },
                  { label: 'First-Pass', val: '98.0%', color: 'text-teal' }
                ].map((m, i) => (
                  <div key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-left">
                    <div className="text-[9px] uppercase tracking-wider text-white/40">{m.label}</div>
                    <div className={`font-display text-lg md:text-xl font-bold mt-1 ${m.color}`}>{m.val}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-left">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xs font-semibold text-white/80">Denials by Reason · 30d</div>
                  <span className="text-[10px] font-bold text-teal bg-teal/10 px-2 py-0.5 rounded-full">↓ 38% reduction</span>
                </div>

                {/* Animated bar graph simulation */}
                <div className="flex items-end gap-2.5 h-20 pt-2 px-1">
                  {[89, 72, 60, 48, 30, 24, 18, 12, 11, 8].map((percent, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full group">
                      <div 
                        className={`w-full rounded-t transition-all duration-1000 ${
                          idx < 3 ? 'bg-white/10' : 'bg-teal'
                        }`} 
                        style={{ height: `${percent}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CLIENTELE 4-STEP METHOD SECTION */}
      <section className="bg-background py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">The Clientele Method</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy leading-none">A four-step model. No mystery, no jargon.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Assess', text: 'We conduct a deep-dive audit of your current billing workflows, denial patterns, payer mix, and revenue gaps. No assumptions — only your data.' },
              { num: '02', title: 'Configure', text: 'Our team maps your specialty\'s coding requirements, payer rules, and authorization workflows into the Clientele AI platform and human oversight model.' },
              { num: '03', title: 'Deploy', text: 'Your dedicated RCM team goes live. Clientele AI handles automation, AAPC-certified billing professionals review all complex claims. Zero workflow disruption.' },
              { num: '04', title: 'Optimize', text: 'Real-time dashboards surface denial patterns, A/R aging, and revenue trends. Monthly performance reviews ensure continuous cycle improvement.' }
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col justify-between rounded-2xl bg-neutral-50/50 hover:bg-neutral-50 border border-neutral-200/50 p-6 shadow-sm transition-all hover:translate-y-[-2px]">
                <div className="text-display font-display text-5xl font-bold text-teal/40 mb-6">{step.num}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-2">{step.title}</h3>
                  <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE REVENUE IMPACT CALCULATOR */}
      <section className="bg-neutral-50/70 py-20 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full border border-navy/15 bg-white px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-navy/70">Revenue Calculator</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-4xl text-navy tracking-tight">See what denials are really costing you</h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-lg mx-auto">Move the sliders to model your practice. Numbers update instantly based on healthcare benchmarks.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Range controls inputs */}
            <div className="flex-1 min-w-0 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
              <div className="text-xs font-bold uppercase tracking-[0.08em] text-[#999] mb-6">Your Practice Variables</div>
              
              <div className="space-y-6">
                {/* Monthly Volume */}
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-sm font-semibold text-neutral-800">Monthly claims submitted</span>
                    <span className="text-base font-bold text-navy font-mono">{claimsSubmitted.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="10000" 
                    step="100" 
                    value={claimsSubmitted}
                    onChange={(e) => setClaimsSubmitted(Number(e.target.value))}
                    className="w-full h-1 cursor-pointer appearance-none rounded-full bg-neutral-200 outline-none accent-navy"
                  />
                  <div className="mt-2 text-xs text-neutral-400">Drag to set approximate monthly claim volume</div>
                </div>

                {/* Average Claim Value */}
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-sm font-semibold text-neutral-800">Average claim value</span>
                    <span className="text-base font-bold text-navy font-mono">${averageClaimValue}</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="2000" 
                    step="10" 
                    value={averageClaimValue}
                    onChange={(e) => setAverageClaimValue(Number(e.target.value))}
                    className="w-full h-1 cursor-pointer appearance-none rounded-full bg-neutral-200 outline-none accent-navy"
                  />
                  <div className="mt-2 text-xs text-neutral-400">Primary care ~$100 · Specialties ~$200–$500+</div>
                </div>

                {/* Denial Rate */}
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-sm font-semibold text-neutral-800">Current denial rate</span>
                    <span className="text-base font-bold text-navy font-mono">{denialRate}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="60" 
                    step="1" 
                    value={denialRate}
                    onChange={(e) => setDenialRate(Number(e.target.value))}
                    className="w-full h-1 cursor-pointer appearance-none rounded-full bg-neutral-200 outline-none accent-navy"
                  />
                  <div className="mt-2 text-xs text-neutral-400">Industry average: 15–25%. Most practices underestimate this.</div>
                </div>
              </div>
            </div>

            {/* Calculations results */}
            <div className="flex-1 min-w-0 rounded-2xl bg-navy-deep p-6 md:p-8 text-white flex flex-col justify-between shadow-lg">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.08em] text-white/30 mb-5">Projected RCM Impact</div>
                
                <div className="flex justify-between items-center py-3.5 border-b border-white/[0.05]">
                  <span className="text-xs text-white/60">Denied claims / month</span>
                  <span className="font-bold text-sm md:text-base text-rose-400 font-mono">{deniedClaims}</span>
                </div>
                
                <div className="flex justify-between items-center py-3.5 border-b border-white/[0.05]">
                  <span className="text-xs text-white/60">Revenue at risk / month</span>
                  <span className="font-bold text-sm md:text-base text-orange-400 font-mono">{formatCompactValue(revenueAtRisk)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3.5 border-b border-white/[0.05]">
                  <span className="text-xs text-white/60">Estimated uncollected (Permanent Loss)</span>
                  <span className="font-bold text-sm md:text-base text-yellow-300 font-mono">{formatCompactValue(estimatedUncollected)}</span>
                </div>
                
                <div className="flex justify-between items-center py-3.5 border-b border-white/[0.05]">
                  <span className="text-xs text-white/60">Projected Clientele recovery (99% Clean)</span>
                  <span className="font-bold text-sm md:text-base text-teal font-mono">{formatCompactValue(projectedRecovery)}</span>
                </div>
                
                <div className="flex justify-between items-center py-4">
                  <span className="text-sm font-semibold text-white/80">Estimated annual gain</span>
                  <span className="font-bold text-xl md:text-2xl text-teal">{formatCompactValue(annualGain)}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="#assessment" 
                  onClick={(e) => handleInternalLink(e, 'assessment')}
                  className="block w-full text-center rounded-xl bg-teal text-navy hover:bg-white transition-all py-3.5 text-sm font-bold shadow hover:shadow-md cursor-pointer"
                >
                  Get My Free Revenue Audit →
                </a>
                <p className="mt-3 text-center text-[10px] leading-relaxed text-white/40">Based on specialty medical guidelines. Your actual figures will vary. No obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMR INTEGRATION GRID */}
      <section className="bg-background py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">EMR Integrations</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy">Integrated with the systems you already use.</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">No rip-and-replace. Clientele RCM connects directly with 11+ leading EMR and practice management platforms.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200">
            {[
              'eClinicalWorks', 'Meditech', 'Medisoft', 'Allscripts-Veradigm', 
              'Practice Fusion', 'Office Ally', 'AdvancedMD', 'Cerner', 
              'GE Centricity', 'ModMed', 'ChartPerfect'
            ].map((emr) => (
              <div 
                key={emr} 
                className="bg-background h-24 flex items-center justify-center px-4 text-center font-display text-sm md:text-base font-semibold text-navy/55 hover:text-teal hover:bg-neutral-50 transition-all cursor-pointer"
              >
                {emr}
              </div>
            ))}
            <div className="bg-background h-24 flex flex-col items-center justify-center text-muted-foreground hover:bg-neutral-50 transition-colors cursor-pointer" onClick={(e) => { e.preventDefault(); const el = document.getElementById('assessment'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
              <Plus className="size-5 text-teal mb-0.5" />
              <span className="text-xs font-semibold">And more</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL OUTCOMES SECTION */}
      <section className="bg-neutral-50/50 py-20 border-b border-neutral-100 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">From the practices we serve</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy">Outcomes, in their words.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Denials dropped significantly within the first few weeks. The visibility into our claims and the team's follow-up discipline made an immediate impact — something we hadn't experienced with our previous billing company.",
                role: "Revenue Cycle Manager",
                clinic: "Multi-Specialty Orthopedic Clinic",
                loc: "Michigan"
              },
              {
                text: "Our clean-claim performance improved, A/R became predictable, and for the first time we had reporting that helped us act — not just review numbers after the fact.",
                role: "Director of Operations",
                clinic: "Imaging & Pain Management Center",
                loc: "Florida"
              },
              {
                text: "Their specialty-aware coding caught documentation issues our last vendor missed for months. We saw measurable revenue recovery in the first quarter of going live.",
                role: "Practice Administrator",
                clinic: "Comprehensive Therapy Group",
                loc: "New York"
              }
            ].map((test, i) => (
              <figure key={i} className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-200/50 border-l-4 border-l-teal flex flex-col justify-between">
                <div className="flex gap-0.5 mb-5 text-amber-500">
                  {[...Array(5)].map((_, st) => <Star key={st} className="size-4 fill-current text-amber-500" />)}
                </div>
                <blockquote className="font-display italic text-sm md:text-base text-neutral-800 leading-relaxed mb-6">
                  "{test.text}"
                </blockquote>
                <figcaption className="pt-4 border-t border-neutral-100 mt-auto">
                  <div className="font-bold text-navy text-sm">{test.role}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{test.clinic} · {test.loc}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG & COGNITIVE DESK INSIGHTS SECTION */}
      <section className="bg-background py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">From our Revenue Cycle Intelligence Desk</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy">Insights on AI, Compliance & Specialty Billing</h2>
            </div>
            <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-2 text-navy font-bold hover:text-teal transition-colors text-sm">
              View All Insights
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'How AI Is Transforming Revenue Cycle Management in Healthcare',
                desc: 'Where automation belongs in the claims lifecycle — and where the human-in-the-loop still wins.',
                tag: 'AI & Automation',
                grad: 'from-navy to-teal'
              },
              {
                title: 'Top Causes of Claim Denials and How Providers Can Prevent Them',
                desc: 'A field-tested checklist for cutting denials at the front door, mid-cycle, and on appeal.',
                tag: 'Denial Management',
                grad: 'from-amber-600/80 to-teal/60'
              },
              {
                title: 'Why Human-in-The-Loop Matters in AI-Enabled Medical Billing',
                desc: 'AAPC-certified review isn\'t a backup hedge — it\'s the only defensible model for highly complex billing.',
                tag: 'Compliance',
                grad: 'from-navy-deep via-navy to-teal/40'
              }
            ].map((art, idx) => (
              <article key={idx} className="group rounded-2xl overflow-hidden bg-background border border-neutral-200 shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] duration-300">
                <div className={`aspect-[16/10] bg-gradient-to-br ${art.grad} relative p-6`}>
                  <div className="absolute inset-0 mesh-glow opacity-30"></div>
                  <div className="absolute inset-0 grid-noise opacity-15"></div>
                  <span className="relative z-10 text-[9px] font-bold uppercase tracking-wider bg-white/95 text-navy px-2.5 py-1 rounded-full">{art.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg md:text-xl font-semibold text-navy group-hover:text-teal transition-colors leading-snug">{art.title}</h3>
                  <p className="mt-3 text-xs md:text-sm text-neutral-500 leading-relaxed">{art.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-teal group-hover:translate-x-0.5 transition-transform">
                    Read article <ArrowUpRight className="size-3.5" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CONTACT FORM SECTION */}
      <section id="assessment" className="relative bg-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0 mesh-glow" aria-hidden="true"></div>
        <div className="absolute inset-x-0 bottom-0 top-1/2 grid-noise opacity-[0.04]" aria-hidden="true"></div>
        
        <div className="relative max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="flex-1 text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-teal mb-3">
              <Sparkles className="size-3.5" /> Free Performance Audit
            </span>
            <h2 className="font-display text-3.5xl md:text-5xl font-semibold leading-[1.08]">
              Ready to stop leaving revenue on the table?
            </h2>
            <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed">
              Let's analyze your current RCM metrics and show you exactly where claims are leaking or denials are piling up — at completely no cost, no obligations involved.
            </p>
          </div>

          <div className="flex-1 w-full max-w-[420px] rounded-2xl bg-white text-navy p-6 shadow-glow relative z-10 border border-neutral-100">
            {formSubmitted ? (
              <div className="text-center py-8 animate-in fade-in duration-300">
                <CheckCircle className="size-12 text-teal mx-auto mb-4 animate-bounce" />
                <h3 className="font-display text-xl font-bold text-navy">Audit Requested Successfully</h3>
                <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                  Thank you, <strong>{formFields.contactName}</strong>. Our specialty audit team will verify your practice metrics and contact you at <strong>{formFields.email}</strong> within 24 business hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 text-xs text-teal font-bold hover:underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4 text-left">Request Free RCM Assessment</h3>
                
                <div>
                  <input 
                    type="text" 
                    name="practiceName"
                    value={formFields.practiceName}
                    onChange={handleInputChange}
                    placeholder="Practice/Facility Name" 
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs outline-none focus:border-teal focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input 
                      type="text" 
                      name="contactName"
                      value={formFields.contactName}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      required
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs outline-none focus:border-teal focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formFields.email}
                      onChange={handleInputChange}
                      placeholder="Email Address" 
                      required
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs outline-none focus:border-teal focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formFields.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number" 
                      required
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs outline-none focus:border-teal focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <select 
                      name="specialty"
                      value={formFields.specialty}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-xs outline-none focus:border-teal focus:bg-white transition-colors"
                    >
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pain Management">Pain Management</option>
                      <option value="Anesthesia">Anesthesia</option>
                      <option value="Physical/Speech Therapy">Therapy (PT/OT/SLP)</option>
                      <option value="Multispecialty">Multispecialty</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <select 
                      name="monthlyVolume"
                      value={formFields.monthlyVolume}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-xs outline-none focus:border-teal focus:bg-white transition-colors"
                    >
                      <option value="Under 500">Under 500 claims</option>
                      <option value="500-1000">500 - 1,000 claims</option>
                      <option value="1000-2500">1,000 - 2,500 claims</option>
                      <option value="Over 2500">2,500+ claims</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="emr"
                      value={formFields.emr}
                      onChange={handleInputChange}
                      placeholder="Current EMR/PM Platform" 
                      className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs outline-none focus:border-teal focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 rounded-full bg-teal hover:bg-navy hover:text-white text-navy font-bold text-xs uppercase tracking-wider transition-colors shadow shadow-teal/10 hover:shadow cursor-pointer"
                >
                  Submit Performance Audit Request →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
