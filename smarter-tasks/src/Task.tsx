import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  description: string;
  duedate: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem">
        <h2 >Title: {this.props.title}</h2>
        <h2 >{this.props.description? `Description: ${this.props.description}`:""}</h2>
        <h2 >Due date: {this.props.duedate}</h2>
      </div>
    );
  }
}
export default Task;
