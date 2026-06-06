import { motion } from "motion/react";

export default function Navbar(){
    return(
       <nav className="bg-indigo-950 h-[50px] font-mono sticky z-100 top-0">
            <ul className="flex gap-10 px-8 justify-end items-center h-full">
                <motion.li className="text-olive-50"
                whileHover={{
                        scale: 1.1,
                        
                    }}
                    transition={{ duration: 0.2 }}>
                    <a href="#about">About</a>
                </motion.li>
                <motion.li className="text-olive-50"
                whileHover={{
                        scale: 1.1,
                        
                    }}
                    transition={{ duration: 0.2 }}>
                    <a href="#skills">Skills</a>
                </motion.li>
                <motion.li className="text-olive-50"
                whileHover={{
                        scale: 1.1,
                        
                    }}
                    transition={{ duration: 0.2 }}>
                    <a href="#projects">Projects</a>
                </motion.li>
                <motion.li className="text-olive-50"
                whileHover={{
                        scale: 1.1,
                        
                    }}
                    transition={{ duration: 0.2 }}>
                    <a href="#">Blog</a>
                </motion.li>
                <motion.li className="text-olive-50"
                whileHover={{
                        scale: 1.1,
                        
                    }}
                    transition={{ duration: 0.2 }}>
                    <a href="#contact">Contact</a>
                </motion.li>
            </ul>
       </nav> 
    )
}