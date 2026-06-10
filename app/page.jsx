'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ClientsShowcase from '@/components/ClientsShowcase';
import StudentSuccessStories from '@/components/StudentSuccessStories';
import TeamSection from '@/components/TeamSection';
import FAQ from '@/components/FAQ';

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);
  const practitionerItems = [
    {
      title: 'Traditional SEO Foundation',
      color: 'bg-orange-500 text-orange-800',
      icon: (
        <img src="/icons/searchse.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Traditional SEO Foundation refers to the core practices used to improve a website’s visibility in search engines through strong on-page, technical, and content optimization. It focuses on creating a solid structure that helps search engines understand, crawl, and rank pages effectively.',
      ],
    },
    {
      title: 'AEO (Answer Engine Optimization)',
      color: 'bg-yellow-500 text-yellow-800',
      icon: (
        <img src="/icons/searchse.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Search Intent Mapping',
        'Schema & Featured Snippets',
        'Voice Search Readiness',
      ],
    },
    {
      title: 'GEO (Generative Engine Optimization)',
      color: 'bg-amber-500 text-amber-800',
      icon: (
        <img src="/icons/searchse.png" alt="SEO" className="w-5" />
      ),
      points: [
        'AI Content Strategy',
        'Generative Keyword Targeting',
        'Content Automation Checks',
      ],
    },
    {
      title: 'AIO (AI Optimization)',
      color: 'bg-emerald-600 text-emerald-800',
      icon: (
        <img src="/icons/searchse.png" alt="SEO" className="w-5" />
      ),
      points: [
        'AI-assisted Campaign Analytics',
        'Intent-aligned Messaging',
        'Performance Signal Optimization',
      ],
    },
    {
      title: 'Outcome-Focused Version',
      color: 'bg-teal-500 text-teal-800',
      icon: (
        <img src="/icons/searchse.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Landing Page Conversion Design',
        'Goal-driven Campaign Framework',
        'ROI-first Execution',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eff7ff] via-[#f8fbff] to-[#fbfcff] text-slate-950">
      <Header />



      <main className="">
        <section className="mx-auto max-w-7x1 py-12 px-4">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.45fr_0.85fr] xl:items-start">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                10+ Years Experience
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-medium leading-[1.02] pt-2 tracking-[-0.03em] text-sky-400 sm:text-[3.0rem]">
                  Grow Your Manufacturing Business
                </h1>
                <h2 className="text-4xl font-medium leading-[1.02] pt-0 mt-0 tracking-[-0.03em] text-slate-900 sm:text-[3.0rem]">
                  with Data-Driven Digital Marketing
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-700 py-5">
                <span className="font-semibold text-sky-400">Specialized digital marketing solutions for manufacturers,</span>{' '}
                industrial brands, OEM suppliers, machinery companies, engineering firms, and B2B businesses looking to increase visibility, generate qualified leads, and build industry authority.
              </p>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 mb-4">
                <div className="bg-white shadow-sm">
                  <img src="/mainreview/review.png" alt="Verified Reviews" className="h-20 w-full object-contain" />
                </div>
                <div className="bg-white shadow-sm">
                  <img src="/mainreview/google.png" alt="Google Certified" className="h-20 w-full object-contain" />
                </div>
                <div className="bg-white shadow-sm">
                  <img src="/mainreview/meta.png" alt="Meta Verified" className="h-20 w-full object-contain" />
                </div>
              </div>
              <ul className="space-y-2 text-lg text-slate-900">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Manufacturing Industry Specialists
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  SEO/AEO/GEO, LinkedIn & Performance Marketing Experts
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  B2B Lead Generation Focused
                </li>
                <li className="flex items-start gap-3 space-y-1 ">
                  <span className="mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Transparent Reporting & ROI Tracking
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-200">
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 mb-5">
                  Top Graduates Hired By
                </h3>
                <div className="overflow-hidden rounded-[28px]  bg-slate-50">
                  <div className="marquee min-w-[200%] flex items-center gap-8 px-4">
                    {['/clientlogo/client1.png', '/clientlogo/client2.png', '/clientlogo/client3.png', '/clientlogo/client4.png', '/clientlogo/client5.png', '/clientlogo/client6.png', '/clientlogo/client1.png', '/clientlogo/client2.png', '/clientlogo/client3.png', '/clientlogo/client4.png', '/clientlogo/client5.png', '/clientlogo/client6.png'].map((src, index) => (
                      <div key={index} className="flex-shrink-0 rounded-3xl bg-white p-2 shadow-sm">
                        <img src={src} alt={`Client ${index % 6 + 1}`} className="h-12 w-24 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-[32px] bg-white shadow-[0_40px_80px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/60">
              <div className="rounded-t-[22px] bg-sky-400 px-8 py-8 text-white">
                <p className="text-2xl font-semibold text-sky-100/90">Get the Complete Details</p>
                <h3 className="mt-4 text-xl mt-0 font-medium text-black">About the Services</h3>
              </div>
              <div className="space-y-5 px-8 py-8">
                <form className="space-y-4">
                  <label className="block text-base  font-semibold text-slate-700">

                    <input
                      type="text"
                      placeholder="Your Name"
                      className="mt-2 w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-slate-700">

                    <input
                      type="email"
                      placeholder="Email Address"
                      className="mt-2 w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-slate-700">

                    <input
                      type="tel"
                      placeholder="Contact no"
                      className="mt-2 w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-slate-700">

                    <input
                      type="text"
                      placeholder="location"
                      className="mt-2 w-full border-b border-slate-300 bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                  </label>
                  <label className="flex items-start gap-3 text-sm text-slate-600 items-center">
                    <input type="checkbox" className="mt-2 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500" />
                    I agree to the Terms & Conditions and Privacy Policy.
                  </label>
                  <button
                    type="submit"
                    className="mt-3 w-full rounded-2xl bg-sky-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-sky-600"
                  >
                    Submit
                  </button>
                </form>
                <a
                  href="https://wa.me/1234567890"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">✓</span>
                  Chat on what’s app
                </a>
              </div>
            </aside>
          </div>
        </section>
        <ClientsShowcase />

        <section className="mx-auto max-w-7x1 py-12 px-4">
          <div className=" bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-10">
            <div className="mb-8 text-center">
              <p className="text-xl mb-2 font-semibold text-sky-500">Our Core Services</p>
              <h2 className="text-4xl font-semibold text-slate-900">Manufacturing SEO/AEO/GEO</h2>
              <p className="mx-auto mt-3 font-medium max-w-5xl text-lg text-slate-900">Rank higher on Google for industrial and product-specific keywords.</p>
            </div>
            <div className="space-y-5 nt-5 sm:mt-20">
              {practitionerItems.map((item, index) => (
                <div key={item.title} className={`overflow-hidden rounded-[28px] border bg-slate-50 ${openIndex === index ? 'border-sky-300' : 'border-slate-200'}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className={`text-2xl font-medium ${openIndex === index ? 'text-sky-400' : 'text-slate-900'}`}>{item.title}</p>
                        {/* <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p> */}
                      </div>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${openIndex === index ? 'border-sky-300 bg-sky-50 text-sky-600' : 'border-slate-200 bg-white text-slate-600'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`h-5 w-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                        <path fill="none" stroke="currentColor" strokeWidth="2" d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 py-5 px-6' : 'max-h-0 opacity-0 py-0 px-6'}`}>
                    <div className="space-y-3 px-8 text-sm text-slate-700">
                      {item.points.map((point) => (
                        <div key={point} className="flex items-start gap-3">
                          {/* <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" /> */}
                          <p className="text-base text-slate-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StudentSuccessStories />
        <TeamSection />
        <FAQ />
      </main>
    </div>
  );
}
