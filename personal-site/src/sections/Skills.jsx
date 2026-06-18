import SkillBadge from "../components/SkillBadge";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-[100svh] scroll-mt-14 bg-indigo-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="mb-8 text-center md:text-left">Skills</h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Front End Skills */}
          <div className="flex flex-col gap-2">
            <h2>Front End</h2>
            <SkillBadge skill="HTML" />
            <SkillBadge skill="CSS" />
            <SkillBadge skill="JavaScript" />
            <SkillBadge skill="React" />
            <SkillBadge skill="TailwindCSS" />
          </div>

          {/* Back End Skills */}
          <div className="flex flex-col gap-2">
            <h2>Back End</h2>
            <SkillBadge skill="C#" />
            <SkillBadge skill=".NET" />
            <SkillBadge skill="TypeScript" />
            <SkillBadge skill="Node" />
            <SkillBadge skill="Express" />
            <SkillBadge skill="Python" />
          </div>

          {/* Database Skills */}
          <div className="flex flex-col gap-2">
            <h2>Database</h2>
            <SkillBadge skill="SQL" />
            <SkillBadge skill="MongoDB" />
            <SkillBadge skill="PostgreSQL" />
          </div>

          {/* Other Skills */}
          <div className="flex flex-col gap-2">
            <h2>Other</h2>
            <SkillBadge skill="Git" />
            <SkillBadge skill="GitHub" />
            <SkillBadge skill="Docker" />
            <SkillBadge skill="EC2 (AWS)" />
            <SkillBadge skill="AWS S3" />
            <SkillBadge skill="SNS (AWS)" />
            <SkillBadge skill="Solidity" />
          </div>
        </div>
      </div>
    </section>
  );
}