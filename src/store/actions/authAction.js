import { firebase } from '../../config/firebaseConfig';

export const createUser = ({email, password}) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('user created')
      return (dispatch) => {
        const user = { email, password}
        dispatch({type: 'CREATE_USER', user});
      };
    })
    .catch((error) => {
      dispatch({type: 'CREATE_USER_ERROR', error});
    })
  }
}

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      const { uid } = user;
      dispatch({type: 'LOGIN', uid})
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export const loginAnonymously = () => {
  return (dispatch) => {
    firebase.auth().signInAnonymously()
    .then((user) => {
      const { uid } = user;
      dispatch({type: 'LOGIN', uid})
    })
    .catch((error) => {
      console.log(error);
    });
  };
}

export const logoutUser = () => {
  return (dispatch) => {
    firebase.auth().signOut().then(() => {
      dispatch({type: 'LOGOUT'});
    });
  }
};