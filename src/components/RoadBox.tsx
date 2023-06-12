import { FunctionComponent } from "react";
import { motion } from "framer-motion";


interface roadmapList {
    label: string,
    contents: string[]
}


const RoadBox: FunctionComponent<roadmapList> = ({ label, contents }) => {


    return (
        <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1, opacity: [0, 1] }} transition={{duration: .5}} className="w-auto h-auto pb-10 m-2">
            <div className="sm:w-[24rem] w-[18rem] h-[27rem] bg-white/70 rounded-xl relative">
                <img src="/roadmap/cloud.webp" alt="" className="absolute -bottom-11" loading="lazy" />
                <img src="/roadmap/boxIcon.webp" alt="" className="absolute left-0 right-0 mx-auto bottom-0" loading="lazy" />

                <div className="w-full h-full p-5">
                    <h1 className="text-center font-main text-2xl">{label}</h1>

                    <ul className=" gap-y-6 flex flex-col mt-8">
                        {contents.map((items, i) => {
                            return (
                                <li className=" text-center font-poppins flex-col items-center justify-center sm:text-base text-[12px]" key={i}>
                                    {items}
                                    <div className="w-10 h-[4px] mt-[6px] bg-myPink rounded-xl flex-shrink-0 mx-auto"></div>
                                    <div className="w-4 h-[4px] mt-[6px] bg-myPink rounded-xl flex-shrink-0 mx-auto"></div>

                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </motion.div>

    );
}

export default RoadBox;