import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import "./App.css";
import Todo from "./Todo";
import { database } from "./firebase";

function App() {
  const [todos, setTodos] = useState([
    // "Learn a new language",
    // "Write code every day",
    // "Read a book",
    // "Groceries Shopping",
  ]);
  const [input, setInput] = useState("");

  // We want to fetch all the todos taks that we get from the database and add/remove them to our front end
  // we want to use useEffect so that our code inside the useEffect runs only once when our app loads and not over and over
  useEffect(() => {
    // this code will only run when app.js loads
    database.collection("todos").onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map(doc => doc.data()))
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    });
  }, []);

  // console.log("added task from user input", input);

  // create a variable for the onclick event
  const addTodo = (event) => {
    // console.log("learn firebase")
    event.preventDefault(); //avoid our form to submit every letter we type and stop refresh the page

    database.collection('todos').add({
      todo: input
    })

    // the spread operator ... helps keep what is already in our state and add the new one
    // setTodos([...todos, input]); //"here is the new to do we will add through input"
    setInput(""); // clear out our input after we submit
  };

  return (
    <div className="App">
      <h1>Your To Do List</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add to do
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          // use Todo component
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
