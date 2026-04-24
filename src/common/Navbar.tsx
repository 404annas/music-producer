"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import logo from "@/assets/refLogo.svg"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

const navItems = [
  { label: "home", href: "/" },
  { label: "about us", href: "/about" },
  { label: "tours", href: "/tours" },
  { label: "albums", href: "/albums" },
  { label: "media", href: "/media" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // 👉 Lock body scroll when sidebar opens
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`flex items-center justify-between px-6 py-4 w-full relative z-50 transition-all duration-300 ${
          open ? "backdrop-blur-sm" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" priority width={150} height={40} className="w-auto h-10" />
        </Link>

        {/* Desktop Menu (unchanged) */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg backdrop-blur-sm transition-all duration-300 cursor-pointer text-sm font-medium border border-white/5 block">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Desktop Button (unchanged) */}
        <Link href="/contact" className="hidden lg:block">
          <span className="bg-[#AFD8FF] hover:bg-[#9DC2E5] text-black px-6 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm cursor-pointer block">
            let's connect
          </span>
        </Link>

        {/* Mobile Menu Icon (hidden when sidebar open) */}
        {!open && (
          <button onClick={() => setOpen(true)} className="lg:hidden text-white">
            <Menu size={20} />
          </button>
        )}
      </nav>

      {/* BACKDROP (blur + fade) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[100] transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] md:w-[400px] bg-[#0c0c0c] z-[101] transform transition-transform duration-500 ease-in-out shadow-sm ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Image src={logo} alt="Logo" width={140} height={40} className="h-8 w-auto" />
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="flex flex-col gap-4 p-5">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>
              <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-between">
                {item.label}
                <ArrowRight size={16} className="inline-block ml-2" />
              </span>
            </Link>
          ))}

          <Link href="/contact" onClick={() => setOpen(false)}>
            <span className="bg-[#AFD8FF] hover:bg-[#9DC2E5] text-black px-6 py-3 rounded-lg transition-all duration-300 font-medium text-sm block text-center mt-4">
              let's connect
            </span>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Navbar