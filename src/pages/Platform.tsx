import { useState } from 'react';
import { 
  CheckCircle, ArrowRight, Brain, Calendar, Shield, Activity, 
  UserCheck, ClipboardList, Laptop, Smartphone, FileCheck, Landmark, RefreshCw
} from 'lucide-react';

interface PlatformProps {
  navigate: (path: string) => void;
}

export default function Platform({ navigate }: PlatformProps) {
  const [selectedModule, setSelectedModule] = useState(0);

  const modules = [
    {
      id: 'm1',
      title: 'Module 01: Insurance Eligibility',
      subtitle: 'Insurance Eligibility Verification',
      status: 'Live May 2026',
      icon: UserCheck,
      details: 'Real-time eligibility checks with automated discrepancy alerts. Clientele AI queries payers immediately after a patient registers, checking for active coverages, copay/deductible requirements, and coordinating secondary insurance plans. Eliminates eligibility-related rejections before they start.',
      points: [
        'Direct EMR scheduling pre-integration',
        'Automatic secondary payer cross-checking',
        'Copay, coinsurance, and deductible breakdowns',
        'Daily registration discrepancy queues'
      ]
    },
    {
      id: 'm2',
      title: 'Module 02: Prior Authorization',
      subtitle: 'Prior Authorization Automation',
      status: 'Target: Q3 2026',
      icon: ClipboardList,
      details: 'Payer-specific rule checking with visual status tracking dashboards. Clientele AI reads clinical documentation using secure specialty models to extract procedural details and automatically submits authorization packets to commercial and government payers.',
      points: [
        'Specialty clinical data abstraction',
        'Payer auth portal auto-submissions',
        'Real-time status updates and alerts',
        'Automated peer-to-peer hearing packets'
      ]
    },
    {
      id: 'm3',
      title: 'Module 03: Charge Capturing',
      subtitle: 'Charge Capturing & Coding',
      status: 'Target: Q3 2026',
      icon: Brain,
      details: 'AI coding audits paired with AAPC-certified review overlays. Our platform scans medical charts against ICD-10, CPT, and HCPCS catalogs. It applies precise modifiers and checks for concurrent billing rules before submission.',
      points: [
        'Electronic documentation scans',
        'Modifier 25, 59, and XS audit engines',
        'Anesthesia unit and concurrency captures',
        'Doctor coding discrepancy journals'
      ]
    },
    {
      id: 'm4',
      title: 'Module 04: Smart Claim Scrubbing',
      subtitle: 'Clearinghouse & Smart Scrubbing',
      status: 'Target: Q4 2026',
      icon: FileCheck,
      details: 'Deep pre-submission scrubbing. Integrates directly with national clearinghouses and individual commercial payer portals. Runs over 4,000 algorithmic pre-scrub checks tailored specifically to interventional specialty clinics.',
      points: [
        'Payer-specific local billing matrices',
        'CCI edit and bundling checks',
        'Electronic claim rejection auto-correction',
        'Clearinghouse return panels'
      ]
    },
    {
      id: 'm5',
      title: 'Module 05: Underpayment & Appeals',
      subtitle: 'Underpayment & Denials Desk',
      status: 'Target: Q4 2026',
      icon: Landmark,
      details: 'Automated denial classification and digital appeal pipeline builders. Clientele AI reads Electronic Remittance Advices (ERAs) to sort denials by root cause. It constructs appeal letters complete with clinical records automatically.',
      points: [
        'ERA CARC/RARC reason groupings',
        'Clinical appeal document creators',
        'Medical necessity packet compiling',
        'Underpayment schedule contract checks'
      ]
    },
    {
      id: 'm6',
      title: 'Module 06: A/R Pursuits & Recovery',
      subtitle: 'Automated A/R Aging Loops',
      status: 'Target: Q1 2027',
      icon: RefreshCw,
      details: 'Algorithmic prioritization that turns raw aging tasks into high-yield workflows. Generates optimal collector schedules based on payment probability, claim value, and payer turnaround metrics.',
      points: [
        'Predictive payer aging scoreboards',
        'Workqueue scheduling for billers',
        'Automated phone call preparation briefs',
        'Partial payment response queues'
      ]
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Platform Hero banner */}
      <section className="relative bg-hero text-white overflow-hidden py-20 lg:py-28 flex items-center">
        <div className="absolute inset-0 mesh-glow animate-pulse" style={{ animationDuration: '6s' }} aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.06]" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 w-full text-left items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal-glow mb-6">
              <Brain className="size-3.5" /> End-to-End Revenue cycle Suite
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
              Built by practitioners. <br />
              Engineered using <span className="text-teal font-medium">AI.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Most healthcare automation tools are written by generalist tech companies. Clientele AI is the revenue cycle suite built, coded, and validated by certified RCM professionals. No shortcuts, no black boxes. We do healthcare.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-white/50">
              <span className="flex items-center gap-1.5"><Shield className="size-3.5 text-teal" /> SOC2 COMPLIANT CONTROLS</span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="size-3.5 text-teal" /> HIPAA SECURED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modules Overview Section */}
      <section className="bg-background py-20 border-b border-light transition-all">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-14 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">Modular Intelligence</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold">The 6 Pillars of Clientele RCM</h2>
            <p className="mt-3 text-muted-foreground">Select a module below to inspect its features, release schedule, and engineering details.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar navigation list */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 select-none no-scrollbar">
              {modules.map((m, idx) => {
                const Icon = m.icon;
                const isSelected = selectedModule === idx;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModule(idx)}
                    className={`flex items-center gap-3 w-full min-w-[200px] text-left px-5 py-4 rounded-xl transition-all border outline-none cursor-pointer ${
                      isSelected
                        ? 'bg-navy border-navy text-white shadow-md'
                        : 'bg-white border-neutral-100 text-foreground hover:bg-neutral-50'
                    }`}
                  >
                    <Icon className={`size-5 shrink-0 ${isSelected ? 'text-teal' : 'text-neutral-400'}`} />
                    <span className="text-xs md:text-sm font-semibold truncate">{m.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Module Detail Panel */}
            <div className="lg:col-span-8 bg-white border border-neutral-200 p-6 md:p-8 rounded-3xl shadow-sm text-left animate-in fade-in slide-in-from-right-3 duration-300">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 border-b border-neutral-100 pb-5">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Comprehensive RCM Pillar</div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-navy mt-1">{modules[selectedModule].subtitle}</h3>
                </div>
                <span className={`inline-block border text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold ${
                  modules[selectedModule].status.includes('Live')
                    ? 'border-teal bg-teal/10 text-navy'
                    : 'border-amber-500/20 bg-amber-500/5 text-amber-600'
                }`}>
                  {modules[selectedModule].status}
                </span>
              </div>

              <p className="text-neutral-700 leading-relaxed text-sm md:text-base">
                {modules[selectedModule].details}
              </p>

              <div className="mt-8">
                <h4 className="font-display font-semibold text-navy mb-4 text-sm uppercase tracking-wider">Key Features Provided</h4>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {modules[selectedModule].points.map((pt, j) => (
                    <div key={j} className="flex gap-2.5 items-start">
                      <CheckCircle className="size-4.5 text-teal mt-0.5 shrink-0" />
                      <span className="text-xs md:text-sm text-neutral-600 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Certified RCM compliance certified</span>
                <a 
                  href="#assessment"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-xs md:text-sm font-bold text-navy hover:text-teal transition-colors"
                >
                  Consult on this module <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Two Portals (Mobile Apps mock interfaces) */}
      <section className="bg-neutral-50/50 py-20 border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-14 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3">Practice ecosystem</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold">Twin Portals: Seamless Mobile Experiences</h2>
            <p className="mt-3 text-muted-foreground">We extend standard RCM into secure, customized mobile applications for both patients receiving care and providers delivering medical services.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Patient companion app card */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-5">
                  <Smartphone className="size-5" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-navy">Patient Billing Companion</h3>
                <p className="mt-3 text-neutral-500 text-xs md:text-sm leading-relaxed">
                  Eliminate patient friction at billing. Our white-labeled Client app enables quick, biometric checkin registration, provides clear, transparent cost estimations, and allows seamless online payments through standard credit or secure portals.
                </p>
                <ul className="space-y-2 mt-5 text-neutral-600 text-xs font-semibold">
                  <li className="flex items-center gap-2"><CheckCircle className="size-4 text-teal" /> Digital pre-registration and check-in</li>
                  <li className="flex items-center gap-2"><CheckCircle className="size-4 text-teal" /> No-surprise prior-auth transparency</li>
                  <li className="flex items-center gap-2"><CheckCircle className="size-4 text-teal" /> Structured digital payment plans</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-50 text-xs text-muted-foreground flex justify-between items-center">
                <span>iOS & Android Native</span>
                <span className="font-bold text-teal">Pre-integrated May 2026</span>
              </div>
            </div>

            {/* Provider companion app card */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 md:p-8 shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-navy-deep/5 flex items-center justify-center text-navy mb-5">
                  <Laptop className="size-5" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-navy">Provider Billing & KPI Compass</h3>
                <p className="mt-3 text-neutral-500 text-xs md:text-sm leading-relaxed">
                  The executive dashboard in your pocket. Clinical teams can review active claims pipelines, audit daily clean claim performance, track high-severity denial trends, and communicate directly with their dedicated Client billing auditor.
                </p>
                <ul className="space-y-2 mt-5 text-neutral-600 text-xs font-semibold">
                  <li className="flex items-center gap-2"><CheckCircle className="size-4 text-teal" /> Real-time claims pipeline tracing</li>
                  <li className="flex items-center gap-2"><CheckCircle className="size-4 text-teal" /> Active billing auditor chat channels</li>
                  <li className="flex items-center gap-2"><CheckCircle className="size-4 text-teal" /> Immediate high-severity exception alerts</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-50 text-xs text-muted-foreground flex justify-between items-center">
                <span>Optimized for iPad & Mobile</span>
                <span className="font-bold text-navy">Active May 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security Compliance Block */}
      <section className="bg-background py-20 border-b border-light text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3 block">Data Integrity</span>
              <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold leading-tight">Engineered for Enterprise Medical Compliance</h2>
              <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                Healthcare information requires absolute security. Clientele RCM maintains maximum posture compliance, ensuring your patient records (PHI) remain fully isolated, fully secure, and strictly private.
              </p>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'HIPAA Audited BAA', desc: 'Full business associate agreement signed during transition.' },
                { title: 'SOC2 Assurity Processes', desc: 'Rigorous regular external audits matching data security standards.' },
                { title: 'AES-256 Bit Encryption', desc: 'Secure encryption standards for records at rest and in transit.' },
                { title: 'Isolated Workspace Pools', desc: 'Practice databases remain strictly isolated in specialized silos.' }
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-neutral-200/50 p-5 bg-white shadow-sm flex gap-3.5 items-start">
                  <CheckCircle className="size-4 text-teal mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy text-sm">{item.title}</h4>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Roadmap scheduler block */}
      <section className="bg-neutral-50/50 py-24 border-b border-light text-left">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3 block">The Timeline</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold leading-tight">Platform Launch Roadmap</h2>
          </div>

          <div className="relative border-l border-neutral-300 md:pl-8 ml-4 pl-6 space-y-12">
            {[
              { phase: 'Phase 01 · Launching May 2026', title: 'Module 1: Real-Time Eligibility Verification', d1: 'The foundation of clean claims. Real-time patient verification immediately upon check-in. Seamless connection maps into leading specialty EMR portals, identifying discrepancies instantly.', icon: Brain },
              { phase: 'Phase 02 · Coming Q3 2026', title: 'Modules 2 & 3: Auth Automation & Charge Capturing', d1: 'Document parsing algorithms to identify procedural bundles, LCD guidelines, modifier checks, and prior authorization submissions. Reviews overseen by AAPC-certified billing auditors.', icon: UserCheck },
              { phase: 'Phase 03 · Coming Q4 2026 / Q1 2027', title: 'Modules 4-6: Claim Scrubbing, Underpayment desk, and A/R Aging', d1: 'Our complete claims intelligence engine goes live. Advanced rule checking, claim corrections dashboards, automatic appeal packing generation, and algorithmic work prioritization for collectors.', icon: Landmark }
            ].map((step, k) => {
              const StepIcon = step.icon;
              return (
                <div key={k} className="relative group">
                  <div className="absolute -left-[37px] md:-left-[49px] top-1.5 size-6 md:size-8 rounded-full bg-white border-2 border-teal flex items-center justify-center transition-colors group-hover:bg-teal">
                    <StepIcon className="size-3 md:size-4 text-navy transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] md:text-xs font-bold text-teal uppercase tracking-widest block">{step.phase}</span>
                    <h3 className="font-display font-semibold text-navy text-lg md:text-xl mt-1">{step.title}</h3>
                    <p className="mt-2 text-neutral-500 text-xs md:text-sm leading-relaxed max-w-2xl">{step.d1}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEAD CTA assessment request */}
      <section id="assessment" className="bg-navy py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2.5xl md:text-4xl font-semibold leading-tight">Ready to integrate Clientele AI?</h2>
          <p className="mt-4 text-teal/80 text-sm max-w-lg mx-auto">Get in touch to check EMR pre-integration requirements for your facility and discuss onboarding timelines.</p>
          <div className="mt-8">
            <button 
              onClick={() => {
                document.getElementById('app-header')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => navigate('/'), 100);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-teal text-navy px-6 py-3.5 font-bold hover:bg-teal-glow transition-all active:scale-98 cursor-pointer"
            >
              Request Free Practice Assessment →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
