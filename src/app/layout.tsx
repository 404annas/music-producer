import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/common/Navbar";
import { cn } from "@/lib/utils";
import BlobCursor from "@/components/BlobCursor";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music Producer",
  description: "Playz - A music producer who breaks the limits of sound, creating raw and unapologetic music that shakes you awake and reminds you how real sound should feel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", plusJakartaSans.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-black">
        <BlobCursor
          blobType="circle"
          fillColor="#0015ff"
          trailCount={3}
          sizes={[40, 80, 50]}
          innerSizes={[12, 24, 15]}
          innerColor="rgba(255,255,255,0.8)"
          opacities={[0.6, 0.6, 0.6]}
          shadowColor="rgba(0,0,0,0.75)"
          shadowBlur={5}
          shadowOffsetX={10}
          shadowOffsetY={10}
          filterStdDeviation={30}
          useFilter={true}
          fastDuration={0.1}
          slowDuration={0.5}
          zIndex={10}
        />
        {children}
      </body>

    </html>
  );
}
