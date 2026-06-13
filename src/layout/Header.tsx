import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export default function Header({ currentPath, navigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (to.startsWith('#')) {
      if (currentPath !== '/') {
        navigate('/');
        // Wait for page to switch then scroll
        setTimeout(() => {
          const el = document.getElementById(to.substring(1));
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(to.substring(1));
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(to);
    }
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-navy-deep text-white/80 text-xs py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center gap-6">
          <a href="tel:+18102210709" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="size-3.5 text-teal" />
            +1 810-221-0709
          </a>
          <span className="text-white/20">|</span>
          <a href="mailto:info@clientelercm.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="size-3.5 text-teal" />
            info@clientelercm.com
          </a>
        </div>
      </div>

      {/* Sticky Header Nav */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-navy/5 py-3'
            : 'bg-background py-4'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2 shrink-0 group"
            id="logo-brand"
          >
            <div className="size-9 rounded-lg bg-navy flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="size-4 rounded-sm bg-teal"></div>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg text-navy">Clientele</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground -mt-0.5">RCM</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="/platform"
              onClick={(e) => handleLinkClick(e, '/platform')}
              className={`text-sm font-medium transition-colors py-2 ${
                currentPath === '/platform'
                  ? 'text-navy font-semibold border-b-2 border-teal'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              Platform
            </a>

            <a
              href="/clientele-plus"
              onClick={(e) => handleLinkClick(e, '/clientele-plus')}
              className={`text-sm font-medium transition-colors py-2 flex items-center gap-1.5 ${
                currentPath === '/clientele-plus'
                  ? 'text-navy font-semibold border-b-2 border-teal'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              <Sparkles className="size-3.5 text-[#F56A00]" /> Clientele Plus
            </a>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 cursor-pointer">
                Services
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="min-w-[260px] rounded-xl bg-background border border-border shadow-card p-2">
                  {[
                    { name: 'Services Overview', path: '/services' },
                    { name: 'Front-End RCM', path: '/services/front-end' },
                    { name: 'Mid-Cycle Intelligence', path: '/services/mid-cycle' },
                    { name: 'Back-End & A/R Recovery', path: '/services/back-end' },
                    { name: 'Remote Patient Monitoring (RPM)', path: '/services/rpm' },
                    { name: 'Remote Therapeutic Monitoring (RTM)', path: '/services/rtm' },
                  ].map((srv) => (
                    <a
                      key={srv.name}
                      href={srv.path}
                      className="block px-3 py-2 text-sm rounded-md hover:bg-neutral-50 text-foreground/80 hover:text-foreground transition-colors"
                      onClick={(e) => handleLinkClick(e, srv.path)}
                    >
                      {srv.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Specialties Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 cursor-pointer ${
                  currentPath.startsWith('/specialties')
                    ? 'text-navy font-semibold border-b-2 border-teal'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                Specialties
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="min-w-[280px] rounded-xl bg-background border border-border shadow-card p-2 text-left">
                  {[
                    { name: 'Specialties Overview', path: '/specialties' },
                    { name: 'Orthopedics', path: '/specialties/orthopedics' },
                    { name: 'Pain Management', path: '/specialties/pain-management' },
                    { name: 'Anesthesia', path: '/specialties/anesthesia' },
                    { name: 'Comprehensive Therapy (PT / OT / ST)', path: '/specialties/therapy' },
                    { name: 'Chiropractic & Rehabilitation', path: '/specialties/chiropractic' },
                    { name: 'Multispecialties', path: '/specialties' },
                  ].map((spec) => (
                    <a
                      key={spec.name}
                      href={spec.path}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        currentPath === spec.path
                          ? 'text-teal font-semibold bg-neutral-50/50'
                          : 'text-foreground/80 hover:text-foreground hover:bg-neutral-50'
                      }`}
                      onClick={(e) => handleLinkClick(e, spec.path)}
                    >
                      {spec.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/about"
              onClick={(e) => handleLinkClick(e, '/about')}
              className={`text-sm font-medium transition-colors py-2 ${
                currentPath === '/about'
                  ? 'text-navy font-semibold border-b-2 border-teal'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              About
            </a>

            <a
              href="/why-clientele"
              onClick={(e) => handleLinkClick(e, '/why-clientele')}
              className={`text-sm font-medium transition-colors py-2 ${
                currentPath === '/why-clientele'
                  ? 'text-navy font-semibold border-b-2 border-teal'
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              Why Clientele
            </a>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 cursor-pointer">
                Resources
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="min-w-[240px] rounded-xl bg-background border border-border shadow-card p-2">
                  {[
                    { name: 'Case Studies', path: '/case-studies' },
                    { name: 'Blog & Insights', path: '/insights' },
                    { name: 'Compliance & Security', path: '/compliance' },
                    { name: 'Transition & Onboarding', path: '/transition' },
                  ].map((res) => (
                    <a
                      key={res.name}
                      href={res.path}
                      className={`block px-3 py-2 text-sm rounded-md hover:bg-neutral-50 transition-colors ${
                        currentPath === res.path
                          ? 'text-teal font-semibold bg-neutral-50/50'
                          : 'text-foreground/80 hover:text-foreground'
                      }`}
                      onClick={(e) => {
                        if (res.path === '#') {
                          e.preventDefault();
                        } else {
                          handleLinkClick(e, res.path);
                        }
                      }}
                    >
                      {res.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:translate-x-0.5 shadow-sm active:scale-98 cursor-pointer ${
                  currentPath === '/contact'
                    ? 'bg-teal text-navy hover:bg-teal-glow ring-2 ring-teal/35 shadow-glow'
                    : 'bg-navy text-white hover:bg-navy-deep'
                }`}
              >
                Request Assessment →
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-navy hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-lg p-6 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-5">
              <a
                href="/platform"
                onClick={(e) => handleLinkClick(e, '/platform')}
                className={`text-base font-semibold py-1 border-b border-neutral-50 ${
                  currentPath === '/platform' ? 'text-teal font-bold' : 'text-navy'
                }`}
              >
                Platform
              </a>

              <a
                href="/clientele-plus"
                onClick={(e) => handleLinkClick(e, '/clientele-plus')}
                className={`text-base font-semibold py-1 border-b border-neutral-50 flex items-center gap-1.5 ${
                  currentPath === '/clientele-plus' ? 'text-teal font-bold' : 'text-navy font-semibold'
                }`}
              >
                <Sparkles className="size-4 text-[#F56A00]" /> Clientele Plus
              </a>

              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Services</div>
                {[
                  { name: 'Services Overview', path: '/services' },
                  { name: 'Front-End RCM', path: '/services/front-end' },
                  { name: 'Mid-Cycle Intelligence', path: '/services/mid-cycle' },
                  { name: 'Back-End & A/R Recovery', path: '/services/back-end' },
                  { name: 'Remote Patient Monitoring (RPM)', path: '/services/rpm' },
                  { name: 'Remote Therapeutic Monitoring (RTM)', path: '/services/rtm' },
                ].map((srv) => (
                  <a
                    key={srv.name}
                    href={srv.path}
                    className="text-sm font-medium pl-3 py-1 text-neutral-600 block hover:text-teal transition-colors"
                    onClick={(e) => handleLinkClick(e, srv.path)}
                  >
                    {srv.name}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Specialties</div>
                {[
                  { name: 'Specialties Overview', path: '/specialties' },
                  { name: 'Orthopedics', path: '/specialties/orthopedics' },
                  { name: 'Pain Management', path: '/specialties/pain-management' },
                  { name: 'Anesthesia', path: '/specialties/anesthesia' },
                  { name: 'Comprehensive Therapy (PT / OT / ST)', path: '/specialties/therapy' },
                  { name: 'Chiropractic & Rehabilitation', path: '/specialties/chiropractic' },
                  { name: 'Multispecialties', path: '/specialties' },
                ].map((spec) => (
                  <a
                    key={spec.name}
                    href={spec.path}
                    className={`text-sm font-medium pl-3 py-1 block transition-colors ${
                      currentPath === spec.path ? 'text-teal font-bold' : 'text-neutral-600 hover:text-teal'
                    }`}
                    onClick={(e) => handleLinkClick(e, spec.path)}
                  >
                    {spec.name}
                  </a>
                ))}
              </div>

              <a
                href="/about"
                onClick={(e) => handleLinkClick(e, '/about')}
                className={`text-base font-semibold py-1 border-b border-neutral-50 ${
                  currentPath === '/about' ? 'text-teal font-bold' : 'text-navy'
                }`}
              >
                About
              </a>

              <a
                href="/why-clientele"
                onClick={(e) => handleLinkClick(e, '/why-clientele')}
                className={`text-base font-semibold py-1 border-b border-neutral-50 ${
                  currentPath === '/why-clientele' ? 'text-teal font-bold' : 'text-navy'
                }`}
              >
                Why Clientele
              </a>

              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Resources</div>
                {[
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Blog & Insights', path: '/insights' },
                  { name: 'Compliance & Security', path: '/compliance' },
                  { name: 'Transition & Onboarding', path: '/transition' }
                ].map((res) => (
                  <a
                    key={res.name}
                    href={res.path}
                    className={`text-sm font-medium pl-3 py-1 block transition-colors ${
                      currentPath === res.path ? 'text-teal font-bold' : 'text-neutral-600 hover:text-teal'
                    }`}
                    onClick={(e) => {
                      if (res.path === '#') {
                        e.preventDefault();
                      } else {
                        handleLinkClick(e, res.path);
                      }
                    }}
                  >
                    {res.name}
                  </a>
                ))}
              </div>

              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className={`mt-2 w-full text-center py-3 rounded-full font-bold shadow-sm transition-all h-12 flex items-center justify-center cursor-pointer ${
                  currentPath === '/contact'
                    ? 'bg-teal text-navy hover:bg-teal-glow'
                    : 'bg-navy text-white hover:bg-navy-deep'
                }`}
              >
                Request Free Assessment
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
