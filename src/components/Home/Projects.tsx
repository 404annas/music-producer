"use client";
import React, { useState, useRef } from 'react'
import Image, { StaticImageData } from "next/image"
import Marquee from "react-fast-marquee"
import { ArrowUpRight } from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"

import project1Img from "@/assets/project1.avif"
import project2Img from "@/assets/project2.avif"
import project3Img from "@/assets/project3.avif"
import project4Img from "@/assets/project4.avif"
import project5Img from "@/assets/project5.avif"
import project6Img from "@/assets/project6.avif"
import project7Img from "@/assets/project7.avif"
import project8Img from "@/assets/project8.avif"

interface ProjectCardProps {
  img: StaticImageData;
  alt: string;
}

const ProjectCard = ({ img, alt }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Smoother spring configuration for a fluid "trailing" effect
  const springConfig = { damping: 35, stiffness: 150, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="mx-2 w-[400px] h-[250px] relative overflow-hidden rounded-xl group cursor-none isolate z-20"
    >
      <Image 
        src={img} 
        alt={alt} 
        fill 
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 rounded-xl"
      />

      {/* Custom Cursor Overlay using Framer Motion for extreme smoothness */}
      <motion.div 
        className="pointer-events-none absolute z-30 flex items-center justify-center rounded-full bg-white text-black shadow-xl"
        style={{
          width: 100,
          height: 100,
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
          mass: 0.5
        }}
      >
        <motion.div 
          className="flex flex-col items-center justify-center text-center"
          animate={{ scale: isHovered ? 1 : 0.5 }}
          transition={{ delay: 0.1 }}
        >
            <span className="text-[10px] font-black uppercase leading-tight">View</span>
            <span className="text-[10px] font-black uppercase leading-tight">Project</span>
            <ArrowUpRight size={16} strokeWidth={3} />
        </motion.div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const topImages = [project1Img, project2Img, project3Img, project4Img];
  const bottomImages = [project5Img, project6Img, project7Img, project8Img];

  return (
    <section className="h-screen overflow-hidden flex flex-col justify-center w-full relative z-20">
      
      {/* Top Row - Scrolls Left */}
      <div className="w-full overflow-hidden relative z-20">
        <Marquee speed={80} direction="left" gradient={false} className="mb-4">
          {topImages.map((img, index) => (
            <ProjectCard key={index} img={img} alt={`Project ${index + 1}`} />
          ))}
        </Marquee>
      </div>

      {/* Center Text Bar - Infinite Ticker */}
      <div className="flex items-center justify-center border-y border-white/10 py-6 w-full overflow-hidden relative z-20">
          {[...Array(7)].map((_, i) => (
            <span key={i} className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tighter mx-9">
              PLAYZA
            </span>
          ))}
      </div>

      {/* Bottom Row - Scrolls Right */}
      <div className="w-full overflow-hidden relative z-20">
        <Marquee speed={80} direction="right" gradient={false} className="mt-4">
          {bottomImages.map((img, index) => (
            <ProjectCard key={index} img={img} alt={`Project ${index + 5}`} />
          ))}
        </Marquee>
      </div>

    </section>
  )
}

export default Projects
