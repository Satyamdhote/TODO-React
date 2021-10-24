import React from "react";
import Todo from "./components/Todo";
function App() {
  // const initialState = 5;
  // const [state, setstate] = useState(initialState);

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;

// <div>
//   <h1>{state}</h1>
//   <button onClick={() => setstate(state + 1)}>Increase</button>
//   <button onClick={() => (state < 1 ? 0 : setstate(state - 1))}>
//     Decrease
//   </button>
// </div>
