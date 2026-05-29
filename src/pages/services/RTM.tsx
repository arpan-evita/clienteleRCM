import React from 'react';
import { 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Bot, 
  TrendingUp, 
  ClipboardCheck, 
  Stethoscope, 
  Activity, 
  FileCheck,
  Wind,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

interface RTMProps {
  navigate: (path: string) => void;
}

export default function RTM({ navigate }: RTMProps) {
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

  const cptTable = [
    { code: '98975', desc: 'Initial setup — device supply & patient education', rate: '~$19–$21', freq: 'Once per device type' },
    { code: '98976', desc: 'Device supply — musculoskeletal data (16+ days)', rate: '~$55–$64', freq: 'Monthly' },
    { code: '98977', desc: 'Device supply — respiratory data (16+ days)', rate: '~$55–$64', freq: 'Monthly' },
    { code: '98980', desc: 'Treatment management — first 20 minutes', rate: '~$50–$54', freq: 'Monthly' },
    { code: '98981', desc: 'Treatment management — each additional 20 min', rate: '~$40–$44', freq: 'Monthly per increment' }
  ];

  const scaleTable = [
    { size: '25 Patients', earnings: '~$2,900–$3,600 per month recurring (CPT mix)' },
    { size: '50 Patients', earnings: '~$5,800–$7,200 per month recurring' },
    { size: '100 Patients', earnings: '~$11,600–$14,400 per month recurring' }
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
              <Wind className="size-3.5" /> Specialty Service — Remote Therapeutic Monitoring (RTM)
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
              Your Therapy Patients Are Generating RTM <br />
              Revenue Between Every Visit. <br />
              <span className="text-teal font-medium">Almost Nobody Is Billing It Correctly.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              CMS introduced Remote Therapeutic Monitoring in 2022 to reimburse the clinical work that happens between patient visits — exercise adherence, pain monitoring, respiratory data, and therapeutic outcomes. Three years later, most therapy practices either don't bill it, bill it incompletely, or confuse it with RPM.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#assessment" 
                onClick={handleAssessmentClick}
                className="rounded-full bg-teal text-navy px-6 py-3.5 text-sm font-semibold hover:bg-white hover:text-navy transition-all hover:translate-x-0.5 active:scale-98 cursor-pointer"
              >
                Request an RTM Revenue Assessment
              </a>
              <a 
                href="#vs-rpm"
                className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-3.5 text-sm font-semibold transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('vs-rpm')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Compare with RPM ↓
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 bg-navy-deep/40 rounded-3xl p-8 border border-white/10 backdrop-blur-md shadow-card">
            <div className="text-4xl font-display font-bold text-teal">$80–$120</div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/80 mt-2">Monthly per enrolled patient</div>
            <div className="text-xs text-white/60 mt-3 leading-relaxed">
              Average Medicare allowances across therapeutic musculoskeletal or respiratory monitoring code sets.
            </div>
            <div className="h-px bg-white/10 my-6"></div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Musculoskeletal Tracking
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Respiratory Code Audit
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70">
                <CheckCircle className="size-4 text-teal shrink-0" /> Therapist Billing Rights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTM vs RPM Comparison Grid */}
      <section className="py-20 bg-background border-b border-light text-navy" id="vs-rpm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Critical Distinction</div>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy">RTM vs. RPM — The Key Differences</h2>
          </div>

          <div className="overflow-hidden border border-neutral-200 rounded-2xl bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200 font-mono text-[9px] uppercase tracking-wider text-neutral-400">
                  <th className="p-4 px-6">Factor</th>
                  <th className="p-4">Physiological (RPM)</th>
                  <th className="p-4">Therapeutic (RTM)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs md:text-sm">
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 px-6 font-semibold text-navy">What is monitored</td>
                  <td className="p-4 text-neutral-600">Physiological data (Blood pressure, glucose, heart weight)</td>
                  <td className="p-4 text-teal font-semibold">Therapeutic data (Exercise adherence, pain scores, ROM progress, therapy respiratory)</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 px-6 font-semibold text-navy">Device requirement</td>
                  <td className="p-4 text-neutral-600">FDA-cleared physiological device (cellular uploads)</td>
                  <td className="p-4 text-teal font-semibold">Software/App-based tracking — FDA device not strictly required</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 px-6 font-semibold text-navy">Who can bill</td>
                  <td className="p-4 text-neutral-600">Physicians, NPPs (PA/NP)</td>
                  <td className="p-4 text-teal font-semibold">Physicians, NPPs, AND qualified physical/occupational therapists</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 px-6 font-semibold text-navy">Primary specialties</td>
                  <td className="p-4 text-neutral-600">GP/Internal Medicine, Cardiology, Diabetes panels</td>
                  <td className="p-4 text-teal font-semibold">PT, OT, SLP, Orthopedic rehab, Pain management, RT clinics</td>
                </tr>
                <tr className="hover:bg-neutral-50/50">
                  <td className="p-4 px-6 font-semibold text-navy">CPT Codes set</td>
                  <td className="p-4 text-mono text-xs text-neutral-500">99453, 99454, 99457, 99458</td>
                  <td className="p-4 text-mono text-xs text-teal font-bold">98975, 98976, 98977, 98980, 98981</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* RTM Fee Tables and Scale */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Therapy Revenue Scale</div>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-navy mb-6">CPT Code Fee Structure for RTM</h2>
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
                    {cptTable.map((c, i) => (
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
                * RTM data collection occurs via therapeutic app dashboards. Commercial payer coverage for therapy-only lines varies by region.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h4 className="font-display font-semibold text-navy mb-4 text-base">Annual Caseload Returns</h4>
              <div className="space-y-4">
                {scaleTable.map((s, i) => (
                  <div key={i} className="bg-neutral-50 p-4 rounded-xl border border-neutral-150">
                    <span className="text-[10px] font-mono text-teal uppercase tracking-wider font-semibold block">{s.size}</span>
                    <span className="font-display text-xs md:text-sm font-semibold text-navy block mt-1">{s.earnings}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Reasons Underbilled */}
      <section className="py-20 bg-background border-b border-light text-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold block mb-3">Administrative Leakage</span>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy">Why Most Therapy Practices Underbill RTM.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between">
              <div>
                <span className="font-mono text-teal font-extrabold text-[#5bc0be] block mb-3 text-lg">1</span>
                <h4 className="font-semibold text-navy text-xs md:text-sm mb-2">Not billing at all</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Therapy clinics use exercise progress mobile apps which qualify fully for RTM — but have zero RCM billing setups.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between">
              <div>
                <span className="font-mono text-teal font-extrabold text-[#5bc0be] block mb-3 text-lg">2</span>
                <h4 className="font-semibold text-navy text-xs md:text-sm mb-2">Setup code errors</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Billing code 98975 (setup & education) is classified as a one-time charge, but billers often submit it monthly, drawing CMS recoup audits.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between">
              <div>
                <span className="font-mono text-teal font-extrabold text-[#5bc0be] block mb-3 text-lg">3</span>
                <h4 className="font-semibold text-navy text-xs md:text-sm mb-2">Musculoskeletal vs Respiratory</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  98976 checks joint/muscle logs, while 98977 checks lungs. Confusing the codes risks automated payer rejection.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between">
              <div>
                <span className="font-mono text-teal font-extrabold text-[#5bc0be] block mb-3 text-lg"> 4</span>
                <h4 className="font-semibold text-navy text-xs md:text-sm mb-2">Sub-16 day limits</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Without active tracking, therapy billers accidentally charge code 98976 for patients with only 12 days of app logins, drawing heavy non-compliance flags.
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150 flex flex-col justify-between">
              <div>
                <span className="font-mono text-teal font-extrabold text-[#5bc0be] block mb-3 text-lg">5</span>
                <h4 className="font-semibold text-navy text-xs md:text-sm mb-2">Undocumented times</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Staff actively consult app tracking details but fail to record exact times and clinical interactions required for CPT 98980 collections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RTM Stackability with RPM */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left">
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Payer Guidelines</div>
              <h2 className="font-display text-3xl font-semibold leading-tight text-navy mb-4">
                RTM + RPM: Can a Practice Bill Both for the Same Patient?
              </h2>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed mb-6">
                <strong>Yes — with conditions.</strong> CMS allows both clinical monitoring frames to run in the same calendar month, provided:
              </p>
              <ul className="space-y-3 text-xs md:text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="size-2 bg-teal rounded-full mt-1.5 font-bold shrink-0"></span>
                  <span>Data models are distinct (e.g., physiological metrics for RPM vs. range-of-motion reports for RTM).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-2 bg-teal rounded-full mt-1.5 font-bold shrink-0"></span>
                  <span>Times are clearly split and separately documented.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 text-left text-xs text-neutral-600">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <span className="font-mono text-[9px] uppercase tracking-wider text-teal block mb-1">Scenario A — Orthopedics</span>
                <h4 className="font-semibold text-navy mb-1 text-xs md:text-sm">Post-Surgical with Comorbid Hypertension</h4>
                <p className="text-xs text-neutral-500 mt-2">
                  <strong>RPM:</strong> BP monitor checks hypertension metrics.<br />
                  <strong>RTM:</strong> Hand therapist checks ROM app scores.<br />
                  <span className="text-teal font-semibold block mt-2">Both billable independently.</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm">
                <span className="font-mono text-[9px] uppercase tracking-wider text-teal block mb-1">Scenario B — Pulmonology / RT</span>
                <h4 className="font-semibold text-navy mb-1 text-xs md:text-sm">COPD with Congestive Heart Failure</h4>
                <p className="text-xs text-neutral-500 mt-2">
                  <strong>RPM:</strong> Pulse-ox oximetry reviews COPD progress.<br />
                  <strong>RTM:</strong> Lung muscle exercise adherence app reviews breathing drills.<br />
                  <span className="text-teal font-semibold block mt-2">Separate device types, separate clinical targets.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Applications list */}
      <section className="py-20 bg-background text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Clinical Targets</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-navy leading-tight">RTM by Specialty — Who Benefits.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150">
              <h4 className="font-display font-semibold text-md text-navy mb-2">Physical Therapy (PT)</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3"><strong>Monitors:</strong> Adherence to home exercises, pain scores, range-of-motion progress.</p>
              <div className="p-3 bg-white rounded border border-neutral-100 text-xs font-mono text-teal">98976 musculoskeletal targets</div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150">
              <h4 className="font-display font-semibold text-md text-navy mb-2">Occupational Therapy (OT)</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3"><strong>Monitors:</strong> ADL adaptation schedules, functional progress scores, wrist dexterity.</p>
              <div className="p-3 bg-white rounded border border-neutral-100 text-xs font-mono text-teal">98975 + 98976 upper body lines</div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-150">
              <h4 className="font-display font-semibold text-md text-navy mb-2">Speech Therapy (SLP)</h4>
              <p className="text-xs text-neutral-500 leading-relaxed mb-3"><strong>Monitors:</strong> Swallowing logs, voice clarity recording adherence progress.</p>
              <div className="p-3 bg-white rounded border border-neutral-100 text-xs font-mono text-teal">98980 therapy tracking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Payer Reality Assessment */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.18em] text-teal font-semibold block mb-2">Payer Integrity</span>
              <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-navy mb-3">The Commercial Payer Reality (Transparency First).</h3>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed mb-4">
                Unlike RPM, which possesses broad commercial coverage, RTM commercial policies are still active but uneven. Some major private plans do not have established fee rules in 2026.
              </p>
              <p className="text-xs text-neutral-600 font-semibold bg-white p-4 rounded-xl border border-neutral-200 leading-relaxed">
                Before enrollments, we run verification checks across every patient mix payer plan. If there is no coverage, we exclude them. This payer-first approach avoids massive write-offs or denial cascades.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm">
              <div className="space-y-4 text-xs md:text-sm">
                <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
                  <span className="font-bold text-navy">Medicare Services</span>
                  <span className="text-teal font-mono font-bold">100% full coverage for all 5 codes</span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
                  <span className="font-bold text-navy">Medicaid Plans</span>
                  <span className="text-amber-500 font-mono font-bold">Varies heavily by state rules</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="font-bold text-navy">Commercial Coverages</span>
                  <span className="text-blue-500 font-mono font-bold">Pre-verified by Clientele before enrollment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-background text-navy border-b border-light text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-3xl font-serif text-neutral-350 mb-6">“</div>
          <p className="font-display text-lg md:text-xl italic text-navy leading-relaxed">
            We'd been running a home exercise program through our therapy software for two years without billing RTM. Clientele RCM identified 43 Medicare patients in our active caseload who qualified. We went live with RTM billing in 30 days. It's now $4,000+ in monthly revenue we weren't capturing.
          </p>
          <div className="mt-6">
            <div className="font-bold text-sm text-navy">Director of Rehabilitation Services</div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Multi-Specialty Practice · New Jersey</div>
          </div>
        </div>
      </section>

      {/* CTA Footer Block */}
      <section className="bg-navy text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-teal font-mono text-xs uppercase tracking-[0.22em] mb-4">Therapy Optimization</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Verify Your Practice RTM Potentials.</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
            Let our compliance directors run an evaluation of your active therapy lists and map what co-pays and allowances are hidden between therapy periods.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#assessment" 
              onClick={handleAssessmentClick}
              className="rounded-full bg-teal text-navy px-8 py-4 font-semibold hover:bg-white hover:text-navy hover:scale-102 transition-all active:scale-98 cursor-pointer"
            >
              Get a Free RTM Assessment
            </a>
            <button 
              onClick={() => navigate('/services/rpm')}
              className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold transition-all"
            >
              Check RPM billing →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
