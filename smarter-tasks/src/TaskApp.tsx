import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const deleteTask = (id : string) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((task) => task.id !== id),
    });
  };
  return (
    <div>
    <h1> <strong>Smarter Tasks</strong></h1>
    <TaskForm addTask={addTask} />
    <h1> <strong>{taskAppState.tasks.length > 0 ? "Your Tasks" : ""}</strong></h1>
    <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
  </div>
  );
};

export default TaskApp;
