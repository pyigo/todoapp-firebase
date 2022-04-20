import React, { useState } from "react";
import Button from '@material-ui/core/Button';

import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState(["Learn a new language", "Write code every day", "Read a book", "Groceries Shopping"]);
  const [input, setInput] = useState('');
  console.log(input)

  // create a variable for the onclick event 
  const addTodo = (event) => {
    console.log("learn firebase")
    event.preventDefault() //avoid our form to submit every letter we type and stop refresh the page

    // the spread operator ... helps keep what is already in our state and add the new one
    setTodos([...todos, input])  //"here is the new to do we will add through input"
    setInput('') // clear out our input after we submit
  }


  return (
    <div className="App">
      <h1>Your To Do List</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add to do
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add to do</button> */}
      </form>
      <ul>
        {todos.map(todo => (
          // use Todo component
          <Todo text={todo} />

        ))}
      </ul>


    </div>
  );
}

export default App;
