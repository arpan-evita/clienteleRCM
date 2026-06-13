import React from 'react';
import { Phone, Mail, MapPin, Award, CheckCircle, Shield, Lock, Globe, Sparkles } from 'lucide-react';

interface FooterProps {
  navigate: (path: string) => void;
}

export default function Footer({ navigate }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const el = document.getElementById(path.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(path.substring(1))?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-navy-deep text-white/80 py-16 md:py-20 border-t border-white/5 relative selection:bg-teal selection:text-navy">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-left">
        {/* Column 1 — Logo + Tagline */}
        <div className="flex flex-col gap-5">
          <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="flex items-center gap-2 group">
            <div className="size-9 rounded-lg bg-navy flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="size-4 rounded-sm bg-teal"></div>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg text-white">Clientele</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 -mt-0.5">RCM</div>
            </div>
          </a>
          
          <div className="text-xs text-teal font-semibold tracking-wide uppercase">
            Where AI Meets Revenue Integrity
          </div>
          
          <p className="text-xs md:text-sm text-white/60 leading-relaxed max-w-sm">
            Specialty RCM powered by Clientele AI — built for Orthopedics, Pain Management, Anesthesia, Comprehensive Therapy, and Chiropractic practices across 7 states.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-white mb-5 uppercase text-xs tracking-wider">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" onClick={(e) => handleLinkClick(e, '/')} className="text-white/70 hover:text-teal transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="text-white/70 hover:text-teal transition-colors">
                About Clientele RCM
              </a>
            </li>
            <li>
              <a href="/platform" onClick={(e) => handleLinkClick(e, '/platform')} className="text-white/70 hover:text-teal transition-colors">
                Clientele AI Platform
              </a>
            </li>
            <li>
              <a href="/clientele-plus" onClick={(e) => handleLinkClick(e, '/clientele-plus')} className="text-white/70 hover:text-teal transition-colors flex items-center gap-1">
                <Sparkles className="size-3.5 text-[#F56A00]" /> Clientele Plus Suite
              </a>
            </li>
            <li>
              <a href="/why-clientele" onClick={(e) => handleLinkClick(e, '/why-clientele')} className="text-white/70 hover:text-teal transition-colors">
                Why Clientele
              </a>
            </li>
            <li>
              <a href="#why" onClick={(e) => handleLinkClick(e, '#why')} className="text-white/70 hover:text-teal transition-colors">
                Who We Serve
              </a>
            </li>
            <li>
              <a href="/transition" onClick={(e) => handleLinkClick(e, '/transition')} className="text-white/70 hover:text-teal transition-colors">
                Transition & Onboarding
              </a>
            </li>
            <li>
              <a href="/case-studies" onClick={(e) => handleLinkClick(e, '/case-studies')} className="text-white/70 hover:text-teal transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/insights" onClick={(e) => handleLinkClick(e, '/insights')} className="text-white/70 hover:text-teal transition-colors">
                Blog &amp; Insights
              </a>
            </li>
            <li>
              <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')} className="text-white/70 hover:text-teal transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Our Services */}
        <div>
          <h4 className="font-display font-semibold text-white mb-5 uppercase text-xs tracking-wider">Our Services</h4>
          <ul className="space-y-3 text-sm">
            {[
              { name: 'Services Overview', link: '/services' },
              { name: 'Front-End RCM', link: '/services/front-end' },
              { name: 'Mid-Cycle Intelligence', link: '/services/mid-cycle' },
              { name: 'Back-End & A/R Recovery', link: '/services/back-end' },
              { name: 'Remote Patient Monitoring (RPM)', link: '/services/rpm' },
              { name: 'Remote Therapeutic Monitoring (RTM)', link: '/services/rtm' },
              { name: 'Compliance & Security', link: '/compliance' }
            ].map((item, idx) => (
              <li key={idx}>
                <a 
                  href={item.link} 
                  onClick={(e) => handleLinkClick(e, item.link)} 
                  className="text-white/70 hover:text-teal transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact */}
        <div>
          <h4 className="font-display font-semibold text-white mb-5 uppercase text-xs tracking-wider">Contact & Locations</h4>
          <ul className="space-y-4 text-xs md:text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="size-4.5 text-teal shrink-0 mt-0.5" />
              <span>
                <strong className="text-white text-xs block">Norwalk, CT Office</strong>
                Norwalk, CT 06850 — USA
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Globe className="size-4.5 text-teal shrink-0 mt-0.5" />
              <span>
                <strong className="text-white text-xs block">Global Delivery Center</strong>
                Bangalore, Karnataka 560068 — India
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="size-4.5 text-teal shrink-0 mt-0.5" />
              <span>
                <strong className="text-white text-xs block">Phone</strong>
                <a href="tel:+18102210709" className="hover:text-white transition-colors block font-semibold text-white">
                  +1 810-221-0709
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4.5 text-teal shrink-0 mt-0.5" />
              <span>
                <strong className="text-white text-xs block">Email</strong>
                <a href="mailto:info@clientelercm.com" className="hover:text-white transition-colors block font-semibold text-white">
                  info@clientelercm.com
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Trust Badges Row (very bottom, centered) */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Shield className="size-3.5 text-teal" />
              <span className="font-semibold text-white">HIPAA Certified Badge</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Award className="size-3.5 text-teal" />
              <span className="font-semibold text-white">HBMA Member Logo</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Lock className="size-3.5 text-teal" />
              <span className="font-semibold text-white">SOC2 In Progress Badge</span>
            </div>
          </div>
          <div className="flex gap-4 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">HIPAA BAA</a>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 select-none">
          <div>
            © 2026 Clientele RCM. All Rights Reserved. Not to be confused with general medical services.
          </div>
        </div>
      </div>
    </footer>
  );
}
