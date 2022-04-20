import React from 'react';
import { database } from "./firebase";
import Button from "@material-ui/core/Button";

function Todo(props) {
    return (
        <div>
            <li>{props.text}
                <Button variant="contained" color="secondary" onClick={event => database.collection('todos').doc(props.todo.id).delete()}>delete
                </Button>
                {/* <button onClick={event => database.collection('todos').doc(props.todo.id).delete()}>delete</button> */}
            </li>
        </div>
    )
}

export default Todo
