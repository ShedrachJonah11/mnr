import { Image, Spacer, Button } from "@nextui-org/react";
export default function OurServices() {
  return (
    <div className="bg-black">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-[#2E9AD0] text-5xl text-center font-bold">
          Our Services
        </h1>
        <Spacer y={14}></Spacer>
        <div className=" flex flex-wrap justify-evenly gap-6 items-center ">
          <div className="bg-gradient-to-r w-fit h-fit rounded-[0.625rem] p-[2px] from-[#FF7E07] to-[#312B07]">
            <div className="flex justify-start rounded-[0.625rem] bg-black gap-6 px-2 items-center py-3  max-w-[368px] w-full sm:w-[368px]">
              <Image
                src="/star.png"
                alt="icon"
                className=" sm:w-[55px] sm:h-[50px] w-[25px] h-[25px]"
              ></Image>
              <p className="sm:text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-[#FF7E07] to-[#312B07]">
                Brand partnership
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r w-fit h-fit rounded-[0.625rem] p-[2px] from-[#FF7E07] to-[#312B07]">
            <div className="flex justify-start bg-black gap-6 px-2 items-center py-3 rounded-[0.625rem] max-w-[368px] w-full sm:w-[368px]">
              <Image
                src="/video.png"
                alt="icon"
                className=" sm:w-[55px] sm:h-[50px] w-[25px] h-[25px]"
              ></Image>
              <p className="sm:text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-[#FF7E07] to-[#312B07]">
                Content production
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r w-fit h-fit rounded-[0.625rem] p-[2px] from-[#FF7E07] to-[#312B07]">
            <div className="flex justify-start bg-black gap-6 px-2 items-center py-3 rounded-[0.625rem] max-w-[368px] w-full sm:w-[368px]">
              <Image
                src="/music.png"
                alt="icon"
                className=" sm:w-[55px] sm:h-[50px] w-[25px] h-[25px]"
              ></Image>
              <p className="sm:text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-[#FF7E07] to-[#312B07]">
                Music liscencing
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r w-fit h-fit rounded-[0.625rem] p-[2px]  from-[#FF7E07] to-[#312B07]">
            <div className="flex justify-start bg-black gap-6 px-2 items-center py-3 pr-4 rounded-[0.625rem] max-w-[673px] w-full sm:w-fit">
              <Image
                src="/mic.png"
                alt="icon"
                className=" sm:w-[55px] sm:h-[50px] w-[25px] h-[25px]"
              ></Image>
              <p className="sm:text-2xl text-transparent bg-clip-text  bg-gradient-to-r from-[#FF7E07] to-[#312B07]">
                Performance and Appearance
              </p>
            </div>
          </div>
        </div>
        <Spacer y={6}></Spacer>
        <section className="w-full flex flex-col gap-14 py-10 justify-center items-center px-3">
          <div className="text-center flex flex-col bg-[#0B0B0B] justify-center items-center gap-6 p-8 rounded-[1.25rem] border-1 hover:border-[#35BAEB] border-transparent max-w-[1048px] max-h-[1021px]">
            <Image
              src="/star.png"
              alt="icon"
              className=" w-[55px] h-[50px]"
            ></Image>
            <p className="text-[2.5rem] text-white">Brand partnership</p>
            <p className=" text-white">
              Lorem ipsum dolor sit amet consectetur. Cras faucibus et elementum
              gravida diam tempus dui dignissim sem. Augue hac eu augue proin
              porttitor tempus tristique.
            </p>
            <Image
              src="/collaborate.png"
              alt="icon"
              className=" max-[329px] w-full sm:w-[329px] h-full sm:h-[417px]"
            ></Image>
            <Button className="text-[#2E9AD0] border-1 border-[#2E9AD0] max-w-[280px] w-full bg-transparent rounded-xl text-[1.25rem] font-semibold p-8">
              Start collaborating
            </Button>
          </div>
          <div className="text-center flex flex-col bg-[#0B0B0B] justify-center items-center gap-6 p-8 rounded-[1.25rem] border-1 hover:border-[#35BAEB] border-transparent max-w-[1048px] max-h-[1021px]">
            <Image
              src="/video.png"
              alt="icon"
              className=" w-[55px] h-[50px]"
            ></Image>
            <p className="text-[2.5rem] text-white">Content Production</p>
            <p className=" text-white">
              Lorem ipsum dolor sit amet consectetur. Cras faucibus et elementum
              gravida diam tempus dui dignissim sem. Augue hac eu augue proin
              porttitor tempus tristique.
            </p>
            <Image
              src="/content.png"
              alt="icon"
              className=" max-[329px] w-full sm:w-[329px] h-full sm:h-[417px]"
            ></Image>
            <Button className="text-[#2E9AD0] border-1 border-[#2E9AD0] max-w-[280px] w-full bg-transparent rounded-xl text-[1.25rem] font-semibold p-8">
              Send us a message
            </Button>
          </div>{" "}
          <div className="text-center flex flex-col bg-[#0B0B0B] justify-center items-center gap-6 p-8 rounded-[1.25rem] border-1 hover:border-[#35BAEB] border-transparent max-w-[1048px] max-h-[1021px]">
            <Image
              src="/music.png"
              alt="icon"
              className=" w-[55px] h-[50px]"
            ></Image>
            <p className="text-[2.5rem] text-white">Music Production</p>
            <p className=" text-white">
              Lorem ipsum dolor sit amet consectetur. Cras faucibus et elementum
              gravida diam tempus dui dignissim sem. Augue hac eu augue proin
              porttitor tempus tristique.
            </p>
            <Image
              src="/collaborate.png"
              alt="icon"
              className=" max-[329px] w-full sm:w-[329px] h-full sm:h-[417px]"
            ></Image>
            <Button className="text-[#2E9AD0] border-1 border-[#2E9AD0] max-w-[280px] w-full bg-transparent rounded-xl text-[1.25rem] font-semibold p-8">
              Use our music
            </Button>
          </div>{" "}
          <div className="text-center flex flex-col bg-[#0B0B0B] justify-center items-center gap-6 p-8 rounded-[1.25rem] border-1 hover:border-[#35BAEB] border-transparent max-w-[1048px] max-h-[1021px]">
            <Image
              src="/mic.png"
              alt="icon"
              className=" w-[55px] h-[50px]"
            ></Image>
            <p className="text-[2.5rem] text-white">
              Performance and Appearance
            </p>
            <p className=" text-white">
              Lorem ipsum dolor sit amet consectetur. Cras faucibus et elementum
              gravida diam tempus dui dignissim sem. Augue hac eu augue proin
              porttitor tempus tristique.
            </p>
            <Image
              src="/collaborate.png"
              alt="icon"
              className=" max-[329px] w-full sm:w-[329px] h-full sm:h-[417px]"
            ></Image>
            <Button className="text-[#2E9AD0] border-1 border-[#2E9AD0] max-w-[280px] w-full bg-transparent rounded-xl text-[1.25rem] font-semibold p-8">
              Use our music
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
