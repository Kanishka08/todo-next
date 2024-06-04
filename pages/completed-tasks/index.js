import CompletedTodos from "../../components/CompletedTasks";
import styles from "../../styles/CompletedTasks.module.css";
import { MongoClient } from "mongodb";
import { useState } from "react";

const CompletedTasks = (props) => {
  const completedTasks = props.todos.filter((task) => task.completed);
  const [tasks, setTasks] = useState([...completedTasks]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>Completed Tasks</h4>
      </div>
      {tasks.length > 0 ? (
        <div className={styles.listGroup}>
          {tasks.map((todo) => (
            <CompletedTodos
              key={todo.id}
              task={todo.task}
              completed={todo.completed}
              id={todo.id}
              deleteTask={props.deleteTask}
            />
          ))}
        </div>
      ) : (
        <div className={styles.noTasks}>
          <h5>No completed Tasks!</h5>
        </div>
      )}
    </div>
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

export default CompletedTasks;
