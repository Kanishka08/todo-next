// import { Button, Collapse, Form } from "react-bootstrap";
// import { useState } from "react";
// const AddTask = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <Button
//         onClick={() => setOpen(!open)}
//         aria-controls="example-collapse-text"
//         aria-expanded={open}
//         variant="info"
//         className="w-100 mb-3"
//       >
//         Add Task
//       </Button>
//       <Collapse in={open}>
//         <div id="example-collapse-text">
//           <Form>
//             <Form.Group className=" d-flex" controlId="formBasicEmail">
//               <Form.Control
//                 as="textarea"
//                 className="me-3 border-2 border-dark"
//                 placeholder="Enter New Task"
//               />
//               <Button variant="dark" className="align-self-end px-4">
//                 Add
//               </Button>
//             </Form.Group>
//           </Form>
//         </div>
//       </Collapse>
//     </>
//   );
// };

// export default AddTask;

import { useState } from "react";

const AddTask = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="button"
      >
        Add Task
      </button>
      {open && (
        <div id="example-collapse-text" className="collapse-content">
          <form>
            <div className="form-group">
              <textarea className="textarea" placeholder="Enter New Task" />
              <button type="submit" className="add-button">
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTask;
