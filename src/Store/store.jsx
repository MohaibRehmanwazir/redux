// import React from 'react'
// import { createStore } from 'redux'
// const store = () => {
//     const store = createStore(counterReducer);
//     const initialValue = ()=>{
//         count = 0;
//     }
//     const counterReducer = (state = initialValue,action)=>{
//         switch(action.type){
//             case "INCREMENT":
//             return state + 1;
//             case "DECREMENT":
//                 return state - 1;
//         }
//     }
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default store
import { createStore } from 'redux';

// Reducer: Decides how the state should change
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': // If action is 'INCREMENT', add 1
      return state + 1;
    case 'DECREMENT': // If action is 'DECREMENT', subtract 1
      return state - 1;
    default:
      return state; // Return current state for unknown actions
  }
};

// Create the Redux store
const store = createStore(counterReducer);

export default store;
