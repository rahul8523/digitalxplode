"use client";

import { useState } from "react";

const faqs = [
  { q: "What services does Digital Xplode offer?", a: "Digital Xplode provides end-to-end digital growth solutions, including Website Design & Development, SEO, Social Media Marketing, Google Ads (PPC), Branding, Content Marketing, Lead Generation, E-commerce Solutions, and Performance Marketing.\n\nOur goal is to help businesses increase visibility, generate quality leads, and drive measurable growth." },

  { q: "How do you create a digital marketing strategy for my business?", a: "We begin by understanding your business goals, industry, competitors, and target audience. \n\nBased on this research, we create a customized strategy that combines the right mix of SEO, paid advertising, social media, content, and web optimization to deliver maximum ROI." },

  { q: "How long does it take to see results from digital marketing?", a: "The timeline depends on the services chosen and your business goals. Paid advertising can generate results within days, while SEO and organic growth strategies typically take a few months to build sustainable long-term visibility and lead generation. We focus on both quick wins and long-term success." },

  { q: "Do you work with businesses from different industries?", a: "We work with startups, SMEs, educational institutions, healthcare brands, e-commerce businesses, real estate companies, manufacturing firms, and many other industries.\n\nOur strategies are tailored to each business rather than using a one-size-fits-all approach." },

  { q: "Why should I choose Digital Xplode over other agencies?", a: "With years of experience, a results-driven approach, and a team of specialists across multiple digital domains, Digital Xplode focuses on delivering measurable business growth, not just marketing activities. \n\nWe combine creativity, technology, and data-driven decision-making to help brands scale faster and smarter." },

  { q: "Do I need a long-term contract to work with Digital Xplode?", a: "No. We believe in earning your trust through results. Depending on the service, we offer flexible engagement models that can be customized to your business goals and budget." },

  { q: "Will I receive regular reports and performance updates?", a: "Absolutely. Transparency is a key part of our process. We provide regular reports and insights on campaign performance, website traffic, lead generation, ad spend, and other key metrics so you always know how your marketing is performing." },

  { q: "Can Digital Xplode help generate leads and sales for my business?", a: "Our strategies are designed not only to increase brand visibility but also to generate qualified leads, improve conversions, and drive revenue growth through targeted marketing campaigns and optimization techniques." },

  { q: "Do you provide website design and development services?", a: "We create responsive, user-friendly, and conversion-focused websites that help businesses establish a strong online presence while delivering a seamless experience across all devices." },

  { q: "What makes Digital Xplode different from other marketing agencies?", a: "We don't believe in generic marketing solutions. Every strategy we create is tailored to your business objectives, audience, and industry. \nOur focus is on delivering real business outcomes through a combination of creativity, data, technology, and continuous optimization." },

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const columns = [[], []];
  faqs.forEach((faq, index) => {
    columns[index % 2].push({ faq, index });
  });

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Have Questions? Frequently Asked Questions</h2>
        <p className="mt-2 text-slate-600">Clear your doubts about lead generation, industrial branding, and ROI-driven marketing.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {column.map(({ faq, index }) => (
              <div key={index} className="rounded-[12px] border border-slate-200 bg-white p-3">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
                    <span className="text-base font-medium text-slate-900">{faq.q}</span>
                  </div>
                  <div className={`transition-transform ${openIndex === index ? "rotate-45" : "rotate-0"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-slate-500">
                      <path fill="currentColor" d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>

                <div className={`mt-3 p-5 text-base text-slate-700 whitespace-pre-wrap ${openIndex === index ? "block" : "hidden"}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
