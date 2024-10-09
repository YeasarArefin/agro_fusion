'use client';

import icons from "@/constants/menuIcons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import NavItems from "./Navitems";

export default function Navbar() {

    const [mobileMenu, setMobileMenu] = useState(false);

    const links = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Contact', to: '/contact' },
    ];

    useEffect(() => {
        const body = document.querySelector("body");
        if (body) {
            if (mobileMenu) {
                body.classList.add("overflow-hidden");
            } else {
                body.classList.remove("overflow-hidden");
            }
        }
    }, [mobileMenu]);

    return (
        <div className="sticky bg-white border-b lg:border-0 border-slate-200 top-0 mb-5 z-[100]">
            <div className="container">
                <div className="py-2 w-5/6 mx-auto">
                    <div className="flex flex-col gap-y-5 md:flex-row items-start md:items-center md:justify-between">
                        <div className="flex gap-x-5 items-center w-full text-lg py-2">
                            <div className="block md:hidden cursor-pointer" onClick={() => setMobileMenu(true)}><HiMenuAlt2 className="text-2xl" /></div>
                            <Image src={icons.brandLogo} alt="Brand Logo" />
                        </div>
                        <div className="hidden md:flex items-center gap-x-5">
                            <NavItems links={links} key="desktop" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn("", { "bg-black/50 md:hidden z-30 fixed top-0 left-0 transition-all duration-300 h-[100%] w-full": mobileMenu })} onClick={() => setMobileMenu(false)}>
                <div className={cn("flex flex-col drop-shadow-2xl w-[300px] h-[100%] md:hidden gap-y-5 pt-5 container top-0 left-0 fixed bg-white transition-all duration-200 ease-in-out", { "-left-[500px]": !mobileMenu, "-left-[0px]": mobileMenu })} onClick={(e) => { e.stopPropagation(); }}>
                    <div className="flex justify-between gap-x-2 items-center w-full text-lg py-2">
                        <Image src={icons.brandLogo} alt="Brand Logo" />
                        <div className="block md:hidden cursor-pointer" onClick={() => setMobileMenu(false)}><IoMdClose className="text-2xl" /></div>
                    </div>
                    <NavItems links={links} key="mobile" />
                </div>
            </div>
        </div>
    );
}