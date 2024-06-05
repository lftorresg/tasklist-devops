import Task from "../Task";

import styles from "./styles.module.css";

import tasklist from "../../assets/tasklist.svg";

export default function TasksView({
  tasks,
  handleFinishTask,
  handleDeleteTask,
}) {

  if (!tasks) return null;

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <section className={styles.container}>
      <header>
        <section className={styles.added}>
          <h2>Tarefas Adicionadas</h2>
          <span aria-label="Tarefas criadas" role="status">
            {totalTasks}
          </span>
        </section>
        <section className={styles.finished}>
          <h2>Tarefas Concluídas</h2>
          <span aria-label="Progresso" role="status">
            {completedTasks}/{totalTasks}
          </span>
        </section>
      </header>

      {tasks.length === 0 && (
        <section className={styles.empty}>
          <img src={tasklist} alt="Tasklist" />
          <h1>Você ainda não adicionou tarefas para lista!</h1>
          <p>Adicione tarefas e organize sua rotina</p>
        </section>
      )}

      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleFinishTask={handleFinishTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </section>
  );
}
