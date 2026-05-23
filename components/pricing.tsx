"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { MessageSquare, Mail, Send, ArrowRight } from "lucide-react"

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-[#0D1B2A] to-[#0a1520]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00B5AD]/10 via-[#00D4FF]/10 to-[#27AE60]/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-[#0D1B2A]/80 backdrop-blur-sm border border-[#00B5AD]/20 rounded-3xl p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Pay Only for <span className="text-[#00B5AD]">What You Use</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                No subscription fees. No hidden charges. Just pay for the reminders you send.
              </p>
            </motion.div>

            {/* Pricing Units */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {[
                { icon: MessageSquare, label: "SMS Units", color: "#00B5AD" },
                { icon: Mail, label: "Email Units", color: "#27AE60" },
                { icon: Send, label: "WhatsApp Units", color: "#00D4FF" },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-5 py-3 bg-[#0D1B2A] border border-[#00B5AD]/20 rounded-xl"
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                    <span className="text-gray-300 font-medium">{item.label}</span>
                  </div>
                )
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="https://app.cowva.com/register"
                className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#00B5AD] rounded-xl hover:bg-[#00B5AD]/90 transition-all duration-300 shadow-lg shadow-[#00B5AD]/30 hover:shadow-xl hover:shadow-[#00B5AD]/40"
              >
                Register Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                No credit card required • Start sending reminders today
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
