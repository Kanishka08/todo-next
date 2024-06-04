import Head from "next/head";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import styles from "../styles/HomePage.module.css";
import { MongoClient } from "mongodb";
import { useState } from "react";
import { useRouter } from "next/router";

const HomePage = (props) => {
  const [tasks, setTasks] = useState([...props.todos]);
  const router = useRouter();

  const addTaskHandler = (taskItem) => {
    setTasks([...tasks, taskItem]);
  };

  const deleteTaskHandler = async (id) => {
    await fetch(`/api/new-todos?id=${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" },
    });
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const onClickHandler = () => {
    router.push("/completed-tasks");
  };

  return (
    <>
      <Head>
        <title>To do App</title>
        <meta
          name="description"
          content="make your todos in easy and sophisticated way"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Todo App</h1>
          <AddTask addTask={addTaskHandler} />
        </div>
        <TaskList todos={tasks} deleteTask={deleteTaskHandler} />
        <button onClick={onClickHandler} className={styles.viewCompletedButton}>
          View Completed Tasks
        </button>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kanishka2222:8yXUovOrkBGgT37h@atlascluster.i04w0.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"
  );
  const db = client.db();
  const todosCollection = db.collection("todos");
  const todos = await todosCollection.find().toArray();
  client.close();

  return {
    props: {
      todos: todos.map((todo) => ({
        id: todo._id.toString(),
        task: todo.task,
        completed: todo.completed,
      })),
    },
  };
}

export default HomePage;
