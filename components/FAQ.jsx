"use client";

import { useState } from "react";

const faqs = [
  { q: "What is digital marketing for manufacturing companies?", a: "Digital marketing for manufacturing focuses on channels and tactics that generate qualified leads and visibility for industrial buyers — SEO, paid ads, and targeted content for buyers and procurement teams." },
  { q: "Why do manufacturing companies need digital marketing?", a: "To be found by buyers researching suppliers, build trust through content, and create predictable lead pipelines that integrate with sales." },
  { q: "Does digital marketing work for industrial and manufacturing businesses?", a: "Yes — when tactics are tailored to long sales cycles, technical buyers, and B2B channels like LinkedIn and targeted search." },
  { q: "How can a manufacturing company generate leads online?", a: "By combining intent-led SEO, technical content that matches buyer queries, and lead capture flows tuned for B2B procurement." },
  { q: "How do manufacturing companies get B2B leads?", a: "Through account-based outreach, targeted campaigns, content that answers buyer questions, and consistent search presence." },
  { q: "What is export marketing for manufacturers?", a: "Export marketing focuses on positioning, marketplaces, and search visibility in target countries to attract international buyers." },
  { q: "How important is website speed for manufacturers?", a: "Very — faster sites improve user experience, reduce bounce, and help SEO performance for product and category pages." },
  { q: "How can manufacturers find international buyers online?", a: "Use SEO for country-specific keywords, trade marketplaces, LinkedIn outreach, and paid campaigns targeted by geography and industry." },
  { q: "Can digital marketing help manufacturers expand globally?", a: "Yes — a focused strategy for target markets, multilingual content, and local SEO can open international channels." },
  { q: "How do you measure digital marketing ROI for manufacturing companies?", a: "Track lead quality, pipeline velocity, and revenue influenced per campaign rather than just raw clicks or impressions." },
  { q: "How much does digital marketing cost for manufacturers?", a: "Costs vary by scope; we recommend starting with a discovery phase, then scaling campaigns based on measured outcomes." },
  { q: "What is the best lead generation strategy for manufacturing companies?", a: "A mix of technical SEO, targeted paid channels, and industry-specific content that addresses procurement buyer intent." },
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
              <div key={index} className="rounded-[12px] border border-slate-200 bg-white p-5">
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

                <div className={`mt-3 p-5 text-base text-slate-700 ${openIndex === index ? "block" : "hidden"}`}>
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
