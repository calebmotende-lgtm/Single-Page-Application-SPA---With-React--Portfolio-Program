function SearchBar({ value, onSearch, placeholder = "Search projects..." }) {
  return (
    <div className="search-bar">
      <label htmlFor="project-search" className="visually-hidden">
        Search projects
      </label>
      <input
        id="project-search"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
