"use client"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navlinks = [
    {
      key: "Home",
      link: "/",
    },
    {
      key: "About us",
      link: "/about-us",
    },
    {
      key: "Our services",
      link: "/our-services",
    },
    {
      key: "Artiste",
      link: "/artiste",
    },
    {
      key: "New releases",
      link: "/new-releases",
    },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className={` py-4 relative z-[100] ${
        pathname === "/" ? "bg-transparent" : "bg-black"
      }`}
      maxWidth="lg"
      isBlurred={false}
    >
      <NavbarBrand>
        <Image
          radius="none"
          src="/logo.png"
          alt="logo"
          className="w-[61px] h-[61px]"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Tabs
          aria-label="Options"
          selectedKey={pathname}
          variant="underlined"
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0  border-divider",
            cursor: "w-[5px] h-[5px] rounded-full bg-[#2E9AD0]",
            tab: "max-w-fit px-0 h-8",
            tabContent: "group-data-[selected=true]:text-[#2E9AD0] text-white",
          }}
        >
          {navlinks.map((link, index) => (
            <Tab key={link.link} title={link.key} href={link.link}></Tab>
          ))}
        </Tabs>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end"></NavbarContent>
      <NavbarContent className="sm:hidden flex" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden flex  w-10 text-white"
        />
      </NavbarContent>
      <NavbarMenu className="bg-black text-white pt-10">
        {navlinks.map((link, index) => (
          <NavbarItem
            className="text-white"
            key={index}
            as={Link}
            href={link.link}
          >{link.key}</NavbarItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
