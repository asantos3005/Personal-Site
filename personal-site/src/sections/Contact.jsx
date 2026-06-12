import { motion } from "motion/react";
import ProjectLinkButton from "../components/ProjectLinkButton";
import { contactButtonsAnimation } from "../animations/contactPageAnimations";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[80svh] scroll-mt-14 bg-indigo-950 px-4 py-16 font-mono sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex min-h-[calc(80svh-8rem)] w-full max-w-7xl flex-col">
        <h1 className="mb-10 text-center md:text-left">Contact Me</h1>

        <div className="flex flex-1 flex-col text-center">
          <address className="not-italic text-xl text-olive-50 break-all sm:text-2xl md:text-3xl lg:text-4xl">
            <a href="mailto:ajrsantos77@gmail.com">
              ajrsantos77@gmail.com
            </a>
          </address>

          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <ProjectLinkButton link="/Andrew-Santos-Software-Resume.pdf" text="My Resume"/>
            <ProjectLinkButton link="https://github.com/asantos3005" text="Github"/>
            <ProjectLinkButton link="https://www.linkedin.com/in/andrew-santos-a23261284/" text="LinkedIn"/>
          </div>
        </div>
      </div>
    </section>
  );
}