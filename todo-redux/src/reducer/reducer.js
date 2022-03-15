const initialTask = {
  title: [],
};
export const todoItems = (task = initialTask, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...task,
        title: [
          ...task.title,
          {
            title: action.title,
          },
        ],
      };

    default:
      return task;
  }
};
