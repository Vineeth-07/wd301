import React from "react";
import TaskCard from "./TaskCard";

interface pending {
  title: string;
  dueDate: string;
  assigneeName: string;
}

interface done {
  title: string;
  completedAtDate: string;
  assigneeName: string;
}

function App() {
  const pendingTask =(title:string,dueDate:string,assigneeName:string)=>{
      let Pending: pending={title,dueDate,assigneeName}
      return Pending;
  }
  const completedTask =(title:string,completedAtDate:string,assigneeName:string)=>{
    let Done: done={title,completedAtDate,assigneeName}
    return Done;
  }

  return (
    <div className="grid grid-cols-6">
      <div className="col-start-2 col-span-4">
        <p className="main">
          <strong>Smarter Tasks</strong>
        </p>
        <p className="p">
          <strong>Project:</strong> Graduation Final Year Project (Malla Reddy
          College)
        </p>
        <div className="box">
          <h1 className="h1">
            <strong>Pending</strong>
          </h1>
          <TaskCard {...pendingTask("Shopping","January 19th","Vineeth",)}/>
          <TaskCard {...pendingTask("Prepare for exam","February 7th","Pavan",)}/>
          <a href="/">+ New Task </a>
        </div>
        <div className="box">
          <h1 className="h1">
            <strong>Done</strong>
          </h1>
          <TaskCard {...completedTask("Hackathon","March 11th","Sandeep",)}/>
          <TaskCard {...completedTask("Seminar on full stack","April 1st","Nithin",)}/>
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default App;
