import "./TaskCard.css";

interface TaskProp {
  deleteTask: (title: string) => void;
  title: string;
  description: string;
  dueDate: string;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem">
      <h2>Title: {props.title}</h2>
      <h2>{props.description ? `Description: ${props.description}` : ""}</h2>
      <h2>Due date: {props.dueDate}</h2>
      <button
        id="deleteTaskButton"
        onClick={() => {
          props.deleteTask(props.title);
        }}
      >
        Delete
      </button>
      <br />
    </div>
  );
};

export default Task;
