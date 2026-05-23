"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0D1B2A] via-[#0D1B2A] to-[#0D1B2A]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B5AD]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#27AE60]/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#00D4FF]/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00B5AD 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00B5AD]/10 border border-[#00B5AD]/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00B5AD] animate-pulse" />
            <span className="text-[#00B5AD] text-sm font-medium">Simple. Secure. Efficient.</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            <span className="text-balance">Nigeria&apos;s Most Trusted</span>
            <br />
            <span className="bg-gradient-to-r from-[#00B5AD] via-[#00D4FF] to-[#27AE60] bg-clip-text text-transparent">
              Vaccination Records
            </span>
            <br />
            <span className="text-balance">Platform</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10 text-pretty"
          >
            Digitise your health facility&apos;s vaccination records, automate patient reminders, 
            and grow your practice — all in one platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="https://app.cowva.com/register"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#00B5AD] rounded-xl hover:bg-[#00B5AD]/90 transition-all duration-300 shadow-lg shadow-[#00B5AD]/30 hover:shadow-xl hover:shadow-[#00B5AD]/40 hover:-translate-y-0.5"
            >
              Register Your Health Facility
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="https://app.cowva.com/register/enduser/"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-[#00B5AD] border-2 border-[#00B5AD]/50 rounded-xl hover:bg-[#00B5AD]/10 hover:border-[#00B5AD] transition-all duration-300"
            >
              Register as a Patient
            </Link>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00B5AD]/20 via-[#00D4FF]/20 to-[#27AE60]/20 rounded-3xl blur-2xl" />
            
            {/* Dashboard Preview Card */}
            <div className="relative bg-[#0D1B2A]/80 backdrop-blur-sm border border-[#00B5AD]/20 rounded-2xl p-6 shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#00B5AD]/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[#0D1B2A] rounded-lg px-4 py-2 text-sm text-gray-500 text-center">
                    app.cowva.com/dashboard
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Stat Cards */}
                {[
                  { label: "Today's Appointments", value: "24", color: "#00B5AD" },
                  { label: "Pending Reminders", value: "156", color: "#27AE60" },
                  { label: "Active Patients", value: "1,247", color: "#00D4FF" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-[#0D1B2A] rounded-xl p-4 border border-[#00B5AD]/10"
                  >
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-4 bg-[#0D1B2A] rounded-xl p-4 border border-[#00B5AD]/10 h-32 flex items-end justify-around gap-2"
              >
                {[40, 65, 45, 80, 55, 75, 60, 85, 70, 90, 65, 80].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                    className="w-full bg-gradient-to-t from-[#00B5AD] to-[#00D4FF] rounded-t-sm opacity-80"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-1/4 hidden lg:block"
          >
            <div className="bg-[#27AE60] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
              ✓ Reminder Sent!
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 bottom-1/3 hidden lg:block"
          >
            <div className="bg-[#00B5AD] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
              +12 New Patients
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[#00B5AD]/50 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-[#00B5AD]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
