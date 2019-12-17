import database from "../../config/firebaseConfig";

// SET_TASKS
export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  tasks
});

// Add Task
export const addTask = (taskObj) => {
  return (dispatch) => {
    const {
      task = '',
      priority = '',
      completed = false,
      createdAt = 0
    } = taskObj;
    const taskData = { task, priority, completed, createdAt };
    database
      .ref('tasks')
      .push(taskData)
      .then((ref) => {
        const task = {id: ref.key, ...taskData};
        dispatch({ type: 'ADD_TASK', task });
      }).catch((err) => {
        dispatch({ type: 'ADD_TASK_ERROR', err});
      })
  };
};

// Remove Task
export const removeTask = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`tasks/${id}`).remove().then(() => {
      dispatch({ type: 'REMOVE_TASK', id });
    });
  };
};

// Update Task
export const updateTask = (id, updates) => {
  return (dispatch) => {
    return database.ref(`tasks/${id}`).update(updates).then(() => {
      dispatch({ type: 'UPDATE_TASK', id, updates });
    });
  };
};

// fetch Tasks from Firebase
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