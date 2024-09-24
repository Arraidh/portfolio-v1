import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { poppins } from "./font";
import GradientFont from "./gradientFont";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ProjectCardWellcomePage({
  img,
  title,
  desc,
  techStacks,
  link,
}) {
  return (
    <>
      {" "}
      <Card
        className={`w-full h-full max-w-[26rem] shadow-lg ${poppins.className} flex flex-col justify-between`}
      >
        <CardHeader
          floated={false}
          color="blue-gray"
          className="aspect-video bg-gradient-to-r from-indigo-500 to-purple-500 "
        >
          <img
            src={img}
            alt={`${title} ${desc}`}
            className="object-cover size-full"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              <GradientFont>{title}</GradientFont>
            </Typography>
          </div>
          <Typography color="gray">{desc}</Typography>
          <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            {techStacks.map((stack) => {
              return (
                <>
                  <Tooltip content={stack.name}>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <img
                        src={stack.img}
                        alt={stack.name}
                        className="h-4 w-auto"
                      />
                    </span>
                  </Tooltip>
                </>
              );
            })}
          </div>
        </CardBody>
        <CardFooter className="pt-3">
          <Link href={link} target="_blank">
            <Button
              size="lg"
              fullWidth={true}
              color="purple"
              className="flex gap-2 justify-center items-center"
            >
              Detail <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
