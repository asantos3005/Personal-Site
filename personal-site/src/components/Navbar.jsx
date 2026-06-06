

export default function Navbar(){
    return(
       <nav className="bg-indigo-950 h-[50px] font-mono sticky z-100 top-0">
            <ul className="flex gap-10 px-8 justify-end items-center h-full">
                <li className="text-olive-50">
                    <a href="#about">About</a>
                </li>
                <li className="text-olive-50">
                    <a href="#skills">Skills</a>
                </li>
                <li className="text-olive-50">
                    Blog
                </li>
                <li className="text-olive-50">
                    <a href="#projects">Projects</a>
                </li>
                <li className="text-olive-50">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
       </nav> 
    )
}