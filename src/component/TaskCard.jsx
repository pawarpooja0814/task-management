

function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <p>Due Date: {task.dueDate}</p>

      <div className="task-buttons">
        <button
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;