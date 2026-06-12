import { motion } from "motion/react";
import { flashingStarAnimation } from "../animations/landingPageAnimations";
import polygonGuy from '../assets/andrew3d.png' 

export default function Landing() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-slate-900" id="landing">

      <motion.div className="relative z-20 flex min-h-[60svh] flex-col items-center justify-center px-4 text-center"
      initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
            }}>
        <h1 className="pt-8">Andrew Santos</h1>
        <h3 className="">Welcome to my portfolio!</h3>
        <a
            href="#about"
            className="body-text relative z-20 mt-7 !inline-flex flex-col items-center"
          >
            <motion.span
            whileHover={{opacity: "70%"}}
            >Scroll</motion.span>

            <span className="flex h-[35px] w-[30px] items-start justify-center">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="pointer-events-none block w-[12px]"
                initial={{ y: 0 }}
                animate={{ y: 11 }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <path
                  fill="white"
                  d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
              </motion.svg>
            </span>
          </a>
      </motion.div>
      
      {/* Stars */}
      <motion.div
        className="absolute left-[21%] top-[9%] h-[7px] w-[7px] rounded-full bg-white"
        animate={flashingStarAnimation}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.06, 1],
          delay: 0.4

        }}
      />

      <motion.div
        className="absolute right-[12%] top-[12%] h-[7px] w-[7px] rounded-full bg-white"
        animate={flashingStarAnimation}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.06, 1],
          delay: 0.2

        }}
      />

      <motion.div
        className="absolute right-[32%] top-[8%] h-[7px] w-[7px] rounded-full bg-white"
        animate={flashingStarAnimation}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          delay: 0.6
        }}
      />

      <motion.div
        className="absolute left-[8%] top-[14%] h-[7px] w-[7px] rounded-full bg-white"
        animate={flashingStarAnimation}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.06, 1],
        }}
      />
     

     {/* Waves and Boat Animation */}
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


      <motion.img src={polygonGuy} alt="polygonal 3d model of andrew in a rowboat" 
      className="absolute bottom-[18%] right-4 z-10 w-[45vw] max-w-[260px] sm:right-10 sm:w-[35vw] md:right-20 md:max-w-[300px]"
      initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0.3,
        }}
      />


      <motion.svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-[40px] left-0 block h-80 w-full z-5"
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
        className="absolute bottom-0 left-0 block h-80 w-full z-5"
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