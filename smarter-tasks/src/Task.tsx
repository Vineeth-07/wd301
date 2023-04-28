import React from "react";
import "./TaskCard.css";

interface TaskProp {
    title: string;
    description:string;
    duedate:string;
  }

class Task extends React.Component<TaskProp> {
    render() {
        return (
          <div className="TaskItem shadow-md border border-slate-100">
            <h2 className="text-base font-bold my-1">{this.props.title}</h2>
            <h2 className="text-base font-bold my-1">{this.props.description}</h2>
            <h2 className="text-base font-bold my-1">{this.props.duedate}</h2>
          </div>
        );
      }
  }
  export default Task;
