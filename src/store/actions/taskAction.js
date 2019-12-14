import database from "../../config/firebaseConfig";

export const addTask = (taskObj) => {
  return (dispatch, getState, getFirebase) => {

    database
      .ref('tasks')
      .push({
        ...taskObj,
        createdAt: new Date()
      }).then((response) => {
        console.log(response);
        dispatch({ type: 'ADD_TASK', taskObj});
      }).catch((err) => {
        dispatch({ type: 'ADD_TASK_ERROR', err});
      })
  };
};