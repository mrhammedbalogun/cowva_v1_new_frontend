"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  FileText, 
  Bell, 
  Building, 
  ClipboardList, 
  AlertTriangle, 
  BarChart3 
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Vaccination Record Management",
    description: "Digitise and manage all vaccination records in one secure platform. Easy search, updates, and tracking.",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Send SMS, Email, and WhatsApp reminders automatically. Never miss a vaccination appointment again.",
  },
  {
    icon: Building,
    title: "Multi-branch Support",
    description: "Manage multiple facility branches from a single dashboard. Centralised control with branch-level access.",
  },
  {
    icon: ClipboardList,
    title: "Patient History & Reports",
    description: "Complete vaccination history for every patient. Generate detailed reports with one click.",
  },
  {
    icon: AlertTriangle,
    title: "AEFI Reporting",
    description: "Report and track Adverse Events Following Immunisation. Built-in compliance with health regulations.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance with live dashboards. Understand trends, coverage rates, and growth metrics.",
  },
]

export function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" ref={ref} className="py-20 lg:py-28 bg-[#0a1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Powerful <span className="text-[#00B5AD]">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to manage vaccinations efficiently and grow your practice
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B5AD]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-[#0D1B2A]/50 backdrop-blur-sm border border-[#00B5AD]/10 rounded-2xl p-6 h-full hover:border-[#00B5AD]/30 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-[#00B5AD]/5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00B5AD]/20 to-[#00B5AD]/5 flex items-center justify-center mb-5 group-hover:from-[#00B5AD]/30 group-hover:to-[#00B5AD]/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-[#00B5AD]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
