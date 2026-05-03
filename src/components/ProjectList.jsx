function ProjectList({ projects }) {
  if (!projects.length) {
    return <p className="empty-state">No projects found.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="project-meta">{project.tech.join(" · ")}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              View project
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

export default ProjectList;
