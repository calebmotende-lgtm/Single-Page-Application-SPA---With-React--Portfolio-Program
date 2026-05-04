import { useState } from "react";

const defaultForm = {
  title: "",
  description: "",
  tech: "",
  link: ""
};

function ProjectForm({ onAdd }) {
  const [form, setForm] = useState(defaultForm);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.title.trim() || !form.description.trim()) {
      return;
    }

    onAdd({
      title: form.title.trim(),
      description: form.description.trim(),
      tech: form.tech.split(",").map((item) => item.trim()).filter(Boolean),
      link: form.link.trim()
    });

    setForm(defaultForm);
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2 style={{ marginTop: 0, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
        ➕ Add New Project
      </h2>

      <div className="form-row">
        <label htmlFor="project-title">Project Title *</label>
        <input
          id="project-title"
          value={form.title}
          onChange={(event) => updateField("title", event.target.value)}
          placeholder="Enter your project title"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="project-description">Description *</label>
        <textarea
          id="project-description"
          value={form.description}
          onChange={(event) => updateField("description", event.target.value)}
          placeholder="Describe your project briefly..."
          rows="4"
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="project-tech">Technologies Used</label>
        <input
          id="project-tech"
          value={form.tech}
          onChange={(event) => updateField("tech", event.target.value)}
          placeholder="React, Node.js, MongoDB (comma-separated)"
        />
      </div>

      <div className="form-row">
        <label htmlFor="project-link">Project Link</label>
        <input
          id="project-link"
          type="url"
          value={form.link}
          onChange={(event) => updateField("link", event.target.value)}
          placeholder="https://your-project-link.com"
        />
      </div>

      <button type="submit" className="submit-button">
         Save Project
      </button>
    </form>
  );
}

export default ProjectForm;
