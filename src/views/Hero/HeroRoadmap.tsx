import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import RoadBox from "../../components/RoadBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef } from 'react'

const HeroRoadmap = () => {

    const word = "ROADMAP"

    const settings = { triggerOnce: false, threshold: 0.9, rootMargin: `${window.innerHeight}px 0px  0px 0px` }


    const [textRef, textView] = useInView(settings)
    const [containerRef, containerView] = useInView(settings)

    const sliderRef = useRef<Slider>(null)

    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1536,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }

        ]
    };


    const container = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    }

    const rainbowVariant = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
        }
    }

    const roadmapList = [
        {
            label: 'Leaving ponyville',
            contents: [
                'Launch the magical pony ride to Canterlot!',
                'Start making $FRIENDSHIP bonds with the My Little Pony family!',
                'Sprinkle magic dust for $FRIENDSHIP marketing & trending'
            ]
        },
        {
            label: 'Everfree forest',
            contents: [
                'The $FRIENDSHIP continues as the family gets bigger!',
                'The forest heals all with CMC & CG listings!',
                'Strange forest creatures will help with more marketing!',
            ]
        },
        {
            label: 'Canterlot',
            contents: [
                'Only the best will do for the Little Ponies with a Top Tier CEX',
                'The $FRIENDSHIP magic circle is on the moon!',
                'The REAL journey for all Little Ponies begins with broader adoption!'
            ]
        }
    ]

    return (
        <section className="w-full min-h-screen h-auto bg-bg md:px-10 px-4 py-20 relative" id="roadmap" ref={containerRef}>

            <img src="/roadmap/roadmap.webp" alt="Background" className="w-full absolute bottom-0 left-0 pointer-events-none" />

            <div className="w-full absolute bottom-0 left-0 overflow-hidden h-[20rem]">
                <motion.img initial={{ x: -200, opacity: 0 }} animate={containerView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1.5 }} src="/roadmap/left.webp" alt="Pony Left" className="absolute -left-32 bottom-0 h-[20rem] " />
                <motion.img initial={{ x: 200, opacity: 0 }} animate={containerView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1.5 }} src="/roadmap/right.webp" alt="Pony Left" className="absolute -right-32 bottom-0 h-[20rem] " />
            </div>




            <div className="max-w-[1500px] w-full mx-auto mt-24">
                <div className="relative w-fit h-fit md:text-8xl sm:text-5xl text-4xl mx-auto">
                    <img src="/sparkle.gif" alt="" className="absolute w-24 z-10 -top-10 -left-10" />
                    <img src="/sparkle.gif" alt="" className="absolute w-24 z-10 -bottom-5 -right-10" />

                    <img src="/roadmap/roadbow.webp" alt="Rainbow" className="absolute sm:-right-32 -right-24 mx-auto bottom-10 sm:block hidden" />

                    <h1 className="font-modak text-cream font-outline-2 z-[5] relative" ref={textRef}>{word}</h1>
                    <motion.div initial="hidden" animate={textView ? "show" : ""} variants={container} className="">
                        <motion.h1 variants={rainbowVariant} className="font-modak text-[#FEB958] font-outline-2 absolute z-[4] sm:-top-[7px] -top-[4px] tracking-[-.5px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                        <motion.h1 variants={rainbowVariant} className="font-modak text-[#FD6E50] font-outline-2 absolute z-[3] sm:-top-[14px] -top-[8px] tracking-[-1px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                        <motion.h1 variants={rainbowVariant} className="font-modak text-[#E15A8C] font-outline-2 absolute z-[2] sm:-top-[21px] -top-[12px] tracking-[-1.5px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                        <motion.h1 variants={rainbowVariant} className="font-modak text-[#BB52F6] font-outline-2 absolute z-[1] sm:-top-[28px] -top-[16px] tracking-[-2px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                    </motion.div>
                </div>

                <div className="z-10 relative flex mx-auto 2xl:max-w-[80rem] lg:max-w-[53rem] sm:max-w-[25rem] max-w-[19rem] w-full mt-10">
                    <Slider {...sliderSettings} className="2xl:max-w-[80rem] lg:max-w-[53rem] sm:max-w-[25rem] max-w-[19rem] w-full" ref={sliderRef}>
                        {roadmapList.map((items, i) => {
                            return (
                                <RoadBox key={i} label={items.label} contents={items.contents} />
                            )
                        })}
                    </Slider>
                </div>

                <div className="relative z-10 mx-auto w-fit items-center gap-x-7 mt-10 2xl:hidden flex">

                    <button className="" onClick={() => sliderRef?.current?.slickPrev()}>
                        <img src="/roadmap/buttonLeft.webp" alt="buttonLeft" loading="lazy" className="" />
                    </button>

                    <button className="" onClick={() => sliderRef?.current?.slickNext()}>
                        <img src="/roadmap/buttonRight.webp" alt="buttonRight" loading="lazy" className="" />
                    </button>

                </div>
            </div>
        </section>
    );
}

export default HeroRoadmap;