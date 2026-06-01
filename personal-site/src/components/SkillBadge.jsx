

export default function SkillBadge(props){
    return(
       <div className="rounded-md bg-violet-600 flex justify-center items-center min-h-[50px] min-w-[200px]">
            <p className="badge-text">{props.skill}</p>
       </div>
    )
}