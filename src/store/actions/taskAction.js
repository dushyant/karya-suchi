import database from "../../config/firebaseConfig";

export const addTask = (taskObj) => {
  return (dispatch) => {
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

// SET_TASKS
export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  tasks
});

export const fetchTasks = () => {
  return (dispatch) => {
    return database.ref('tasks').once('value').then((snapshot) => {
      const tasks = [];

      snapshot.forEach((childSnapshot) => {
        tasks.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setTasks(tasks));
    });
  };
};