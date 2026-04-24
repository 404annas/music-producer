import Image from "next/image";
import heroImg from "@/assets/refHero.webp";
import Navbar from "@/common/Navbar";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col justify-between items-center">
      {/* Background Image Container with Overlay - z-0 to stay behind BlobCursor (z-15) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg} 
          alt="Concert Stage" 
          fill
          priority
          className="object-cover" 
        />
        {/* Black Overlay - z-10 to stay behind BlobCursor */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Navbar inside Hero - z-20 to stay in front of BlobCursor */}
      <div className="relative z-20 w-full">
        <Navbar />
      </div>

      {/* Middle Content: Paragraph - z-20 to stay in front of BlobCursor */}
      <div className="relative z-20 flex-grow flex flex-col justify-center items-center px-6 text-center max-w-4xl mt-90 sm:mt-60 md:mt-50 lg:mt-40">
        <p className="text-white font-mono text-sm md:text-base leading-normal opacity-90">
          Built on raw energy and unapologetic truth, we make music that <br className="hidden md:block" />
          shakes you awake and reminds you how real sound should feel.
        </p>
      </div>

      {/* Bottom Content: "breaks limits" - z-20 to stay in front of BlobCursor */}
      <div className="relative z-20 w-full text-center select-none pb-24 sm:pb-6 md:pb-10">
        <h1 className="text-[#BFDBFE] text-[10vw] md:text-[13vw] font-black leading-[0.8] tracking-tighter lowercase">
          breaks the limits
        </h1>
      </div>
    </section>
  );
};

export default Hero;
