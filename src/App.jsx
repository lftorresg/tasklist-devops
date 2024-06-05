import React from "react";

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TasksView from "./components/TasksView";

function App() {
  return (
    <React.Fragment>
      <Header />
      <TaskInput />
      <TasksView />
    </React.Fragment>
  );
}

export default App;
