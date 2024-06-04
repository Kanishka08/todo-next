import ToDos from "../components/Todos";
import styles from "../styles/TaskList.module.css";

const TaskList = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span>Task</span>
        <span>Action</span>
      </div>
      <div className={styles.listGroup}>
        {props.todos.map((todo) => (
          <ToDos
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            id={todo.id}
            deleteTask={props.deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
