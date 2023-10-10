"use client";
import { register } from "swiper/element/bundle";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";


register();

export default function TinyGallery() {
    const swiperElRef = useRef(null);

    const swiperInner = useRef(null);

    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const swiperContainer = swiperElRef.current;
        const swiperContainer2 = swiperInner.current;

        const params = {
          pagination: true,
          loop: false,
          injectStyles: [
            `
              .swiper-pagination-bullet{
                background-color: #ffffff;
                padding: 0.15rem;
                border-radius: 4px;
              }
          `,
          ],
        };

        const params2 = {
          pagination: true,
          loop: true,
          injectStyles: [
            `
              .swiper-pagination-bullet{
                background-color: rgb(201 201 201);
                padding: 0.15rem;
                border-radius: 4px;
              }
          `,
          ],
        };
    
        Object.assign(swiperContainer, params);
        swiperContainer.initialize();

        Object.assign(swiperContainer2, params2);
        swiperContainer2.initialize();
      }, []);
    return (
        <> 
            <div className={`w-full md:w-1/2 ${hasLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-center bg-dark text-neutral-400 font-bold p-3">Mini Galería</h2>
                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="1"
                    init={false}
                >
                    <swiper-slide style={{maxHeight: "24rem"}}>
                        <swiper-container
                            ref={swiperInner}
                            slides-per-view="1"
                            pagination="true"
                            loop={true}
                            direction="vertical"
                            centered-slides="true"
                            style={{height: "100vw", maxHeight: "24rem"}}
                            init={false}
                        >
                            <swiper-slide>
                                <Image 
                                    src={"./images/holders/halloween/1.webp"}
                                    fill={true}
                                    alt="alt"
                                    className="object-cover"
                                    onLoad={() => setHasLoaded(true)}
                                    />
                            </swiper-slide>
                            <swiper-slide>
                                <Image 
                                    src={"./images/holders/halloween/2.webp"}
                                    fill={true}
                                    alt="alt"
                                    className="object-cover"
                                />
                            </swiper-slide>
                            <swiper-slide>
                                <Image 
                                    src={"./images/holders/halloween/3.webp"}
                                    fill={true}
                                    alt="alt"
                                    className="object-cover"
                                />
                            </swiper-slide>
                        </swiper-container>
                    </swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                </swiper-container>
            </div>
        </>
    )
}