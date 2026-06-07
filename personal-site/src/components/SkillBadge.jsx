import { motion } from "motion/react";
import { skillBadgeAnimation, skillBadgeTransition } from "../animations/skillBadgeAnimations";


export default function SkillBadge(props){
    if (props.size == 'small'){
        return(
            <motion.div
                className="flex min-h-[35px] min-w-[150px] items-center justify-center rounded-md bg-violet-600"
                variants={skillBadgeAnimation}
                initial="starting"
                whileHover="hover"
                transition={skillBadgeTransition}
                >
                <p className="small-badge-text">{props.skill}</p>
             </motion.div>
        )
    }
    else return(
       <motion.div
            className="flex min-h-[50px] min-w-[200px] items-center justify-center rounded-md bg-violet-600"
            variants={skillBadgeAnimation}
            initial="starting"
            whileHover="hover"
            transition={skillBadgeTransition}
            >
            <p className="big-badge-text">{props.skill}</p>
        </motion.div>
    )
}