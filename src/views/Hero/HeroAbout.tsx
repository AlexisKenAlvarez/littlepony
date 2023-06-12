import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TextAnim from "../../anim/TextAnim";
import ImageAnim from "../../anim/ImageAnim";

const HeroAbout = () => {

    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.5 })
    const [textRef, textView] = useInView({ triggerOnce: false, threshold: 0.5 })


    const word = 'ABOUT'

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

    return (
        <section className="font-poppins w-full bg-bg h-auto py-20 pt-[10rem] relative flex items-center overflow-x-hidden px-10" id="about" ref={ref}>
            <img src="/circle2.webp" alt="Circle" className="absolute top-0 right-5 md:w-[20rem] w-[10rem] -translate-y-1/2" />

            <motion.img initial={{ x: 100, opacity: 0 }} animate={inView ? { x: 0, opacity: 0.05 } : {}} transition={{ duration: 1.5 }} src="/about.webp" alt="About" className="absolute right-0 bottom-0 h-full" />


            <div className="max-w-[1500px] mx-auto lg:text-left text-center w-full h-auto flex items-center gap-x-20 lg:flex-row flex-col">
                <div className="w-full relative">
                    <div className="relative w-fit h-fit  md:text-8xl sm:text-5xl text-4xl mx-auto lg:mx-0">
                        <img src="/sparkle.gif" alt="" className="absolute w-24 z-10 -top-10 -left-10" />
                        <img src="/sparkle.gif" alt="" className="absolute w-24 z-10 -bottom-5 -right-10" />

                        <img src="/about/star.webp" alt="Star" className="absolute right-0 translate-x-[75%] top-0 -translate-y-1/2" />

                        <h1 className="font-modak text-cream font-outline-2 z-[5] relative" ref={textRef}>{word}</h1>
                        <motion.div initial="hidden" animate={textView ? "show" : ""} variants={container} className="">
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#FEB958] font-outline-2 absolute z-[4] sm:-top-[7px] -top-[4px] tracking-[-.5px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#FD6E50] font-outline-2 absolute z-[3] sm:-top-[14px] -top-[8px] tracking-[-1px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#E15A8C] font-outline-2 absolute z-[2] sm:-top-[21px] -top-[12px] tracking-[-1.5px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#BB52F6] font-outline-2 absolute z-[1] sm:-top-[28px] -top-[16px] tracking-[-2px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-y-5 mt-5 relative z-10">

                        <TextAnim>
                            <p className="">
                                My Little Pony is a ERC-20 memecoin on the Ethereum blockchain with a moon mission ahead of it!  The <span className="font-semibold text-myPink italic">$FRIENDSHIP</span> magic circle of Little Pony Friends, are looking for more friends to join them on an adventure of a lifetime!
                            </p>
                        </TextAnim>

                        <TextAnim>
                            <p className="">
                                The journey to Canterlot in the sky starts now!  We have to leave Ponyville, dodge Sprout Cloverleaf, & aim for the moon!
                            </p>
                        </TextAnim>

                        <TextAnim>
                            <p className="">
                                In this whimsical realm, the My Little Pony Ethereum meme coin brings everyone closer than ever, forming a tight-knit community that	&#39;s fueled by laughter, fun, and the power of <span className="font-semibold text-myPink italic">$FRIENDSHIP</span>.
                            </p>
                        </TextAnim>

                        <TextAnim>
                            <p className="">
                                But be careful!
                            </p>
                        </TextAnim>

                        <TextAnim>
                            <p className="">
                                Jeets like Sprout Cloverleaf are everywhere, trying to spoil our magic <span className="font-semibold text-myPink italic">$FRIENDSHIP</span> fun, so we will have to navigate around them. But don	&#39;t worry, our magic <span className="font-semibold text-myPink italic">$FRIENDSHIP</span> will keep us safe from these villains!
                            </p>
                        </TextAnim>

                        <TextAnim>
                            <p className="relative z-10">

                                So gather 	&#39;round, fellow friends, & let the spirit of <span className="font-semibold text-myPink italic">$FRIENDSHIP</span> guide us & let us revel in the magic of connecting with magical kindred spirits who share the same passion for <span className="font-semibold text-myPink italic">$FRIENDSHIP</span> & financial fun!
                            </p>
                        </TextAnim>

                        <motion.img initial={{ x: -100, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 1.3 }} src="/about/cloud.webp" alt="Cloud" className="z-[1] lg:block hidden" />


                    </div>
                </div>

                <div className="w-full flex items-center justify-center">
                    <ImageAnim>

                        <img src="/about/ponies.webp" alt="Ponies" className="relative z-10 mx-auto block" />
                    </ImageAnim>
                </div>
            </div>


        </section>
    );
}

export default HeroAbout;