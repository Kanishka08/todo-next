import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "../styles/Todos.module.css";

const ToDos = (props) => {
  const [completed, setCompleted] = useState(props.completed);
  const { id } = props;

  const onCheckHandler = async () => {
    setCompleted(!completed);
    await fetch("/api/new-todos", {
      method: "PUT",
      body: JSON.stringify({
        id: props.id,
        task: props.task,
        completed: !props.completed,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onDeleteHandler = () => {
    props.deleteTask(id);
  };

  return (
    <div className={styles.listItem}>
      <div className={styles.itemContent}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            onChange={onCheckHandler}
            checked={completed}
          />
          <span>{props.task}</span>
        </div>
        <BsFillTrashFill className={styles.icon} onClick={onDeleteHandler} />
      </div>
    </div>
  );
};

export default ToDos;
