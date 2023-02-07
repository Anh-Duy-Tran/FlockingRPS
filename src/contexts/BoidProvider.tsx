import { useContext, createContext, useReducer } from "react";
import { reducer, initialState, BoidStateType } from "./reducer";

interface BoidContextValue {
  state: BoidStateType;
  dispatch: React.Dispatch<{ type: string }>;
}

export const BoidContext = createContext<BoidContextValue>({ state : initialState, dispatch : () => {}});

interface Props {
  children: React.ReactNode;
}

export const BoidProvider : React.FC<Props> = ({children}: { children?: React.ReactNode }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BoidContext.Provider value={{state, dispatch}}>
    { children }
    </BoidContext.Provider>                   
  )
}
