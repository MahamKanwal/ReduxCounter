// import React from 'react'
// // import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch, useSelector } from "react-redux";
// import { increment ,decrement} from '../actions';
// // import { decrement, increment } from "./actions/index";

// const Counter = () => {

//   const counter = useSelector((state) => state.counterReducer.count);

//   const dispatch = useDispatch();

//   return (
//    <>
   
//    <div className="d-flex gap-3 align-items-center">
//       <button
//         onClick={() => {
//           dispatch(decrement());
//         }}
//       >
//         -
//       </button>
//       {console.log(counter)}
//       <p className="text-white">{counter}</p>
//       <button onClick={() => dispatch(increment())}>+</button>
//     </div>

//    </>
//   );
// }

// export default Counter

import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions";
import { FaMinus, FaPlus } from "react-icons/fa";

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div
    className="card text-center p-4 main"
  >
    <h2>Redux Counter</h2>
    <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
      <button className="btn btn-danger rounded-circle" onClick={() => dispatch(decrement())}>
        <FaMinus />
      </button>
      <p className="display-4 mb-0">{counter}</p>
      <button className="btn btn-success rounded-circle" onClick={() => dispatch(increment())}>
        <FaPlus />
      </button>
    </div>
  </div>
  
  );
};

export default Counter;
