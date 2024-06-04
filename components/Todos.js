// import { ListGroup, Form } from "react-bootstrap";
// import { BsFillTrashFill } from "react-icons/bs";
// import { useState } from "react";
// const Todos = (props) => {
//   const [checked, setChecked] = useState(true);
//   return (
//     <ListGroup.Item className="py-3">
//       <div className="d-flex">
//         <div className="d-flex">
//           <Form className="">
//             <Form.Check type="checkbox" />
//           </Form>
//           <span className="ps-3">{props.title}</span>
//         </div>
//         <div className="ms-auto">
//           <BsFillTrashFill
//             style={{ cursor: "pointer" }}
//             className="fs-4 text-primary"
//           />
//         </div>
//       </div>
//     </ListGroup.Item>
//   );
// };

// export default Todos;

import { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

const Todos = (props) => {
  const [checked, setChecked] = useState(props.completed);

  return (
    <li className="list-group-item">
      <div className="list-item">
        <div className="list-item-content">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className={checked ? "completed" : ""}>{props.title}</span>
        </div>
        <div className="list-item-action">
          <BsFillTrashFill
            style={{ cursor: "pointer" }}
            className="trash-icon"
          />
        </div>
      </div>
    </li>
  );
};

export default Todos;
