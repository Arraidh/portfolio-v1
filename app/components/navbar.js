"use client";

import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
  Collapse,
} from "@material-tailwind/react";
import { poppins } from "./font";
import GradientFont from "./gradientFont";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

function Navlist() {
  return (
    <>
      <div className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Button
          variant="text"
          color="black"
          className="capitalize font-medium"
          onClick={() => {
            const element = document.getElementById("project");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Project
        </Button>
        <Button
          variant="text"
          color="black"
          className="capitalize font-medium"
          onClick={() => {
            const element = document.getElementById("experience");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Experience
        </Button>
        <Button
          variant="text"
          color="black"
          className="capitalize font-medium"
          onClick={() => {
            const element = document.getElementById("about");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          About
        </Button>
      </div>
    </>
  );
}

export default function NavbarPortfolio() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      variant="gradient"
      color="white"
      className={`${poppins.className} mt-4 mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3 text-black sticky top-5 z-10`}
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="font-bold mr-4 ml-2 cursor-pointer py-1.5 "
          onClick={() => {
            const element = document.getElementById("hero");
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <GradientFont>Ari.dh</GradientFont>
        </Typography>

        <div className="hidden lg:block">
          <Navlist />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <Navlist />
      </Collapse>
    </Navbar>
  );
}
