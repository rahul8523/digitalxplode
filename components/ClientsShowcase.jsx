export default function ClientsShowcase() {
  const logos = [
    '/clientlogo/client1.png',
    '/clientlogo/client2.png',
    '/clientlogo/client3.png',
    '/clientlogo/client4.png',
    '/clientlogo/client5.png',
    '/clientlogo/client6.png',
    '/clientlogo/Layer11.png',
    '/clientlogo/Layer12.png',
    '/clientlogo/Layer13.png',
    '/clientlogo/Layer14.png',
  ];

  return (
    <section className="bg-[f3f9ff] py-12">
      <div className="mx-auto max-w-[1240px] px-4 text-center">
        <h2 className="text-4xl font-semibold text-slate-900">Trusted Growth Partner for Manufacturing Companies</h2>
        <p className="mx-auto mt-3 font-medium max-w-5xl text-lg text-slate-900">Our manufacturing-focused digital marketing strategies have helped industrial brands improve visibility, generate enquiries, and build market authority.</p>

        <div className="m-auto mt-8 flex max-w-5xl items-stretch justify-center sm:gap-0 grid gap-2 grid-cols-2 sm:grid-cols-4">
          <div className="flex-1 rounded-l-2xl bg-[#1e63ff] px-8 py-8 text-white">
            <div className="text-4xl font-semibold">95%</div>
            <div className="mt-2 text-base">Client Retention Rate</div>
          </div>
          <div className="flex-1 bg-[#ff5a00] px-8 py-8 text-white">
            <div className="text-4xl font-semibold">45% +</div>
            <div className="mt-2 text-base">Client Retention Rate</div>
          </div>
          <div className="flex-1 bg-[#1e63ff] px-8 py-8 text-white">
            <div className="text-4xl font-semibold">300%+</div>
            <div className="mt-2 text-base">Client Retention Rate</div>
          </div>
          <div className="flex-1 rounded-r-2xl bg-[#ff5a00] px-8 py-8 text-white">
            <div className="text-4xl font-semibold">55,000+</div>
            <div className="mt-2 text-base">Client Retention Rate</div>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <div className="overflow-hidden bg-white">
            <div className="marquee min-w-[200%] flex items-center gap-6">
              {[...logos.slice(0, 10), ...logos.slice(0, 10)].map((src, i) => (
                <div key={i} className="flex-shrink-0 rounded-3xl bg-slate-50 p-4 shadow-sm">
                  <img src={src} alt={`Client ${i + 1}`} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden bg-white">
            <div className="marquee marquee-reverse min-w-[200%] flex items-center gap-6 px-6 py-6">
              {[...logos.slice(0, 10), ...logos.slice(0, 10)].map((src, i) => (
                <div key={i} className="flex-shrink-0 rounded-3xl bg-slate-50 p-4 shadow-sm">
                  <img src={src} alt={`Client ${i + 6}`} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
