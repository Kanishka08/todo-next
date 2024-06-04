// import Head from "next/head";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import AddTask from "@/components/AddTask";
// import TaskList from "@/components/TaskList";
// const HomePage = () => {
//   return (
//     <>
//       <Head>
//         <title>ToDo App</title>
//         <meta
//           name="description"
//           content="Browse a huge list highly active meetups easily"
//         />
//       </Head>
//       <main>
//         <Row className="text-center mx-0 mt-3">
//           <Col lg="6" className="mx-auto py-2 rounded-top-3">
//             <h1 className="fs-4">Todo App</h1>
//             <div>
//               <TaskList />
//             </div>
//             <div className=" ">
//               <AddTask />
//             </div>
//           </Col>
//         </Row>
//       </main>
//     </>
//   );
// };

// export default HomePage;

import Head from "next/head";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>ToDo App</title>
        <meta
          name="description"
          content="Browse a huge list highly active meetups easily"
        />
      </Head>
      <main>
        <div className="container">
          <div className="header">
            <h1>Todo App</h1>
          </div>
          <TaskList />
          <AddTask />
        </div>
      </main>
    </>
  );
};

export default HomePage;
