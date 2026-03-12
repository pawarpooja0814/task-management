import { useState } from "react";
import TaskCard from "../component/TaskCard";
import TaskForm from "../component/TaskForm";
import FilterBar from "../component/FilterBar";

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      description: "Build task dashboard",
      status: "Pending",
      dueDate: "2026-04-10"
    },
    {
      id: 2,
      title: "Study React Hooks",
      description: "Learn useState and useEffect",
      status: "In Progress",
      dueDate: "2026-04-05"
    }
  ]);

  const [filter, setFilter] = useState("All");
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState("");

  const handleSave = (task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
      setEditingTask(null);
    } else {
      setTasks([...tasks, task]);
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const statusFiltered =
    filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);

  const filteredTasks = statusFiltered.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      <h2 className="dashboard-title">Task Dashboard</h2>

      {/* Search Bar */}
      <input
        className="search-bar"
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {/* Task Form */}
      <TaskForm onSave={handleSave} editingTask={editingTask} />

      <br />

      {/* Filter Buttons */}
      <FilterBar setFilter={setFilter} />

      <h2 className="task-list-title">Task List</h2>
      <div className="filter">
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
     </div>
    </div>
  );
}

export default Dashboard;