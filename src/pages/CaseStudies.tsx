import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  ArrowRight, 
  ChevronRight, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  Activity, 
  Sparkles, 
  FileCheck, 
  Clock, 
  FileText, 
  Layers, 
  Users, 
  HelpCircle,
  Building,
  Target
} from 'lucide-react';

interface CaseStudyProps {
  navigate: (path: string) => void;
}

interface CaseStudyType {
  id: string;
  isPlaceholder: boolean;
  categoryChips: string[];
  specialty: string;
  practiceSize: string;
  challenge: string;
  practiceDescriptor: string;
  title?: string;
  problem: string;
  approach: string;
  results?: {
    metric: string;
    before: string;
    after: string;
  }[];
  testimonial?: {
    quote: string;
    role: string;
    practiceType: string;
    state: string;
  };
  ctaText?: string;
  ctaPath?: string;
}

export default function CaseStudies({ navigate }: CaseStudyProps) {
  // Navigation helper that scrolls to top
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const el = document.getElementById(path.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // State for active filters
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');
  const [selectedPracticeSize, setSelectedPracticeSize] = useState<string>('All');
  const [selectedChallenge, setSelectedChallenge] = useState<string>('All');

  // Specialties
  const specialties = [
    'All', 'Orthopedics', 'Pain Management', 'Anesthesia', 'Comprehensive Therapy', 'Chiropractic & Rehab', 'Multi-Specialty'
  ];

  // Practice Sizes
  const practiceSizes = [
    'All', 
    'Solo / Small Group (1–3 providers)', 
    'Mid-Size Group (4–10 providers)', 
    'Large Group / Multi-Location (10+ providers)'
  ];

  // Challenges
  const challenges = [
    'All', 'Denial Rate', 'A/R Recovery', 'Authorization Management', 'RTM/RPM Billing', 'Transition & Onboarding', 'Clean Claim Rate'
  ];

  // Case Studies Data
  const caseStudies: CaseStudyType[] = [
    {
      id: 'case-01',
      isPlaceholder: false,
      categoryChips: ['Orthopedics', 'Denial Management', 'Michigan'],
      specialty: 'Orthopedics',
      practiceSize: 'Mid-Size Group (4–10 providers)',
      challenge: 'Denial Rate', // also maps to 'Clean Claim Rate'
      practiceDescriptor: 'Multi-Specialty Orthopedic Clinic · Michigan · 6 Providers',
      problem: 'A six-provider orthopedic surgery group in Michigan was experiencing a denial rate significantly above industry average — concentrated in two categories: global period billing disputes on post-operative E/M visits, and bilateral procedure modifier mismatches on knee and shoulder arthroscopy claims. The practice had been with the same billing company for four years. The billing company had no orthopedic-specific protocol for global period tracking and was applying Modifier -50 to bilateral procedures for all payers — including commercial payers that require -RT/-LT with separate line billing. The cumulative impact: thousands of dollars in denied claims monthly, a backlog of global period disputes with no systematic appeal workflow, and A/R aging extending past 60 days on the majority of surgical claims.',
      approach: 'Clientele conducted a 90-day denial audit before onboarding — categorizing every denial by payer, CPT code, and denial reason code. Two protocols were built before the first claim was submitted: 1) Global period tracking protocol — every surgical claim tracked against its global period; E/M visits within the global period flagged for modifier review before submission (-24, -25, -57, or -79 applied based on clinical documentation). 2) Bilateral modifier mapping — payer-by-payer modifier rule documented for all major payers; Medicare claims routed to -50; commercial claims routed to -RT/-LT with separate line billing. In-flight denials from the prior 90-day backlog were appealed systematically using payer-specific templates built during the audit. Appeals included operative notes, clinical documentation, and payer-specific LCD citations.',
      results: [
        { metric: 'Clean claim rate', before: '81%', after: '99%' },
        { metric: 'Global period denial rate', before: '18% of surgical claims', after: 'Under 3%' },
        { metric: 'Average A/R days', before: '47 days', after: '31 days' },
        { metric: 'Back-end denial appeal success', before: 'No systematic process', after: '78% appeal overturn rate' }
      ],
      testimonial: {
        quote: 'Global period disputes were a monthly problem we\'d accepted as normal. Clientele showed us in the first audit that 80% of them were preventable — wrong modifier, not wrong billing. Having a protocol made it stop.',
        role: 'Revenue Cycle Manager',
        practiceType: 'Multi-Specialty Orthopedic Clinic',
        state: 'Michigan'
      },
      ctaText: 'Request an Orthopedic RCM Assessment →',
      ctaPath: '#assessment'
    },
    {
      id: 'case-02',
      isPlaceholder: false,
      categoryChips: ['Pain Management', 'Authorization Management', 'Michigan'],
      specialty: 'Pain Management',
      practiceSize: 'Mid-Size Group (4–10 providers)',
      challenge: 'Authorization Management', // also maps to 'A/R Recovery'
      practiceDescriptor: 'Multi-Location Pain Management Practice · Michigan · 4 Locations · 8 Providers',
      problem: 'A four-location interventional pain management practice in Michigan was losing significant monthly revenue to a single, repeating failure: add-on CPT codes performed without updated prior authorization. Authorization was being obtained by MAs for the scheduled procedure — typically CPT 20552 (trigger point injection, 1–2 sites). Providers were frequently performing expanded or related procedures in the room — CPT 20553 (3+ sites), nerve blocks, or fluoroscopic guidance add-ons — without updated authorization. The billing team was submitting claims as documented. The claims were denying. Retroactive authorization was unavailable with two of the practice\'s highest-volume commercial payers. The revenue loss was compounding monthly with no systematic resolution. Secondary problem: fluoroscopic guidance (CPT 77002) was being billed uniformly across all payers — including three payers whose current policy considered it inclusive to the primary procedure. These denials were generating recoupment requests on previously paid claims.',
      approach: 'Clientele restructured the authorization workflow before taking ownership of billing: 1) Add-on CPT flag protocol — for every scheduled interventional procedure, the most common clinical additions were documented at scheduling. MAs were provided a pre-appointment checklist to confirm scope with the provider. For procedures with a high historical rate of scope expansion, the auth team proactively requested broader authorization at the time of the initial request. 2) Fluoroscopic guidance payer mapping — every major payer\'s current guidance billing policy was documented and loaded into the claim scrubbing workflow. 77002 and 77003 billed only when payer policy and operative note documentation both supported it. 3) Back-end recovery — the prior 120 days of auth mismatch denials were audited. Claims with a viable retrospective review path were appealed with clinical documentation. Claims without a retroactive path were written off with documentation to prevent future occurrence.',
      results: [
        { metric: 'Auth mismatch denial rate', before: '22% of interventional claims', after: 'Under 4%' },
        { metric: 'Fluoroscopic guidance denial rate', before: '14% of applicable claims', after: 'Under 2%' },
        { metric: 'Average A/R days', before: '51 days', after: '29 days' },
        { metric: 'Monthly revenue recovered (back-end)', before: 'No systematic process', after: 'Significant recovery in first 90 days' }
      ],
      testimonial: {
        quote: 'The authorization gap was costing us money we didn\'t even know we were losing — because the denials looked like coding errors, not workflow failures. Clientele found the root cause in the first audit and closed it before we went live.',
        role: 'Billing Director',
        practiceType: 'Multi-Location Pain Management Practice',
        state: 'Michigan'
      },
      ctaText: 'Request a Pain Management RCM Assessment →',
      ctaPath: '#assessment'
    },
    {
      id: 'case-03',
      isPlaceholder: false,
      categoryChips: ['Comprehensive Therapy', 'RTM Billing', 'New Jersey'],
      specialty: 'Comprehensive Therapy',
      practiceSize: 'Mid-Size Group (4–10 providers)', // 3 locations
      challenge: 'RTM/RPM Billing',
      practiceDescriptor: 'Multi-Specialty Outpatient Therapy Practice · New Jersey · PT / OT / ST · 3 Locations',
      problem: 'A three-location outpatient therapy practice in New Jersey had added RTM billing to their PT and OT service lines six months prior to engaging Clientele. The RTM rollout had been managed internally with guidance from their RTM device vendor. Within four months, the practice had accumulated significant RTM billing compliance exposure: CPT 98975 (initial setup) was being billed monthly per patient — it is a one-time-per-device code. CPT 98976 (MSK device supply) was being submitted without confirming the 16-day transmission threshold — claims were going out on day 12–14 of the billing period. No documented interactive communication trail existed for 98980/98981 — staff credentials, session dates, and clinical findings were not being captured systematically. Commercial payer RTM coverage had not been verified prior to enrollment for approximately 30% of RTM patients — several commercial payers had not yet adopted RTM coverage, resulting in systematic denial. In addition to RTM compliance failures, the practice was experiencing G-code gap denials on Medicare therapy claims — functional limitation reporting was not being tracked to the 10-visit interval consistently across all three locations.',
      approach: 'Clientele conducted a full RTM billing audit before taking ownership of the service line. The audit identified the total compliance exposure across all four failure categories and established a remediation sequence: 1) 98975 correction — monthly billings corrected; one-time claims left in place; overpayment self-disclosure protocol initiated for payers where monthly billing had resulted in overpayment. 2) 16-day threshold enforcement — device data transmission confirmed before every 98976/98977 submission; early-month claims held until threshold confirmed. 3) Interactive communication documentation protocol — template built for staff to capture: name, credential, patient contact date, session duration, clinical findings; retroactive documentation collected where possible from clinical notes. 4) Commercial payer RTM coverage verification — coverage status confirmed per payer before any new RTM enrollment; non-covered commercial patients excluded from RTM billing. 5) G-code interval tracking — 10-visit counter implemented per patient per location; G-code pair and severity modifier reviewed at evaluation, 10-visit mark, and discharge.',
      results: [
        { metric: 'RTM denial rate', before: '38% of RTM claims', after: 'Under 5%' },
        { metric: '98975 overbilling', before: 'Billed monthly per patient', after: 'Corrected to one-time; overpayment process initiated' },
        { metric: 'G-code denial rate', before: '19% of Medicare therapy claims', after: 'Under 2%' },
        { metric: 'RTM + RPM stacking opportunity identified', before: 'None', after: '14 eligible patients identified; stacking billing initiated' }
      ],
      testimonial: {
        quote: 'We thought RTM billing was set up correctly because our device vendor told us it was. Clientele\'s audit showed us we had four different compliance problems — some of which were creating overpayment exposure, not just denials. They fixed it systematically, not claim by claim.',
        role: 'Director of Rehabilitation Services',
        practiceType: 'Multi-Specialty Practice',
        state: 'New Jersey'
      },
      ctaText: 'Request a Therapy Billing Assessment →',
      ctaPath: '#assessment'
    },
    // SECTION 4 - Placeholders (to support dynamic filters if matched)
    {
      id: 'placeholder-01',
      isPlaceholder: true,
      categoryChips: ['Anesthesia', 'CRNA Modifier Recovery', 'Florida'],
      specialty: 'Anesthesia',
      practiceSize: 'Solo / Small Group (1–3 providers)',
      challenge: 'A/R Recovery',
      practiceDescriptor: 'Anesthesia Practice · Florida · CRNA Modifier Recovery',
      problem: 'Coming Soon',
      approach: 'Coming Soon'
    },
    {
      id: 'placeholder-02',
      isPlaceholder: true,
      categoryChips: ['Multi-Specialty', 'Transition & Onboarding', 'New York'],
      specialty: 'Multi-Specialty',
      practiceSize: 'Large Group / Multi-Location (10+ providers)',
      challenge: 'Transition & Onboarding',
      practiceDescriptor: 'Multi-Specialty Health System · New York · Onboarding Integration',
      problem: 'Coming Soon',
      approach: 'Coming Soon'
    },
    {
      id: 'placeholder-03',
      isPlaceholder: true,
      categoryChips: ['Chiropractic & Rehab', 'A/R Recovery', 'Illinois'],
      specialty: 'Chiropractic & Rehab',
      practiceSize: 'Solo / Small Group (1–3 providers)',
      challenge: 'A/R Recovery',
      practiceDescriptor: 'Chiropractic & Rehab Center · Illinois · Claims Recovery',
      problem: 'Coming Soon',
      approach: 'Coming Soon'
    }
  ];

  // Helper check to match filters
  const filterStudy = (study: CaseStudyType) => {
    // Specialty rule
    if (selectedSpecialty !== 'All') {
      if (study.specialty !== selectedSpecialty) return false;
    }
    // Practice size rule
    if (selectedPracticeSize !== 'All') {
      if (study.practiceSize !== selectedPracticeSize) return false;
    }
    // Challenge rule
    if (selectedChallenge !== 'All') {
      // In Case study 1, 'Denial Rate' matches 'Clean Claim Rate' too
      if (study.id === 'case-01' && selectedChallenge === 'Clean Claim Rate') {
        // match
      } else if (study.id === 'case-02' && selectedChallenge === 'A/R Recovery') {
        // match
      } else if (study.challenge !== selectedChallenge) {
        return false;
      }
    }
    return true;
  };

  const filteredCaseStudies = caseStudies.filter(filterStudy);

  // Stats Data
  const stats = [
    { value: '99%', label: 'Clean claim rate', comparison: 'vs. industry average of 85–90%' },
    { value: '98%', label: 'First-pass resolution', comparison: 'Fewer rejections, faster reimbursement' },
    { value: '32 days', label: 'Average A/R days', comparison: 'Target: <25 days post-Clientele AI automation' },
    { value: '50+', label: 'Practices served', comparison: 'Across MI, IL, FL, NY, CT, NJ, and DC' }
  ];

  // Testimonials column data
  const testimonialStrip = [
    {
      quote: "Denials dropped significantly within the first few weeks. The visibility into our claims and the team's follow-up discipline made an immediate impact — something we hadn't experienced with our previous billing company.",
      role: "Revenue Cycle Manager",
      practiceType: "Multi-Specialty Orthopedic Clinic",
      state: "Michigan"
    },
    {
      quote: "Our clean-claim performance improved, A/R became predictable, and for the first time we had reporting that helped us act — not just review numbers after the fact.",
      role: "Director of Operations",
      practiceType: "Imaging & Pain Management Center",
      state: "Florida"
    },
    {
      quote: "We thought RTM billing was set up correctly because our device vendor told us it was. Clientele's audit showed us four different compliance problems — some creating overpayment exposure, not just denials.",
      role: "Director of Rehabilitation Services",
      practiceType: "Multi-Specialty Practice",
      state: "New Jersey"
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans select-text text-left">
      
      {/* SECTION 1 — HERO SECTION (Dark Navy) */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-4 block select-none">
              Client Results
            </span>
            <div className="h-[1px] w-12 bg-teal/50 mb-7" />
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.10] tracking-tight text-white mb-6">
              Real Practices. Real Numbers. Real Revenue Recovery.
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl leading-relaxed mb-8 font-sans">
              Every case study below reflects an actual client engagement — documented denial patterns, specific interventions, and measurable outcomes. No named practices per client preference. Every number is real.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#assessment"
                onClick={(e) => handleLinkClick(e, '#assessment')}
                className="rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2 select-none"
              >
                Request Your Own RCM Assessment →
              </a>
              <a
                href="#filters"
                onClick={(e) => handleLinkClick(e, '#filters')}
                className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center select-none"
              >
                Filter by Specialty
              </a>
            </div>

            {/* Trust micro-copy */}
            <div className="text-white/45 text-[11px] font-mono flex flex-wrap items-center gap-x-4 gap-y-2 pt-8 select-none">
              <span>🛡️ Active Clientele RCM client accounts only</span>
              <span>•</span>
              <span>HIPAA-compliant anonymization</span>
              <span>•</span>
              <span className="text-teal-light font-semibold">Active states: MI, IL, FL, NY, CT, NJ, DC</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FILTER BAR (White — sticky on scroll starting below standard header) */}
      <section id="filters" className="sticky top-[72px] z-30 bg-white border-b border-neutral-200/80 shadow-xs py-5 select-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Left side label holding filter concept */}
            <div className="shrink-0">
              <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
                Interactive Filters
              </h3>
              <p className="text-xs font-bold text-navy mt-1">
                Filter by specialty or practice size
              </p>
            </div>

            {/* Filter segments container */}
            <div className="flex flex-col gap-3 w-full lg:max-w-5xl">
              
              {/* Category 1: Specialty */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                <span className="font-mono text-[10px] text-neutral-400 font-bold sm:w-28 shrink-0">BY SPECIALTY:</span>
                <div className="flex flex-wrap gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                  {specialties.map((spec) => (
                    <button
                      key={spec}
                      onClick={() => setSelectedSpecialty(spec)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                        selectedSpecialty === spec
                          ? 'bg-teal border-teal text-navy shadow-xs'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-navy'
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category 2: Practice Size */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                <span className="font-mono text-[10px] text-neutral-400 font-bold sm:w-28 shrink-0">PRACTICE SIZE:</span>
                <div className="flex flex-wrap gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                  {practiceSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedPracticeSize(size)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                        selectedPracticeSize === size
                          ? 'bg-teal border-teal text-navy shadow-xs'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-navy'
                      }`}
                    >
                      {size === 'All' ? 'All Sizes' : size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category 3: Challenges */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                <span className="font-mono text-[10px] text-neutral-400 font-bold sm:w-28 shrink-0">CHALLENGE:</span>
                <div className="flex flex-wrap gap-1.5 overflow-x-auto scrollbar-none py-0.5">
                  {challenges.map((chal) => (
                    <button
                      key={chal}
                      onClick={() => setSelectedChallenge(chal)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                        selectedChallenge === chal
                          ? 'bg-teal border-teal text-navy shadow-xs'
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-navy'
                      }`}
                    >
                      {chal === 'All' ? 'All Challenges' : chal}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3 — CASE STUDY GRID */}
      <section className="bg-white py-12 md:py-20 text-left">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="flex justify-between items-center border-b border-neutral-100 pb-4 mb-8 select-none">
            <span className="font-mono text-xs text-neutral-400 font-semibold">
              Showing {filteredCaseStudies.length} of {caseStudies.length} Case Studies &amp; Previews
            </span>
            {(selectedSpecialty !== 'All' || selectedPracticeSize !== 'All' || selectedChallenge !== 'All') && (
              <button
                onClick={() => {
                  setSelectedSpecialty('All');
                  setSelectedPracticeSize('All');
                  setSelectedChallenge('All');
                }}
                className="text-xs text-teal hover:text-navy font-bold flex items-center gap-1 cursor-pointer transition-colors"
              >
                Clear all filters <X className="size-3" />
              </button>
            )}
          </div>

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredCaseStudies.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-neutral-50 rounded-2xl border border-dashed border-neutral-200 p-12 text-center text-neutral-500 font-sans"
                >
                  <HelpCircle className="size-8 mx-auto text-neutral-400 mb-3" />
                  <p className="font-bold text-navy">No matching case studies found.</p>
                  <p className="text-xs text-neutral-500 mt-1">Try adjusting your filters above or clearing applied categories.</p>
                  <button
                    onClick={() => {
                      setSelectedSpecialty('All');
                      setSelectedPracticeSize('All');
                      setSelectedChallenge('All');
                    }}
                    className="mt-4 px-4 py-2 text-xs bg-navy text-white rounded-full font-bold hover:bg-navy-deep cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              ) : (
                filteredCaseStudies.map((study, idx) => {
                  if (study.isPlaceholder) {
                    // Grayed out placeholder, dashed border, amber badge
                    return (
                      <motion.div
                        key={study.id}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 0.7, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white rounded-2xl border-2 border-dashed border-neutral-200 p-8 relative overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 select-none">
                            <div className="flex flex-wrap gap-2">
                              {study.categoryChips.map((chip, chipIdx) => (
                                <span 
                                  key={chipIdx} 
                                  className="bg-neutral-100 text-neutral-400 border border-neutral-200 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                                >
                                  {chip}
                                </span>
                              ))}
                            </div>
                            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider">
                              ⚠️ Coming Soon
                            </span>
                          </div>

                          <div className="font-mono text-xs text-neutral-400 mb-2">
                            {study.practiceDescriptor}
                          </div>

                          <h3 className="font-display font-bold text-neutral-400 text-lg mb-3">
                            Expansion Case: {study.specialty} Compliance &amp; A/R Recovery
                          </h3>

                          <p className="text-xs text-neutral-400/80 italic font-sans max-w-2xl leading-relaxed">
                            This in-depth case study is currently being assembled with audited client metrics and will be released pre-launch. It highlights targeted coding protocol adjustments and appeal recoveries for {study.specialty} practices.
                          </p>
                        </div>
                      </motion.div>
                    );
                  }

                  // Live case study - styled beautifully and vertically stacked
                  return (
                    <motion.div
                      key={study.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-3xl border border-neutral-200/80 p-8 shadow-xs hover:shadow-md transition-all ${
                        idx % 2 === 1 ? 'bg-neutral-50/50' : 'bg-white'
                      }`}
                    >
                      {/* Chips and descriptor Header */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.categoryChips.map((chip, chipIdx) => (
                          <span 
                            key={chipIdx} 
                            className="bg-teal/10 text-teal border border-teal/20 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>

                      <div className="font-mono text-xs text-neutral-400 mb-6 select-none uppercase tracking-wider">
                        {study.practiceDescriptor}
                      </div>

                      <div className="grid lg:grid-cols-12 gap-8 items-start">
                        
                        {/* Narrative Column */}
                        <div className="lg:col-span-7 space-y-6">
                          
                          {/* The Problem */}
                          <div className="space-y-2">
                            <h4 className="font-sans text-[11px] font-mono font-bold text-[#E24B4A] tracking-widest uppercase select-none flex items-center gap-1.5">
                              <AlertTriangle className="size-3.5" /> THE PROBLEM
                            </h4>
                            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans font-normal">
                              {study.problem}
                            </p>
                          </div>

                          {/* The Approach */}
                          <div className="space-y-2">
                            <h4 className="font-sans text-[11px] font-mono font-bold text-teal tracking-widest uppercase select-none flex items-center gap-1.5">
                              <Target className="size-3.5" /> THE APPROACH
                            </h4>
                            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans font-medium bg-white/40 p-4 rounded-xl border border-neutral-100">
                              {study.approach}
                            </p>
                          </div>

                        </div>

                        {/* Metric Results and Testimonial Column */}
                        <div className="lg:col-span-5 space-y-6">
                          
                          {/* Table Area */}
                          <div className="bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-xs">
                            <div className="bg-navy-deep px-4 py-3 select-none flex items-center justify-between">
                              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">Key Performance Metrics</span>
                              <span className="bg-teal/10 text-teal border border-teal/20 px-2 py-0.5 rounded text-[9px] font-mono font-bold">90-Day Audit Interval</span>
                            </div>
                            
                            <table className="w-full text-xs text-left border-collapse">
                              <thead>
                                <tr className="border-b border-neutral-100 bg-neutral-50/50 font-mono text-[10px] uppercase font-bold text-neutral-400 select-none">
                                  <th className="px-4 py-2.5">Metric</th>
                                  <th className="px-3 py-2.5 text-center">Before</th>
                                  <th className="px-3 py-2.5 text-center bg-teal/5 text-teal text-[11px]">After 90 Days</th>
                                </tr>
                              </thead>
                              <tbody>
                                {study.results && study.results.map((row, rowIdx) => (
                                  <tr 
                                    key={rowIdx} 
                                    className={`border-b border-neutral-100 last:border-0 transition-colors hover:bg-neutral-50/30 ${
                                      rowIdx % 2 === 1 ? 'bg-neutral-50/20' : 'bg-white'
                                    }`}
                                  >
                                    <td className="px-4 py-3 font-semibold text-navy text-[11px]">{row.metric}</td>
                                    <td className="px-3 py-3 text-center text-neutral-500 text-[11px]">{row.before}</td>
                                    <td className="px-3 py-3 text-center bg-teal/5 text-teal font-bold text-xs">{row.after}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Testimonial Quote */}
                          {study.testimonial && (
                            <div className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-5 relative">
                              <p className="text-xs text-neutral-600 italic leading-relaxed select-text">
                                &quot;{study.testimonial.quote}&quot;
                              </p>
                              <div className="mt-3 pt-3 border-t border-neutral-200/60 select-none">
                                <div className="text-[11px] font-bold text-navy">
                                  {study.testimonial.role}
                                </div>
                                <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                                  {study.testimonial.practiceType} · {study.testimonial.state}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* CTA button per study */}
                          {study.ctaText && (
                            <div className="pt-2">
                              <a
                                href={study.ctaPath || '#assessment'}
                                onClick={(e) => handleLinkClick(e, study.ctaPath || '#assessment')}
                                className="w-full text-center py-3 px-4 rounded-xl bg-navy text-white text-xs font-bold hover:bg-navy-deep transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer select-none"
                              >
                                {study.ctaText}
                              </a>
                            </div>
                          )}

                        </div>

                      </div>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 5 — BY THE NUMBERS (Light blue tint) */}
      <section className="bg-[#FAFBFD] py-20 lg:py-28 text-left border-y border-blue-50/80">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#185FA5] mb-4 select-none">
              📈 Portfolio-Wide Performance
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Results Across 50+ Practices in 7 States
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 max-w-2xl mx-auto font-sans">
              These are the performance benchmarks Clientele maintains across our full client portfolio — not cherry-picked from individual accounts.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-neutral-100 p-6 md:p-8 hover:border-[#185FA5]/30 hover:shadow-md transition-all"
              >
                <div className="font-display font-black text-3xl sm:text-4xl text-[#185FA5] leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-navy select-none mb-1">
                  {stat.label}
                </div>
                <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
                  {stat.comparison}
                </p>
              </div>
            ))}
          </div>

          {/* Denial rate note inline */}
          <div className="max-w-3xl mx-auto bg-blue-50/40 border border-blue-100/50 rounded-2xl p-5 text-center mt-8">
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">
              💡 <strong>Denial Rate note:</strong> Our target denial rate post-Clientele AI automation is under 5% — compared to the industry average of 15–20%. Current performance is tracked per account and reviewed monthly.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6 — PROCESS CALLOUT (White) */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest block select-none">
                Risk-Free Verification
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
                Every Case Study Starts the Same Way — With a Free Audit
              </h2>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-sans">
                Before we take ownership of a single claim, we conduct a deep-dive audit of your current billing workflows, denial patterns, and A/R aging. That audit is free. It&apos;s also where most practices discover what&apos;s actually costing them revenue.
              </p>
              <div className="pt-2">
                <a
                  href="#assessment"
                  onClick={(e) => handleLinkClick(e, '#assessment')}
                  className="rounded-full bg-navy text-white px-8 py-4 font-bold text-sm tracking-wide hover:bg-navy-deep transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-xs select-none"
                >
                  Request Your Free RCM Audit →
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="space-y-4">
                
                {/* Step 1 */}
                <div className="flex gap-4 items-start bg-neutral-50 p-5 rounded-2xl border border-neutral-200/50">
                  <div className="size-8 rounded-full bg-navy text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none">1</div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Free 90-day denial audit</h4>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      We review your historic denial codes, CPT patterns, and payer performance logs to identify systematic leakage.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 items-start bg-neutral-50 p-5 rounded-2xl border border-neutral-200/50">
                  <div className="size-8 rounded-full bg-navy text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none">2</div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Revenue gap report</h4>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      You receive a documented breakdown of exactly where revenue is being lost, why claims are being rejected, and their financial recovery potential.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 items-start bg-neutral-50 p-5 rounded-2xl border border-neutral-200/50">
                  <div className="size-8 rounded-full bg-[#1D9E75]/10 text-teal border border-[#1D9E75]/30 flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none">3</div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Targeted proposal</h4>
                    <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                      If the numbers support an engagement, we propose a tailored compliance scope. If they don&apos;t support it, we will tell you that too.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIAL STRIP (Light warm gray) */}
      <section className="bg-neutral-100/60 py-20 lg:py-24 text-left border-b border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mx-auto text-center mb-16 select-none">
            <h3 className="font-display font-semibold text-navy text-lg leading-tight uppercase tracking-wider">
              Feedback From Client Teams
            </h3>
            <div className="h-[2px] w-8 bg-teal mx-auto mt-3" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonialStrip.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-neutral-200/50 p-6 flex flex-col justify-between hover:shadow-md transition-shadow shrink-0 font-sans"
              >
                <div className="text-xs text-neutral-600 italic leading-relaxed select-text">
                  &quot;{item.quote}&quot;
                </div>
                <div className="pt-4 border-t border-neutral-100 mt-4 select-none">
                  <div className="text-[11px] font-bold text-navy">
                    {item.role}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400 mt-0.5">
                    {item.practiceType} · {item.state}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — FOOTER CTA BAND (Dark Navy) */}
      <section className="bg-[#0A1628] text-white py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" />
        <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-4 text-white">
            Want Results Like These for Your Practice?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 font-sans text-xs sm:text-sm leading-relaxed">
            Start with a free RCM audit. No commitment, no obligation — just a clear picture of where your revenue is going and how to get it back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#assessment"
              onClick={(e) => handleLinkClick(e, '#assessment')}
              className="w-full sm:w-auto rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all shadow-glow select-none"
            >
              Request Your Free RCM Assessment →
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
