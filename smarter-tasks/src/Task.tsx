import { Link } from "react-router-dom";
import "./TaskCard.css";

interface TaskProp {
  deleteTask: (title: string) => void;
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>
      <h2>{props.description ? `Description: ${props.description}` : ""}</h2>
      <h2>Due date: {props.dueDate}</h2>
      <button
        id="deleteTaskButton"
        className="deleteTaskButton border-2 p-1 m-1 bg-red-600 border rounded"
        onClick={() => {
          props.deleteTask(props.id);
        }}
      >
        Delete
      </button>
      <br />
    </div>
  );
};

export default Task;
