import { Image, Spacer, Button } from "@nextui-org/react";
import { AiOutlineSpotify } from "react-icons/ai";
import { PiMusicNotesFill } from "react-icons/pi";
import { SiAudiomack } from "react-icons/si";
export default function NewReleases() {
  return (
    <div className="bg-black w-full h-full pt-7 md:h-screen overscroll-y-auto">
      <h1>
        <Image
          removeWrapper
          src="/new-release-head.png"
          alt="icon"
          className=" w-[370px] mx-auto"
          width={1000}
          height={1000}
        ></Image>
      </h1>
      <section className="py-12 max-w-[1280px] px-3 w-full mx-auto">
        <div className="w-full justify-around items-center  gap-4 flex md:flex-row flex-col">
          <div className="w-full">
            <p className="text-[2.5rem] text-white">Na the money i dey find</p>
            <p className="text-[2rem] font-rasta text-white">Timi Martins</p>
            <Image
              removeWrapper
              src="/money-find.png"
              alt="icon"
              className=" md:w-[395px] w-full"
              width={1000}
              height={1000}
            ></Image>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Button
              className="md:w-[400px] h-[75px] w-full border-white text-white bg-transparent rounded-md border-1 font-bold text-2xl"
              endContent={<AiOutlineSpotify color="white" size={30} />}
            >
              Play on Spotify
            </Button>
            <Button
              className="md:w-[400px] h-[75px] w-full border-white text-white bg-transparent rounded-md border-1 font-bold text-2xl"
              endContent={<PiMusicNotesFill color="white" size={30} />}
            >
              Play on Apple music
            </Button>
            <Button
              className="md:w-[400px] h-[75px] w-full border-white text-white bg-transparent rounded-md border-1 font-bold text-2xl"
              endContent={<SiAudiomack color="white" size={30} />}
            >
              Play on Audiomack
            </Button>
            <Button
              className="md:w-[400px] h-[75px] w-full border-white text-white bg-transparent rounded-md border-1 font-bold text-2xl"
              endContent={
                <Image
                  src="/boomplay.png"
                  alt="icon"
                  className=" w-[30px] "
                  width={1000}
                  height={1000}
                ></Image>
              }
            >
              Play on Boomplay
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
