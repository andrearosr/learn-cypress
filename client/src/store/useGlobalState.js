import { useReducer } from 'react';

const reducer = function(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
      };
    case 'FETCH_JOBS_SUCCESS':
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  };
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, { loggedIn: false, jobs: [] });
  return { globalState, globalDispatch };
}

export default useGlobalState;