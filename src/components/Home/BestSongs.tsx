"use client"
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Song {
  id: number;
  title: string;
  year: string;
  img: string;
}

const songs: Song[] = [
  { id: 1, title: "Falling into Blue", year: "2025", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=100&w=2000" },
  { id: 2, title: "Twilight Sparks", year: "2025", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=100&w=2000" },
  { id: 3, title: "Electric Heartline", year: "2025", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D" },
  { id: 4, title: "Echoing Hearts", year: "2025", img: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 5, title: "Neon Gravity", year: "2025", img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&q=100&w=2000" },
  { id: 6, title: "Golden Mirage", year: "2025", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=100&w=2000" },
  { id: 7, title: "Morning Hearts", year: "2025", img: "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" },
  { id: 8, title: "Midnight Echo", year: "2025", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=100&w=2000" },
];

const BestSongs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const group1 = useRef<HTMLDivElement>(null)
  const group2 = useRef<HTMLDivElement>(null)
  const group3 = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000", // Increased distance for smoother "pass through"
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        }
      })

      // GROUP 1: Comes from bottom (100%) and exits top (-120%)
      tl.fromTo(group1.current, 
        { y: "100vh" }, 
        { y: "-120vh", duration: 4, ease: "none" }
      )

      // TITLE: Blurs out as Group 1 exits and Group 2 enters
      tl.to(titleRef.current, { 
        filter: "blur(10px)", 
        opacity: 0.2, 
        scale: 0.85, 
        duration: 2 
      }, "-=3") // Overlaps with Group 1 exit

      // GROUP 2: Starts entering when Group 1 is halfway out, then exits top
      tl.fromTo(group2.current, 
        { y: "100vh" }, 
        { y: "-120vh", duration: 4, ease: "none" },
        "-=3" 
      )

      // GROUP 3: Starts entering when Group 2 is halfway out, then STOPS in center (0)
      tl.fromTo(group3.current, 
        { y: "100vh" }, 
        { y: "0vh", duration: 3, ease: "power2.out" },
        "-=2.5" 
      )

    })
    return () => ctx.revert()
  }, [])

  const cardStyle = "group relative aspect-[5/5] w-full overflow-hidden rounded-2xl bg-neutral-900 transition-all duration-700 hover:scale-105 cursor-pointer shadow-sm shadow-black/50";

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center z-20">
      
      {/* Background Text - Starts Clear */}
      <h1 
        ref={titleRef}
        className="absolute z-0 text-[#AFD8FF] text-[13vw] md:text-[12vw] font-black tracking-tighter leading-none select-none text-center"
      >
        My Best Songs
      </h1>

      {/* GROUP 1: Two Images (Side by Side) */}
      <div ref={group1} className="absolute inset-0 z-10 flex items-center justify-between px-4 md:px-10 pointer-events-none">
        <div className="w-[45%] sm:w-[30%] md:w-[20%] pointer-events-auto mt-10">
          <SongCard song={songs[0]} cardStyle={cardStyle} />
        </div>
        <div className="w-[45%] sm:w-[30%] md:w-[20%] pointer-events-auto -mt-40">
          <SongCard song={songs[1]} cardStyle={cardStyle} />
        </div>
      </div>

      {/* GROUP 2: Three Images (Staggered Grid) */}
      <div 
        ref={group2} 
        className="absolute inset-0 z-20 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 items-center px-4 md:px-20 pointer-events-none"
      >
        <div className="pointer-events-auto mt-10 md:mt-20">
          <SongCard song={songs[2]} cardStyle={cardStyle} />
        </div>
        <div className="pointer-events-auto md:block hidden -mt-20 md:-mt-32">
          <SongCard song={songs[3]} cardStyle={cardStyle} />
        </div>
        <div className="pointer-events-auto mt-24 md:mt-48">
          <SongCard song={songs[4]} cardStyle={cardStyle} />
        </div>
      </div>

      {/* GROUP 3: Final Three (Settles in Center) */}
      <div ref={group3} className="absolute inset-0 z-30 flex items-center justify-center gap-6 md:gap-12 px-8 md:px-10 pointer-events-none">
        <div className="md:block hidden sm:w-[30%] md:w-[20%] pointer-events-auto scale-90 opacity-80">
          <SongCard song={songs[5]} cardStyle={cardStyle} />
        </div>
        <div className="sm:w-[40%] md:w-[25%] pointer-events-auto scale-110 z-50">
          <SongCard song={songs[6]} cardStyle={cardStyle} />
        </div>
        <div className="sm:w-[30%] md:w-[20%] pointer-events-auto scale-90 opacity-80">
          <SongCard song={songs[7]} cardStyle={cardStyle} />
        </div>
      </div>

    </section>
  )
}

const SongCard = ({ song, cardStyle }: { song: Song, cardStyle: string }) => (
  <div className="flex flex-col gap-2">
    <div className={cardStyle}>
      <img 
      loading='lazy'
        src={song.img} 
        alt={song.title} 
        className="w-full h-full object-cover" 
      />
      {/* Optional blue glow on hover */}
      <div className="absolute inset-0 bg-[#AFD8FF]/0 group-hover:bg-[#AFD8FF]/10 transition-colors duration-700"></div>
    </div>
    <div className="flex md:flex-row flex-col justify-between md:items-center px-1">
      <p className="text-[10px] md:text-[11px] font-black uppercase leading-none text-white tracking-wider">{song.title}</p>
      <p className="text-[11px] font-bold text-[#AFD8FF]">{song.year}</p>
    </div>
  </div>
)

export default BestSongs;