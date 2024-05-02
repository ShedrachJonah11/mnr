"use client"
import { Button, Link ,Image} from "@nextui-org/react";
import { useState } from "react";
import { AnimatePresence, motion,wrap } from "framer-motion";
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
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

 
  return (
    <div className="h-screen absolute top-[0] w-full">
      <div className="h-full">
        <div className="flex flex-col gap-8 relative z-[50] h-full">
          <div className="text-center flex flex-col justify-center item-center h-full max-h-[400px]">
            <h1 className="font-bold text-[4rem]  text-[#2E9AD0]">
              Mix naija entertainment
            </h1>
            <p className="font-bold text-4xl  text-white">
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
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="w-full h-full top-[0] absolute "
            width={1000}
            height={1000}
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
