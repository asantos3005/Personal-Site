import profile from "../assets/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[100svh] bg-indigo-950 flex px-4 py-10 sm:px-6 md:px-8 md: lg:px-10"
    >
        
    <div className="mx-auto 
        flex w-full 
        max-w-7xl
        flex-col items-center gap-10 
        md:flex-row md:justify-between lg:gap-16"
    >

        <div className="max-w-2xl text-center md:text-left">
            <h1>About Me</h1>

            <p className="body-text mb-5">
                I’m Andrew, a computer science graduate based in Brisbane with an
                interest in building practical, thoughtful software products.
            </p>

            <p className="body-text mb-5">
                During my studies, I worked across web development, mobile apps,
                cloud systems, networking, blockchain and software architecture. I
                enjoy projects that sit at the intersection of technology, product
                thinking, and real human problems.
            </p>

            <p className="body-text">
                I’m especially interested in user-facing software, startups,
                learning tools, community-focused technology, and systems that make
                everyday life easier or more meaningful.
            </p>
        </div>

        <img
          src={profile}
          alt="Profile image of Andrew"
          className="w-full max-w-xs rounded-lg object-cover sm:max-w-sm md:max-w-md lg:max-w-[450px]"
        />
      </div>
    </section>
  );
}