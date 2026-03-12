function FilterBar({ setFilter }) {
  return (
    <div className="buttons">
    <div className="filter-bar">
      <button
        className="filter-btn"
        onClick={() => setFilter("All")}
      >
        All Tasks
      </button>

      <button
        className="filter-btn"
        onClick={() => setFilter("Pending")}
      >
        Pending
      </button>

      <button
        className="filter-btn"
        onClick={() => setFilter("In Progress")}
      >
        In Progress
      </button>

      <button
        className="filter-btn"
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>
    </div>
    </div>
  );
}

export default FilterBar;