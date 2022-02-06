export const TaskReducer = (state, action) => {

  switch (action.type) {
    case "UpdateTask":
      return {
        ...state,
        task: [action.payload],
      };
    case "ADDTASK":
      return {
        ...state,
        task: [[...state.task[0], {...action.payload}]],
      };

    case "REMOVE_TASK":
      return {
        ...state,
        task: [
          state.task[0].filter((task) => {
            return task.id !== action.payload;
          }),
        ],
      };
    case "CHECK_TOGGLE":
      return {
        ...state,
        task: [
          state.task[0].map((task) => {
            if (task.id == action.payload.id) {
              return { ...task, isCompleted: !task.isCompleted };
            } else {
              return task;
            }
          }),
        ],
      };

      default: return state
  }
};
