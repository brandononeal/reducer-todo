export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: Date.now(),
    },
  ],
};

const newTask = (name) => {
  return {
    item: name,
    completed: false,
    id: Date.now(),
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      return { ...state, todos: [...state.todos, newTask(action.payload)] };
    case "TOGGLE_TODOS":
      return {
        ...state,
        todos: state.todos.map((item) => {
          return item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item;
        }),
      };
    case "COMPLETE_TODOS":
      return {
        ...state,
        todos: state.todos.filter((item) => !item.completed),
      };
    default:
      return state;
  }
};
