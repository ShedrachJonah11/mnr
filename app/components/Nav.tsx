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

export function Nav() {
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
    <Navbar className={` py-4 relative z-[100] ${pathname==="/"?"bg-transparent":"bg-black"}`} maxWidth="lg" isBlurred={false}>
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
      <NavbarContent className="hidden sm:flex" justify="start"></NavbarContent>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {navlinks.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href="#" size="lg">
              {link.key}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
