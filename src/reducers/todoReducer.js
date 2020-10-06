export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now(),
  },
];

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
      return [...state, newTask(action.payload)];
    // case "CLEAR_COMPLETED":
    //   return;
    default:
      return state;
  }
};
