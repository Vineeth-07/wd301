import React from "react";
import { TaskItem } from "./types";
import "./TaskCard.css";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    title: "",
    description: "",
    dueDate: "",
  });
  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, title: event.target.value });
  };
  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };
  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({ title: "", description: "", dueDate: "" });
  };
  return (
    <form onSubmit={addTask}>
      <div>
        <label htmlFor="title" className="required">
          Title :{" "}
        </label>
        <input
          type="text"
          name="title"
          id="todoTitle"
          placeholder="Enter title"
          value={formState.title}
          onChange={titleChanged}
          required
        />
        <br />
        <label htmlFor="todoDescription">Description : </label>
        <input
          type="text"
          name="todoDescription"
          id="todoDescription"
          placeholder="Enter description"
          value={formState.description}
          onChange={descriptionChanged}
        />
        <br />
        <label htmlFor="tododueDate" className="required">
          Due date :{" "}
        </label>
        <input
          type="date"
          name="tododueDate"
          id="tododueDate"
          value={formState.dueDate}
          onChange={dueDateChanged}
          required
        />
      </div>
      <button type="submit" id="addTaskButton">
        Add item
      </button>
      <br />
      <br />
    </form>
  );
};
export default TaskForm;
