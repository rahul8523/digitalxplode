import { useEffect, useState } from 'react';

export default function ClientsShowcase() {
  const stats = [
    { label: 'Client Retention Rate', value: 95, suffix: '%' , style: 'rounded-l-2xl bg-[#1e63ff]'},
    { label: 'Average Growth Received', value: 45, suffix: '%' , style: 'bg-[#ff5a00]'},
    { label: 'Clients Served', value: 500, suffix: '+' , style: 'bg-[#1e63ff]'},
    { label: 'Leads Generated', value: 55000, suffix: '+' , style: 'rounded-r-2xl bg-[#ff5a00]'},
  ];

  const clientLogos = [
    '/manufacturer/client-logo/alstoneindia.png',
    '/manufacturer/client-logo/argentium.png',
    '/manufacturer/client-logo/foreverkidz.png',
    '/manufacturer/client-logo/Hikon.png',
    '/manufacturer/client-logo/pms.png',
    '/manufacturer/client-logo/starline.avif',
    '/manufacturer/client-logo/touchofindia.png',
    '/manufacturer/client-logo/mechfox.png',
  ];

  const layerLogos = [
    '/manufacturer/client-logo/Layer11.png',
    '/manufacturer/client-logo/Layer12.png',
    '/manufacturer/client-logo/KNEngineering.png',
    '/manufacturer/client-logo/sankon.png',
    '/manufacturer/client-logo/web-logo.webp',
    '/manufacturer/client-logo/sodhisons.png',
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    let rafId;
    const duration = 1200;
    const start = performance.now();

    const update = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      setCounters(stats.map((stat) => Math.ceil(stat.value * progress)));
      if (progress < 1) {
        rafId = requestAnimationFrame(update);
      }
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="bg-[f3f9ff] py-12" id="portfolio">
      <div className="mx-auto max-w-[1240px] px-4 text-center">
        <h2 className="text-4xl font-semibold text-slate-900">Trusted Growth Partner for Manufacturing Companies</h2>
        <p className="mx-auto mt-3 font-medium max-w-5xl text-lg text-slate-900">Our manufacturing-focused digital marketing strategies have helped industrial brands improve visibility, generate enquiries, and build market authority.</p>

        <div className="m-auto mt-8 grid max-w-5xl sm:gap-0 gap-1 grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`px-2 py-5 sm:px-5 sm:py-6 text-white ${stat.style}`}>
              <div className="text-3xl font-semibold sm:text-4xl">
                {counters[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="mt-2 text-xs sm:text-base sm:text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          <div className="overflow-hidden">
            <div className="marquee min-w-[200%] flex items-center gap-6">
              {[...layerLogos, ...layerLogos].map((src, i) => (
                <div key={i} className="flex-shrink-0 rounded-[12px] bg-white overflow-hidden border bg-slate-50 p-4 border-sky-300">
                  <img src={src} alt={`Layer logo ${i + 1}`} className="h-[50px] w-[180px] object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="marquee marquee-reverse min-w-[200%] flex items-center gap-6 px-6 py-6">
              {[...clientLogos, ...clientLogos].map((src, i) => (
                <div key={i} className="flex-shrink-0 rounded-[12px] bg-white overflow-hidden border bg-slate-50 p-4 border-sky-300">
                  <img
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="h-[50px] w-[180px] object-contain"
                    style={{ filter: src === clientLogos[clientLogos.length - 1] ? 'invert(1)' : 'none' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
