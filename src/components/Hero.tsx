"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { heroImage, model } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
      {/* warm smoke */}
      <div className="glow left-[-10%] top-[20%] h-80 w-130 bg-accent/25" aria-hidden />
      <div className="glow right-[-12%] top-[45%] h-96 w-120 bg-fuchsia-800/20" aria-hidden />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center">
        {/* duotone portrait card */}
        <motion.div
          className="relative w-[78vw] max-w-90"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line shadow-[0_40px_120px_-30px_rgba(255,46,136,0.35)]">
            <Image
              src={heroImage}
              alt={`${model.name} — portrait`}
              fill
              priority
              sizes="(max-width: 640px) 78vw, 360px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" aria-hidden />
          </div>

          {/* script signature overlapping the card */}
          <motion.p
            className="pointer-events-none absolute inset-x-0 -bottom-6 text-center font-script text-6xl text-bone drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)] sm:-bottom-7 sm:text-8xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {model.firstName}
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-base text-smoke sm:text-lg">
            Hi, I&apos;m <span className="font-semibold text-bone">{model.fullName}</span>,
          </p>
          <p className="mt-1 text-base text-smoke sm:text-lg">
            <span className="font-semibold text-bone">{model.role}</span> — {model.location.split(",")[0]} based
          </p>
        </motion.div>

      </div>
    </section>
  );
}
