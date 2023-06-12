import { FaHome } from 'react-icons/fa'
import { TiInfoLarge } from 'react-icons/ti'
import { GiToken } from 'react-icons/gi'
import { RiRoadMapFill } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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
            slug: '',
            icon: <FaHome />
        },
        {
            label: 'About',
            slug: '',
            icon: <TiInfoLarge />
        },
        {
            label: 'Tokenomics',
            slug: '',
            icon: <GiToken />
        },
        {
            label: 'Roadmap',
            slug: '',
            icon: <RiRoadMapFill />
        },
    ]
    return (
        <nav className="font-poppins z-20 absolute top-10 px-5 mx-auto left-0 right-0 w-full">

            <div className="hidden sm:block lg:hidden">
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

            <div className="hidden lg:block">
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


            <ul className="flex w-fit lg:ml-auto xl:gap-x-24 lg:gap-x-16 gap-x-10 lg:mr-20 mx-auto z-20 relative">
                {navlist.map((items, index) => {
                    return (
                        <li className="relative group" key={index}>
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
            </ul>

        </nav>
    );
}

export default Nav;