import { Image, Spacer } from "@nextui-org/react";
export default function AboutUs() {
  return (
    <div className="bg-black py-10 sm:px-6 px-3">
      <div className="flex flex-col gap-5 max-w-[1280px] mx-auto">
        <h1 className="text-[#2E9AD0] text-4xl sm:text-5xl text-center font-bold">
          {" "}
          Mix naija entertaintment
        </h1>
        <Spacer y={6}></Spacer>
        <div className="flex md:flex-row flex-col justify-between items-center gap-10">
          <Image src="/about1.png" alt="" className="sm:max-w-[437px]"></Image>
          <div className="flex flex-col gap-6">
            <p className="sm:text-5xl text-4xl font-bold text-[#979797]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="font-bold text-2xl  text-white">
              Lorem ipsum dolor sit amet consectetur. Tellus vitae quis placerat
              at.
            </p>
          </div>
        </div>
        <div className="flex justify-end text-white">
          <div className="flex max-w-[500px] w-full justify-around">
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="text-[#FF7E07] font-semibold text-6xl">+2</p>
              <p className="text-[2rem] text-[#979797]">Artiste</p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className="text-[#FF7E07] font-semibold text-6xl">+2</p>
              <p className="text-[2rem] text-[#979797]">Albums</p>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between items-start gap-10">
          <div className="flex flex-col">
            <p className="text-[2rem]  text-white">
              Lorem ipsum dolor sit amet consectetur. Feugiat morbi egestas est
              maecenas lobortis erat non. In etiam accumsan imperdiet elementum.
              Integer morbi volutpat ultrices vitae tellus diam arcu morbi.
              Etiam vel sit sapien viverra et odio mauris sit.
            </p>
          </div>
          <Image
            alt=""
            removeWrapper

            src="/about2.png"
            className="sm:max-w-[437px] md:top-16 relative mx-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
}
