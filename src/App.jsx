import { React, useState, useEffect } from "react";

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TasksView from "./components/TasksView";

const LOCAL_STORAGE_KEY = "ls-tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localStorageTasks = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (localStorageTasks) {
      const localTasks = [...JSON.parse(localStorageTasks)];
      const filteredTasks = localTasks.filter((task) => task.title !== "");
      setTasks(filteredTasks);
    }
  }, []);

  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const handleAddTask = (title) => {
    if (title === "") return;

    saveTasks([
      ...tasks,
      {
        title: title,
        completed: false,
        id: crypto.randomUUID(),
      },
    ]);
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    saveTasks(filteredTasks);
  };

  const handleFinishTask = (id) => {
    const filteredTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          finished: !task.finished,
        };
      }

      return task;
    });

    saveTasks(filteredTasks);
  };

  return (
    <div>
      <Header />
      <TaskInput handleAddTask={handleAddTask} />
      <TasksView tasks={tasks} handleFinishTask={handleFinishTask} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
