import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroTokenomics = () => {

    const settings = { triggerOnce: false, threshold: 0.5, rootMargin: `${window.innerHeight}px 0px  0px 0px` }


    const [textRef, textView] = useInView(settings)
    const [contentRef, contentView] = useInView(settings)
    const [imageRef, imageView] = useInView(settings)


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

    const tokenList = [
        {
            value: <>
                <p className="font-semibold">0 TAX</p>
                <p className="">My Little Pony doesn’t believe in taxing their <span className="font-semibold text-myPink italic">$FRIENDSHIP</span> with anyone!</p>
            </>,
            image: 'sleep'
        },
        {
            value: <>
                <p className="font-semibold">1,000,000,001</p>
                <p className=""><span className="font-semibold text-myPink italic">$FRIENDSHIP</span> tokens for all Little Ponies!</p>
            </>,
            image: 'sing'
        },
        {
            value: <>
                <p className="">Liquidity Locked PreLaunch & Contract will be Renounced! Pony SAFU!</p>
            </>,
            image: 'space'
        },

    ]

    const word = "TOKENOMICS"

    return (
        <section className="w-full min-h-screen h-auto bg-bg px-10 py-20 overflow-x-hidden">
            <div className="max-w-[1500px] w-full h-full mx-auto mt-[10rem] flex items-center gap-x-8 lg:flex-row flex-col-reverse">

                <div className="w-full" ref={imageRef}>
                    <motion.img initial={{ x: -500, opacity: 0, rotate: -180 }} animate={imageView ? { x: 0, opacity: 1, rotate: 0 } : {}} transition={{ duration: 1.5 }} src="/tokenomics/tokens.webp" alt="Tokens" className="md:w-auto w-[13rem] mx-auto mt-10 md:mt-0" />
                </div>

                <div className="w-full">
                    <div className="relative w-fit h-fit md:text-8xl sm:text-5xl text-4xl mx-auto lg:mx-0">
                        <img src="/sparkle.gif" alt="" className="absolute w-24 z-10 -top-10 -left-10" />
                        <img src="/sparkle.gif" alt="" className="absolute w-24 z-10 -bottom-5 -right-10" />

                        <img src="/tokenomics/rainbow.webp" alt="Rainbow" className="absolute left-0 right-0 mx-auto bottom-10" />

                        <h1 className="font-modak text-cream font-outline-2 z-[5] relative" ref={textRef}>{word}</h1>
                        <motion.div initial="hidden" animate={textView ? "show" : ""} variants={container} className="">
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#FEB958] font-outline-2 absolute z-[4] sm:-top-[7px] -top-[4px] tracking-[-.5px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#FD6E50] font-outline-2 absolute z-[3] sm:-top-[14px] -top-[8px] tracking-[-1px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#E15A8C] font-outline-2 absolute z-[2] sm:-top-[21px] -top-[12px] tracking-[-1.5px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                            <motion.h1 variants={rainbowVariant} className="font-modak text-[#BB52F6] font-outline-2 absolute z-[1] sm:-top-[28px] -top-[16px] tracking-[-2px] mx-auto left-0 right-0 w-fit">{word}</motion.h1>
                        </motion.div>
                    </div>

                    <div className="w-fit flex flex-col gap-y-5 mx-auto lg:mx-0 md:mt-5 mt-3" ref={contentRef}>
                        {tokenList.map((token, i) => {
                            return (
                                <motion.div initial={{ x: 200, opacity: 0 }} animate={contentView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.2 + (0.1 * i) }} className="lg:w-[36rem] sm:w-[28rem] w-[20rem] bg-gradient-to-r to-white/50 from-tokenPink h-[7rem] border-l-4 border-myPink flex items-center" key={i}>
                                    <img src={`/tokenomics/${token.image}.webp`} alt={`Pony${i}`} className={` lg:w-auto sm:w-20 w-14 ml-5 ${token.image === 'space' ? 'sm:-mb-10' : ''}`} loading="lazy" />

                                    <div className="w-full sm:px-5 px-3 lg:text-base sm:text-sm text-[12px]">
                                        {token.value}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroTokenomics;