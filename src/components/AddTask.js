import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (description.trim()) {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription("");
    }
  };

  return (
    <div>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTask;
