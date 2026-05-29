import React from 'react';
import { 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Bot, 
  TrendingUp, 
  HeartPulse, 
  ClipboardCheck, 
  Stethoscope, 
  Activity, 
  FileCheck2,
  Lock,
  Search
} from 'lucide-react';

interface RPMProps {
  navigate: (path: string) => void;
}

export default function RPM({ navigate }: RPMProps) {
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

  const codeTable = [
    { code: '99453', desc: 'Initial device setup + patient education', rate: '~$19–$21', freq: 'Once per device setup' },
    { code: '99454', desc: 'Device supply: 16+ days of data transmission', rate: '~$55–$64', freq: 'Monthly' },
    { code: '99457', desc: 'Clinical monitoring: first 20 minutes', rate: '~$50–$54', freq: 'Monthly' },
    { code: '99458', desc: 'Clinical monitoring: each additional 20 min', rate: '~$40–$44', freq: 'Monthly per increment' }
  ];

  const scaleImpacts = [
    { size: '25 Patients', earnings: '~$3,640 per month recurring' },
    { size: '50 Patients', earnings: '~$7,280 per month recurring' },
    { size: '100 Patients', earnings: '~$14,560 per month recurring' }
  ];

  const billingSteps = [
    {
      num: '01',
      title: 'Patient Eligibility Assessment',
      desc: 'Before enrollment, we audit your case folder to identify qualifying chronic disease panels. We verify patient eligibility against strict standards.',
      details: [
        'One or more primary chronic conditions (hypertension, diabetes, CHF, obesity, etc.)',
        'Direct order for RPM written by a physician or NPP',
        'Written or verbal patient consent documented in the medical file',
        'Use of FDA-cleared devices capable of automated cellular uploads'
      ]
    },
    {
      num: '02',
      title: 'Device Setup & Patient Education (CPT 99453)',
      desc: 'We manage and submit the setup code once, verifying proper education logs are recorded in the medical charts before billing the first unit.',
      details: [
        'Tracking setup events across EMR files',
        'Verifying device connection and patient understanding of rules',
        'Prevents duplicative billing or audit exposure'
      ]
    },
    {
      num: '03',
      title: 'Monthly Transmission Tracking (CPT 99454)',
      desc: 'We check cellular transmission counts daily to verify the mandatory threshold is secure before submitting the monthly supply claim.',
      details: [
        '16+ days of active automatic transmission = qualified',
        'Sub-threshold alerts routed to clinical outreach',
        'Eliminating fraud exposure on zero-upload accounts'
      ]
    },
    {
      num: '04',
      title: 'Clinical Time Tracking (CPT 99457 / 99458)',
      desc: 'We help clinical staff log and structure monitoring times to meet strict CMS and commercial payer requirements.',
      details: [
        '99457: First 20 mins — requires documented interactive communication with the patient',
        '99458: Additional 20 min intervals — separately tracked with individual notes'
      ]
    },
    {
      num: '05',
      title: 'Monthly Claims & Revenue Auditing',
      desc: 'At month-end, we review eligible patients, package claims, post remittances, manage denials, and compile precise client revenue summaries.',
      details: [
        'Pre-submission checks for overlap with RTM codes',
        'A/R tracking on RPM claims with same-day posting'
      ]
    }
  ];

  const opportunities = [
    { specialty: 'Primary Care / Internal Medicine', cond: 'Hypertension, Diabetes, CHF, COPD, Obesity', dev: 'BP cuffs, Glucometers, Pulse oximeters', note: 'Highest volume program potential. Recurring checks are central to panel care plans.' },
    { specialty: 'Orthopedics', cond: 'Post-surgical recovery with chronic comorbidities', dev: 'BP monitors, Activity trackers', note: 'Under-monitored panels recovery gaps are closed, helping surgical reviews.' },
    { specialty: 'Pain Management', cond: 'Chronic pain with comorbid hypertension, obesity', dev: 'BP devices, Scales', note: 'One enrollment serves double benefits: both clinical tracking and revenue capture.' },
    { specialty: 'Comprehensive Therapy (PT/OT)', cond: 'Post-stroke rehab, COPD, CHF in recovery', dev: 'Activity trackers, Pulse oximeters', note: 'Therapy teams use automatic records to safely plan next therapy schedules.' }
  ];

  return (
    <div className="bg-background text-foreground overflow-hidden text-left">
      {/* Hero Header */}
      <section className="relative bg-hero text-white py-20 lg:py-28">
        <div className="absolute inset-0 mesh-glow opacity-90 animate-pulse" style={{ animationDuration: '10s' }} aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.05]" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
              <HeartPulse className="size-3.5" /> Specialty Service — Remote Patient Monitoring (RPM)
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
              Your Chronic Care Patients Are <br />
              Already Generating RPM Revenue. <br />
              <span className="text-teal font-medium">Most Practices Just Aren't Collecting It.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              CMS made RPM reimbursable in 2019. In 2026, it remains one of the most underutilized revenue streams in specialty practice — not because practices lack eligible patients, but because RPM billing is complex enough that most billing teams do it wrong or not at all.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#assessment" 
                onClick={handleAssessmentClick}
                className="rounded-full bg-teal text-navy px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-navy transition-all hover:translate-x-0.5 active:scale-98 cursor-pointer"
              >
                Request an RPM Revenue Assessment
              </a>
              <a 
                href="#how-it-works"
                className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See How RPM Billing Works ↓
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-navy-deep/40 rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-card">
            <div className="text-4xl font-display font-bold text-teal">$115–$150</div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-2">Monthly per enrolled patient</div>
            <div className="text-xs text-white/60 mt-3 leading-relaxed">
              Average Medicare allowances across codes 99454, 99457, and 99458, representing passive monthly cash streams.
            </div>
            <div className="h-px bg-white/10 my-6"></div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Recurring Monthly Revenue
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> End-to-End Compliance
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Dynamic 16-Day Tracking
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Signal Grid */}
      <section className="bg-neutral-50 py-12 border-b border-light text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex items-center gap-4">
              <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <TrendingUp className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm">Recurring Stream</h4>
                <p className="text-xs text-neutral-500 mt-1">Enrollment turns existing caseload into stable monthly checks.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex items-center gap-4">
              <div className="size-11 rounded-xl bg-navy/10 flex items-center justify-center text-navy shrink-0">
                <ClipboardCheck className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm">50 Enrolled Patients = ~$7,280/mo</h4>
                <p className="text-xs text-neutral-500 mt-1">Generates substantial medical group profits safely under CMS.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex items-center gap-4">
              <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                <Stethoscope className="size-5" />
              </div>
              <div>
                <h4 className="font-semibold text-navy text-sm">Medicare CPT Mappings</h4>
                <p className="text-xs text-neutral-500 mt-1">We manage codes 99453, 99454, 99457, and 99458 end to end.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Details Lookup Table */}
      <section className="py-20 bg-background border-b border-light text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Medicare National Schedules</div>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-navy mb-6">CPT Code Fee Structure for RPM</h2>
              <div className="overflow-hidden border border-neutral-200 rounded-2xl bg-white shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-200 font-mono text-[9px] uppercase tracking-wider text-neutral-400">
                      <th className="p-4 px-6">CPT Code</th>
                      <th className="p-4">Description</th>
                      <th className="p-4">Est. Medicare Avg</th>
                      <th className="p-4 px-6">Billing Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-xs md:text-sm">
                    {codeTable.map((c, i) => (
                      <tr key={i} className="hover:bg-neutral-50/50 transition-colors">
                        <td className="p-4 px-6 font-mono font-bold text-teal">{c.code}</td>
                        <td className="p-4 font-medium text-navy">{c.desc}</td>
                        <td className="p-4 font-semibold text-navy">{c.rate}</td>
                        <td className="p-4 px-6 text-neutral-500">{c.freq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[10px] text-neutral-400 mt-4 leading-relaxed">
                * Rates represent Medicare national averages. Commercial and regional agreements will vary. Ensure proper contract audit before onboarding patient registries.
              </p>
            </div>

            <div className="lg:col-span-4 bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
              <h4 className="font-display font-semibold text-navy mb-4 text-base">Annual Scaling Analysis</h4>
              <div className="space-y-4">
                {scaleImpacts.map((s, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-neutral-150">
                    <span className="text-[10px] font-mono text-teal uppercase tracking-wider font-semibold block">{s.size}</span>
                    <span className="font-display text-md font-semibold text-navy block mt-1">{s.earnings}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Most Underbill Callout */}
      <section className="py-16 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold block mb-3">Operational Pitfalls</span>
            <h2 className="font-display text-3xl font-semibold">Why Most Practices Underbill RPM.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold bg-neutral-100 text-[#5bc0be] size-6 rounded flex items-center justify-center mb-4">1</div>
                <h4 className="font-semibold text-navy mb-2">Missing 99457/58</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Most setups bill code 99454 (device supply) easily but fail to track down the 20-minute clinic staff times needed for clinical tracking (99457).
                </p>
              </div>
              <div className="text-[11px] text-[#5bc0be] border-t border-neutral-100 pt-3 mt-4">
                Result: 35% of earnings left on table.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold bg-neutral-100 text-[#5bc0be] size-6 rounded flex items-center justify-center mb-4">2</div>
                <h4 className="font-semibold text-navy mb-2">16-Day Failures</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  99454 requires 16 days of successful, automatic cellular data. Busy practices bill with missing gaps (high fraud/audit risk) or fail to bill on active patients.
                </p>
              </div>
              <div className="text-[11px] text-[#5bc0be] border-t border-neutral-100 pt-3 mt-4">
                Result: Compliance rejections.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold bg-neutral-100 text-[#5bc0be] size-6 rounded flex items-center justify-center mb-4">3</div>
                <h4 className="font-semibold text-navy mb-2">Staff Time Gaps</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Clinicians document verbal patient calls but fail to format progress notes to CMS audit criteria, leaving codes unbillable.
                </p>
              </div>
              <div className="text-[11px] text-[#5bc0be] border-t border-neutral-100 pt-3 mt-4">
                Result: Unbillable clinic efforts.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold bg-neutral-100 text-[#5bc0be] size-6 rounded flex items-center justify-center mb-4">4</div>
                <h4 className="font-semibold text-navy mb-2">Vendor vs Biller</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Technical device vendors set up scales/meters but possess zero operational RCM billing experience. They do not fight denials.
                </p>
              </div>
              <div className="text-[11px] text-[#5bc0be] border-t border-neutral-100 pt-3 mt-4">
                Result: Mass coding denials.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RPM Billing Cycle Steps */}
      <section className="py-20 bg-background text-navy border-b border-light" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">End-To-End Administration</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">The complete RPM Billing Cycle — Managed.</h2>
          </div>

          <div className="space-y-10">
            {billingSteps.map((step, idx) => (
              <div key={idx} className="bg-neutral-50 p-8 rounded-2xl border border-neutral-150 grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="size-12 bg-navy text-white font-mono font-bold text-sm rounded-xl flex items-center justify-center shadow-sm">
                    {step.num}
                  </div>
                </div>
                <div className="md:col-span-6 text-left">
                  <h4 className="font-display font-semibold text-navy text-md mb-2">{step.title}</h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
                <div className="md:col-span-5 bg-white p-5 rounded-xl border border-neutral-200">
                  <span className="font-mono font-bold text-[9px] text-[#5bc0be] uppercase block tracking-wider mb-2">Check Details</span>
                  <ul className="space-y-1 text-xs text-neutral-600 list-disc pl-4 text-left">
                    {step.details.map((det, di) => (
                      <li key={di}>{det}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty-Specific opportunities */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Clinical Targets</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold">Which Specialties Benefit Most from RPM.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-neutral-200">
                <span className="text-[10px] font-mono text-[#5bc0be] uppercase tracking-widest block mb-2">{opp.specialty}</span>
                <h4 className="font-display font-semibold text-lg text-navy mb-4">Patient Target Mappings</h4>
                <div className="space-y-2 text-xs text-neutral-600 mb-4 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                  <div><strong>Qualifying Conditions:</strong> {opp.cond}</div>
                  <div><strong>Standard Devices:</strong> {opp.dev}</div>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  <strong>Clinical Nuance:</strong> {opp.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Block */}
      <section className="py-20 bg-background text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Risk Assessment</div>
              <h2 className="font-display text-3xl font-semibold text-navy leading-tight mb-4">
                RPM Billing Without Compliance Is Audit Risk.
              </h2>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed mb-6">
                CMS has flagged Remote Patient Monitoring as a high-scrutiny audit area. We build complete, verifiable compliance trails automatically so your clinical earnings remain secure under review.
              </p>
              <div className="bg-red-50 border border-red-100 rounded-xl p-5 text-xs text-neutral-700 font-sans leading-relaxed">
                <strong className="text-red-500 block font-mono uppercase text-[10px] tracking-wider mb-2">CMS Audit Findings:</strong>
                Common causes for overpayment recovery are: billing code 99454 with sub-16 transmission records; billing clinical monitoring without structured communication; enrolling patients with missing NPP signatures.
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Physician Order on File', desc: 'Every RPM patient must have a documented active physician or qualified NPP order, tracked for currency throughout.' },
                { title: 'Consents captured', desc: 'Written patient enrollment consent is obtained and mapped within registration files before active code schedules begin.' },
                { title: '16-Day Automated checking', desc: 'We track logs daily. If patients fall behind, alarms prompt clinical calls. Short months are excluded instantly.' },
                { title: 'Audit-ready formats', desc: 'Our clinical staff notes format encounters into standard CMS time structures to withstand external contractor audits.' }
              ].map((c, i) => (
                <div key={i} className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-navy text-xs md:text-sm mb-2">{c.title}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Service list */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Exhaustive Support</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy leading-tight">Everything included in our RPM Billing Service.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-xs md:text-sm">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <h4 className="font-display font-semibold text-navy text-base mb-4 border-b border-neutral-50 pb-2 flex items-center gap-2">
                <span className="size-2 bg-teal rounded-full animate-pulse"></span> Enrollment & Program Setup
              </h4>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Patient eligibility checks across active panel directories</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Physician RCM order validations and storage</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Onboarding consent workflows</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Payer pre-authorisations verification checks</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Medical staff template setups for clinical notes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-neutral-200">
              <h4 className="font-display font-semibold text-navy text-base mb-4 border-b border-neutral-50 pb-2 flex items-center gap-2">
                <span className="size-2 bg-navy rounded-full"></span> Monthly Execution
              </h4>
              <ul className="space-y-3 text-neutral-600">
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> 16-day transmission auditing on every open profile</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Patient-level 99454 logs validation pre-submission</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Documented clinical monitoring review (99457/58)</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Core claims formulation and transmission checks</li>
                <li className="flex items-center gap-2"><CheckCircle className="size-3.5 text-teal shrink-0" /> Denial tracking, post posting metrics, billing reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Quote */}
      <section className="py-20 bg-background text-navy border-b border-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-3xl font-serif text-neutral-300 mb-6">“</div>
          <p className="font-display text-lg md:text-xl italic text-navy leading-relaxed">
            We had 60 patients on RPM devices that our device vendor set up — and we'd been billing only 99454 for eight months. Clientele RCM identified that we were eligible to bill 99457 and 99458 for most of them. Our RPM revenue tripled in the first month.
          </p>
          <div className="mt-6">
            <div className="font-bold text-sm text-navy">Practice Manager</div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Internal Medicine Group · Connecticut</div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="bg-navy text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-teal font-mono text-xs uppercase tracking-[0.22em] mb-4">Capturing Unbilled Care</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Discover Your RPM Revenue Gap.</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
            Let us audit your clinic caseload. We will find eligible patients, verify insurance coverage rules, and reveal your potential recurring monthly collections.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#assessment" 
              onClick={handleAssessmentClick}
              className="rounded-full bg-teal text-navy px-8 py-4 font-semibold hover:bg-white hover:text-navy hover:scale-102 transition-all active:scale-98 cursor-pointer"
            >
              Get a Free RPM Audit
            </a>
            <button 
              onClick={() => navigate('/services/rtm')}
              className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold transition-all"
            >
              Check RTM Billing →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
