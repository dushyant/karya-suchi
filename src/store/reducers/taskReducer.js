const initState = [];

const taskReducer = (state = initState, action) => {
   switch (action.type) {
      case 'ADD_TASK':
         return [...state, action.task];
      case 'ADD_TASK_ERROR':
         return state;
      case 'REMOVE_TASK':
         return state.filter(({ id }) => id !== action.id);
      case 'UPDATE_TASK':
      return state.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            ...action.updates
          };
        } else {
          return task;
        };
      });
      case 'SET_TASKS':
         return action.tasks;
      default:
         return state;
   }
}

export default taskReducer;