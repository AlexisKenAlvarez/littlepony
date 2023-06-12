import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full lg:h-20 h-auto bg-black/90 font-poppins p-4 px-20 overflow-hidden">
            <div className="max-w-[1500px] w-full mx-auto h-full">
                <div className="w-full relative z-10 text-white flex justify-between h-full md:flex-row flex-col items-center text-center pb-3 lg:pb-0 gap-y-4">
                    <div className="font-orbit">
                        <motion.h1 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-sm">MY LITTLE PONY © 2023. ALL RIGHTS RESERVED</motion.h1>
                    </div>
                    <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='flex text-xl gap-x-6 items-center'>
                        <FaFacebookF className="cursor-pointer hover:scale-[1.1]" />
                        <SiTwitter className="cursor-pointer" />
                        <FaTelegramPlane className="cursor-pointer" />
                    </motion.div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;