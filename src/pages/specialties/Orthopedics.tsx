import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  FileText, 
  Database, 
  Activity, 
  Zap, 
  Briefcase, 
  FolderSync, 
  Sparkles, 
  Workflow, 
  RefreshCw, 
  AlertTriangle,
  Layers,
  HeartPulse,
  Brain,
  ShieldAlert,
  ArrowRightLeft,
  ChevronUp
} from 'lucide-react';

interface OrthopedicsProps {
  navigate: (path: string) => void;
}

export default function Orthopedics({ navigate }: OrthopedicsProps) {
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

  // State for Services Accordions
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // State for Sub-Specialty Tabs
  const [activeSubSpec, setActiveSubSpec] = useState<'joint' | 'spine' | 'sports' | 'trauma'>('joint');

  // State for Accordion interactive toggle helper
  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Sub-specialties data definition
  const subSpecData = {
    joint: {
      title: 'Joint Reconstruction',
      description: 'Optimizing major arthroplasty billing where component billing disputes and revision complexity easily lead to tens of thousands in unrecovered payer balances.',
      challenges: [
        {
          title: 'Component Positioning Under-Reporting',
          explanation: 'Standard knee or hip kits are coded under basic CPT codes (e.g. 27447, 27130). However, custom surgical guides, unique offsets, or anatomical balancing procedures are frequently missed by generic coders.'
        },
        {
          title: 'Unlisted Code Crosswalk Rejections',
          explanation: 'Revision situations requiring unique femoral sleeves or massive bone allografts often default to unlisted codes which face instant automated rejections unless accompanied by surgical documentation crosswalks and invoices.'
        },
        {
          title: 'Revision Surgery Documentation Insufficiency',
          explanation: 'Revision coding (27487, 27137) pays significantly higher units but requires proof of explicit indications, previous construct failure types, and exhaustive timing lists in the op notes to survive retrospect audits.'
        },
        {
          title: 'Global Period Overlap during Multi-Stage Cases',
          explanation: 'Stage-one spacer insertions followed by stage-two joint implants within 90 days are regularly denied as bundled care unless precise modifier -58 (staged procedure) is appended.'
        },
        {
          title: 'Post-Operative Joint Manipulation Bundle Conflicts',
          explanation: 'Manipulation under anesthesia (27275, 27570) performed within the postoperative window of a primary joint replacement will be bundled and completely unpaid unless backed by modifier -78.'
        }
      ],
      cpts: [
        { code: 'CPT 27447', notes: 'Arthroplasty, knee, condyle and plateau; medical necessity must demonstrate bone-on-bone disease.' },
        { code: 'CPT 27130', notes: 'Arthroplasty, acetabular and proximal femoral; requires clear pre-operative dysplasia radiography documentation.' },
        { code: 'CPT 23472', notes: 'Arthroplasty, glenohumeral joint (Total Shoulder); requires rotator cuff integrity validation notes.' },
        { code: 'CPT 27487', notes: 'Revision knee arthroplasty, femoral and tibial components; must detail exact mechanical failure or infection history.' },
        { code: 'CPT 27091', notes: 'Removal of hip prosthesis; requires reporting of spacer insert (CPT 11981) where applicable using modifier -51.' }
      ]
    },
    spine: {
      title: 'Spine Surgery',
      description: 'Managing complex spinal fusion, multi-segment instrumentation, and decompression bundling where single-level omissions drag down clinical case margins.',
      challenges: [
        {
          title: 'Multi-Level Fusion Authorization Gaps',
          explanation: 'Prior authorizations typically specify levels (e.g. L4-L5). If structural decompressive findings force extension to L3-L4 mid-procedure, the added levels are systematically denied down by medical directors.'
        },
        {
          title: 'Interbody Device Billing Count Rejections',
          explanation: 'Billing for multiple peek cages or structural biomechanical devices (22853) is often limited to a single quantity by automated payer logic, requiring documentation-staged multi-unit appeals.'
        },
        {
          title: 'Decompression Bundle with Primary Fusion',
          explanation: 'Laminectomy and decompression (63047) are heavily scrutinized by payers when performed concurrently with lumbar fusion (22612). They are bundled unless distinct non-overlapping nerve-root compression is explicitly documented.'
        },
        {
          title: 'Bone Graft Harvest Separate Reporting Denials',
          explanation: 'Local bone graft extraction is included, but structural autografts harvested from separate sites (e.g. iliac crest via 20937) must be documented as separate incisions to clear CCI edits.'
        },
        {
          title: 'Intraoperative Neuromonitoring (IONM) Exclusions',
          explanation: 'Commercial payers constantly exclude separate IONM claims (95940/95941) when billed directly by the operating surgery group, citing provider-relationship rules.'
        }
      ],
      cpts: [
        { code: 'CPT 22612', notes: 'Arthrodesis, posterior technique, single level; requires documentation of failed conservative therapy for >6 months.' },
        { code: 'CPT 22840', notes: 'Posterior spinal non-segmental instrumentation; cannot be billed alone, must be linked to primary fusion CPT.' },
        { code: 'CPT 22853', notes: 'Insertion of interbody biomechanical device; billed per interspace. Must document exact hardware brand used.' },
        { code: 'CPT 63047', notes: 'Laminectomy, facetectomy, and decompression; must note severe neurogenic claudication and motor deficit indicators.' },
        { code: 'CPT 20930', notes: 'Allograft for spine surgery, morselized; structural bone tracking requires exact matching supplier invoice data.' }
      ]
    },
    sports: {
      title: 'Sports Medicine',
      description: 'Reconciling high-velocity arthroscopic and reconstructive procedures where diagnostic rules and autograft harvest billing overlap constantly.',
      challenges: [
        {
          title: 'Meniscectomy vs. Repair in Same Session',
          explanation: 'Performing knee arthroscopic repair (29882) and medial meniscectomy (29881) in different compartments of the same knee triggers automated CCI denials unless modifiers -59 or -XS are meticulously applied.'
        },
        {
          title: 'Autograft Harvesting Separate Incision Denials',
          explanation: 'Harvesting patellar tendon or hamstring autograft for ACL reconstruction (29888) is included in the primary code, but harvesting contralateral tendon requires separate coding with modifier -79.'
        },
        {
          title: 'Multiplex Ligament Repairs Authorization Alignment',
          explanation: 'Reconstructing both ACL and posterolateral corner in a single knee involves high-dollar hardware costs. Authorization must list both CPT codes separately to avoid massive primary denials.'
        },
        {
          title: 'High-Rate Cartilage Restoration Exclusions',
          explanation: 'Microfracture (29879) and osteochondral autografts (OATS - 29866) are designated as experimental by some payers, requiring manual clinical policy appeals matching age/activity thresholds.'
        },
        {
          title: 'Viscosupplementation/PRP Injection Bundling',
          explanation: 'Viscosupplementation injections (J7325 etc.) are denied unless exact injection guides (77002 or 76942) are documented with dosage waste (modifier -JW) properly partitioned.'
        }
      ],
      cpts: [
        { code: 'CPT 29888', notes: 'Arthroscopically aided anterior cruciate ligament reconstruction; requires documentation of pre-op joint laxity tests.' },
        { code: 'CPT 29881', notes: 'Knee arthroscopy with meniscectomy, medial OR lateral; cannot bundle with 29880 (bilateral meniscectomy).' },
        { code: 'CPT 29827', notes: 'Shoulder arthroscopy with rotator cuff repair; must detail complete tear size parameters (cm) inside the op report.' },
        { code: 'CPT 29828', notes: 'Arthroscopic biceps tenodesis; frequently denied as incidental to rotator cuff repairs unless high anchor tension documented.' },
        { code: 'CPT 20550', notes: 'Injection of single tendon sheath; must document failure of NSAIDs and active localized trigger point inflammation.' }
      ]
    },
    trauma: {
      title: 'Trauma & Fracture Care',
      description: 'Managing rapid-entry emergency reductions, open vs. closed treatment definitions, and staged hardware revisions cleanly across multi-specialty trauma units.',
      challenges: [
        {
          title: 'Open vs. Closed Treatment Coding Disputes',
          explanation: 'Closed treatment with manipulation (e.g. 27244) vs. open treatment requiring internal fixation involves completely distinct documentation trails. Retrospective audits constantly look to downcode open procedures.'
        },
        {
          title: 'Multiple Fracture Reductions Under Same Anesthesia',
          explanation: 'Biling multiple fracture repairs in the same session requires a precise hierarchy. Secondary procedures are routinely discounted by 50% or entirely denied unless modifier -51 is appended.'
        },
        {
          title: 'Emergency External Fixation Conversion',
          explanation: 'Emergency placement of external fixator (20690) followed by staged conversion to permanent ORIF days later will be auto-blocked by global surgical period edits unless modifier -58 is properly tracked.'
        },
        {
          title: 'Skin Graft and Wound Debridement Bundling',
          explanation: 'Debridement of bone or deep muscle tissue (11044) is only separately billable from primary fracture repair when performed for open fractures, requiring deep ICD-10 external cause linking.'
        },
        {
          title: 'Delayed Non-Union Treatment Approvals',
          explanation: 'Treating delayed unions or non-unions (24430) is often misclassified as secondary maintenance by commercial auditors, requiring historical operative tracking files from primary surgeries.'
        }
      ],
      cpts: [
        { code: 'CPT 27244', notes: 'Open treatment of intertrochanteric hip fracture; must specify hardware implant serial tracking and placement radiography.' },
        { code: 'CPT 27759', notes: 'Open treatment of tibial shaft fracture with plate/screws; debridement of open fracture must be logged in minutes.' },
        { code: 'CPT 24515', notes: 'Open treatment of humeral shaft fracture; requires noting of radial nerve isolation and protection parameters.' },
        { code: 'CPT 20690', notes: 'Application of external fixation frame; must designate anatomical grid placement coordinates.' },
        { code: 'CPT 11044', notes: 'Debridement of bone; deep tissue measurements must specify width, depth, and length explicitly in centimeters.' }
      ]
    }
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans select-text">
      
      {/* SECTION 1: PIPELINE POSITION INDICATOR (Sub-Nav and Breadcrumbs) */}
      <div className="bg-white border-b border-neutral-200 sticky top-[72px] z-45">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 py-3 min-w-max items-center justify-start text-[11px] md:text-xs font-semibold select-none">
            
            {/* Pipeline list */}
            <span className="text-neutral-400 font-mono">Position:</span>
            <a href="/services/front-end" onClick={(e) => handleLinkClick(e, '/services/front-end')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Front-End RCM</a>
            <span className="text-neutral-300">/</span>
            <a href="/services/mid-cycle" onClick={(e) => handleLinkClick(e, '/services/mid-cycle')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Mid-Cycle Intelligence</a>
            <span className="text-neutral-300">/</span>
            <a href="/services/back-end" onClick={(e) => handleLinkClick(e, '/services/back-end')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Back-End &amp; A/R</a>
            <span className="text-neutral-300">/</span>
            <a href="/services/rtm" onClick={(e) => handleLinkClick(e, '/services/rtm')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">RPM / RTM</a>
            
            <span className="text-neutral-300">→</span>
            
            <span className="bg-navy text-white px-3 py-1.5 rounded-full font-bold shadow-sm border border-navy/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-teal rounded-full"></span>
              Orthopedic RCM
            </span>
            <span className="text-neutral-300">/</span>
            
            <a href="/specialties/pain-management" onClick={(e) => handleLinkClick(e, '/specialties/pain-management')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Pain Management</a>
            <span className="text-neutral-300">/</span>
            <a href="/specialties/anesthesia" onClick={(e) => handleLinkClick(e, '/specialties/anesthesia')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Anesthesia</a>
            <span className="text-neutral-300">/</span>
            <a href="/specialties/therapy" onClick={(e) => handleLinkClick(e, '/specialties/therapy')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Therapy</a>

          </div>
        </div>
      </div>

      {/* Breadcrumb strip inside main flow */}
      <div className="bg-neutral-55 bg-neutral-50 border-b border-neutral-100 py-3">
        <div className="max-w-7xl mx-auto px-6 text-[11px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2 select-none text-left">
          <a href="/specialties" onClick={(e) => handleLinkClick(e, '/specialties')} className="hover:text-navy transition-colors">Specialties</a>
          <ChevronRight className="size-3 text-neutral-300" />
          <span className="text-teal font-bold">Orthopedic RCM</span>
        </div>
      </div>

      {/* SECTION 2: HERO (Dark Navy background) */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full text-left">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left aligned content (60% width) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
                ORTHOPEDIC RCM EXCELLENCE
              </span>
              <div className="h-[1px] w-12 bg-teal/50 mb-6" />
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.10] tracking-tight text-white mb-6">
                Orthopedic Billing Is Uniquely Complex. <br />
                <span className="text-teal">We've Mastered Every Layer.</span>
              </h1>
              
              <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Global periods. Bilateral modifiers. Prior auth for surgical scope expansion. Hardware implant reporting. Orthopedic claims fail for reasons generic billing companies never anticipate — because they've never lived inside orthopedic workflows.
              </p>
              
              {/* CTA Block */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="rounded-full bg-teal text-navy px-7 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2 select-none text-navy-deep font-sans"
                >
                  Request an Orthopedic RCM Assessment →
                </a>
                <a
                  href="#services-how"
                  onClick={(e) => handleLinkClick(e, '#services-how')}
                  className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center select-none"
                >
                  See Our Results
                </a>
              </div>

              {/* Micro-copy below CTAs */}
              <div className="text-white/40 text-[11px] font-mono flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                <span>🔒 AAPC-certified orthopedic coders</span>
                <span>•</span>
                <span>Global period management built-in</span>
                <span>•</span>
                <span>Serving key clinics in MI, IL, FL, NY, CT, NJ, DC</span>
              </div>
            </div>
            
            {/* Right-side visual: 3x Interactive Results Cards */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-teal/10 rounded-3xl blur-2xl opacity-40 pointer-events-none" />
              
              <div className="relative space-y-4">
                
                {/* Card 1 */}
                <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm flex items-center justify-between shadow-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-teal/5 to-transparent pointer-events-none"></div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider block uppercase">Accuracy Benchmark</span>
                    <h4 className="text-3xl font-black font-display text-white mt-1 group-hover:text-teal transition-colors">99%</h4>
                    <span className="text-[11px] text-white/60 font-semibold block mt-1">Average Clean Claim Rate</span>
                  </div>
                  <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                    <ShieldCheck className="size-5" />
                  </div>
                </div>

                {/* Card 2 */}
                <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm flex items-center justify-between shadow-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-teal/5 to-transparent pointer-events-none"></div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider block uppercase">Optimization Yield</span>
                    <h4 className="text-3xl font-black font-display text-teal mt-1">98%</h4>
                    <span className="text-[11px] text-white/60 font-semibold block mt-1">First-Pass Resolution Success</span>
                  </div>
                  <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal">
                    <TrendingUp className="size-5" />
                  </div>
                </div>

                {/* Card 3 */}
                <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm flex items-center justify-between shadow-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-teal/5 to-transparent pointer-events-none"></div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider block uppercase">Operations Liquidity</span>
                    <h4 className="text-3xl font-black font-display text-white mt-1">32 Days</h4>
                    <span className="text-[11px] text-white/60 font-semibold block mt-1">Average A/R Turnaround</span>
                  </div>
                  <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal flex-shrink-0">
                    <Users className="size-5" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: PROBLEM SECTION (Very light red tint — #FDF1F0) */}
      <section className="bg-[#FDF1F0] py-20 lg:py-28 text-left border-b border-red-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-150 px-3 py-1 text-xs font-bold text-red-700">
              ⚠️ Where Orthopedic Revenue Leaks
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight mt-4">
              Six Billing Failures That Cost Orthopedic Practices Every Month
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Orthopedic billing has more claim-killing edge cases per procedure than almost any other specialty. Each failure below is preventable — with the right coder, the right workflow, and the right prior auth discipline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1: Documentation gaps */}
            <div className="bg-white border border-red-100/80 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between border-l-[5px] border-l-red-500 hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-red-500 mb-2.5 block">CASE AUDIT CAPABILITY</span>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Medical documentation gaps
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Incomplete operative notes and missing functional status documentation lead to automatic claim downcodes. Coders cannot bill what the chart doesn't support.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3.5 mt-5 flex justify-between items-center text-[10px] font-mono text-neutral-400 font-bold">
                <span>SYSTEM TARGET:</span>
                <span className="text-red-500 font-extrabold uppercase">Documentation Review Protocol</span>
              </div>
            </div>

            {/* Card 2: CCI Bundling */}
            <div className="bg-white border border-red-100/80 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between border-l-[5px] border-l-red-500 hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-red-500 mb-2.5 block">INTELLIGENT BUNDLING</span>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  CCI bundling in surgical procedures
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Payers flag component codes billed alongside comprehensive codes. Without CCI edit knowledge, surgical claims bundle down — and the revenue is gone unless appealed correctly.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3.5 mt-5 flex justify-between items-center text-[10px] font-mono text-neutral-400 font-bold">
                <span>SYSTEM TARGET:</span>
                <span className="text-red-500 font-extrabold uppercase">CCI Edit Crosscheck</span>
              </div>
            </div>

            {/* Card 3: Bilateral Modifier */}
            <div className="bg-white border border-red-100/80 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between border-l-[5px] border-l-red-500 hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-red-500 mb-2.5 block">CROSSWALK RULES</span>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Bilateral modifier errors
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  The -50 modifier vs. separate -RT/-LT line items is payer-specific. Applying the wrong approach leads to automatic denial or overpayment recoupment. No single rule applies across all payers.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3.5 mt-5 flex justify-between items-center text-[11px] font-mono text-neutral-400 font-bold">
                <span>CPT COMPLIANCE:</span>
                <span className="text-red-500 font-extrabold uppercase">-50 / -RT / -LT</span>
              </div>
            </div>

            {/* Card 4: Surgical scope expansion */}
            <div className="bg-white border border-red-100/80 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between border-l-[5px] border-l-red-500 hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-red-500 mb-2.5 block">PRE-AUTHORIZATION GAPS</span>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Surgical scope expansion without re-auth
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Auth obtained for one procedure; surgeon expands scope intraoperatively. No re-authorization obtained. The add-on procedure denies. This is the single largest preventable orthopedic revenue loss.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3.5 mt-5 flex justify-between items-center text-[10px] font-mono text-neutral-400 font-bold">
                <span>SYSTEM TARGET:</span>
                <span className="text-red-500 font-extrabold uppercase font-bold">Auth Expansion Protocol</span>
              </div>
            </div>

            {/* Card 5: Global period billing */}
            <div className="bg-white border border-red-100/80 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between border-l-[5px] border-l-red-500 hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-red-500 mb-2.5 block">CPT EXCEPTIONS</span>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Global period billing disputes
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Procedures within a 90-day global period billed without -24/-25/-57/-79 modifiers are auto-denied as included. Modifier selection requires clinical context — not just a billing rule.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3.5 mt-5 flex justify-between items-center text-[11px] font-mono text-neutral-400 font-bold">
                <span>CPT COMPLIANCE:</span>
                <span className="text-red-500 font-extrabold uppercase">-24 / -25 / -57 / -79</span>
              </div>
            </div>

            {/* Card 6: Hardware implant */}
            <div className="bg-white border border-red-100/80 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between border-l-[5px] border-l-red-500 hover:shadow-md transition-all">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-red-500 mb-2.5 block">CHARGE RECOVERY</span>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Hardware implant under-reporting
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Implantable hardware (plates, screws, anchors) requires separate line-item reporting with invoice documentation. Missed or incorrectly coded implants represent significant unrecovered revenue per case.
                </p>
              </div>
              <div className="border-t border-neutral-100 pt-3.5 mt-5 flex justify-between items-center text-[10px] font-mono text-neutral-400 font-bold">
                <span>SYSTEM TARGET:</span>
                <span className="text-red-500 font-extrabold uppercase">Implant Charge Capture</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES ACCORDION (White background) */}
      <section id="services-how" className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
              OPERATIONAL WORKFLOWS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              How Clientele RCM Handles Orthopedic Billing End to End
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Three service layers working in concert — not silos. Front-end prevents the denial. Mid-cycle catches what front-end misses. Back-end recovers what still slips through.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Accordion 1: Front-End */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              <button 
                onClick={() => toggleAccordion(0)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#185FA5]/10 text-[#185FA5] text-[10px] font-mono font-bold uppercase">FRONT-END RCM</span>
                  <h3 className="font-display font-bold text-navy text-[15px] md:text-base">Pre-Admission and Intake Scrubbing</h3>
                </div>
                {activeAccordion === 0 ? <ChevronUp className="size-4 text-neutral-400" /> : <ChevronDown className="size-4 text-neutral-400" />}
              </button>
              
              <AnimatePresence initial={false}>
                {activeAccordion === 0 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-neutral-100"
                  >
                    <div className="p-6 md:p-8 bg-neutral-50/50 space-y-6">
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase text-navy tracking-wider mb-2.5 flex items-center gap-1">
                            <Workflow className="size-3.5 text-teal" /> What we do:
                          </h4>
                          <ul className="space-y-2 text-xs text-neutral-600 font-medium">
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-extrabold">•</span>
                              <span>Real-time eligibility verification before every surgical encounter</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-extrabold">•</span>
                              <span>Prior auth submission for all orthopedic surgical procedures tracked to approval</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-extrabold">•</span>
                              <span>Scope expansion protocol: when surgeon adds a procedure intraoperatively, auth update initiated same day</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-extrabold">•</span>
                              <span>PCP referral verification for HMO/managed care by CPT and payer combination</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-extrabold">•</span>
                              <span>Workers' comp, auto, and MVA pathway management — separate auth and billing rules applied</span>
                            </li>
                          </ul>
                        </div>

                        <div className="border border-neutral-200/60 bg-white rounded-xl p-5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">Why it matters:</span>
                            <div className="h-[1px] w-6 bg-[#185FA5] my-1.5" />
                            <p className="text-xs text-neutral-500 leading-relaxed space-y-2.5">
                              <span className="block"><strong>High Auth Friction:</strong> Orthopedic prior auth denial rate is among the highest of any specialty — most are preventable at intake.</span>
                              <span className="block"><strong>Intraoperative scope changes</strong> are common; most practices have no re-auth protocol — every uncovered add-on is lost revenue.</span>
                              <span className="block"><strong>Workers' comp and motor vehicle accident (MVA)</strong> payers have entirely different fee schedules and auth requirements — billed under standard health insurance, they always deny.</span>
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 2: Mid-Cycle */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              <button 
                onClick={() => toggleAccordion(1)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#BA7517]/10 text-[#BA7517] text-[10px] font-mono font-bold uppercase">MID-CYCLE INTELLIGENCE</span>
                  <h3 className="font-display font-bold text-navy text-[15px] md:text-base">Specialty-Certified Case Coding</h3>
                </div>
                {activeAccordion === 1 ? <ChevronUp className="size-4 text-neutral-400" /> : <ChevronDown className="size-4 text-neutral-400" />}
              </button>
              
              <AnimatePresence initial={false}>
                {activeAccordion === 1 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-neutral-100"
                  >
                    <div className="p-6 md:p-8 bg-neutral-50/50 space-y-6">
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase text-navy tracking-wider mb-2.5 flex items-center gap-1">
                            <Workflow className="size-3.5 text-teal" /> What we do:
                          </h4>
                          <ul className="space-y-2 text-xs text-neutral-600 font-medium font-sans">
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-extrabold">•</span>
                              <span>AAPC-certified coders with orthopedic specialty experience review every operative note before claim submission</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-extrabold">•</span>
                              <span>CCI edit crosscheck on all surgical procedure combinations — bundled codes flagged and unbundled where clinically supported with Modifier 59/XS</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-extrabold">•</span>
                              <span>Bilateral modifier applied per payer-specific rules: -50 for payers accepting single-line bilateral; -RT/-LT for payers requiring separate lines</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-extrabold">•</span>
                              <span>Global period tracking: every follow-up service checked against 10/90-day global period before billing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-extrabold">•</span>
                              <span>Hardware implant charge capture with invoice documentation attached at claim creation</span>
                            </li>
                          </ul>
                        </div>

                        <div className="border border-neutral-200/60 bg-white rounded-xl p-5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">KEY CPT &amp; MODIFIERS TRACKED:</span>
                            <div className="h-[1px] w-6 bg-[#BA7517] my-1.5" />
                            
                            <div className="space-y-3 font-mono text-[10px] md:text-[11px] text-neutral-600">
                              <div className="flex items-start gap-2">
                                <span className="bg-[#BA7517]/10 text-[#BA7517] px-1.5 py-0.5 rounded font-bold">29881</span>
                                <span>Knee arthroscopy with medial/lateral meniscectomy</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="bg-[#BA7517]/10 text-[#BA7517] px-1.5 py-0.5 rounded font-bold">27447</span>
                                <span>Total knee arthroplasty (TKA Reconstruction)</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="bg-[#BA7517]/10 text-[#BA7517] px-1.5 py-0.5 rounded font-bold">23472</span>
                                <span>Shoulder reconstruction / arthroplasty</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="bg-[#BA7517]/10 text-[#BA7517] px-1.5 py-0.5 rounded font-bold">Modifiers</span>
                                <span>-50 / -RT / -LT Bilateral selections; -24 / -25 / -57 / -79 Global context modifier overrides; 59 / XS CCI Unbundling codes.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion 3: Back-End */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              <button 
                onClick={() => toggleAccordion(2)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#534AB7]/10 text-[#534AB7] text-[10px] font-mono font-bold uppercase">BACK-END &amp; A/R RECOVERY</span>
                  <h3 className="font-display font-bold text-navy text-[15px] md:text-base">Claim Appeals and Denial Resolution</h3>
                </div>
                {activeAccordion === 2 ? <ChevronUp className="size-4 text-neutral-400" /> : <ChevronDown className="size-4 text-neutral-400" />}
              </button>
              
              <AnimatePresence initial={false}>
                {activeAccordion === 2 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-neutral-100"
                  >
                    <div className="p-6 md:p-8 bg-neutral-50/50 space-y-6">
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xs font-bold uppercase text-navy tracking-wider mb-2.5 flex items-center gap-1">
                            <Workflow className="size-3.5 text-teal" /> What we do:
                          </h4>
                          <ul className="space-y-2 text-xs text-neutral-600 font-medium">
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-extrabold">•</span>
                              <span>All denials worked within 48 hours of ERA receipt</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-extrabold">•</span>
                              <span>Global period disputes: appeal with modifier justification and clinical documentation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-extrabold">•</span>
                              <span>Surgical bundling denials: appeal using operative report and Modifier 59/XS documentation</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-extrabold">•</span>
                              <span>Medical necessity denials: appeal with conservative treatment failure documentation, imaging reports, and functional status</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-extrabold">•</span>
                              <span>Workers' comp and MVA denials: routed to correct fee schedule and attorney/adjuster liaison workflow</span>
                            </li>
                          </ul>
                        </div>

                        <div className="border border-neutral-200/60 bg-white rounded-xl p-5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">TOP DENIAL REASONS RESOLVED:</span>
                            <div className="h-[1px] w-6 bg-[#534AB7] my-1.5" />
                            
                            <div className="space-y-2.5 font-mono text-[10px] md:text-[11px] text-neutral-600">
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-navy">CO-97</span>
                                <span>Bundled clinical procedure</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-navy">CO-4</span>
                                <span>Modifier inconsistent with procedure</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-navy">CO-119</span>
                                <span>Inconsistent Global surgery period validation</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="font-bold text-navy">CO-50</span>
                                <span>Non-covered medical necessity parameters</span>
                              </div>
                              <div className="flex justify-between items-center text-red-500 font-semibold">
                                <span>PR-1</span>
                                <span>Deductible amount — patient responsibility transfer</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: CLIENTELE AI PLATFORM (Dark Navy background) */}
      <section className="relative bg-[#0A1628] text-white py-24 lg:py-32 overflow-hidden border-b border-white/5 text-left">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold block mb-1">
              TECHNOLOGY INTEGRATION
            </span>
            <div className="h-[1.5px] w-12 bg-teal/50 my-3 mx-auto" />
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-white mt-1">
              Human-Guided Automation Built for Orthopedic Complexity
            </h2>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed mt-4">
              Clientele AI doesn't replace orthopedic coding expertise — it amplifies it. Automation handles the volume. AAPC-certified coders handle the complexity. Every flagged claim reviewed before submission.
            </p>
            <div className="mt-4 p-3.5 bg-white/5 border border-white/10 rounded-xl text-center inline-block max-w-2xl text-[11px] md:text-xs">
              <span className="text-amber-400 font-bold">⚠️ Core Assurance Statement:</span>{" "}
              "No orthopedic claim is fully automated. The billing edge cases that cost practices the most — global period conflicts, bilateral modifier disputes, scope expansion denials — require human judgment. That's where our coders stay in the loop."
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Module 1 */}
            <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-[10px] font-mono text-[#1D9E75] font-black uppercase">Live — May 2026</span>
                  <div className="size-2 rounded-full bg-[#1D9E75]" />
                </div>
                <h3 className="font-display font-bold text-white text-base">
                  Insurance Eligibility Verification
                </h3>
                <p className="text-xs text-white/50 leading-relaxed mt-2">
                  Real-time eligibility checks for busy orthopedic surgical clinics. Workers' comp and motor vehicle accident autopayer guidelines surfaced natively before any patient schedules.
                </p>
              </div>
              <div className="border-t border-white/5 pt-3 text-[10px] font-mono text-white/30">
                MODULE ID: RCM-ELIG-V1
              </div>
            </div>

            {/* Module 2 */}
            <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-[10px] font-mono text-amber-500 font-bold uppercase">Coming Q2 2026</span>
                  <div className="size-2 rounded-full bg-amber-500 animate-pulse" />
                </div>
                <h3 className="font-display font-bold text-white text-base">
                  Prior Authorization Management
                </h3>
                <p className="text-xs text-white/50 leading-relaxed mt-2">
                  Automated auth routing equipped with intra-operative scope expansion trackers. When surgery logs note added lines, triggers retroauth workflows instantly.
                </p>
              </div>
              <div className="border-t border-white/5 pt-3 text-[10px] font-mono text-white/30">
                MODULE ID: RCM-AUTH-V2
              </div>
            </div>

            {/* Module 3 */}
            <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm space-y-4 flex flex-col justify-between theme-glow">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-[10px] font-mono text-purple-400 font-bold uppercase">Coming Q3 2026</span>
                  <div className="size-2 rounded-full bg-purple-400" />
                </div>
                <h3 className="font-display font-bold text-white text-base">
                  AI-Assisted ICD &amp; CPT Coding
                </h3>
                <p className="text-xs text-white/50 leading-relaxed mt-2">
                  Cognitive text models suggest ICD-10 link vectors directly from surgical notes. Our AAPC-certified specialists review every case manually for clean Human-Guided Automation checks.
                </p>
              </div>
              <div className="border-t border-white/5 pt-3 text-[10px] font-mono text-white/30">
                MODULE ID: RCM-CODE-V3
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: DENIAL PREVENTION LOOP (Light blue — #F7F9FF) */}
      <section className="bg-[#F7F9FF] py-20 lg:py-28 text-left border-b border-blue-105">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#185FA5] font-bold block mb-3">
              PREVENTIVE CODING FEEDBACK
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Orthopedic Denials Don't Disappear. They Get Engineered Out.
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Every denial we work becomes data. That data drives protocol updates that prevent the same denial from recurring — not just for one claim, but across every orthopedic claim we submit.
            </p>
          </div>

          {/* Flow grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 mb-16 relative">
            <div className="hidden md:block absolute top-[30%] left-[8%] right-[8%] h-[2px] bg-neutral-200 pointer-events-none -z-10" />
            
            {/* Step 1 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:text-center text-left relative z-10 flex flex-col justify-between h-36 md:h-28 shadow-xs">
              <span className="text-[10px] font-mono text-neutral-400 block font-bold">STEP 01</span>
              <p className="text-xs font-bold text-navy mt-1">Denial received</p>
              <div className="flex md:justify-center mt-3"><div className="size-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-[10px] font-bold">1</div></div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:text-center text-left relative z-10 flex flex-col justify-between h-36 md:h-28 shadow-xs">
              <span className="text-[10px] font-mono text-neutral-400 block font-bold">STEP 02</span>
              <p className="text-xs font-bold text-navy mt-1">Root cause identified</p>
              <div className="flex md:justify-center mt-3"><div className="size-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 text-[10px] font-bold">2</div></div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:text-center text-left relative z-10 flex flex-col justify-between h-36 md:h-28 shadow-xs">
              <span className="text-[10px] font-mono text-neutral-400 block font-bold">STEP 03</span>
              <p className="text-xs font-bold text-navy mt-1">Pattern analyzed</p>
              <div className="flex md:justify-center mt-3"><div className="size-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-[10px] font-bold">3</div></div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:text-center text-left relative z-10 flex flex-col justify-between h-36 md:h-28 shadow-xs">
              <span className="text-[10px] font-mono text-neutral-400 block font-bold">STEP 04</span>
              <p className="text-xs font-bold text-navy mt-1">Protocol updated</p>
              <div className="flex md:justify-center mt-3"><div className="size-6 rounded-full bg-[#534AB7]/10 flex items-center justify-center text-[#534AB7] text-[10px] font-bold">4</div></div>
            </div>

            {/* Step 5 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-4 md:text-center text-left relative z-10 flex flex-col justify-between h-36 md:h-28 shadow-xs">
              <span className="text-[10px] font-mono text-neutral-400 block font-bold">STEP 05</span>
              <p className="text-xs font-bold text-emerald-600 mt-1">Denial rate drops</p>
              <div className="flex md:justify-center mt-3"><div className="size-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 text-[10px] font-bold">5</div></div>
            </div>

          </div>

          {/* Bottom Stat Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white border border-neutral-200 rounded-2xl p-6 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100 text-center select-none shadow-sm">
            
            <div className="pt-2 lg:pt-0">
              <div className="text-[28px] font-black font-display text-navy">99%</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 font-bold mt-1">Clean claim rate</div>
            </div>
            
            <div className="pt-2 lg:pt-0">
              <div className="text-[28px] font-black font-display text-teal">98%</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 font-bold mt-1">First-pass resolution</div>
            </div>
            
            <div className="pt-2 lg:pt-0">
              <div className="text-[28px] font-black font-display text-navy">48 Hrs</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 font-bold mt-1">Denial response</div>
            </div>
            
            <div className="pt-2 lg:pt-0">
              <div className="text-[28px] font-black font-display text-teal">32-day</div>
              <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 font-bold mt-1">Average A/R speed</div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: SPECIALTY DEPTH TABS (White background) */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#1D9E75] font-bold block mb-3">
              DEPTH OF KNOWLEDGE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Sub-Specialty Expertise Within Orthopedics
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Orthopedic billing isn't monolithic. Spine, joint reconstruction, sports medicine, and trauma each carry distinct coding nuances, authorization pathways, and payer behaviors.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 items-start">
            
            {/* Left Nav Tabs */}
            <div className="lg:col-span-1 space-y-2 select-none">
              <button
                onClick={() => setActiveSubSpec('joint')}
                className={`w-full text-left font-display font-semibold transition-all px-4 py-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer ${
                  activeSubSpec === 'joint' 
                    ? 'bg-navy text-white border-navy font-bold' 
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-500 border-neutral-200'
                }`}
              >
                Joint Reconstruction
                <ChevronRight className={`size-3.5 ${activeSubSpec === 'joint' ? 'text-teal' : 'text-neutral-400'}`} />
              </button>

              <button
                onClick={() => setActiveSubSpec('spine')}
                className={`w-full text-left font-display font-semibold transition-all px-4 py-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer ${
                  activeSubSpec === 'spine' 
                    ? 'bg-navy text-white border-navy font-bold' 
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-500 border-neutral-200'
                }`}
              >
                Spine Surgery
                <ChevronRight className={`size-3.5 ${activeSubSpec === 'spine' ? 'text-teal' : 'text-neutral-400'}`} />
              </button>

              <button
                onClick={() => setActiveSubSpec('sports')}
                className={`w-full text-left font-display font-semibold transition-all px-4 py-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer ${
                  activeSubSpec === 'sports' 
                    ? 'bg-navy text-white border-navy font-bold' 
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-500 border-neutral-200'
                }`}
              >
                Sports Medicine
                <ChevronRight className={`size-3.5 ${activeSubSpec === 'sports' ? 'text-teal' : 'text-neutral-400'}`} />
              </button>

              <button
                onClick={() => setActiveSubSpec('trauma')}
                className={`w-full text-left font-display font-semibold transition-all px-4 py-3 rounded-xl border flex items-center justify-between text-xs cursor-pointer ${
                  activeSubSpec === 'trauma' 
                    ? 'bg-navy text-white border-navy font-bold' 
                    : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-500 border-neutral-200'
                }`}
              >
                Trauma &amp; Fracture
                <ChevronRight className={`size-3.5 ${activeSubSpec === 'trauma' ? 'text-teal' : 'text-neutral-400'}`} />
              </button>
            </div>

            {/* Right Pane Container */}
            <div className="lg:col-span-3 border border-neutral-200 rounded-2xl p-6 md:p-8 bg-neutral-50/55 min-h-[360px]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-navy flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-teal rounded-full"></span>
                    {subSpecData[activeSubSpec].title} RCM Depth
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mt-1.5">
                    {subSpecData[activeSubSpec].description}
                  </p>
                </div>

                <div className="grid md:grid-cols-12 gap-8 pt-4 border-t border-neutral-200">
                  
                  {/* Challenges (Left Block) */}
                  <div className="md:col-span-7 space-y-4 text-left">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase block mb-1">
                      Critical Coding Constraints Managed:
                    </span>
                    
                    {subSpecData[activeSubSpec].challenges.map((c, i) => (
                      <div key={i} className="space-y-1">
                        <h4 className="text-xs font-bold text-navy flex items-start gap-1.5 leading-snug">
                          <AlertTriangle className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{c.title}</span>
                        </h4>
                        <p className="text-xs text-neutral-500 pl-5 leading-relaxed">{c.explanation}</p>
                      </div>
                    ))}
                  </div>

                  {/* CPT Codes (Right Block) */}
                  <div className="md:col-span-5 space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#1D9E75] font-bold uppercase block mb-1">
                      Direct CPT Competence:
                    </span>
                    
                    <div className="space-y-3 font-mono text-[10px] text-neutral-600 bg-white border border-neutral-200 p-4 rounded-xl">
                      {subSpecData[activeSubSpec].cpts.map((c, i) => (
                        <div key={i} className="border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0">
                          <span className="text-navy font-extrabold text-[11px] block">{c.code}</span>
                          <span className="text-[10px] text-neutral-400 mt-0.5 block font-sans leading-relaxed">{c.notes}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS (Light warm gray — #F9F9F7) */}
      <section className="bg-[#F9F9F7] py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-[#1D9E75] font-bold block mb-3">
              CLIENT PORTFOLIO VOICE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Proven Across Leading Orthopedic Groups
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              We manage revenue cycle performance for highly complex practice combinations directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Testimonial 1 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-md transition-all flex flex-col justify-between">
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-medium italic">
                "Our global period denials were the single biggest drain on our A/R. Within 60 days of switching to Clientele, those denials dropped significantly — the coders actually understand modifier -24 vs. -57 vs. -79 and when each applies. That's rare."
              </p>
              <div>
                <div className="h-[1px] w-6 bg-teal my-3" />
                <div className="text-[10px] font-mono uppercase text-neutral-400 font-bold">REVENUE CYCLE MANAGER</div>
                <div className="text-xs font-bold text-navy mt-0.5">Multi-Specialty Orthopedic Clinic</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">Michigan Practice Group</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-4 hover:shadow-md transition-all flex flex-col justify-between">
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-medium italic">
                "We were losing money on bilateral procedures because our previous biller applied -50 across the board. Clientele mapped every payer's bilateral billing preference and our reimbursement on those cases improved immediately."
              </p>
              <div>
                <div className="h-[1px] w-6 bg-teal my-3" />
                <div className="text-[10px] font-mono uppercase text-neutral-400 font-bold">PRACTICE ADMINISTRATOR</div>
                <div className="text-xs font-bold text-navy mt-0.5">Orthopedic Surgery Group</div>
                <div className="text-[10px] text-neutral-400 mt-0.5">Michigan Specialty Clinic</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: SERVICE NAVIGATION CROSS-LINKS (Light secondary surface) */}
      <section className="bg-neutral-50 py-16 text-left border-b border-neutral-205">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-extrabold mb-6 block text-center">
            Explore Related Services
          </span>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            
            <a 
              href="/specialties/orthopedics"
              onClick={(e) => handleLinkClick(e, '/specialties/orthopedics')}
              className="border border-navy bg-navy text-white rounded-xl p-4 flex flex-col justify-between h-28 text-left group hover:scale-[1.02] transition-all"
            >
              <div className="text-white/40 text-[9px] font-mono uppercase font-bold tracking-wider">SPECIALTY</div>
              <span className="font-display font-semibold text-xs mt-auto group-hover:text-teal">Orthopedic RCM (Active)</span>
            </a>

            <a 
              href="/specialties/pain-management"
              onClick={(e) => handleLinkClick(e, '/specialties/pain-management')}
              className="border border-neutral-200 bg-white rounded-xl p-4 flex flex-col justify-between h-28 text-left group hover:bg-neutral-50 hover:scale-[1.02] transition-all"
            >
              <div className="text-neutral-400 text-[9px] font-mono uppercase font-bold tracking-wider">SPECIALTY</div>
              <span className="font-display font-semibold text-xs text-navy mt-auto group-hover:text-teal">Pain Management RCM</span>
            </a>

            <a 
              href="/specialties/anesthesia"
              onClick={(e) => handleLinkClick(e, '/specialties/anesthesia')}
              className="border border-neutral-200 bg-white rounded-xl p-4 flex flex-col justify-between h-28 text-left group hover:bg-neutral-50 hover:scale-[1.02] transition-all"
            >
              <div className="text-neutral-400 text-[9px] font-mono uppercase font-bold tracking-wider">SPECIALTY</div>
              <span className="font-display font-semibold text-xs text-navy mt-auto group-hover:text-[#185FA5]">Anesthesia Billing</span>
            </a>

            <a 
              href="/specialties/therapy"
              onClick={(e) => handleLinkClick(e, '/specialties/therapy')}
              className="border border-neutral-200 bg-white rounded-xl p-4 flex flex-col justify-between h-28 text-left group hover:bg-neutral-50 hover:scale-[1.02] transition-all"
            >
              <div className="text-neutral-400 text-[9px] font-mono uppercase font-bold tracking-wider">SPECIALTY</div>
              <span className="font-display font-semibold text-xs text-navy mt-auto group-hover:text-[#534AB7]">Comprehensive Therapy</span>
            </a>

            <a 
              href="/services/back-end"
              onClick={(e) => handleLinkClick(e, '/services/back-end')}
              className="border border-neutral-200 bg-white rounded-xl p-4 flex flex-col justify-between h-28 text-left group hover:bg-neutral-50 hover:scale-[1.02] transition-all"
            >
              <div className="text-neutral-400 text-[9px] font-mono uppercase font-bold tracking-wider">RCM VALVE</div>
              <span className="font-display font-semibold text-xs text-navy mt-auto group-hover:text-purple-600">Back-End &amp; A/R Recovery</span>
            </a>

            <a 
              href="/services/front-end"
              onClick={(e) => handleLinkClick(e, '/services/front-end')}
              className="border border-neutral-200 bg-white rounded-xl p-4 flex flex-col justify-between h-28 text-left group hover:bg-neutral-50 hover:scale-[1.02] transition-all"
            >
              <div className="text-neutral-400 text-[9px] font-mono uppercase font-bold tracking-wider">RCM VALVE</div>
              <span className="font-display font-semibold text-xs text-navy mt-auto group-hover:text-[#185FA5]">Front-End RCM</span>
            </a>

          </div>
        </div>
      </section>

      {/* SECTION 10: FOOTER CTA BAND (Dark Navy background) */}
      <section className="relative bg-[#0A1628] rounded-3xl text-white p-8 md:p-14 overflow-hidden text-center mx-6 my-12">
        <div className="absolute inset-0 mesh-glow opacity-35 pointer-events-none" />
        <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4 text-white">
          Ready to Stop Losing Revenue to Orthopedic Billing Complexity?
        </h2>
        <p className="text-xs text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          Request a free RCM assessment. We'll audit your denial patterns, A/R aging, and coding accuracy — and show you exactly where orthopedic billing complexity is costing your practice.
        </p>
        <div className="flex justify-center">
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setTimeout(() => {
                document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="rounded-full bg-teal text-navy hover:bg-teal-glow px-8 py-4 font-bold text-xs transition-all tracking-wide select-none text-navy font-sans uppercase shadow-glow"
          >
            Request a Free Orthopedic RCM Assessment →
          </a>
        </div>
      </section>

    </div>
  );
}
