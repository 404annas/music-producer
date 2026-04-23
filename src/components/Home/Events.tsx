"use client"
import React from 'react'
import Marquee from "react-fast-marquee"

const Events: React.FC = () => {
  const scrollText = "UPCOMING TOURS * UPCOMING TOURS * UPCOMING TOURS * UPCOMING TOURS * "

  return (
    <section className="relative z-20 pb-30 overflow-hidden select-none w-full max-w-full">
      <Marquee 
        speed={120} 
        gradient={false} 
        direction="left"
        autoFill
      >
        <h2 className="text-[#AFD8FF] text-[15vw] overflow-y-hidden md:text-[12vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap pr-10">
          {scrollText}
        </h2>
      </Marquee>
    </section>
  )
}

export default Events
