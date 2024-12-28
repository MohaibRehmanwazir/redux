import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Hooks for Redux

function App() {
  const count = useSelector((state) => state); // Get the state (count) from the store
  const dispatch = useDispatch(); // To send actions to the store

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
}

export default App;
