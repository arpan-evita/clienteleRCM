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
  ClipboardList
} from 'lucide-react';

interface FrontEndProps {
  navigate: (path: string) => void;
}

export default function FrontEnd({ navigate }: FrontEndProps) {
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

      {/* Services List Block */}
      <section className="py-23 bg-neutral-50/50 text-navy" id="services-list">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">The Front-End Engine</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">Five Services. One Goal: A Clean Claim On Day One.</h2>
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
                      <Bot className="size-4" /> AI Integration
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed font-sans">
                      {srv.aiTouch}
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-[#5bc0be] text-xs font-semibold mb-2">
                      <ShieldAlert className="size-4" /> Specialty Nuance
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
