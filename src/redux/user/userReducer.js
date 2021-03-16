// A reducer is a function that gets two properties, a state object that represents the last state, or the initial state. Then it receives an action, which is an object that has a type, a string value, a name that tells us what specific action it is.

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
