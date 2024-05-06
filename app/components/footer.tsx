"use client"
import { Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";
export function Footer() {
    const pathname = usePathname();
    return (
      <div
        className={`bg-black h-[70px] flex flex-col justify-center gap-1 items-center z-[100] ${
          pathname === "/" ? "absolute" : "relative"
        } w-full  bottom-[0]`}
      >
        <div className="flex gap-3">
          <Image alt="" src="/twitter.svg" className="w-[30px] h-[20px]"></Image>
          <Image alt="" src="/facebook.svg" className="w-[30px] h-[20px]"></Image>
          <Image alt="" src="/instagram.svg" className="w-[30px] h-[20px]"></Image>
        </div>
        <div>
                <p className="text-white text-sm">Privacy policy | &copy; MNE  {new Date().getFullYear()}</p>
        </div>
      </div>
    );
}