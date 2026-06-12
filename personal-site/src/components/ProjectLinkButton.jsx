import { motion } from "motion/react";
import { a } from "motion/react-client";

export default function ProjectLinkButton(props){
    if (props.text == "My Resume"){
        return(
        <motion.a 
            href={props.link}
            className="rounded-md bg-olive-50 px-6 py-4 text-center"
            target="_blank"
            rel="noopener noreferrer"
            initial={{y:0}}
            whileHover={{y: 3}}>
                {props.text}
        </motion.a>
        )
    }
    else{
        return (
        <motion.a 
        href={props.link}
        className="rounded-md bg-olive-50 px-6 py-4 text-center"
        initial={{y:0}}
        whileHover={{y: 3}}>
            {props.text}
        </motion.a>
    )
    }
    
}