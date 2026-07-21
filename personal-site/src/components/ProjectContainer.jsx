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
  const visibleSkills = props.skills?.slice(0, 6) || [];
  const hiddenSkillCount = Math.max((props.skills?.length || 0) - visibleSkills.length, 0);
  
  return (
    <motion.div className="rounded-md bg-blue-950 flex flex-col justify-center items-center min-h-[320px] max-w-[700px] gap-3 pb-5"
    initial={{y:0}}
    whileHover={{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.85)", y: -5}}>
        <h3>{props.projectName}</h3>

        <p className="body-text px-3 line-clamp-3">{props.projectDescription}</p>

        

        <div className="flex flex-wrap gap-2 justify-center">
          {visibleSkills.map((skill) => (
            <SkillBadge key={skill.slug} skill={skill.name} size="small" />
          ))}

          {hiddenSkillCount > 0 && (
            <span className="small-badge-text rounded-md px-2 py-2 text-indigo-950 bg-violet-600">
              +{hiddenSkillCount}
            </span>
          )}
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
              <DialogContent className="bg-blue-950 text-white min-w-[50svw]">
                <DialogHeader>
                  <DialogTitle>{props.projectName}</DialogTitle>
                  <DialogDescription>{props.projectDescription}
                    <div className="flex flex-wrap gap-2 justify-center mt-4">

                      {props.skills?.map((skill) => (
                        <SkillBadge key={skill.slug} skill={skill.name} size='small' />
                      ))}
                    </div>
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-evenly w-full text-black">
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
