import { useEffect, useState } from "react"
import ProjectContainer from "../components/ProjectContainer"

export default function Projects(){
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch("/api/projects")
        .then((data) => data.json())
      .then((data) => {
        setProjects(data);
      });
    }, []);
    

    return(
        <section className="h-screen bg-indigo-950 px-8">
            <h1 className="">Projects and Experiences</h1>
            <form action="">
                <input className="bg-olive-50 rounded-lg min-h-[50px] min-w-[70vw]" type="text" name="search" placeholder="Search by name or keyword" id="" />
            </form>

            {/* Container for all the projects */}
            {projects.map((project) => (
                <ProjectContainer
                    key={project.id}
                    projectName={project.title}
                    projectDescription={project.longDescription}
                    githubLink={project.githubUrl}
                    demoLink={project.demoUrl}
                />
                ))}
        </section>
    )
}