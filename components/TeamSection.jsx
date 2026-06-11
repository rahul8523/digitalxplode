'use client';

import { useState, useRef } from 'react';

const teamMembers = [
  {
    name: 'Sudhanshu Arora',
    position: 'Founder and CEO',
    badge: 'Founder and CEO',
    title: 'Leading growth for manufacturing brands with digital performance',
    description:
      'I lead strategic growth plans, digital transformation and high-impact campaigns to make your brand more visible and credible. I ensure every initiative is measurable and aligned to business goals, delivering the right leads at the right time. This is how we turn growth into sustainable momentum.',
    image: '/team/CEO.png',
    linkedin: 'https://www.linkedin.com/in/sudhanshuarora',
  },
  {
    name: 'Kushagra Singh',
    position: 'Vice President',
    badge: 'Vice President',
    title: 'Driving revenue growth through partnerships and conversion strategy',
    description:
      'I connect sales goals with marketing execution, creating campaigns that generate qualified leads and long-term customer relationships. I monitor performance closely and optimise every funnel for conversion. My focus is on revenue-driven marketing with measurable business impact.',
    image: '/team/Kush.jpg',
    linkedin: 'https://www.linkedin.com/in/kushagrasingh',
  },
  {
    name: 'Shweta Mishra',
    position: 'Head Operations',
    badge: 'Head Operations',
    title: 'Ensuring flawless execution and scalable operations for every campaign',
    description:
      'I keep project delivery smooth by coordinating teams, systems, and timelines with precision. I make sure every campaign runs efficiently and every client promise is met without compromise. That means reliable execution and exceptional quality across the board.',
    image: '/team/shweta.jpg',
    linkedin: 'https://www.linkedin.com/in/shwetamishra',
  },
  {
    name: 'Manjeet Kumar',
    position: 'Creative Director',
    badge: 'Creative Director',
    title: 'Crafting premium brand storytelling that builds trust and recognition',
    description:
      'I design premium visual experiences that make your brand look modern, polished, and unforgettable. I translate your story into creative campaigns that build emotional trust and strong recognition. Every detail is crafted to elevate your brand presence online.',
    image: '/team/Manjeet.jpg',
  },
  {
    name: 'Hareesh Kumar',
    position: 'Ads Expert',
    badge: 'Ads Expert',
    title: 'Building targeted ad funnels for better qualified leads',
    description:
      'I create paid media strategies that focus on the right audience, not just clicks. I optimise ads continuously to lower spending and improve lead quality. The result is more efficient campaigns that bring real enquiries and business results.',
    image: '/team/Hareesh.jpg',
  },
  {
    name: 'Tilak Gautam',
    position: 'Sr. Web Developer',
    badge: 'Sr. Web Developer',
    title: 'Developing fast conversion websites that look premium and credible',
    description:
      'I build websites that load quickly, look premium, and guide visitors toward action. I focus on clean code, strong UX, and clear message hierarchy. This helps your brand capture attention and convert more visitors into customers.',
    image: '/team/tilak-n.jpg',
  },
  {
    name: 'Rahul Singh Chauhan',
    position: 'Full Stack Developer',
    badge: 'Full Stack Developer',
    title: 'Implementing scalable full stack systems with secure UX',
    description:
      'I deliver reliable backend architecture and smooth frontend interfaces that work together seamlessly. I prioritise speed, security, and long-term maintainability. That means your platform performs well and evolves easily as your business grows.',
    image: '/team/Rahul-new.jpg',
  },
  {
    name: 'Shikha Kushwaha',
    position: 'Exec. Web Developer',
    badge: 'Executive Web Developer',
    title: 'Delivering responsive web experiences that feel premium on every device',
    description:
      'I create responsive websites that look great on mobile, tablet, and desktop. I make sure every user interaction feels smooth and professional. This helps your audience trust your brand and stay engaged longer.',
    image: '/team/shikhaa.jpeg',
  },
  {
    name: 'Aditya Sharma',
    position: 'Ads Manager',
    badge: 'Sr.Manager Google Adword',
    title: 'Optimising paid campaigns for measurable traffic and growth',
    description:
      'I manage paid ad campaigns with a focus on ROI, testing creative and targeting for best performance. I use data to refine messaging, bids, and audience selection. That keeps campaigns efficient while generating more qualified enquiries.',
    image: '/team/Aditya.png',
  },
  {
    name: 'Pratima Jain',
    position: 'Content Strategist',
    badge: 'Strategy Specialist cum Content Writer',
    title: 'Crafting content strategies that connect brand voice to customers',
    description:
      'I develop content plans that reflect your brand voice and speak directly to your ideal customers. I align messaging with customer needs to build trust and motivate action. The result is clear communication that supports sales and growth.',
    image: '/team/Pratima.jpg',
  },
  {
    name: 'Shubham Tiwari',
    position: 'Sr. Social Strategist',
    badge: 'Sr. Social Strategist | Digital Marketer',
    title: 'Designing social campaigns that grow engagement and generate leads',
    description:
      'I build social media strategies that increase visibility and attract the right audience. I optimise post frequency, creative and messaging for higher engagement. This helps your brand generate interest and convert followers into customers.',
    image: '/team/Shubham.jpg',
  },
  {
    name: 'Vishal Singh',
    position: 'Content Creator',
    badge: 'Executive – Social Media Strategist cum Content Writer',
    title: 'Producing digital content that boosts clarity and brand recall',
    description:
      'I create visual and written content that reflects your brand personality and resonates with your audience. I focus on clarity, consistency, and creativity for better recall. This makes your campaigns feel professional and memorable.',
    image: '/team/Vishal.jpg',
  },
  {
    name: 'Priyanshu',
    position: 'Sr. Graphic Designer',
    badge: 'Sr. Graphic Designer',
    title: 'Designing premium visuals that elevate brand presence and impact',
    description:
      'I design premium graphics and visual assets that strengthen your brand identity. I ensure every design element supports your campaign message clearly. The outcome is polished creative that stands out in a crowded market.',
    image: '/team/Priyanshu.jpg',
  },
  {
    name: 'Shruti Verma',
    position: 'Exec. Web Developer',
    badge: 'Sr. Graphic Designer',
    title: 'Building intuitive web interfaces that increase visitor conversions',
    description:
      'I create user-friendly website flows that make information easy to find and actions simple to take. I focus on clean layout, clear navigation, and faster conversion paths. This helps visitors feel confident and act quickly.',
    image: '/team/Shruti.jpg',
  },
  {
    name: 'Ankita Bisht',
    position: 'Exec. Graphic Designer',
    badge: 'Executive Graphic Designer',
    title: 'Crafting polished visuals that strengthen brand identity and campaigns',
    description:
      'I produce polished visual content that keeps your brand consistent and memorable. I craft layouts that guide the viewer and support your marketing goals. The result is attractive design with a clear business purpose.',
    image: '/team/Ankita.jpg',
  },
  {
    name: 'Shivika Pandey',
    position: 'Graphic & CRE',
    badge: 'Graphic & Client Relationship Executive',
    title: 'Combining design and messaging to strengthen client brand experiences',
    description:
      'I merge design quality with strong client messaging to build brand confidence and clarity. I help every creative asset speak to your customer’s needs. This makes your communication look smart, professional, and persuasive.',
    image: '/team/Shivika.jpeg',
  },
  {
    name: 'Navneet Pandey',
    position: 'Exec. Graphic Designer',
    badge: 'Executive Graphic Designer',
    title: 'Creating campaign graphics that amplify visibility and attract customers',
    description:
      'I design campaign visuals that capture attention and support your business goals. I make sure the creative is bold, clear, and aligned with your message. That helps your brand attract the ideal customer every time.',
    image: '/team/Navneet.jpg',
  },
  {
    name: 'Shaista',
    position: 'SEO Executive',
    badge: 'SEO Executive',
    title: 'Boosting search visibility with smart SEO and keyword optimisation',
    description:
      'I improve search visibility through smart keyword strategy, content optimisation, and technical SEO fixes. I help your website rank for the right searches and bring relevant traffic. The goal is more visibility, clicks, and qualified enquiries.',
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
