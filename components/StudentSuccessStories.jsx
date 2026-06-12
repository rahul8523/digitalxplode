import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    name: 'SBL',
    role: 'Perfect metal structures',
    quote: 'Digital Xplode didnt just hand us a generic marketing plan; they rebuilt our entire digital strategy from the ground up. Their deep understanding of technical search and B2B user intent has systematically scaled our qualified pipeline. They are a true partner for any enterprise looking to dominate their market.',
    details:
      'We were struggling to generate consistent enquiries online. Their manufacturing-focused SEO and campaigns helped us dominate key industry searches and significantly increase qualified leads.',
    avatar: '/manufacturer/client-logo/client4.png',
    videoUrl: 'https://iimskills.com/NEWDM/kaushal.mp4',
  },
  {
    name: 'Kohler',
    role: 'HCL Tech',
    quote: 'Thankful for the real-time practical exposure and full support from the team.',
    details:
      'When you operate at a premium enterprise level, you need an agency that respects brand legacy while pushing technical boundaries. Their execution on our digital infrastructure and conversion optimization has been flawless. They make sure we are visible exactly where high-value commercial decision-makers look.',
    avatar: '/manufacturer/client-logo/kohler.png',
    videoUrl: 'https://iimskills.com/NEWDM/anvi.mp4',
  },
  {
    name: 'Jaguar',
    role: 'Perfect metal structures',
    quote: 'Digital Xplode - Driving Measurable Growth for Manufacturing Brands.',
    details:
      'Their performance marketing and LinkedIn strategies completely transformed how we penetrate key commercial accounts. The teams ability to seamlessly blend data-driven paid acquisition with high-impact corporate storytelling gave us an undeniable edge in market visibility.',
    avatar: '/manufacturer/client-logo/jaguar.svg',
    videoUrl: 'https://iimskills.com/NEWDM/anvi.mp4',
  },
  {
    name: 'Philips',
    role: 'Reynobond',
    quote: 'Thankful for the real-time practical exposure and full support from the team.',
    details:
      'We chose Digital Xplode because of their forward-thinking approach to search stack optimization. While other agencies are still stuck in standard SEO, their mastery over AEO and GEO ensured our brand became the definitive answer across traditional platforms and next-gen AI search engines alike.',
    avatar: '/manufacturer/client-logo/client4.png',
    videoUrl: 'https://iimskills.com/NEWDM/kaushal.mp4',
  },
  {
    name: 'Dunhum Bush',
    role: 'HTC',
    quote: 'Thankful for the real-time practical exposure and full support from the team.',
    details:
      'Most agencies fail when trying to market highly technical, industrial equipment. Digital Xplode is the rare exception. Their industrial content marketing speaks the exact language of our engineers and procurement heads, significantly boosting our inbound RFQs and high-value project inquiries.',
    avatar: '/manufacturer/client-logo/dunham.webp',
    videoUrl: 'https://iimskills.com/NEWDM/kaushal.mp4',
  },

  {
    name: 'Alstone',
    role: 'HTC',
    quote: 'Thankful for the real-time practical exposure and full support from the team.',
    details:
      'Operating as a market leader in premium architectural cladding means our digital presence must reflect absolute perfection. Digital Xplode has been instrumental in scaling our brand authority. Their strategic handling of our multi-phase awareness campaigns and targeted search positioning has seamlessly connected our product innovations with top-tier architects, builders, and partners nationwide.',
    avatar: '/manufacturer/client-logo/alstoneindia.png',
    videoUrl: 'https://iimskills.com/NEWDM/kaushal.mp4',
  },
];

export default function StudentSuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const active = testimonials[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsPlaying(false);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
  }, [activeIndex]);

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12">
      <div className="text-center">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
          Student Success Stories
        </p> */}
        <h2 className="text-4xl font-semibold text-slate-900">
           Trusted by Leaders, Validated by Results
        </h2>
        <p className="mx-auto mt-3 font-medium max-w-5xl text-lg text-slate-900">
          Real impact, lasting partnerships, and measurable growth from the brands we scale.
        </p>
      </div>

      <div className="mt-12 grid gap-4 xl:grid-cols-[0.8fr_1fr_1fr] items-start">
        <div className="mt-8 max-h-[560px] overflow-hidden overscroll-contain pr-2 hide-scrollbar">
          <div className="marquee-vertical space-y-4">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group w-full rounded-[12px] border px-4 py-3 text-left transition ${
                  activeIndex === index
                    ? 'border-sky-300 bg-slate-50 shadow-lg'
                    : 'border-slate-300 bg-white hover:border-sky-400'
                }`}
              >
              <div className="flex gap-4">
                <img src={item.avatar} alt={item.name} className="h-16 w-16 rounded-[6px] object-contain" />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-semibold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                    <div className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition ${
                      activeIndex === index
                        ? 'border-sky-300 bg-sky-50 text-sky-600'
                        : 'group-hover:border-sky-300 group-hover:text-sky-600'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4">
                        <path fill="currentColor" d="M9 17l6-5-6-5v10Z" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-600 italic line-clamp-2 leading-snug opacity-80">"{item.quote}"</p>
                </div>
              </div>
            </button>
          ))}
          </div>
        </div>

        <div className="p-6 shadow-sm">
          <div className="flex h-auto flex-col items-center justify-center rounded-[32px] text-center">
            <div className="relative flex-shrink-0 w-full h-[250px] md:h-[550px] rounded-2xl overflow-hidden self-center transition-all duration-500">
              <video
                ref={videoRef}
                src={active.videoUrl}
                className="w-full h-full object-cover"
                playsInline
                loop
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300"
                onClick={() => {
                  const video = videoRef.current;
                  if (!video) return;
                  if (video.paused) {
                    video.play();
                    setIsPlaying(true);
                  } else {
                    video.pause();
                    setIsPlaying(false);
                  }
                }}
              >
                {!isPlaying && (
                  <button
                    type="button"
                    className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
                    aria-label="Play video"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 text-white">
                      <path fill="currentColor" d="M8 5v14l11-7L8 5Z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-0 shadow-sm mt-8">
          <p className="text-lg font-semibold text-sky-500">
            Verified Manufacturing Growth Story
          </p>
          <h3 className="mt-4 text-4xl font-semibold text-slate-900">{active.name}</h3>
          <p className="mt-1 text-xl text-slate-700">{active.role}</p>
          <div className="my-5">
            <div className="gap-4">
              <img src="/icons/comma.png" alt={active.name} className="py-2 w-12" />
              <p className="border-l-4 border-sky-400 sm:mb-8  pl-4 text-xl text-gray-800 font-medium">"{active.quote}"</p>
            </div>
          </div>
          <em className="text-base text-gray-600">"{active.details}"</em>
        </div>
      </div>
    </section>
  );
}
