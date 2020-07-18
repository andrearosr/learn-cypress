import { useReducer } from 'react';

const reducer = function(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true,
      };
    default:
      return state;
  };
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, { loggedIn: false });

  return { globalState, globalDispatch };
}

export default useGlobalState;