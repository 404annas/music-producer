"use client"
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Scroller = () => {
  const containerRef = useRef(null)
  const row1 = useRef(null)
  const row2 = useRef(null)
  const row3 = useRef(null)

  // We repeat the string to ensure it covers the whole screen width during animation
  const text = "MUSIC * LIVE * PODCAST * MUSIC * LIVE * PODCAST * MUSIC * LIVE * PODCAST * MUSIC * LIVE * PODCAST * "

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", 
          end: "bottom top",   
          scrub: 1,            
        }
      })

      // Row 1 slides Left
      tl.to(row1.current, { x: -200 }, 0)
      // Row 2 slides Right
      tl.to(row2.current, { x: 200 }, 0)
      // Row 3 slides Left
      tl.to(row3.current, { x: -200 }, 0)
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef}
      className="relative py-10 my-10 overflow-hidden flex flex-col gap-4 select-none min-h-[400px] justify-center"
    >
      {/* Background Layer - z-0 to stay behind BlobCursor (z-10) */}
      <div className="absolute inset-0 bg-[#AFD8FF] z-0"></div>

      {/* Row 1 - z-20 to stay in front of BlobCursor */}
      <div className="whitespace-nowrap flex relative z-20">
        <h2 
          ref={row1} 
          className="text-black text-[12vw] md:text-[10vw] font-black uppercase leading-none tracking-tighter"
        >
          {text}
        </h2>
      </div>

      {/* Row 2 - z-20 to stay in front of BlobCursor */}
      <div className="whitespace-nowrap flex relative z-20">
        <h2 
          ref={row2} 
          className="text-black text-[12vw] md:text-[10vw] font-black uppercase leading-none tracking-tighter -ml-[500px]"
        >
          {text}
        </h2>
      </div>

      {/* Row 3 - z-20 to stay in front of BlobCursor */}
      <div className="whitespace-nowrap flex relative z-20">
        <h2 
          ref={row3} 
          className="text-black text-[12vw] md:text-[10vw] font-black uppercase leading-none tracking-tighter"
        >
          {text}
        </h2>
      </div>
    </section>
  )
}

export default Scroller
