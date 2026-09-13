import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2, MapPin, Linkedin, Github, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData, ContactFormErrors } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honeypot: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const validateClient = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please type your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setSubmitSuccess(null);

    if (!validateClient()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        throw new Error(data.error || 'Failed to submit contact message.');
      }

      setSubmitSuccess(data.message || 'Thank you! Your message has been sent successfully.');
      setSubmissionId(data.submissionId || null);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        _honeypot: '',
      });
      setErrors({});
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setServerError(
        err.message || 'An unexpected error occurred. Please reach out directly via email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-white/[0.08] scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* Left Column: Giant Editorial Statement & Direct Links (Mrinmoy Style) */}
        <div className="lg:col-span-6 space-y-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-amber-400 mb-4">
              <span className="w-6 h-[1px] bg-amber-400" />
              <span>Get In Touch</span>
            </div>
            
            <h2 className="text-5xl sm:text-7xl font-display font-extrabold tracking-tighter text-zinc-100 leading-[0.95]">
              Let's engineer <br />
              <span className="stroke-text-lg hover:text-white transition-colors duration-500">
                something iconic.
              </span>
            </h2>
          </div>

          <div className="space-y-6 font-sans">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block mb-1">
                Direct Inquiries
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-zinc-100 hover:text-amber-400 transition-colors underline underline-offset-8 decoration-1 decoration-white/20 hover:decoration-amber-400 block"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Response within 24h</span>
              </div>
            </div>
          </div>

          {/* Social Links Monospace Row */}
          <div className="pt-6 border-t border-white/10 space-y-3 font-mono text-xs tracking-widest uppercase">
            <span className="text-zinc-500 block text-[10px]">Professional Networks</span>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Glassmorphism Contact Form */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            <div>
              <h3 className="text-2xl font-display font-bold text-zinc-100 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Have a project or open full-stack role? Let's discuss requirements.
              </p>
            </div>

            {/* Success Alert */}
            {submitSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold">{submitSuccess}</p>
                  {submissionId && (
                    <p className="mt-1 text-[10px] font-mono opacity-80">Ref: {submissionId}</p>
                  )}
                </div>
              </div>
            )}

            {/* Error Alert */}
            {serverError && (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-semibold">{serverError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4 font-sans">
              <input
                type="text"
                name="_honeypot"
                value={formData._honeypot}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-1.5 font-bold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-2xl text-xs bg-zinc-950/80 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-mono"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-1.5 font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-2xl text-xs bg-zinc-950/80 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-mono"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-1.5 font-bold">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Full Stack Role / Architecture Consultation"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-2xl text-xs bg-zinc-950/80 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-mono"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-rose-400 font-mono">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest uppercase text-zinc-400 mb-1.5 font-bold">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about the project, role, or technical challenge..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-2xl text-xs bg-zinc-950/80 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-all font-mono"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase font-bold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Transmission</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
