import Image from "next/image"
import logo from "@/assets/refLogo.svg"
import Link from "next/link"

const navItems = [
  { label: "home", href: "/" },
  { label: "about us", href: "/about" },
  { label: "tours", href: "/tours" },
  { label: "albums", href: "/albums" },
  { label: "media", href: "/media" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 w-full relative z-50">
        <Link href="/">
          <Image src={logo} alt="Logo" priority width={150} height={40} className="w-auto h-10" />
        </Link>
        
        <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <span className="bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg backdrop-blur-sm transition-all duration-300 cursor-pointer text-sm font-medium border border-white/5 block">
                  {item.label}
                </span>
              </Link>
            ))}
        </div>

        <Link href="/contact">
            <span className="bg-[#AFD8FF] hover:bg-[#9DC2E5] text-black px-6 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm cursor-pointer block">
              let's connect
            </span>
        </Link>
    </nav>
  )
}

export default Navbar
