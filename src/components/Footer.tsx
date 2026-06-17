"use client";

import React from "react";
import Magnetic from "./Magnetic";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#pricing",
                start: "bottom 95%",
                end: "bottom 35%",
                scrub: true,
            }
        });
        tl.to(".footer-text", {
            y: "30%",
            duration: 2.5,
        })
        tl.to(".footer-text-1", {
            x: "0%",
            opacity: 1,
            duration: 1,
        })

    })

    return (
        <footer
            className="h-screen w-full bg-accent text-black flex flex-col justify-between px-6 pt-24 md:pt-32 pb-8 md:pb-12"
            style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
            <div className="max-w-[90rem] mx-auto w-full h-full flex flex-col justify-between">
                <div className="grid md:grid-cols-1 gap-8 md:gap-16 h-full">
                    <div className="flex flex-col h-full justify-center gap-10 md:justify-evenly">
                        <h2 className="font-display text-5xl text-center md:text-left sm:text-7xl md:text-9xl font-bold uppercase leading-[0.8] tracking-tighter">
                            Let's <br /> Create
                        </h2>
                        <div className="flex flex-col gap-5 w-full md:flex-row md:justify-between md:items-center md:gap-2">
                            <a
                                href="https://cal.com/zero1studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-black text-white w-full md:w-auto py-4 px-6 md:p-4 md:px-8 flex items-center justify-center gap-3 md:gap-4 md:group-hover:gap-4 rounded-full font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold transition-[gap] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                data-hover="true"
                            >
                                <span
                                    className="inline-block overflow-hidden w-6 sm:w-7 md:w-0 md:group-hover:w-8 transition-[width] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    aria-hidden="true"
                                >
                                    <CalendarIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 md:-translate-x-full md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
                                </span>
                                Book a call
                            </a>
                            <a
                                href="mailto:info@zero1studio.xyz"
                                className="font-bold text-xs sm:text-sm md:text-xl uppercase tracking-wider text-center md:text-left py-2 md:py-0 min-h-11 flex items-center justify-center md:justify-start"
                            >
                                info@zero1studio.xyz
                            </a>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row justify-between items-end border-t border-black/10 pt-4 md:pt-8 gap-4 md:gap-0">
                    <span className="text-[14vw] flex font-display footer-text font-bold leading-none -mb-2 md:-mb-8 select-none opacity-20 translate-y-full">
                        ZERO <div className="-translate-x-full opacity-0 footer-text-1">1</div>
                    </span>
                    <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-bold uppercase tracking-widest mb-2 md:mb-4">
                        <Link href="/privacy" className="hover:underline" data-hover="true">Privacy</Link>
                        <Link href="/legal" className="hover:underline" data-hover="true">Legal</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}