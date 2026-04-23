"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Using lucide-react for icons
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "@/assets/refLogo.svg";
import Image from "next/image";
import ImageTrail from "@/components/ImageTrail";

const Footer: React.FC = () => {
  const [key, setKey] = useState(0);

  return (
    <footer 
      className="text-white px-4 lg:px-8 pt-10 pb-4 relative z-20 border-t border-white/10"
      onMouseEnter={() => setKey(prev => prev + 1)}
    >
      {/* Background ImageTrail Container - Exactly as requested */}
      <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, overflow: 'hidden', zIndex: -1, pointerEvents: 'none' }}>
        <ImageTrail
          key={key}
          items={[
            'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG11c2ljfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1594623930572-300a3011d9ae?w=2000&auto=format&fit=crop&q=100&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
          ]}
          variant="2"
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-20">
        {/* TOP SECTION: Logo and Slogan */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-8">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              priority
              width={500}
              height={100}
              className="w-auto h-15"
            />
          </Link>{" "}
          <p className="text-[#AFD8FF] text-2xl md:text-2xl font-bold uppercase tracking-tight leading-[1.1] max-w-md md:text-right">
            WE TURN RAW SOUND INTO UNFORGETTABLE EXPERIENCES
          </p>
        </div>

        {/* MIDDLE SECTION: Newsletter and Nav Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 py-10 border-y border-white/10">
          {/* Newsletter Column - Left Side */}
          <div className="max-w-md w-full">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">
              Subscribe to our newsletter
            </h4>
            <div className="flex bg-white rounded-lg p-1">
              <input
                type="email"
                placeholder="Email*"
                className="bg-transparent text-black px-4 py-3 flex-grow outline-none font-medium placeholder:text-gray-400"
              />
              <button className="bg-white border border-gray-200 text-black p-3 rounded-md hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                <ArrowRight size={20} strokeWidth={3} />
              </button>
            </div>
            <p className="text-[11px] text-gray-500 mt-4 leading-normal">
              By subscribing you agree to our{" "}
              <Link href="/privacy" className="underline">
                privacy policy
              </Link>{" "}
              and it's terms.
            </p>
          </div>

          {/* Nav Links Column - Right Side */}
          <div className="flex flex-wrap text-right gap-8 md:gap-10">
            <div className="flex flex-row gap-6">
              <Link
                href="/about"
                className="font-black text-base uppercase tracking-tight hover:text-[#AFD8FF] transition-all duration-300"
              >
                About Us
              </Link>
              <Link
                href="/tours"
                className="font-black text-base uppercase tracking-tight hover:text-[#AFD8FF] transition-all duration-300"
              >
                Our Tours
              </Link>
              <Link
                href="/media"
                className="font-black text-base uppercase tracking-tight hover:text-[#AFD8FF] transition-all duration-300"
              >
                Media Kit
              </Link>
              <Link
                href="/partners"
                className="font-black text-base uppercase tracking-tight hover:text-[#AFD8FF] transition-all duration-300"
              >
                Albums
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-500 order-3 md:order-1">
            Copyright © Playza 2026
          </p>

          <div className="flex items-center gap-3 ml-4 order-1 md:order-2">
            <Link
              href="#"
              className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaInstagram size={18} />
            </Link>
            <Link
              href="#"
              className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>

          <p className="text-[10px] uppercase tracking-wider text-gray-500 order-2 md:order-3">
            Website by <span className="text-white font-bold"><a href="https://techxudo.com" target="_blank" rel="noopener noreferrer">Techxudo</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
