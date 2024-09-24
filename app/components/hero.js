"use client";
import { Typography } from "@material-tailwind/react";
import { poppins } from "./font";
import GradientFont from "./gradientFont";
import { motion, useScroll } from "framer-motion";

// React
import { LazyMotion, domAnimations, m } from "framer-motion";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <section className="h-100vh relative md:my-24 my-8" id="hero">
        <div className="gradient-circle-bg absolute bg-gradient-to-r from-indigo-500 to-purple-500 opacity-35 h-[50vh] w-[50vw] rounded-full top-[-20vw] right-[-20vw] blur-3xl z-[-1]"></div>
        <div className="w-full h-full flex flex-col md:flex-row flex-col justify-around items-center">
          <motion.div
            initial={{
              filter: "blur(10px)",
              transform: "translateX(20%)",
              opacity: 0,
            }}
            whileInView={{
              filter: "blur(0)",
              transform: "translateX(0)",
              opacity: 1,
            }}
            transition={{ duration: 0.5 }}
            className="md:w-4/12 w-3/4 relative"
          >
            <img src="/hero.png" className="w-full" alt="" draggable={false} />
          </motion.div>
          <div className="flex flex-col xl:gap-4 xl:gap-2 justify-center mt-8">
            <motion.div
              initial={{
                filter: "blur(10px)",
                transform: "translateY(20%)",
                opacity: 0,
              }}
              whileInView={{
                filter: "blur(0)",
                transform: "translateY(0)",
                opacity: 1,
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Typography variant="paragraph" className="xl:text-4xl text-2xl">
                Hello, I&apos;m
              </Typography>
            </motion.div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                transform: "translateY(20%)",
                opacity: 0,
              }}
              whileInView={{
                filter: "blur(0)",
                transform: "translateY(0)",
                opacity: 1,
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Typography variant="h3" className="xl:text-7xl text-4xl">
                <GradientFont>Ari</GradientFont>
                Dharmika
              </Typography>
            </motion.div>
            <motion.div
              initial={{
                filter: "blur(10px)",
                transform: "translateY(20%)",
                opacity: 0,
              }}
              whileInView={{
                filter: "blur(0)",
                transform: "translateY(0)",
                opacity: 1,
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Typography
                variant="paragraph"
                className={`xl:text-4xl text-xl ${poppins.className}`}
              >
                Web Developer | UI/UX Enthusiast
              </Typography>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
