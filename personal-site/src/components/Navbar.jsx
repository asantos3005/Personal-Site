

export default function Navbar(){
    return(
       <nav className="bg-indigo-950 h-[50px] font-mono sticky z-100 top-0">
            <ul className="flex gap-10 px-8 justify-end items-center h-full">
                <li className="text-olive-50">
                    About
                </li>
                <li className="text-olive-50">
                    Skills
                </li>
                <li className="text-olive-50">
                    Blog
                </li>
                <li className="text-olive-50">
                    Projects
                </li>
                <li className="text-olive-50">
                    Contact
                </li>
            </ul>
       </nav> 
    )
}