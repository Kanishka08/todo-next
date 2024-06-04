import { useState, useRef } from "react";
import styles from "../styles/AddTask.module.css";

const AddTask = (props) => {
  const [open, setOpen] = useState(false);
  const taskRef = useRef();

  const onTaskSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredTask = {
      task: taskRef.current.value,
      completed: false,
    };
    const response = await fetch("/api/new-todos", {
      method: "POST",
      body: JSON.stringify(enteredTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const task = {
      id: data.insertedId,
      ...enteredTask,
    };
    props.addTask(task);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className={`${styles.button} ${styles.addTaskButton}`}
      >
        Add Task
      </button>
      {open && (
        <div id="example-collapse-text" className={styles.collapseContent}>
          <form onSubmit={onTaskSubmitHandler} className={styles.form}>
            <div className={styles.formGroup}>
              <textarea
                className={styles.textarea}
                placeholder="Enter New Task"
                ref={taskRef}
              />
            </div>
            <button
              type="submit"
              className={`${styles.button} ${styles.submitButton}`}
            >
              Add
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddTask;
