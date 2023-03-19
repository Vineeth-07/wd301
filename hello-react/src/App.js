import TaskCard from "./TaskCard";

function App() {
  return (
    <div class="grid grid-cols-6">
      <div class="col-start-2 col-span-4">
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
          <TaskCard
            title="Going to movie"
            dueDate="1st January"
            assigneeName="Vineeth"
          />
          <TaskCard
            title="Play game"
            dueDate="5th March"
            assigneeName="Pavan"
          />
        </div>
        <div className="box">
          <h1 className="h1">
            <strong>Done</strong>
          </h1>
          <TaskCard
            title="Exams"
            completedAtDate="19th February"
            assigneeName="Sandeep"
          />
          <TaskCard
            title="Take permission from parents"
            completedAtDate="5th May"
            assigneeName="Nithin"
          />
        </div>
      </div>
    </div>
  );
}
export default App;
