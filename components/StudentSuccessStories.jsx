import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'Mr Prashant Agarwal',
    role: 'Perfect metal structures',
    quote: 'Digital Xplode - Driving Measurable Growth for Manufacturing Brands.',
    details:
      'We were struggling to generate consistent enquiries online. Their manufacturing-focused SEO and campaigns helped us dominate key industry searches and significantly increase qualified leads.',
    avatar: '/clientlogo/client1.png',
  },
  {
    name: 'Gunifsa 1',
    role: 'HCL Tech',
    quote: 'Thankful for the real-time practical exposure and full support from the team.',
    details:
      'We were struggling to generate consistent enquiries online. Their manufacturing-focused SEO and campaigns helped us dominate key industry searches and significantly increase qualified leads.',
    avatar: '/clientlogo/client2.png',
  },
  {
    name: 'Mr Prashant',
    role: 'Perfect metal structures',
    quote: 'Digital Xplode - Driving Measurable Growth for Manufacturing Brands.',
    details:
      'We were struggling to generate consistent enquiries online. Their manufacturing-focused SEO and campaigns helped us dominate key industry searches and significantly increase qualified leads.',
    avatar: '/clientlogo/client3.png',
  },
  {
    name: 'Gunifsa 2',
    role: 'Reynobond',
    quote: 'Thankful for the real-time practical exposure and full support from the team.',
    details:
      'We were struggling to generate consistent enquiries online. Their manufacturing-focused SEO and campaigns helped us dominate key industry searches and significantly increase qualified leads.',
    avatar: '/clientlogo/client4.png',
  },
  {
    name: 'Gunifsa 3',
    role: 'HTC',
    quote: 'Digital Xplode - Driving Measurable Growth for Manufacturing Brands.',
    details:
      'We were struggling to generate consistent enquiries online. Their manufacturing-focused SEO and campaigns helped us dominate key industry searches and significantly increase qualified leads.',
    avatar: '/clientlogo/client5.png',
  },
];

export default function StudentSuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);
  const listRef = useRef(null);
  const active = testimonials[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = listRef.current;
    const activeItem = itemRefs.current[activeIndex];

    if (!container || !activeItem) return;

    const itemTop = activeItem.offsetTop;
    const itemBottom = itemTop + activeItem.offsetHeight;
    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;

    if (itemTop < containerTop) {
      container.scrollTo({ top: itemTop - 12, behavior: 'smooth' });
    } else if (itemBottom > containerBottom) {
      container.scrollTo({ top: itemBottom - container.clientHeight + 12, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12">
      <div className="text-center">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          Student Success Stories
        </p> */}
        <h2 className="text-4xl font-semibold text-slate-900">
          Hear From Manufacturing Leaders Who Scaled Their Growth
        </h2>
        <p className="mx-auto mt-3 font-medium max-w-5xl text-lg text-slate-900">
          See how manufacturers, industrial brands, and OEM suppliers generated more leads, improved search visibility, and increased revenue through our digital marketing strategies.
        </p>
      </div>

      <div className="mt-12 grid gap-4 xl:grid-cols-[0.8fr_1fr_1fr] items-start">
        <div
          ref={listRef}
          className="mt-8 max-h-[560px] overflow-y-auto overscroll-contain pr-2 space-y-4 hide-scrollbar"
          style={{ touchAction: 'pan-y' }}
        >
          {testimonials.map((item, index) => (
            <button
              ref={(el) => (itemRefs.current[index] = el)}
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group w-full rounded-[32px] border px-10 py-5 text-left transition ${
                activeIndex === index
                  ? 'border-sky-300 bg-slate-50 shadow-lg'
                  : 'border-slate-300 bg-white hover:border-sky-400'
              }`}
            >
              <div className="flex gap-4">
                <img src={item.avatar} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-slate-900">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.role}</p>
                    </div>
                    <div className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition ${
                      activeIndex === index
                        ? 'border-sky-300 bg-sky-50 text-sky-600'
                        : 'group-hover:border-sky-300 group-hover:text-sky-600'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                        <path fill="currentColor" d="M9 17l6-5-6-5v10Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-slate-600">"{item.quote}"</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white p-6 shadow-sm">
          <div className="flex h-[520px] items-center justify-center rounded-[32px] border border-slate-200 bg-slate-50">
            <button className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-sky-300 bg-white text-sky-600 shadow-sm transition hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10">
                <path fill="currentColor" d="M8 5v14l11-7L8 5Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white p-0 shadow-sm mt-8">
          <p className="text-lg font-semibold text-sky-500">
            Verified Manufacturing Growth Story
          </p>
          <h3 className="mt-4 text-4xl font-semibold text-slate-900">{active.name}</h3>
          <p className="mt-1 text-xl text-slate-700">{active.role}</p>
          <div className="my-5">
            <div className="gap-4">
              <img src="/icons/comma.png" alt={active.name} className="py-2" />
              <p className="border-l-4 border-sky-400 pl-4 text-2xl font-semibold text-slate-900">"{active.quote}"</p>
            </div>
          </div>
          <em className="text-xl leading-7 text-slate-600">"{active.details}"</em>
        </div>
      </div>
    </section>
  );
}
