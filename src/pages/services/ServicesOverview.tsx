import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Bot, 
  Zap, 
  Activity, 
  TrendingUp, 
  HeartPulse, 
  Wind,
  ShieldCheck,
  Award
} from 'lucide-react';

interface ServicesOverviewProps {
  navigate: (path: string) => void;
}

export default function ServicesOverview({ navigate }: ServicesOverviewProps) {
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

  const mainRcm = [
    {
      title: 'Front-End RCM & Prevention',
      stage: 'Stage 1',
      desc: 'Eligibility verification, prior authorization mapping, and registration audits. We eliminate costly downstream errors before claims are ever created.',
      icon: Zap,
      points: ['98% First-Pass Resolution', 'Real-time coverage checks', 'Proactive auth securing'],
      route: '/services/front-end'
    },
    {
      title: 'Mid-Cycle Intelligence & Coding',
      stage: 'Stage 2',
      desc: 'AAPC-certified clinical documentation audits and dual-layered coding checks. Microsoft Nuance Ambient AI listens to encounters silently so surgeons can treat panels.',
      icon: Activity,
      points: ['99.1% Clean Claim rate', 'AAPC Certified coders in-loop', 'Nuance AI transcription'],
      route: '/services/mid-cycle'
    },
    {
      title: 'Back-End & A/R Recovery',
      stage: 'Stage 3',
      desc: ' ERA/EOB posting, underpayment auditing, and relentless A/R appeal pursuit. We turn aged balances into active cash, aiming for a 32-day target outline.',
      icon: TrendingUp,
      points: ['32-day average A/R target', 'Underpayment rate comparisons', 'Relentless appeal tracking'],
      route: '/services/back-end'
    }
  ];

  const remoteServices = [
    {
      title: 'Remote Patient Monitoring (RPM)',
      desc: 'Stable recurring income streams powered by cellular devices BP cuffs, Glucometers, and active daily transmission tracking. Ensuring full compliance with Medicare guidelines.',
      icon: HeartPulse,
      points: ['$115–$150/mo enrolled', '16+ day cellular tracking', 'Primary & chronic care targets'],
      route: '/services/rpm'
    },
    {
      title: 'Remote Therapeutic Monitoring (RTM)',
      desc: 'Monitor musculoskeletal range of motion (ROM) and therapeutic developments between facility sessions. Seamlessly structures therapists\u2019 billing allowances with Medicare.',
      icon: Wind,
      points: ['$80–$120/mo enrolled', 'Musculoskeletal range metrics', 'Therapy-only clinical bills'],
      route: '/services/rtm'
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-hidden text-left">
      {/* Hero */}
      <section className="relative bg-hero text-white py-20 lg:py-28">
        <div className="absolute inset-0 mesh-glow opacity-90 animate-pulse" style={{ animationDuration: '10s' }} aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.05]" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal mb-6">
            <Award className="size-3.5" /> High-Performance Specialty RCM
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
            Specialty-First <br />
            <span className="text-teal font-medium">Revenue Cycle Services.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
            Revenue cycle management isn\u2019t general bookkeeping. We marry advanced clinical AI automation with deep, specialty-certified human auditors to collect every dollar you are rightfully owed.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <a 
              href="#assessment" 
              onClick={handleAssessmentClick}
              className="rounded-full bg-teal text-navy px-8 py-4 font-semibold hover:bg-white hover:text-navy transition-all hover:translate-x-0.5 active:scale-98 cursor-pointer"
            >
              Get a Free Revenue Cycle Audit
            </a>
            <a 
              href="#rcm-core"
              className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 font-semibold transition-all"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('rcm-core')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Core Services ↓
            </a>
          </div>
        </div>
      </section>

      {/* RCM core section */}
      <section className="py-20 bg-background border-b border-light text-navy" id="rcm-core">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Core RCM Suite</div>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-navy">
              Three Stages. One Continuous Revenue Engine.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainRcm.map((rcm, i) => {
              const Icon = rcm.icon;
              return (
                <div key={i} className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-xs text-neutral-400 font-bold uppercase tracking-wider">{rcm.stage}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-navy mb-3">{rcm.title}</h3>
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed mb-6">{rcm.desc}</p>
                    <ul className="space-y-2 mb-8 text-xs text-neutral-600">
                      {rcm.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="size-3.5 text-teal shrink-0" /> <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => navigate(rcm.route)}
                    className="group border border-teal text-teal hover:bg-teal hover:text-navy rounded-full px-5 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 transition-all w-full"
                  >
                    View Stage Details 
                    <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Remote Services section */}
      <section className="py-20 bg-neutral-50 text-navy border-b border-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Specialty Modules</div>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold leading-tight text-navy">
                Remote Monitoring Services (RPM & RTM)
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                Unlock automated, recurring cash flows from physiological testing (RPM) and home exercise therapeutic checkups (RTM). We manage device transmissions, compliance documentation, and multi-code monthly submissions end-to-end.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {remoteServices.map((rem, i) => {
              const Icon = rem.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-neutral-200 p-8 flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <div className="size-11 rounded-xl bg-navy/10 flex items-center justify-center text-navy mb-6">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-navy mb-3">{rem.title}</h3>
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed mb-6">{rem.desc}</p>
                    <ul className="space-y-2 mb-8 text-xs text-neutral-600">
                      {rem.points.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="size-3.5 text-teal shrink-0" /> <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button 
                    onClick={() => navigate(rem.route)}
                    className="group border border-navy text-navy hover:bg-navy hover:text-white rounded-full px-5 py-2.5 text-xs font-semibold flex items-center justify-center gap-2 transition-all w-full"
                  >
                    Explore Module
                    <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-background text-navy border-b border-light text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-3xl font-serif text-neutral-350 mb-6 font-semibold">“</div>
          <p className="font-display text-lg md:text-xl italic text-navy leading-relaxed">
            By integrating front-end verification, certified coding, and tireless back-end collection follow-up, Clientele RCM single-handedly captured over $450,000 in unrecognized billing leakage for our multi-clinic operation.
          </p>
          <div className="mt-6">
            <div className="font-bold text-sm text-navy">VP of Finance</div>
            <div className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Multi-State Rehabilitation & Medical Center</div>
          </div>
        </div>
      </section>

      {/* Bottom CTA to Action */}
      <section className="bg-navy text-white py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-teal font-mono text-xs uppercase tracking-[0.22em] mb-4">A Complete RCM Solution</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Maximize Your Practice Collection Velocity.</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
            Let us conduct a deep revenue leakage audit on your billing profiles. We will diagnose problems, model cash curves, and set up a compliant prevention roadmap.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#assessment" 
              onClick={handleAssessmentClick}
              className="rounded-full bg-teal text-navy px-8 py-4 font-semibold hover:bg-white hover:text-navy transition-all hover:scale-102 active:scale-98 cursor-pointer"
            >
              Get a Free Revenue Cycle Audit
            </a>
            <button 
              onClick={() => navigate('/')}
              className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold transition-all"
            >
              Return Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
