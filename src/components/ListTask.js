import { useSelector } from "react-redux";
import Task from "./Task";
import { useState } from "react";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((t) =>
    filter === "done" ? t.isDone : filter === "not" ? !t.isDone : true
  );

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("done")}>Done</button>
      <button onClick={() => setFilter("not")}>Not Done</button>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
