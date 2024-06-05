import { useState, useEffect, useRef } from "react";

import styles from "./styles.module.css";

import edit from "../../assets/edit.svg"
import trash from "../../assets/delete.svg";

export default function Task({
  task,
  handleFinishTask,
  handleDeleteTask,
  handleEditTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(task?.title);

  const inputRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (document.activeElement !== inputRef.current) {
        if (e.target !== inputRef.current) {
          setIsEditing(false);
          setInputValue(inputValue.trim().replace(/[\s]+[\s]/g, " "));

          if (inputValue === "") {
            alert("Por favor, digite um título válido.");
            setIsEditing(true);
            inputRef.current.focus();
            return;
          }
        }
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [inputValue]);

  const handleEditing = () => {
    setIsEditing(true);
    inputRef.current.focus();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    handleEditTask(task.id, e.target.value);
  };

  return (
    <section className={styles.task}>
      <button onClick={() => handleFinishTask(task.id)}>
        <section className={task.finished ? styles.finish : ""}>
          {task.finished}
        </section>
      </button>

      <input
        ref={inputRef}
        readOnly={!isEditing}
        className={task.finished ? styles.finished : ""}
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      ></input>

      {!task.finished && <img src={edit} onClick={() => handleEditing()} alt="Edit" />}
      <img src={trash} alt="trash" onClick={() => handleDeleteTask(task.id)} />
    </section>
  );
}
