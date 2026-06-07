import SkillBadge from "./SkillBadge";

export default function ProjectContainer(props) {
  return (
    <div className="rounded-md bg-blue-950 flex flex-col justify-center items-center min-h-[250px] max-w-[700px]">
        <h3>{props.projectName}</h3>

        <p className="body-text px-3">{props.projectDescription}</p>

        <div className="flex flex-wrap gap-2">
          {props.skills?.map((skill) => (
            <SkillBadge key={skill.slug} skill={skill.name} />
          ))}
        </div>

        <div className="flex justify-evenly w-full">
            <a href={props.githubLink} className="bg-indigo-500">
            Github
            </a>

            {props.demoLink && (
            <a href={props.demoLink} className="bg-indigo-500">
                Demo
            </a>
            )}
        </div>
    </div>
  );
}