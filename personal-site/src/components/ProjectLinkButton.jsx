import { motion } from "motion/react";

export default function ProjectLinkButton(props){
    if (props.text == "My Resume"){
        return(
        <motion.a 
            href={props.link}
            className="rounded-md bg-olive-50 px-4 py-2 text-center text-sm"
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
        className="rounded-md bg-olive-50 px-4 py-2 text-center text-sm"
        initial={{y:0}}
        whileHover={{y: 3}}>
            {props.text}
        </motion.a>
    )
    }
    
}
