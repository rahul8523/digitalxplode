'use client';

import { useState, useRef } from 'react';

const teamMembers = [
  {
    name: 'Sudhanshu Arora',
    position: 'Founder and CEO',
    badge: 'Founder and CEO',
    title: 'A visionary growth architect backed by 15 years of deep industry experience building high-performing enterprise engines from the ground up.',
    description:
      'Sudhanshu shapes the strategic DNA of the agency by seamlessly bridging complex technical innovation with absolute operational excellence. He steers our high-level corporate direction and expansion, ensuring that our internal team capabilities scale in perfect alignment with our growing global client footprint. ',
    image: '/team/CEO.png',
    linkedin: 'https://www.linkedin.com/in/sudhanshu-arora-31058424/',
  },
  {
    name: 'Atul Singh',
    position: 'Director Sales',
    badge: 'Director Sales',
    title: 'A veteran growth strategist with over 12 years of core sales mastery dedicated to unlocking enterprise revenue pipeline.',
    description:
      'Atul commands our business development infrastructure, specializing in structuring high-value enterprise partnerships and entering complex B2B markets. He consults directly with manufacturing leaders to architect scalable, long-term marketing solutions that place brands on a definitive path toward measurable commercial growth. ',
    image: '/team/atulsir.jpg',
    linkedin: 'https://www.linkedin.com/in/atul-singh-76a57545/',
  },
  {
    name: 'Shweta Mishra',
    position: 'Chief Operating Officer',
    badge: 'Chief Operating Officer (COO)',
    title: 'A robust operational anchor bringing over 15 years of cross-functional excellence across enterprise Sales, Marketing, and Operations. ',
    description:
      'Shweta directs daily agency workflows and oversees our delivery infrastructure to keep it agile and scalable. She manages high-level team coordination and critical client relationships, optimizing agency processes to guarantee the flawless, timely execution of complex multi-channel campaigns. ',
    image: '/team/shweta.jpg',
    linkedin: 'https://www.linkedin.com/in/shweta-mishra-32a9a93b1/',
  },
  {
    name: 'Manjeet Kumar',
    position: 'Creative Head',
    badge: 'Creative Head',
    title: 'A premium visual strategist specializing in high-conversion UI/UX, packaging architecture, and advanced video storytelling. ',
    description:
      'Manjeet leads and mentors our core design cell, pushing creative boundaries to turn complex business concepts into clean visual stories. He bridges the gap between artistic innovation and commercial business strategy, ensuring that all client collateral commands immediate industry authority and drives user engagement.',
    image: '/team/Manjeet.jpg',
  },
  {
    name: 'Hareesh Kumar',
    position: 'Performance Marketing',
    badge: 'Performance Marketing Specialist ',
    title: 'A data-driven acquisition expert specializing in engineering high-converting B2B paid media campaigns across Google and LinkedIn networks.',
    description:
      'Harish drives our paid search and performance marketing engines to turn advertising spend into a predictable revenue pipeline. He handles algorithmic bidding precision, hyper-segmented audience targeting, and continuous trend analysis to consistently lower cost-per-lead metrics and maximize client ROI.',
    image: '/team/Hareesh.jpg',
  },
  {
    name: 'Tilak Gautam',
    position: 'Sr. Web Developer',
    badge: 'Senior Web Developer',
    title: 'A senior technical architect specializing in building high-speed, scalable, and full-stack enterprise web infrastructures.',
    description:
      'Tilak transforms complex technical requirements into optimized digital assets using modern tech stacks and custom CMS integrations. He handles clean semantic code development and robust backend architectures, ensuring that client websites maintain exceptional load speeds, ironclad security, and maximum Conversion Rate Optimization (CRO) under heavy traffic volumes.',
    image: '/team/tilak-n.jpg',
  },
  // {
  //   name: 'Rahul Singh Chauhan',
  //   position: 'Full Stack Developer',
  //   badge: 'Full Stack Developer',
  //   title: 'A full-stack developer expert at engineering fluid, end-to-end web applications by bridging front-end layouts with robust back-end logic.',
  //   description:
  //     'Rahul manages database workflows, server-side configurations, and custom application logic to ensure digital assets run flawlessly. He focuses on deploying modern tech stacks and deep API integrations, guaranteeing structural integrity, rapid response times, and an uncompromising foundation for complex B2B platforms. ',
  //   image: '/team/Rahul-new.jpg',
  // },
  {
    name: 'Aditya Sharma',
    position: 'Google Ad Expert',
    badge: 'Google Ad Expert',
    title: 'A search engine marketing specialist expert in turning targeted Google Paid Search and Display spend into scalable B2B leads. ',
    description:
      'Aditya manages daily search campaign architectures, handling rigorous keyword intent mapping and advanced negative-keyword funnels to eliminate budget waste. He continuously monitors quality scores and real-time click-through rates, securing premium ad placements that keep brands top-of-mind for key decision-makers.',
    image: '/team/Aditya.png',
  },
  {
    name: 'Aniket Kumar',
    position: 'SEO Head',
    badge: 'SEO Head',
    title: 'A technical search strategist expert at engineering deep keyword architectures to dominate high-intent B2B search rankings.',
    description:
      'Aniket commands our organic search frameworks, executing technical site audits, semantic content silo structures, and advanced schema maps. He targets high-value keyword clusters that reach procurement officers, driving sustained organic growth and positioning manufacturing brands ahead of global competitors. ',
    image: '/team/aniket.png',
  },
  {
    name: 'Shubham Tiwari',
    position: 'Sr. SM Specialist',
    badge: 'Senior Social Media Specialist',
    title: 'A senior brand strategist specializing in orchestrating multi-phase social frameworks that build long-term market authority.',
    description:
      'Shubham designs comprehensive corporate communication systems, content calendars, and trend-forecasting models aligned with high-level business goals. He refines organic distribution tactics based on algorithm changes and audience analytics, transforming standard corporate updates into widely visible, market-defining digital movements.',
    image: '/team/Shubham.jpg',
  },
  {
    name: 'Pratima Jain',
    position: 'Content Strategist',
    badge: 'Social Media Specialist & Content Creator',
    title: 'A corporate communication specialist expert at crafting high-impact organic social campaigns that communicate brand legacy.',
    description:
      'Pratima handles multi-channel social distribution and audience engagement strategies, specifically capturing the attention of major industry stakeholders and CXOs. She translates complex B2B value propositions into educational asset hubs and narratives, building highly interactive professional communities that drive brand recall.',
    image: '/team/Pratima.jpg',
  },
  {
    name: 'Atul Kumar',
    position: 'Performance Marketing Executive ',
    badge: 'Performance Marketing Executive',
    title: 'A campaign analyst specializing in the operational management, optimization, and tracking of multi-channel digital ad accounts.',
    description:
      'Atul supports the paid acquisition team by setting up audience segments, managing budget tracking, and conducting rigorous A/B testing on ad variations. He isolates micro-trends within post-click user behavior and campaign analytics, providing the actionable data required to steadily drop cost-per-lead metrics.',
    image: '/team/atul.jpeg',
  },
  {
    name: 'Vishal Singh',
    position: 'Social Media Executive',
    badge: 'Social Media Executive ',
    title: 'A digital community coordinator specializing in real-time professional network monitoring and seamless feed optimization.',
    description:
      'Vishal manages day-to-day social platform operations and executes structured content schedules to keep corporate profiles active. He handles accurate asset tagging, rapid audience interaction cycles, and brand tone enforcement, ensuring that digital communities remain responsive and reflective of a premium corporate identity.',
    image: '/team/Vishal.jpg',
  },

  {
    name: 'Shikha Kushwaha',
    position: 'Exec. Web Developer',
    badge: 'Executive Web Developer',
    title: 'A front-end development specialist dedicated to transforming complex wireframes into responsive, pixel-perfect web interfaces.',
    description:
      'Shikha handles front-end component optimization, clean semantic formatting, and cross-browser responsiveness across all modern devices. Her technical execution ensures that website layouts natively support technical SEO benchmarks while delivering slick, high-speed user experiences that minimize bounce rates.',
    image: '/team/shikhaa.jpeg',
  },
  {
    name: 'Shruti Verma',
    position: 'Lead Graphic Designer',
    badge: 'Lead Graphic Designer ',
    title: 'A senior visual designer expert at commanding corporate aesthetics and translating high-level branding concepts into premium assets.',
    description:
      'Shruti sets the creative benchmark for the design cell, focusing on maintaining strict visual consistency across multi-channel corporate marketing campaigns. She refines asset guidelines and mentors team execution, ensuring that complex data layouts are deployed with immaculate precision, elite typography, and high brand authority. ',
    image: '/team/Shruti.jpg',
  },
  {
    name: 'Priyanshu',
    position: 'Sr. Graphic Designer',
    badge: 'Senior Graphic Designer ',
    title: 'A senior graphic artist specializing in structuring conversion-focused visual layouts and premium corporate vector artwork.',
    description:
      'Priyanshu handles the layout engineering of key digital assets, strategically structuring visual components to guide the users eye toward critical conversion focal points. He incorporates modern design trends into corporate collateral, transforming dense technical data into beautifully clean, easily digestible visual materials. ',
    image: '/team/Priyanshu.jpg',
  },
  {
    name: 'Shivika Pandey',
    position: 'Graphic & CRE',
    badge: 'Executive Graphic Designer & Content Creator ',
    title: 'A hybrid creative specialist specializing in fusing striking graphic layouts with agile, high-engagement copywriting.',
    description:
      'Shivika handles the creation of multi-dimensional visual assets tailored specifically for fast-paced professional feeds. She balances copy objectives with graphic formatting to explain complex, technical product attributes through clean storytelling, engineering assets that maximize click-through rates. ',
    image: '/team/Shivika.jpeg',
  },
  {
    name: 'Ankita Bisht',
    position: 'Exec. Graphic Designer',
    badge: 'Executive Graphic Designer ',
    title: 'A precision designer expert at delivering clean, high-fidelity digital graphics under tight corporate timelines. ',
    description:
      'Ankita manages digital interface components, color theory application, and vector assets for diverse marketing channels. She collaborates closely with the performance and content teams to align structured typography with direct-response marketing principles, ensuring that promotional banners and corporate decks remain sleek and on-brand. ',
    image: '/team/Ankita.jpg',
  },
  {
    name: 'Navneet Pandey',
    position: 'Exec. Graphic Designer',
    badge: 'Executive Graphic Designer',
    title: 'A corporate asset designer specializing in digital illustration and geometric layout structuring for physical and digital media.',
    description:
      'Navneet handles the development of elegant visual assets from rough abstract concepts, focusing heavily on maximizing visual clarity within corporate collateral. By strictly adhering to established brand identity kits, he ensures complete visual continuity across all marketing materials to reinforce corporate trust. ',
    image: '/team/Navneet.jpg',
  },
  {
    name: 'Shaista',
    position: 'SEO Executive',
    badge: 'SEO Executive',
    title: 'An organic optimization specialist specializing in daily search analytics, crawlability audits, and long-tail metadata optimization.',
    description:
      'Shaista manages the tactical execution of our SEO strategies, tracking on-page ranking performance and auditing backlink profile health. She continuously evaluates search trend data and deploys targeted long-tail optimizations within site text, isolating immediate ranking opportunities to drive consistent inbound buyer enquiries.',
    image: '/team/Shaista.png',
  },
  {
    name: 'Archana',
    position: 'Content Writer',
    badge: 'Content Writer',
    title: 'A strategic wordsmith specializing in translating complex corporate and technical concepts into high-converting, authoritative B2B copy.',
    description:
      'Archana handles the development of high-intent content assets, sector-specific insights, and inbound lead magnets that nurture prospects through long B2B sales cycles. By collaborating closely with the SEO and design teams, she creates optimized web copy, solution guides, and educational materials engineered to capture procurement buyer interest and turn website traffic into qualified requests for quotes (RFQs).',
    image: '/team/archana.png',
  },
];

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsRef = useRef(null);
  const dragState = useRef({ isDown: false, isDragging: false, startX: 0, scrollLeft: 0 });
  const activeMember = teamMembers[activeIndex];

  const handleWheel = (event) => {
    if (!tabsRef.current) return;
    const { scrollWidth, clientWidth } = tabsRef.current;
    if (scrollWidth <= clientWidth) return;

    event.preventDefault();
    tabsRef.current.scrollLeft += event.deltaY;
  };

  const handlePointerDown = (event) => {
    if (!tabsRef.current) return;

    dragState.current.isDown = true;
    dragState.current.isDragging = false;
    dragState.current.startX = event.clientX - tabsRef.current.getBoundingClientRect().left;
    dragState.current.scrollLeft = tabsRef.current.scrollLeft;
  };

  const handlePointerMove = (event) => {
    if (!tabsRef.current || !dragState.current.isDown) return;

    const x = event.clientX - tabsRef.current.getBoundingClientRect().left;
    const walk = x - dragState.current.startX;
    if (!dragState.current.isDragging && Math.abs(walk) < 5) return;

    dragState.current.isDragging = true;
    event.preventDefault();
    tabsRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const handlePointerUp = () => {
    dragState.current.isDown = false;
    dragState.current.isDragging = false;
  };

  return (
    <section className="mx-auto max-w-[1240px] py-16 px-4 sm:px-6" id="xplore">
      <div className="mx-auto max-w-4xl text-center">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.36em] text-slate-500">Meet your growth experts</p> */}
        <h2 className="text-4xl font-semibold text-slate-900">
          Meet your growth experts
        </h2>
        <p className="mx-auto mt-3 font-medium max-w-5xl text-lg text-slate-900">
          Work with a team of SEO strategists, performance marketers, content specialists, and Al search experts who understand how manufacturing businesses generate leads and revenue.
        </p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="px-4 py-4 sm:px-6 ">
          <div
            ref={tabsRef}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="flex items-center gap-3 overflow-x-auto overflow-y-hidden pb-2 hide-scrollbar select-none touch-pan-x cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-x' }}
          >
            {teamMembers.map((member, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[150px] team-dx shrink-0 rounded-[28px] border px-4 py-4 text-left transition-colors duration-200 ${isActive
                    ? 'border-orange-300 bg-orange-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`h-14 w-14 rounded-full border ${isActive ? 'border-orange-300 bg-white' : 'border-slate-200 bg-slate-100'}`}>
                      <img src={member.image} alt={member.name} className="h-full w-full rounded-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className={`truncate text-base font-semibold ${isActive ? 'text-slate-900' : 'text-slate-800'}`}>
                        {member.name}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">{member.position}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid sm:m-10 gap-6 lg:grid-cols-[0.8fr_1.2fr] shadow-2xl rounded-[32px]">
          <div className="rounded-[32px] p-6 text-center text-black sm:py-12">
            <div className="m-auto max-w-[260px] overflow-hidden rounded-full border-1 border-white/6 p-1">
              <img src={activeMember.image} alt={activeMember.name} className="h-[260px] w-[260px] rounded-full object-cover" />
            </div>
            <div className="mt-8 space-y-2">
              {/* <p className="text-sm uppercase tracking-[0.3em] text-black">{activeMember.badge}</p> */}
              <h3 className="text-3xl font-semibold text-black sm:text-4xl">{activeMember.name}</h3>
              <p className="text-base font-semibold text-black">{activeMember.badge}</p>
            </div>
          </div>

          <div className="p-6 shadow-sm sm:py-12 border-t-[5px] border-t-sky-500 rounded-tr-[8px] rounded-bl-[8px]">
            {/* <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-sm font-semibold text-black">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              {activeMember.badge}
            </span> */}
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
              {activeMember.title}
            </h3>
            <p className="mt-5 text-base font-medium text-slate-900">
              <em>
                {activeMember.description}
              </em>
            </p>
            {activeMember.linkedin && (
              <a
                href={activeMember.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-600"
              >
                Connect on Linkedin
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
