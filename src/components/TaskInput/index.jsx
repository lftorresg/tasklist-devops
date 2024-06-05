import { useState } from "react";

import styles from "./styles.module.css";

import addTask from '../../assets/add.svg'

export default function TaskInput({ handleAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setInputValue("");
    e.preventDefault();
  };

  return (
    <form className={styles.taskbox} onSubmit={handleSubmit}>
      <input
        placeholder="Digite uma nova tarefa..."
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        onClick={() =>
          handleAddTask(inputValue.trim().replace(/[\s]+[\s]/g, " "))
        }
      >
        <img src={addTask} alt="addLogo" />
      </button>
    </form>
  );
}
