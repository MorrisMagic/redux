import { useDispatch } from "react-redux";
import { editTask, toggleTask } from "../store";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const { id, description, isDone } = task;

  const handleEdit = () => {
    const newDesc = prompt("Edit Task:", description);
    if (newDesc !== null) dispatch(editTask({ id, description: newDesc }));
  };

  return (
    <div>
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {description}
      </span>
      <button onClick={() => dispatch(toggleTask(id))}>
        {isDone ? "Undo" : "Done"}
      </button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Task;
