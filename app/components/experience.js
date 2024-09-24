"use client";

import {
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import GradientFont from "./gradientFont";
import { poppins } from "./font";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <>
      <section className="flex flex-col gap-4 relative" id="experience">
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
            <div className="gradient-circle-bg absolute bg-gradient-to-r from-indigo-500 to-purple-500 opacity-35 h-[50vh] w-[50vw] rounded-full top-[-20vw] right-[-20vw] blur-3xl z-[-1]"></div>
            <GradientFont>Experience</GradientFont> & Certification
          </Typography>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-4 ${poppins.className} my-16`}>
          <div className="">
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
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Timeline of working and organizational experience
              </Typography>
              <Timeline className={` my-8`}>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-fit flex items-start">
                    <TimelineIcon />
                    <div className="flex flex-col gap-2">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Front-end Designer Internship
                      </Typography>

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Detikcom (Media Company)
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Aug 2023 - Dec 2023
                      </Typography>
                    </div>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div className="font-normal text-gray-600 text-sm">
                      <ul className="list-disc list-outside ml-3 ">
                        <li>
                          Developed the implementation of Figma user interface
                          design microsites for various brand campaign needs
                          from detikcom using HTML, CSS, Javascript, and
                          Bootstrap.
                        </li>
                        <li>
                          Contributed to the development of 5 microsites and 2
                          components with a total of 19 microsite pages for
                          detikcom, and an E-Learning platform for internal
                          onboarding training purposes
                        </li>
                        <li>
                          Worked with a team consist of 4 developers
                          collaborated with gitlab for ease coordination and
                          rapid deployment pipeline
                        </li>
                      </ul>
                    </div>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-fit flex items-start">
                    <TimelineIcon />
                    <div className="flex flex-col gap-2">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Head Department of Media and Information
                      </Typography>

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none"
                      >
                        ITS Informatics Engineering Student Association
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Mar 2023 - Jan 2024
                      </Typography>
                    </div>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div className="font-normal text-gray-600 text-sm">
                      <ul className="list-disc list-outside ml-3 ">
                        <li>
                          Designed, led, and supervised implementation of
                          student association media and information including 5
                          social media, website development, and leading 17
                          staff member
                        </li>
                        <li>
                          Achieved 89% of Key Performance Indicator with 855
                          follower improvement and 354.433 page view of overall
                          social media.
                        </li>
                        <li>
                          Pioneered a website development team workflow using
                          agile management for student association media with
                          implementation of front-end using Next.js framework,
                          and Typescript Language.
                        </li>
                      </ul>
                    </div>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeader className="h-fit flex items-start">
                    <TimelineIcon />
                    <div className="flex flex-col gap-2">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Chief Organizer
                      </Typography>

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none"
                      >
                        ITS Informatics Engineering Student Association Basic
                        Media Schooling 2022
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Mar 2023 - Jan 2024
                      </Typography>
                    </div>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div className="font-normal text-gray-600 text-sm">
                      <ul className="list-disc list-outside ml-3 ">
                        <li>
                          Led the planning and execution of media training
                          activities for ITS Informatics Engineering students
                          with a total 20 committee members.
                        </li>
                        <li>
                          Conducted training with topics include journalism,
                          photography, videography, graphic design, and website
                          development with 92.64% in participant understanding
                          of the training material.
                        </li>
                        <li>
                          Enabled collaboration among 40 students participation
                          in creating media portfolios through post-training
                          activities included website development and video
                          production
                        </li>
                      </ul>
                    </div>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </motion.div>
          </div>
          <div>
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
                variant="h6"
                color="blue-gray"
                className="leading-none"
              >
                Certification of Courses and Training
              </Typography>
              <Timeline className={`${poppins.className} my-8`}>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-fit flex items-start">
                    <TimelineIcon />
                    <div className="flex flex-col gap-2">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Front End Web and Back End Certified Independent Study
                      </Typography>

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Dicoding Indonesia
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Feb 2023 - Jun 2023
                      </Typography>
                    </div>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div className="font-normal text-gray-600 text-sm">
                      <ul className="list-disc list-outside ml-3 ">
                        <li>
                          <Link href="https://drive.google.com/file/d/1zkueKeFLEkNX9ofpdEX2TYwVtTHOLE1v/view">
                            Certificate Link
                          </Link>
                        </li>
                        <li>
                          Front-end and back-end web software development
                          training, as well as soft skills that are essential
                          for success in the IT industry by Dicoding Indonesia
                          in collaboration with Kampus Merdeka.
                        </li>
                      </ul>
                    </div>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader className="h-fit flex items-start">
                    <TimelineIcon />
                    <div className="flex flex-col gap-2">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Become a Front-End Web Developer Expert
                      </Typography>

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Dicoding Indonesia
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Jun 2023 - Jun 2026
                      </Typography>
                    </div>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div className="font-normal text-gray-600 text-sm">
                      <ul className="list-disc list-outside ml-3 ">
                        <li>
                          <Link href="https://www.dicoding.com/certificates/2VX3J4GYQPYQ">
                            Certificate Link
                          </Link>
                        </li>
                        <li>
                          Certification materials include: Mobile First Approach
                          Development, Web Accessibility, JavaScript Clean Code,
                          Progressive Web Apps, Automation Testing, Web
                          Performance, Deployment with CI/CD.
                        </li>
                      </ul>
                    </div>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeader className="h-fit flex items-start">
                    <TimelineIcon />
                    <div className="flex flex-col gap-2">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Learn Fundamental Front-End Web Development
                      </Typography>

                      <Typography
                        variant="h6"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Dicoding Indonesia
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="leading-none"
                      >
                        Apr 2023 - Apr 2026
                      </Typography>
                    </div>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div className="font-normal text-gray-600 text-sm">
                      <ul className="list-disc list-outside ml-3 ">
                        <li>
                          <Link href="https://www.dicoding.com/certificates/1OP80DQ48XQK">
                            Certificate Link
                          </Link>
                        </li>
                        <li>
                          Certification materials include: ECMAScript
                          (Javascript) 6, Web Components, Package Manager,
                          JavaScript Bundles with Module Bundler, Asynchronous
                          JavaScript Requests.
                        </li>
                      </ul>
                    </div>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </motion.div>
          </div>
        </div>
        <div className="gradient-circle-bg absolute bg-gradient-to-r from-indigo-500 to-purple-500 opacity-35 h-[50vh] w-[50vw] rounded-full bottom-[50vh] left-[-20vw] blur-3xl z-[-1]"></div>
      </section>
    </>
  );
}
