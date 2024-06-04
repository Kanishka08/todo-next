import styles from "../styles/CompletedTodos.module.css";
import { MdOutlineFileDownloadDone } from "react-icons/md";

const CompletedTodos = (props) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.itemContent}>
        <span>{props.task}</span>
        <MdOutlineFileDownloadDone className={styles.icon} />
      </div>
    </div>
  );
};

export default CompletedTodos;
