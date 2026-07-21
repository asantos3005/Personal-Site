import SkillBadge from "./SkillBadge";
import ProjectLinkButton from "./ProjectLinkButton";
import { motion } from "motion/react";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectContainer(props) {
  return (
    <motion.div className="rounded-md bg-blue-950 flex flex-col justify-center items-center min-h-[250px] max-w-[700px] gap-3 pb-5"
    initial={{y:0}}
    whileHover={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.85)", y: -5}}>
        <h3>{props.projectName}</h3>

        <p className="body-text px-3 line-clamp-3">{props.projectDescription}</p>

        

        <div className="flex flex-wrap gap-2 justify-center">
          {props.skills?.map((skill) => (
            <SkillBadge key={skill.slug} skill={skill.name} size='small' />
          ))}
        </div>

        <div className="flex justify-evenly w-full">
            <ProjectLinkButton link={props.githubLink} text="GitHub"/>

            {props.demoLink && (
            <ProjectLinkButton link={props.demoLink} text="Demo"/>
            )}

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="bg-olive-50 font-mono text-indigo-950 hover:bg-olive-100"
                  type="button"
                >
                  <Maximize2 />
                  More Details
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-blue-950 min-w-[50svw]">
                <DialogHeader>
                  <DialogTitle>{props.projectName}</DialogTitle>
                  <DialogDescription>{props.projectDescription}
                    <div className="flex flex-wrap gap-2 justify-center mt-2">

                      {props.skills?.map((skill) => (
                        <SkillBadge key={skill.slug} skill={skill.name} size='small' />
                      ))}
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-evenly w-full">
                    <ProjectLinkButton link={props.githubLink} text="GitHub"/>
                    {props.demoLink && (
                    <ProjectLinkButton link={props.demoLink} text="Demo"/>
                    )}
                </div>
              </DialogContent>
            </Dialog>

        </div>

        
    </motion.div>
  );
}
