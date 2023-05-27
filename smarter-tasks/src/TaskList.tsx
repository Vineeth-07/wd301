import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (title: string) => any;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li>
      <Task
        key={idx}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTask={props.deleteTask} id={""}      />
    </li>
  ));
  return (
    <>
      <ol>{list}</ol>
    </>
  );
};

export default TaskList;