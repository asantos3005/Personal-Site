import { motion } from "motion/react";
import { a } from "motion/react-client";

export default function ProjectLinkButton(props){

    return (
        <motion.a 
        href={props.link}
        className="min-w-[70px] min-h-[40px] bg-olive-50 font-mono flex justify-center items-center rounded-md "
        initial={{y:0}}
        whileHover={{y: 3}}>
            {props.text}
        </motion.a>
    )
}