import styles from "./styles.module.css";

import finished from "../../assets/finished.svg";
import trash from "../../assets/delete.svg";

export default function Task({ task, handleFinishTask, handleDeleteTask }) {
  return (
    <section className={styles.task}>
      <button onClick={() => handleFinishTask(task.id)}>
        <section className={task.finished ? styles.finish : ""}>
          {task.finished && <img src={finished} alt="Finished task" />}
        </section>
      </button>
      <img src={trash} alt="trash" onClick={() => handleDeleteTask(task.id)} />
    </section>
  );
}
