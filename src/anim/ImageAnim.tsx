import { motion } from 'framer-motion'
import { FunctionComponent } from 'react'
import { useInView } from 'react-intersection-observer'

interface animProp {
    children: JSX.Element
}


const ImageAnim: FunctionComponent<animProp> = (props) => {

    const settings = { triggerOnce: false, threshold: 0.5, rootMargin: `${window.innerHeight}px 0px  0px 0px` }

    const [ref, view] = useInView(settings)

    return (
        <div ref={ref} className="overflow-hidden">
            <motion.div initial={{ scale: 0, opacity: 0 }} animate={view ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.1, transformOrigin: "bottom" }} className="origin-bottom">
                {props.children}
            </motion.div>
        </div>
    )
}

export default ImageAnim