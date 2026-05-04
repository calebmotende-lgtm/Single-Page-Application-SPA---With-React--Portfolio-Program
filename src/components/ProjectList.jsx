function ProjectList({ projects }) {
  if (!projects.length) {
    return (
      <div className="empty-state">
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📂</div>
        <h3>No projects found</h3>
        <p>Try adjusting your search or add a new project to get started.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article key={project.id} className="project-card">
          <header>
            <h3>{project.title}</h3>
          </header>
          <p>{project.description}</p>
          <div className="project-meta">
            {project.tech.join(" · ")}
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              View Project
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

export default ProjectList;
