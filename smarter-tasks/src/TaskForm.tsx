import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  duedate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  inputRef = React.createRef<HTMLInputElement>();
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  duedateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ duedate: event.target.value });
  };
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      duedate: this.state.duedate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", duedate: "" });
  };
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      duedate: "",
    };
  }
  render() {
    return (
      <form onSubmit={this.addTask}>
        <div>
        <label htmlFor="title">Title : </label>
        <input
          type="text"
          name="title"
          id="todoTitle"
          value={this.state.title}
          onChange={this.titleChanged}
          required
        />
        <br />
        <label htmlFor="todoDescription">Description : </label>
        <input
          type="text"
          name="todoDescription"
          id="todoDescription"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />
        <br />
        <label htmlFor="todoDueDate">Due date : </label>
        <input
          type="date"
          name="todoDueDate"
          id="todoDueDate"
          value={this.state.duedate}
          onChange={this.duedateChanged}
          required
        />
        </div>
        <button type="submit" id="addTaskButton">
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
