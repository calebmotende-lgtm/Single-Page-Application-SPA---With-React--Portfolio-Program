import { useMemo, useState } from "react";
import ProjectForm from "./components/ProjectForm.jsx";
import ProjectList from "./components/ProjectList.jsx";
import SearchBar from "./components/SearchBar.jsx";

const initialProjects = [
  {
    id: 1,
    title: "SPA Portfolio Platform",
    description: "A clean, basic portfolio page with a short description and a link.",
    tech: ["React", "Vite"],
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Landing Page Design",
    description: "A modern landing page concept for a tech startup.",
    tech: ["HTML", "CSS"],
    link: "https://example.com/landing"
  },
  {
    id: 3,
    title: "Static Project Showcase",
    description: "Project showcase with a focus on static content and minimal interactivity.",
    tech: ["JavaScript", "React"],
    link: "https://example.com/product"
  }
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [projects, setProjects] = useState(initialProjects);

  const filteredProjects = useMemo(() => {
    const lowerSearch = searchText.toLowerCase();
    return projects.filter((project) =>
      project.title.toLowerCase().includes(lowerSearch) ||
      project.description.toLowerCase().includes(lowerSearch) ||
      project.tech.join(" ").toLowerCase().includes(lowerSearch)
    );
  }, [projects, searchText]);

  function handleAddProject(newProject) {
    setProjects((current) => [
      {
        id: Date.now(),
        ...newProject
      },
      ...current
    ]);
    setShowForm(false);
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <h1>Portfolio Platform</h1>
        <p>Single Page Application with React- portfolio.</p>
      </header>

      <section className="main-content">
        <div className="controls-row">
          <SearchBar value={searchText} onSearch={setSearchText} />
          <button type="button" onClick={() => setShowForm((value) => !value)}>
            {showForm ? "Close form" : "Add project"}
          </button>
        </div>

        {showForm && <ProjectForm onAdd={handleAddProject} />}

        <ProjectList projects={filteredProjects} />
      </section>
    </div>
  );
}

export default App;
