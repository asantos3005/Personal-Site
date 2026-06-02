import ProjectContainer from "../components/ProjectContainer"

export default function Projects(){
    return(
        <section className="h-screen bg-indigo-950 px-8">
            <h1 className="">Projects and Experiences</h1>
            <form action="">
                <input className="bg-olive-50 rounded-lg min-h-[50px] min-w-[70vw]" type="text" name="search" placeholder="Search by name or keyword" id="" />
            </form>

            {/* Container for all the projects */}
            <div className="grid grid-cols-2 gap-5 justify-center items-center mt-5">
                <ProjectContainer 
                projectName="Filmary" 
                projectDescription="web app built with React that allows users to explore detailed information about movies and the people behind them, 
                including actors, directors, and other principals. 
                You can search by movie title, apply filters, and view specific movie or individual profiles."
                demoLink="abc.com"/>
                <ProjectContainer 
                projectName="Filmary" 
                projectDescription="web app built with React that allows users to explore detailed information about movies and the people behind them, 
                including actors, directors, and other principals. 
                You can search by movie title, apply filters, and view specific movie or individual profiles."
                demoLink="abc.com"/>
                <ProjectContainer 
                projectName="Filmary" 
                projectDescription="web app built with React that allows users to explore detailed information about movies and the people behind them, 
                including actors, directors, and other principals. 
                You can search by movie title, apply filters, and view specific movie or individual profiles."
                demoLink="abc.com"/>
                <ProjectContainer 
                projectName="Filmary" 
                projectDescription="web app built with React that allows users to explore detailed information about movies and the people behind them, 
                including actors, directors, and other principals. 
                You can search by movie title, apply filters, and view specific movie or individual profiles."
                demoLink="abc.com"/>

            </div>
        </section>
    )
}