'use client';

import { useState, useRef } from 'react';

const teamMembers = [
  {
    name: 'Sudhanshu Arora',
    position: 'Founder and CEO',
    badge: 'Founder and CEO',
    description:
      'In my sessions, I take learners through the journey of how I scaled IIM SKILLS to a major global ed-tech brand through performance marketing, SEO, and analytics, providing them with real insights.',
    image: '/team/CEO.png',
    linkedin: 'https://www.linkedin.com/in/sudhanshuarora',
  },
  {
    name: 'Kushagra Singh',
    position: 'Vice President',
    badge: 'Vice President',
    description:
      'I help align marketing growth plans with sales goals, ensuring each campaign is designed to create qualified leads and long-term customer relationships.',
    image: '/team/Kush.jpg',
    linkedin: 'https://www.linkedin.com/in/kushagrasingh',
  },
  {
    name: 'Shweta Mishra',
    position: 'Head Operations',
    badge: 'Head Operations',
    description:
      'I drive execution across teams and ensure our growth systems are efficient, scalable, and optimised for manufacturing and industrial marketing outcomes.',
    image: '/team/shweta.jpg',
    linkedin: 'https://www.linkedin.com/in/shwetamishra',
  },
  {
    name: 'Manjeet Kumar',
    position: 'Creative Director',
    badge: 'Creative Director',
    description:
      'I build high-engagement digital campaigns and content systems that help industrial brands stay visible, trusted, and top-of-mind with decision-makers.',
    image: '/team/Manjeet.jpg',
  },
  {
    name: 'Hareesh Kumar',
    position: 'Ads Expert',
    badge: 'Ads Expert',
    description:
      'I design targeted ad strategies for Google, LinkedIn, and performance channels that reduce acquisition costs and improve lead quality for manufacturing businesses.',
    image: '/team/Hareesh.jpg',
  },
  {
    name: 'Tilak Gautam',
    position: 'Sr. Web Developer',
    badge: 'Sr. Web Developer',
    description:
      'I create fast, conversion-focused websites that communicate your manufacturing capabilities clearly and capture leads with strong user experiences.',
    image: '/team/tilak-n.jpg',
  },
  {
    name: 'Rahul Singh Chauhan',
    position: 'Full Stack Developer',
    badge: 'Full Stack Developer',
    description:
      'I create fast, conversion-focused websites that communicate your manufacturing capabilities clearly and capture leads with strong user experiences.',
    image: '/team/Rahul-new.jpg',
  },
  {
    name: 'Shikha Kushwaha',
    position: 'Executive Web Developer',
    badge: 'Executive Web Developer',
    description:
      'I create fast, conversion-focused websites that communicate your manufacturing capabilities clearly and capture leads with strong user experiences.',
    image: '/team/shikhaa.jpeg',
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
              Learn Proven Performance Marketing Strategies
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
