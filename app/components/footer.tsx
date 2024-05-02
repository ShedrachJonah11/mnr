"use client"
import { Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";
export function Footer() {
    const pathname = usePathname();
    return (
        <div className={`bg-black h-[70px] flex flex-col justify-center items-center z-[100] ${pathname==="/"?"absolute":"relative"} w-full  bottom-[0]`}>
            <div className="flex gap-3">
                <Image src="/twitter.svg" className="w-[30px] h-[20px]"></Image>
                <Image src="/facebook.svg" className="w-[30px] h-[20px]"></Image>
                <Image src="/instagram.svg" className="w-[30px] h-[20px]"></Image>
            </div>
        </div>
    )
}