"use client";

import { Button, Typography } from "@material-tailwind/react";
import GradientFont from "./gradientFont";
import ProjectCardWellcomePage from "./projectCardwp";
import { poppins } from "./font";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <section className="flex flex-col gap-4 my-48 relative" id="project">
      <div className="gradient-circle-bg absolute bg-gradient-to-r from-indigo-500 to-purple-500 opacity-35 h-[50vh] w-[50vw] rounded-full top-[-20vw] left-[-20vw] blur-3xl z-[-1]"></div>

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
          variant="h1"
          className="mx-auto md:text-5xl text-4xl text-center py-4"
        >
          Selected <GradientFont>Project</GradientFont>
        </Typography>
      </motion.div>

      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-full justify-items-center">
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
          className="w-full h-full"
        >
          <ProjectCardWellcomePage
            img={"/project/protecture/protecture1.png"}
            title={"Protecture"}
            desc={"Report, Donate, Restore"}
            techStacks={[
              { img: "/about/tech-stack/react.png", name: "ReactJS" },
              { img: "/about/tech-stack/tailwind.png", name: "Tailwind CSS" },
              { img: "/about/tech-stack/express.svg", name: "Express JS" },
              { img: "/about/tech-stack/mongodb.svg", name: "Mongo DB" },
              { img: "/project/mapbox.svg", name: "Mapbox API" },
              { img: "/project/midtrans.png", name: "Midtrans API" },
            ]}
            link={"https://protecture-web.vercel.app/"}
          />
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
          className="w-full h-full"
        >
          <ProjectCardWellcomePage
            img={"/project/rectra/rectra1.jpg"}
            title={"VIF Rectra"}
            desc={"Job Recruitment Platform for Final Project"}
            techStacks={[
              { img: "/about/tech-stack/nextjs.png", name: "NextJS" },
              { img: "/about/tech-stack/tailwind.png", name: "Tailwind CSS" },
              { img: "/project/cypress.webp", name: "Cypress Testing" },
              {
                img: "/project/github-action.png",
                name: "Github Action CI/CD",
              },
            ]}
            link={"https://vif.rectra.id/"}
          />
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
          className="w-full h-full"
        >
          <ProjectCardWellcomePage
            img={"/project/detik-learning/detiklearning1.png"}
            title={"detikLearning"}
            desc={"Learning Platform for Employee Onboarding."}
            techStacks={[
              { img: "/about/tech-stack/html.png", name: "HTML" },
              { img: "/about/tech-stack/css-3.png", name: "Vanila CSS" },
              { img: "/about/tech-stack/bootstrap.png", name: "Bootstrap" },
              {
                img: "/project/php.png",
                name: "PHP Language",
              },
              {
                img: "/project/codeigniter.png",
                name: "CodeIgniter",
              },
            ]}
            link={"https://learning.detik.com/frontpage/"}
          />
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
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full h-full"
        >
          <ProjectCardWellcomePage
            img={"/project/classy-yamaha/classy-yamaha1.png"}
            title={"Classy Yamaha Youth Festival 2023"}
            desc={"Yamaha School Festival Branding"}
            techStacks={[
              { img: "/about/tech-stack/html.png", name: "HTML" },
              { img: "/about/tech-stack/css-3.png", name: "Vanila CSS" },
              { img: "/about/tech-stack/bootstrap.png", name: "Bootstrap" },
              {
                img: "/project/php.png",
                name: "PHP Language",
              },
            ]}
            link={"https://displaymicrosite.detik.com/2023/yamaha-youth/"}
          />
        </motion.div>
      </div>
      {/* <Button
        variant="text"
        size="lg"
        className={`w-fit mx-auto mt-8 ${poppins.className}`}
      >
        See More
      </Button> */}
    </section>
  );
}
