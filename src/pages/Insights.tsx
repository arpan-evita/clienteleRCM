import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  X, 
  BookOpen, 
  User, 
  Clock, 
  Calendar, 
  Cpu, 
  AlertCircle, 
  ShieldAlert, 
  Layers, 
  Activity, 
  FileCheck,
  CheckCircle,
  HelpCircle,
  Sparkles,
  Inbox,
  Filter,
  Check
} from 'lucide-react';

interface InsightsProps {
  navigate: (path: string) => void;
}

interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  date: string;
  seoTag?: string;
  featured?: boolean;
}

export default function Insights({ navigate }: InsightsProps) {
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

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loadMoreCount, setLoadMoreCount] = useState<number>(6);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [newsletterState, setNewsletterState] = useState<{
    firstName: string;
    email: string;
    practiceType: string;
    success: boolean;
  }>({
    firstName: '',
    email: '',
    practiceType: '',
    success: false
  });

  // 12 posts from prompt + 1 featured
  const blogPosts: BlogPostType[] = [
    // AI & Automation
    {
      id: 'post-1',
      title: "How AI Is Transforming Revenue Cycle Management in Healthcare",
      excerpt: "AI is changing how claims move, how denials are caught, and how practices understand their own revenue data. Here's what's real, what's overhyped, and what RCM-specific automation actually looks like in practice — from eligibility verification to denial pattern analysis.",
      readTime: "7 min",
      category: "AI & Automation",
      date: "May 15, 2026",
      seoTag: "AI revenue cycle management healthcare",
      featured: true
    },
    {
      id: 'post-2',
      title: "What 'Human-Guided Automation' Actually Means in Medical Billing",
      excerpt: "AI handles volume. AAPC-certified humans handle complexity. Here's how the model works — and why it matters for claim accuracy without the jargon.",
      readTime: "5 min",
      category: "AI & Automation",
      date: "May 10, 2026"
    },
    {
      id: 'post-3',
      title: "The Clientele AI Roadmap: Six Modules, One Revenue Cycle",
      excerpt: "A transparent look at what Clientele AI is building, what's live now, and what's coming across 2026 — and why we're building it in this sequence.",
      readTime: "6 min",
      category: "AI & Automation",
      date: "May 2, 2026"
    },
    // Denial Management
    {
      id: 'post-4',
      title: "Top Causes of Claim Denials and How Providers Can Prevent Them",
      excerpt: "The denial categories that cost practices the most — and the pre-submission protocols that stop them before they start.",
      readTime: "8 min",
      category: "Denial Management",
      date: "April 28, 2026",
      seoTag: "claim denial prevention medical billing"
    },
    {
      id: 'post-5',
      title: "Denied Doesn't Mean Gone: How to Build a Systematic Denial Appeal Workflow",
      excerpt: "Most practices appeal denials reactively, one at a time. Here's how to build a denial appeal system that tracks patterns, prioritizes by dollar value, and drives protocol changes.",
      readTime: "7 min",
      category: "Denial Management",
      date: "April 14, 2026"
    },
    {
      id: 'post-6',
      title: "The Authorization Gap: Why Add-On CPT Denials Keep Happening — and How to Close Them",
      excerpt: "The most common denial in interventional pain management is also one of the most preventable. Here's the workflow failure behind it and the protocol that fixes it.",
      readTime: "6 min",
      category: "Denial Management",
      date: "April 3, 2026"
    },
    // Compliance
    {
      id: 'post-7',
      title: "HIPAA Compliance in RCM Outsourcing: What Your Billing Company Should Be Doing",
      excerpt: "A Business Associate Agreement is the baseline. Here's what HIPAA-compliant RCM outsourcing actually looks like — from data encryption to offshore operations compliance.",
      readTime: "6 min",
      category: "Compliance",
      date: "March 22, 2026",
      seoTag: "HIPAA compliant medical billing outsourcing"
    },
    {
      id: 'post-8',
      title: "SOC2 Type II in Healthcare Billing: What It Is and Why It Matters for Your Practice",
      excerpt: "SOC2 Type II isn't a marketing badge — it's an independent audit of how a vendor handles your patient data. Here's what to look for and what questions to ask your billing company.",
      readTime: "5 min",
      category: "Compliance",
      date: "March 9, 2026"
    },
    // Specialty Billing
    {
      id: 'post-9',
      title: "Global Period Billing in Orthopedic Surgery: Modifiers, Rules, and the Denials They Prevent",
      excerpt: "Modifiers -24, -25, -57, and -79 exist because post-operative care billing is genuinely complex. Here's how global period tracking works — and what happens when it doesn't.",
      readTime: "7 min",
      category: "Specialty Billing",
      date: "February 25, 2026",
      seoTag: "orthopedic global period billing modifiers"
    },
    {
      id: 'post-10',
      title: "Anesthesia Billing 101: Time Units, CRNA Modifiers, and the Errors That Cost the Most",
      excerpt: "Anesthesia billing has almost no margin for error. Every time unit matters, every CRNA modifier has a specific meaning, and every cross-walk error compounds across a case. Here's how to get it right.",
      readTime: "8 min",
      category: "Specialty Billing",
      date: "February 12, 2026"
    },
    // RTM & RPM
    {
      id: 'post-11',
      title: "RTM Billing for Therapy Practices: The Complete Compliance Guide (CPT 98975–98981)",
      excerpt: "RTM billing errors are costly, auditable, and largely preventable. Here's the complete compliance guide — code by code, rule by rule — for PT, OT, and SLP practices.",
      readTime: "10 min",
      category: "RTM & RPM",
      date: "January 29, 2026",
      seoTag: "RTM billing therapy CPT 98975 98976 98980"
    },
    {
      id: 'post-12',
      title: "RTM vs. RPM: What's the Difference and Can You Bill Both for the Same Patient?",
      excerpt: "RTM and RPM are often confused — but they're distinct programs with distinct codes, distinct data requirements, and distinct payer coverage rules. Here's the full comparison, including when CMS allows stacking.",
      readTime: "6 min",
      category: "RTM & RPM",
      date: "January 15, 2026",
      seoTag: "RTM vs RPM billing difference"
    }
  ];

  // Categories list
  const categories = [
    'All', 'AI & Automation', 'Denial Management', 'Compliance', 'Specialty Billing', 'Industry News', 'RTM & RPM'
  ];

  // Helper colors for category chips
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'AI & Automation':
        return 'bg-teal/10 text-teal border-teal/20';
      case 'Denial Management':
        return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      case 'Compliance':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'Specialty Billing':
        return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      case 'Industry News':
        return 'bg-neutral-500/10 text-neutral-600 border-neutral-500/20';
      case 'RTM & RPM':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      default:
        return 'bg-neutral-100 text-neutral-650 border-neutral-205';
    }
  };

  // Filter strategy
  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory === 'All') return true;
    return post.category === selectedCategory;
  });

  // Handle newsletter subscription demo
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterState.firstName.trim() && newsletterState.email.trim() && newsletterState.practiceType) {
      setNewsletterState(prev => ({ ...prev, success: true }));
    }
  };

  // Load more interaction
  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setLoadMoreCount(prev => prev + 6);
      setLoadingMore(false);
    }, 700);
  };

  // Specialty Cards (Section 7)
  const specialtyCards = [
    {
      title: 'Orthopedics',
      tags: ['Global periods', 'Bilateral modifiers', 'Hardware implants', 'Surgical auth'],
      path: '/specialties/orthopedics',
      desc: 'High-complexity surgical coding audits, global period checks, and bilateral mapping rules.'
    },
    {
      title: 'Pain Management',
      tags: ['Add-on CPT auth', 'Fluoroscopic guidance', 'Procedure bundling'],
      path: '/specialties/pain-management',
      desc: 'Prior authorization tracking, fluoroscopic guidance payer guidelines, and medical necessity audits.'
    },
    {
      title: 'Anesthesia',
      tags: ['Time units', 'CRNA modifiers', 'Cross-walk codes'],
      path: '/specialties/anesthesia',
      desc: 'Accurate time-unit conversion, CRNA modifiers, and concurrency tracking policies.'
    },
    {
      title: 'Comprehensive Therapy',
      tags: ['8-minute rule', 'G-codes', 'KX modifier', 'RTM billing'],
      path: '/specialties/therapy',
      desc: 'Therapy threshold monitoring, Medicare G-code intervals, and functional documentation protocols.'
    },
    {
      title: 'Chiropractic & Rehab',
      tags: ['Active vs. maintenance care', 'Medicare ABN', 'Spinal manipulation codes'],
      path: '#assessment',
      desc: 'Clinical necessity validation, active recovery modifiers, and routine maintenance billing guidelines.'
    },
    {
      title: 'Multi-Specialty',
      tags: ['Coordination across specialties', 'Payer mix complexity', 'Shared billing infrastructure'],
      path: '#assessment',
      desc: 'Unified workflow configurations, segmented coding queues, and multi-location aggregation.'
    }
  ];

  const authors = [
    {
      initials: 'SR',
      role: 'Senior RCM Analyst',
      credential: 'AAPC-Certified Professional Coder (CPC)',
      focus: 'Orthopedics & Pain Management billing, 9 years',
      postCount: '12 posts'
    },
    {
      initials: 'MB',
      role: 'Certified Professional Coder',
      credential: 'CPC (AAPC)',
      focus: 'Anesthesia & Multi-Specialty billing, 11 years',
      postCount: '8 posts'
    },
    {
      initials: 'JK',
      role: 'Denial Management Specialist',
      credential: 'AAPC-Certified Coder (CPC / CPMA)',
      focus: 'Comprehensive Therapy & RTM compliance, 7 years',
      postCount: '6 posts'
    }
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans select-text text-left">
      
      {/* SECTION 1 — HERO (Dark Navy) */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden py-24 lg:py-32 flex items-center border-b border-white/5">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 grid-noise opacity-[0.05] pointer-events-none" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-[0.22em] text-teal font-bold mb-4 block select-none">
              Blog &amp; Insights
            </span>
            <div className="h-[1px] w-12 bg-teal/50 mb-7" />
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.10] tracking-tight text-white mb-6">
              Revenue Cycle Intelligence — From the People Who Do the Work.
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl leading-relaxed mb-8 font-sans">
              Practical guidance on AI automation, denial management, specialty billing compliance, and the business of running a healthcare practice. Written by RCM professionals, not content agencies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#newsletter"
                onClick={(e) => handleLinkClick(e, '#newsletter')}
                className="rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow text-center inline-flex items-center justify-center gap-2 select-none"
              >
                Subscribe for New Insights →
              </a>
              <a
                href="#filters"
                onClick={(e) => handleLinkClick(e, '#filters')}
                className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-bold text-sm tracking-wide transition-all active:scale-98 text-center select-none cursor-pointer"
              >
                Browse All Posts
              </a>
            </div>

            {/* Trust micro-copy */}
            <div className="text-white/45 text-[11px] font-mono flex flex-wrap items-center gap-x-4 gap-y-2 pt-8 select-none">
              <span>⚡ Updated regularly</span>
              <span>•</span>
              <span>Written by AAPC-certified billing professionals</span>
              <span>•</span>
              <span className="text-teal-light font-semibold">No paywalls</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FEATURED POST (White — full-width card) */}
      <section className="bg-white py-16 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 select-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-550/10 border border-teal/20 text-teal-dark font-mono text-[10px] font-bold uppercase tracking-wider rounded">
              ⭐ Featured Article
            </span>
          </div>

          {/* Full-width elegant card */}
          <div className="bg-neutral-50 rounded-3xl border border-neutral-200/80 overflow-hidden shadow-xs hover:border-teal/30 hover:shadow-md transition-all group duration-300">
            <div className="grid lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Abstract Data Visualization Representation */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#061C33] to-[#0D2E55] p-8 md:p-12 relative flex flex-col justify-between overflow-hidden min-h-[280px]">
                {/* Visual patterns */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-10 right-10 size-48 rounded-full bg-teal/5 blur-2xl pointer-events-none" />
                
                {/* Mini abstract chart graphics to match 'data-visualization style' constraint */}
                <div className="relative space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-teal font-extrabold select-none">RCM Claim Flow Logic</span>
                    <h4 className="text-white font-mono text-sm font-semibold">PRE-SUBMISSION VERIFICATION</h4>
                  </div>
                  <div className="flex gap-1.5 items-end h-20 pt-4 max-w-xs">
                    <div className="w-1/6 bg-teal/10 rounded-t h-[40%]" />
                    <div className="w-1/6 bg-teal/20 rounded-t h-[60%]" />
                    <div className="w-1/6 bg-teal/30 rounded-t h-[50%]" />
                    <div className="w-1/6 bg-teal/40 rounded-t h-[75%]" />
                    <div className="w-1/6 bg-teal/60 rounded-t h-[90%] relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-teal animate-ping" />
                    </div>
                    <div className="w-1/6 bg-teal rounded-t h-[100%]" />
                  </div>
                </div>

                <div className="relative font-mono text-[10px] text-white/55 space-y-1 select-none pt-8">
                  <div>[CORE_MODEL_ON_LINE_POST_1]</div>
                  <div>VERIFY_LCD_CODE_99.8%</div>
                </div>
              </div>

              {/* Right Column: Editorial & Excerpt details */}
              <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                    <span className="bg-teal/10 text-teal border border-teal/25 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider">
                      AI &amp; Automation
                    </span>
                    <span className="text-neutral-400 font-mono text-[10px] flex items-center gap-1">
                      <Clock className="size-3" /> 7 min read
                    </span>
                    <span className="text-neutral-400 font-mono text-[10px]">
                      • May 15, 2026
                    </span>
                  </div>

                  <h3 className="font-display font-medium text-navy text-2xl md:text-3.5xl tracking-tight leading-tight mb-4 group-hover:text-teal transition-colors">
                    How AI Is Transforming Revenue Cycle Management in Healthcare
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed mb-6 max-w-2xl">
                    AI is changing how claims move, how denials are caught, and how practices understand their own revenue data. Here&apos;s what&apos;s real, what&apos;s overhyped, and what RCM-specific automation actually looks like in practice — from eligibility verification to denial pattern analysis.
                  </p>
                </div>

                <div>
                  <a
                    href="#post-detail"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCategory('AI & Automation');
                      const gridEl = document.getElementById('filters');
                      if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-navy transition-colors select-none"
                  >
                    Read Article <ArrowRight className="size-3.5" />
                  </a>
                  <div className="text-[10px] font-mono text-neutral-400 mt-3 italic">
                    Focus: AI Revenue Cycle Management Healthcare (SEO Analysis)
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — FILTER BAR (White — sticky on scroll starting at 72px) */}
      <section id="filters" className="sticky top-[72px] z-30 bg-white border-b border-neutral-200/80 shadow-xs py-5 select-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="shrink-0 flex items-center gap-2">
              <Filter className="size-4 text-teal" />
              <span className="text-xs font-bold text-navy uppercase tracking-wider">
                Filter by Category
              </span>
            </div>

            {/* Horizontally scrollable chip strip on mobile */}
            <div className="flex flex-wrap md:justify-end gap-1.5 overflow-x-auto scrollbar-none py-0.5 max-w-5xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    // Reset pagination view when filter changes
                    setLoadMoreCount(6);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-teal border-teal text-navy shadow-xs'
                      : 'border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-navy'
                  }`}
                >
                  {cat === 'All' ? 'All Posts' : cat}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — POST GRID (White) */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.slice(0, loadMoreCount).map((post, postIdx) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl border border-neutral-200/80 p-6 flex flex-col justify-between hover:border-teal/20 hover:shadow-md transition-all duration-300 relative group"
                >
                  <div>
                    {/* Top Meta info */}
                    <div className="flex items-center justify-between gap-4 mb-4 select-none">
                      <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider border ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      
                      <div className="flex items-center gap-2 text-[10px] text-neutral-400 font-mono">
                        <span className="flex items-center gap-0.5"><Clock className="size-3" /> {post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-[15px] font-bold text-navy leading-snug mb-2 group-hover:text-teal transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-neutral-500 leading-relaxed font-sans mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {post.seoTag && (
                      <div className="text-[9px] font-mono text-neutral-400 mb-2 truncate italic">
                        SEO: {post.seoTag}
                      </div>
                    )}
                    
                    <button
                      onClick={() => {
                        // Smooth scroll to contact for direct consultation details
                        const element = document.getElementById('newsletter');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal group-hover:gap-2 transition-all cursor-pointer"
                    >
                      Read More <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* SECTION 5 — LOAD MORE */}
          {filteredPosts.length > loadMoreCount && (
            <div className="mt-12 text-center select-none">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="rounded-full border border-teal text-navy hover:bg-neutral-50 font-bold text-xs px-8 py-3.5 tracking-wider transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                {loadingMore ? (
                  <>
                    <Activity className="size-3.5 animate-spin" /> Loading more insights...
                  </>
                ) : (
                  <>
                    Load More Insights <ArrowRight className="size-3.5" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </section>

      {/* SECTION 6 — NEWSLETTER SIGNUP (Light blue tint) */}
      <section id="newsletter" className="bg-[#FAFBFD] py-20 border-y border-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1 text-[10px] font-bold font-mono text-[#185FA5] mb-4 uppercase tracking-widest select-none">
              <Inbox className="size-3" /> Stay Current
            </span>
            <h2 className="font-display text-2.5xl sm:text-4xl text-navy font-bold leading-tight">
              RCM Insights Delivered to Your Inbox
            </h2>
            <p className="mt-3 text-xs md:text-sm text-neutral-500 font-sans leading-relaxed">
              New posts on AI automation, denial management, specialty billing compliance, and industry updates — sent when published, not on a schedule. No fluff, no filler.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-3xl border border-neutral-200/75 p-6 md:p-10 shadow-xs max-w-3xl mx-auto">
            {newsletterState.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4 py-6"
              >
                <div className="size-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto">
                  <CheckCircle className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg">Thank connection, {newsletterState.firstName}!</h3>
                  <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto leading-relaxed">
                    You have successfully subscribed to <strong>Clientele RCM Insights</strong>. We will directly notify your mailbox at <strong>{newsletterState.email}</strong> when we publish new clinical billing guides.
                  </p>
                </div>
                <button
                  onClick={() => setNewsletterState({ firstName: '', email: '', practiceType: '', success: false })}
                  className="text-xs text-teal underline hover:text-navy cursor-pointer"
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  
                  {/* First Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-neutral-400 font-bold flex items-center gap-1">First Name <span className="text-teal">*</span></label>
                    <input
                      required
                      type="text"
                      placeholder="Jane"
                      value={newsletterState.firstName}
                      onChange={(e) => setNewsletterState(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full text-xs font-sans px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-teal focus:bg-white focus:outline-none transition-all text-navy font-semibold"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-neutral-400 font-bold flex items-center gap-1">Email address <span className="text-teal">*</span></label>
                    <input
                      required
                      type="email"
                      placeholder="jane@orthopractice.com"
                      value={newsletterState.email}
                      onChange={(e) => setNewsletterState(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full text-xs font-sans px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-teal focus:bg-white focus:outline-none transition-all text-navy font-semibold"
                    />
                  </div>

                  {/* Practice Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase text-neutral-400 font-bold flex items-center gap-1">Practice Type <span className="text-teal">*</span></label>
                    <select
                      required
                      value={newsletterState.practiceType}
                      onChange={(e) => setNewsletterState(prev => ({ ...prev, practiceType: e.target.value }))}
                      className="w-full text-xs font-sans px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:border-teal focus:bg-white focus:outline-none transition-all text-navy font-semibold cursor-pointer"
                    >
                      <option value="" disabled>Select Specialty...</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Pain Management">Pain Management</option>
                      <option value="Anesthesia">Anesthesia</option>
                      <option value="Therapy (PT/OT/ST)">Therapy (PT/OT/ST)</option>
                      <option value="Chiropractic & Rehab">Chiropractic & Rehab</option>
                      <option value="Multi-Specialty">Multi-Specialty</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                </div>

                <div className="flex md:justify-end select-none">
                  <button
                    type="submit"
                    className="w-full md:w-auto rounded-full bg-teal text-navy px-8 py-3.5 font-bold text-xs uppercase tracking-wider hover:bg-teal-glow transition-all active:scale-98 cursor-pointer shadow-glow flex items-center justify-center gap-2"
                  >
                    Subscribe <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </form>
            )}

            {/* Micro-copy below */}
            <div className="text-[10px] text-neutral-400 font-mono italic mt-4 select-none">
              🔒 No spam. Unsubscribe anytime. We publish when we have something worth saying.
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7 — TOPICS BY SPECIALTY (White) */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-16 text-left">
            <span className="text-xs uppercase tracking-[0.2em] text-teal font-bold block select-none mb-3">
              Browse by Specialty
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Find Insights for Your Practice Type
            </h2>
            <p className="mt-3 text-xs md:text-sm text-neutral-500 font-sans leading-relaxed">
              Every specialty has its own billing complexity. Browse posts relevant to yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-50 rounded-2xl border border-neutral-200/60 p-6 md:p-8 hover:border-teal/30 hover:shadow-md transition-all flex flex-col justify-between text-left"
              >
                <div>
                  <h3 className="font-display font-bold text-navy text-base md:text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans mb-6">
                    {card.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {card.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className="bg-neutral-200/50 text-neutral-600 border border-neutral-300/40 px-2.5 py-0.5 rounded-md text-[10px] font-sans font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={card.path}
                    onClick={(e) => {
                      if (card.path.startsWith('#')) {
                        handleLinkClick(e, card.path);
                      } else {
                        handleLinkClick(e, card.path);
                      }
                    }}
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal hover:text-navy transition-colors select-none"
                  >
                    Browse Posts <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 8 — ABOUT THE AUTHORS (Light warm gray) */}
      <section className="bg-neutral-100 py-20 lg:py-24 text-left border-y border-neutral-200/40">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest block select-none mb-3">
              Who Writes This
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy font-bold leading-tight">
              Written by the People Who Actually Do the Billing
            </h2>
            <p className="mt-3 text-xs md:text-sm text-neutral-500 leading-relaxed font-sans">
              Every post on this site is written or reviewed by AAPC-certified billing professionals with 5–12 years of specialty-specific RCM experience. Not by content agencies. Not by AI without review. By the same team that handles your claims.
            </p>
          </div>

          {/* Author Profile Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {authors.map((author, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-neutral-200/50 p-6 flex items-start gap-4 hover:shadow-md transition-shadow font-sans"
              >
                {/* Initials Avatar */}
                <div className="size-12 rounded-full bg-teal text-white font-mono font-bold text-sm flex items-center justify-center shrink-0 select-none">
                  {author.initials}
                </div>
                
                <div className="space-y-1">
                  <div className="font-bold text-navy text-xs sm:text-sm">
                    {author.role}
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-teal font-extrabold select-none">
                    {author.credential}
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed font-sans pt-1">
                    {author.focus}
                  </p>
                  <div className="pt-2 text-[10px] font-mono text-neutral-400">
                    📚 {author.postCount}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 select-none">
            <p className="text-[10px] font-mono text-neutral-400 italic">
              Note to client: Profile initials can be replaced with verified credentials and team metrics pre-launch.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 9 — FOOTER CTA BAND (Dark Navy) */}
      <section className="bg-[#0A1628] text-white py-20 lg:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 mesh-glow opacity-80 pointer-events-none" />
        <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-4 text-white">
            Insights Are Free. Results Require a Conversation.
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8 font-sans text-xs sm:text-sm leading-relaxed">
            If something you read here applies to your practice — a denial pattern you recognize, a billing rule you weren&apos;t aware of, a compliance gap that sounds familiar — let&apos;s talk. The first audit is free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                document.getElementById('app-header')?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => navigate('/'), 100);
                setTimeout(() => {
                  document.getElementById('assessment')?.scrollIntoView({ behavior: 'smooth' });
                }, 200);
              }}
              className="w-full sm:w-auto rounded-full bg-teal text-navy px-8 py-4 font-bold text-sm tracking-wide hover:bg-teal-glow transition-all shadow-glow select-none cursor-pointer"
            >
              Request Your Free RCM Audit →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
