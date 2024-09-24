import { Autoplay, Pagination } from "swiper/modules";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button, Tooltip } from "@material-tailwind/react";

const techStackData = [
  { img: "/about/tech-stack/html.png", name: "HTML" },
  { img: "/about/tech-stack/css-3.png", name: "CSS" },
  { img: "/about/tech-stack/js.png", name: "Javascript" },
  { img: "/about/tech-stack/react.png", name: "ReactJS" },
  { img: "/about/tech-stack/nextjs.png", name: "NextJS" },
  { img: "/about/tech-stack/bootstrap.png", name: "Bootstrap" },
  { img: "/about/tech-stack/tailwind.png", name: "Tailwind CSS" },
  { img: "/about/tech-stack/materialui.png", name: "Material UI" },
  { img: "/about/tech-stack/node.svg", name: "Node JS" },
  { img: "/about/tech-stack/express.svg", name: "Express JS" },
  { img: "/about/tech-stack/mongodb.svg", name: "Mongo DB" },
  { img: "/about/tech-stack/sql.svg", name: "SQL" },
  { img: "/about/tech-stack/hapi.svg", name: "Hapi JS" },
  { img: "/about/tech-stack/firebase.svg", name: "Hapi JS" },
  { img: "/about/tech-stack/figma.svg", name: "Figma" },
  { img: "/about/tech-stack/adobe-illustrator.svg", name: "Adobe Illustrator" },
  { img: "/about/tech-stack/flutter.svg", name: "Flutter" },
  { img: "/about/tech-stack/git.svg", name: "Git" },
  { img: "/about/tech-stack/gitlab.svg", name: "Gitlab" },
  { img: "/about/tech-stack/postman.svg", name: "Postman" },
];

export default function TechStackCarousel() {
  const [stacks, setStacks] = React.useState(8);

  const handleWindowResize = () => {
    if (window.innerWidth >= 768) {
      setStacks(8);
    } else {
      setStacks(4);
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={stacks}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="size-full flex items-center gap-2 group my-8"
        loop={true}
      >
        {techStackData.map((stack) => {
          return (
            <>
              <SwiperSlide className="flex justify-center items-center transition-opacity duration-500 hover:!opacity-100 group-hover:opacity-50 my-auto">
                <Tooltip content={stack.name}>
                  <img
                    src={stack.img}
                    alt={stack.name}
                    className="object-cover cursor-pointer w-2/3 "
                  />
                </Tooltip>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
