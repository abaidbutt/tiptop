import { createContext, useReducer } from "react";
const Context = createContext();
const initState = {
  auth: false,
  role: "buyer",
  current: "signin",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      return { ...state, auth: true };
    case "SIGNOUT":
      return { ...state, auth: false, role: "buyer", current: "signin" };
    case "AUTH":
      let prevstate = { ...state };
      action.payload?.current && (prevstate.current = action.payload.current);
      action.payload?.role && (prevstate.role = action.payload.role);
      return prevstate;

    default:
      return state;
  }
};
const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, Provider };
