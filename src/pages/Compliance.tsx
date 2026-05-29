import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  ShieldAlert, 
  Users, 
  Key, 
  FileText, 
  Activity, 
  Server, 
  Eye, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Download, 
  Calendar, 
  Building2, 
  CheckCircle,
  AlertTriangle,
  Flame,
  Globe2,
  Clock,
  Briefcase,
  HelpCircle,
  UserCheck
} from 'lucide-react';

interface ComplianceProps {
  navigate: (path: string) => void;
}

export default function Compliance({ navigate }: ComplianceProps) {
  // Local state for micro-interactions
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  // Download Trigger Handler
  const handleDownloadOverview = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
      alert('Your download has started. Clientele RCM Compliance & Security Overview (PDF) contains standard BAA terms, security schemas, and audit checklists.');
    }, 800);
  };

  // On assessment CTA click
  const handleReviewCallClick = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('assessment');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  // Technical Layers Content Configuration
  const securityLayers = [
    {
      layer: 'Layer 1',
      title: 'Data Encryption',
      sub: 'In Transit & At Rest',
      tech: 'TLS 1.2+ & AES-256',
      icon: Key,
      desc: 'In Transit: TLS 1.2+ (Transport Layer Security) across all data transmission—claim submissions, EMR integrations, portal access, and API connections. At Rest: AES-256 encryption for all stored PHI—patient records, claim data, payment information, and immutable audit logs. AES-256 is the federal standard used by financial institutions and federal agencies.',
      threat: 'Interception during transmission ("man-in-the-middle" attacks), unauthorized access to stored data, breach exposure if hardware is physically compromised.'
    },
    {
      layer: 'Layer 2',
      title: 'Role-Based Access Control',
      sub: 'RBAC Access Scoping',
      tech: 'Minimum Necessary Standard',
      icon: Users,
      desc: 'Every staff role has a defined permission scope. Coders see coding workflows and necessary clinical charts—not banking or patient financial history. AR specialists see aging queues and payer communications—not raw clinical entries. Access permissions are verified quarterly and revoked within 1 business hour of offboarding.',
      threat: 'Insider access beyond job function bounds, unauthorized PHI exposure during workflow transitions, privilege escalation by compromised internal accounts.'
    },
    {
      layer: 'Layer 3',
      title: 'Multi-Factor Authentication',
      sub: 'MFA Gatekeeping',
      tech: 'Mandatory on All Portals',
      icon: Shield,
      desc: 'MFA is strictly mandatory and non-bypassable across all client systems—the Clientele AI platform, custom billing pipelines, EMR bridges, administrative setups, and mobile apps. Passwords alone are insufficient to access any database containing active PHI. Supports TOTP apps, hardware security credentials, and secure SMS relays.',
      threat: 'Credential theft, administrative account phishing, remote access attacks from compromised target passwords, and sideway platform entry.'
    },
    {
      layer: 'Layer 4',
      title: 'Audit Logging & Monitoring',
      sub: 'Continuous Logs',
      tech: '7-Year Storage Policy',
      icon: Eye,
      desc: 'Every read, write, export, or print action on active PHI is logged inside write-once-read-many (WORM) append-only tables containing the user identity, client ID, action type and specific record. Logs are immutable—operation staff have zero override permissions. Retained for 7 years to exceed HIPAA standards.',
      threat: 'Silent unauthorized access without trail tracking, inability to compile breach forensics, lack of audit readiness for state insurance queries.'
    },
    {
      layer: 'Layer 5',
      title: 'BAA Governance Chain',
      sub: 'Business Associate Agreements',
      tech: 'Comprehensive Coverage',
      icon: FileCheck,
      desc: 'A comprehensive, corporate-vetted Business Associate Agreement is executed with every practice before a single patient database query is executed. Furthermore, we require all sub-processors and cloud platform technologies processing data on our behalf to lock down equivalent BAAs, preserving compliance.',
      threat: 'Liability gaps under federal HHS enforcement, ambiguous guidelines on unauthorized disclosure responsibilities, third-party sub-processor data leaks.'
    },
    {
      layer: 'Layer 6',
      title: 'Incident Response Protocol',
      sub: 'Forensics & Containment',
      tech: '30-Day Response SLA',
      icon: ShieldAlert,
      desc: 'Clientele RCM maintains a fully responsive, executive-led incidence response framework. In the event of an anomaly, isolation processes fire within minutes. If any PHI exposure is validated, we target a strict 30-day disclosure reporting window—doubly fast compared to HHS guidelines. Regular containment dry runs are executed.',
      threat: 'Unmonitored breach leakage expansion, delayed vendor communication traps, regulatory compliance fines under HHS Breach Notification Standard.'
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans">
      
      {/* PAGE HERO + CERT STRIP */}
      <section className="relative bg-navy text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full text-left">
          {/* Breadcrumb */}
          <div className="text-white/40 text-[11px] uppercase tracking-widest font-mono mb-6 flex items-center gap-2 select-none">
            <span>Home</span>
            <ChevronRight className="size-3 text-white/20" />
            <span>Resources</span>
            <ChevronRight className="size-3 text-white/20" />
            <span className="text-teal font-medium">Compliance & Security</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column (60%) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3 py-1 text-xs font-semibold text-teal mb-6 w-fit select-none">
                <Shield className="size-3.5" /> High-Governance RCM Framework
              </span>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight text-white mb-6">
                Your Patients' Data.<br />
                Your Practice's Liability.<br />
                <span className="text-teal italic font-semibold">Our Compliance Infrastructure Protects Both.</span>
              </h1>
              
              <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
                Every piece of PHI that passes through Clientele RCM is handled within a certified, audited, and continuously monitored compliance framework — built not to satisfy a checkbox, but to protect your practice from the regulatory and reputational risks that healthcare data mismanagement creates.
              </p>
              
              {/* CTA trigger */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={handleDownloadOverview}
                  className="rounded-full bg-teal text-navy px-6 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2"
                >
                  <Download className="size-4" /> 
                  {downloadSuccess ? 'Preparing Document...' : 'Request Our Compliance Overview Document →'}
                </button>
              </div>
            </div>
            
            {/* Right: Security Architecture Diagram */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-full border border-white/5 bg-navy-deep/20 flex items-center justify-center p-8 select-none">
                
                {/* Concentric rings showing layered security */}
                {/* Ring 1 - Outer (Audit Monitoring) */}
                <div className="absolute inset-0 rounded-full border border-dashed border-teal/10 animate-[spin_120s_linear_infinite]" />
                
                {/* Ring 2 - PHI Layer */}
                <div className="absolute inset-8 rounded-full border border-white/5 bg-navy-deep/30 flex items-center justify-center">
                  {/* Ring 3 - Compliance framework */}
                  <div className="absolute inset-8 rounded-full border border-teal/15 bg-teal/5 flex items-center justify-center">
                    {/* Ring 4 - Access control */}
                    <div className="absolute inset-8 rounded-full border border-white/10 bg-navy-deep/50 flex items-center justify-center">
                      {/* Central Shield core */}
                      <div className="size-16 rounded-full bg-gradient-to-br from-teal/20 to-teal/40 flex items-center justify-center shadow-glow border border-teal/35">
                        <Lock className="size-7 text-teal animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Styled legend markers in orbit */}
                <div className="absolute -top-3 left-[30%] bg-navy-deep/90 border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-mono text-white/60 flex items-center gap-1.5 shadow-sm">
                  <div className="h-1.5 w-1.5 bg-teal rounded-full"></div>
                  <span>Immutable Logging</span>
                </div>
                <div className="absolute bottom-6 -left-4 bg-navy-deep/90 border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-mono text-white/60 flex items-center gap-1.5 shadow-sm">
                  <div className="h-1.5 w-1.5 bg-teal rounded-full"></div>
                  <span>AES-256 Storage</span>
                </div>
                <div className="absolute top-[40%] -right-10 bg-navy-deep/90 border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-mono text-teal flex items-center gap-1.5 shadow-sm">
                  <div className="h-1.5 w-1.5 bg-teal rounded-full animate-ping"></div>
                  <span>TLS 1.2+ Active</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Certification Strip (horizontal, below sub-headline) */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              { label: 'HIPAA Certified', desc: 'US & Bangalore Operations compliant', icon: Shield },
              { label: 'HBMA Member', desc: 'Billing professional standards', icon: CheckCircle },
              { label: 'SOC2 Type II In Progress', desc: 'Expected Audit Finish Q3 2026', icon: Lock },
              { label: 'AAPC-Certified Staff', desc: '30+ specialty coders', icon: UserCheck },
            ].map((token, i) => {
              const TokenIcon = token.icon;
              return (
                <div key={i} className="flex gap-3">
                  <div className="size-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal shrink-0 mt-0.5">
                    <TokenIcon className="size-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{token.label}</div>
                    <div className="text-[10px] text-white/50 mt-0.5">{token.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 1: COMPLIANCE IS A PROGRAM, NOT A CERTIFICATION */}
      <section className="relative bg-white py-20 lg:py-28 text-left grid-noise">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Corporate Governance</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-navy font-bold leading-tight">
              &ldquo;HIPAA Compliant&rdquo; Appears on Every RCM Vendor's Website. Here's What It Actually Means at Clientele RCM.
            </h2>
          </div>

          <div className="prose prose-neutral max-w-none text-xs md:text-sm text-neutral-600 space-y-6 leading-relaxed">
            <p>
              HIPAA compliance is not a binary state — you either have the active, monitored infrastructure or you don't. Most RCM companies claim HIPAA compliance because they use standard legacy encrypted email relays and sign Business Associate Agreements (BAAs). That is the absolute minimum required by law. It is not an active compliance program.
            </p>
            <p className="font-medium text-navy">
              At Clientele RCM, compliance is operationally embedded within every daily coding workflow — not layered on top as a marketing disclaimer. It means:
            </p>
            <ul className="list-disc pl-5 space-y-3 pt-2 text-neutral-600">
              <li><strong>Annual Competency Verification:</strong> Every coder, biller, and account specialist who transmits, reviews, or touches PHI completes comprehensive HIPAA training at onboarding, reinforced with mandatory annual testing.</li>
              <li><strong>Zero Weak Access Points:</strong> Access is guarded via strict multi-factor authentication (MFA) and is completely disabled within 1 hour of any employee lifecycle event.</li>
              <li><strong>Role-Scoped Environments:</strong> No global permissions. Workstation logs restrict user access explicitly to the minimum files needed for a designated specialty.</li>
              <li><strong>Pristine Local Isolation:</strong> PHI is never stored nor transmitted via local administrative devices or unsecured communication software. Access only lives inside protected, MDM-enrolled platforms.</li>
            </ul>
            <p>
              The difference between a compliance checkbox and a compliance program is what happens when real audits block claims or when immediate offboarding is required. Our program is built and optimized for high-complexity specialties where regulatory oversight is the highest.
            </p>
          </div>

          <div className="mt-12 p-8 rounded-2xl border-l-[4px] border-teal bg-[#F4FBF9] text-left">
            <p className="font-display text-neutral-800 italic text-base md:text-lg leading-relaxed">
              &ldquo;We built compliance into our operations from the start because our founder came from inside the healthcare billing industry. The documentation requirements, the audit vulnerability points, the payer-specific compliance variations — our team has lived these.&rdquo;
            </p>
            <div className="mt-4 text-[10px] tracking-wider uppercase text-neutral-400 font-bold">
              Founder &amp; COO · Clientele RCM
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SECURITY ARCHITECTURE — LAYER BY LAYER */}
      <section className="relative bg-[#F5F7FA] py-20 lg:py-28 text-left border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Security Architecture</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-bold leading-tight">
              Six Layers of Protection Across Every Workflow
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Enterprise security demands concrete parameters, not generalizations. Explore our standard-aligned operational structure.
            </p>
          </div>

          {/* Grid Layout 3x2 with detailed parameters */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {securityLayers.map((layer, idx) => {
              const LayerIcon = layer.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-neutral-200 p-6 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all relative">
                  <div className="absolute top-0 inset-x-0 h-1 bg-neutral-200 group-hover:bg-teal rounded-t-2xl"></div>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold tracking-wider">{layer.layer}</span>
                      <span className="bg-teal/10 border border-teal/20 text-teal text-[9px] font-mono px-2 py-0.5 rounded-full font-bold">
                        {layer.tech}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="size-10 rounded-xl bg-teal/5 flex items-center justify-center text-teal">
                        <LayerIcon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-navy text-base md:text-lg">{layer.title}</h3>
                        <p className="text-[10px] text-neutral-400 font-medium -mt-0.5">{layer.sub}</p>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                      {layer.desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-neutral-100 bg-neutral-50/40 p-3 rounded-lg border border-dashed border-neutral-200">
                    <div className="flex items-start gap-1.5 text-[11px] text-neutral-600">
                      <ShieldAlert className="size-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-neutral-700 font-semibold">Controls Risk:</strong> {layer.threat}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 3: HIPAA COMPLIANCE — OPERATIONAL SPECIFICS */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 text-left">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Regulatory Specifics</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy font-bold leading-tight">
              HIPAA Rule Compliance: Embedded Operations
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500 max-w-2xl leading-relaxed">
              We separate HIPAA rule sets into structured administrative controls, ensuring absolute data custody and liability protection at every touchpoint.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            
            {/* Rule 1: Privacy Rule */}
            <div className="flex flex-col text-left space-y-6 lg:px-4 lg:first:pl-0">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal animate-pulse"></div>
                <h3 className="text-navy font-display font-bold text-lg">01 · Privacy Rule Standards</h3>
              </div>
              
              <div className="space-y-4 text-xs md:text-sm text-neutral-500">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1.5">Minimum Necessary Standard</h4>
                  <p className="text-xs">We access only the patient charts and billing modifiers explicitly required to process claims. Our technology scopes roles logically to avoid general patient record viewing.</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1.5">Accounting of Disclosures</h4>
                  <p className="text-xs">When clients transmit PHI queries, logs map each detail cleanly. This matches state compliance reporting standards when patients make individual data requests.</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1.5">No Patient Data Monetization</h4>
                  <p className="text-xs">Data is utilized only to execute RCM workflows. Clientele prohibits third-party training, health analytics, reselling, or marketing on client PHI.</p>
                </div>
              </div>
            </div>

            {/* Rule 2: Security Rule */}
            <div className="flex flex-col text-left space-y-6 pt-8 lg:pt-0 lg:px-8">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal animate-pulse"></div>
                <h3 className="text-navy font-display font-bold text-lg">02 · Security Rule Standards</h3>
              </div>
              
              <div className="space-y-4 text-xs md:text-sm text-neutral-500">
                <div className="p-4 bg-teal/5 rounded-xl border border-teal/20">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">Administrative Safeguards</h4>
                  <p className="text-xs mt-1.5"><strong>Designated Privacy Officer</strong> handles continuous policy reviews. Formal risk assessments are finalized annually to identify active system vulnerabilities.</p>
                </div>

                <div className="p-4 bg-teal/5 rounded-xl border border-teal/20">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">Technical Safeguards</h4>
                  <p className="text-xs mt-1.5">Continuous auto-timeouts on active sessions, isolated credential maps, and double security layers on clinical interfaces limit unauthorized exposures.</p>
                </div>

                <div className="p-4 bg-teal/5 rounded-xl border border-teal/20">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1">Physical Safeguards</h4>
                  <p className="text-xs mt-1.5">Our US physical sites enforce controlled access, visitor logs, and workstation locks. India facility uses strict ISO-aligned restricted workstations.</p>
                </div>
              </div>
            </div>

            {/* Rule 3: Workforce Compliance */}
            <div className="flex flex-col text-left space-y-6 pt-8 lg:pt-0 lg:px-8 lg:last:pr-0">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-teal animate-pulse"></div>
                <h3 className="text-navy font-display font-bold text-lg">03 · Workforce Management</h3>
              </div>
              
              <div className="space-y-4 text-xs md:text-sm text-neutral-500 font-sans">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1.5">Onboarding Training SLA</h4>
                  <p className="text-xs">All hires undergo background checks and finish mandatory HIPAA Privacy training containing scoring verification before gaining backend environment access.</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1.5">Termination Protocol</h4>
                  <p className="text-xs">PHI credentials, VPN tunnels, and system logins are deactivated within exactly 1 business hour of staff termination. Deaccessioneering logs are mapped completely.</p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-1.5">Active Sanction Policy</h4>
                  <p className="text-xs">Proportional disciplinary tracks align with security guideline protocols, supporting immediate dismissal for willful exposures or unapproved PHI sharing.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: SOC2 TYPE II — ROADMAP & CURRENT POSTURE */}
      <section className="relative bg-navy text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column — What SOC2 Means */}
            <div className="lg:col-span-6 text-left">
              <span className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full mb-4">
                SOC2 TYPE II — IN PROGRESS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                SOC2 Type II: What It Means, Where We Are, and When It's Done
              </h2>
              
              <div className="text-white/70 text-xs md:text-sm space-y-4 leading-relaxed">
                <p>
                  SOC2 Type II (Service Organization Control 2, Type II) is an auditing framework created by the American Institute of Certified Public Accountants (AICPA). It inspects security controls over an observation window—customarily 6 to 12 months—evaluating five Security Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy.
                </p>
                <p>
                  <strong>Type II vs Type I:</strong> While a Type I audit checks if controls are correctly designed at a single snapshot point, a Type II audit reviews operation efficiency over a prolonged observation window. It is the enterprise standard required by major health networks, compliance CFOs, and insurers.
                </p>
                <p className="text-teal font-semibold">
                  Why it matters for your practice: When Clientele RCM achieves SOC2 Type II certification, it means an independent CPA firm has audited and verified our security controls over time—not just reviewed our documentation on a brochure pitch.
                </p>
              </div>
            </div>

            {/* Right Column — Our Current Posture & Roadmap */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="bg-navy-deep/60 p-6 rounded-2xl border border-white/5 space-y-4 backdrop-blur-sm">
                <h3 className="font-semibold text-white text-base md:text-lg">Our Current Posture &amp; Audit Status</h3>
                
                <ul className="space-y-3.5 text-xs text-white/80">
                  <li className="flex items-start gap-2.5">
                    <span className="size-5 rounded-full bg-teal/20 text-teal flex items-center justify-center grow-0 shrink-0 mt-0.5"><Check className="size-3" /></span>
                    <div>
                      <strong>Production Controls Operating:</strong> Encryption, Role-Based Scope checks, immutable logging, and multi-factor authentications are already running live across all operations.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="size-5 rounded-full bg-teal/20 text-teal flex items-center justify-center grow-0 shrink-0 mt-0.5"><Check className="size-3" /></span>
                    <div>
                      <strong>CPA Firm Engaged:</strong> We have formalized partnership with a qualified compliance CPA firm. The continuous observation process is currently auditing active operational workflows.
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="size-5 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center grow-0 shrink-0 mt-0.5"><AlertTriangle className="size-3" /></span>
                    <div>
                      <strong>Expected Audit Completion:</strong> Targeted SOC2 Type II final report distribution is set for <strong>Q3 2026</strong>. This audit will be shared with prospective enterprise health entities under NDA.
                    </div>
                  </li>
                </ul>

                <p className="text-[11px] text-white/40 leading-relaxed pt-2 border-t border-white/5">
                  🛡️ SOC2 is an administrative audit and is not a prerequisite to fully HIPAA-compliant RCM. Our active security safeguards perfectly support compliant practice environments in the interim.
                </p>
              </div>

              {/* Timeline Visual */}
              <div className="bg-navy-deep/30 p-6 rounded-xl border border-white/5">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-white/40 block mb-4">SOC2 Type II Roadmap</span>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
                  
                  {/* Step 1 */}
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-full bg-teal text-navy font-bold text-xs flex items-center justify-center">✓</span>
                    <div>
                      <div className="text-xs font-semibold text-white">Controls Active</div>
                      <div className="text-[9px] text-white/50">Standards live in prod</div>
                    </div>
                  </div>

                  <div className="hidden sm:block h-px bg-white/10 grow mx-2 border-t border-dashed"></div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-full bg-teal text-navy font-bold text-xs flex items-center justify-center">✓</span>
                    <div>
                      <div className="text-xs font-semibold text-white">Audit Window</div>
                      <div className="text-[9px] text-white/50">Observation active</div>
                    </div>
                  </div>

                  <div className="hidden sm:block h-px bg-white/10 grow mx-2 border-t border-dashed"></div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-full bg-amber-500 text-navy font-bold text-xs flex items-center justify-center">26</span>
                    <div>
                      <div className="text-xs font-semibold text-amber-500">Report Q3 2026</div>
                      <div className="text-[9px] text-white/50">Expected final receipt</div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: BILLING COMPLIANCE — REGULATORY ALIGNMENT */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Billing Governance</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              The Regulatory Frameworks That Govern How We Bill — And How We Stay Aligned
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Billing compliance is separate from data security. Our operations adhere to strict regulatory legal parameters, mitigating liability exposure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl border border-neutral-200 p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 shrink-0">
                  <Activity className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-navy text-sm md:text-base mb-3 leading-snug">
                  CMS Guidelines &amp; Annual Updates
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  CMS updates billing guidelines, procedural modifiers, and LCD/NCD coverage policies annually. Our coders integrate physician fee schedules dynamically before deadlines, preventing automated payer line exclusions.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[10px] font-bold text-teal tracking-wide transition-all">
                <span>CMS ALIGNED</span>
                <CheckCircle className="size-3.5" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-neutral-200 p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 shrink-0">
                  <FileText className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-navy text-sm md:text-base mb-3 leading-snug">
                  No Surprises Act Compliance
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Establishes clear rules for uninsured or self-pay records. Clientele incorporates automated Good Faith Estimate (GFE) calculations seamlessly into patient workflows, blocking CMS GFE delay fines.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[10px] font-bold text-teal tracking-wide transition-all">
                <span>GFE SYSTEM READY</span>
                <CheckCircle className="size-3.5" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-neutral-200 p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 shrink-0">
                  <ShieldAlert className="size-5 animate-pulse text-amber-500" />
                </div>
                <h3 className="font-display font-semibold text-navy text-sm md:text-base mb-3 leading-snug">
                  False Claims Act Awareness
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  FCA regulations hold providers liable for submitting knowingly false or inaccurate claim strings to federal healthcare plans. Our monthly quality sampling, dual-coder validation audits, and strict credential standards mitigates audit exposures.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[10px] font-bold text-amber-600 tracking-wide transition-all">
                <span>AUDIT PROTECTED</span>
                <CheckCircle className="size-3.5 text-amber-500" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-neutral-200 p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-5 shrink-0">
                  <Building2 className="size-5" />
                </div>
                <h3 className="font-display font-semibold text-navy text-sm md:text-base mb-3 leading-snug">
                  HBMA Professional Ethics
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  The Healthcare Billing and Management Association sets strict professional rules which define clinical billing integrity. As a proud HBMA member team, Clientele adheres structurally to transparent fee guidelines and direct disclosure.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[10px] font-bold text-teal tracking-wide transition-all">
                <span>HBMA ETHICAL COMPLIANT</span>
                <CheckCircle className="size-3.5" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: OFFSHORE OPERATIONS — INDIA TRANSPARENCY */}
      <section className="relative bg-[#F5F7FA] py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-5 text-left">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Corporate Operational Standards</span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
                We Operate Across US and India. Here's Exactly How PHI Is Protected Across Both.
              </h2>
              
              <div className="mt-6 text-xs md:text-sm text-neutral-600 space-y-4 leading-relaxed">
                <p>
                  Clientele RCM operates technical, AR, and specialty-coding functions from both our corporate US offices and our advanced operations center located in <strong>Bangalore, Karnataka (India)</strong>. Our Bangalore team includes certified AAPC coding billing structures, and aged account resolution specialists delivering services under standard operational guidelines.
                </p>
                <p>
                  Offshore operations centers are highly common within modern healthcare RCM—the absolute majority of enterprise RCM systems utilize them. However, compliance standards vary significantly. Many groups treat offshore operations as standard manual outsourcing without implementing standard corporate controls. At Clientele, our Bangalore operations center remains subject to identical compliance guidelines as our US physical assets.
                </p>
              </div>
            </div>

            {/* Right Compliance Controls Grid */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-neutral-200/80 p-6 md:p-8 shadow-sm space-y-5">
              <h3 className="font-semibold text-navy text-base md:text-lg pb-3 border-b border-neutral-100 inline-flex items-center gap-2">
                <Globe2 className="size-5 text-teal" /> Dedicated India Compliance Framework
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-1 text-xs text-neutral-500">
                  <div className="font-bold text-navy text-xs flex items-center gap-1.5">
                    <Check className="size-3.5 text-teal" /> Identical BAA Coverage
                  </div>
                  <p className="text-[11px] leading-relaxed pt-1">
                    Every client Business Associate Agreement comprehensively governs offshore workflows under active HIPAA security mandates. India personnel execute equivalent data safety contracts.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-neutral-500">
                  <div className="font-bold text-navy text-xs flex items-center gap-1.5">
                    <Check className="size-3.5 text-teal" /> Identical Technical Safeguards
                  </div>
                  <p className="text-[11px] leading-relaxed pt-1">
                    AES-256 local isolation, TLS 1.2+ security tunnels, standard Multi-Factor Authentications and immutable audit logs operate equivalently across US/India workstations.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-neutral-500">
                  <div className="font-bold text-navy text-xs flex items-center gap-1.5">
                    <Check className="size-3.5 text-teal" /> Completely Blocked Environments
                  </div>
                  <p className="text-[11px] leading-relaxed pt-1">
                    Workstations are locked down, disabling clinical printing, raw file exports, or direct copy-paste. Patient databases cannot be accessed via personal laptops or external emails.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-neutral-500">
                  <div className="font-bold text-navy text-xs flex items-center gap-1.5">
                    <Check className="size-3.5 text-teal" /> ISO-Aligned Physical Sites
                  </div>
                  <p className="text-[11px] leading-relaxed pt-1">
                    Our Bangalore facility implements proximity keycard access controls, mandatory CCTV system monitoring in work spaces, visitor escorts and isolated terminal layouts.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-500 inline-flex items-center gap-2.5">
                <Users className="size-4 text-teal shrink-0" />
                <span><strong>Workforce Sync:</strong> All personnel in India finish standardized HIPAA assessment courses on hiring and quarterly security validation updates thereafter.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: TRUST CENTER — DOCUMENTATION & CERTIFICATIONS */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">Trust Center</span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Goverance, Credentials, &amp; Templates
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Clear verification files available to prospective enterprise groups and compliance review boards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Item 1 - HIPAA */}
            <div className="border border-neutral-200 rounded-2xl p-6 bg-white flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-11 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                    <Shield className="size-5" />
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 text-[9px] font-bold border border-emerald-100 px-2 py-0.5 rounded-full uppercase">
                    ACTIVE · 2026
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-base md:text-lg mb-2">HIPAA Compliance Verification</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Clientele RCM's official HIPAA privacy &amp; security certification is current and available for customer review. Covers all internal physical and operational workflows.
                </p>
              </div>
              <button 
                onClick={(e) => alert('HIPAA compliance program documents requested. Our governance team will transmit our HIPAA operational posture files under standard encrypted channels.')}
                className="text-xs font-bold text-navy hover:text-teal flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 text-left outline-none"
              >
                Request Access Code →
              </button>
            </div>

            {/* Item 2 - HBMA */}
            <div className="border border-neutral-200 rounded-2xl p-6 bg-white flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-11 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                    <CheckCircle className="size-5" />
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 text-[9px] font-bold border border-emerald-100 px-2 py-0.5 rounded-full uppercase">
                    ACTIVE MEMBER
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-base md:text-lg mb-2">HBMA Billing Membership</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Active member of the Healthcare Billing and Management Association. Adheres strictly to advanced medical billing ethical compliance standards across the industry.
                </p>
              </div>
              <button 
                onClick={(e) => alert('HBMA registration sheet reference: Member active in good standing. Verification files transmitted upon demand.')}
                className="text-xs font-bold text-navy hover:text-teal flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 text-left outline-none"
              >
                Request Certificate PDF →
              </button>
            </div>

            {/* Item 3 - SOC2 */}
            <div className="border border-neutral-200 rounded-2xl p-6 bg-white flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-11 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                    <Lock className="size-5" />
                  </div>
                  <span className="bg-amber-50 text-amber-800 text-[9px] font-bold border border-amber-100 px-2 py-0.5 rounded-full uppercase">
                    IN PROGRESS
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-base md:text-lg mb-2">SOC2 Type II Status</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  SOC2 Type II assessment audits are underway (expected completion Q3 2026). Continuous performance data is currently tracked under formal observation.
                </p>
              </div>
              <button 
                onClick={(e) => alert('Underway posture reports and standard verification metrics available for review by qualified health agencies.')}
                className="text-xs font-bold text-navy hover:text-teal flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 text-left outline-none"
              >
                View Posture Overview →
              </button>
            </div>

            {/* Item 4 - BAA template */}
            <div className="border border-neutral-200 rounded-2xl p-6 bg-white flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-11 rounded-lg bg-teal/10 flex items-center justify-center text-teal">
                    <FileText className="size-5" />
                  </div>
                  <span className="bg-blue-50 text-blue-800 text-[9px] font-bold border border-blue-100 px-2 py-0.5 rounded-full uppercase">
                    BAA STANDARD
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-base md:text-lg mb-2">Business Associate Agreement</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Our official BAA template ensures rapid alignment. Ready to review before engagement contracts, or we can audit and execute your practice's preferred BAA frameworks.
                </p>
              </div>
              <button 
                onClick={(e) => alert('BAA template has been prepared. This has been customized for specialized multi-state practices.')}
                className="text-xs font-bold text-navy hover:text-teal flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 text-left outline-none"
              >
                Download BAA Template →
              </button>
            </div>

            {/* Item 5 - Compliance Overview Doc */}
            <div className="border border-teal/30 rounded-2xl p-6 bg-gradient-to-tr from-teal/5 to-white flex flex-col justify-between shadow-sm md:col-span-2 lg:col-span-1">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="size-11 rounded-lg bg-teal/20 text-teal flex items-center justify-center">
                    <Download className="size-5" />
                  </div>
                  <span className="bg-teal text-navy text-[9px] font-black px-2 py-0.5 rounded-full uppercase">
                    RECOMMENDED
                  </span>
                </div>
                <h3 className="font-display font-semibold text-navy text-base md:text-lg mb-2">Compliance Overview PDF</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  A high-level summary overview of HIPAA rules, data schemas, offboarding, disaster containment procedures, and offshore security models. Optimized for internal board reviews.
                </p>
              </div>
              <button 
                onClick={handleDownloadOverview}
                className="text-xs font-extrabold text-teal hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0 text-left outline-none"
              >
                Download 2-Page Factsheet →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: SERVICE FOOTER CTA */}
      <section className="bg-navy py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white mb-4">
            Your Practice's Regulatory Standing Is Our Responsibility Too.
          </h2>
          <p className="text-white/70 text-xs md:text-sm max-w-xl mx-auto leading-relaxed mb-10">
            If your compliance team has specific questions about our security architecture, HIPAA posture, or SOC2 progress — we are happy to schedule a dedicated compliance review call. No sales pitch. Just answers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleReviewCallClick}
              className="w-full sm:w-auto rounded-full bg-teal text-navy px-6 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center"
            >
              Request a Compliance Review Call →
            </button>
            <button
              onClick={handleDownloadOverview}
              className="w-full sm:w-auto rounded-full border border-white/20 bg-white/5 text-white px-6 py-4 font-bold text-sm tracking-wide hover:bg-white/10 transition-all active:scale-98 cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Download className="size-4" /> Download Compliance Summary
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
