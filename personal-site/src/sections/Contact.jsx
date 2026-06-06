
export default function Contact(){

    return(
        <section className="h-screen bg-indigo-950 font-mono px-8 scroll-mt-[50px]" id="contact">
            <h1 className="mb-10">Contact Me</h1>
            <address className="block mx-auto w-fit text-4xl text-olive-50">ajrsantos77@gmail.com</address>

            <div className="flex justify-center gap-5 mt-3">
                <a href="resume placeholder" className="bg-olive-50 p-5 rounded-md">My Resume</a>
                <a href="https://github.com/asantos3005" className="bg-olive-50 p-5 rounded-md">GitHub</a>
                <a href="https://www.linkedin.com/in/andrew-santos-a23261284/" className="bg-olive-50 p-5 rounded-md">Linkedin</a>
            </div>
            
        </section>
    )
}