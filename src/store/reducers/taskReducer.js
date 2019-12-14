const initState = [];

const taskReducer = (state = initState, action) => {
   console.log('reducer', action);
   switch (action.type) {
      case 'ADD_TASK':
         console.log("ADD_TASK", [...state, action.taskObj]);
         return [...state, action.taskObj];
      case 'ADD_TASK_ERROR':
         console.log('Add Task - Error', action.err);
         return state;
      case 'SET_TASKS':
         return action.tasks;
      default:
         return state;
   }
}

export default taskReducer;