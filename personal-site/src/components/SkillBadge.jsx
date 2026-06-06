import { motion } from "motion/react";


export default function SkillBadge(props){
    return(
       <motion.div
            className="flex min-h-[50px] min-w-[200px] items-center justify-center rounded-md bg-violet-600"
            initial={{
                boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 0.76)",
            }}
            whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px 5px rgba(255, 255, 255, 0.76)",
            }}
            transition={{ duration: 0.2 }}
            >
            <p className="badge-text">{props.skill}</p>
        </motion.div>
    )
}