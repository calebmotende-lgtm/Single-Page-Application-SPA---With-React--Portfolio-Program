import { useMemo, useState } from "react";
import ProjectForm from "./components/ProjectForm.jsx";
import ProjectList from "./components/ProjectList.jsx";
import SearchBar from "./components/SearchBar.jsx";

const initialProjects = [
  {
    id: 1,
    title: "Simple Portfolio App",
    description: "A clean, basic portfolio page with a short description and a link.",
    tech: ["React", "Vite"],
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Landing Page Design",
    description: "A simple landing page concept for a small business.",
    tech: ["HTML", "CSS"],
    link: "https://example.com/landing"
  },
  {
    id: 3,
    title: "Static Product Showcase",
    description: "A basic product showcase with a short summary.",
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
        <p>Single-page React portfolio with a simple project list and search.</p>
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
