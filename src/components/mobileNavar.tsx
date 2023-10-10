"use client";
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

import { animated, useSpring } from "@react-spring/web"

export default function MobileMenu() {
    
    const [menuHolder, animationMenuHolder] = useSpring(() => ({
        from: { x: "100%" }
    }))

    const [hamburguerSpan1, animationSpan1] = useSpring(() => ({
        from: {transform: "rotate 0deg", top: "0px"}
    }))

    const [hamburguerSpan2, animationSpan2] = useSpring(() => ({
        from: {opacity: 1}
    }))

    const [hamburguerSpan3, animationSpan3] = useSpring(() => ({
        from: {transform: "rotate 0deg", top: "0px"}
    }))

    const [isOpened, setIsOpened] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        isOpened ? document.body.classList.add("overflow-hidden") : document.body.classList?.remove("overflow-hidden");

    }, [isOpened])

    const animate = () => {

        if(!isOpened) {
            animationMenuHolder.start({
                from: {x: "100%"},
                to: {x: "0%"},
                onStart: (result, spring) => {
                    setIsDisplayed(false);
                }
            })

            animationSpan1.start({
                from: {transform: "rotate(0deg)", top: "0px"},
                to: {transform: "rotate(45deg)", top: "7px"}
            })

            animationSpan2.start({
                from: {opacity: 1},
                to: {opacity: 0}
            })

            animationSpan3.start({
                from: {transform: "rotate(0deg)", top: "0px"},
                to: {transform: "rotate(-45deg)", top: "-5px"}
            })

        } else {
            animationMenuHolder.start({
                from: {x: "0%"},
                to: {x: "100%"},
                onResolve: (result, spring) => {
                    setIsDisplayed(true);
                }
            })

            animationSpan1.start({
                from: {transform: "rotate(45deg)", top: "7px"},
                to: {transform: "rotate(0deg)", top: "0px"}
            })

            animationSpan2.start({
                from: {opacity: 0},
                to: {opacity: 1}
            })

            animationSpan3.start({
                from: {transform: "rotate(-45deg)", top: "-5px"},
                to: {transform: "rotate(0deg)", top: "0px"}
            })
        }
        setIsOpened(!isOpened)
        
    }

    return (
        <>
            <div 
                className="flex flex-col gap-1 absolute right-5 top-1/2 -translate-y-1/2 md:hidden z-30 cursor-pointer"
                onClick={animate}
            >
                <animated.span style={{
                    ...hamburguerSpan1
                }} className="w-6 h-0.5 bg-light block relative"></animated.span>
                <animated.span style={{
                    ...hamburguerSpan2
                }} className="w-6 h-0.5 bg-light block relative"></animated.span>
                <animated.span style={{
                    ...hamburguerSpan3
                }} className="w-6 h-0.5 bg-light block relative"></animated.span>
            </div>
            <animated.div
                style={{
                    ...menuHolder,
                    height: "100dvh"
                }}
                className={`${!isDisplayed ? 'flex' : 'hidden'} bg-dark fixed z-20 w-screen top-0 left-0 bottom-0 flex-col items-center p-5 md:hidden`}
            >
                <Link href={"/"} className="place-self-start">
                    <Image 
                        src="/images/logo/logo.webp"
                        width={150}
                        height={150}
                        alt="Susana gutiérrez logo"
                    />
                </Link>
                <nav className="flex-1 text-white text-center grid place-items-center">
                    <ul className="flex flex-col gap-8 tracking-wider items-center">
                        <animated.li className="border-b w-fit border-[#afafaf6b]">
                            <Link onClick={animate} href={"/"}>
                                Inicio
                            </Link>
                        </animated.li>
                        <animated.li className="border-b w-fit border-[#afafaf6b]">
                            <Link onClick={animate} href={"/galeria"}>
                                Galería
                            </Link>
                        </animated.li>
                        <animated.li className="border-b w-fit border-[#afafaf6b]">
                            <Link onClick={animate} href={"/clases"}>
                                Clases
                            </Link>
                        </animated.li>
                        <animated.li className="border-b w-fit border-[#afafaf6b]">
                            <Link onClick={animate} href={"/contacto"}>
                                Contacto
                            </Link>
                        </animated.li>
                    </ul>
                </nav>
                <div className="flex justify-between w-full">
                    <Link href={"#"} className="text-white">
                        Cookies
                    </Link>
                    <Link href={"#"} className="text-white">
                        Aviso legal
                    </Link>
                </div>
            </animated.div>
        </>
    )
}