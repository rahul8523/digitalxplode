'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-[#dcefff] via-white to-[#dcefff] hidden sm:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-end px-4 py-3 text-lg text-slate-900 sm:px-6">
          <p><a href="mailto:info@digitalxplode.com" className="hover:text-slate-950">info@digitalxplode.com</a> | <a href="tel:9560785068" className="hover:text-slate-950">+91-956-07-85-068</a></p>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 py-2 bg-white/95 backdrop-blur-xl shadow-sm shadow-slate-100/70">
        <div className="relative mx-auto flex max-w-[1240px] items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src="/logo/logo.png" alt="Digital Xplode" className="h-13 w-[200px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 text-lg font-medium text-slate-900 md:flex">
            <a href="#portfolio" className="transition hover:text-slate-950">Portfolio</a>
            <a href="#xplore" className="transition hover:text-slate-950">Xplore DX</a>
            <a href="#success-story" className="transition hover:text-slate-950">Success Story</a>
            {/* <a href="#plans" className="transition hover:text-slate-950">$1 SLA PLAN</a> */}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://www.linkedin.com/company/digitalxplode"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-[#0A66C2] text-[#0A66C2] hover:text-[#fff]"
                aria-label="Digital Xplode on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7h5v17H0zm7-17h4.8v2.4h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.1 3.4 6.1 7.8V24h-5V15.4c0-2.0 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24H7V7z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/digitalxplodeofficial/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-[#1877F2] text-[#1877F2] hover:text-[#fff]"
                aria-label="Digital Xplode on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82V14.706h-3.13V11.07h3.13V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.312h3.587l-.467 3.637h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/digitalxplodeofficial"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-[#E4405F] text-[#E4405F] hover:text-[#fff]"
                aria-label="Digital Xplode on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </a>
             
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 shadow-sm shadow-slate-200/60 md:hidden"
            >
              <span className="sr-only">Open menu</span>
              <div className="flex h-5 w-6 flex-col justify-between">
                <span className="h-0.5 w-full rounded-full bg-slate-900"></span>
                <span className="h-0.5 w-full rounded-full bg-slate-900"></span>
                <span className="h-0.5 w-full rounded-full bg-slate-900"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 w-full min-h-screen bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center gap-4">
            <img src="/logo/logo.png" alt="Digital Xplode" className="h-9 w-auto" />
            <div className="flex-1" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-slate-200 bg-slate-100 p-3 text-slate-700 shadow-sm"
            >
              ✕
            </button>
          </div>
          <nav className="flex w-full flex-col gap-2 text-slate-900">
            <a href="#portfolio" className="block w-full px-4 py-2 border-b border-slate-200 text-base font-semibold transition hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#xplore" className="block w-full px-4 py-2 border-b border-slate-200 text-base font-semibold transition hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
              Xplore DX
            </a>
            <a href="#success-story" className="block w-full px-4 py-2 border-b border-slate-200 text-base font-semibold transition hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
              Success Stories
            </a>
      
      
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && <div className="fixed inset-0 z-40 bg-slate-900/30 md:hidden" onClick={() => setMenuOpen(false)} />}
      </header>
    </>
  );
}
