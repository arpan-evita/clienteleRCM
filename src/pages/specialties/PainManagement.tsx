import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  X, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
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
  Clock,
  Settings,
  ArrowRightLeft
} from 'lucide-react';

interface PainManagementProps {
  navigate: (path: string) => void;
}

export default function PainManagement({ navigate }: PainManagementProps) {
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

  // State for Accordion
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // State for Specialty Depth Tabs
  const [activeTab, setActiveTab] = useState<'trigger' | 'nerve' | 'epidural' | 'spinal' | 'radiofrequency'>('trigger');

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const tabsData = {
    trigger: {
      id: 'trigger',
      name: 'Trigger Point Injections',
      pitfalls: [
        {
          title: '20552 vs. 20553 Selection Integrity',
          desc: 'Selection between 20552 (1–2 sites) and 20553 (3+ sites) must be based strictly on chart documentation. Providers must explicitly document the number of sites treated rather than trigger points muscle count.'
        },
        {
          title: 'Authorization Mismatch on Day-of-Service',
          desc: 'When clinical expansion triggers a shift from 1–2 targets to 3+ targets mid-procedure, the pre-authorized CPT 20552 becomes invalid, creating an automatic claim mismatch with payer records.'
        },
        {
          title: 'Same-day Rebilling Inconsistencies',
          desc: 'Billing multiple sessions of trigger point injections on the same day incorrectly without appropriate clinical identifiers leads to massive post-payment recoupment audits.'
        }
      ],
      handle: 'We match code selection directly to unique site count counts in the operative note and run pre-submission checks to flag authorized 20552 codes that morphed into 20553 claims before clearing the transmission queue.',
      cpts: [
        { code: 'CPT 20552', note: 'Injection(s); single or multiple trigger point(s), 1 or 2 muscle(s)' },
        { code: 'CPT 20553', note: 'Injection(s); single or multiple trigger point(s), 3 or more muscle(s)' },
        { code: 'Auth Tracking', note: 'Pre-service alignment to match scheduled numbers to authorized counts' }
      ]
    },
    nerve: {
      id: 'nerve',
      name: 'Nerve Blocks',
      pitfalls: [
        {
          title: 'CPT 64415 vs. 64640 Coding Errors',
          desc: '64415 (nerve block, single injection) and 64640 (destruction of peripheral nerve, neurolytic agent) demand completely different clinical documentation pathways. Applying them interchangeably triggers compliance exposure.'
        },
        {
          title: 'Bilateral Modifier Selection Blind Spots',
          desc: 'Failing to adapt bilateral block reporting to specific client payer configurations (-50 vs -RT/-LT lines) results in systematic 50% line-item under-payments.'
        },
        {
          title: 'Add-on Block Authorization Omissions',
          desc: 'Performing a secondary diagnostic nerve block without obtaining explicit add-on codes on the initial prior authorization guarantee.'
        }
      ],
      handle: 'Our team reviews operative note language to verify injection type (temporary block vs. permanent neurolytic destruction) before code selection, and applies custom bilateral rules on a payer-by-payer basis.',
      cpts: [
        { code: 'CPT 64415', note: 'Injection, anesthetic agent; internal brachial plexus block' },
        { code: 'CPT 64640', note: 'Destruction by neurolytic agent; other peripheral nerve or branch' },
        { code: '-50/-RT/-LT', note: 'Bilateral modifier application optimized per contract configuration' },
        { code: 'Neurolytic Docs', note: 'Explicit documentation check for chemical, thermal, or cryogenic agents' }
      ]
    },
    epidural: {
      id: 'epidural',
      name: 'Epidural Steroid Injections',
      pitfalls: [
        {
          title: 'Approach-Specific CPT Mismatch',
          desc: 'Interlaminar (62321/62323) vs. transforaminal (64483/64484) coding are frequently swapped by general billers, leading to instant denials due to anatomical imaging mismatches.'
        },
        {
          title: 'Frequency Utilization Thresholds',
          desc: 'Payers mandate strict limits (e.g., maximum of 3 injections per region per 12 months). Exceeding these limits triggers immediate medical necessity denials.'
        },
        {
          title: 'Fluoroscopic Guidance Omissions',
          desc: 'Billing epidurals without verifying that fluoroscopic guidance (77003) was separately authorized or bundled in the primary contract based on individual payer profiles.'
        }
      ],
      handle: 'We capture the specific approach from the operative note and run historical claim audits per patient to track lifetime and annual injection frequencies against local policies (LCDs/NCDs) before billing.',
      cpts: [
        { code: 'CPT 62321', note: 'Cervical/thoracic interlaminar epidural with imaging guidance' },
        { code: 'CPT 62323', note: 'Lumbar/sacral interlaminar epidural with imaging guidance' },
        { code: 'CPT 64483', note: 'Transforaminal epidural, lumbar/sacral, single level' },
        { code: 'CPT 64484', note: 'Transforaminal epidural, lumbar/sacral, each additional level' },
        { code: 'CPT 77003', note: 'Fluoroscopic guidance and localization for needle placement' }
      ]
    },
    spinal: {
      id: 'spinal',
      name: 'Spinal Cord Stimulation',
      pitfalls: [
        {
          title: 'Trial vs. Permanent Placement Path Disconnects',
          desc: 'Trial lead placements (63650) require separate authorization parameters than permanent generator implants (63685) and must be coded on different pathways.'
        },
        {
          title: 'Unreported Anchors and Device Hardware',
          desc: 'High-cost trial accessories and permanent impulse generators are missed during manual charge entry if vendor invoices are not integrated.'
        },
        {
          title: 'Programming Visit Frequency Limits',
          desc: 'Post-op electronic analysis and programming (95971/95972) billed outside allowed global surgical windows or beyond commercial contract limits.'
        }
      ],
      handle: 'We route trial and permanent implants through distinct pre-billing pathways, pairing implant reporting directly with hardware invoices and tracking subsequent analysis visits within strict global limits.',
      cpts: [
        { code: 'CPT 63650', note: 'Percutaneous implantation of neurostimulator electrode array' },
        { code: 'CPT 63685', note: 'Insertion or replacement of spinal neurostimulator pulse generator' },
        { code: 'CPT 95970', note: 'Electronic analysis of implanted neurostimulator without programming' },
        { code: 'CPT 95971', note: 'Simple programming of implanted neurostimulator' },
        { code: 'HCPCS L8680', note: 'Implantable neurostimulator electrode, each' }
      ]
    },
    radiofrequency: {
      id: 'radiofrequency',
      name: 'Radiofrequency Ablation',
      pitfalls: [
        {
          title: 'Anatomical Segment/Level Coding Errors',
          desc: 'Radiofrequency of facet joint nerves requires meticulous level-by-level reporting (e.g. 64635 for primary, 64636 for each additional level). Mistakes in level count trigger immediate audits.'
        },
        {
          title: 'Bilateral Ablation Underpayment',
          desc: 'Weird payer rules restrict bilateral facet denervations to specific line combinations (-50 on one line vs multiple lines with -LT/-RT modifiers).'
        },
        {
          title: 'Inadequate Initial Conservative Response Audit',
          desc: 'Repeat ablations require evidence of 50–80% localized pain relief from temporary diagnostic blocks. If this tracking is missing, whole claims are retroactively recouped.'
        }
      ],
      handle: 'Our software maps individual spinal levels directly from procedural diagrams to CPT levels, and validates that a documented diagnostic block response exceeding 50% is attached to all repeat treatment claims.',
      cpts: [
        { code: 'CPT 64635', note: 'Destruction by neurolytic agent, paravertebral facet joint nerve, lumbar/sacral, single level' },
        { code: 'CPT 64636', note: 'Destruction by neurolytic agent, paravertebral facet joint nerve, lumbar/sacral, additional level' },
        { code: 'Bilateral Rules', note: 'Custom rules dynamically assigned per contract rules' },
        { code: 'Level Coding', note: 'Checks to ensure thoracic vs. lumbar families are not intermingled' }
      ]
    }
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans select-text text-left">
      
      {/* SECTION 1: PIPELINE POSITION INDICATOR */}
      <div className="bg-white border-b border-neutral-200 sticky top-[72px] z-45">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 py-3.5 min-w-max items-center justify-start text-xs font-semibold select-none">
            <span className="text-neutral-400 font-mono text-[11px] uppercase tracking-wider">RCM Pipeline:</span>
            <a href="/services/front-end" onClick={(e) => handleLinkClick(e, '/services/front-end')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Front-End RCM</a>
            <span className="text-neutral-300">→</span>
            
            <a href="/services/mid-cycle" onClick={(e) => handleLinkClick(e, '/services/mid-cycle')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Prior Authorization</a>
            <span className="text-neutral-300">→</span>
            
            <a href="/services/mid-cycle" onClick={(e) => handleLinkClick(e, '/services/mid-cycle')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">ICD &amp; CPT Coding</a>
            <span className="text-neutral-300">→</span>
            
            <a href="/services/back-end" onClick={(e) => handleLinkClick(e, '/services/back-end')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Claims Submission</a>
            <span className="text-neutral-300">→</span>

            <span className="bg-amber-500 text-neutral-900 px-3.5 py-1.5 rounded-full font-bold shadow-sm border border-amber-600/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full animate-pulse"></span>
              Pain Management Specialty
            </span>

            <span className="text-neutral-300">→</span>
            <a href="/services/back-end" onClick={(e) => handleLinkClick(e, '/services/back-end')} className="px-3 py-1.5 rounded-md text-neutral-500 hover:text-navy hover:bg-neutral-50 transition-colors">Back-End &amp; A/R</a>
          </div>
        </div>
      </div>

      {/* Breadcrumb strip */}
      <div className="bg-neutral-50 border-b border-neutral-100 py-3">
        <div className="max-w-7xl mx-auto px-6 text-[11px] font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2 select-none">
          <a href="/specialties" onClick={(e) => handleLinkClick(e, '/specialties')} className="hover:text-navy transition-colors">Specialties</a>
          <ChevronRight className="size-3 text-neutral-300" />
          <span className="text-amber-600 font-bold">Pain Management RCM</span>
        </div>
      </div>

      {/* SECTION 2: HERO (Dark Navy backplane) */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left aligned content (60% width) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
                SPECIALTY BILLING — PAIN MANAGEMENT
              </span>
              <div className="h-[1px] w-12 bg-teal/50 mb-6" />
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[1.10] tracking-tight text-white mb-6">
                Pain Management Billing Requires Daily Discipline. <br />
                <span className="text-teal">Authorization Gaps Are the Enemy.</span>
              </h1>
              
              <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-8 font-sans">
                Add-on CPT codes billed without updated authorization. Bundled nerve blocks and trigger points denied on the same claim. Fluoroscopic guidance coded wrong by payer. These aren't edge cases — they're everyday revenue losses for pain management practices. We stop them before they happen.
              </p>
              
              {/* CTA Block */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <a
                  href="#assessment"
                  onClick={(e) => handleLinkClick(e, '#assessment')}
                  className="rounded-full bg-teal text-navy px-7 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2 select-none font-sans"
                >
                  Request a Pain Management RCM Assessment →
                </a>
                <a
                  href="#problem-story"
                  onClick={(e) => handleLinkClick(e, '#problem-story')}
                  className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center select-none"
                >
                  See How We Prevent Authorization Denials
                </a>
              </div>

              {/* Micro-copy */}
              <div className="text-white/40 text-[11px] font-mono flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                <span>🛡️ AAPC-certified pain management coders</span>
                <span>•</span>
                <span>Real-time auth tracking built-in</span>
                <span>•</span>
                <span>MI · IL · FL · NY · CT · NJ · DC payers mapped</span>
              </div>
            </div>
            
            {/* Right-side visual stat list */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-teal/10 rounded-3xl blur-2xl opacity-40 pointer-events-none" />
              
              <div className="relative space-y-4">
                
                {/* Stat 1 */}
                <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm flex items-center justify-between shadow-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-teal/5 to-transparent pointer-events-none"></div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider block uppercase">ACCURACY BENCHMARK</span>
                    <h4 className="text-3xl font-black font-display text-white mt-1 group-hover:text-teal transition-colors">99%</h4>
                    <span className="text-[11px] text-white/60 font-semibold block mt-1">Clean claim rate across pain management accounts</span>
                    <span className="text-[10px] text-white/35 block mt-0.5">Industry average: 85–90%</span>
                  </div>
                  <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal flex-shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm flex items-center justify-between shadow-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-teal/5 to-transparent pointer-events-none"></div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider block uppercase font-bold">TURNAROUND EFFICIENCY</span>
                    <h4 className="text-3xl font-black font-display text-teal mt-1">4 Hours</h4>
                    <span className="text-[11px] text-white/60 font-semibold block mt-1">Target time to complete prior authorization</span>
                    <span className="text-[10px] text-white/35 block mt-0.5">For standard interventional procedures</span>
                  </div>
                  <div className="size-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal flex-shrink-0">
                    <Clock className="size-5" />
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm flex items-center justify-between shadow-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-full w-1/3 bg-linear-to-l from-teal/5 to-transparent pointer-events-none"></div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 tracking-wider block uppercase font-bold">SPECIALIST DEPTH</span>
                    <h4 className="text-3xl font-black font-display text-white mt-1">5–12 Years</h4>
                    <span className="text-[11px] text-white/60 font-semibold block mt-1">Pain management billing experience per coder</span>
                    <span className="text-[10px] text-white/35 block mt-0.5">AAPC-certified, interventional-trained</span>
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

      {/* SECTION 3: THE CORE PROBLEM STORY (Very light amber tint background) */}
      <section id="problem-story" className="bg-[#FEF9F3] py-20 lg:py-28 border-b border-amber-100/70 text-left">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-800">
              ⚡ The Add-On CPT Problem — Pain Management's #1 Revenue Leak
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight mt-4">
              Authorization Obtained for One Procedure. <br />
              Provider Performs Another. <span className="text-amber-800 italic">Claim Denied.</span>
            </h2>
          </div>

          {/* Narrative Body */}
          <div className="prose prose-neutral max-w-none text-neutral-700 space-y-6 text-sm md:text-base leading-relaxed">
            <p>
              The scenario plays out dozens of times a month in pain management practices across the country. A patient presents for a trigger point injection. The Medical Assistant (MA) obtains prior authorization for <strong>CPT 20552</strong> (1–2 trigger point sites). In the procedure room, the provider determines three or more sites are clinically appropriate and performs <strong>CPT 20553</strong> — a different procedure code, requiring separate authorization. The claim is submitted. <strong>It denies.</strong> The authorization on file doesn't cover what was actually performed.
            </p>
            <p>
              The same pattern occurs with nerve blocks. Authorization is obtained for CPT 20552. The provider decides to add a diagnostic or therapeutic block — <strong>CPT 64415</strong> or <strong>CPT 64640</strong> — as a critical add-on. The add-on code was never authorized. The claim denies post-service. There is no retroactive authorization path with most commercial payers.
            </p>
            <p className="border-l-4 border-amber-500 pl-4 py-1.5 my-4 bg-amber-500/5 text-navy font-medium italic">
              "This is not a coding error. It is a workflow failure between the MA, the provider, and the billing team — and it is almost entirely preventable."
            </p>
            
            <h3 className="font-display font-bold text-navy text-xl pt-4">How Clientele RCM Prevents It</h3>
            <p>
              Our authorization tracking workflow embeds add-on CPT flags into the pre-service check. When an authorization is obtained for a trigger point injection, the system flags the most common clinical additions for that procedure — and the MA is prompted to clarify scope with the provider before the appointment. If scope changes day-of, the auth team is contacted in real-time before the service is rendered.
            </p>
          </div>

          {/* Call-out statistics block */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-amber-100 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-amber-700">
                <AlertTriangle className="size-5" />
              </div>
              <p className="text-xs md:text-sm text-neutral-600 max-w-md font-medium text-left">
                <strong>The add-on CPT authorization gap</strong> is responsible for the majority of interventional pain management denials. We&apos;ve built a protocol specifically to close it.
              </p>
            </div>
            <a href="#assessment" onClick={(e) => handleLinkClick(e, '#assessment')} className="text-xs font-bold text-amber-800 hover:text-amber-950 font-mono tracking-wider flex items-center gap-1.5 group select-none whitespace-nowrap">
              LEARN ABOUT OUR WORKFLOW
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 4: FULL PROBLEM GRID (Very light amber continued) */}
      <section className="bg-[#FEF9F3] pb-24 lg:pb-32 border-b border-amber-100/70 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-amber-700 font-bold block mb-1">
              REVENUE GAP ANALYSIS
            </span>
            <div className="h-[2px] w-8 bg-amber-500/50 mx-auto mb-5" />
            
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Every Billing Challenge That Hits Interventional Pain Practices
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              The add-on CPT problem is the biggest — but not the only one. Here&apos;s the complete map of where pain management revenue leaks, and how Clientele addresses each point.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border-t-4 border-amber-500 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Add-on CPT codes without updated authorization
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Auth obtained for one code; provider performs a related but separately-coded service. No retroactive authorization path. The most common and most costly denial category in interventional pain.
                </p>
              </div>
              <div className="flex gap-2 items-center flex-wrap pt-2 border-t border-neutral-100 mt-2 font-mono text-[9px] font-bold text-neutral-500">
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">20552 → 20553</span>
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">64415 add-on</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-t-4 border-amber-500 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Bundling denials for same-session procedures
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Trigger point and nerve block procedures performed in the same session are frequently bundled by payers using CCI edits. Without Modifier -59 or -XS with distinct service documentation, one code is denied as inclusive.
                </p>
              </div>
              <div className="flex gap-2 items-center flex-wrap pt-2 border-t border-neutral-100 mt-2 font-mono text-[9px] font-bold text-neutral-500">
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">Mod -59 / -XS</span>
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">CCI edits</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-t-4 border-amber-500 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Fluoroscopic guidance miscoding
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  CPT 77002 and 77003 (fluoroscopic guidance) are separately billable by some payers and inclusive for others. Billing guidance codes when the payer considers them inclusive triggers denial or recoupment.
                </p>
              </div>
              <div className="flex gap-2 items-center flex-wrap pt-2 border-t border-neutral-100 mt-2 font-mono text-[9px] font-bold text-neutral-500">
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">77002</span>
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">77003</span>
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">Payer-specific</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border-t-4 border-amber-500 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Communication gaps between MA and provider
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Authorization is obtained by the MA based on the scheduled procedure. The provider changes or expands scope in the room. The MA and billing team are not notified, causing automated auth mismatch flags.
                </p>
              </div>
              <div className="flex gap-2 items-center flex-wrap pt-2 border-t border-neutral-100 mt-2 font-mono text-[9px] font-bold text-neutral-500">
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">Auth-to-service gap</span>
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">Pre-service check</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border-t-4 border-amber-500 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Medical necessity for interventional procedures
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  Payers require documentation of conservative treatment failure before approving interventional approaches. Missing documentation of prior PT, medication trials, or imaging findings triggers medical necessity denial.
                </p>
              </div>
              <div className="flex gap-2 items-center flex-wrap pt-2 border-t border-neutral-100 mt-2 font-mono text-[9px] font-bold text-neutral-500">
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">LCD / NCD</span>
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">Conservative tx failure</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white border-t-4 border-amber-500 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h3 className="font-display font-bold text-navy text-[15px] leading-snug mb-2">
                  Nerve block vs. neurolytic agent miscoding
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  CPT 64415 (nerve block, single injection) and CPT 64640 (destruction of peripheral nerve, neurolytic agent) are distinct procedures with distinct payer requirements. Selecting the wrong code results in systematic denial.
                </p>
              </div>
              <div className="flex gap-2 items-center flex-wrap pt-2 border-t border-neutral-100 mt-2 font-mono text-[9px] font-bold text-neutral-500">
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">64415</span>
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">64640</span>
                <span className="bg-amber-100/80 text-amber-800 px-1.5 py-0.5 rounded">Neurolytic</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: SERVICE DEEP-DIVE ACCORDION (White background) */}
      <section id="services" className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
              SERVICE DEEP-DIVE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              How We Handle Pain Management Billing Across Every Stage of the RCM Cycle
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Click any stage to see the specific protocols Clientele applies for interventional pain management — not generic RCM, but billing built around the codes your providers actually use.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Accordion Item 1 */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              <button 
                onClick={() => toggleAccordion(0)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#185FA5]/10 text-[#185FA5] text-[10px] font-mono font-bold uppercase">FRONT-END CYCLE</span>
                  <h3 className="font-display font-bold text-navy text-[15px] md:text-base">Eligibility, Authorization &amp; Scope Management</h3>
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
                        <div className="space-y-4 text-xs text-neutral-600 font-medium">
                          <p className="font-semibold text-navy">Workflow Controls deployed:</p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-bold">•</span>
                              <span>Real-time eligibility verification at scheduling via Clientele AI Module 1.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-bold">•</span>
                              <span>Authorization workflow built specifically for interventional pain: add-on CPT flag protocol embedded at pre-service.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-bold">•</span>
                              <span>When auth is obtained for a trigger point or nerve block, the system prompts confirmation of likely add-on scope before the appointment date.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-bold">•</span>
                              <span>Same-day scope change protocol: if provider changes planned procedure day-of, auth team is contacted before service is rendered where possible.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#185FA5] font-bold">•</span>
                              <span>Payer-specific prior auth rules for interventional pain maintained for all major payers in MI, IL, FL, NY, CT, NJ, and DC.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">KEY CODES &amp; ARTIFACTS</span>
                            <div className="h-[1px] w-6 bg-[#185FA5] my-1.5" />
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              <span className="bg-[#185FA5]/10 text-[#185FA5] font-mono text-[10px] font-bold px-2 py-0.5 rounded">20552</span>
                              <span className="bg-[#185FA5]/10 text-[#185FA5] font-mono text-[10px] font-bold px-2 py-0.5 rounded">20553</span>
                              <span className="bg-[#185FA5]/10 text-[#185FA5] font-mono text-[10px] font-bold px-2 py-0.5 rounded">64415</span>
                              <span className="bg-[#185FA5]/10 text-[#185FA5] font-mono text-[10px] font-bold px-2 py-0.5 rounded">64640</span>
                              <span className="bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-neutral-200">Prior Auth Tracking</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion Item 2 */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              <button 
                onClick={() => toggleAccordion(1)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#BA7517]/10 text-[#BA7517] text-[10px] font-mono font-bold uppercase font-bold">MID-CYCLE CYCLE</span>
                  <h3 className="font-display font-bold text-navy text-[15px] md:text-base">ICD-10, CPT Coding &amp; Modifier Application</h3>
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
                        <div className="space-y-4 text-xs text-neutral-600 font-medium">
                          <p className="font-semibold text-navy">Mid-cycle scrutiny steps:</p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-bold">•</span>
                              <span>AAPC-certified coders with 5–12 years of pain management and interventional billing experience review every claim.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-bold">•</span>
                              <span>Fluoroscopic guidance coding reviewed per payer — 77002 and 77003 billed only when the specific payer&apos;s current policy allows separate billing. If inclusive, it is flagged.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-bold">•</span>
                              <span>Bundling review for same-session procedures: CCI edit check with -59 or -XS modifier applied only when distinct service documentation supports it.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#BA7517] font-bold">•</span>
                              <span>Nerve block vs. neurolytic review: 64415 and 64640 differentiated by operative note language before coding is finalized.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">KEY CODES &amp; MODIFIERS</span>
                            <div className="h-[1px] w-6 bg-[#BA7517] my-1.5" />
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              <span className="bg-[#BA7517]/15 text-[#BA7517] font-mono text-[10px] font-bold px-2 py-0.5 rounded">77002</span>
                              <span className="bg-[#BA7517]/15 text-[#BA7517] font-mono text-[10px] font-bold px-2 py-0.5 rounded">77003</span>
                              <span className="bg-[#BA7517]/15 text-[#BA7517] font-mono text-[10px] font-bold px-2 py-0.5 rounded">-59 / -XS</span>
                              <span className="bg-[#BA7517]/15 text-[#BA7517] font-mono text-[10px] font-bold px-2 py-0.5 rounded">64415</span>
                              <span className="bg-[#BA7517]/15 text-[#BA7517] font-mono text-[10px] font-bold px-2 py-0.5 rounded">64640</span>
                              <span className="bg-[#BA7517]/15 text-[#BA7517] font-mono text-[10px] font-bold px-2 py-0.5 rounded">20552</span>
                              <span className="bg-[#BA7517]/15 text-[#BA7517] font-mono text-[10px] font-bold px-2 py-0.5 rounded">20553</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion Item 3 */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              <button 
                onClick={() => toggleAccordion(2)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#534AB7]/10 text-[#534AB7] text-[10px] font-mono font-bold uppercase font-bold">BACK-END RECOVERY</span>
                  <h3 className="font-display font-bold text-navy text-[15px] md:text-base">Denial Management &amp; A/R Recovery</h3>
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
                        <div className="space-y-4 text-xs text-neutral-600 font-medium font-sans">
                          <p className="font-semibold text-navy">Denial recovery workflows:</p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-bold">•</span>
                              <span>Pain management denials cluster around three categories: authorization mismatch, bundling, and medical necessity.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-bold">•</span>
                              <span>We track denial codes at payer + CPT level and maintain payer-specific appeal templates for each.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-bold">•</span>
                              <span>Medical necessity appeals include: conservative treatment failure documentation checklist, clinical notes, imaging report references, and LCD/NCD citation.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-bold">•</span>
                              <span>Authorization mismatch appeals: our team documents what was authorized vs. what was performed and requests retrospective review where available.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-[#534AB7] font-bold">•</span>
                              <span>Appeals filed within 15 business days of denial receipt.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">RECOVERY PROTOCOLS</span>
                            <div className="h-[1px] w-6 bg-[#534AB7] my-1.5" />
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              <span className="bg-[#534AB7]/10 text-[#534AB7] font-mono text-[10px] font-bold px-2 py-0.5 rounded">Auth mismatch appeal</span>
                              <span className="bg-neutral-100 text-neutral-600 font-mono text-[10px] px-2 py-0.5 rounded border border-neutral-200">LCD/NCD</span>
                              <span className="bg-[#534AB7]/10 text-[#534AB7] font-mono text-[10px] font-bold px-2 py-0.5 rounded">Conservative tx docs</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Accordion Item 4 */}
            <div className="border border-neutral-200 rounded-2xl overflow-hidden bg-white shadow-xs">
              <button 
                onClick={() => toggleAccordion(3)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-teal-800/10 text-teal-800 text-[10px] font-mono font-bold uppercase font-bold">DIAGNOSTIC CRITERIA</span>
                  <h3 className="font-display font-bold text-navy text-[15px] md:text-base">Fluoroscopic Guidance Billing Protocol</h3>
                </div>
                {activeAccordion === 3 ? <ChevronUp className="size-4 text-neutral-400" /> : <ChevronDown className="size-4 text-neutral-400" />}
              </button>
              
              <AnimatePresence initial={false}>
                {activeAccordion === 3 && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-neutral-100"
                  >
                    <div className="p-6 md:p-8 bg-neutral-50/50 space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4 text-xs text-neutral-600 font-medium">
                          <p className="font-semibold text-navy">Dedicated guidance scoring setup:</p>
                          <p className="text-xs text-neutral-500">A dedicated protocol for fluoroscopic guidance coding — because this is the highest-variance billing decision in pain management.</p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="text-teal-700 font-bold">1</span>
                              <span>Confirm payer policy on guidance billing before claim submission — not at denial.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-700 font-bold">2</span>
                              <span>Check procedure code pairing for guidance inclusivity (some payers bundle guidance into the primary procedure CPT).</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-700 font-bold">3</span>
                              <span>Verify documentation of guidance use in the operative note with absolute clarity.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-700 font-bold">4</span>
                              <span>Bill 77002 (C-arm guidance) or 77003 (CT/fluoroscopic guidance for needle placement) only when both payer policy and documentation support it.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-teal-700 font-semibold">•</span>
                              <span className="italic text-neutral-500">Payer policies for this category are reviewed quarterly and updated in the system.</span>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-white border border-neutral-200 rounded-xl p-5 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">COMPLIANCE CRITERIA</span>
                            <div className="h-[1px] w-6 bg-teal-600 my-1.5" />
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              <span className="bg-teal-50 text-teal-800 font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-teal-100">77002</span>
                              <span className="bg-teal-50 text-teal-800 font-mono text-[10px] font-bold px-2 py-0.5 rounded border border-teal-100">77003</span>
                              <span className="bg-neutral-100 text-neutral-600 font-mono text-[10px] px-2 py-0.5 rounded border border-neutral-200">C-arm</span>
                              <span className="bg-neutral-100 text-neutral-600 font-mono text-[10px] px-2 py-0.5 rounded border border-neutral-200">CT guidance</span>
                              <span className="bg-[#BA7517]/10 text-[#BA7517] font-mono text-[10px] font-bold px-2 py-0.5 rounded">Payer policy</span>
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

      {/* SECTION 6: AI WORKFLOW (Dark Navy background) */}
      <section className="relative bg-[#0A1628] text-white py-24 lg:py-32 overflow-hidden border-b border-white/5 text-left font-sans">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Headline and Module Status */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold block mb-1">
                CLIENTELE AI — PAIN MANAGEMENT WORKFLOW
              </span>
              <div className="h-[1px] w-12 bg-teal/50 mb-6" />
              
              <h2 className="font-display text-3xl sm:text-4xl text-white font-bold leading-tight mb-6">
                How Clientele AI Closes the Authorization Gap Specific to Pain Management
              </h2>
              
              <p className="text-sm text-white/70 leading-relaxed mb-10">
                The add-on CPT authorization gap is a workflow problem, not just a billing problem. Clientele AI is configured with pain management-specific add-on flags, payer-specific fluoroscopic guidance rules, and real-time auth status checks — so the gap is closed before the patient enters the room, not after the claim denies.
              </p>

              {/* Module status panel */}
              <div className="space-y-3.5 border border-white/10 rounded-2xl p-5 bg-navy-deep/40 backdrop-blur-xs">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">INTEGRATED MODULE STATUS</span>
                
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-white/80">Module 1 — Eligibility Verification</span>
                  <span className="bg-teal/20 text-teal border border-teal/30 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono">Live — May 2026</span>
                </div>
                
                <div className="flex items-center justify-between text-xs py-1 border-b border-white/5">
                  <span className="text-white/80">Module 2 — Prior Auth Management</span>
                  <span className="bg-white/10 text-white/60 border border-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono">Coming Q2 2026</span>
                </div>
                
                <div className="flex items-center justify-between text-xs py-1">
                  <span className="text-white/80">Module 3 — ICD &amp; CPT Coding Assist</span>
                  <span className="bg-white/10 text-white/60 border border-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono">Coming Q3 2026</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4-Step AI Workflow */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1 */}
              <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/30 flex gap-4 hover:border-teal/30 transition-colors">
                <div className="size-10 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold font-mono text-xs flex-shrink-0">
                  01
                </div>
                <div>
                  <span className="text-[10px] font-mono text-teal uppercase tracking-widest font-bold">PRE-SERVICE / ADD-ON CPT AUTH FLAG</span>
                  <h4 className="text-white font-bold text-base mt-0.5">Automated Add-on Risk Checks</h4>
                  <p className="text-xs text-white/65 mt-2">
                    When auth is obtained for 20552, the system flags 20553 and common add-ons — prompting the MA to confirm the anatomical and therapeutic scope before the appointment.
                  </p>
                  <span className="text-[10px] font-mono text-white/40 block mt-2 font-bold">Module 2 — Coming Q2 2026</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/30 flex gap-4 hover:border-teal/30 transition-colors">
                <div className="size-10 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold font-mono text-xs flex-shrink-0">
                  02
                </div>
                <div>
                  <span className="text-[10px] font-mono text-teal uppercase tracking-widest font-bold">PRE-SUBMISSION / FLUOROSCOPIC GUIDANCE CHECK</span>
                  <h4 className="text-white font-bold text-base mt-0.5">Payer Guidance Rule Application</h4>
                  <p className="text-xs text-white/65 mt-2">
                    Payer-specific 77002/77003 billing rules applied automatically at claim level — no manual payer contract lookup required.
                  </p>
                  <span className="text-[10px] font-mono text-white/40 block mt-2 font-bold">Module 4 — Coming Q3 2026</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/30 flex gap-4 hover:border-teal/30 transition-colors">
                <div className="size-10 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold font-mono text-xs flex-shrink-0">
                  03
                </div>
                <div>
                  <span className="text-[10px] font-mono text-teal uppercase tracking-widest font-bold">HUMAN REVIEW / AAPC CODER SIGN-OFF</span>
                  <h4 className="text-white font-bold text-base mt-0.5">Human-Guided Automation</h4>
                  <p className="text-xs text-white/65 mt-2">
                    Flagged claims escalated to an AAPC-certified pain management coder. Bundling risk, modifier use, and diagnosis support completely reviewed before transmission.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border border-white/10 rounded-2xl p-6 bg-navy-deep/30 flex gap-4 hover:border-teal/30 transition-colors">
                <div className="size-10 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold font-mono text-xs flex-shrink-0">
                  04
                </div>
                <div>
                  <span className="text-[10px] font-mono text-teal uppercase tracking-widest font-bold">POST-PAYMENT / DENIAL PATTERN ANALYSIS</span>
                  <h4 className="text-white font-bold text-base mt-0.5">Authorization Mismatch Recovery Tracking</h4>
                  <p className="text-xs text-white/65 mt-2">
                    Authorization mismatch and bundling denial patterns tracked at payer + CPT level — surfaced as automated protocol updates, not just individual appeals.
                  </p>
                  <span className="text-[10px] font-mono text-white/40 block mt-2 font-bold">Module 6 — Coming Q4 2026</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: SPECIALTY DEPTH TABS (Light amber tint) */}
      <section className="bg-[#FEF9F3] py-20 lg:py-28 text-left border-b border-amber-100/70">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-amber-700 font-bold block mb-1">
              SPECIALTY DEPTH BY PROCEDURE TYPE
            </span>
            <div className="h-[2px] w-8 bg-amber-500/50 mx-auto mb-5" />
            
            <h2 className="font-display text-4xl text-navy font-bold leading-tight">
              Pain Management Sub-Specialty Billing Expertise
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Pain management covers a wide range of interventional procedures — each with its own authorization, coding, and bundling rules. Select a procedure type to see how Clientele handles it.
            </p>
          </div>

          {/* Tab buttons - horizontal row */}
          <div className="flex border-b border-neutral-200 overflow-x-auto scrollbar-none mb-10 select-none">
            {Object.values(tabsData).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-6 font-semibold text-xs md:text-sm border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id 
                    ? 'border-amber-600 text-amber-800 bg-amber-500/5' 
                    : 'border-transparent text-neutral-400 hover:text-neutral-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-amber-100/80 rounded-2xl p-6 md:p-8 shadow-xs"
            >
              <div className="grid lg:grid-cols-12 gap-8">
                
                {/* Left side: challenges/pitfalls */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-[10px] font-mono text-amber-600 font-bold tracking-widest uppercase">CODING PITFALLS &amp; RISKS</span>
                    <h3 className="font-display font-bold text-navy text-xl mt-1">{tabsData[activeTab].name} Solutions</h3>
                  </div>

                  <div className="space-y-4">
                    {tabsData[activeTab].pitfalls.map((pitfall, idx) => (
                      <div key={idx} className="border-l-2 border-amber-300 pl-4 py-1">
                        <h4 className="font-semibold text-navy text-sm">{pitfall.title}</h4>
                        <p className="text-xs text-neutral-500 leading-relaxed mt-1">{pitfall.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <span className="text-[10px] font-mono text-amber-800 font-bold uppercase block">OUR PREVENTION STANDARD:</span>
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed mt-1">
                      {tabsData[activeTab].handle}
                    </p>
                  </div>
                </div>

                {/* Right side: Key CPT codes */}
                <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold block mb-4">
                    KEY CPT CODES &amp; REGULATORY TARGETS
                  </span>
                  
                  <div className="space-y-4 font-mono text-xs">
                    {tabsData[activeTab].cpts.map((el, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-neutral-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="bg-amber-100 text-amber-900 border border-amber-200 px-2 py-0.5 rounded font-extrabold text-[10px]">
                            {el.code}
                          </span>
                        </div>
                        <p className="text-[#333] text-[11px] leading-relaxed font-sans font-medium">
                          {el.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* SECTION 8: PERFORMANCE PROOF + TESTIMONIAL (Light warm gray) */}
      <section className="bg-[#F9F9F7] py-20 lg:py-28 text-left border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Stats */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
                  PERFORMANCE PROOF
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
                  What Pain Management Practices See After Switching to Clientele
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Stat block 1 */}
                <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-3xs">
                  <span className="text-3xl font-display font-bold text-navy block">99%</span>
                  <span className="text-xs text-neutral-900 font-bold block mt-1">Clean claim rate</span>
                  <span className="text-xs text-neutral-450 block mt-0.5">vs. industry avg of 85–90%</span>
                </div>

                {/* Stat block 2 */}
                <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-3xs">
                  <span className="text-3xl font-display font-bold text-teal block">98%</span>
                  <span className="text-xs text-neutral-900 font-bold block mt-1">First-pass resolution</span>
                  <span className="text-xs text-neutral-450 block mt-0.5">Eliminating medical reviews</span>
                </div>

                {/* Stat block 3 */}
                <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-3xs">
                  <span className="text-3xl font-display font-bold text-navy block">32 Days</span>
                  <span className="text-xs text-neutral-900 font-bold block mt-1">Average A/R turnaround</span>
                  <span className="text-xs text-neutral-450 block mt-0.5">Uninterrupted cash flow</span>
                </div>

                {/* Stat block 4 */}
                <div className="bg-white rounded-xl p-5 border border-neutral-200 shadow-3xs">
                  <span className="text-3xl font-display font-bold text-amber-600 block">&lt;5%</span>
                  <span className="text-xs text-neutral-900 font-bold block mt-1">Denial rate target</span>
                  <span className="text-xs text-neutral-450 block mt-0.5">Post-automation goal</span>
                </div>

              </div>
            </div>

            {/* Right side: Testimonial illustration */}
            <div className="lg:col-span-6">
              <div className="relative bg-white border border-neutral-200 p-8 rounded-3xl shadow-card">
                <span className="text-4xl text-amber-300 font-serif leading-none absolute top-4 left-6">&ldquo;</span>
                
                <p className="text-sm md:text-base text-neutral-600 font-medium leading-relaxed italic relative z-10 pt-4">
                  The authorization gap was our single biggest problem — add-on procedures being performed without updated coverage. Our previous biller caught it after the denial. Clientele catches it before the appointment. That&apos;s the difference between chasing money and not losing it in the first place.
                </p>

                <div className="h-[1px] w-full bg-neutral-100 my-6" />

                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs select-none">
                    BD
                  </div>
                  <div>
                    <h5 className="font-bold text-navy text-xs">Billing Director</h5>
                    <p className="text-[10px] text-neutral-450 font-semibold uppercase mt-0.5 font-mono">
                      Multi-Location Pain Management Practice • Michigan
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9: SERVICE NAVIGATION CROSS-LINKS (White background) */}
      <section className="bg-white py-20 lg:py-24 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-12">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-2.5 block">
              ALSO IN OUR SPECIALTY PORTFOLIO
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
              Explore Other Specialties We Serve
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <a 
              href="/specialties/orthopedics" 
              onClick={(e) => handleLinkClick(e, '/specialties/orthopedics')}
              className="group border border-neutral-200 rounded-2xl p-6 hover:border-teal hover:shadow-sm transition-all bg-white"
            >
              <div className="size-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:scale-105 transition-transform">
                <Activity className="size-5" />
              </div>
              <h3 className="font-display font-bold text-navy text-base group-hover:text-amber-800 transition-colors">Orthopedic RCM</h3>
              <p className="text-xs text-neutral-450 mt-1">Global periods, bilateral modifiers, and implantable hardware capturing.</p>
              <div className="flex items-center gap-1 mt-4 text-[11px] font-bold text-teal">
                <span>View specialty page</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2 */}
            <a 
              href="/specialties/anesthesia" 
              onClick={(e) => handleLinkClick(e, '/specialties/anesthesia')}
              className="group border border-neutral-200 rounded-2xl p-6 hover:border-teal hover:shadow-sm transition-all bg-white"
            >
              <div className="size-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:scale-105 transition-transform">
                <Brain className="size-5" />
              </div>
              <h3 className="font-display font-bold text-navy text-base group-hover:text-amber-800 transition-colors">Anesthesia Billing</h3>
              <p className="text-xs text-neutral-450 mt-1">Concurrence limits, time minutes unit conversion, and physical status modifiers.</p>
              <div className="flex items-center gap-1 mt-4 text-[11px] font-bold text-teal">
                <span>View specialty page</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3 */}
            <a 
              href="/specialties/therapy" 
              onClick={(e) => handleLinkClick(e, '/specialties/therapy')}
              className="group border border-neutral-200 rounded-2xl p-6 hover:border-teal hover:shadow-sm transition-all bg-white"
            >
              <div className="size-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:scale-105 transition-transform">
                <Layers className="size-5" />
              </div>
              <h3 className="font-display font-bold text-navy text-base group-hover:text-amber-800 transition-colors">Comprehensive Therapy</h3>
              <p className="text-xs text-neutral-450 mt-1">PT, OT, and ST billing with strict verification of cap limits and direct oversight.</p>
              <div className="flex items-center gap-1 mt-4 text-[11px] font-bold text-teal">
                <span>View specialty page</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 4 */}
            <a 
              href="/specialties/chiropractic" 
              onClick={(e) => handleLinkClick(e, '/specialties/chiropractic')}
              className="group border border-neutral-200 rounded-2xl p-6 hover:border-teal hover:shadow-sm transition-all bg-white"
            >
              <div className="size-10 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4 group-hover:scale-105 transition-transform">
                <HeartPulse className="size-5" />
              </div>
              <h3 className="font-display font-bold text-navy text-base group-hover:text-amber-800 transition-colors">Chiropractic &amp; Rehab</h3>
              <p className="text-xs text-neutral-450 mt-1">Manipulation limits, therapeutic massage bundling, and clinical notes review.</p>
              <div className="flex items-center gap-1 mt-4 text-[11px] font-bold text-teal">
                <span>View specialty page</span>
                <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* SECTION 10: FOOTER CTA BAND (Dark Navy background) */}
      <section id="assessment" className="relative bg-[#0A1628] text-white py-24 text-left overflow-hidden">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-teal font-extrabold mb-3 block">
            REQUEST AN IN-DEPTH ASSESSMENT
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
            Ready to Close the Authorization Gap in Your Pain Management Practice?
          </h2>
          
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            Request a free pain management RCM assessment. We&apos;ll review your current denial patterns by procedure code, your authorization workflow, and your top-payer performance — and show you exactly where revenue is leaking.
          </p>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              setTimeout(() => {
                const formElement = document.getElementById('rcm-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }, 100);
            }}
            className="rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 select-none shadow-glow font-sans inline-flex items-center gap-1.5 focus:outline-none"
          >
            Request a Free Pain Management RCM Assessment →
          </a>

          <div className="text-white/40 text-[10px] font-mono mt-6 flex justify-center gap-6">
            <span>✓ Detailed Denial Auditing</span>
            <span>✓ Complete A/R Breakdown</span>
            <span>✓ No-obligation Report</span>
          </div>
        </div>
      </section>

    </div>
  );
}
