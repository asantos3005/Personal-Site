import profile from '../assets/profile.jpeg' 

export default function About(){
    return(
        <section className="h-screen bg-indigo-950 flex items-center px-8" id="about">
            <div className='pr-[15px]'>
                <h1>About Me</h1>
                <p className='body-text mb-[20px]'>
                    I’m Andrew, a computer science graduate based in Brisbane with an interest in building practical, thoughtful software products.
                </p>
                
                <p className='body-text mb-[20px]'>
                    During my studies, I worked across web development, mobile apps, cloud systems, networking, blockchain and software architecture. 
                    I enjoy projects that sit at the intersection of technology, product thinking, and real human problems.
                </p>

                <p className='body-text'>
                    I’m especially interested in user-facing software, startups, learning tools, community-focused technology, and systems that make everyday life easier or more meaningful. 
                </p>
            </div>
            <img src={profile} alt="profile image" className='max-w-[500px] max-h-[500px] rounded-lg '/>
        </section>
    )
}