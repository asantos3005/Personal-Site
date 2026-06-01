import SkillBadge from "../components/SkillBadge"

export default function Skills(){
    return(
        <section className="h-screen bg-indigo-950 px-8 ">
            <h1>Skills</h1>
            <div className="flex justify-evenly">

                    {/*Front End Skills */}
                <div className="flex flex-col gap-2">
                    <h2>Front End</h2>
                    <SkillBadge skill="HTML"/>
                    <SkillBadge skill="CSS"/>
                    <SkillBadge skill="JavaScript"/>
                    <SkillBadge skill="React"/>
                    <SkillBadge skill="TailwindCSS"/>
                </div>

                {/*Back End Skills */}
                <div className="flex flex-col gap-2">
                    <h2>Back End</h2>
                    <SkillBadge skill="C#"/>
                    <SkillBadge skill=".NET"/>
                    <SkillBadge skill="TypeScript"/>
                    <SkillBadge skill="Node.js"/>
                    <SkillBadge skill="Express"/>
                    <SkillBadge skill="Python"/>
                    
                </div>

                {/*Database End Skills */}
                <div className="flex flex-col gap-2">
                    <h2>Database</h2>
                    <SkillBadge skill="SQL"/>
                    <SkillBadge skill="MongoDB"/>
                    <SkillBadge skill="AWS S3"/>

                </div>

                {/*Other Skills */}
                <div className="flex flex-col gap-2">
                    <h2>Other</h2>
                    <SkillBadge skill="Git"/>
                    <SkillBadge skill="GitHub"/>
                    <SkillBadge skill="Docker"/>
                    <SkillBadge skill="EC2 (AWS)"/>
                    <SkillBadge skill="SQS (AWS)"/>
                    <SkillBadge skill="Solidity"/>


                    
                </div>
            </div>
            

        </section>
    )
}