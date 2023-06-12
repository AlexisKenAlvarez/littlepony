import { motion } from "framer-motion";
import Appear from "../../anim/Appear";
import Nav from "../../components/Nav";

const HeroIndex = () => {

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
        <section className="w-full h-screen bg-white flex font-poppins relative overflow-hidden px-10">

            <Nav />


            <img src="/circle2.webp" alt="Circle" className="absolute bottom-0 right-5 md:w-[20rem] w-[10rem] translate-y-1/2" />
            <img src="/rainbow.webp" alt="Rainbow" className="absolute top-0 left-0 z-10 md:w-auto w-20" />

            <div className="absolute bottom-0 left-0 w-[50%] h-full lg:flex hidden">
                <motion.img initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} src="/Unisplit/1.webp" alt="1" className="" />
                <motion.img initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} src="/Unisplit/2.webp" alt="2" className="" />
                <motion.img initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} src="/Unisplit/3.webp" alt="3" className="" />
            </div>

            <div className="max-w-[1500px] w-full h-full flex mx-auto relative z-10">
                <div className="w-full lg:block hidden"></div>
                <div className="w-full flex  flex-col justify-center">
                    <div className="relative w-fit h-fit mx-auto lg:mx-0 md:text-8xl sm:text-5xl text-4xl">
                        <img src="/sparkle.gif" alt="" className="absolute w-24 z-10 -top-10 -left-10" />
                        <img src="/sparkle.gif" alt="" className="absolute w-24 z-10 -bottom-5 -right-10" />

                        <h1 className="font-modak text-cream md:text-8xl font-outline-2 z-[5] relative">My Little Pony</h1>
                        <motion.div initial="hidden" animate="show" variants={container} className="">
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#FEB958] font-outline-2 absolute z-[4] sm:-top-[7px] -top-[4px] tracking-[-.5px] mx-auto left-0 right-0 w-fit">My Little Pony</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#FD6E50] font-outline-2 absolute z-[3] sm:-top-[14px] -top-[8px] tracking-[-1px] mx-auto left-0 right-0 w-fit">My Little Pony</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#E15A8C] font-outline-2 absolute z-[2] sm:-top-[21px] -top-[12px] tracking-[-1.5px] mx-auto left-0 right-0 w-fit">My Little Pony</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#BB52F6] font-outline-2 absolute z-[1] sm:-top-[28px] -top-[16px] tracking-[-2px] mx-auto left-0 right-0 w-fit">My Little Pony</motion.h1>
                        </motion.div>

                    </div>

                    <div className="flex flex-col gap-y-4 mt-4 text-center lg:text-left md:text-base text-sm">
                        <Appear>
                            <p className="">
                                <span className="text-2xl font-semibold">Welcome</span> to the magical world of My Little Pony on the Ethereum blockchain, where <span className="font-semibold text-myPink italic">$FRIENDSHIP</span> takes us on a thrilling journey on Equestria, from Ponyville to moonshot Canterlot!
                            </p>
                        </Appear>

                        <Appear delay={0.2}>
                            <p className=""><span className="text-2xl font-semibold">Join</span> our <span className="font-semibold text-myPink italic">$FRIENDSHIP</span> magic circle with Twilight Sparkle, Pinkie Pie, Rainbow Dash, Rarity, Fluttershy, & Applejack as we gallop together on the Ethereum blockchain towards new adventures & sonic-rain booms, spreading joy and friendship along the way!</p>
                        </Appear>
                    </div>

                    <Appear delay={0.4}>
                        <div className="flex mt-10 mx-auto w-fit z-10 lg:mx-0">
                            <button className="max-w-[10rem] w-full py-3 rounded-md bg-gradient-to-br from-myPink to-myIndigo text-white font-poppins font-semibold text-sm mt-8 self-end flex-shrink-0">
                                <a href="" className="">
                                    BUY TOKEN
                                </a>
                            </button>
                            <img src="/cute.webp" alt="Cute" className="sm:w-28 w-20 sm:-ml-7 -ml-2" />
                        </div>
                    </Appear>


                </div>
            </div>

        </section>
    );
}

export default HeroIndex;