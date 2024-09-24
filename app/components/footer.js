"use client";

import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2024 Ari Dharmika
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              onClick={() => {
                const element = document.getElementById("hero");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              color="blue-gray"
              className="font-normal transition-colors hover:text-purple-500 focus:text-purple-500 cursor-pointer"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              onClick={() => {
                const element = document.getElementById("project");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              color="blue-gray"
              className="font-normal transition-colors hover:text-purple-500 focus:text-purple-500 cursor-pointer"
            >
              Project
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              onClick={() => {
                const element = document.getElementById("experience");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              color="blue-gray"
              className="font-normal transition-colors hover:text-purple-500 focus:text-purple-500 cursor-pointer"
            >
              Experience
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              onClick={() => {
                const element = document.getElementById("about");
                element?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              color="blue-gray"
              className="font-normal transition-colors hover:text-purple-500 focus:text-purple-500 cursor-pointer"
            >
              About
            </Typography>
          </li>
        </ul>
      </footer>
    </>
  );
}
