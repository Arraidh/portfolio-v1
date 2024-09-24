"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import GradientFont from "./gradientFont";
import { poppins } from "./font";
import TechStackCarousel from "./techStackCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="flex flex-col gap-4 relative my-48" id="about">
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
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Typography variant="h1" className="mx-auto md:text-5xl text-4xl">
            About <GradientFont>Me</GradientFont>
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
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Typography
            variant="paragraph"
            className={`${poppins.className} my-8 text-sm md:text-base text-justify`}
          >
            Front-end Developer with a focus on creating responsive,
            user-friendly websites and applications, optimizing performance, and
            delivering seamless user experiences. Proficient in HTML, CSS,
            JavaScript, React, Next.js, and design tools like Figma. Experienced
            in Test-Driven Development (TDD) and contributing to web projects,
            including an internship with one of Indonesia's top journalism
            platforms.
          </Typography>{" "}
        </motion.div>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
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
            transition={{ duration: 0.5 }}
            className="w-full lg:col-span-3 h-fit "
          >
            <Card className="bg-white/50">
              <CardBody>
                <Typography
                  variant="h4"
                  color="black"
                  className=" sm:text-2xl text-lg "
                >
                  Development and Designing Tools
                </Typography>
                <TechStackCarousel />
              </CardBody>
            </Card>
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
            transition={{ duration: 0.5 }}
            className="w-full lg:col-span-1 h-full "
          >
            <Card className="w-full bg-white/50 h-full ">
              <CardBody>
                <Typography
                  variant="h4"
                  className="flex gap-2 items-center mb-6 sm:text-2xl text-lg "
                  color="black"
                >
                  Connect
                  <FontAwesomeIcon icon={faLink} className="size-6" />
                </Typography>
                <div
                  className={`${poppins.className} group flex flex-col gap-2`}
                >
                  <Link href="https://www.linkedin.com/feed/" target="_blank">
                    <div className="flex gap-2 items-center cursor-pointer transition-opacity  hover:!opacity-100 group-hover:opacity-50">
                      <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                    </div>
                  </Link>
                  <Link href="https://github.com/Arraidh" target="_blank">
                    <div className="flex gap-2 items-center cursor-pointer  transition-opacity hover:!opacity-100 group-hover:opacity-50">
                      <FontAwesomeIcon icon={faGithub} /> Github
                    </div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/aridarmika/?hl=en"
                    target="_blank"
                  >
                    <div className="flex gap-2 items-center cursor-pointer  transition-opacity hover:!opacity-100 group-hover:opacity-50">
                      <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </div>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
        <div className="gradient-circle-bg absolute bg-gradient-to-r from-indigo-500 to-purple-500 opacity-35 h-[50vh] w-[50vw] rounded-full bottom-[0vh] left-[-20vw] blur-3xl z-[-1]"></div>
        <div className="gradient-circle-bg absolute bg-gradient-to-r from-indigo-500 to-purple-500 opacity-35 h-[50vh] w-[50vw] rounded-full top-[-20vw] right-[-20vw] blur-3xl z-[-1]"></div>
      </section>
    </>
  );
}
