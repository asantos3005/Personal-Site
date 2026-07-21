import { motion } from "motion/react";
import { forwardRef } from "react";

const ProjectLinkButton = forwardRef(function ProjectLinkButton(
  { icon, link, text, ...props },
  ref
) {
    if (text == "My Resume"){
        return(
        <motion.a 
            ref={ref}
            href={link}
            className="rounded-md bg-olive-50 px-4 py-2 text-center text-sm"
            target="_blank"
            rel="noopener noreferrer"
            initial={{y:0}}
            whileHover={{y: 3}}
            {...props}>
                {text}
        </motion.a>
        )
    }
    else{
        return (
        <motion.a 
        ref={ref}
        href={link}
        className="rounded-md bg-olive-50 px-4 py-2 text-center text-sm"
        initial={{y:0}}
        whileHover={{y: 3}}
        {...props}>
            {icon && <span className="mr-2 inline-flex align-middle">{icon}</span>}
            {text}
        </motion.a>
    )
    }
    
});

export default ProjectLinkButton;
