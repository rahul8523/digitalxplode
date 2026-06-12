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
      title: 'Search & Answer Engine Dominance (SEO & AEO)',
      color: 'bg-orange-200 text-orange-700',
      icon: (
        <img src="/icons/searchse.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Capture high-intent B2B buyers at the exact moment of intent. Through technical SEO, targeted content clusters, and AEO strategy, we position your business as the undisputed authority across traditional search and modern AI answer engines.',
        'Technical SEO',
        'Schema Data',
        'AI Answer Engine Visibility',
        'Local & Global Search Authority',
      ],
    },
    {
      title: 'Generative Engine Optimization (GEO)',
      color: 'bg-lime-200 text-lime-700',
      icon: (
        <img src="/icons/optimization.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Secure your brands presence inside AI-generated summaries. We strategically optimize your content layout, data structure, and citations to ensure your business is actively cited, synthesized, and recommended by modern generative AI platforms.',
        'Optimizing for the AI era. We engineer your online presence to guarantee visibility within generative search results, driving brand inclusion and citations across the world’s leading LLMs and AI platforms.',
        'Generative Citation Mapping',
        'LLM Sentiment Alignment',
        'Structured Data Enrichment',
        'Authority Source Network'
      ],
    },
    {
      title: 'AI Optimization (AIO)',
      color: 'bg-green-200 text-green-700',
      icon: (
        <img src="/icons/ai.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Future-proof your entire digital infrastructure by Engineering data for the AI landscape. We optimize your website architecture, schema data, and content networks to ensure your enterprise is seamlessly indexed, correctly interpreted, and prioritized by AI models and autonomous agents.',
        'AI Crawler & Bot Management',
        'Knowledge Graph Integration',
        'Vector-Search Optimization',
        'Semantic Data Architecture',
      ],
    },
    {
      title: 'Performance Marketing & B2B Lead Generation',
      color: 'bg-green-200 text-green-700',
      icon: (
        <img src="/icons/Shape8.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Turn ad spend into predictable revenue pipeline. We design hyper-targeted, multi-channel paid campaigns engineered to reach corporate decision-makers, nurture high-intent prospects, and deliver sales-qualified leads to your team.',
        'Account-Based Marketing (ABM)',
        'High-Intent PPC',
        'LinkedIn Advertising',
        'Sales Pipeline Velocity.',
      ],
    },
    {
      title: 'LinkedIn Marketing & Corporate Branding',
      color: 'bg-sky-200 text-sky-700',
      icon: (
        <img src="/icons/Shape9.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Penetrate target accounts and bypass the gatekeepers. We architect comprehensive LinkedIn strategies that align organic content with targeted outreach, putting your value proposition directly in front of CXOs, VPs, and key industry stakeholders.',
        'Decision-Maker Targeting',
        'Paid InMail Campaigns',
        'Content Amplification',
        'High-Value Lead Capture',
      ],
    },
    {
      title: 'Industrial Content Strategy & Lead Gen',
      color: 'bg-pink-200 text-pink-700',
      icon: (
        <img src="/icons/Shape10.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Shorten your B2B sales cycle with high-intent content assets. We build targeted information hubs, solution guides, and educational content that address the exact pain points of industrial buyers, moving them seamlessly from discovery to request-for-quote (RFQ).',
        'Inbound Lead Magnets',
        'Sector-Specific Insights',
        'Product Application Notes',
        'RFQ Funnel Optimization.',
      ],
    },
    {
      title: 'Industrial Social Strategy & Awareness',
      color: 'bg-purple-200 text-purple-700',
      icon: (
        <img src="/icons/Shape11.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Amplify your industrial legacy and market footprint. We engineer high-impact social media strategies tailored for the manufacturing sector, focusing on corporate responsibility, infrastructure milestones, and major sector announcements that command industry-wide attention.',
        'B2B Audience Engagement',
        'Video Storytelling',
        'Multi-Channel Distribution',
        'Industry Authority Mapping',
      ],
    },
    {
      title: 'Web Design & Conversion Rate Optimization (CRO)',
      color: 'bg-yellow-200 text-purple-700',
      icon: (
        <img src="/icons/web.png" alt="SEO" className="w-5" />
      ),
      points: [
        'Turn your website into your highest-performing sales asset. We build premium, high-speed web experiences on modern tech stacks that combine stunning UI/UX with rigorous conversion rate optimization (CRO) to transform B2B traffic into qualified sales opportunities.',
        'Custom B2B UI/UX',
        'Full-Stack Development',
        'Clean Typography',
        'Modern CMS Integration',
      ],
    },


  ];

  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    email: '',
    contact: '',
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, message: '', type: '' });

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validateIndianMobile = (value) => /^[6-9]\d{9}$/.test(value);

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.companyName.trim()) {
      nextErrors.companyName = 'Company name is required.';
    }
    if (!formData.name.trim()) {
      nextErrors.name = 'Your name is required.';
    }
    if (!validateEmail(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!validateIndianMobile(formData.contact)) {
      nextErrors.contact = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (!formData.agree) {
      nextErrors.agree = 'You must agree to the Terms & Conditions and Privacy Policy.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus({ loading: false, message: '', type: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus({ loading: false, message: 'Please fix the highlighted fields before submitting.', type: 'error' });
      return;
    }

    setStatus({ loading: true, message: 'Sending your request...', type: 'info' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message.');
      }

      setStatus({ loading: false, message: result.message || 'Your request has been sent successfully.', type: 'success' });
      setFormData({ companyName: '', name: '', email: '', contact: '', agree: false });
      setErrors({});
    } catch (error) {
      setStatus({ loading: false, message: error.message || 'Unable to send the message right now.', type: 'error' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eff7ff] via-[#f8fbff] to-[#fbfcff] text-slate-950 pb-28">
      <Header />



      <main className="">
        <section className="mx-auto max-w-[1240px] py-12 px-4">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1.45fr_0.85fr] xl:items-start">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                10+ Years Experience
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-medium leading-[1.02] pt-2 tracking-[-0.03em] text-sky-400 sm:text-[2.5rem]">
                  Grow Your Manufacturing Business
                </h1>
                <h2 className="text-4xl font-medium leading-[1.02] pt-0 mt-0 tracking-[-0.03em] text-slate-900 sm:text-[2.5rem]">
                  with Data-Driven Digital Marketing
                </h2>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-700 py-5">
                <span className="font-semibold text-sky-400">Specialized digital marketing solutions for manufacturers,</span>{' '}
                industrial brands, OEM suppliers, machinery companies, engineering firms, and B2B businesses looking to increase visibility, generate qualified leads, and build industry authority.
              </p>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 mb-4">
                <div className="rounded-[12px] bg-white overflow-hidden border bg-slate-50 border-sky-300">
                  <img src="/mainreview/review.png" alt="Verified Reviews" className="h-20 w-full object-contain" />
                </div>
                <div className="rounded-[12px] bg-white overflow-hidden border bg-slate-50 border-sky-300">
                  <img src="/mainreview/google.png" alt="Google Certified" className="h-20 w-full object-contain" />
                </div>
                <div className="rounded-[12px] bg-white overflow-hidden border bg-slate-50 border-sky-300">
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
                  Long-Term Partnerships with Industry Giants
                </h3>
                <div className="overflow-hidden">
                  <div className="marquee min-w-[200%] flex items-center gap-8 px-4">
                    {['/clientlogo/client1.png', '/manufacturer/client-logo/dunham.webp', '/clientlogo/client3.png', '/clientlogo/client4.png', '/manufacturer/client-logo/invergypowersupply.png', '/clientlogo/client6.png', '/clientlogo/client1.png', '/manufacturer/client-logo/jaguar.svg', '/clientlogo/client3.png', '/clientlogo/client4.png', '/clientlogo/client5.png', '/clientlogo/client6.png'].map((src, index) => (
                      <div key={index} className="flex-shrink-0 rounded-[12px] p-2 shadow-sm">
                        <img src={src} alt={`Client ${index % 6 + 1}`} className="h-12 w-24 object-contain" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-[12px] text-center bg-white shadow-xl ring-1 ring-slate-200/60" id="contact">
              <div className="rounded-t-[12px] text-left bg-sky-400 px-6 py-6 text-white">
                <p className="text-2xl font-semibold text-sky-100/90">Get the Complete Details</p>
                <h3 className="mt-2 text-xl mt-0 font-medium text-black">About the Services</h3>
              </div>
              <div className="space-y-5 px-8 py-8" >
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <label className="block text-sm font-semibold text-slate-700">
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(event) => handleChange('companyName', event.target.value)}
                      className={`mt-2 w-full border-b bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none ${errors.companyName ? 'border-rose-500' : 'border-slate-300'}`}
                    />
                    {errors.companyName && <p className="mt-2 text-xs text-rose-600">{errors.companyName}</p>}
                  </label>

                  <label className="block text-sm font-semibold text-slate-700">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(event) => handleChange('name', event.target.value)}
                      className={`mt-2 w-full border-b bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none ${errors.name ? 'border-rose-500' : 'border-slate-300'}`}
                    />
                    {errors.name && <p className="mt-2 text-xs text-rose-600">{errors.name}</p>}
                  </label>

                  <label className="block text-sm font-semibold text-slate-700">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(event) => handleChange('email', event.target.value)}
                      className={`mt-2 w-full border-b bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none ${errors.email ? 'border-rose-500' : 'border-slate-300'}`}
                    />
                    {errors.email && <p className="mt-2 text-xs text-rose-600">{errors.email}</p>}
                  </label>

                  <label className="block text-sm font-semibold text-slate-700">
                    <input
                      type="tel"
                      inputMode="numeric"
                      placeholder="Contact no"
                      value={formData.contact}
                      onChange={(event) => handleChange('contact', event.target.value.replace(/[^0-9]/g, ''))}
                      className={`mt-2 w-full border-b bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none ${errors.contact ? 'border-rose-500' : 'border-slate-300'}`}
                    />
                    {errors.contact && <p className="mt-2 text-xs text-rose-600">{errors.contact}</p>}
                  </label>

                  <label className="flex items-start gap-3 py-3 text-xs text-slate-600 text-left">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(event) => handleChange('agree', event.target.checked)}
                      className="mt-0 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                    />
                    <span>I agree to the Terms & Conditions and Privacy Policy.</span>
                  </label>
                  {errors.agree && <p className="text-xs text-rose-600">{errors.agree}</p>}

                  <button
                    type="submit"
                    disabled={status.loading}
                    className={`mt-3 w-full rounded-2xl px-4 py-3 text-base font-semibold text-white transition ${status.loading ? 'bg-slate-400' : 'bg-sky-500 hover:bg-sky-600'}`}
                  >
                    {status.loading ? 'Sending...' : 'Submit'}
                  </button>

                  {status.message && (
                    <p className={`mt-3 text-sm ${status.type === 'error' ? 'text-rose-600' : status.type === 'success' ? 'text-emerald-700' : 'text-slate-700'}`}>
                      {status.message}
                    </p>
                  )}
                </form>
                <a
                  href="https://wa.me/+919971791782"
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

        <section className="mx-auto max-w-[1240px] py-12 px-4">
          <div className="sm:p-10">
            <div className="mb-8 text-center">
              <p className="text-xl mb-2 font-semibold text-sky-500">Our Core Services</p>
              <h2 className="text-4xl font-semibold text-slate-900">Manufacturing SEO/AEO/GEO</h2>
              <p className="mx-auto mt-3 font-medium max-w-5xl text-lg text-slate-900">Rank higher on Google for industrial and product-specific keywords.</p>
            </div>
            <div className="space-y-5 nt-5 sm:mt-20">
              {practitionerItems.map((item, index) => (
                <div key={item.title} className={`overflow-hidden rounded-[12px] border bg-slate-50 ${openIndex === index ? 'border-sky-300' : 'border-slate-200'}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-2 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className={`text-xl font-medium ${openIndex === index ? 'text-sky-400' : 'text-slate-900'}`}>{item.title}</p>
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
                          <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
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

      <div className="fixed inset-x-0 bottom-0 z-40 px-0 sm:pb-4 sm:px-6">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 sm:rounded-[12px] border border-slate-700/70 bg-black px-2 py-3 shadow-xl shadow-slate-950/30 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
          <div className="hidden sm:block min-w-0">
            <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Need help right now?</p>
            <p className="mt-1 text-sm font-semibold text-white sm:text-base">Reach us instantly via call, WhatsApp, or enquiry</p>
          </div>
          <div className="flex w-full items-center gap-2 overflow-x-auto pb-1 sm:w-auto sm:overflow-visible">
            <a
              href="tel:+919560785068"
              className="inline-flex min-w-[128px] min-h-[48px] items-center justify-center gap-2 rounded-[12px] border border-slate-800 bg-sky-400/95 px-3 sm:px-4 text-sm font-semibold text-white transition duration-200 hover:bg-slate-900"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sky-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 13 13 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 13 13 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              Call
            </a>
            <a
              href="https://wa.me/919971068400?text=Hello%20Digital%20Xplode,%20I%20want%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-w-[128px] min-h-[48px] items-center justify-center gap-2 rounded-[12px] bg-emerald-500 px-3 sm:px-4 text-sm font-semibold text-white transition duration-200 hover:bg-emerald-600"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" stroke-width="0" viewBox="0 0 16 16" class="h-8 w-auto text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg>
              </span>
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex min-w-[128px] min-h-[48px] items-center justify-center gap-2 rounded-[12px] bg-white px-3 sm:px-4 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-slate-100"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
              Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
