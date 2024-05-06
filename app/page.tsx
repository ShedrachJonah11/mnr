"use client";
import dynamic from "next/dynamic";
import { Button, Link, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
const MyCarousel = dynamic(() => import("./components/carousel"), {
  ssr: false,
});

export default function Home() {
 


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
        <MyCarousel/>
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
