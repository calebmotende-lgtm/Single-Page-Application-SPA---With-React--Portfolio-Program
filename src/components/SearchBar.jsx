function SearchBar({ value, onSearch, placeholder = "Search projects..." }) {
  return (
    <div className="search-bar">
      <label htmlFor="project-search" className="visually-hidden">
        Search projects
      </label>
      <div style={{ position: 'relative' }}>
        <input
          id="project-search"
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={(event) => onSearch(event.target.value)}
        />
        <span style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--text-secondary)',
          fontSize: '1.1rem'
        }}>
          🔍
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
