import SkillBadge from "./SkillBadge";
import ProjectLinkButton from "./ProjectLinkButton";

export default function ProjectContainer(props) {
  return (
    <div className="rounded-md bg-blue-950 flex flex-col justify-center items-center min-h-[250px] max-w-[700px] gap-3 pb-5">
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
        </div>
    </div>
  );
}