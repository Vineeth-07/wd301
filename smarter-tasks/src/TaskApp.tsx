import React, { useEffect } from "react";
import { TaskItem } from "./types";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./TaskCard.css";
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
  useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Saved ${taskAppState.tasks.length} items to backend...`);
    }, 5000);
    return () => {
      console.log("clear or cancel any existing network call");
      clearTimeout(id);
    };
  }, [taskAppState.tasks]);
  const addTask = (task: TaskItem) => {
    setTaskAppState({ tasks: [...taskAppState.tasks, task] });
  };
  const deleteTask = (title: string) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((task) => task.title !== title),
    });
  };
  return (
    <div>
      <h1>Smarter Tasks</h1>
      <TaskForm addTask={addTask} />
      <h1>{taskAppState.tasks.length > 0 ? "Your Tasks" : ""}</h1>
      <TaskList tasks={taskAppState.tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskApp;
