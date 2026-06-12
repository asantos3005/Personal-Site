import { useEffect, useState } from "react";
import ProjectContainer from "../components/ProjectContainer";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();

        if (search.trim() !== "") {
          params.append("search", search.trim());
        }

        const queryString = params.toString();
        const url = `${API_BASE_URL}/api/projects${
          queryString ? `?${queryString}` : ""
        }`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
        setError("Could not load projects.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, [search]);

  return (
    <section
      id="projects"
      className="min-h-[100svh] scroll-mt-14 bg-indigo-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-center md:text-left">Projects and Experiences</h1>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="mt-6 flex justify-center md:justify-start"
        >
          <input
            className="min-h-[50px] w-full max-w-2xl rounded-lg bg-olive-50 px-4"
            type="text"
            name="search"
            placeholder="Search by name or keyword"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>

        {loading && (
          <div className="mt-5 font-mono text-olive-50">
            <p>Projects Loading...</p>
          </div>
        )}

        {error && (
          <div className="mt-5 font-mono text-olive-50">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="mt-5 font-mono text-olive-50">
            <p>No projects found.</p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectContainer
                key={project.id}
                projectName={project.title}
                projectDescription={project.longDescription}
                skills={project.skills}
                githubLink={project.githubUrl}
                demoLink={project.demoUrl}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}