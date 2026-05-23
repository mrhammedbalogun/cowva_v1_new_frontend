"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg shadow-[#00B5AD]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logofull.png"
              alt="Cowva"
              width={140}
              height={45}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#00B5AD] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://app.cowva.com/login/?next=/"
              className="px-4 py-2 text-sm font-medium text-[#00B5AD] border border-[#00B5AD]/50 rounded-lg hover:bg-[#00B5AD]/10 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="https://app.cowva.com/register"
              className="px-4 py-2 text-sm font-medium text-white bg-[#00B5AD] rounded-lg hover:bg-[#00B5AD]/90 transition-all duration-200 shadow-lg shadow-[#00B5AD]/25"
            >
              Register Your Facility
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#00B5AD] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D1B2A]/98 backdrop-blur-md border-t border-[#00B5AD]/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-[#00B5AD] transition-colors duration-200 text-base font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3 border-t border-[#00B5AD]/10">
                <Link
                  href="https://app.cowva.com/login/?next=/"
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-[#00B5AD] border border-[#00B5AD]/50 rounded-lg hover:bg-[#00B5AD]/10 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  href="https://app.cowva.com/register"
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-[#00B5AD] rounded-lg hover:bg-[#00B5AD]/90 transition-all duration-200"
                >
                  Register Your Facility
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
