import { useEffect, useState } from "react"
import ProjectContainer from "../components/ProjectContainer"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export default function Projects(){
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadProjects() {
            try { 
                const response = await fetch(`${API_BASE_URL}/api/projects`); 
                if (!response.ok) 
                    { 
                        throw new Error(`Request failed with status ${response.status}`); 
                    } 
                const data = await response.json(); 
                setProjects(data); 
            } 
            catch (error) { 
                console.error("Failed to load projects:", error); 
                setError("Could not load projects."); 
            } 
            finally { 
                setLoading(false); 
            } 
        }
        loadProjects();
    }, []);
    

    return(
        <section className="h-screen bg-indigo-950 px-8 scroll-mt-[50px]" id="projects" >
            <h1 className="">Projects and Experiences</h1>
            <form action="">
                <input className="bg-olive-50 rounded-lg min-h-[50px] min-w-[70vw]" type="text" name="search" placeholder="Search by name or keyword" id="" />
            </form>

            <div className="grid grid-cols-2 gap-5 justify-center items-center mt-5 place-items-center">
                {/* Container for all the projects */}
                {loading == false && projects.map((project) => (
                    <ProjectContainer
                        key={project.id}
                        projectName={project.title}
                        projectDescription={project.longDescription}
                        skills={project.skills}
                        githubLink={project.githubUrl}
                        demoLink={project.demoUrl}
                    />
                    ))}
            </div>
            

            {loading && 
            <div className="mt-5 text-olive-50 font-mono">
                <p>Projects Loading...</p>
            </div>
            }

            {error && 
            <div className="mt-5 text-olive-50 font-mono">
                <p>{error}</p>
            </div>
            }
        </section>
    )
}