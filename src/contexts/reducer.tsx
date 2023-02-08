interface Vector {
  x : number,
  y: number
}

type BoidType = "rock" | "paper" | "scissor";

export interface Boid {
  type : BoidType
  
  position : Vector
  velocity : Vector
  acceleration : Vector
}

export type Action = 
  | { type : "set-adding-boid-type"; payload : BoidType | null }
  | { type : "add-new-boid"; payload : Boid }


export const reducer = (
  state: BoidStateType,
  action: Action
  ): BoidStateType => {
    
    switch (action.type) {
      
      case "set-adding-boid-type": {
        return { 
          ...state,
          addingBoidType : action.payload
        };
      }
      
      case "add-new-boid" : {
        return {
          ...state,
          boids : [...state.boids, action.payload]
        }
      }
      
      default: {
        return state;
      }
    }
  };

export interface BoidStateType {
  boids: Array<Boid>;
  addingBoidType : BoidType | null;
  boidSize : number;
  isRunning : boolean
}
  
export const initialState: BoidStateType = {
  boids: [],
  addingBoidType: null,
  boidSize : 20,
  isRunning : false
};
