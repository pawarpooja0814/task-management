import { useState, useEffect } from "react";

function TaskForm({ onSave, editingTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
      setDueDate(editingTask.dueDate);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    }

    const task = {
      id: editingTask ? editingTask.id : Date.now(),
      title,
      description,
      status,
      dueDate
    };

    onSave(task);

    setTitle("");
    setDescription("");
    setStatus("Pending");
    setDueDate("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editingTask ? "Edit Task" : "Add Task"}</h2>

      <input
        className="task-input inputtt"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="task-input inputtt"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="task-input"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <input
        className="task-input  inputtt"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button className="task-btn" type="submit">
        Save Task
      </button>
    </form>
  );
}

export default TaskForm;