import { motion } from "framer-motion";

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
        <section className="w-full h-screen bg-white flex font-poppins relative">
            <div className="absolute bottom-0 left-0 w-[50%] h-full flex overflow-hidden">
                <motion.img initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} src="/Unisplit/1.webp" alt="1" className="" />
                <motion.img initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} src="/Unisplit/2.webp" alt="2" className="" />
                <motion.img initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} src="/Unisplit/3.webp" alt="3" className="" />
            </div>

            <div className="max-w-[1500px] w-full h-full flex mx-auto relative z-10">
                <div className="w-full"></div>
                <div className="w-full flex  flex-col justify-center">
                    <div className="relative w-fit h-fit">
                        <h1 className="font-modak text-cream text-8xl font-outline-2 z-[5] relative">My Little Pony</h1>
                        <motion.div initial="hidden" animate="show" variants={container} className="">
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#FEB958] text-8xl font-outline-2 absolute z-[4] -top-[7px] tracking-[-.5px] mx-auto left-0 right-0 w-fit">My Little Pony</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#FD6E50] text-8xl font-outline-2 absolute z-[3] -top-[14px] tracking-[-1px] mx-auto left-0 right-0 w-fit">My Little Pony</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#E15A8C] text-8xl font-outline-2 absolute z-[2] -top-[21px] tracking-[-1.5px] mx-auto left-0 right-0 w-fit">My Little Pony</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#BB52F6] text-8xl font-outline-2 absolute z-[1] -top-[28px] tracking-[-2px] mx-auto left-0 right-0 w-fit">My Little Pony</motion.h1>
                        </motion.div>

                    </div>

                    <div className="flex flex-col gap-y-4 mt-4">
                        <p className="">
                            <span className="text-2xl font-semibold">Welcome</span> to the magical world of My Little Pony on the Ethereum blockchain, where <span className="font-semibold text-myPink">$FRIENDSHIP</span> takes us on a thrilling journey on Equestria, from Ponyville to moonshot Canterlot!
                        </p>

                        <p className=""><span className="text-2xl font-semibold">Join</span> our <span className="font-semibold text-myPink">$FRIENDSHIP</span> magic circle with Twilight Sparkle, Pinkie Pie, Rainbow Dash, Rarity, Fluttershy, & Applejack as we gallop together on the Ethereum blockchain towards new adventures & sonic-rain booms, spreading joy and friendship along the way!</p>
                    </div>

                    <div className="flex mt-10">
                        <button className="max-w-[10rem] w-full py-3 rounded-md bg-gradient-to-br from-myPink to-myIndigo text-white font-poppins font-semibold text-sm mt-8 self-end">
                            <a href="" className="">
                                BUY TOKEN
                            </a>
                        </button>
                        <img src="/cute.webp" alt="Cute" className="w-28 -ml-7" />
                    </div>

                </div>
            </div>

        </section>
    );
}

export default HeroIndex;