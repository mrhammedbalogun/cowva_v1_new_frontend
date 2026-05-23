"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import CountUp from "react-countup"
import { Building2, Users, Syringe, Calendar, MapPin, Bell } from "lucide-react"

interface Stats {
  hf_count: number
  patient_count: number
  vaccination_count: number
  shot_count: number
  states_count: number
  reminders_sent: number
}

const fallbackStats: Stats = {
  hf_count: 70,
  patient_count: 7082,
  vaccination_count: 12063,
  shot_count: 19641,
  states_count: 9,
  reminders_sent: 50160,
}

const statItems = [
  { key: "hf_count" as const, label: "Health Facilities", icon: Building2, suffix: "+" },
  { key: "patient_count" as const, label: "Patients Registered", icon: Users, suffix: "+" },
  { key: "vaccination_count" as const, label: "Vaccination Records", icon: Syringe, suffix: "+" },
  { key: "shot_count" as const, label: "Shots Scheduled", icon: Calendar, suffix: "+" },
  { key: "states_count" as const, label: "States Covered", icon: MapPin, suffix: "" },
  { key: "reminders_sent" as const, label: "Reminders Sent", icon: Bell, suffix: "+" },
]

export function StatsBar() {
  const [stats, setStats] = useState<Stats>(fallbackStats)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("https://app.cowva.com/api/v1/stats/")
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch {
        // Use fallback stats on error
        console.log("Using fallback stats")
      }
    }
    fetchStats()
  }, [])

  return (
    <section ref={ref} className="relative py-16 bg-[#0D1B2A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-[#00B5AD]/10 blur-3xl" />
      </div>

      {/* Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B5AD]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B5AD]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Powering Healthcare Across <span className="text-[#00B5AD]">Nigeria</span>
          </h2>
          <p className="text-gray-400">Real-time platform statistics</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {statItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-[#00B5AD]/5 rounded-xl blur-xl group-hover:bg-[#00B5AD]/10 transition-all duration-300" />
                <div className="relative bg-[#0D1B2A]/50 backdrop-blur-sm border border-[#00B5AD]/20 rounded-xl p-4 text-center hover:border-[#00B5AD]/50 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#00B5AD]/10 mb-3">
                    <Icon className="w-5 h-5 text-[#00B5AD]" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {isInView ? (
                      <CountUp
                        start={0}
                        end={stats[item.key]}
                        duration={2.5}
                        separator=","
                        suffix={item.suffix}
                      />
                    ) : (
                      "0"
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">{item.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
