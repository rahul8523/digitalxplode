'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-[#dcefff] via-white to-[#dcefff] hidden sm:block">
        <div className="mx-auto flex max-w-[1240px] items-center justify-end px-4 py-3 text-lg text-slate-900 sm:px-6">
          <p>info@digitalxplode.com | support@digitalxplode.com</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm shadow-slate-100/70">
        <div className="relative mx-auto flex max-w-[1240px] items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src="/logo/logo.png" alt="Digital Xplode" className="h-13 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 text-lg font-medium text-slate-900 md:flex">
            <a href="#portfolio" className="transition hover:text-slate-950">Portfolio</a>
            <a href="#xplore" className="transition hover:text-slate-950">Xplore DX</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact Us</a>
            {/* <a href="#plans" className="transition hover:text-slate-950">$1 SLA PLAN</a> */}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="hidden rounded-lg border border-slate-600 bg-white px-6 py-2.5 text-base font-semibold text-slate-950 transition hover:bg-slate-50 md:inline-flex"
            >
              Let's Talk
            </button>
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
          <nav className="flex w-full flex-col gap-4 text-slate-900">
            <a href="#portfolio" className="block w-full rounded-2xl px-4 py-4 text-base font-semibold transition hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#xplore" className="block w-full rounded-2xl px-4 py-4 text-base font-semibold transition hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
              Xplore DX
            </a>
            <a href="#contact" className="block w-full rounded-2xl px-4 py-4 text-base font-semibold transition hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
              Contact Us
            </a>
            <a href="#plans" className="block w-full rounded-2xl px-4 py-4 text-base font-semibold transition hover:bg-slate-50" onClick={() => setMenuOpen(false)}>
              $1 SLA PLAN
            </a>
            <a href="tel:+1234567890" className="block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100">
              Let's Talk
            </a>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && <div className="fixed inset-0 z-40 bg-slate-900/30 md:hidden" onClick={() => setMenuOpen(false)} />}
      </header>
    </>
  );
}
