import React from 'react'
import Image from 'next/image'
import aboutImg from "@/assets/refAbout.png" // Replace with your image path

const About = () => {
  return (
    <section className="relative z-20 text-white py-10 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-end text-right">
          
          {/* Blue Soundwave Graphic */}
          <div className="flex items-end gap-1 h-8 mb-6">
            <div className="w-1 h-4 bg-[#3B82F6]"></div>
            <div className="w-1 h-8 bg-[#3B82F6]"></div>
            <div className="w-1 h-6 bg-[#3B82F6]"></div>
            <div className="w-1 h-10 bg-[#3B82F6]"></div>
            <div className="w-1 h-5 bg-[#3B82F6]"></div>
            <div className="w-1 h-7 bg-[#3B82F6]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            About the "Playza"
          </h2>

          <h3 className="text-[#3B82F6] font-bold text-xs md:text-sm mb-8 uppercase">
            WE ROAD LOUD. REALLY LOUD.
          </h3>

          <p className="text-gray-400 text-xs md:text-sm leading-normal max-w-md font-light">
            I felt very proud to be part of a music scene that was
            changing the face of commercial music and rock music
            internationally, but I also felt like it was necessary for
            Soundgarden - as it was for all of these Seattle bands - to
            prove that we deserve to be on an international stage, and
            we weren't just part of a fad that was based on geography.
          </p>

          {/* Divider Line */}
          <div className="w-16 h-[1px] bg-white/40 mt-10 mb-6"></div>

          <p className="text-xs font-bold uppercase">
            CHRIS CORNELL, IRON TOWER
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm group">
            <Image
              src={aboutImg}
              alt="Band Performance"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About