export default function createStore(reducer){
  let state = [];
  let listeners = [];

  const getState = () => {
    return state;
  }

  const subscribe = (fnc) => {
      listeners.push(fnc)
  }

  const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach(listener => listener())
  }


  return {getState: getState, subscribe: subscribe, dispatch: dispatch}
}
