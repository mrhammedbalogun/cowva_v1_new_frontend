"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Building2, UserCircle, ArrowRight } from "lucide-react"

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hfCount, setHfCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("https://app.cowva.com/api/v1/stats/")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => { if (data?.hf_count) setHfCount(data.hf_count) })
      .catch(() => {})
  }, [])

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gradient-to-r from-[#00B5AD] via-[#00A39B] to-[#27AE60] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg">
            Join {hfCount !== null ? `${hfCount}+` : "70+"} health facilities already using Cowva
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Health Facilities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Are you a Health Facility?</h3>
            <p className="text-white/70 mb-6">
              Digitise your vaccination records and automate patient reminders
            </p>
            <Link
              href="https://app.cowva.com/register"
              className="group inline-flex items-center gap-2 w-full justify-center px-6 py-4 text-base font-semibold text-[#00B5AD] bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Register Your Facility
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* For Patients */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
              <UserCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Are you a Patient?</h3>
            <p className="text-white/70 mb-6">
              Track your vaccinations and receive timely reminders
            </p>
            <Link
              href="https://app.cowva.com/register/enduser/"
              className="group inline-flex items-center gap-2 w-full justify-center px-6 py-4 text-base font-semibold text-[#00B5AD] bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Register as a Patient
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-white/80">
            Already have an account?{" "}
            <Link
              href="https://app.cowva.com/login/?next=/"
              className="text-white font-semibold underline hover:no-underline"
            >
              Login here
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
