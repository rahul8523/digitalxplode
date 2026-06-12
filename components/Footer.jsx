export default function Footer() {
  return (
    <footer className="relative z-60 bg-black text-slate-950 border-t border-slate-200 pb-20">
      <div className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid sm:gap-10 lg:grid-cols-[1.5fr_1fr_1fr] items-center justify-items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src="/logo/whitelogo.png" alt="Digital Xplode" className="h-12 w-auto" />
            </div>

            <div className="relative overflow-hidden rounded-[2px] border border-slate-200 shadow-sm">
              <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 bg-white/95 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur">
                <span>Maps</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                </svg>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.197954542648!2d77.31486877549938!3d28.593837675685975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5162452931f%3A0x37452a025c89e8f6!2sDigital%20Xplode%20(P)%20Ltd.%20-%20Best%20Digital%20Marketing%20%26%20Web%20Development%20Company%20in%20Noida!5e0!3m2!1sen!2sin!4v1781271498992!5m2!1sen!2sin"
                className="h-auto w-full sm:w-[400px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="border-t mt-10 border-slate-200 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Address</p>
             <img src="/contact/flag.jpg" alt="Digital Xplode" className="mt-4 sm:mt-8 h-9 w-auto" />
            <p className="text-white mt-2 sm:mt-8 text-base leading-8 text-slate-900">
              C-50 G/03, Sector 6, Noida, Uttar Pradesh 201301 India
            </p>
          </div>

          <div className="w-full border-t sm:mt-10 border-slate-200 pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">Contact</p>
            <div className="text-base leading-8 mt-4 text-slate-900">
              <div>
                <img src="/contact/call.png" alt="Digital Xplode" className="h-12 w-auto" />
                <p className="font-semibold text-sky-400 mt-2">IND: <a href="tel:+919560785068" className="text-slate-900 transition hover:text-sky-600 text-white">+91-956-078-5068</a></p>
                <p className="font-semibold text-sky-400">IND: <a href="tel:+919971068400" className="text-slate-900 transition hover:text-sky-600 text-white">+91-997-10-68400</a></p>
              </div>
              <div>
                <p className="font-semibold text-sky-400">Enquiry: <a href="mailto:info@digitalxplode.com" className="text-slate-900 transition hover:text-sky-600 text-white">info@digitalxplode.com</a></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200pt-6">
            <p className="text-center text-sm text-slate-500 pt-4">
              © Copyright 2016 - 2026. All Rights Reserved
            </p>
        </div>
      </div>
    </footer>
  );
}
