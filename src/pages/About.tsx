import { CheckCircle, Award, Shield, Users, Landmark, Heart, Sparkles, Building2, Globe } from 'lucide-react';

interface AboutProps {
  navigate: (path: string) => void;
}

export default function About({ navigate }: AboutProps) {
  const stats = [
    { label: 'Year Founded', val: '2016', desc: '10 years of real-world RCM experience' },
    { label: 'RCM Professionals', val: '40+', desc: 'AAPC-certified coders, billers & AR specialists' },
    { label: 'Certified Coders', val: '30+', desc: 'Multi-specialty depth, average 5-12+ yrs experience' },
    { label: 'Practices Served', val: '50+', desc: 'Orthopedics, pain, anesthesia & therapy clinics' },
    { label: 'EMR Platforms', val: '11+', desc: 'eClinicalWorks, Meditech, Cerner, ModMed & more' },
    { label: 'U.S. States', val: '7 States', desc: 'MI · IL · FL · NY · CT · NJ · DC footprints' },
  ];

  const philosophyValues = [
    {
      title: 'Specialty-First Priority',
      desc: 'We do not general-queue. Orthopedics, pain management, anesthesia, and physical therapy are complex. We align our workflows with your specific LCD, compliance, and payer policies.',
      icon: Heart
    },
    {
      title: 'Certified Audited Loops',
      desc: 'AI handles processing volume at speed. Our AAPC-certified billing auditors and coding specialists handle complexity, validating coding selections before submission.',
      icon: Award
    },
    {
      title: 'No Rip-and-Replace',
      desc: 'We pre-integrate directly with your EMR/PM systems, mapping into existing schedulers. Zero software change struggles or workflow disruption.',
      icon: Shield
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* About page Hero Banner */}
      <section className="relative bg-hero text-white overflow-hidden py-20 lg:py-28 flex items-center">
        <div className="absolute inset-0 mesh-glow animate-pulse" style={{ animationDuration: '8s' }} aria-hidden="true"></div>
        <div className="absolute inset-0 grid-noise opacity-[0.06]" aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-1 w-full text-left items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/25 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal-glow mb-6">
              <Building2 className="size-3.5" /> Est. 2016 · Specialty RCM
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
              Built by practitioners who <br />
              understand high-complexity <br />
              <span className="text-teal font-medium">Billing.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Generalist billing companies handle medical claims as general clerks. We built Clientele RCM to marry interventional specialty expertise with intelligent workflows, ensuring every unit is rightfully captured and collected.
            </p>
          </div>
        </div>
      </section>

      {/* Scale By the Numbers Grid */}
      <section className="relative bg-background py-20 border-b border-light text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">By the Numbers</div>
            <h2 className="font-display text-3xl lg:text-4xl text-navy leading-tight font-semibold">Scale that comes from earned, long-term client relationships.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-background p-8 lg:p-10 relative group hover:bg-neutral-50 transition-colors">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60"></div>
                <div className="font-display text-[42px] lg:text-[48px] text-navy font-bold tracking-tight mb-3">
                  {stat.val}
                </div>
                <div className="text-xs font-bold text-navy mb-1.5 uppercase tracking-widest">{stat.label}</div>
                <div className="text-xs md:text-sm text-neutral-500 leading-relaxed">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Details Model */}
      <section className="bg-neutral-50/50 py-20 border-b border-light text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3">Our Model</div>
              <h2 className="font-display text-3xl lg:text-4xl text-navy leading-tight mb-6 font-semibold">
                AI does the heavy lifting. <br />
                <span className="italic text-foreground/70 font-normal font-sans">Humans ensure the accuracy.</span>
              </h2>
              <div className="space-y-5 text-neutral-600 leading-relaxed max-w-2xl text-xs md:text-sm">
                <p>
                  Most RCM automation tools are built for volume. They process claims fast and flag exceptions — but when it comes to a $12,000 orthopedic procedure denial or an anesthesia cross-walk error, automated rejection is not the same as human resolution.
                </p>
                <p>
                  At Clientele RCM, every AI-assisted workflow has a certified professional in the loop. Our AAPC-certified coders review all complex cases flagged by Clientele AI. Our billing specialists validate payer-specific rule changes. Our AR team pursues denials with the context that only comes from specialty experience.
                </p>
                <p className="font-semibold text-navy">
                  We call it Human-Guided Automation — and it's the reason our clean claim rate holds at 99.1% while our denial rate stays well below the industry average.
                </p>
              </div>
            </div>

            {/* Side illustration cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm text-left">
                <div className="flex gap-4 items-start">
                  <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <CheckCircle className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm md:text-base">99.1% Clean Claim Rate</h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Rigorous dual validation (AI checking + AAPC auditing) ensures medical claims are correct before submission.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm text-left">
                <div className="flex gap-4 items-start">
                  <div className="size-11 rounded-xl bg-navy-deep/5 flex items-center justify-center text-navy shrink-0">
                    <Globe className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy text-sm md:text-base">Universal EMR pre-connections</h3>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">Plugs into eClinicalWorks, ModMed, Medicare, and leading tools directly, fetching billing data seamlessly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillar Foundation values */}
      <section className="bg-background py-20 border-b border-light text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.22em] text-teal font-semibold mb-3 block">Commitments</span>
            <h2 className="font-display text-3xl lg:text-4xl text-navy font-semibold">The Foundations of Clientele RCM</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyValues.map((value, score) => {
              const ValueIcon = value.icon;
              return (
                <div key={score} className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 hover:shadow-md transition-all text-left flex flex-col justify-between">
                  <div className="size-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-6">
                    <ValueIcon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy text-base md:text-lg mb-2">{value.title}</h3>
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payer relationships desk */}
      <section className="bg-neutral-50/50 py-20 border-b border-light text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-teal font-semibold mb-3 block">Payer Relationships</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold">Deep expertise with all leading payers</h2>
            <p className="mt-3 text-muted-foreground text-xs md:text-sm">We handle high-complexity billing policies and modifiers for every major Commercial, Managed Care, and Government payer nationwide.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Medicare & Medicaid', 'Blue Cross Blue Shield', 'UnitedHealthcare', 
              'Aetna Health', 'Cigna Healthcare', 'Humana', 
              'Tricare Military', 'Priority Health', 'HAP Michigan',
              'WellCare Medicare', 'Centene Corporation', 'Molina Healthcare'
            ].map((payer, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-neutral-200/60 rounded-xl h-16 flex items-center justify-center px-4 text-center text-xs font-bold text-navy/70 hover:border-teal/50 hover:bg-white hover:text-teal transition-colors shadow-xs cursor-pointer"
              >
                {payer}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA assessment request */}
      <section id="assessment" className="bg-navy py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-2.5xl md:text-4xl font-semibold leading-tight">Partner with Clientele RCM</h2>
          <p className="mt-4 text-teal/80 text-sm max-w-lg mx-auto">Stop leaving your hard-earned revenue to chance. Let us conduct a complete RCM audit of your facilities.</p>
          <div className="mt-8">
            <button 
              onClick={() => {
                document.getElementById('app-header')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => navigate('/'), 100);
                setTimeout(() => {
                  document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                }, 200);
              }}
              className="inline-flex items-center gap-2 rounded-full bg-teal text-navy px-6 py-3.5 font-bold hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow"
            >
              Consult On Your Accounts →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
