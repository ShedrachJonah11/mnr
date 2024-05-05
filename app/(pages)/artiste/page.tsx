import { Image, Spacer, Button } from "@nextui-org/react";
export default function Artiste() {
  return (
    <div className="bg-black w-full h-full pt-7 sm:h-screen overscroll-y-auto">
      <h1>
        <Image
          removeWrapper
          src="/artiste.png"
          alt="icon"
          className=" w-[270px] mx-auto"
          width={1000}
          height={1000}
        ></Image>
      </h1>
      <section>
        <div className="py-12 w-full flex sm:flex-row flex-col justify-center gap-6 px-3">
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/musician1.png"
              alt="icon"
              className=" sm:w-[330px] sm:h-[330px] mx-auto"
              width={1000}
              height={1000}
            ></Image>
            <p className="font-semibold text-xl sm:text-3xl text-white">
              Timi Martins
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <Image
              src="/musician2.png"
              alt="icon"
              className=" sm:w-[330px] sm:h-[330px] mx-auto"
              width={1000}
              height={1000}
            ></Image>
            <p className="font-semibold text-xl sm:text-3xl text-white">
              Reward(Banga)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
