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
        key={idx + 1}
        id={task.id}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTask={props.deleteTask}    />
    </li>
  ));
  return (
    <>
      <ol>{list}</ol>
    </>
  );
};

export default TaskList;