import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./styles.css";

const App = () => (
  <div className="container">
    <h1>ToDo App</h1>
    <AddTask />
    <ListTask />
  </div>
);

export default App;
