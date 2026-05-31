import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Calendar as CalendarIcon, 
  User, 
  Building,
  Check,
  AlertCircle
} from 'lucide-react';

interface ContactProps {
  navigate: (path: string) => void;
}

export default function Contact({ navigate }: ContactProps) {
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

  // State for Form 1: RCM Assessment Contact
  const [assessmentForm, setAssessmentForm] = useState({
    fullName: '',
    practiceName: '',
    email: '',
    phone: '',
    specialty: '',
    providersCount: '',
    rcmSituation: '',
    primaryConcern: '',
    message: ''
  });
  
  const [assessmentErrors, setAssessmentErrors] = useState<Record<string, string>>({});
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  // State for Form 2: General Inquiry
  const [generalForm, setGeneralForm] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [generalErrors, setGeneralErrors] = useState<Record<string, string>>({});
  const [generalSubmitted, setGeneralSubmitted] = useState(false);

  // Interactive Calendar State
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingEmail, setBookingEmail] = useState<string>('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingError, setBookingError] = useState<string>('');

  // Validate and Submit Form 1 (Assessment)
  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!assessmentForm.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!assessmentForm.practiceName.trim()) errors.practiceName = 'Practice / Organization Name is required';
    if (!assessmentForm.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(assessmentForm.email)) {
      errors.email = 'Invalid email address format';
    }
    if (!assessmentForm.specialty) errors.specialty = 'Please select a Specialty';
    if (!assessmentForm.providersCount) errors.providersCount = 'Please select provider size';
    if (!assessmentForm.rcmSituation) errors.rcmSituation = 'Please select your current RCM situation';
    if (!assessmentForm.primaryConcern) errors.primaryConcern = 'Please select your primary concern';

    if (Object.keys(errors).length > 0) {
      setAssessmentErrors(errors);
      // Scroll to the first error
      const firstErrorKey = Object.keys(errors)[0];
      const el = document.getElementsByName(firstErrorKey)[0];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      setAssessmentErrors({});
      setAssessmentSubmitted(true);
    }
  };

  // Validate and Submit Form 2 (General)
  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!generalForm.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!generalForm.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(generalForm.email)) {
      errors.email = 'Invalid email address format';
    }
    if (!generalForm.inquiryType) errors.inquiryType = 'Please select inquiry type';
    if (!generalForm.message.trim()) errors.message = 'Message details are required';

    if (Object.keys(errors).length > 0) {
      setGeneralErrors(errors);
    } else {
      setGeneralErrors({});
      setGeneralSubmitted(true);
    }
  };

  // Interactive Scheduler Options
  const dates = [
    { dayName: 'Mon', dayNum: '01', dateStr: '2026-06-01', fullDate: 'Mon, June 1, 2026' },
    { dayName: 'Tue', dayNum: '02', dateStr: '2026-06-02', fullDate: 'Tue, June 2, 2026' },
    { dayName: 'Wed', dayNum: '03', dateStr: '2026-06-03', fullDate: 'Wed, June 3, 2026' },
    { dayName: 'Thu', dayNum: '04', dateStr: '2026-06-04', fullDate: 'Thu, June 4, 2026' },
    { dayName: 'Fri', dayNum: '05', dateStr: '2026-06-05', fullDate: 'Fri, June 5, 2026' },
  ];

  const timeSlots = [
    '09:00 AM', '09:45 AM', '10:30 AM', '11:15 AM',
    '01:00 PM', '01:45 PM', '02:30 PM', '03:15 PM', '04:00 PM'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setBookingError('Please select both a date and a time slot first.');
      return;
    }
    if (!bookingName.trim() || !bookingEmail.trim()) {
      setBookingError('Please provide your name and email address.');
      return;
    }
    setBookingError('');
    setBookingConfirmed(true);
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden font-sans text-left">
      
      {/* SECTION 1: HERO (Compact) - Dark Navy Background */}
      <section className="relative bg-[#0A1628] text-white pt-20 pb-16 lg:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06172a] via-[#0A1628] to-[#122c4d] opacity-90" />
        <div className="absolute inset-0 grid-noise opacity-[0.04] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-[0.24em] text-teal font-extrabold mb-3 select-none">
              Start Your Evaluation
            </span>
            <div className="h-[1px] w-12 bg-teal/40 mb-6" />

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight text-white mb-5 max-w-3xl">
              Let&apos;s Look at Your Revenue Together.
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-white/70 max-w-2xl leading-relaxed mb-8">
              A free RCM assessment costs you nothing. We&apos;ll audit your denial patterns, payer mix, and billing workflows — and tell you honestly what we find.
            </p>

            {/* Trust bar (4 items) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-2"
            >
              <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 bg-white/[0.03] border border-white/10 px-6 py-3 rounded-2xl text-[11px] sm:text-xs font-mono text-white/80 select-none">
                <span className="flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-teal" /> HIPAA Certified</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1.5"><Check className="size-3.5 text-teal" /> HBMA Member</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1.5"><Check className="size-3.5 text-teal" /> SOC2 In Progress</span>
                <span className="text-white/20">|</span>
                <span className="flex items-center gap-1.5 text-teal-light font-semibold"><Clock className="size-3.5" /> Response within 1 business day</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: DUAL FORM LAYOUT ("How Can We Help You?") */}
      <section className="bg-white py-16 md:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-xl mx-auto mb-16 select-none">
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
              How Can We Help You?
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-neutral-500 font-sans max-w-md mx-auto">
              Choose the path below that matches your current goal. We review and draft our analysis within 24 business hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column = Request RCM Assessment form */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Top Accent bar indicator */}
              <div className="h-[3px] w-full bg-teal rounded-t-lg select-none" style={{ backgroundColor: '#1C9E75' }} />
              
              <div className="space-y-2 mb-6">
                <h3 className="font-display font-bold text-navy text-xl sm:text-2xl">
                  Request a Free RCM Assessment
                </h3>
                <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                  For practices ready to discuss their revenue cycle. We&apos;ll respond within 1 business day to schedule your audit.
                </p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 sm:p-8">
                
                {assessmentSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="size-12 rounded-full bg-teal/15 text-[#1C9E75] flex items-center justify-center mx-auto">
                      <CheckCircle className="size-6 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-navy font-bold text-lg">Thank you!</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed font-sans max-w-md mx-auto">
                        Your free RCM assessment request was submitted successfully. Our specialty auditing specialists will review your metrics and contact you within <strong>1 business day</strong>.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setAssessmentForm({
                          fullName: '',
                          practiceName: '',
                          email: '',
                          phone: '',
                          specialty: '',
                          providersCount: '',
                          rcmSituation: '',
                          primaryConcern: '',
                          message: ''
                        });
                        setAssessmentSubmitted(false);
                      }}
                      className="text-xs text-teal font-medium hover:underline cursor-pointer"
                    >
                      Submit another assessment request
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleAssessmentSubmit} className="space-y-4 font-sans text-left">
                    
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-navy">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={assessmentForm.fullName}
                        onChange={(e) => setAssessmentForm({ ...assessmentForm, fullName: e.target.value })}
                        placeholder="Dr. Katherine Vance"
                        className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-teal transition-all text-navy ${
                          assessmentErrors.fullName ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {assessmentErrors.fullName && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                          <AlertCircle className="size-3" /> {assessmentErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Practice Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-navy">
                        Practice / Organization Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="practiceName"
                        value={assessmentForm.practiceName}
                        onChange={(e) => setAssessmentForm({ ...assessmentForm, practiceName: e.target.value })}
                        placeholder="Vance Orthopedic Group"
                        className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-teal transition-all text-navy ${
                          assessmentErrors.practiceName ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {assessmentErrors.practiceName && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                          <AlertCircle className="size-3" /> {assessmentErrors.practiceName}
                        </p>
                      )}
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-navy">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={assessmentForm.email}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, email: e.target.value })}
                          placeholder="kvance@vanceortho.com"
                          className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-teal transition-all text-navy ${
                            assessmentErrors.email ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                          }`}
                        />
                        {assessmentErrors.email && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                            <AlertCircle className="size-3" /> {assessmentErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-navy">
                          Phone Number <span className="text-neutral-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          value={assessmentForm.phone}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, phone: e.target.value })}
                          placeholder="+1 810-221-0709"
                          className="w-full text-xs font-sans px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-teal transition-all text-navy"
                        />
                      </div>
                    </div>

                    {/* Specialty & Providers Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Specialty dropdown */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-navy">
                          Specialty <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="specialty"
                          value={assessmentForm.specialty}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, specialty: e.target.value })}
                          className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-teal transition-all text-navy cursor-pointer ${
                            assessmentErrors.specialty ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                          }`}
                        >
                          <option value="" disabled>Select Specialty...</option>
                          <option value="Orthopedics">Orthopedics</option>
                          <option value="Pain Management">Pain Management</option>
                          <option value="Anesthesia">Anesthesia</option>
                          <option value="Therapy">Comprehensive Therapy (PT / OT / ST)</option>
                          <option value="Rehab">Chiropractic &amp; Rehabilitation</option>
                          <option value="Multi">Multi-Specialty</option>
                          <option value="Other">Other</option>
                        </select>
                        {assessmentErrors.specialty && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                            <AlertCircle className="size-3" /> {assessmentErrors.specialty}
                          </p>
                        )}
                      </div>

                      {/* Number of Providers dropdown */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-navy">
                          Number of Providers <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="providersCount"
                          value={assessmentForm.providersCount}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, providersCount: e.target.value })}
                          className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-teal transition-all text-navy cursor-pointer ${
                            assessmentErrors.providersCount ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                          }`}
                        >
                          <option value="" disabled>How many providers?</option>
                          <option value="1-3">1–3</option>
                          <option value="4-10">4–10</option>
                          <option value="11-25">11–25</option>
                          <option value="26+">26+</option>
                        </select>
                        {assessmentErrors.providersCount && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                            <AlertCircle className="size-3" /> {assessmentErrors.providersCount}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Situation & Concerns Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Current RCM Situation */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-navy">
                          Current RCM Situation <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="rcmSituation"
                          value={assessmentForm.rcmSituation}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, rcmSituation: e.target.value })}
                          className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-teal transition-all text-navy cursor-pointer ${
                            assessmentErrors.rcmSituation ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                          }`}
                        >
                          <option value="" disabled>Select billing type...</option>
                          <option value="inhouse">We handle billing in-house</option>
                          <option value="another">We use another billing company</option>
                          <option value="lost">We recently lost our biller</option>
                          <option value="new">We&apos;re a new practice</option>
                          <option value="other">Other</option>
                        </select>
                        {assessmentErrors.rcmSituation && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                            <AlertCircle className="size-3" /> {assessmentErrors.rcmSituation}
                          </p>
                        )}
                      </div>

                      {/* Primary Concern */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-navy">
                          Primary Concern <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="primaryConcern"
                          value={assessmentForm.primaryConcern}
                          onChange={(e) => setAssessmentForm({ ...assessmentForm, primaryConcern: e.target.value })}
                          className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-teal transition-all text-navy cursor-pointer ${
                            assessmentErrors.primaryConcern ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                          }`}
                        >
                          <option value="" disabled>Select primary concern...</option>
                          <option value="denials">High denial rate</option>
                          <option value="cashflow">Slow A/R / cash flow</option>
                          <option value="compliance">Compliance concerns</option>
                          <option value="turnover">Staff turnover</option>
                          <option value="growth">Looking to grow</option>
                          <option value="other">Other</option>
                        </select>
                        {assessmentErrors.primaryConcern && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                            <AlertCircle className="size-3" /> {assessmentErrors.primaryConcern}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-navy">
                        Additional notes <span className="text-neutral-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        rows={4}
                        value={assessmentForm.message}
                        onChange={(e) => setAssessmentForm({ ...assessmentForm, message: e.target.value })}
                        placeholder="Anything else we should know before the call?"
                        className="w-full text-xs font-sans px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-teal transition-all text-navy"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full rounded-full bg-teal text-navy py-4 font-bold text-sm hover:bg-teal-glow transition-all active:scale-98 shadow-glow flex items-center justify-center gap-2 cursor-pointer"
                        style={{ backgroundColor: '#1C9E75', color: '#ffffff' }}
                      >
                        Request My Free Assessment →
                      </button>
                    </div>

                    <div className="text-center pt-2 select-none">
                      <span className="text-[11px] font-mono text-neutral-400 inline-flex items-center gap-1">
                        🔒 Your information is never shared. HIPAA-compliant intake process.
                      </span>
                    </div>

                  </form>
                )}
                
              </div>
            </div>

            {/* Middle divider line - visible only on desktop */}
            <div className="hidden lg:block lg:col-span-1 self-stretch flex justify-center py-6 select-none" aria-hidden="true">
              <div className="w-[1px] h-full bg-[#E2E8F0]" />
            </div>

            {/* Right Column = General Inquiry form */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Top Accent bar indicator */}
              <div className="h-[3px] w-full bg-blue-600 rounded-t-lg select-none" style={{ backgroundColor: '#185FA5' }} />

              <div className="space-y-2 mb-6 text-left">
                <h3 className="font-display font-bold text-navy text-xl sm:text-2xl">
                  General Inquiry
                </h3>
                <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                  For partnership inquiries, media requests, billing questions, or anything else.
                </p>
              </div>

              <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 sm:p-8 text-left">
                
                {generalSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="size-12 rounded-full bg-blue-50 text-[#185FA5] flex items-center justify-center mx-auto">
                      <CheckCircle className="size-6 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-navy font-bold text-lg">Message Sent</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed font-sans max-w-sm mx-auto">
                        Thank you — we&apos;ll be in touch within 1 business day.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setGeneralForm({
                          fullName: '',
                          organization: '',
                          email: '',
                          phone: '',
                          inquiryType: '',
                          message: ''
                        });
                        setGeneralSubmitted(false);
                      }}
                      className="text-xs text-blue-600 font-medium hover:underline cursor-pointer"
                    >
                      Fill another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleGeneralSubmit} className="space-y-4 font-sans text-left">
                    
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-navy">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={generalForm.fullName}
                        onChange={(e) => setGeneralForm({ ...generalForm, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-blue-500 transition-all text-navy ${
                          generalErrors.fullName ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {generalErrors.fullName && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                          <AlertCircle className="size-3" /> {generalErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Organization Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-navy">
                        Organization / Company <span className="text-neutral-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={generalForm.organization}
                        onChange={(e) => setGeneralForm({ ...generalForm, organization: e.target.value })}
                        placeholder="Core Solutions LLC"
                        className="w-full text-xs font-sans px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all text-navy"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-navy">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={generalForm.email}
                          onChange={(e) => setGeneralForm({ ...generalForm, email: e.target.value })}
                          placeholder="john@example.com"
                          className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-blue-500 transition-all text-navy ${
                            generalErrors.email ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                          }`}
                        />
                        {generalErrors.email && (
                          <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                            <AlertCircle className="size-3" /> {generalErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="block text-xs font-semibold text-navy">
                          Phone Number <span className="text-neutral-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          value={generalForm.phone}
                          onChange={(e) => setGeneralForm({ ...generalForm, phone: e.target.value })}
                          placeholder="Phone number"
                          className="w-full text-xs font-sans px-4 py-3 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all text-navy"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type dropdown */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-navy">
                        Inquiry type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={generalForm.inquiryType}
                        onChange={(e) => setGeneralForm({ ...generalForm, inquiryType: e.target.value })}
                        className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-blue-500 transition-all text-navy cursor-pointer ${
                          generalErrors.inquiryType ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      >
                        <option value="" disabled>Select inquiry type...</option>
                        <option value="Question">Billing / RCM question</option>
                        <option value="Partner">Partnership opportunity</option>
                        <option value="Media">Media / press inquiry</option>
                        <option value="Vendor">Vendor / technology inquiry</option>
                        <option value="Employment">Employment inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                      {generalErrors.inquiryType && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                          <AlertCircle className="size-3" /> {generalErrors.inquiryType}
                        </p>
                      )}
                    </div>

                    {/* Message detail */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-navy">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        name="message"
                        value={generalForm.message}
                        onChange={(e) => setGeneralForm({ ...generalForm, message: e.target.value })}
                        placeholder="Tell us what you're looking for."
                        className={`w-full text-xs font-sans px-4 py-3 bg-white border rounded-lg focus:outline-none focus:border-blue-500 transition-all text-navy ${
                          generalErrors.message ? 'border-red-500 bg-red-50/20' : 'border-neutral-200'
                        }`}
                      />
                      {generalErrors.message && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1 font-mono">
                          <AlertCircle className="size-3" /> {generalErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full rounded-full bg-navy text-white py-4 font-bold text-sm hover:bg-navy-deep transition-all active:scale-98 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                        style={{ backgroundColor: '#0A1628' }}
                      >
                        Send Message →
                      </button>
                    </div>

                    <div className="text-center pt-2 select-none">
                      <span className="text-[11px] font-mono text-neutral-400">
                        We respond to all inquiries within 1 business day.
                      </span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: CALENDAR SCHEDULING EMBED ("Prefer to Book a Time Directly?") */}
      <section className="bg-[#EEF2F7] py-16 md:py-20 border-b border-neutral-200/60">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          <div className="max-w-2xl mx-auto mb-10 select-none">
            <span className="inline-flex items-center gap-1 rounded-full border border-blue-105 bg-blue-100/40 px-3.5 py-1 text-[10px] font-bold font-mono text-blue-800 mb-3 uppercase tracking-widest">
              <CalendarIcon className="size-3 text-[#185FA5]" /> Direct Scheduling
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
              Prefer to Book a Time Directly?
            </h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-500 font-sans max-w-lg mx-auto leading-relaxed">
              Skip the back-and-forth. Choose a time that works for you and we&apos;ll have a Clientele RCM specialist ready.
            </p>
          </div>

          {/* Fully Interactive simulated scheduling container */}
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto text-left relative overflow-hidden">
            
            {/* Desktop Full Dynamic Widget / Mobile backup */}
            <div className="block sm:hidden select-none">
              <p className="text-xs text-neutral-500 mb-4 text-center">
                Select your preferred meeting from our live virtual slot manager:
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal text-white py-4 font-bold text-xs uppercase tracking-wider hover:bg-teal-glow transition-all active:scale-98 shadow-glow"
                style={{ backgroundColor: '#1C9E75' }}
              >
                Book a Call →
              </a>
            </div>

            {/* Desktop high fidelity widget */}
            <div className="hidden sm:block">
              {bookingConfirmed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="size-14 rounded-full bg-teal/15 text-teal flex items-center justify-center mx-auto">
                    <Check className="size-7" style={{ color: '#1C9E75' }} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-navy text-xl">Assessment Call Scheduled!</h3>
                    <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
                      We have booked your 30-minute <strong>RCM Assessment Call</strong> for: <br />
                      <strong className="text-navy">{dates.find(d => d.dateStr === selectedDate)?.fullDate} at {selectedTime} (ET)</strong>.
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-2 max-w-xs mx-auto">
                      A calendar invite and a secure Google Meet Link have been automatically dispatched to <strong>{bookingEmail}</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setSelectedDate('');
                      setSelectedTime('');
                      setBookingName('');
                      setBookingEmail('');
                    }}
                    className="rounded-full border border-teal text-xs text-teal font-bold px-6 py-2.5 hover:bg-neutral-50 transition-all cursor-pointer"
                  >
                    Schedule another time slot
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  <div className="grid md:grid-cols-12 gap-6 items-stretch">
                    
                    {/* Left panel: Dates Selection */}
                    <div className="md:col-span-5 border-r border-neutral-150 pr-4 space-y-4">
                      
                      <div className="font-mono text-[10px] font-bold text-[#185FA5] uppercase tracking-wider flex items-center gap-1.5 select-none">
                        <span>1. SELECT A DAY (MON - FRI)</span>
                      </div>

                      <div className="grid grid-cols-5 gap-2">
                        {dates.map((d) => (
                          <button
                            type="button"
                            key={d.dateStr}
                            onClick={() => {
                              setSelectedDate(d.dateStr);
                              setSelectedTime(''); // Reset time selection on date switch
                            }}
                            className={`flex flex-col items-center justify-center py-3 px-1.5 rounded-xl border transition-all cursor-pointer ${
                              selectedDate === d.dateStr
                                ? 'bg-[#0A1628] border-[#0A1628] text-white shadow-sm'
                                : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-navy'
                            }`}
                          >
                            <span className="text-[10px] font-mono uppercase opacity-75">{d.dayName}</span>
                            <span className="text-sm font-bold mt-1">{d.dayNum}</span>
                          </button>
                        ))}
                      </div>

                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200/60 text-[11px] text-neutral-500 leading-relaxed space-y-1 select-none">
                        <p className="font-semibold text-navy">💡 Appointment details:</p>
                        <ul className="list-disc pl-3.5 space-y-0.5">
                          <li>Type: 30-Minute RCM Assessment</li>
                          <li>Hours: 9:00 AM – 5:00 PM Eastern Time</li>
                          <li>Buffer: 15 min between appointments</li>
                        </ul>
                      </div>

                    </div>

                    {/* Right Panel: Timeslots selection */}
                    <div className="md:col-span-7 pl-2 space-y-4">
                      
                      <div className="font-mono text-[10px] font-bold text-[#185FA5] uppercase tracking-wider select-none">
                        <span>2. SELECT AN AVAILABLE TIME SLOT</span>
                      </div>

                      {selectedDate ? (
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setSelectedTime(slot)}
                              className={`py-2.5 px-2 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                                selectedTime === slot
                                  ? 'bg-[#1C9E75] border-[#1C9E75] text-white shadow-sm font-bold'
                                  : 'bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:text-navy'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="h-40 flex items-center justify-center border border-dashed border-neutral-200 rounded-xl bg-neutral-50 text-xs text-neutral-450 italic select-none">
                          Please select a date on the left calendar to load available slot availability.
                        </div>
                      )}

                      {/* Attendee Details Forms - Expandable if date and time selected */}
                      {selectedDate && selectedTime && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="pt-4 border-t border-neutral-100 space-y-3"
                        >
                          <div className="grid grid-cols-2 gap-3 text-left">
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-navy uppercase">Your Name *</label>
                              <input
                                required
                                type="text"
                                value={bookingName}
                                onChange={(e) => setBookingName(e.target.value)}
                                placeholder="Jane Vance"
                                className="w-full text-xs px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-navy"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[10px] font-bold text-navy uppercase">Your Email *</label>
                              <input
                                required
                                type="email"
                                value={bookingEmail}
                                onChange={(e) => setBookingEmail(e.target.value)}
                                placeholder="jane@example.com"
                                className="w-full text-xs px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-navy"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-1">
                            <div className="text-[10px] text-neutral-400">
                              Selected: <strong className="text-navy">{dates.find(d => d.dateStr === selectedDate)?.dayName} {dates.find(d => d.dateStr === selectedDate)?.dayNum} at {selectedTime}</strong>
                            </div>
                            
                            <button
                              type="submit"
                              className="rounded-full bg-teal text-white tracking-wide font-extrabold text-xs px-6 py-2.5 hover:bg-teal-glow transition-all active:scale-98 shadow-sm cursor-pointer"
                              style={{ backgroundColor: '#1C9E75' }}
                            >
                              Confirm Booking
                            </button>
                          </div>
                        </motion.div>
                      )}

                    </div>

                  </div>

                  {bookingError && (
                    <p className="text-xs text-red-500 font-mono flex items-center gap-1">
                      <AlertCircle className="size-3" /> {bookingError}
                    </p>
                  )}

                </form>
              )}
            </div>

          </div>

          <div className="mt-8 select-none text-xs text-neutral-500">
            <span>Can&apos;t find a time that works? Email us at </span>
            <a href="mailto:info@clientelercm.com" className="text-[#185FA5] font-bold hover:underline">info@clientelercm.com</a>
            <span> or call </span>
            <a href="tel:+18102210709" className="text-navy font-bold hover:underline">+1 810-221-0709</a>.
          </div>

        </div>
      </section>

      {/* SECTION 4: OFFICE LOCATIONS ("Find Us") */}
      <section className="bg-white py-16 md:py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl text-left mb-16 select-none">
            <span className="text-xs uppercase tracking-[0.2em] text-teal font-bold block mb-3">
              Find Us
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
              Our Locations
            </h2>
            <p className="mt-2 text-xs md:text-sm text-neutral-500 font-sans leading-relaxed">
              We operate out of two major facilities to maintain redundant coding pools and deliver uninterrupted 24/7 client operations.
            </p>
          </div>

          {/* Locations cards - Two columns */}
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            
            {/* Office 1: USA Norwalk */}
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs relative flex flex-col justify-between text-left group hover:border-[#185FA5]/30 hover:shadow-md transition-all duration-300">
              {/* Card top 3px blue bar */}
              <div className="h-[3.5px] w-full bg-[#185FA5]" />
              
              <div className="p-6 sm:p-8 space-y-4">
                
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl select-none" role="img" aria-label="US Flag">🇺🇸</span>
                    <h3 className="font-display font-bold text-navy text-lg sm:text-xl">
                      Norwalk, Connecticut
                    </h3>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-[#185FA5] border border-blue-100 font-semibold select-none">
                    Primary Office
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-neutral-600 font-sans">
                  <p className="font-semibold text-navy">200 Glover Ave, Norwalk, CT 06850 United States</p>
                  <p className="flex items-center gap-2 pt-1">
                    <span className="text-teal font-extrabold font-mono">TEL:</span> 
                    <a href="tel:+18102210709" className="text-[#185FA5] font-bold hover:underline">+1 810-221-0709</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-teal font-extrabold font-mono">EMAIL:</span> 
                    <a href="mailto:info@clientelercm.com" className="text-[#185FA5] font-bold hover:underline">info@clientelercm.com</a>
                  </p>
                </div>

                {/* Simulated Map Thumbnail */}
                <div className="relative h-44 w-full rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden pt-2 select-none group-hover:bg-neutral-50/50 transition-colors">
                  {/* Grid layout */}
                  <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  {/* Styled Map Accents */}
                  <div className="absolute left-[20%] right-[30%] top-1/2 h-[2px] bg-neutral-200/85 -rotate-12" />
                  <div className="absolute top-[10%] bottom-[20%] left-1/2 w-[2px] bg-neutral-200/85 rotate-45" />
                  <div className="absolute top-1/3 left-[40%] rounded-2xl border border-neutral-200/80 bg-white px-3 py-1.5 shadow-sm text-[9px] font-mono font-bold text-navy flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-teal animate-ping" />
                    <span>Glover Ave</span>
                  </div>

                  {/* Marker Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="rounded-full bg-[#185FA5] text-white p-2.5 shadow-md flex items-center justify-center animate-bounce">
                      <MapPin className="size-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#185FA5] font-bold mt-1.5"> Norwalk CT </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Office 2: Offshore Bangalore */}
            <div className="bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-xs relative flex flex-col justify-between text-left group hover:border-[#185FA5]/30 hover:shadow-md transition-all duration-300">
              {/* Card top 3px blue bar */}
              <div className="h-[3.5px] w-full bg-[#185FA5]" />
              
              <div className="p-6 sm:p-8 space-y-4">
                
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl select-none" role="img" aria-label="India Flag">🇮🇳</span>
                    <h3 className="font-display font-bold text-navy text-lg sm:text-xl">
                      Bangalore, Karnataka
                    </h3>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-100 font-semibold select-none">
                    Offshore Operations
                  </span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-neutral-600 font-sans">
                  <p className="font-semibold text-navy">Bangalore, Karnataka 560068 India</p>
                  <p className="flex items-center gap-2 pt-1">
                    <span className="text-teal font-extrabold font-mono">COMPLIANCE:</span> 
                    <span className="text-neutral-500 font-medium">HIPAA Certified Team</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-teal font-extrabold font-mono">OFFICE hours:</span> 
                    <span className="text-neutral-500 font-medium">24/7 Redundant Queues</span>
                  </p>
                </div>

                {/* Simulated Map Thumbnail */}
                <div className="relative h-44 w-full rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden pt-2 select-none group-hover:bg-neutral-50/50 transition-colors">
                  <div className="absolute inset-0 grid-noise opacity-[0.03] pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  {/* Styled Map Accents */}
                  <div className="absolute left-[10%] right-[20%] top-1/3 h-[2px] bg-neutral-200/85 rotate-6" />
                  <div className="absolute top-[20%] bottom-[10%] left-[65%] w-[2px] bg-neutral-200/85 -rotate-45" />

                  {/* Marker Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="rounded-full bg-emerald-600 text-white p-2.5 shadow-md flex items-center justify-center animate-bounce">
                      <MapPin className="size-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold mt-1.5"> Bangalore IN </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Compliance Note */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 sm:p-6 text-left select-none">
            <p className="text-xs text-neutral-600 leading-relaxed font-sans">
              <strong>Compliance Note:</strong> All offshore operations conducted at our Bangalore office are subject to the same HIPAA compliance requirements as our US operations. A Business Associate Agreement is executed with every client before work begins, covering all staff and systems at both locations.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5: CONTACT DETAILS + RESPONSE SLA ("Direct Contact") - Warm Gray */}
      <section className="bg-[#F2F0EC] py-16 md:py-20 border-b border-neutral-200/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <div className="max-w-xl mx-auto mb-12 select-none">
            <span className="text-xs uppercase tracking-[0.2em] text-teal font-bold block mb-3">
              Direct Contact
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
              Get in Touch Directly
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            {/* Phone */}
            <div className="flex flex-col items-center space-y-3 bg-white/70 border border-neutral-200/50 p-6 rounded-2xl">
              <div className="size-12 rounded-full bg-teal/10 text-teal flex items-center justify-center select-none">
                <Phone className="size-6 text-[#1C9E75]" />
              </div>
              <div>
                <a href="tel:+18102210709" className="block text-lg sm:text-xl font-bold text-navy hover:text-teal transition-colors">
                  +1 810-221-0709
                </a>
                <p className="text-xs text-neutral-500 font-medium mt-1 font-sans">
                  Mon–Fri, 9am–5pm ET
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center space-y-3 bg-white/70 border border-neutral-200/50 p-6 rounded-2xl">
              <div className="size-12 rounded-full bg-teal/10 text-teal flex items-center justify-center select-none">
                <Mail className="size-6 text-[#1C9E75]" />
              </div>
              <div>
                <a href="mailto:info@clientelercm.com" className="block text-lg sm:text-xl font-bold text-navy hover:text-teal transition-colors">
                  info@clientelercm.com
                </a>
                <p className="text-xs text-neutral-500 font-medium mt-1 font-sans">
                  We respond within 1 business day
                </p>
              </div>
            </div>

            {/* Response SLA */}
            <div className="flex flex-col items-center space-y-3 bg-white/70 border border-neutral-200/50 p-6 rounded-2xl">
              <div className="size-12 rounded-full bg-teal/10 text-teal flex items-center justify-center select-none">
                <Clock className="size-6 text-[#1C9E75]" />
              </div>
              <div>
                <span className="block text-lg sm:text-xl font-bold text-navy">
                  1 Business Day
                </span>
                <p className="text-xs text-neutral-500 font-medium mt-1 font-sans">
                  Our commitment on every inquiry
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: TRUST REINFORCEMENT ("Why Practices Contact Us") */}
      <section className="bg-white py-16 md:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-2xl text-left mb-12 select-none">
            <span className="text-xs uppercase tracking-[0.2em] text-teal font-bold block mb-3">
              Why Practices Reach Out
            </span>
            <h2 className="font-display text-2xl sm:text-3xl text-navy font-bold leading-tight">
              Real Performance Backed by Professional Trust
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Quote Card 1 */}
            <div className="bg-white rounded-3xl border border-neutral-200/60 p-6 flex flex-col justify-between text-left hover:border-teal/30 hover:shadow-sm transition-all relative">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-teal rounded-l-3xl select-none" />
              <p className="text-xs sm:text-sm text-neutral-600 italic leading-relaxed pt-2">
                &ldquo;We switched from a national billing company after our denial rate hit 22%. Clientele assessed us in the first week and we were live in 30 days.&rdquo;
              </p>
              <div className="mt-6 border-t border-neutral-100 pt-4">
                <div className="text-[11px] font-extrabold uppercase font-mono text-[#185FA5] select-none">
                  Revenue Cycle Manager
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  Orthopedic Group &middot; Michigan
                </div>
              </div>
            </div>

            {/* Quote Card 2 */}
            <div className="bg-white rounded-3xl border border-neutral-200/60 p-6 flex flex-col justify-between text-left hover:border-teal/30 hover:shadow-sm transition-all relative">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-teal rounded-l-3xl select-none" />
              <p className="text-xs sm:text-sm text-neutral-600 italic leading-relaxed pt-2">
                &ldquo;The free assessment wasn&apos;t a sales call. They told us exactly what was wrong with our coding workflow before we signed anything.&rdquo;
              </p>
              <div className="mt-6 border-t border-neutral-100 pt-4">
                <div className="text-[11px] font-extrabold uppercase font-mono text-[#185FA5] select-none">
                  Practice Administrator
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  Pain Management Practice &middot; Illinois
                </div>
              </div>
            </div>

            {/* Quote Card 3 */}
            <div className="bg-white rounded-3xl border border-neutral-200/60 p-6 flex flex-col justify-between text-left hover:border-teal/30 hover:shadow-sm transition-all relative">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-teal rounded-l-3xl select-none" />
              <p className="text-xs sm:text-sm text-neutral-600 italic leading-relaxed pt-2">
                &ldquo;I emailed on a Tuesday and had a call scheduled by Wednesday morning. The response time alone told me this was a different kind of company.&rdquo;
              </p>
              <div className="mt-6 border-t border-neutral-100 pt-4">
                <div className="text-[11px] font-extrabold uppercase font-mono text-[#185FA5] select-none">
                  CFO
                </div>
                <div className="text-[10px] text-neutral-400 mt-0.5">
                  Multi-Specialty Ambulatory Practice &middot; New York
                </div>
              </div>
            </div>

          </div>

          <div className="text-center mt-10 select-none">
            <span className="text-[10px] font-mono text-neutral-400 italic">
              * Verification credentials checked per AAPC and HBMA compliance audits.
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 7: COMPLIANCE BADGE STRIP */}
      <section className="bg-[#EEF2F7] py-12 border-b border-neutral-200/45">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-8 md:gap-x-12">
            
            {/* Badge 1 */}
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white flex items-center justify-center text-teal shadow-xs select-none">
                🛡️
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-bold text-navy leading-tight">HIPAA Certified</div>
                <div className="text-[10px] font-semibold text-neutral-400 font-mono">Active &bull; 2026</div>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white flex items-center justify-center text-teal shadow-xs select-none">
                🤝
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-bold text-navy leading-tight">HBMA Member</div>
                <div className="text-[10px] font-semibold text-neutral-400 font-mono">Proud Member</div>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white flex items-center justify-center text-teal shadow-xs select-none">
                🔒
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-bold text-navy leading-tight">SOC2 Type II</div>
                <span className="inline-flex items-center gap-1.5 px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/10 text-amber-700 font-mono">
                  In Progress &bull; Q3 2026
                </span>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white flex items-center justify-center text-teal shadow-xs select-none">
                🎓
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-bold text-navy leading-tight">AAPC-Certified Team</div>
                <div className="text-[10px] font-semibold text-neutral-400 font-mono">30+ Certified Coders</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
