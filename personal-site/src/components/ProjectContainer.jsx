

export default function ProjectContainer(props){

    return(
       <div className="rounded-md bg-violet-600 flex flex-col justify-center items-center min-h-[250px] max-w-[700px]">
            <h3>{props.projectName}</h3>
            <p className="body-text px-3">{props.projectDescription}</p>

            <div className="flex justify-evenly w-100">
                <a href={props.githubLink} className="bg-indigo-500">Github</a>

                {/* Only render demo button if there is a demo link provided */}
                {props.demoLink && <a href={props.demoLink} className="bg-indigo-500">Demo</a>}

            </div>

       </div>
    )
}