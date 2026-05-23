"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Pill, Hospital, Shield, ArrowRight } from "lucide-react"

const audiences = [
  {
    icon: Pill,
    title: "Pharmacies",
    description: "Streamline your vaccination services with automated scheduling, reminders, and digital record-keeping.",
    color: "#00B5AD",
  },
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    description: "Integrate vaccination management into your existing workflow. Handle high patient volumes efficiently.",
    color: "#27AE60",
  },
  {
    icon: Shield,
    title: "Private Immunisation Centres",
    description: "Professional tools for dedicated immunisation services. Grow your patient base with automated follow-ups.",
    color: "#00D4FF",
  },
]

export function WhoItsFor() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-[#0a1520] to-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Who It&apos;s <span className="text-[#00B5AD]">For</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by healthcare providers across Nigeria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative h-full">
                  {/* Glow effect */}
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{ background: `linear-gradient(135deg, ${audience.color}20, transparent)` }}
                  />
                  
                  <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${audience.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: audience.color }} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{audience.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{audience.description}</p>
                    
                    <Link
                      href="https://app.cowva.com/register"
                      className="group/btn inline-flex items-center gap-2 font-semibold transition-colors duration-200"
                      style={{ color: audience.color }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
