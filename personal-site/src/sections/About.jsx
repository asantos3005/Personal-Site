import profile from '../assets/profile.jpeg' 

export default function About(){
    return(
        <section className="h-screen bg-indigo-950 flex items-center px-8 ">
            <div>
                <h1>About Me</h1>
                <p className='body-text'>
                    I’m Andrew, a computer science graduate based in Brisbane with an interest in building practical, thoughtful software products.
                    During my studies, I worked across web development, mobile apps, cloud systems, cybersecurity, blockchain, and software architecture. I enjoy projects that sit at the intersection of technology, product thinking, and real human problems.
                    I’m especially interested in user-facing software, startups, learning tools, community-focused technology, and systems that make everyday life easier or more meaningful. 
                    Outside of coding, I’m curious about psychology, culture, cities, entrepreneurship, and how technology can be used to improve people’s lives.
                </p>
            </div>
            <img src={profile} alt="profile image" className='max-w-[500px] max-h-[500px] '/>
        </section>
    )
}