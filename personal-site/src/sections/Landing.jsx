import { motion } from "motion/react";

export default function Landing() {
  return (
    <section className="relative h-screen overflow-hidden bg-indigo-500">
      <motion.svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-[120px] left-0 block h-80 w-full"
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0,
        }}
      >
        <path
          fill="#5678f3"
          d="M0,160 C240,260 480,60 720,160 C960,260 1200,60 1440,160 L1440,320 L0,320 Z"
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-[80px] left-0 block h-80 w-full"
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.25,
        }}
      >
        <path
          fill="#453cab"
          d="M0,160 C240,260 480,60 720,160 C960,260 1200,60 1440,160 L1440,320 L0,320 Z"
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-[40px] left-0 block h-80 w-full"
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <path
          fill="#2b2570"
          d="M0,160 C240,260 480,60 720,160 C960,260 1200,60 1440,160 L1440,320 L0,320 Z"
        />
      </motion.svg>

      <motion.svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block h-80 w-full"
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        <path
          fill="#1e1a4d"
          d="M0,160 C240,260 480,60 720,160 C960,260 1200,60 1440,160 L1440,320 L0,320 Z"
        />
      </motion.svg>
    </section>
  );
}