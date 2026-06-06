import { motion } from "motion/react";


export default function SkillBadge(props){
    return(
       <motion.div className="rounded-md bg-violet-600 flex justify-center items-center min-h-[50px] min-w-[200px]"
       whileHover={{ scale: 1.05, boxShadow: "0 0 5px 5px rgba(255, 255, 255, 0.78)"}}
       >
            <p className="badge-text">{props.skill}</p>
       </motion.div>
    )
}