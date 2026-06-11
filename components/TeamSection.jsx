'use client';

import { useState, useRef } from 'react';

const teamMembers = [
  {
    name: 'Sudhanshu Arora',
    position: 'Founder and CEO',
    badge: 'Founder and CEO',
    title: 'Leading growth for manufacturing brands with data-driven performance',
    description:
      'Strategic growth planning and digital transformation for manufacturing brands, focusing on visibility, credibility, and measurable lead generation. Performance marketing, SEO, and analytics are aligned with corporate goals to support sustained business outcomes. Campaigns are structured to deliver qualified enquiries and long-term momentum.',
    image: '/team/CEO.png',
    linkedin: 'https://www.linkedin.com/in/sudhanshuarora',
  },
  {
    name: 'Kushagra Singh',
    position: 'Vice President',
    badge: 'Vice President',
    title: 'Driving revenue growth through strategic partnerships and performance optimisation',
    description:
      'Revenue-focused marketing and commercial alignment ensure campaigns support sales objectives and customer acquisition goals. Performance metrics are monitored closely to optimise funnels and improve lead quality. Strategy execution is designed to generate sustained business value.',
    image: '/team/Kush.jpg',
    linkedin: 'https://www.linkedin.com/in/kushagrasingh',
  },
  {
    name: 'Shweta Mishra',
    position: 'Head Operations',
    badge: 'Head Operations',
    title: 'Ensuring seamless execution and scalable operations for every campaign',
    description:
      'Operational leadership coordinates teams, timelines, and systems to deliver high-quality execution without compromise. Efficiency and scalability are prioritised for each initiative. Delivery processes are structured to maintain consistency and client satisfaction.',
    image: '/team/shweta.jpg',
    linkedin: 'https://www.linkedin.com/in/shwetamishra',
  },
  {
    name: 'Manjeet Kumar',
    position: 'Creative Director',
    badge: 'Creative Director',
    title: 'Crafting premium brand storytelling that builds trust and recognition',
    description:
      'Creative direction focuses on polished visual narratives and brand experiences that elevate perception. Campaigns are developed to resonate with industrial buyers and decision-makers. Messaging is designed to reinforce credibility and market positioning.',
    image: '/team/Manjeet.jpg',
  },
  {
    name: 'Hareesh Kumar',
    position: 'Ads Expert',
    badge: 'Ads Expert',
    title: 'Building targeted advertising strategies for qualified lead acquisition',
    description:
      'Paid media strategies target the right audience segments to maximise relevance and response. Campaign optimisation concentrates on lead quality and cost efficiency. Performance is measured through enquiries, conversions, and return on investment.',
    image: '/team/Hareesh.jpg',
  },
  {
    name: 'Tilak Gautam',
    position: 'Sr. Web Developer',
    badge: 'Sr. Web Developer',
    title: 'Developing fast, conversion-focused websites with premium presentation',
    description:
      'Web development is oriented around speed, usability, and trust-building presentation. Site architecture supports clear messaging and strong calls to action. Technical foundations are built for reliability and future scalability.',
    image: '/team/tilak-n.jpg',
  },
  {
    name: 'Rahul Singh Chauhan',
    position: 'Full Stack Developer',
    badge: 'Full Stack Developer',
    title: 'Implementing scalable full stack systems with secure user experiences',
    description:
      'Full stack delivery combines robust backend architecture with polished frontend usability. Security and maintainability are core priorities. The development approach supports seamless performance and dependable growth.',
    image: '/team/Rahul-new.jpg',
  },
  {
    name: 'Shikha Kushwaha',
    position: 'Exec. Web Developer',
    badge: 'Executive Web Developer',
    title: 'Delivering responsive web experiences that perform on every device',
    description:
      'Responsive web solutions are crafted for a consistent, professional experience across screens. Usability and visual quality are balanced for optimal engagement. Attention is given to performance, layout, and interactive clarity.',
    image: '/team/shikhaa.jpeg',
  },
  {
    name: 'Aditya Sharma',
    position: 'Ads Manager',
    badge: 'Sr.Manager Google Adword',
    title: 'Optimising paid campaigns for measurable traffic and business growth',
    description:
      'Paid campaign management is data-driven and focused on achieving measurable outcomes. Targeting and creative are refined to support lead generation and conversion performance. Budget efficiency is maintained through continuous optimisation.',
    image: '/team/Aditya.png',
  },
  {
    name: 'Pratima Jain',
    position: 'Content Strategist',
    badge: 'Strategy Specialist cum Content Writer',
    title: 'Designing content strategies that align brand voice with market demand',
    description:
      'Content strategy emphasises clear messaging and audience relevance for industrial buyers. Copy and content plans are structured to support trust, differentiation, and lead generation. Communications are aligned with commercial objectives and search intent.',
    image: '/team/Pratima.jpg',
  },
  {
    name: 'Shubham Tiwari',
    position: 'Sr. Social Strategist',
    badge: 'Sr. Social Strategist | Digital Marketer',
    title: 'Designing social campaigns that increase engagement and lead generation',
    description:
      'Social strategy combines targeted content and audience engagement to support brand visibility. Campaigns are crafted for relevance, credibility, and measurable interest. Execution focuses on generating qualified opportunities through digital channels.',
    image: '/team/Shubham.jpg',
  },
  {
    name: 'Vishal Singh',
    position: 'Content Creator',
    badge: 'Executive – Social Media Strategist cum Content Writer',
    title: 'Producing digital content that enhances brand clarity and recall',
    description:
      'Content creation is focused on professionalism, consistency, and brand impact. Visual and written assets are developed to support campaigns and buyer engagement. The approach emphasises clarity, relevance, and memorability.',
    image: '/team/Vishal.jpg',
  },
  {
    name: 'Priyanshu',
    position: 'Sr. Graphic Designer',
    badge: 'Sr. Graphic Designer',
    title: 'Designing premium visuals that elevate brand identity and campaigns',
    description:
      'Graphic design delivers polished visual assets that reinforce brand identity and campaign messaging. Creative quality is matched with commercial clarity. The work supports stronger market positioning and visual differentiation.',
    image: '/team/Priyanshu.jpg',
  },
  {
    name: 'Shruti Verma',
    position: 'Exec. Web Developer',
    badge: 'Sr. Graphic Designer',
    title: 'Building intuitive digital interfaces that improve performance and conversions',
    description:
      'Interface development focuses on intuitive navigation and user-driven effectiveness. Page flows are designed to make decisions easier and engagement clearer. The result is a more professional digital experience that supports conversion outcomes.',
    image: '/team/Shruti.jpg',
  },
  {
    name: 'Ankita Bisht',
    position: 'Exec. Graphic Designer',
    badge: 'Executive Graphic Designer',
    title: 'Crafting polished visuals that support brand identity and campaign goals',
    description:
      'Visual and layout design is aligned with brand consistency and strategic objectives. Creative outputs are structured to support commercial messaging and audience engagement. Quality is balanced with clarity for effective communication.',
    image: '/team/Ankita.jpg',
  },
  {
    name: 'Shivika Pandey',
    position: 'Graphic & CRE',
    badge: 'Graphic & Client Relationship Executive',
    title: 'Combining design and messaging to strengthen client-facing brand experiences',
    description:
      'Design and client communication are integrated to build brand confidence and clarity. Creative assets are developed with customer-facing professionalism in mind. Messaging is crafted to support business credibility and engagement.',
    image: '/team/Shivika.jpeg',
  },
  {
    name: 'Navneet Pandey',
    position: 'Exec. Graphic Designer',
    badge: 'Executive Graphic Designer',
    title: 'Creating campaign graphics that amplify visibility and attract customers',
    description:
      'Campaign graphic design emphasises visibility, clarity, and alignment with marketing goals. Visual assets are created to support audience attention and conversion. The focus is on strong creative impact and consistent messaging.',
    image: '/team/Navneet.jpg',
  },
  {
    name: 'Shaista',
    position: 'SEO Executive',
    badge: 'SEO Executive',
    title: 'Boosting search visibility through strategic SEO execution and keyword optimisation',
    description:
      'SEO execution improves organic visibility through keyword strategy, content optimisation, and technical refinement. Search performance is aligned with business objectives and industry demand. The process supports qualified traffic and better search rankings.',
    image: '/team/Shaista.jpg',
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
    <section className="mx-auto max-w-[1240px] py-16 px-4 sm:px-6">
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
              <p className="text-xl font-semibold text-black">{activeMember.position}</p>
            </div>
          </div>

          <div className="p-6 shadow-sm sm:py-12 border-t-[5px] border-t-sky-500 rounded-tr-[8px] rounded-bl-[8px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-sm font-semibold text-black">
              <span className="h-2 w-2 rounded-full bg-sky-500"></span>
              {activeMember.badge}
            </span>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {activeMember.title}
            </h3>
            <p className="mt-5 text-lg font-semibold text-slate-900">
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
