import React from 'react';
import { 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Bot, 
  ShieldAlert, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  Lock,
  Search,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';

interface BackEndProps {
  navigate: (path: string) => void;
}

export default function BackEnd({ navigate }: BackEndProps) {
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

  const agingProfile = [
    { range: '0–30 Days', collect: '100%', risk: 'Full collectability — standard follow-up' },
    { range: '31–60 Days', collect: '72%', risk: 'Increasing risk — active follow-up required' },
    { range: '61–90 Days', collect: '46%', risk: 'High write-off risk — escalated pursuit' },
    { range: '90+ Days', collect: '22%', risk: 'Avg recovery $0.50/$1 — timely filing risk' }
  ];

  const denialDiagnostics = [
    { category: 'Medical Necessity', rate: '25–30%', signal: 'Documentation gaps at point of care', intervention: 'Mid-cycle: Clinical documentation review' },
    { category: 'Authorization / Pre-cert', rate: '20–25%', signal: 'Front-end auth workflow failures', intervention: 'Front-end: Auth management module' },
    { category: 'Coding Errors', rate: '15–20%', signal: 'Modifier, bundling, or code selection errors', intervention: 'Mid-cycle: Specialty coding review' },
    { category: 'Eligibility', rate: '10–15%', signal: 'Front-end eligibility validation failures', intervention: 'Front-end: Real-time eligibility check' },
    { category: 'Timely Filing', rate: '5–10%', signal: 'A/R follow-up delays — claims not resubmitted', intervention: 'Back-end: Relentless A/R monitoring' },
    { category: 'Duplicate Claim', rate: '5–8%', signal: 'Billing system or clearinghouse errors', intervention: 'Mid-cycle: Claim scrubbing rules' },
    { category: 'COB / Other', rate: '5–10%', signal: 'Registration errors or payer sequencing', intervention: 'Front-end: Patient registration controls' }
  ];

  const paymentProtocols = [
    {
      type: 'Full Payment',
      desc: 'Posted to the correct claim line. Patient balance calculated. Account reconciled. Claim closed.',
      ai: 'Automatically posts and reconciles clean amounts in seconds.'
    },
    {
      type: 'Underpayment',
      desc: 'Posted at received amount. Contracted rate comparison runs automatically. Flagged and routed to underpayment recovery; specialist initiates dispute.',
      ai: 'Compares payer payments directly with contract schedules. Generates instant mismatch alerts.'
    },
    {
      type: 'Partial Payment',
      desc: 'Posted to the claim. Insurance balance vs. patient responsibility separated. Each balance routed to its follow-up workflow.',
      ai: 'Separates payer adjustments from co-insurance automatically.'
    },
    {
      type: 'Zero-Pay',
      desc: 'Posted. Reason code reviewed against the claim. Correctable errors (wrong POS, modifier) routed to correction; exclusions written off with auth.',
      ai: 'Parses EOB code reasons instantly and initiates corrected submission workflows without delay.'
    }
  ];

  const services = [
    {
      num: '01',
      title: 'Payment Posting: ERA/EOB Processing',
      desc: 'Every payment type — full, underpaid, partial, zero-pay — is handled, reconciled, and actioned. Payment posting is where cash flow visibility begins. Our team posts all ERA and EOB payments with same-day accuracy, checking contracted rates on every commercial claim.',
      activities: [
        'Same-day posting of electronic remittance (ERA) and manual EOB files',
        'Direct contracted rate comparison on every single commercial claim',
        'Adjustment code accuracy audits (CO, PR, OA review)',
        'Automatic routing of secondary payer claims upon primary EOB posting'
      ]
    },
    {
      num: '02',
      title: 'Denial Management: Identification & Appeal',
      desc: 'Every denial is a recoverable revenue opportunity — if you pursue it fast enough with the right clinically supported documentation. We review, categorize, appeal, and resolve rejections within days.',
      activities: [
        'Electronic categorization of denials from ERA reason codes',
        'Clinically justified appeal packages drafted by specialists',
        'Peer-to-peer coordination logs for high-value surgical cases',
        'Timely filing deadline tracking to prevent expired dispute windows'
      ]
    },
    {
      num: '03',
      title: 'Denial Prevention: From Reactive to Proactive',
      desc: 'The best denial to work is the one that never happened. We feed denial findings back upstream to our front-end and mid-cycle teams to configure permanent prevention rules.',
      activities: [
        'Root-cause analysis mapped to provider and denial reason',
        'Quarterly billing audit reviews with provider panels',
        'Clearinghouse rule adjustments to scrub repetitive errors pre-submission',
        'Medicare Local Coverage Determination (LCD) update monitoring'
      ]
    },
    {
      num: '04',
      title: 'A/R Follow-Up & Aging Management',
      desc: 'Aging A/R isn\u2019t a reporting issue — it\u2019s a pursuit issue. We solve it with structured priority queues, payer-specific follow-up teams, and relentless follow-up.',
      activities: [
        'A/R aging segmented by dollar value, timelines, and payer profiles',
        'Escalated follow-up streams for claims crossing 60 days',
        'Payer representative contact logs with daily accountability reporting',
        'Underpayment dispute resolution and appeals coordination'
      ]
    },
    {
      num: '05',
      title: 'Analytics, Reporting & Performance Dashboards',
      desc: 'You can\u2019t manage what you can\u2019t see. We provide total visibility into your billing performance with secure dashboards.',
      activities: [
        'Real-time cash collections, adjustments, and net collection rates',
        'Denial rates categorized by provider, payer, and reason',
        'A/R days tracking and trending statistics',
        'Monthly operational reviews with a dedicated RCM director'
      ]
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-hidden text-left">
      {/* Hero */}
      <section className="relative bg-hero text-white py-20 lg:py-28">
        <div className="absolute inset-0 mesh-glow opacity-90 animate-pulse" style={{ animationDuration: '10s' }} aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.05]" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
              <TrendingUp className="size-3.5" /> Stage 3 — Back-End Recovery
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
              Denied Doesn't Mean Gone. <br />
              <span className="text-teal font-medium">Not If Your Back-End Team Is Built to Fight.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Most practices accept a 10–15% denial rate as normal. We don't. Our back-end team pursues every denied, underpaid, and aged claim with payer-specific expertise and persistence — turning revenue leakage into recovered collections.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#assessment" 
                onClick={handleAssessmentClick}
                className="rounded-full bg-teal text-navy px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-navy transition-all hover:translate-x-0.5 active:scale-98 cursor-pointer"
              >
                Request an A/R Recovery Assessment
              </a>
              <a 
                href="#aging-chart"
                className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('aging-chart')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View A/R Profiles ↓
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-navy-deep/40 rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-card">
            <div className="text-5xl font-display font-bold text-teal">32 Days</div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-2">Average A/R Days Target</div>
            <div className="text-sm text-white/60 mt-3 leading-relaxed">
              Our relentless back-end audit queues compress payment latency to guarantee liquid cash reserves.
            </div>
            <div className="h-px bg-white/10 my-6"></div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Payer-First Appeals
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Same-Day Posting
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Underpayment Monitoring
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A/R Aging Section */}
      <section className="py-20 bg-background border-b border-light text-navy" id="aging-chart">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Claim Collectability Profile</div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy leading-tight mb-6">
                A/R AGING PROFILE <br />
                <span className="text-neutral-500 font-sans text-xl font-normal block mt-1">Compressed leftward = faster cash cycles</span>
              </h2>
              <div className="overflow-hidden border border-neutral-200 rounded-2xl bg-white shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-200 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                      <th className="p-4 px-6">Age Range</th>
                      <th className="p-4">Collectability</th>
                      <th className="p-4 px-6">Follow-Up Action Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-xs md:text-sm">
                    {agingProfile.map((p, i) => (
                      <tr key={i} className="hover:bg-neutral-50/50 transition-colors">
                        <td className="p-4 px-6 font-semibold text-navy">{p.range}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded bg-teal/10 px-2 py-1 text-xs font-bold text-teal">
                            {p.collect}
                          </span>
                        </td>
                        <td className="p-4 px-6 text-neutral-500">{p.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-neutral-400 mt-4 italic">
                * Standard collection probability decreases heavily beyond 90 days. Relentless pursuit handles exceptions before write-offs.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
                <h4 className="font-semibold text-navy mb-4 text-base">What Passive Collection Costs You</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-xs md:text-sm">
                    <AlertTriangle className="size-5 text-teal shrink-0" />
                    <span><strong>$0.50 recovery average:</strong> Industry standard recovery on claims aged beyond 90 days is cut in half.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm">
                    <AlertTriangle className="size-5 text-teal shrink-0" />
                    <span><strong>17% claims unpursued:</strong> Common average for practices without structured, automated A/R queues.</span>
                  </li>
                  <li className="flex gap-3 text-xs md:text-sm">
                    <AlertTriangle className="size-5 text-teal shrink-0" />
                    <span><strong>Timely Filing Limit (120 days):</strong> Permanent losses occur as commercial timelines close indefinitely.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passive Failures & Stories */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold block mb-3">Practical Scenarios</span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">The Cost of Passive Back-End Management.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase bg-neutral-100 text-teal px-2 py-1 rounded inline-block mb-3">Case 1</span>
                <h4 className="font-display text-md font-semibold text-navy mb-3">The Passive Denial</h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  A payer denies a claim for "missing info." The busy biller notes it for manual review. 45 days fly by, the biller leaves, and the claim crosses 75 days, passing the appeal deadline.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3 text-xs font-semibold text-red-500">
                Outcome: Lost permanently block ($0 recovery).
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase bg-neutral-100 text-teal px-2 py-1 rounded inline-block mb-3">Case 2</span>
                <h4 className="font-display text-md font-semibold text-navy mb-3">The Silent Underpayment</h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Payer processes and pays 200 procedure claims. However, 23 codes were underpaid by $8–$45 below contracted rates. The amounts are too small for manual checks to query.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3 text-xs font-semibold text-red-500">
                Outcome: $15,000–$50,000 leakage annually.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase bg-neutral-100 text-teal px-2 py-1 rounded inline-block mb-3">Case 3</span>
                <h4 className="font-display text-md font-semibold text-navy mb-3">The Zero-Pay Trap</h4>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  A claim posts as zero-dollar with a CO-45 remark code. Biller assumes it is correct. In reality, it was billed under the wrong place-of-service modifier — a correctable error.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3 text-xs font-semibold text-red-500">
                Outcome: Procedural fee lost forever.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Block */}
      <section className="py-23 bg-white text-navy" id="services-list">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Disciplined Recovery</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">Five Disciplines, One Recovery Engine.</h2>
          </div>

          <div className="space-y-12">
            {services.map((srv, idx) => (
              <div key={idx} className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-10 relative">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-50"></div>
                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono font-bold text-xs bg-navy text-white px-2 py-1 rounded">
                        {srv.num}
                      </span>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-navy">{srv.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-neutral-600 mb-6 leading-relaxed bg-white p-4 rounded-xl border border-neutral-200">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm w-full lg:max-w-md">
                    <h4 className="font-mono font-bold text-[10px] uppercase text-teal mb-3 tracking-widest">Core Activities</h4>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      {srv.activities.map((act, mi) => (
                        <li key={mi} className="flex items-start gap-2">
                          <CheckCircle className="size-3.5 text-teal shrink-0 mt-0.5" /> <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Posting Protocol Table */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Meticulous Posting</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy leading-tight mb-4">
              Payment Type Posting Protocols
            </h2>
            <p className="text-xs md:text-sm text-neutral-500">
              Payment posting is where cash flow visibility begins. We don't just post; we audit matching allowable rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentProtocols.map((p, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-semibold text-navy mb-3 border-b border-neutral-50 pb-2 flex items-center gap-2">
                    <span className="size-2 bg-teal rounded-full"></span> {p.type}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-4">{p.desc}</p>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 text-[11px] text-neutral-600 font-sans italic">
                  <span className="font-semibold text-navy font-mono uppercase block text-[9px] mb-1">Clientele AI integration</span>
                  {p.ai}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE / CLIENTELE AI FUTURE MODULES */}
      <section className="py-20 bg-background border-b border-light text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Technology Timeline</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-navy">
              Where Clientele AI Enters the Back-End Workflow.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
              <span className="text-[10px] font-mono uppercase bg-teal/10 text-teal px-2 py-1 rounded inline-block mb-3">Module 5 — Q4 2026</span>
              <h4 className="font-display font-semibold text-lg text-navy mb-4">Payment Posting & Reconciliation AI</h4>
              <div className="space-y-4 text-xs md:text-sm">
                <div>
                  <h5 className="font-semibold text-teal text-xs mb-1">AI AUTOMATES:</h5>
                  <ul className="list-disc pl-4 text-neutral-500 space-y-1 text-xs">
                    <li>ERA/EOB posting across all payer networks automatically</li>
                    <li>Allowable contracted rate audits and mismatch identification</li>
                    <li>Clean coordination logic routing for partial/zero payments</li>
                    <li>Secondary statement dispatch and calculations</li>
                  </ul>
                </div>
                <div className="border-t border-neutral-200/60 pt-3">
                  <h5 className="font-semibold text-navy text-xs mb-1">HUMAN SPECIALISTS HANDLE:</h5>
                  <ul className="list-disc pl-4 text-neutral-500 space-y-1 text-xs">
                    <li>Disputed underpayment contract negotiations with payer claims departments</li>
                    <li>Manual adjustment reviews and exception authorisations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
              <span className="text-[10px] font-mono uppercase bg-teal/10 text-teal px-2 py-1 rounded inline-block mb-3">Module 6 — Q4 2026</span>
              <h4 className="font-display font-semibold text-lg text-navy mb-4">Denial Management & A/R Recovery AI</h4>
              <div className="space-y-4 text-xs md:text-sm">
                <div>
                  <h5 className="font-semibold text-teal text-xs mb-1">AI AUTOMATES:</h5>
                  <ul className="list-disc pl-4 text-neutral-500 space-y-1 text-xs">
                    <li>Denial classification based on primary EOB exception remark codes</li>
                    <li>Standard appeal template packaging matching diagnostic criteria</li>
                    <li>Claims timeline limit alerts and prioritization lists</li>
                  </ul>
                </div>
                <div className="border-t border-neutral-200/60 pt-3">
                  <h5 className="font-semibold text-navy text-xs mb-1">HUMAN SPECIALISTS HANDLE:</h5>
                  <ul className="list-disc pl-4 text-neutral-500 space-y-1 text-xs">
                    <li>Clinical Appeal package reviews and Doctor medical director calls</li>
                    <li>Manual clinical exception packets for surgical cases &gt;$500 value</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Denial Diagnostics Audit Table */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Denial Diagnostics</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy leading-tight">
              Understanding Your Denial Mix Tells us Where Upstream is Breaking.
            </h2>
          </div>

          <div className="overflow-hidden border border-neutral-200 rounded-2xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200 font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                  <th className="p-4 px-6">Denial Category</th>
                  <th className="p-4">Est. % of Mix</th>
                  <th className="p-4">Upstream Signal Indicator</th>
                  <th className="p-4 px-6">Where We Intervene</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs md:text-sm">
                {denialDiagnostics.map((d, i) => (
                  <tr key={i} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-4 px-6 font-semibold text-navy">{d.category}</td>
                    <td className="p-4 text-neutral-600">{d.rate}</td>
                    <td className="p-4 text-neutral-500">{d.signal}</td>
                    <td className="p-4 px-6 text-teal font-semibold">{d.intervention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specialty Challenges */}
      <section className="py-20 bg-background text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold block mb-3">Specialty Precision</span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy">Specialty-Specific Recovery Patterns.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
              <h4 className="font-semibold text-navy mb-2">Orthopedics</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                <strong>Dispute:</strong> Surgical post-op global period denials on subsequent lines.
              </p>
              <p className="text-xs text-neutral-600 italic">
                <strong>We recovery:</strong> Attach operative notes, add modifier -24/-79, and schedule peer dialogues manually.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
              <h4 className="font-semibold text-navy mb-2">Pain Management</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                <strong>Dispute:</strong> Conservative care requirement denials for nerve blocks.
              </p>
              <p className="text-xs text-neutral-600 italic">
                <strong>We recovery:</strong> Compile medical charts showing history of failed PT therapies before resubmission.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
              <h4 className="font-semibold text-navy mb-2">Anesthesia</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                <strong>Dispute:</strong> Modifiers mapped mismatching supervisor ratios.
              </p>
              <p className="text-xs text-neutral-600 italic">
                <strong>We recovery:</strong> Re-audit record logs to find certified ratios and correct electronic files.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
              <h4 className="font-semibold text-navy mb-2">Therapy (PT/OT)</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3">
                <strong>Dispute:</strong> Visited cap limits reached with no exception modifiers.
              </p>
              <p className="text-xs text-neutral-600 italic">
                <strong>We recovery:</strong> Evaluate functional logs, insert KX exception metrics and resubmit automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-3xl font-serif text-neutral-350 mb-6">“</div>
          <p className="font-display text-lg md:text-xl italic text-navy leading-relaxed">
            We had $340,000 sitting in A/R over 60 days when we engaged Clientele RCM. Within 90 days, they had recovered 78% of it — and identified three systemic billing issues that were generating new denials every week. The recovery paid for years of the engagement.
          </p>
          <div className="mt-6">
            <div className="font-bold text-sm text-navy">CFO</div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Multi-Specialty Ambulatory Practice · New York</div>
          </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="bg-navy text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-teal font-mono text-xs uppercase tracking-[0.22em] mb-4">Secure Revenue Postings</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">How Much Cash Is Stuck in Your A/R?</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
            Let us perform an exhaustive diagnostic of your aged collections. We will find lapsed claims, highlight systemic problems, and set up clear rules to resolve them.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#assessment" 
              onClick={handleAssessmentClick}
              className="rounded-full bg-teal text-navy px-8 py-4 font-semibold hover:bg-white hover:text-navy hover:scale-102 transition-all active:scale-98 cursor-pointer"
            >
              Get a Free A/R Assessment
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
