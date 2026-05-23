"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Building2, UserCircle, ArrowRight, CheckCircle2 } from "lucide-react"

const facilitySteps = [
  { step: 1, text: "Register your facility", link: "https://app.cowva.com/register" },
  { step: 2, text: "Add patients & schedule vaccines", link: null },
  { step: 3, text: "Reminders sent automatically", link: null },
]

const patientSteps = [
  { step: 1, text: "Register as a patient", link: "https://app.cowva.com/register/enduser/" },
  { step: 2, text: "Get your vaccination schedule", link: null },
  { step: 3, text: "Receive SMS/WhatsApp reminders", link: null },
]

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" ref={ref} className="py-20 lg:py-28 bg-gradient-to-b from-[#0D1B2A] to-[#0a1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How It <span className="text-[#00B5AD]">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in minutes — whether you&apos;re a health facility or a patient
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For Health Facilities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00B5AD]/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-[#0D1B2A]/50 backdrop-blur-sm border border-[#00B5AD]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#00B5AD]/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#00B5AD]" />
                </div>
                <h3 className="text-xl font-bold text-white">For Health Facilities</h3>
              </div>

              <div className="space-y-6 mb-8">
                {facilitySteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00B5AD] text-white flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-300">{item.text}</p>
                      {item.link && (
                        <Link
                          href={item.link}
                          className="text-[#00B5AD] text-sm hover:underline mt-1 inline-block"
                        >
                          Get started →
                        </Link>
                      )}
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  </motion.div>
                ))}
              </div>

              <Link
                href="https://app.cowva.com/register"
                className="group inline-flex items-center gap-2 w-full justify-center px-6 py-3 text-base font-semibold text-white bg-[#00B5AD] rounded-xl hover:bg-[#00B5AD]/90 transition-all duration-300 shadow-lg shadow-[#00B5AD]/20"
              >
                Register Your Facility
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* For Patients */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#27AE60]/10 to-transparent rounded-2xl blur-xl" />
            <div className="relative bg-[#0D1B2A]/50 backdrop-blur-sm border border-[#27AE60]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#27AE60]/10 flex items-center justify-center">
                  <UserCircle className="w-6 h-6 text-[#27AE60]" />
                </div>
                <h3 className="text-xl font-bold text-white">For Patients</h3>
              </div>

              <div className="space-y-6 mb-8">
                {patientSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#27AE60] text-white flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-300">{item.text}</p>
                      {item.link && (
                        <Link
                          href={item.link}
                          className="text-[#27AE60] text-sm hover:underline mt-1 inline-block"
                        >
                          Get started →
                        </Link>
                      )}
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-1" />
                  </motion.div>
                ))}
              </div>

              <Link
                href="https://app.cowva.com/register/enduser/"
                className="group inline-flex items-center gap-2 w-full justify-center px-6 py-3 text-base font-semibold text-white bg-[#27AE60] rounded-xl hover:bg-[#27AE60]/90 transition-all duration-300 shadow-lg shadow-[#27AE60]/20"
              >
                Register as a Patient
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
