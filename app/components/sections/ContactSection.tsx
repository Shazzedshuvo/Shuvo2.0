'use client';

import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Web Application',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          serviceInterest: formData.subject
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'Full-Stack Web Application', message: '' });
      } else {
        setError(data.error || 'Failed to submit. Please try again.');
      }
    } catch {
      setError('Connection error. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 transition-colors duration-300 scroll-mt-20 overflow-hidden gsap-fade-up">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[950px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-pink-500/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-black/10 bg-white/60 p-6 sm:p-8 md:p-12 shadow-sm backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-[#0c0c0e]/80">
          {/* Orbital background geometric rings */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex h-[280px] w-[280px] sm:h-[480px] sm:w-[480px] lg:h-[680px] lg:w-[680px] items-center justify-center opacity-15 sm:opacity-20 dark:opacity-25">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="absolute h-full w-full text-indigo-500/60 animate-spin"
              style={{ animationDuration: '24s' }}
            >
              <ellipse cx="50" cy="50" rx="46" ry="18" strokeDasharray="6 4" transform="rotate(35 50 50)" />
              <ellipse cx="50" cy="50" rx="46" ry="18" strokeDasharray="8 3" transform="rotate(-35 50 50)" />
              <ellipse cx="50" cy="50" rx="42" ry="24" transform="rotate(75 50 50)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-center">
            {/* Left Info Column */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                  LET&apos;S CONNECT
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                  Have a project in mind?
                </h2>
                <p className="mt-2 text-base font-medium text-zinc-600 dark:text-white/80">
                  Let&apos;s create something amazing together.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3.5 text-xs text-zinc-700 transition-colors hover:text-zinc-900 dark:text-white/90 dark:hover:text-white sm:text-sm"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/5 text-zinc-800 shadow-xs backdrop-blur-md transition-transform duration-200 group-hover:scale-105 dark:border-white/20 dark:bg-white/10 dark:text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{siteConfig.email}</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="group flex items-center gap-3.5 text-xs text-zinc-700 transition-colors hover:text-zinc-900 dark:text-white/90 dark:hover:text-white sm:text-sm"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/5 text-zinc-800 shadow-xs backdrop-blur-md transition-transform duration-200 group-hover:scale-105 dark:border-white/20 dark:bg-white/10 dark:text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{siteConfig.phone}</span>
                </a>

                <div className="flex items-center gap-3.5 text-xs text-zinc-700 dark:text-white/90 sm:text-sm">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/5 text-zinc-800 shadow-xs backdrop-blur-md dark:border-white/20 dark:bg-white/10 dark:text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="relative rounded-[22px] border border-black/10 bg-white/70 p-6 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-white/50 max-w-sm mx-auto">
                    Thank you! Shazzed has received your message and will reply via email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-neumorphic text-xs !py-2 !px-4 mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <p className="text-xs text-red-500 dark:text-red-400 font-medium">
                      {error}
                    </p>
                  )}

                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full rounded-xl border border-black/10 bg-white/90 px-4 py-3 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 backdrop-blur-md transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-[#18181b] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-[#18181b] dark:focus:ring-indigo-400/20"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full rounded-xl border border-black/10 bg-white/90 px-4 py-3 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 backdrop-blur-md transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-[#18181b] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-[#18181b] dark:focus:ring-indigo-400/20"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-black/10 bg-white/90 px-4 py-3 pr-10 text-xs font-medium text-zinc-900 backdrop-blur-md transition-colors cursor-pointer hover:bg-white focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-[#18181b] dark:text-white dark:hover:bg-[#202025] dark:focus:border-indigo-400 dark:focus:bg-[#18181b] dark:focus:ring-indigo-400/20"
                    >
                      <option value="Full-Stack Web Application" className="bg-white text-zinc-900 dark:bg-[#18181b] dark:text-white py-1">
                        Full-Stack Web Application
                      </option>
                      <option value="Frontend (Next.js / React.js)" className="bg-white text-zinc-900 dark:bg-[#18181b] dark:text-white py-1">
                        Frontend (Next.js / React.js)
                      </option>
                      <option value="Backend API & Database" className="bg-white text-zinc-900 dark:bg-[#18181b] dark:text-white py-1">
                        Backend API &amp; Database
                      </option>
                      <option value="MERN Stack MVP" className="bg-white text-zinc-900 dark:bg-[#18181b] dark:text-white py-1">
                        MERN Stack MVP
                      </option>
                      <option value="eCommerce / CMS Store" className="bg-white text-zinc-900 dark:bg-[#18181b] dark:text-white py-1">
                        eCommerce / CMS Store
                      </option>
                      <option value="Other Inquiries" className="bg-white text-zinc-900 dark:bg-[#18181b] dark:text-white py-1">
                        Other Inquiries
                      </option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full resize-none rounded-xl border border-black/10 bg-white/90 px-4 py-3 text-xs font-medium text-zinc-900 placeholder:text-zinc-400 backdrop-blur-md transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-white/10 dark:bg-[#18181b] dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-indigo-400 dark:focus:bg-[#18181b] dark:focus:ring-indigo-400/20"
                    />
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-neumorphic w-full !py-3.5 !text-sm group disabled:opacity-60 cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
