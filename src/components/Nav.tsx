import { FaHome } from 'react-icons/fa'
import { TiInfoLarge } from 'react-icons/ti'
import { GiToken } from 'react-icons/gi'
import { RiRoadMapFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TbArrowBigDownLineFilled } from 'react-icons/tb'

const Nav = () => {

    const [pc, setPc] = useState<boolean>()

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setPc(true)
            } else {
                setPc(false)
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial screen size

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the listener
        };
    }, []);

    useEffect(() => {
        console.log(pc)
    }, [pc])

    const navlist = [
        {
            label: 'Home',
            slug: '#home',
            icon: <FaHome />
        },
        {
            label: 'About',
            slug: '#about',
            icon: <TiInfoLarge />
        },
        {
            label: 'Tokenomics',
            slug: '#tokenomics',
            icon: <GiToken />
        },
        {
            label: 'Roadmap',
            slug: '#roadmap',
            icon: <RiRoadMapFill />
        },
    ]

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () => {
        const position = window.scrollY;

        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {

        if (scrollPosition >= 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }

    }, [scrollPosition])

    const handleTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <button
                className={`w-12 h-12 bg-white/80 fixed bottom-5 right-5 z-30 rounded-lg flex items-center justify-center transition-all ease-in-out duration-[0.4s] ${scrolled ? 'pointer-events-auto rotate-180 opacity-1' : 'rotate-0 pointer-events-none opacity-0'}`}
                onClick={handleTop}>
                <TbArrowBigDownLineFilled />
            </button>

            <nav className="font-poppins z-20 fixed top-10 px-5 mx-auto left-0 right-0 w-full">

                <div className="hidden sm:block lg:hidden pointer-events-none">
                    <motion.div initial={{ translateX: "-20%" }} animate={{ translateX: "110%" }} transition={{ duration: 60, ease: "linear", repeat: Infinity }} className="w-full absolute h-auto left-0 z-10 top-6">
                        <img src="/clouds/sleeping.webp" alt="Cloud" className="w-24 absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-20%" }} animate={{ translateX: "110%" }} transition={{ duration: 65, ease: "linear", repeat: Infinity, delay: 2 }} className="w-full absolute h-auto left-0 z-10">
                        <img loading='lazy' src="/clouds/cloud1.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-20%" }} animate={{ translateX: "120%" }} transition={{ duration: 50, ease: "linear", repeat: Infinity, delay: 3 }} className="w-full absolute h-auto top-20 left-0 z-10 ">
                        <img loading='lazy' src="/clouds/cloud2.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-20%" }} animate={{ translateX: "120%" }} transition={{ duration: 55, ease: "linear", repeat: Infinity, delay: 5 }} className="w-full absolute h-auto top-12 left-0 z-10 ">
                        <img loading='lazy' src="/clouds/cloud3.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>


                    <motion.div initial={{ translateX: "-20%" }} animate={{ translateX: "110%" }} transition={{ duration: 60, ease: "linear", repeat: Infinity, delay: 12 }} className="w-full absolute h-auto left-0 z-10 top-10">
                        <img loading='lazy' src="/clouds/cloud1.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-20%" }} animate={{ translateX: "120%" }} transition={{ duration: 50, ease: "linear", repeat: Infinity, delay: 15 }} className="w-full absolute h-auto top-0 left-0 z-10 ">
                        <img loading='lazy' src="/clouds/cloud2.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-20%" }} animate={{ translateX: "120%" }} transition={{ duration: 55, ease: "linear", repeat: Infinity, delay: 9 }} className="w-full absolute h-auto top-16 left-0 z-10 ">
                        <img loading='lazy' src="/clouds/cloud3.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>
                </div>

                <div className="hidden lg:block pointer-events-none">
                    <motion.div initial={{ translateX: "-10%" }} animate={{ translateX: "110%" }} transition={{ duration: 60, ease: "linear", repeat: Infinity }} className="w-full absolute h-auto left-0 z-10 top-6">
                        <img loading='lazy' src="/clouds/sleeping.webp" alt="Cloud" className="w- 24 absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-10%" }} animate={{ translateX: "110%" }} transition={{ duration: 65, ease: "linear", repeat: Infinity, delay: 2 }} className="w-full absolute h-auto left-0 z-10">
                        <img loading='lazy' src="/clouds/cloud1.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-10%" }} animate={{ translateX: "120%" }} transition={{ duration: 50, ease: "linear", repeat: Infinity, delay: 3 }} className="w-full absolute h-auto top-20 left-0 z-10 ">
                        <img loading='lazy' src="/clouds/cloud2.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-10%" }} animate={{ translateX: "120%" }} transition={{ duration: 55, ease: "linear", repeat: Infinity, delay: 5 }} className="w-full absolute h-auto top-12 left-0 z-10 ">
                        <img loading='lazy' src="/clouds/cloud3.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>


                    <motion.div initial={{ translateX: "-10%" }} animate={{ translateX: "110%" }} transition={{ duration: 60, ease: "linear", repeat: Infinity, delay: 12 }} className="w-full absolute h-auto left-0 z-10 top-10">
                        <img loading='lazy' src="/clouds/cloud1.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-10%" }} animate={{ translateX: "120%" }} transition={{ duration: 50, ease: "linear", repeat: Infinity, delay: 15 }} className="w-full absolute h-auto top-0 left-0 z-10 ">
                        <img loading='lazy' src="/clouds/cloud2.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>

                    <motion.div initial={{ translateX: "-10%" }} animate={{ translateX: "120%" }} transition={{ duration: 55, ease: "linear", repeat: Infinity, delay: 9 }} className="w-full absolute h-auto top-16 left-0 z-10 ">
                        <img loading='lazy' src="/clouds/cloud3.webp" alt="Cloud" className="w-32  absolute" />
                    </motion.div>
                </div>

                <div className={`transition-all ease-in-out duration-[0.5s] ${scrolled ? 'opacity-0 translate-x-20 pointer-events-none' : 'translate-x-0 opacity-1 pointer-events-auto '}`}>
                    <ul className={`flex w-fit lg:ml-auto xl:gap-x-24 lg:gap-x-16 gap-x-10 lg:mr-20 mx-auto z-20 relative transition-all ease-in-out duration-[0.5s] lg:flex-row`}>

                        {navlist.map((items, index) => {
                            return (
                                <li className="relative group z-20" key={index} onClick={() => window.location.replace(`${items.slug}`)}>
                                    <button className="lg:flex hidden items-center gap-x-[3px]">
                                        {items.icon}
                                        {items.label}
                                    </button>

                                    <div className="lg:block hidden absolute h-[4px] left-0 right-0 mx-auto -bottom-[5px] rounded-md bg-gradient-to-r from-myPink via-[#FEB958] to-[#FD6E50] w-0 group-hover:w-full transition-width ease-in-out duration-300"></div>

                                    <div className="lg:hidden block text-lg">
                                        {items.icon}
                                    </div>
                                </li>
                            )
                        })}

                        {/* LOGO HERE */}
                        {/* <div className="w-20 h-20 lg:relative absolute mx-auto left-0 right-0 top-10 lg:top-0 sm:block hidden">
                            <img src="/" alt="" className="w-full h-full object-cover" />
                        </div> */}
                    </ul>


                </div>


            </nav>
        </>

    );
}

export default Nav;