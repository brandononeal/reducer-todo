import React, { useState, useReducer } from "react";
import { reducer, initialState } from "../reducers/todoReducer";

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");
  };

  return (
    <div>
      {state.todos.map((todo) => {
        return (
          <p
            className={todo.completed ? "completed" : "not-complete"}
            onClick={() => {
              dispatch({ type: "TOGGLE_TODOS", payload: todo.id });
            }}
          >
            {todo.item}
          </p>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input
          name="todo"
          type="text"
          value={newTodo}
          onChange={handleChanges}
        />
        <br />

        <button
          onClick={() => {
            dispatch({ type: "ADD_TODOS", payload: newTodo });
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            dispatch({ type: "COMPLETE_TODOS" });
            console.log(state);
          }}
        >
          Clear Completed
        </button>
      </form>
    </div>
  );
}
