import { Boid } from "../components/Boid";

export interface BoidStateType {
  boids : Array<Boid> | null;
}

export const reducer = ( state: BoidStateType, action: { type: string; } ) : BoidStateType => {
  switch (action.type) {
    
    case "" : {
      return {
        ...state
      }
    }

    case "test" : {
      console.log("test dispatch");
      return {...state};
    }

    default : {
      return state
    }


  };

}

export const initialState : BoidStateType = {
  boids : []
}