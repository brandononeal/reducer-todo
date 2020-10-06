import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/todoReducer";

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const [newTodo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {todos.map((todo) => {
        return <p>{todo.item}</p>;
      })}

      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          type="text"
          value={newTodo}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODOS", payload: newTodo });
          }}
        >
          Submit
        </button>
        {/* <button
          onClick={() => {
            dispatch({ type: "CLEAR_TODOS", payload:  });
          }}
        >
          Clear Completed
        </button> */}
      </form>
    </div>
  );
}
