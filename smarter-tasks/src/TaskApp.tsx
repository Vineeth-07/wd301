import React from "react";
import { TaskItem } from "./types";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./TaskCard.css";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  addTask = (task: TaskItem) => {
    this.setState((state, props) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };
  render() {
    return (
      <div>
        <h1>Smarter Tasks</h1>
        <TaskForm addTask={this.addTask} />
        <h1>Your Tasks</h1>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TaskApp;
