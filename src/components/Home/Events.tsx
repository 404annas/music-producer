"use client"
import React, { useRef, useLayoutEffect, useState } from 'react'
import Marquee from "react-fast-marquee"
import Image from 'next/image'
import gsap from 'gsap'

// --- Data for the 4 Events ---
const eventData = [
  {
    id: 1,
    title: "THE SOUND OF SILENCE",
    desc: "WHY WE'RE ADDICTED TO BACKGROUND NOISE.",
    img: "https://images.unsplash.com/photo-1504904126298-3fde501c9b31?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c291bmR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    title: "VOICES OF CHANGE",
    desc: "HIGHLIGHTING STORIES THAT INSPIRE AND PROVOKE THOUGHT.",
    img: "https://images.unsplash.com/photo-1541592553160-82008b127ccb?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZvaWNlfGVufDB8fDB8fHww"
  },
  {
    id: 3,
    title: "ECHOES OF TIME",
    desc: "A DEEP DIVE INTO THE STORIES THAT SHAPE OUR HISTORY.",
    img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGltZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    title: "THE VELVET EDIT",
    desc: "HOW PILLOW MICS AND SILK FABRICS SHAPED THE ASMR...",
    img: "https://images.unsplash.com/photo-1697382950743-4ad0301d49eb?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VkVMVkVUfGVufDB8fDB8fHww"
  }
];

const Events: React.FC = () => {
  const scrollText = "UPCOMING TOURS * UPCOMING EVENTS * UPCOMING PROJECTS * UPCOMING SHOWS * "

  return (
    <section className="relative z-20 pb-20 text-white w-full overflow-hidden">
      {/* --- Marquee Section (Top) --- */}
      <div className="relative z-20 pb-10 overflow-hidden select-none w-full max-w-full">
        <Marquee speed={120} gradient={false} direction="left" autoFill>
          <h2 className="text-[#AFD8FF] text-[15vw] md:text-[12vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap pr-10 overflow-y-hidden">
            {scrollText}
          </h2>
        </Marquee>
      </div>

      {/* --- Event Grid Section (Bottom) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/10 relative z-20">
        {eventData.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  )
}

// --- Individual Event Card Component ---
const EventCard = ({ event, index }: { event: typeof eventData[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
    if (!cardRef.current || !followerRef.current) return;

    const moveFollower = (e: MouseEvent) => {
      const rect = cardRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(followerRef.current, {
        x: x,
        y: y,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const card = cardRef.current;
    card.addEventListener("mousemove", moveFollower);
    return () => card.removeEventListener("mousemove", moveFollower);
  }, []);

  return (
    <div 
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex items-center justify-between p-8 md:p-12 border-white/10 group cursor-none overflow-hidden
        ${index % 2 !== 0 ? 'md:border-l' : ''} 
        ${index > 1 ? 'border-t' : ''}`}
    >
      {/* Content Side */}
      <div className="flex flex-col gap-6 max-w-[50%] z-10">
        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-[#AFD8FF] transition-colors duration-500">
          {event.title}
        </h3>
        <p className="text-[10px] md:text-xs font-bold text-gray-400 tracking-wider leading-normal">
          {event.desc}
        </p>
      </div>

      {/* Image Side */}
      <div className="relative aspect-square w-48 md:w-64 overflow-hidden rounded-sm transition-all duration-700">
        <Image 
          src={event.img} 
          alt={event.title} 
          fill 
          className={`object-cover transition-all duration-1000 ease-in-out
            ${isHovered ? 'blur-0 opacity-100 scale-105' : 'blur-sm opacity-80 grayscale'}
          `}
        />
      </div>

      {/* Floating "VIEW EVENT" Cursor Tag - Changed from fixed to absolute for local scoping */}
      <div 
        ref={followerRef}
        className={`absolute top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 flex items-center justify-center
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ transform: 'translate(-50%, -50%)' }} // Keep it centered on cursor
      >
        <div className="bg-white/20 backdrop-blur-xl text-white border border-white/30 px-6 py-3 rounded-md text-[10px] font-black uppercase tracking-wider shadow-2xl">
          View Event
        </div>
      </div>
    </div>
  );
}

export default Events;
