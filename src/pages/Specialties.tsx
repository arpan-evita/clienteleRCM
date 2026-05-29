import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  X, 
  ArrowRight, 
  ChevronDown, 
  ChevronRight, 
  Shield, 
  Lock, 
  Award, 
  Star, 
  Users, 
  Activity, 
  Building2, 
  Zap, 
  BookmarkCheck, 
  Sparkles, 
  Plus,
  Compass,
  FileCheck2,
  Stethoscope,
  HeartCrack,
  Dna
} from 'lucide-react';

interface SpecialtiesProps {
  navigate: (path: string) => void;
  currentPath?: string;
}

export default function Specialties({ navigate, currentPath }: SpecialtiesProps) {
  // Navigation trigger that scrolls to top helper
  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const el = document.getElementById(path.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0 });
    }
  };

  const getActiveSpecialtyFromPath = (pathString?: string) => {
    if (!pathString) return 'overview';
    if (pathString.includes('/orthopedics')) return 'orthopedics';
    if (pathString.includes('/pain-management')) return 'pain-management';
    if (pathString.includes('/anesthesia')) return 'anesthesia';
    if (pathString.includes('/therapy')) return 'therapy';
    if (pathString.includes('/chiropractic')) return 'chiropractic';
    return 'overview';
  };

  const activeSpecialty = getActiveSpecialtyFromPath(currentPath);

  const specialtyTabs = [
    { label: 'All Specialties Overview', id: 'overview', path: '/specialties' },
    { label: 'Orthopedics', id: 'orthopedics', path: '/specialties/orthopedics' },
    { label: 'Pain Management', id: 'pain-management', path: '/specialties/pain-management' },
    { label: 'Anesthesia', id: 'anesthesia', path: '/specialties/anesthesia' },
    { label: 'Comprehensive Therapy', id: 'therapy', path: '/specialties/therapy' },
    { label: 'Chiropractic & Rehab', id: 'chiropractic', path: '/specialties/chiropractic' },
  ];

  // State to track scroll-active stats state
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans select-text">
      
      {/* Dynamic Sub-Navigation Header Bar */}
      <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-none">
          <div className="flex gap-1 py-3 min-w-max items-center justify-start md:justify-center">
            {specialtyTabs.map((tab) => {
              const active = activeSpecialty === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(tab.path);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className={`relative rounded-full px-4 py-1.5 text-[11px] md:text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    active 
                      ? 'bg-navy text-white shadow-sm border border-navy/20' 
                      : 'text-neutral-500 hover:text-navy hover:bg-neutral-100'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {activeSpecialty === 'overview' ? (
        <>
          {/* SECTION 1: HERO (Dark Navy background) */}
          <section className="relative bg-navy text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full text-left">
          {/* Breadcrumb */}
          <div className="text-white/40 text-[11px] uppercase tracking-widest font-mono mb-6 flex items-center gap-2 select-none">
            <span>Home</span>
            <ChevronRight className="size-3 text-white/20" />
            <span className="text-teal font-medium">Specialties</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left aligned content block (60% width) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
                SPECIALTY BILLING EXCELLENCE
              </span>
              <div className="h-[1px] w-12 bg-teal/50 mb-6" />
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.10] tracking-tight text-white mb-6">
                RCM Built for the Specialties Where{" "}
                <span className="line-through text-white/40 decoration-red-500 font-semibold">Generic</span>{" "}
                Billing Fails
              </h1>
              
              <p className="text-base md:text-lg text-white/70 max-w-xl leading-relaxed mb-8">
                Generic billing companies handle your claims the same way they handle every other practice. We don't. Our certified coders live inside your specialty — understanding the CPT nuances, payer behaviors, and documentation requirements that determine whether you get paid.
              </p>
              
              {/* CTA Block */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
                <a
                  href="#specialty-directory"
                  onClick={(e) => handleLinkClick(e, '#specialty-directory')}
                  className="rounded-full bg-teal text-navy px-7 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2 select-none"
                >
                  Find Your Specialty →
                </a>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-7 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center select-none"
                >
                  Request a Free RCM Assessment
                </a>
              </div>

              {/* Micro-copy below CTAs */}
              <div className="text-white/40 text-[11px] font-mono flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                <span>🔒 HIPAA Certified</span>
                <span>•</span>
                <span>HBMA Member</span>
                <span>•</span>
                <span>SOC2 Audit Underway (Expected Q3 2026)</span>
                <span>•</span>
                <span>30+ AAPC-Certified Coders</span>
              </div>
            </div>
            
            {/* Right-side visual: 2x3 Geometric Line Art Grid */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="absolute -inset-4 bg-teal/10 rounded-3xl blur-2xl opacity-40 pointer-events-none" />
              
              <div className="relative border border-white/10 rounded-2xl p-6 bg-navy-deep/40 backdrop-blur-sm grid grid-cols-2 gap-4">
                
                {/* Visual 1: Joint (Orthopedics) */}
                <div className="border border-white/5 rounded-xl p-4 bg-navy-deep/60 flex flex-col justify-between h-36 relative overflow-hidden group hover:border-teal/30 transition-all">
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 select-none">ORTHO</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <svg className="h-16 w-16 text-teal/40 group-hover:text-teal/70 transition-colors" viewBox="0 0 64 64" fill="none">
                      <path d="M22 16H42M22 48H42M32 16V48M32 28C28 28 26 32 32 36C38 40 36 44 32 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="32" cy="16" r="3" fill="currentColor" />
                      <circle cx="32" cy="48" r="3" fill="currentColor" />
                      <path d="M24 32H26" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M38 32H40" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-white/50">JOINT COUPLING</span>
                </div>

                {/* Visual 2: Spine (Pain) */}
                <div className="border border-white/5 rounded-xl p-4 bg-navy-deep/60 flex flex-col justify-between h-36 relative overflow-hidden group hover:border-amber-500/30 transition-all">
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 select-none">PAIN</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <svg className="h-16 w-16 text-amber-500/40 group-hover:text-amber-500/70 transition-colors" viewBox="0 0 64 64" fill="none">
                      <path d="M32 12V52M32 16H36M32 24H38M32 32H38M32 40H36M32 48H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="32" cy="16" r="2" fill="currentColor" />
                      <circle cx="32" cy="24" r="2.5" fill="currentColor" />
                      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
                      <circle cx="32" cy="40" r="2.5" fill="currentColor" />
                      <circle cx="32" cy="48" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-white/50">VERTEBRAE FIELD</span>
                </div>

                {/* Visual 3: Airway Nodes (Anesthesia) */}
                <div className="border border-white/5 rounded-xl p-4 bg-navy-deep/60 flex flex-col justify-between h-36 relative overflow-hidden group hover:border-blue-500/30 transition-all">
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 select-none">ANESTH</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <svg className="h-16 w-16 text-blue-500/40 group-hover:text-blue-500/70 transition-colors" viewBox="0 0 64 64" fill="none">
                      <path d="M32 12C32 12 20 28 20 40C20 46.6274 25.3726 52 32 52C38.6274 52 44 46.6274 44 40C44 28 32 12 32 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M32 20V48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                      <circle cx="32" cy="40" r="6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-white/50">ALVEOLAR MATRIX</span>
                </div>

                {/* Visual 4: Resistance Bands (Therapy) */}
                <div className="border border-white/5 rounded-xl p-4 bg-navy-deep/60 flex flex-col justify-between h-36 relative overflow-hidden group hover:border-purple-500/30 transition-all">
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 select-none">THERAPY</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <svg className="h-16 w-16 text-purple-500/40 group-hover:text-purple-500/70 transition-colors" viewBox="0 0 64 64" fill="none">
                      <path d="M12 24C24 40 40 12 52 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 30C24 46 40 18 52 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 36C24 52 40 24 52 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-white/50">TENSION VECTOR</span>
                </div>

                {/* Visual 5: Spinal Axis (Chiropractic) */}
                <div className="border border-white/5 rounded-xl p-4 bg-navy-deep/60 flex flex-col justify-between h-36 relative overflow-hidden group hover:border-coral/30 transition-all">
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 select-none">CHIRO</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <svg className="h-16 w-16 text-red-500/40 group-hover:text-red-500/70 transition-colors" viewBox="0 0 64 64" fill="none">
                      <path d="M26 16L32 10L38 16M24 32L32 26L40 32M26 48L32 42L38 48" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                      <line x1="32" y1="10" x2="32" y2="54" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-white/50">ALIGNMENT LINE</span>
                </div>

                {/* Visual 6: Multi-Panel Operations */}
                <div className="border border-white/5 rounded-xl p-4 bg-navy-deep/60 flex flex-col justify-between h-36 relative overflow-hidden group hover:border-white/20 transition-all">
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-white/20 select-none">MULTI</div>
                  <div className="flex-1 flex items-center justify-center py-2">
                    <div className="grid grid-cols-2 gap-1.5 w-12 h-12">
                      <div className="border border-white/10 rounded-sm bg-white/5 flex items-center justify-center text-[8px] font-bold text-teal">O</div>
                      <div className="border border-white/10 rounded-sm bg-white/5 flex items-center justify-center text-[8px] font-bold text-amber-500">P</div>
                      <div className="border border-white/10 rounded-sm bg-white/5 flex items-center justify-center text-[8px] font-bold text-blue-500">An</div>
                      <div className="border border-white/10 rounded-sm bg-white/5 flex items-center justify-center text-[8px] font-bold text-purple-500">Th</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-white/50">SYSTEM OVERLAY</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: TRUST BAR (Credibility Strip on White background) */}
      <section className="bg-white py-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-4 gap-x-8 text-neutral-500 text-xs font-semibold select-none">
            
            <div className="flex items-center gap-2">
              <Shield className="size-4 text-teal" />
              <span>HIPAA Certified Brokerage</span>
            </div>
            
            <span className="hidden lg:inline text-neutral-200">|</span>
            
            <div className="flex items-center gap-2">
              <Award className="size-4 text-teal" />
              <span>Proud Member of HBMA</span>
            </div>
            
            <span className="hidden lg:inline text-neutral-200">|</span>
            
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-teal" />
              <span>SOC2 Type II Audit Underway (Q3 2026)</span>
            </div>
            
            <span className="hidden lg:inline text-neutral-200">|</span>
            
            <div className="flex items-center gap-2">
              <Award className="size-4 text-teal" />
              <span>30+ AAPC-Certified Coders</span>
            </div>
            
            <span className="hidden lg:inline text-neutral-200">|</span>
            
            <div className="flex items-center gap-2">
              <Star className="size-4 text-teal" />
              <span>5–12 Years Specialty Experience</span>
            </div>
            
            <span className="hidden lg:inline text-neutral-200">|</span>
            
            <div className="flex items-center gap-2">
              <Users className="size-4 text-teal" />
              <span>50+ Practices Serviced Across 7 States</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM ("Generic RCM Breaks Down Here" on very light red/error tint background #FFF0EE) */}
      <section className="bg-[#FFF0EE] py-20 lg:py-28 text-left border-b border-red-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: Problem Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-100/10 px-3 py-1 text-xs font-bold text-red-700">
                ⚠️ Critical Gaps Explained
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
                Generic RCM Breaks Down Exactly Where Your Revenue Is Most at Risk
              </h2>
              <div className="h-1 w-12 bg-red-500 rounded" />
              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed space-y-3">
                A generalist billing company can submit a claim. What they can't do is recognize that your orthopedic surgeon performed a bilateral procedure requiring payer-specific modifier selection, or that the add-on CPT code your pain management provider just performed wasn't covered under the original prior authorization. That gap — between claim submission and claim accuracy — is where revenue disappears.
              </p>
              <p className="text-xs md:text-sm text-neutral-700 font-bold leading-relaxed">
                Specialty billing isn't a niche skill. It's a different discipline entirely.
              </p>
            </div>

            {/* Right side: Visual comparison cards */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 md:p-8 border border-red-200/50 shadow-xs">
              <div className="grid grid-cols-2 gap-8 divide-x divide-neutral-100">
                
                {/* Generic RCM */}
                <div className="pr-4">
                  <h4 className="font-display font-semibold text-neutral-400 text-xs md:text-sm uppercase tracking-wider mb-5 flex items-center gap-1.5">
                    <X className="size-4 text-red-500" /> Generic RCM
                  </h4>
                  <ul className="space-y-4 text-xs font-medium text-red-600">
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✕</span>
                      <span>Generalist coders across all specialties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✕</span>
                      <span>Modifier errors on complex procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✕</span>
                      <span>Prior auth gaps on add-on CPT codes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✕</span>
                      <span>Denial management after the fact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✕</span>
                      <span>No documentation review capability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✕</span>
                      <span>Same process for every specialty</span>
                    </li>
                  </ul>
                </div>

                {/* Clientele RCM */}
                <div className="pl-6">
                  <h4 className="font-display font-bold text-teal text-xs md:text-sm uppercase tracking-wider mb-5 flex items-center gap-1.5">
                    <Check className="size-4 text-teal" /> Clientele RCM
                  </h4>
                  <ul className="space-y-4 text-xs font-semibold text-teal">
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Certified coders per specialty, 5–12 yrs exp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Modifier review before every submission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Auth tracking embedded in workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Denial prevention as a feedback loop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Documentation audit built into workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="shrink-0 mt-0.5">✓</span>
                      <span>Specialty-configured workflow per practice</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: SPECIALTY CARDS ("Find Your Specialty" on White background) */}
      <section id="specialty-directory" className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
              Specialized Directories
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Find Your Specialty
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Each specialty below has its own billing complexity. Click through to see exactly how Clientele RCM handles yours.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            
            {/* Card 1 - Orthopedics */}
            <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between relative group overflow-hidden">
              <span className="absolute top-0 inset-x-0 h-1 bg-[#1D9E75] group-hover:h-1.5 transition-all" />
              <div>
                <div className="size-11 rounded-xl bg-[#1D9E75]/10 flex items-center justify-center text-[#1D9E75] mb-5">
                  <Activity className="size-5" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg md:text-xl mb-1">
                  Orthopedics
                </h3>
                <p className="text-[10px] text-[#1D9E75] tracking-widest uppercase font-mono font-bold mb-4">
                  Surgical &amp; Musculoskeletal Practices
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Specialty RCM centered on critical bone alignment modifiers, surgical margins, and strict pre-authorization parameters.
                </p>
                <div className="border-t border-neutral-100 pt-4 mb-6">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2.5">Key Billing Challenges:</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#1D9E75] font-bold">•</span>
                      <span>Global period modifier errors (-24, -25, -57, -79)</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#1D9E75] font-bold">•</span>
                      <span>Bilateral procedure coding (-50 vs. -RT/-LT by payer)</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#1D9E75] font-bold">•</span>
                      <span>Prior authorization failures on expanded surgical scope</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a 
                href="/specialties/orthopedics" 
                onClick={(e) => handleLinkClick(e, '/specialties/orthopedics')}
                className="text-xs font-bold text-[#1D9E75] hover:underline inline-flex items-center gap-1 mt-auto"
              >
                Explore Orthopedic RCM →
              </a>
            </div>

            {/* Card 2 - Pain Management */}
            <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between relative group overflow-hidden">
              <span className="absolute top-0 inset-x-0 h-1 bg-[#BA7517] group-hover:h-1.5 transition-all" />
              <div>
                <div className="size-11 rounded-xl bg-[#BA7517]/10 flex items-center justify-center text-[#BA7517] mb-5">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg md:text-xl mb-1">
                  Pain Management
                </h3>
                <p className="text-[10px] text-[#BA7517] tracking-widest uppercase font-mono font-bold mb-4">
                  Interventional &amp; Chronic Pain Practices
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Specialty RCM built to reconcile drug screening, sedation, fluoroscopy guidance, and complex block codes cleanly.
                </p>
                <div className="border-t border-neutral-100 pt-4 mb-6">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2.5">Key Billing Challenges:</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#BA7517] font-bold">•</span>
                      <span>Add-on CPT codes billed without updated prior authorization</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#BA7517] font-bold">•</span>
                      <span>Bundling denials for procedure combinations in same session</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#BA7517] font-bold">•</span>
                      <span>Fluoroscopy guidance coding disputes (77002/77003)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a 
                href="/specialties/pain-management" 
                onClick={(e) => handleLinkClick(e, '/specialties/pain-management')}
                className="text-xs font-bold text-[#BA7517] hover:underline inline-flex items-center gap-1 mt-auto"
              >
                Explore Pain Management RCM →
              </a>
            </div>

            {/* Card 3 - Anesthesia */}
            <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between relative group overflow-hidden">
              <span className="absolute top-0 inset-x-0 h-1 bg-[#185FA5] group-hover:h-1.5 transition-all" />
              <div>
                <div className="size-11 rounded-xl bg-[#185FA5]/10 flex items-center justify-center text-[#185FA5] mb-5">
                  <Compass className="size-5" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg md:text-xl mb-1">
                  Anesthesia
                </h3>
                <p className="text-[10px] text-[#185FA5] tracking-widest uppercase font-mono font-bold mb-4">
                  Anesthesiologists &amp; CRNA Groups
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Direct crosswalk integrations, dedicated supervision modifiers, and exact minute-to-unit calculations.
                </p>
                <div className="border-t border-neutral-100 pt-4 mb-6">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2.5">Key Billing Challenges:</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#185FA5] font-bold">•</span>
                      <span>CRNA modifier mismatch with documented supervision model (AA, QX, QY, QZ)</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#185FA5] font-bold">•</span>
                      <span>Time-unit calculation errors (15 min = 1 unit)</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#185FA5] font-bold">•</span>
                      <span>ASA crosswalk inaccuracies causing systematic underpayment</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a 
                href="/specialties/anesthesia" 
                onClick={(e) => handleLinkClick(e, '/specialties/anesthesia')}
                className="text-xs font-bold text-[#185FA5] hover:underline inline-flex items-center gap-1 mt-auto"
              >
                Explore Anesthesia Billing →
              </a>
            </div>

            {/* Card 4 - Comprehensive Therapy (PT / OT / ST) */}
            <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between relative group overflow-hidden">
              <span className="absolute top-0 inset-x-0 h-1 bg-[#534AB7] group-hover:h-1.5 transition-all" />
              <div>
                <div className="size-11 rounded-xl bg-[#534AB7]/10 flex items-center justify-center text-[#534AB7] mb-5">
                  <Compass className="size-5" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg md:text-xl mb-1">
                  Comprehensive Therapy
                </h3>
                <p className="text-[10px] text-[#534AB7] tracking-widest uppercase font-mono font-bold mb-4">
                  PT / OT / ST Specialty RCM
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Compliant Medicare 8-minute calculations, cap-tracking processes, and secure RTM billing capabilities.
                </p>
                <div className="border-t border-neutral-100 pt-4 mb-6">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2.5">Key Billing Challenges:</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#534AB7] font-bold">•</span>
                      <span>8-minute rule compliance for Medicare timed services</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#534AB7] font-bold">•</span>
                      <span>KX modifier omissions triggering therapy cap denials</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#534AB7] font-bold">•</span>
                      <span>RTM billing alongside traditional therapy — most billers can't do both</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a 
                href="/specialties/therapy" 
                onClick={(e) => handleLinkClick(e, '/specialties/therapy')}
                className="text-xs font-bold text-[#534AB7] hover:underline inline-flex items-center gap-1 mt-auto"
              >
                Explore Therapy Billing →
              </a>
            </div>

            {/* Card 5 - Chiropractic & Rehabilitation */}
            <div className="border border-neutral-200 rounded-2xl p-6 md:p-8 bg-white hover:shadow-md transition-all flex flex-col justify-between relative group overflow-hidden">
              <span className="absolute top-0 inset-x-0 h-1 bg-[#993C1D] group-hover:h-1.5 transition-all" />
              <div>
                <div className="size-11 rounded-xl bg-[#993C1D]/10 flex items-center justify-center text-[#993C1D] mb-5">
                  <Activity className="size-5" />
                </div>
                <h3 className="font-display font-bold text-navy text-lg md:text-xl mb-1">
                  Chiropractic &amp; Rehabilitation
                </h3>
                <p className="text-[10px] text-[#993C1D] tracking-widest uppercase font-mono font-bold mb-4">
                  Chiropractic &amp; Rehab RCM
                </p>
                <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                  Active spinal codes management, maintenance thresholds audits, and ABN forms validation workflows.
                </p>
                <div className="border-t border-neutral-100 pt-4 mb-6">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block mb-2.5">Key Billing Challenges:</span>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#993C1D] font-bold">•</span>
                      <span>Maintenance vs. active care billing distinctions</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#993C1D] font-bold">•</span>
                      <span>Medicare frequency limits and ABN workflow management</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-neutral-600 font-medium">
                      <span className="text-[#993C1D] font-bold">•</span>
                      <span>Spinal manipulation code selection and modifier accuracy</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a 
                href="/specialties/chiropractic" 
                onClick={(e) => handleLinkClick(e, '/specialties/chiropractic')}
                className="text-xs font-bold text-[#993C1D] hover:underline inline-flex items-center gap-1 mt-auto"
              >
                Explore Chiropractic &amp; Rehab RCM →
              </a>
            </div>

            {/* Card 6 Helper Empty or Filler Link */}
            <div className="border border-neutral-200 rounded-2xl p-6 bg-[#F8F9FA] flex flex-col justify-center items-center text-center">
              <span className="text-xs text-neutral-400 font-bold uppercase tracking-wider mb-2">ADDITIONAL SUPPORT</span>
              <p className="text-xs text-neutral-500 max-w-[200px] leading-relaxed mb-4">
                Have specialties not represented on our diagnostic menu list?
              </p>
              <a 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                  }, 150);
                }}
                className="text-xs font-bold text-teal hover:underline flex items-center gap-1 cursor-pointer"
              >
                Inquire With Our Coders →
              </a>
            </div>

          </div>

          {/* Card 7 — Multi-Specialty Practices (Full Width, Custom Horizontal Treatment, Navy Left Accent) */}
          <div className="border border-neutral-200 rounded-2xl bg-white p-6 md:p-8 hover:shadow-md transition-all relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-l-[6px] border-l-navy shadow-xs mt-6">
            <div className="flex-1 space-y-3 text-left">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-navy/5 text-navy">
                  <Building2 className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-navy text-xl">
                    Multi-Specialty Practices
                  </h3>
                  <p className="text-[10px] text-navy/60 uppercase font-mono font-bold tracking-wider">
                    Enterprise Inter-Specialty Operations
                  </p>
                </div>
              </div>
              <p className="font-display font-medium text-navy text-sm max-w-3xl">
                When your practice spans two or more specialties, billing complexity multiplies. We manage it all under one engagement.
              </p>
              <p className="text-xs text-neutral-500 max-w-4xl leading-relaxed">
                <strong className="text-navy">What this covers:</strong> Practices billing across orthopedics + pain management, therapy + RPM/RTM, anesthesia + surgical specialties, or any combination requiring simultaneous management of different payer rule sets, auth workflows, and coding standards.
              </p>
            </div>
            
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="rounded-full bg-navy text-white hover:bg-navy-deep px-6 py-3.5 font-bold text-xs shrink-0 tracking-wide transition-all active:scale-98 shadow-sm"
            >
              Talk to Us About Your Multi-Specialty Practice
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 5: AAPC CERTIFICATION CALLOUT ("The Team Behind the Specialty Knowledge" on Dark navy bg) */}
      <section id="stats-section" className="relative bg-[#0A1628] text-white py-24 lg:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-left">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold block mb-1">
                HUMAN-GUIDED AUTOMATION ENGINE
              </span>
              <div className="h-[1.5px] w-12 bg-teal/50" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight text-white">
                The Team Behind the Specialty Knowledge
              </h2>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-2xl">
                Every specialty sub-page on this site references AAPC-certified coders. That's not a marketing claim — it's a hiring requirement. Every coder and biller on our team holds AAPC certification, with a minimum of five years of specialty-specific experience. No generalist staffing. No training wheels.
              </p>
              <p className="text-white/85 text-xs md:text-sm leading-relaxed max-w-xl font-bold">
                When a Pain Management claim requires a real-time judgment call on whether a 64415 add-on is covered under an existing auth, you need someone who has seen that scenario hundreds of times — not someone reading the payer policy for the first time.
              </p>
            </div>

            <div className="lg:col-span-5 border border-white/10 rounded-2xl p-6 bg-navy-deep/60 backdrop-blur-sm self-stretch flex flex-col justify-center gap-4">
              <h4 className="text-[11px] font-mono tracking-widest text-[#1D9E75] font-black uppercase">TEAM ACCOUNTABILITY CAPABILITIES</h4>
              <ul className="space-y-3.5 text-xs text-white/75">
                <li className="flex items-start gap-2">
                  <span className="text-teal">✓</span>
                  <span><strong>80+ RCM professionals</strong> acting as an extension of your own internal staff of administrators.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal">✓</span>
                  <span>Dedicated, continuous supervisor tracking in Norwalk, CT and Bangalore Delivery Centers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal">✓</span>
                  <span>Human-Guided Automation pairing Clientele AI checks with 100% certified clinical coders.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3-Column Stat Grid (Animates on scroll-enter with simple CSS transition) */}
          <div className={`grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10 transition-opacity duration-700 ${statsVisible ? 'opacity-100' : 'opacity-35'}`}>
            
            <div className="relative group text-left">
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-teal" />
              <div className="pt-4">
                <div className="font-display font-black text-4xl lg:text-5xl text-white">30+</div>
                <div className="text-sm font-semibold text-teal mt-1">AAPC-Certified Coders</div>
                <p className="text-xs text-white/50 mt-1">Multi-specialty, active certification credentials verified quarterly.</p>
              </div>
            </div>

            <div className="relative group text-left">
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-teal" />
              <div className="pt-4">
                <div className="font-display font-black text-4xl lg:text-5xl text-white">5–12 Years</div>
                <div className="text-sm font-semibold text-teal mt-1">Specialty Experience</div>
                <p className="text-xs text-white/50 mt-1">Minimum verified specialized CPT billing experience per staff coder assigned.</p>
              </div>
            </div>

            <div className="relative group text-left">
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-teal" />
              <div className="pt-4">
                <div className="font-display font-black text-4xl lg:text-5xl text-white">99%</div>
                <div className="text-sm font-semibold text-teal mt-1">Clean Claim Rate</div>
                <p className="text-xs text-white/50 mt-1">Represents average portfolio submittal accuracy vs. industry average 85–90%.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: SPECIALTY DENIAL RATE COMPARISON (White with subtle borders/grid) */}
      <section className="bg-white py-20 lg:py-28 text-left border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
              Performance Benchmarks
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight animate-fade-in">
              Where Generic Billing Costs You the Most
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Denial rates vary significantly by specialty. The more complex the coding, the wider the gap between an average biller and a specialty-certified one.
            </p>
          </div>

          {/* Horizontal Bar Chart (Styled with HTML & CSS) */}
          <div className="space-y-6 bg-neutral-50/50 p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-xs">
            
            {/* Specialty Row 1: Orthopedics */}
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-baseline text-xs font-semibold">
                <span className="text-navy font-display font-bold">Orthopedics</span>
                <span className="text-neutral-400">Industry: <strong className="text-red-500">18%</strong> &nbsp;|&nbsp; Clientele: <strong className="text-teal">10%</strong></span>
              </div>
              <div className="space-y-1">
                {/* Industry Avg Bar */}
                <div className="w-full h-3 bg-red-100 rounded-full overflow-hidden relative">
                  <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: '18%' }} />
                </div>
                {/* Clientele Bar */}
                <div className="w-full h-3.5 bg-teal/10 rounded-full overflow-hidden relative">
                  <div className="h-full bg-teal transition-all duration-1000" style={{ width: '10%' }} />
                </div>
              </div>
            </div>

            {/* Specialty Row 2: Pain Management */}
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-baseline text-xs font-semibold">
                <span className="text-navy font-display font-bold">Pain Management</span>
                <span className="text-neutral-400">Industry: <strong className="text-red-500">22%</strong> &nbsp;|&nbsp; Clientele: <strong className="text-teal">10%</strong></span>
              </div>
              <div className="space-y-1">
                {/* Industry Avg Bar */}
                <div className="w-full h-3 bg-red-100 rounded-full overflow-hidden relative">
                  <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: '22%' }} />
                </div>
                {/* Clientele Bar */}
                <div className="w-full h-3.5 bg-teal/10 rounded-full overflow-hidden relative">
                  <div className="h-full bg-teal transition-all duration-1000" style={{ width: '10%' }} />
                </div>
              </div>
            </div>

            {/* Specialty Row 3: Anesthesia */}
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-baseline text-xs font-semibold">
                <span className="text-navy font-display font-bold">Anesthesia</span>
                <span className="text-neutral-400">Industry: <strong className="text-red-500">20%</strong> &nbsp;|&nbsp; Clientele: <strong className="text-teal">10%</strong></span>
              </div>
              <div className="space-y-1">
                {/* Industry Avg Bar */}
                <div className="w-full h-3 bg-red-100 rounded-full overflow-hidden relative">
                  <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: '20%' }} />
                </div>
                {/* Clientele Bar */}
                <div className="w-full h-3.5 bg-teal/10 rounded-full overflow-hidden relative">
                  <div className="h-full bg-teal transition-all duration-1000" style={{ width: '10%' }} />
                </div>
              </div>
            </div>

            {/* Specialty Row 4: Comprehensive Therapy */}
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-baseline text-xs font-semibold">
                <span className="text-navy font-display font-bold">Comprehensive Therapy (PT / OT / ST)</span>
                <span className="text-neutral-400">Industry: <strong className="text-red-500">16%</strong> &nbsp;|&nbsp; Clientele: <strong className="text-teal">10%</strong></span>
              </div>
              <div className="space-y-1">
                {/* Industry Avg Bar */}
                <div className="w-full h-3 bg-red-100 rounded-full overflow-hidden relative">
                  <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: '16%' }} />
                </div>
                {/* Clientele Bar */}
                <div className="w-full h-3.5 bg-teal/10 rounded-full overflow-hidden relative">
                  <div className="h-full bg-teal transition-all duration-1000" style={{ width: '10%' }} />
                </div>
              </div>
            </div>

            {/* Specialty Row 5: Chiropractic & Rehabilitation */}
            <div className="space-y-1.5 text-left">
              <div className="flex justify-between items-baseline text-xs font-semibold">
                <span className="text-navy font-display font-bold">Chiropractic &amp; Rehabilitation</span>
                <span className="text-neutral-400">Industry: <strong className="text-red-500">15%</strong> &nbsp;|&nbsp; Clientele: <strong className="text-teal">10%</strong></span>
              </div>
              <div className="space-y-1">
                {/* Industry Avg Bar */}
                <div className="w-full h-3 bg-red-100 rounded-full overflow-hidden relative">
                  <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: '15%' }} />
                </div>
                {/* Clientele Bar */}
                <div className="w-full h-3.5 bg-teal/10 rounded-full overflow-hidden relative">
                  <div className="h-full bg-teal transition-all duration-1000" style={{ width: '10%' }} />
                </div>
              </div>
            </div>

          </div>

          {/* Callout Line Below Chart */}
          <div className="mt-8 p-4 rounded-xl bg-teal/5 border border-teal/10 text-xs text-neutral-600 text-center font-medium leading-relaxed">
            📢 Industry average denial rate: 15–20%. Clientele RCM is <strong className="text-navy font-bold">10% today</strong>, targeting <strong className="text-teal font-extrabold">&lt;5%</strong> post-Clientele AI automation — compared to 15–22% across specialty categories.
          </div>

          {/* Source file citation */}
          <div className="text-[10px] text-neutral-400 mt-3 text-center select-none italic">
            Industry benchmarks based on CMS and MGMA published data. Clientele figures based on current portfolio performance.
          </div>

        </div>
      </section>

      {/* SECTION 7: EMR INTEGRATIONS ("We Work with Your Existing Systems" on Light blue-gray bg) */}
      <section className="bg-[#F4F6F9] py-20 lg:py-28 text-left border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
              EMR COMPATIBILITY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Integrated with the Systems Your Specialty Already Uses
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              No rip-and-replace. Clientele RCM connects directly with 11 leading EMR and practice management platforms — across all specialties we serve.
            </p>
          </div>

          {/* Static Logos Grid (3 rows x 4 on desktop, 2-col on mobile) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {[
              "eClinicalWorks (ECW)",
              "Meditech",
              "Medisoft",
              "Allscripts-Veradigm",
              "Practice Fusion (Tebra)",
              "Office Ally",
              "AdvancedMD",
              "Cerner",
              "GE Centricity",
              "ModMed",
              "ChartPerfect"
            ].map((emrLogo, idx) => (
              <div 
                key={idx}
                className="bg-white border border-neutral-200 p-5 rounded-xl text-center font-display font-bold text-xs text-neutral-600 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center min-h-[70px] shadow-xs active:scale-98 select-none"
              >
                <span>{emrLogo}</span>
              </div>
            ))}
            
            {/* 12th slot: overflow + More card */}
            <div className="bg-teal/5 border border-teal/20 p-5 rounded-xl text-center font-display font-bold text-xs text-teal flex items-center justify-center min-h-[70px] select-none">
              <span>+ More</span>
            </div>
          </div>

          <div className="text-center text-xs text-neutral-500">
            Don't see your EMR? We've likely worked with it.{" "}
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="text-teal font-bold hover:underline"
            >
              Ask us
            </a>.
          </div>

        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS ("From the Specialties We Serve" on Light warm gray) */}
      <section className="bg-[#F2F0EC] py-20 lg:py-28 text-left border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-3 block">
              CLIENT VALIDATION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              From the Specialties We Serve
            </h2>
            <p className="mt-4 text-xs md:text-sm text-neutral-500">
              Verified clinical administrators describe standard performance differences post-transition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 - Orthopedics (Teal Accent) */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 border-l-[4px] border-l-[#1D9E75] shadow-xs hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="text-amber-500 text-sm flex gap-1 mb-4 select-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="font-display italic text-neutral-700 text-xs md:text-sm leading-relaxed mb-6">
                  &ldquo;Before Clientele, global period billing disputes were eating into our surgical revenue every quarter. Their coders flagged the modifier issues within the first audit and the difference showed up in our collections within 60 days.&rdquo;
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider pt-3 border-t border-neutral-50">
                Revenue Cycle Manager · Multi-Specialty Orthopedic Clinic · Michigan
              </div>
            </div>

            {/* Testimonial 2 - Pain Management (Amber Accent) */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 border-l-[4px] border-l-[#BA7517] shadow-xs hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="text-amber-500 text-sm flex gap-1 mb-4 select-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="font-display italic text-neutral-700 text-xs md:text-sm leading-relaxed mb-6">
                  &ldquo;The add-on CPT authorization problem was costing us more than we realized. Clientele embedded an auth-tracking step that caught three unbilled procedures in the first week alone.&rdquo;
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider pt-3 border-t border-neutral-50">
                Billing Director · Multi-Location Pain Management Practice · Michigan
              </div>
            </div>

            {/* Testimonial 3 - Therapy (Purple Accent) */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 border-l-[4px] border-l-[#534AB7] shadow-xs hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="text-amber-500 text-sm flex gap-1 mb-4 select-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="font-display italic text-neutral-700 text-xs md:text-sm leading-relaxed mb-6">
                  &ldquo;Managing RTM billing alongside our traditional therapy codes was something our previous biller refused to touch. Clientele handles both without any gap in compliance documentation.&rdquo;
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-400 font-bold uppercase tracking-wider pt-3 border-t border-neutral-50">
                Director of Rehabilitation Services · Multi-Specialty Practice · New Jersey
              </div>
            </div>

          </div>

          <div className="text-center text-[10px] text-neutral-400 mt-8 italic select-none">
            All three testimonials represent portfolio case-study evaluations.
          </div>

        </div>
      </section>

      {/* SECTION 9: FOOTER CTA BAND ("Your Specialty Deserves a Billing Partner Who Knows It" on Dark Navy) */}
      <section className="relative bg-[#0A1628] text-white py-24 text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-60 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4 text-white">
            Your Specialty Deserves a Billing Partner Who Knows It
          </h2>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Request a free RCM assessment. We'll audit your denial patterns, payer mix, and coding workflows — and show you exactly where specialty-specific expertise changes the outcome.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#specialty-directory"
              onClick={(e) => handleLinkClick(e, '#specialty-directory')}
              className="rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 shadow-glow cursor-pointer inline-flex items-center justify-center select-none"
            >
              Find Your Specialty →
            </a>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="rounded-full border border-white/20 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 select-none"
            >
              Request a Free RCM Assessment
            </a>
          </div>
        </div>
      </section>
        </>
      ) : (
        <SpecialtyDetailView activeId={activeSpecialty} navigate={navigate} handleLinkClick={handleLinkClick} />
      )}

    </div>
  );
}

// ==========================================
// SPECIALTY CLINICAL & AUDIT DATASETS
// ==========================================
const SPECIALTIES_DATA = {
  orthopedics: {
    id: 'orthopedics',
    name: 'Orthopedic Surgery',
    tagline: 'Precision surgical coding designed to secure multi-surgeon and global period yields.',
    colorClass: 'text-[#1D9E75]',
    bgClass: 'bg-[#1D9E75]/10',
    borderClass: 'border-[#1D9E75]/30',
    accentColor: '#1D9E75',
    bullets: [
      'Bilateral and assistant-at-surgery documentation scrubbing',
      '90-day global surgical period evaluation models',
      'Advanced hardware and unlisted CPT attachment reviews'
    ],
    stats: [
      { label: 'Clean Claim Rate', value: '99.1%' },
      { label: 'A/R Days Held', value: '24.5 Days' },
      { label: 'Payer Write-offs', value: '< 0.5%' }
    ],
    challenges: [
      {
        title: 'Global Period Consultation Denials',
        description: 'Postoperative visits represent a major leakage point. Payers frequently bundle independent consultations that occur within the 90-day window.',
        solution: 'Our automated tracker checks surgical logs, prepending modifiers -24, -25, or -57 to separate post-op outpatient clinic encounters.'
      },
      {
        title: 'Anatomical and Bilateral Splitting',
        description: 'Bilateral knee/shoulder studies or injections require specific -50 vs -RT/-LT mod configurations that shift depending on state Medicaid directives.',
        solution: 'We maintain payer-specific modifier crosswalks, updating rules natively before the clearinghouse stage.'
      }
    ],
    scenarios: [
      {
        title: 'Complex Joint Arthroplasty',
        code: 'CPT 27447 & modifier -62',
        problem: 'Surgical center submitted co-surgeon claims without matching modifier -62, triggering an immediate 100% bundling refusal on the secondary claim.',
        recoveryLog: 'Clientele Pre-Audit flagged overlapping schedules. Orthopedic coders certified the co-surgeon clinical report, appended -62, and re-submitted. Full payment resolved in 12 days.'
      },
      {
        title: 'Unlisted Tendon Repair',
        code: 'CPT 27299',
        problem: 'Claim filed without PDF attachment of the operative note, triggering a 90-day suspend status at the commercial clearinghouse.',
        recoveryLog: 'Our mid-cycle system held the export, fetched the signed electronic operative note, and attached a comparable base CPT cross-reference. paid cleanly in 14 days.'
      }
    ],
    faqs: [
      { q: 'How do you handle modifier -59 for orthopedic practices?', a: 'Modifier -59 is only applied when medical documentation supports distinct anatomical sites or separate patient visits, reducing retrospective RAC audit risks.' },
      { q: 'Can you bill assistant surgeon services compliant?', a: 'Yes. We double-check each surgical procedure against the active CMS assistant surgeon indicator list before prepending -80, -81, or -AS.' }
    ]
  },
  'pain-management': {
    id: 'pain-management',
    name: 'Pain Management',
    tagline: 'Safeguarding interventional chronic pain programs from retrospective recovery audits.',
    colorClass: 'text-[#BA7517]',
    bgClass: 'bg-[#BA7517]/10',
    borderClass: 'border-[#BA7517]/30',
    accentColor: '#BA7517',
    bullets: [
      'Continuous LCD mapping for therapeutic injections and blocks',
      'SCS trial prior authorization validation processes',
      'Quantitative monitor screens (G0480) compliance checks'
    ],
    stats: [
      { label: 'RAC Audit Deflect rate', value: '100%' },
      { label: 'Denial Rate Drop', value: '-62%' },
      { label: 'Operational Speed', value: '14.1 Days' }
    ],
    challenges: [
      {
        title: 'Imaging Guidance Bundles',
        description: 'Payers routinely bundle fluoroscopy codes (77002, 77003) into injection claims or refuse coverage under Medicare’s Medically Unlikely Edits (MUE).',
        solution: 'Our billing templates bundle or split fluoroscopic units based on structural levels, using -59 only when anatomical segments are separate.'
      },
      {
        title: 'Scope Changes Inside the O.R.',
        description: 'Providers performing epidural blocks frequently perform an additional un-authorized block when clinical presentation shifts.',
        solution: 'Our retro-authorization specialists initiate payer requests within the carrier’s strict 24-48 hour emergency scope window.'
      }
    ],
    scenarios: [
      {
        title: 'Epidural & Facet Joint Session',
        code: 'CPT 64483 & 64493',
        problem: 'Practice billed multi-level bilateral adjustments without separate anatomical site tags, leading to full denial of the secondary site billing.',
        recoveryLog: 'Pre-Audit split the claims lines with correct modifiers -RT/-LT and modifier -XS. Total approved payout increased from $350 to $1,150.'
      },
      {
        title: 'SCS Trial Authorization Gap',
        code: 'CPT 63650',
        problem: 'Pre-auth code specified lead placement but physician performed generator implant. Claim rejected as unauthorized.',
        recoveryLog: 'Customer service desk identified the clinical mismatch, submitted an expedited post-procedure appeal with operative logs, and recovered $12,800 without loss.'
      }
    ],
    faqs: [
      { q: 'How do you enforce local coverage determinations (LCDs)?', a: 'Our engine is updated weekly with local jurisdiction directives, ensuring pain ratings and clinical histories are fully logged prior to claim export.' },
      { q: 'How is therapeutic drug screening billed?', a: 'We verify that clinical charts detail medical necessity and patient-specific risk levels, billing quantitative steps Compliantly.' }
    ]
  },
  anesthesia: {
    id: 'anesthesia',
    name: 'Anesthesia Services',
    tagline: 'Converting clock minutes into optimized unit rates dynamically per payer.',
    colorClass: 'text-[#185FA5]',
    bgClass: 'bg-[#185FA5]/10',
    borderClass: 'border-[#185FA5]/30',
    accentColor: '#185FA5',
    bullets: [
      'Payer-customized rounded minute-to-unit calculations',
      'Medical direction and CRNA modifier validation (QK, QX, AA)',
      'ASA crosswalk database dynamic converters'
    ],
    stats: [
      { label: 'Unit Calculation Margin', value: '0.0%' },
      { label: 'Average days to pay', value: '11.8 Days' },
      { label: 'Clean Claim Yield', value: '99.5%' }
    ],
    challenges: [
      {
        title: 'Rounding Discrepancy Variances',
        description: 'Certain commercial payers round time to exact minute splits, while others force 15-minute boundaries or exclude pre-oxygenation time.',
        solution: 'Our RCM system applies dynamic rounding equations based on individual corporate payer policies before export.'
      },
      {
        title: 'Concurrency Audit Refusals',
        description: 'Directing an overlap ratio higher than 1:4 cases triggers immediate Medicare fraud alerts and systemic claims suspensions.',
        solution: 'We cross-reference every provider shift sheet against our concurrent registry to verify exact supervision logs.'
      }
    ],
    scenarios: [
      {
        title: 'Medical Supervision Model Validation',
        code: 'Modifiers QK & QX',
        problem: 'CRNA modifier mismatch with anesthesiologist supervisions logs, leading to immediate complete denials of both provider claims lines.',
        recoveryLog: 'Clientele team reconstructed the overlapping shift logs, aligned concurrent case records, re-appended modifiers, and successfully cleared the pending $4,400 transfer.'
      },
      {
        title: 'Qualifying Circumstances Recovery',
        code: 'CPT 99100 & Modifier -P3',
        problem: 'Anesthesiologist administered sedation to a high-risk 78-year old with cardiovascular disease but did not bill secondary qualifying units.',
        recoveryLog: 'Clientele system automatically detected the age and physical status from EHR data, appending 99100 and -P3 to recover 3 supplementary base units ($240 extra) per case.'
      }
    ],
    faqs: [
      { q: 'How are post-op pain blocks managed in anesthesia billing?', a: 'If requested by the surgeon for post-op management, we bill them separately with modifier -59 to avoid bundling into primary surgery anesthetic rates.' },
      { q: 'What is your ASA crosswalk accuracy rate?', a: '100%. We ingest direct crosswalk directories quarterly to ensure all core surgical conversions are perfectly matched.' }
    ]
  },
  therapy: {
    id: 'therapy',
    name: 'Physical & Occupational Therapy',
    tagline: 'Compliantly managing 8-minute calculations and tracking therapy caps.',
    colorClass: 'text-[#534AB7]',
    bgClass: 'bg-[#534AB7]/10',
    borderClass: 'border-[#534AB7]/30',
    accentColor: '#534AB7',
    bullets: [
      'Strict Medicare 8-minute timed service sum verification',
      'Automatic KX modifier placements for clinical threshold caps',
      'Integration of Remote Therapeutic Monitoring (RTM) billing paths'
    ],
    stats: [
      { label: '8-Min Error Reductions', value: '100%' },
      { label: 'Therapy Cap Saved', value: '99.3%' },
      { label: 'Average A/R Days', value: '23.8 Days' }
    ],
    challenges: [
      {
        title: '8-Minute Timed Session Errors',
        description: 'Under-calculating total cumulative minutes or treating code units independently leads to major compliance exposure and retrospective takebacks.',
        solution: 'Our mathematical check constraints align code intervals with the exact clinical timeline automatically.'
      },
      {
        title: 'Therapy Cap and KX Omissions',
        description: 'Once patients exceed the annual monetary cap, claims freeze instantly unless documentation validates medical necessity and the KX modifier is manually placed.',
        solution: 'We integrate patient-accumulated bucket tracking that automatically appends modifier KX at threshold crossings.'
      }
    ],
    scenarios: [
      {
        title: 'Timed Exercise & Manual Care Combination',
        code: 'CPT 97110 & 97140',
        problem: 'Physical therapist entered 23 minutes of exercise and 13 minutes of manual therapy, claiming 3 total units when Medicare rules limit 36 minutes to 2 units.',
        recoveryLog: 'Clientele pre-scrubber detected the over-billing before transmission, adjusted the distribution compliantly, preventing a retrospective $90 recovery penalty.'
      },
      {
        title: 'RTM Setup and Monitoring',
        code: 'CPT 98975 / 98977',
        problem: 'Clinic was shipping home-monitoring sensors but losing recurring monthly revenue due to improper device tracking.',
        recoveryLog: 'Clientele established and managed automated remote hardware logs, tracking 16 days of therapeutic patient telemetry and unlocking $120/month per compliant patient.'
      }
    ],
    faqs: [
      { q: 'How does your software calculate timed vs untimed therapy codes?', a: 'Untimed codes (like evaluations 97161) are processed as single units; timed units (therapeutic exercise) are compiled under strict CMS or AMA guidelines depending on payer.' },
      { q: 'How do you support therapy cap appeals?', a: 'Our back-end team bundles medical progress notes, clinical evaluations, and functional survey histories to reverse payer care limits.' }
    ]
  },
  chiropractic: {
    id: 'chiropractic',
    name: 'Chiropractic Care',
    tagline: 'Establishing acute care medical necessity to prevent chronic maintenance denials.',
    colorClass: 'text-[#993C1D]',
    bgClass: 'bg-[#993C1D]/10',
    borderClass: 'border-[#993C1D]/30',
    accentColor: '#993C1D',
    bullets: [
      'Medicare AT modifier alignment and pain listings verification',
      'Front-desk prompts for patient Advance Beneficiary Notice (ABN)',
      'NCCI modalities bundling review protocols'
    ],
    stats: [
      { label: 'ABN Compliant Audited', value: '100%' },
      { label: 'Modalities recovery rate', value: '+35%' },
      { label: 'Claim Payout Speed', value: '12.5 Days' }
    ],
    challenges: [
      {
        title: 'Acute vs Maintenance Disputes',
        description: 'Payers constantly look to classify functional adjustments as maintenance care, making claims non-covered and shifting cost onto patients too late.',
        solution: 'Our pre-auditer forces spinal subluxation coordinate tracking on all adjustments, appending modifier -AT ONLY on supported active care lines.'
      },
      {
        title: 'Missing Advance Beneficiary Notice (ABN) Forms',
        description: 'When patients shift to wellness care, failure to sign an ABN makes the clinic legally unable to bill the patient directly for unpaid balances.',
        solution: 'The system flags accounts at transition thresholds, generating front-desk reminders to execute Form CMS-30 before treatment.'
      }
    ],
    scenarios: [
      {
        title: '5-Region Adjustments with Traction',
        code: 'CPT 98942 & Modalities',
        problem: 'Mechanical traction (97012) billed side-by-side with a 5-region adjustment resulted in automatic bundling and zero payment for the traction.',
        recoveryLog: 'Pre-Audit checked clinic logs. Since traction was thoracic and adjustment was lumbar, we appended modifier -59 to traction, recovering the modality payment.'
      },
      {
        title: 'Medicare Patient Wellness Shift',
        code: 'CPT 98940 non-covered',
        problem: 'Clinic billed standard adjustment to Medicare which was flagged as maintenance. Without an ABN signature, $65 was permanently written off.',
        recoveryLog: 'Clientele’s threshold prompt had secured a digital ABN signature beforehand. The system automatically billed the patient’s credit card with zero administrator delay.'
      }
    ],
    faqs: [
      { q: 'What codes are reimbursable by Medicare in chiropractic?', a: 'Medicare only pays for active manual manipulation of the spine (98940, 98941, 98942) with modifier -AT. Modalities like traction are non-covered.' },
      { q: 'How do you handle Personal Injury (PI) and auto claims?', a: 'Our dedicated PIP division tracks legal liens, coordinates with attorney offices, and submits clinical reports to speed up full recovery.' }
    ]
  }
};

// ==========================================
// SPECIALTY DYNAMIC LAYOUT COMPONENT
// ==========================================
interface SpecialtyDetailProps {
  activeId: string;
  navigate: (path: string) => void;
  handleLinkClick: (e: React.MouseEvent, path: string) => void;
}

function SpecialtyDetailView({ activeId, navigate, handleLinkClick }: SpecialtyDetailProps) {
  const spec = SPECIALTIES_DATA[activeId as keyof typeof SPECIALTIES_DATA] || SPECIALTIES_DATA['orthopedics'];

  // State
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [simulationStep, setSimulationStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [monthlyVolume, setMonthlyVolume] = useState(150000);

  // Auto-reset engine step when changing specialties or scenarios
  useEffect(() => {
    setSimulationStep(0);
    setIsSimulating(false);
  }, [activeId, selectedScenarioIndex]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);

    const t1 = setTimeout(() => setSimulationStep(2), 1000);
    const t2 = setTimeout(() => setSimulationStep(3), 2000);
    const t3 = setTimeout(() => {
      setSimulationStep(4);
      setIsSimulating(false);
      setToastMessage('🔮 Claim fully optimized and approved for primary submittal!');
      setTimeout(() => setToastMessage(null), 3000);
    }, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  const scenario = spec.scenarios[selectedScenarioIndex] || spec.scenarios[0];

  // Rates for ROI computation
  const rates: Record<string, number> = {
    orthopedics: 0.058,
    'pain-management': 0.068,
    anesthesia: 0.049,
    therapy: 0.052,
    chiropractic: 0.061
  };
  const recoveryRate = rates[activeId] || 0.055;
  const annualRecovery = Math.round(monthlyVolume * 12 * recoveryRate);
  const claimAccuracyBefore = 83.2;
  const claimAccuracyAfter = 99.2;
  const adminSavings = Math.round((monthlyVolume / 10000) * 12);

  return (
    <div className="bg-background text-foreground text-left py-12 lg:py-16 select-text">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic Breadcrumbs */}
        <div className="text-neutral-400 text-[11px] uppercase tracking-widest font-mono mb-6 flex items-center gap-2 select-none">
          <span className="cursor-pointer hover:text-navy" onClick={() => navigate('/')}>Home</span>
          <ChevronRight className="size-3 text-neutral-300" />
          <span className="cursor-pointer hover:text-navy" onClick={() => navigate('/specialties')}>Specialties</span>
          <ChevronRight className="size-3 text-neutral-300" />
          <span className="text-navy font-semibold">{spec.name}</span>
        </div>

        {/* Dynamic Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${spec.bgClass} ${spec.colorClass}`}>
              Specialized Revenue Cycle Management
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-navy">
              We Make <span className="underline decoration-teal">{spec.name}</span> Billing High-Performance
            </h1>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              {spec.tagline} Our team of clinical coders understand the nuances, compliance rules, and documentation standards that determine whether your claims get approved or delayed under payer evaluation guidelines.
            </p>

            <ul className="space-y-3 pt-2">
              {spec.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs font-medium text-neutral-700">
                  <Check className="size-4 text-teal shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="rounded-full bg-navy text-white hover:bg-navy-deep px-7 py-4 font-bold text-xs tracking-wide transition-all text-center select-none"
              >
                Request a Free RCM Audit
              </a>
              <button 
                onClick={(e) => handleLinkClick(e, '#scrubber-demo')}
                className="rounded-full border border-neutral-300 hover:bg-neutral-50 text-neutral-700 px-7 py-4 font-semibold text-xs tracking-wide transition-all text-center select-none"
              >
                Visualize Code Scrubbing ↓
              </button>
            </div>
          </div>

          {/* KPI Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {spec.stats.map((stat, i) => (
              <div key={i} className="border border-neutral-200 bg-white p-6 rounded-2xl shadow-xs relative overflow-hidden flex flex-col justify-center">
                <span className={`absolute top-0 inset-x-0 h-1 ${spec.bgClass}`} />
                <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest font-semibold">{stat.label}</div>
                <div className={`text-2xl lg:text-3xl font-black mt-1 font-display ${spec.colorClass}`}>{stat.value}</div>
                <div className="text-[10px] text-neutral-500 mt-1 leading-relaxed">Verified under active Clientele practice portfolios.</div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERACTIVE COMPONENT 1: SPECIALTY PRE-AUDIT SIMULATOR */}
        <div id="scrubber-demo" className="border border-neutral-200 rounded-3xl bg-white p-6 md:p-8 shadow-xs mb-16 scroll-mt-24">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <span className="text-[10px] font-mono tracking-widest text-[#1D9E75] font-black uppercase">HUMAN-IN-THE-LOOP SIMULATION</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mt-2">
              Live Clinical Pre-Audit Scrubbing Engine
            </h2>
            <p className="text-xs text-neutral-500 mt-2">
              Select one of our typical clinical scenarios below and watch how Clientele’s real-time pre-auditer prevents denials before they occur.
            </p>
          </div>

          {/* Scenario Tabs switcher */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {spec.scenarios.map((sc, index) => (
              <button
                key={index}
                onClick={() => setSelectedScenarioIndex(index)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                  selectedScenarioIndex === index 
                    ? `bg-neutral-950 text-white ${spec.borderClass}` 
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                }`}
              >
                👁️ {sc.title}
              </button>
            ))}
          </div>

          {/* Simulator Display Workspace */}
          <div className="grid lg:grid-cols-2 gap-6 bg-neutral-900 rounded-2xl p-6 text-white text-xs select-none">
            
            {/* Left Column: Input Claim Sheet */}
            <div className="border border-white/10 rounded-xl p-5 bg-black/40 flex flex-col justify-between font-mono h-[320px]">
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                  <span className="text-[10px] text-white/50 tracking-wider">CPT TRANSACTION STATEMENT</span>
                  <span className="rounded-full bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 text-[9px] font-extrabold uppercase">
                    Risk Flagged
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/40">Clinical Target:</span>
                    <span className="text-white font-semibold">{scenario.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Code/Level:</span>
                    <span className="text-amber-400 font-bold">{scenario.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Carrier Payer:</span>
                    <span className="text-white">Commercial Payer Group A</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-[10px] leading-relaxed text-red-200 text-left">
                  <strong className="text-red-400 block mb-1">🚨 System Alert Rule mismatch:</strong>
                  {scenario.problem}
                </div>
              </div>
              <div className="text-[10px] text-white/30 border-t border-white/5 pt-3">
                Pre-Audit status: HELD pending optimizer logic.
              </div>
            </div>

            {/* Right Column: Interactive Console and Recovery Logger */}
            <div className="border border-white/10 rounded-xl p-5 bg-black/60 flex flex-col justify-between font-mono h-[320px] text-left">
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                  <span className="text-[10px] text-white/50 tracking-wider">CLIENTELE RECOVERY CONSOLE</span>
                  <span className="text-[9px] text-[#1D9E75] animate-pulse">● ACTIVE ENGINE</span>
                </div>

                <div className="space-y-2.5 h-[190px] overflow-y-auto font-mono text-[10px] md:text-[11px]">
                  {simulationStep >= 1 && (
                    <div className="text-neutral-400">
                      <span className="text-teal font-extrabold">[18:41:42]</span> Pre-scrub triggered. Parsing clinical EHR parameters...
                    </div>
                  )}
                  {simulationStep >= 2 && (
                    <div className="text-neutral-400">
                      <span className="text-teal font-extrabold">[18:41:43]</span> Cross-referencing {spec.name} payer-specific guidelines...
                    </div>
                  )}
                  {simulationStep >= 3 && (
                    <div className="text-yellow-400 animate-pulse font-semibold">
                      <span className="text-teal font-extrabold">[18:41:44]</span> AAPC-specialty coder action: review clinical operative sheet...
                    </div>
                  )}
                  {simulationStep >= 4 && (
                    <div className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-lg leading-relaxed text-[10px]">
                      <span className="text-emerald-500 font-extrabold block mb-0.5">[18:41:45] CORE OPTIMIZATION RESOLVED:</span>
                      {scenario.recoveryLog}
                    </div>
                  )}
                  {simulationStep === 0 && (
                    <div className="text-neutral-500 italic py-12 text-center">
                      Click the "Run Optimization Audit" button below to initiate audit validation logic.
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className={`w-full rounded-lg py-2.5 text-center font-bold text-[11px] tracking-wide cursor-pointer transition-all ${
                  isSimulating 
                    ? 'bg-neutral-800 text-white/40 cursor-not-allowed' 
                    : simulationStep === 4 
                    ? 'bg-emerald-600 text-white hover:bg-emerald-500' 
                    : 'bg-teal text-navy hover:bg-teal/90'
                }`}
              >
                {isSimulating ? '🛠️ Scrubbing & Resolving Mismatches...' : simulationStep === 4 ? '🔄 Run Again' : '⚡ Run Optimization Audit'}
              </button>
            </div>

          </div>

          {toastMessage && (
            <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-neutral-900 border border-emerald-500/20 text-white px-5 py-3 shadow-card text-xs font-bold leading-relaxed animate-bounce">
              {toastMessage}
            </div>
          )}
        </div>

        {/* INTERACTIVE COMPONENT 2: ROI ASSESSMENT CALCULATOR */}
        <div className="bg-[#FAF3F0] rounded-3xl p-6 md:p-12 mb-16 border border-neutral-200">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text + Sliders */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-neutral-800 bg-white shadow-xs`}>
                📈 Specialty Return on Investment
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy leading-tight">
                Calculate the Impact of Clientele RCM on Your Practice
              </h2>
              <p className="text-xs text-neutral-600 leading-relaxed">
                By focusing on {spec.name}-specific denials, coding rules, and front-desk authorization loops, we recover money that generalist agencies leave behind.
              </p>

              {/* Slider wrapper */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-neutral-700">Average Monthly Billing Volume:</span>
                  <span className="font-mono text-xl font-black text-navy">
                    ${monthlyVolume.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="20000" 
                  max="1500000" 
                  step="10000"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-navy"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 font-mono font-bold select-none">
                  <span>$20,000</span>
                  <span>$500,000</span>
                  <span>$1,000,000</span>
                  <span>$1,500,000+</span>
                </div>
              </div>
            </div>

            {/* Right Column: Big results display */}
            <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 space-y-6 text-center select-none">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#BA7517] font-bold uppercase">ESTIMATED ANNUAL RECOVERY</span>
                <div className="text-3xl md:text-4xl font-black text-navy font-display mt-2">
                  ${annualRecovery.toLocaleString()}
                </div>
                <p className="text-[10px] text-neutral-400 mt-1">Found revenue recovered from previous denials and proper CPT coding.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 divide-x divide-neutral-100 border-y border-neutral-100 py-6">
                <div>
                  <span className="text-[10px] text-neutral-400 block mb-1">Claim Accuracy Boost</span>
                  <span className="text-sm font-bold text-emerald-600">{claimAccuracyBefore}% → {claimAccuracyAfter}%</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 block mb-1">Admin Overhead Saved</span>
                  <span className="text-sm font-bold text-[#534AB7]">{adminSavings} Hours/Yr</span>
                </div>
              </div>

              <a 
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`w-full rounded-full bg-navy text-white hover:bg-neutral-900 py-3 block text-center font-bold text-xs shrink-0 tracking-wide transition-all`}
              >
                Schedule an Assessment
              </a>
            </div>

          </div>
        </div>

        {/* CORE ISSUES & PREVENTIVE SOLUTIONS */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl font-bold text-navy">
              Core Specialty Bottlenecks &amp; Our Workflows
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              How Clientele replaces friction points with certified coding checklists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {spec.challenges.map((c, idx) => (
              <div key={idx} className="border border-neutral-200 rounded-2xl p-6 bg-white shadow-xs text-left">
                <h3 className="font-display font-semibold text-neutral-900 text-[14px] flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${spec.bgClass} inline-block`} style={{ backgroundColor: spec.accentColor }} />
                  {c.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed mt-2 pl-4">
                  {c.description}
                </p>
                <div className="bg-neutral-50 border border-neutral-200 mt-4 rounded-xl p-4 text-xs">
                  <strong className="text-navy">Clientele Preventive Action:</strong>
                  <p className="text-neutral-600 mt-1 leading-relaxed">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SPECIALTY FAQ ACCORDIONS */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-navy">
              Frequently Asked Coding Questions ({spec.name})
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Direct guidance from our compliance managers.
            </p>
          </div>

          <div className="space-y-4">
            {spec.faqs.map((faq, index) => (
              <div key={index} className="border border-neutral-200 rounded-xl bg-white p-5">
                <h4 className="font-display font-bold text-navy text-xs md:text-sm">{faq.q}</h4>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER CALL-TO-ACTION BAND */}
        <div className="relative bg-[#0A1628] rounded-3xl text-white p-8 md:p-12 overflow-hidden text-center">
          <div className="absolute inset-0 mesh-glow opacity-30 pointer-events-none" />
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4">
            Get an Expert RCM Analysis of Your {spec.name} Practice
          </h2>
          <p className="text-xs text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Let us audit a random sample of 20 historical claims from your EMR. We will identify precise modifier slips, prior-auth overlaps, or bundling rejections — completely free of charge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                setTimeout(() => {
                  document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="rounded-full bg-teal text-navy hover:bg-teal-glow px-8 py-3.5 font-bold text-xs transition-all tracking-wide select-none"
            >
              Request Free RCM Assessment
            </a>
            <button 
              onClick={() => {
                navigate('/specialties');
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-3.5 font-bold text-xs text-white transition-all tracking-wide"
            >
              Return to Specialties Menu
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
