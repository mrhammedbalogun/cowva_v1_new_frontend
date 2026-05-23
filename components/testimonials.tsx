"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const fallbackFacilities = [
  "Community Pharmacies",
  "General Hospitals",
  "Private Clinics",
  "Maternity Centres",
  "Immunisation Hubs",
  "Health Centres",
  "Pediatric Clinics",
  "Family Medicine",
]

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [facilities, setFacilities] = useState<string[]>(fallbackFacilities)
  const [hfCount, setHfCount] = useState<number | null>(null)

  useEffect(() => {
    // Fetch live HF count
    fetch("https://app.cowva.com/api/v1/stats/")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => { if (data?.hf_count) setHfCount(data.hf_count) })
      .catch(() => {})

    // Fetch live HF names (min 5 vaccinations)
    fetch("https://app.cowva.com/api/v1/hf-names/")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data?.facilities?.length > 0) setFacilities(data.facilities)
      })
      .catch(() => {})
  }, [])

  // Duplicate for seamless infinite scroll
  const marqueeItems = [...facilities, ...facilities]

  return (
    <section ref={ref} className="py-16 bg-[#0D1B2A] overflow-hidden">
      {/* Border Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B5AD]/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Trusted by{" "}
          <span className="text-[#00B5AD]">
            {hfCount !== null ? `${hfCount}+` : "70+"}
          </span>{" "}
          Health Facilities across Nigeria
        </h2>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0D1B2A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0D1B2A] to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee">
          {marqueeItems.map((name, index) => (
            <div key={`${name}-${index}`} className="flex-shrink-0 mx-4">
              <div className="px-6 py-3 bg-[#00B5AD]/5 border border-[#00B5AD]/20 rounded-full">
                <span className="text-gray-300 whitespace-nowrap">{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
