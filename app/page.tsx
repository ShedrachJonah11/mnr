"use client";
import { Button, Link, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, wrap } from "framer-motion";
import { Carousel, initTWE } from "tw-elements";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Home() {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = ["/artiste1.png", "/artiste2.png"];
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    initTWE({ Carousel });
  }, []);
  return (
    <div className="h-screen absolute top-[0] w-full overflow-y-hidden">
      <div className="h-full">
        <div className="flex flex-col gap-8 relative z-[50] h-full bg-gradient-to-b from-[#7171714D] from-70%  to-[#3CEBEB99]">
          <div className="text-center flex flex-col justify-center item-center h-full max-h-[400px]">
            <h1 className="font-bold text-[2rem] sm:text-[4rem]  text-[#2E9AD0]">
              Mix naija entertainment
            </h1>
            <p className="font-bold text-2xl sm:text-4xl  text-white">
              The home of good music
            </p>
            <p className="font-bold text-[1.25rem]  text-white">
              Check our artiste , to get the missing sound in your life
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              className="text-[#2E9AD0] border-1 border-[#2E9AD0] max-w-[280px] w-full bg-transparent rounded-xl text-[1.25rem] font-bold flex gap-2 justify-center items-center"
              size="lg"
              as={Link}
              href="/about-us"
            >
              <span>Learn More</span>{" "}
              <Image src={"/arroww.svg"} alt="arrow"></Image>
            </Button>
          </div>
        </div>
        <div
          id="carouselExampleSlidesOnly"
          className="w-full  h-screen top-[0] absolute"
          data-twe-carousel-init
          data-twe-ride="carousel"
        >
          <div
            className="absolute bottom-20 z-100 left-0 right-0 z-[100] mx-[15%] mb-4 flex list-none justify-center p-0 "
            data-twe-carousel-indicators
          >
            <div className="border-white border-2 mx-[3px] rounded-full h-[23px] w-fit">
              <button
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to="0"
                data-twe-carousel-active
                className=" box-content h-[20px] w-[20px] rounded-full flex-initial cursor-pointer border-0 border-white  border-solid  bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-all !border-opacity-100 duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none border-transparent"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            </div>
            <div className="border-white border-2 mx-[3px] rounded-full h-[23px] w-fit">
              <button
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to="1"
                className=" box-content h-[20px] w-[20px] rounded-full flex-initial cursor-pointer border-0 border-white  border-solid  bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-all !border-opacity-100 duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none outline-2 outline-white"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="border-white border-2 mx-[3px] rounded-full h-[23px] w-fit">
              <button
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to="2"
                className=" box-content h-[20px] w-[20px] rounded-full flex-initial cursor-pointer border-0 border-white  border-solid  bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-all !border-opacity-100 duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none outline-2 outline-white"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <div
              className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-twe-carousel-item
              data-twe-carousel-active
            >
              <Image
                radius="none"
                width={1000}
                height={1000}
                removeWrapper
                src="/artiste1.png"
                className="block w-full h-screen lg:bg-fill bg-contain"
                alt="Wild Landscape"
              />
            </div>

            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-twe-carousel-item
            >
              <Image
                radius="none"
                width={1000}
                height={1000}
                removeWrapper
                src="/artiste2.png"
                className="block w-full h-screen lg:bg-fill bg-contain"
                alt="Camera"
              />
            </div>

            <div
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              data-twe-carousel-item
            >
              <Image
                radius="none"
                width={1000}
                height={1000}
                removeWrapper
                src="/artiste3.png"
                className="block w-full h-screen lg:bg-fill bg-contain"
                alt="Exotic Fruits"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          removeWrapper
          src="/preview1.png"
          alt="icon"
          className=" sm:w-[159px] sm:h-[232px] w-[130px] h-[150px] absolute z-10 left-10 md:top-1/4 sm:top-2/4 top-[70%]"
          radius="none"
        ></Image>{" "}
        <Image
          removeWrapper
          src="/preview2.png"
          alt="icon"
          className=" sm:w-[159px] sm:h-[232px] w-[130px] h-[150px] absolute z-10 right-10 sm:top-2/4 top-[70%]"
          radius="none"
        ></Image>
      </div>
    </div>
  );
}
