import React from 'react';
import { 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Bot, 
  ShieldAlert, 
  FileCheck,
  Zap,
  Mic,
  Activity,
  HeartPulse,
  Award
} from 'lucide-react';

interface MidCycleProps {
  navigate: (path: string) => void;
}

export default function MidCycle({ navigate }: MidCycleProps) {
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
      title: 'Clinical Documentation Review & Integrity',
      desc: 'A claim is only as strong as the documentation behind it. We perform pre-coding documentation review against payer LCD/NCD requirements, flag deficiencies, and query providers before submission.',
      bullets: [
        'Pre-coding clinical note review for completeness',
        'Medical necessity language verification (LCD/NCD filters)',
        'Provider addendum requests and deficiency notifications',
        'E&M level audit and compliance validation'
      ],
      aiTouch: 'AI analyzes clinical notes in real time, flags prospective documentation gaps, and suggests key phrasing to secure correct levels.',
      specialtyNote: 'Surgical op notes are audited for anatomical approach, implants used, and hardware specificities to prevent sudden post-op downcoding.'
    },
    {
      step: '02',
      title: 'AI-Assisted ICD-10 & CPT Coding',
      badge: 'Module 3 — Coming Q3 2026',
      desc: 'AI recommends codes; certified human coders decide. This human-in-the-loop audit process guarantees elite coding accuracy without compromising on speed.',
      bullets: [
        'Dual-layered review (AI suggestions + human CPC verification)',
        'Specialty-specific modifier application checklists (-50, -59, -XS)',
        'Continuous compliance mapping to CMS guidelines',
        'HCC Risk Adjustment coding verification'
      ],
      aiTouch: 'Clientele AI reviews clinician text, recommends best-fit ICD-10-CM and CPT pairings, and alerts if codes violate bundling rules.',
      specialtyNote: 'Bilateral orthopedics and interventional pain management codes are cross-referenced with CCI edit tables on every claim.'
    },
    {
      step: '03',
      title: 'Microsoft Nuance Ambient AI integration',
      badge: 'Live Now',
      desc: 'Let clinicians focus on patients, not screens. We implement Nuance ambient listening to capture patient visits, transcribe them, and compile neat clinical summaries.',
      bullets: [
        'Real-time ambient listening during patient encounters',
        'Auto-structured progress notes and physical exam fields',
        'Instant note output delivery directly into EMR systems',
        'Eliminates dictation backlogs and clinical scribe overhead'
      ],
      aiTouch: 'Integrates Microsoft Nuance Dragon Medical One frameworks directly inside client schedulers to capture precise encounters.',
      specialtyNote: 'Custom-tailored orthopedic and PT templates are standard, ensuring functional tests and ROM benchmarks are neatly captured.'
    },
    {
      step: '04',
      title: 'Claim Creation & Intelligent Pre-Submission Scrubbing',
      badge: 'Module 4 — Coming Q3 2026',
      desc: 'Our electronic claim scrubbing runs thousands of billing rules instantly, verifying diagnosis-to-procedure codes before any claim leaves the building.',
      bullets: [
        'Multi-stage claim scrubbing checks (CCI, Local and National Rules)',
        'Payer-specific billing logic validation prior to clearinghouse submission',
        'Missing modifier detection and gender/age constraint checks',
        'Electronic secondary claim generation and coordination'
      ],
      aiTouch: 'Automates clearinghouse-level rule scrubbing directly inside the queue to fix simple formatting bugs immediately.',
      specialtyNote: 'Anesthesia concurrency guidelines and time unit mappings are audited across all operational lists.'
    },
    {
      step: '05',
      title: 'Real-Time Claim Status Monitoring',
      desc: 'Submission is not the finish line. We monitor claims electronically at the clearinghouse level, checking and acting on status updates within 24 hours.',
      bullets: [
        'Electronic 277 status monitoring on all sent batches',
        'Payer-receipt validation checks and rejection routing',
        'Real-time status changes visualized on user dashboards',
        'Priority queues for claims stuck at clearinghouse levels'
      ],
      aiTouch: 'Automates 276/277 transaction matching to match returned statuses with open claims instantly, routing rejections to appropriate desks.',
      specialtyNote: 'Medicare therapy cap limit exceptions (KX modifier) are monitored to ensure claims are not rejected for threshold limits.'
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-hidden text-left">
      {/* Hero Banner */}
      <section className="relative bg-hero text-white py-20 lg:py-28">
        <div className="absolute inset-0 mesh-glow opacity-90 animate-pulse" style={{ animationDuration: '10s' }} aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.05]" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
              <Activity className="size-3.5" /> Stage 2 — Mid-Cycle Intelligence
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
              Every Coding Decision <br />
              Is a Revenue Decision. <br />
              <span className="text-teal font-medium">Ours Are Made by Certified Specialists.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Mid-cycle is where clinical documentation becomes billable revenue — or becomes a denial. Clientele RCM combines AI-assisted coding suggestions with AAPC-certified human review to deliver a 99% clean claim rate across the specialties where coding complexity is highest.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#assessment" 
                onClick={handleAssessmentClick}
                className="rounded-full bg-teal text-navy px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-navy transition-all hover:translate-x-0.5 active:scale-98 cursor-pointer"
              >
                Request a Coding Accuracy Assessment
              </a>
              <a 
                href="#services-list"
                className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More ↓
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-navy-deep/40 rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-card">
            <div className="text-5xl font-display font-bold text-teal">99%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-2">Clean Claim Rate</div>
            <div className="text-sm text-white/60 mt-3 leading-relaxed">
              Our dual-layer review pipeline ensures claims are fully scrubbed, coded, and cleaned before clearinghouse transmission.
            </div>
            <div className="h-px bg-white/10 my-6"></div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> 30+ CPC Certified Coders
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Ambient AI Transcription
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Pre-Submission Scrubbing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Lifecycle Nodes */}
      <section className="bg-neutral-50 py-12 border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center font-mono text-[11px] uppercase tracking-widest text-teal mb-6">
            Scrubbed Claim Lifecycle
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Encounter Notes' },
              { label: 'Documentation Audit' },
              { label: 'AI/CPC Coding' },
              { label: 'CCI scrub-checks' },
              { label: '99% Clean submission' }
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

      {/* Expense of Coding Section */}
      <section className="py-20 bg-background border-b border-light text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Silent Degradation</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-navy">
              Coding Errors Compound Silently — Until They Don't.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="font-display text-4xl font-bold text-navy mb-3">40%</div>
                <h4 className="font-semibold text-navy mb-2">Of All Claim Denials</h4>
                <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                  Are caused by downstream coding issues — incorrect descriptors, missing modifier codes, or bundling violations.
                </p>
              </div>
            </div>

            <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="font-display text-4xl font-bold text-navy mb-3">$50–$200</div>
                <h4 className="font-semibold text-navy mb-2">Rework Cost per Coding Denial</h4>
                <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                  Correcting billing rules after rejection requires clinician consultations, EMR logs, and medical record submissions.
                </p>
              </div>
            </div>

            <div className="p-8 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col justify-between">
              <div>
                <div className="font-display text-4xl font-bold text-navy mb-3">21–45 Days</div>
                <h4 className="font-semibold text-navy mb-2">Added A/R Days Delay</h4>
                <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                  Coding errors push payments way out, complicating accounting cycles and creating cash flow crunches.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-navy rounded-2xl p-8 lg:p-10 text-white grid md:grid-cols-3 gap-8">
            <div className="border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <span className="text-[10px] font-mono uppercase bg-white/10 text-teal px-2 py-1 rounded inline-block mb-3">Example A</span>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Missing Modifier</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                An orthopedic surgeon performs a bilateral knee arthroscopy. The coder submits both CPT 29881 codes without the -50 modifier. The second procedure denies as a duplicate, leaving thousands of dollars in limbo.
              </p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <span className="text-[10px] font-mono uppercase bg-white/10 text-teal px-2 py-1 rounded inline-block mb-3">Example B</span>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Bundling Violation</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                A pain management provider performs a nerve block and a trigger point injection. Without Modifier 59 or XS, the payer automatically bundles both and pays only the lower-value code.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase bg-white/10 text-teal px-2 py-1 rounded inline-block mb-3">Example C</span>
              <h4 className="font-semibold text-white mb-2 text-sm md:text-base">Documentation Downcode</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                A therapist submits for a high-complexity OT evaluation (CPT 97167) but progress notes support only moderate complexity. Payer downcodes representing immediate cash erosion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Block */}
      <section className="py-23 bg-neutral-50/50 text-navy" id="services-list">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Clinical Accuracy Services</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">Specialized Coding Modules Built for Revenue Protection.</h2>
          </div>

          <div className="space-y-12">
            {services.map((srv, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden grid lg:grid-cols-12 gap-0">
                <div className="lg:col-span-8 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono font-bold text-sm bg-navy text-white px-2 py-1 rounded text-center">
                        {srv.step}
                      </span>
                      {srv.badge && (
                        <span className="text-[10px] font-mono uppercase bg-teal/10 text-teal border border-teal/20 px-2.5 py-1 rounded-full font-semibold">
                          {srv.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-navy mb-4">{srv.title}</h3>
                    <p className="text-xs md:text-sm text-neutral-600 mb-6 leading-relaxed bg-neutral-50/80 p-4 rounded-xl border border-neutral-100">
                      {srv.desc}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3 text-xs text-neutral-600">
                      {srv.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-center gap-2">
                          <CheckCircle className="size-3.5 text-teal shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-navy text-white p-8 md:p-10 flex flex-col justify-between gap-6 border-t lg:border-t-0 lg:border-l border-white/5">
                  <div>
                    <div className="flex items-center gap-2 text-teal font-mono text-xs uppercase tracking-wider mb-2">
                      <Bot className="size-4" /> AI Suggestion Engine
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed">
                      {srv.aiTouch}
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-[#5bc0be] text-xs font-semibold mb-2">
                      <ShieldAlert className="size-4" /> Specialty Audit Rule
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {srv.specialtyNote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Challenges Tabs / Grid */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">CPC Credentials</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy">Specialty-Configured Coding Depth.</h2>
          </div>

          <div className="mb-10 text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl">
            Generic billers let codes auto-queue. We assign claims to AAPC certified coders who handle your clinical specialty exclusively.
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <span className="text-[11px] font-mono text-teal uppercase tracking-widest block mb-1">Orthopedics</span>
              <h4 className="font-display font-semibold text-navy text-lg mb-3">Surgical complexities</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                We audit operative notes for anatomical approach, laterality modifiers, global-period boundaries (-24/-79), and CCI bundle violations on complex joints.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <span className="text-[11px] font-mono text-teal uppercase tracking-widest block mb-1">Pain Management</span>
              <h4 className="font-display font-semibold text-navy text-lg mb-3">Interventional rules</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Reviewing fluoroscopy, ultrasound-guided targeting notes, add-on codes, and bilateral blocks to guarantee clean modifier XS, 50, and 59 compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <span className="text-[11px] font-mono text-teal uppercase tracking-widest block mb-1">Anesthesia</span>
              <h4 className="font-display font-semibold text-navy text-lg mb-3">Unit Calculations</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Ensuring proper modifier utilization for CRNA medical directions (QK, QX, QZ), base unit audits, concurrent procedure counts, and physical status descriptors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-background text-navy border-b border-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-3xl font-serif text-neutral-300 mb-6">“</div>
          <p className="font-display text-lg md:text-xl italic text-navy leading-relaxed">
            Our coding accuracy issues were invisible to us — we just saw denials and assumed it was a payer problem. Clientele RCM's coding team identified three systemic modifier errors within the first month that had been costing us money for over a year.
          </p>
          <div className="mt-6">
            <div className="font-bold text-sm text-navy">Practice Administrator</div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Orthopedic Surgery Group · Michigan</div>
          </div>
        </div>
      </section>

      {/* Footer Block */}
      <section className="bg-navy text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-teal font-mono text-xs uppercase tracking-[0.22em] mb-4">Eliminate Coding Erosion</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Audit Your Coding Risks Today.</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
            Let us review a sample of your recent surgical, procedure, or rehabilitation EMR logs and highlight any modifier misapplications, coding gaps, or diagnostic leaks silently costing you earnings.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#assessment" 
              onClick={handleAssessmentClick}
              className="rounded-full bg-teal text-navy px-8 py-4 font-semibold hover:bg-white hover:text-navy hover:scale-102 transition-all active:scale-98 cursor-pointer"
            >
              Get a Free Coding Assessment
            </a>
            <button 
              onClick={() => navigate('/services')}
              className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold transition-all"
            >
              Explore Full Suite
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
