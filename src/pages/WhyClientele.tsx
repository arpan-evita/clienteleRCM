import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  ShieldCheck, 
  Award, 
  Lock, 
  Calendar, 
  MapPin, 
  Users, 
  TrendingUp, 
  Percent, 
  RefreshCw, 
  Clock, 
  DollarSign, 
  ChevronDown, 
  ArrowRight,
  Sparkles,
  Zap,
  Star,
  Activity,
  Heart,
  Shield,
  FileCheck,
  AlertCircle
} from 'lucide-react';

interface WhyClienteleProps {
  navigate: (path: string) => void;
}

export default function WhyClientele({ navigate }: WhyClienteleProps) {
  // State for Section 4 (6 Core Differentiators Accordion)
  const [activeCard, setActiveCard] = useState<number | null>(0);

  // Trust/Credential signals for Section 2 Trust Bar
  const statsTrustTokens = [
    { signal: 'HIPAA Certified', text: 'HIPAA Certified', icon: ShieldCheck },
    { signal: 'HBMA Member', text: 'Proud HBMA Member', icon: Award },
    { signal: 'SOC2 Type II In Progress', text: 'Compliance · Q3 2026', icon: Lock },
    { signal: 'Since 2016', text: '10 Years of RCM Expertise', icon: Calendar },
    { signal: '7 States Served', text: 'MI · IL · FL · NY · CT · NJ · DC', icon: MapPin },
    { signal: '50+ Practices', text: '50+ Healthcare Practices', icon: Users },
  ];

  // Headline words for staggered split animation
  const headlineWords = [
    { text: 'Built', accent: false },
    { text: 'Different.', accent: false, breakAfter: true },
    { text: 'Proven', accent: true, italic: true },
    { text: 'Different.', accent: false }
  ];

  // Formatted data for Section 4 (6 Core Differentiators)
  const differentiators = [
    {
      num: '01',
      title: 'Specialty Depth, Not Breadth',
      preview: 'Certified coders who specialize in the four specialties where billing complexity is highest — not generalists handling every code set.',
      expanded: 'Generic RCM companies handle every specialty the same way. We don\'t. Our certified coders specialize in Orthopedics, Pain Management, Anesthesia, and Comprehensive Therapy — the four areas where documentation complexity, prior auth failure, and payer bundling behavior cause the most revenue leakage. One missed modifier in an orthopedic global period costs you more than an entire billing cycle.',
      proof: '30+ AAPC-certified coders · Multi-specialty · 5–12 years experience',
      icon: Activity
    },
    {
      num: '02',
      title: 'Outcome-Based Engagement',
      preview: 'No flat retainer. Our fee is tied entirely to your collections — our incentive is your growth, not your invoice.',
      expanded: 'We do not charge a flat monthly fee. Our engagement model is tied entirely to your collections. When your revenue improves, we earn more. When claims fail, we absorb the cost of rework — not you. This isn\'t a sales promise. It\'s the contract structure.',
      proof: '"We only get paid when you get paid." · Percentage-based on collections',
      icon: DollarSign
    },
    {
      num: '03',
      title: 'Human-Guided Automation',
      preview: 'AI handles the volume. AAPC-certified coders handle the exceptions. Together, they scale without sacrificing accuracy.',
      expanded: 'AI is fast. Humans are precise. Clientele AI handles volume, pattern recognition, and eligibility verification at machine speed. Our certified coders handle edge cases and payer-specific judgment calls that no model gets right consistently. The result is neither fully manual nor blindly automated — it\'s the only model that actually scales.',
      proof: 'Module 1 (Insurance Eligibility Verification) live May 2026 · Full platform rollout 2026',
      icon: Zap
    },
    {
      num: '04',
      title: 'Denial Prevention as a Feedback Loop',
      preview: 'Every denial is a data signal — root cause analyzed, pattern identified, protocol updated before the next claim submits.',
      expanded: 'Most RCM companies manage denials after they happen. We treat every denial as a data point — root cause analyzed, pattern identified, protocol updated, future claim corrected before it leaves the practice. The result: our denial rate is already half the industry average. With Clientele AI\'s Denial Management module, we\'re targeting below 5%.',
      proof: 'Current denial rate 10% vs. industry average 15–20% · Target <5% post-automation',
      icon: RefreshCw
    },
    {
      num: '05',
      title: 'Compliance Without Compromise',
      preview: 'HIPAA certified. HBMA member. SOC2 Type II audit underway. BAA executed with every client before work begins.',
      expanded: 'Compliance isn\'t a checkbox on this team. HIPAA certification is current. HBMA membership is active. SOC2 Type II audit is underway — expected Q3 2026. Every coder is AAPC-certified. Business Associate Agreements are executed with every client before a single claim is touched. Our Bangalore operations team operates under the same HIPAA compliance framework as our US office.',
      proof: 'HIPAA · HBMA Member · SOC2 audit underway (expected Q3 2026) · BAA on every engagement',
      icon: ShieldCheck
    },
    {
      num: '06',
      title: 'Clientele AI — Built by RCM Professionals',
      preview: 'Every AI platform targeting RCM was built by engineers who learned billing afterward. Ours was built the other way around.',
      expanded: 'Clientele AI was designed by the team that has been doing this billing work since 2016 — for the specific specialties where it\'s hardest. The result is automation that doesn\'t break on edge cases, because the people who built it have lived those edge cases. No other RCM automation platform can say that.',
      proof: '10 years in practice-specific RCM · Platform built on real specialty billing data',
      icon: Sparkles
    }
  ];

  // Specific content for Section 6 Compliance Cards
  const complianceStack = [
    {
      title: 'HIPAA Certified',
      desc: 'All staff, systems, and processes are HIPAA-compliant — including our Bangalore operations team. A Business Associate Agreement is executed with every client before work begins.',
      badgeText: '🟢 Active · 2026',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/50 text-[10px]',
      icon: ShieldCheck
    },
    {
      title: 'Proud HBMA Member',
      desc: 'Member of the Healthcare Billing and Management Association — the professional body setting the standard for medical billing integrity in the United States.',
      badgeText: '🟢 Active Member',
      badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/50 text-[10px]',
      icon: Award
    },
    {
      title: 'SOC2 Type II — In Progress',
      desc: 'Independent audit currently underway. Expected completion Q3 2026. Security controls, access management, and operational protocols are already built to SOC2 standards.',
      badgeText: '🟡 In Progress · Q3 2026',
      badgeClass: 'bg-amber-50 text-amber-700 border-amber-200/50 text-[10px]',
      icon: Lock
    },
    {
      title: 'AAPC-Certified Team',
      desc: 'Every coder and biller on our team holds AAPC certification. Minimum five years of specialty-specific experience. No generalist staffing.',
      badgeText: '🔵 30+ Certified Coders',
      badgeClass: 'bg-blue-50 text-blue-700 border-blue-200/50 text-[10px]',
      icon: Users
    }
  ];

  // Pillars for Section 7 (Engagement Model)
  const pillars = [
    {
      title: 'Zero Retainer',
      desc: 'We earn only when you collect. No fixed monthly cost regardless of claim volume or denial rate.',
      icon: DollarSign
    },
    {
      title: 'Rework at Our Cost',
      desc: 'Denied claims we submitted get corrected and resubmitted on our time — not billed back to your practice.',
      icon: RefreshCw
    },
    {
      title: '30-Day Go-Live',
      desc: 'Transition management is our responsibility. Parallel run ensures zero revenue gap during cutover from your previous vendor.',
      icon: Clock
    }
  ];

  // Testimonials for Section 8
  const testimonials = [
    {
      quote: '"Before Clientele, we were submitting clean claims maybe 80% of the time. Within 90 days we were above 97%. The prior auth workflow alone paid for the entire engagement."',
      attribution: 'Revenue Cycle Manager · Multi-Specialty Orthopedic Clinic · Michigan'
    },
    {
      quote: '"What stood out was how fast the transition was. We were live in under 30 days with zero gap in billing. We didn\'t lose a single claim during the cutover period."',
      attribution: 'CFO · Multi-Specialty Ambulatory Practice · New York'
    },
    {
      quote: '"Every other vendor I evaluated quoted me a retainer and a 90-day runway. Clientele said: give us 30 days and we only get paid when you do. That\'s a completely different conversation."',
      attribution: 'Practice Administrator · Orthopedic Surgery Group · Michigan'
    }
  ];

  // Handle CTA redirection to home page form
  const handleAssessmentClick = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('assessment');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* SECTION 1: HERO */}
      <section className="relative bg-navy text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.06] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full text-left">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (55-60% width) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Trust Tag */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal mb-6 w-fit select-none">
                <Sparkles className="size-3.5" /> High-Complexity RCM Revamped
              </span>
              
              {/* Staggered Word Entry Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight">
                {headlineWords.map((word, idx) => (
                  <React.Fragment key={idx}>
                    <motion.span
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.5, ease: 'easeOut' }}
                      className={`inline-block ${word.accent ? 'text-teal font-medium' : 'text-white'} ${word.italic ? 'italic' : ''}`}
                    >
                      {word.text}
                    </motion.span>
                    {word.breakAfter ? <br /> : ' '}
                  </React.Fragment>
                ))}
              </h1>
              
              {/* Sub-headline slides up 200ws delay */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-base md:text-lg text-white/70 max-w-2xl leading-relaxed"
              >
                Not just outsourcing. Not just automation. A revenue partnership — outcome-based, specialty-certified, and accountable to your results from day one.
              </motion.p>
              
              {/* CTA Block (Two CTAs) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <button
                  onClick={handleAssessmentClick}
                  className="rounded-full bg-teal text-navy px-6 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center"
                >
                  Request a Free RCM Assessment →
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('comparison-table');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="rounded-full border border-white/20 bg-white/5 text-white px-6 py-4 font-bold text-sm tracking-wide hover:bg-white/10 transition-all active:scale-98 cursor-pointer text-center"
                >
                  See How We Compare
                </button>
              </motion.div>
              
              {/* Trust micro-copy below CTAs */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-6 text-[10px] md:text-xs text-white/40 tracking-wider uppercase font-semibold flex flex-wrap items-center gap-x-2 gap-y-1"
              >
                <span>🔒 HIPAA Certified</span>
                <span className="text-white/20">•</span>
                <span>HBMA Member</span>
                <span className="text-white/20">•</span>
                <span>SOC2 In Progress</span>
                <span className="text-white/20">•</span>
                <span>80+ RCM Professionals</span>
              </motion.p>
            </div>
            
            {/* Right Column (Abstract Split Mockups / Workflows) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl border border-white/10 bg-navy-deep/43 backdrop-blur-md p-2 shadow-2xl overflow-hidden aspect-[4/3] flex select-none">
                
                {/* Thin teal/glow accent thread through legacy/modern divide */}
                <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-teal/20 via-teal to-teal/20 z-10 shadow-[0_0_12px_rgba(114,249,255,0.8)]"></div>
                
                {/* Left Half: Legacy Grayscale, Cluttered Workflow */}
                <div className="w-1/2 bg-neutral-900/40 p-4 flex flex-col justify-between border-r border-white/5 opacity-80 brightness-75 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none"></div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-neutral-500 font-bold mb-3">Generalist Queue</div>
                    <div className="space-y-2.5">
                      <div className="rounded border border-neutral-800 p-2 bg-neutral-800/20">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono text-neutral-400">Claim #92842</span>
                          <span className="text-[9px] bg-red-950/40 text-red-400 border border-red-900/40 px-1 py-0.5 rounded font-bold">DENIED</span>
                        </div>
                        <div className="text-[8px] text-neutral-400 mt-1 font-semibold">Missing Specialty Modifier</div>
                        <div className="text-[7px] text-neutral-500 mt-0.5">Orthopedics Global Care</div>
                      </div>
                      
                      <div className="rounded border border-neutral-800 p-2 bg-neutral-800/20">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono text-neutral-400">Payer Hold</span>
                          <span className="text-[9px] text-amber-500 font-medium">PENDING</span>
                        </div>
                        <div className="text-[8px] text-neutral-400 mt-1">Anesthesia Crosspaths Flagged</div>
                      </div>

                      <div className="rounded border border-dashed border-neutral-800 p-1.5 text-center text-[8px] text-neutral-500">
                        + 148 other claims waiting audit
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-neutral-800 text-[10px] font-mono text-neutral-500 flex items-center gap-1">
                    <AlertCircle className="size-3 text-red-500" />
                    Generalist Manual Rework
                  </div>
                </div>
                
                {/* Right Half: Clientele AI vivid teal-accented workflow */}
                <div className="w-1/2 bg-navy/40 p-4 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 blur-2xl rounded-full"></div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-teal font-bold mb-3 flex items-center justify-between">
                      <span>Clientele AI</span>
                      <span className="flex h-1.5 w-1.5 rounded-full bg-teal animate-pulse"></span>
                    </div>
                    
                    <div className="space-y-2.5">
                      {/* Live validation card */}
                      <div className="rounded-lg border border-teal/20 p-2.5 bg-teal/5 backdrop-blur-sm shadow-sm relative overflow-hidden">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-semibold text-white">Validation Loop</span>
                          <span className="text-[9px] bg-teal/10 text-teal border border-teal/30 px-1.5 py-0.5 rounded-full font-bold">99.1% CLEAN</span>
                        </div>
                        <div className="text-[8px] text-white/80 mt-1.5 font-medium flex items-center gap-1">
                          <Check className="size-2.5 text-teal shrink-0" />
                          <span>Specialty Code Block Match</span>
                        </div>
                        <div className="mt-1 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="bg-teal h-full w-[99%]" />
                        </div>
                      </div>

                      <div className="rounded-lg border border-white/5 p-2 bg-white/5">
                        <div className="flex justify-between items-center text-[8px]">
                          <span className="text-white/60 font-mono">Module 1 Check</span>
                          <span className="text-teal font-bold uppercase text-[7px]">Active May 2026</span>
                        </div>
                        <div className="text-[8px] text-teal/80 mt-1">Eligibility Verified Instantly</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t border-white/5 text-[10px] text-teal font-semibold flex items-center gap-1.5">
                    <Sparkles className="size-3.5 text-teal animate-pulse" />
                    <span>Human-Guided Scale</span>
                  </div>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR (Immediate Credibility Strip) */}
      <motion.section 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative bg-white py-6 border-b border-neutral-100 shadow-xs overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between overflow-x-auto pb-4 md:pb-0 scrollbar-none gap-8 divide-x divide-neutral-200">
            {statsTrustTokens.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 px-4 shrink-0 first:pl-0">
                  <div className="size-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal shadow-xs shrink-0">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-bold">{item.signal}</div>
                    <div className="text-xs font-bold text-navy mt-0.5">{item.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* SECTION 3: THE COMPARISON TABLE */}
      <section id="comparison-table" className="relative bg-white py-20 lg:py-28 text-left grid-noise">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-3xl mb-16 text-left">
            <div className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3">Competitive Intelligence</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-bold leading-tight">
              Why Neither the Old Way Nor the Shortcut Works
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 max-w-2xl leading-relaxed">
              Traditional outsourcing drowns in volume. AI-only tools miss the complexity. Clientele RCM is the only model built to do both — with the accountability to prove it.
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-neutral-200/80 shadow-card bg-white">
            <table className="w-full min-w-[950px] border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b border-neutral-100 bg-neutral-50/50">
                  <th className="p-5 font-bold text-navy w-[24%]">Criteria</th>
                  <th className="p-5 font-bold text-neutral-500 text-center w-[19%] border-r border-neutral-100/50">Traditional Outsourcing</th>
                  <th className="p-5 font-bold text-neutral-500 text-center w-[19%] border-r border-neutral-100/50">AI-Only Tool</th>
                  
                  {/* Highlighted Clientele Column */}
                  <th className="p-6 font-semibold text-center w-[19%] bg-teal/5 relative border-r border-teal/14">
                    <div className="absolute top-0 inset-x-0 h-1 bg-teal"></div>
                    <div className="inline-flex rounded-full bg-teal text-navy font-bold text-[8px] px-2.5 py-0.5 uppercase tracking-wider mb-2 border border-teal/20 select-none shadow-xs">
                      Recommended
                    </div>
                    <span className="text-navy font-black text-sm block">Clientele RCM</span>
                  </th>
                  
                  <th className="p-5 font-bold text-neutral-500 text-center w-[19%]">In-House Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-neutral-600">
                {/* Row 1 */}
                <tr className="hover:bg-neutral-50/20 transition-colors">
                  <td className="p-5 font-bold text-navy bg-neutral-50/10">Specialty-specific expertise</td>
                  <td className="p-5 text-center text-neutral-400 border-r border-neutral-100/50">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <span className="text-neutral-500 font-medium">Generalist coders</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-red-500 border-r border-neutral-100/50">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <X className="size-4 text-red-400" />
                      <span className="font-medium text-xs">None</span>
                    </div>
                  </td>
                  {/* Highlighted Clientele */}
                  <td className="p-5 text-center bg-teal/5 border-r border-teal/14 font-semibold text-navy">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="size-5 rounded-full bg-teal/15 flex items-center justify-center"><Check className="size-3.5 text-teal font-extrabold" /></span>
                      <span className="text-xs">30+ AAPC-certified, 5–12 yrs exp</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-neutral-500">Variable</td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-neutral-50/20 transition-colors">
                  <td className="p-5 font-bold text-navy bg-neutral-50/10">AI automation</td>
                  <td className="p-5 text-center text-neutral-400 border-r border-neutral-100/50">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <X className="size-4 text-neutral-300" />
                      <span className="text-xs text-neutral-400">None</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-amber-500 border-r border-neutral-100/50">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <AlertCircle className="size-4 text-amber-500" />
                      <span className="font-semibold text-xs">Full — no human review</span>
                    </div>
                  </td>
                  {/* Highlighted Clientele */}
                  <td className="p-5 text-center bg-teal/5 border-r border-teal/14 font-semibold text-navy">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="size-5 rounded-full bg-teal/15 flex items-center justify-center"><Check className="size-3.5 text-teal font-extrabold" /></span>
                      <span className="text-xs">Human-Guided Automation (Module 1 live)</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-neutral-400">None</td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-neutral-50/20 transition-colors">
                  <td className="p-5 font-bold text-navy bg-neutral-50/10">Clean claim rate</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">85–90% industry avg</td>
                  <td className="p-5 text-center text-red-500 border-r border-neutral-100/50">
                    <div className="flex flex-col items-center justify-center gap-1">
                      <X className="size-4 text-red-400" />
                      <span className="text-xs">Unverified</span>
                    </div>
                  </td>
                  {/* Highlighted Clientele */}
                  <td className="p-5 text-center bg-teal/5 border-r border-teal/14 font-bold text-navy">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="size-5 rounded-full bg-teal/15 flex items-center justify-center"><Check className="size-3.5 text-teal font-extrabold" /></span>
                      <span className="text-sm">99%</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-neutral-500">Varies</td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-neutral-50/20 transition-colors">
                  <td className="p-5 font-bold text-navy bg-neutral-50/10">Denial rate</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">15–20%</td>
                  <td className="p-5 text-center text-red-500 border-r border-neutral-100/50 font-medium">High — no human catch</td>
                  {/* Highlighted Clientele */}
                  <td className="p-5 text-center bg-teal/5 border-r border-teal/14 font-bold text-navy">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="size-5 rounded-full bg-teal/15 flex items-center justify-center"><Check className="size-3.5 text-teal font-extrabold" /></span>
                      <span className="text-xs text-navy font-semibold">10% today, targeting &lt;5% post-Clientele AI automation</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-neutral-500">15–25%</td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-neutral-50/20 transition-colors">
                  <td className="p-5 font-bold text-navy bg-neutral-50/10">Outcome-based pricing</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">Rarely</td>
                  <td className="p-5 text-center text-red-500 border-r border-neutral-100/50">No</td>
                  {/* Highlighted Clientele */}
                  <td className="p-5 text-center bg-teal/5 border-r border-teal/14 font-semibold text-navy">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="size-5 rounded-full bg-teal/15 flex items-center justify-center"><Check className="size-3.5 text-teal" /></span>
                      <span className="text-xs">Yes — we get paid when you do</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-neutral-400">N/A (salary)</td>
                </tr>

                {/* Row 6 */}
                <tr className="hover:bg-neutral-50/20 transition-colors">
                  <td className="p-5 font-bold text-navy bg-neutral-50/10">Compliance accountability</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">Varies</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">Rarely</td>
                  {/* Highlighted Clientele */}
                  <td className="p-5 text-center bg-teal/5 border-r border-teal/14 font-semibold text-navy">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="size-5 rounded-full bg-teal/15 flex items-center justify-center"><Check className="size-3.5 text-teal" /></span>
                      <span className="text-xs">HIPAA · HBMA · SOC2 audit underway (expected Q3 2026)</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-neutral-500">Practice's burden</td>
                </tr>

                {/* Row 7 */}
                <tr className="hover:bg-neutral-50/20 transition-colors">
                  <td className="p-5 font-bold text-navy bg-neutral-50/10">Onboarding speed</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">Weeks to months</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">Limited integration</td>
                  {/* Highlighted Clientele */}
                  <td className="p-5 text-center bg-teal/5 border-r border-teal/14 font-semibold text-navy">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="size-5 rounded-full bg-teal/15 flex items-center justify-center"><Check className="size-3.5 text-teal" /></span>
                      <span className="text-xs">30-day go-live, parallel run</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-neutral-500">Months</td>
                </tr>

                {/* Row 8 */}
                <tr className="hover:bg-neutral-50/20 transition-colors">
                  <td className="p-5 font-bold text-navy bg-neutral-50/10">EMR integrations</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">Limited</td>
                  <td className="p-5 text-center text-neutral-500 border-r border-neutral-100/50">Very limited</td>
                  {/* Highlighted Clientele */}
                  <td className="p-5 text-center bg-teal/5 border-r border-teal/14 font-semibold text-navy">
                    <div className="flex flex-col items-center justify-center gap-1.5">
                      <span className="size-5 rounded-full bg-teal/15 flex items-center justify-center"><Check className="size-3.5 text-teal" /></span>
                      <span className="text-xs">11 confirmed systems</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-neutral-500">Internal only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-semibold text-teal font-sans">
              Every row above is backed by a contract, not a pitch deck.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE 6 CORE DIFFERENTIATORS */}
      <section className="relative bg-[#F5F7FA] py-20 lg:py-28 text-left border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3">Core Advantages</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-bold leading-tight">
              Six Reasons Practices Stay — and Refer
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              These aren't feature bullets. Each one is a proof point backed by the way we structure every engagement.
            </p>
          </div>

          {/* 2x3 grid interactive accordion */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => {
              const isOpen = activeCard === index;
              const DiffIcon = diff.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActiveCard(isOpen ? null : index)}
                  className={`relative rounded-2xl bg-white p-6 md:p-8 border border-neutral-200 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden group select-none min-h-[230px] ${
                    isOpen ? 'ring-2 ring-teal shadow-xl md:col-span-2 lg:col-span-1 bg-white' : 'hover:shadow-md hover:border-teal/50 bg-white/70'
                  }`}
                >
                  {/* Top accent line transitions from gray to teal on hover */}
                  <div className={`absolute top-0 inset-x-0 h-1 transition-colors duration-300 ${isOpen ? 'bg-teal' : 'bg-neutral-200 group-hover:bg-teal/40'}`}></div>

                  {/* Outlined numeral in background (Behind title) */}
                  <div className="absolute right-6 top-6 text-7xl font-display font-black text-neutral-100 opacity-60 group-hover:opacity-100 select-none pointer-events-none transition-all">
                    {diff.num}
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`size-10 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-teal/10 text-teal' : 'bg-neutral-100 text-neutral-500'}`}>
                        <DiffIcon className="size-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-teal font-bold">Clientele Key</span>
                    </div>

                    <h3 className="font-display font-semibold text-navy text-lg sm:text-xl tracking-tight mb-2.5">
                      {diff.title}
                    </h3>
                    
                    {/* Collapsed view text */}
                    {!isOpen && (
                      <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-xs transition-opacity duration-300">
                        {diff.preview}
                      </p>
                    )}

                    {/* Expanded view details */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-4 pt-4 text-xs md:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 space-y-4"
                        >
                          <p>{diff.expanded}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Proof point strip at the bottom */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500 w-full">
                    {isOpen ? (
                      <div className="rounded-xl bg-[#E1F5EE] p-3 text-emerald-800 text-[11px] font-semibold w-full border border-emerald-100/50 flex items-center gap-2">
                        <span className="size-4 rounded-full bg-teal/20 flex items-center justify-center grow-0 shrink-0"><Check className="size-2.5 text-teal" /></span>
                        <span><strong>Proof Point:</strong> {diff.proof}</span>
                      </div>
                    ) : (
                      <>
                        <span className="font-bold text-teal hover:underline flex items-center gap-1">
                          Click to expand
                        </span>
                        <span className="font-mono">{diff.num} / 06</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: CLIENT RETENTION SIGNAL */}
      <section className="relative bg-navy text-white py-24 lg:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-teal text-xs uppercase tracking-[0.22em] font-bold mb-3">Alignment Promise</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-white">
            Practices Don't Leave. Here's What That Tells You.
          </h2>

          <div className="space-y-6 text-white/70 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed text-left md:text-center">
            <p>
              We don't publish a retention percentage because we believe in showing, not claiming. What we can tell you is this: our engagement model makes it impossible for us to survive on clients who aren't growing. We don't collect a fee unless you collect revenue. That structure creates a very specific type of accountability that retainer-based vendors simply don't have.
            </p>
            <p>
              Every client relationship begins with a free RCM assessment — an honest audit of where your revenue is leaking before we discuss whether Clientele is the right fit. We walk away from engagements that aren't a match. That's rare. But it matters.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 max-w-xl mx-auto">
            <blockquote className="font-display italic text-2xl md:text-3xl text-teal font-medium tracking-tight">
              &ldquo;We only get paid when you get paid.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPLIANCE TRUST STACK */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Corporate Security</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-bold leading-tight">
              The Compliance Stack Protecting Every Engagement
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {complianceStack.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="rounded-2xl border border-neutral-200/70 p-6 md:p-8 bg-white transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:-translate-y-0.5 min-h-[290px]">
                  <div>
                    <div className="size-11 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-6">
                      <IconComp className="size-5" />
                    </div>
                    <h3 className="font-display font-semibold text-navy text-base md:text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-neutral-100/50">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${item.badgeClass}`}>
                      {item.badgeText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: ENGAGEMENT MODEL */}
      <section className="bg-neutral-50/50 py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 text-left">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Financial Integrity</span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
                The Only RCM Model That Moves When You Move
              </h2>
              <p className="mt-6 text-xs md:text-sm text-neutral-600 leading-relaxed max-w-xl">
                Our pricing is percentage-based on collections. No flat monthly fee. No charge for denied claims we rework. No hidden implementation cost. Our incentive is your growth — which means when we say we'll reduce your denial rate, we have a financial reason to actually do it.
              </p>
            </div>

            {/* Right Pillar Cards Stack */}
            <div className="lg:col-span-6 space-y-4">
              {pillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div key={idx} className="bg-white border border-neutral-200/80 rounded-2xl p-5 shadow-xs flex items-start gap-4 hover:shadow-md transition-all relative">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-teal rounded-l-2xl"></div>
                    <div className="size-10 rounded-full bg-teal/10 flex items-center justify-center text-teal shrink-0 mt-0.5">
                      <PillarIcon className="size-4" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-navy text-sm md:text-base mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="bg-[#F6F7F9] py-20 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Social Proof</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold">What Practices Say After the First Year</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-amber-500 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  
                  <p className="text-xs md:text-sm text-neutral-600 italic leading-relaxed mb-6 font-medium">
                    {t.quote}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-neutral-100">
                  <div className="text-[10px] sm:text-xs font-bold text-teal tracking-wider uppercase">
                    {t.attribution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FOOTER CTA BAND */}
      <section id="cta-band" className="bg-navy py-16 lg:py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
            See What Your Revenue Should Look Like
          </h2>
          <p className="mt-4 text-white/70 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Request a free RCM assessment. We'll audit your denial patterns, payer mix, and billing workflows — and tell you honestly what we see.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleAssessmentClick}
              className="w-full sm:w-auto rounded-full bg-teal text-navy px-6 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center"
            >
              Request a Free RCM Assessment →
            </button>
            <a
              href="tel:+18102210709"
              className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 text-white px-6 py-4 font-bold text-sm tracking-wide hover:bg-white/10 transition-all active:scale-98 cursor-pointer inline-flex items-center justify-center"
            >
              Schedule a Call Instead
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
