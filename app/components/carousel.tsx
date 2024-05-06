"use client"
import { Image } from "@nextui-org/react";
import { useEffect } from "react";
export default function Carousel() {
      useEffect(() => {
        const use = async () => {
          const { Carousel, initTWE } = await import("tw-elements");
          initTWE({ Carousel });
        };
        use();
      }, []);
    return (
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
    );
}