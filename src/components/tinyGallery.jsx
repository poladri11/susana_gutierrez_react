"use client";
import { register } from "swiper/element/bundle";
import { useEffect, useRef } from "react";
register();

export default function TinyGallery() {
    const swiperElRef = useRef(null);


    return (
        <div className="w-full h-20">
            <h2 className="text-center bg-dark text-neutral-400 font-bold p-3">Galería</h2>
            <swiper-container
                ref={swiperElRef}
                slides-per-view="1"
                pagination="true"
                loop={true}
            >
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>
                    <swiper-container
                    slides-per-view="1"
                    pagination="true"
                    loop={true}
                    direction="vertical"
                    centered-slides="true"
                    style={{height: "100vw", maxHeight: "20rem"}}
                    >
                        <swiper-slide>Slide vertical</swiper-slide>
                        <swiper-slide>Slide vertical</swiper-slide>
                        <swiper-slide>Slide vertical</swiper-slide>
                    </swiper-container>
                </swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
            </swiper-container>
        </div>
    )
}