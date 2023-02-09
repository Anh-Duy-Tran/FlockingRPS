import { Boid } from "../contexts/reducer";

interface Vector {
  x : number,
  y : number
}

const PERCEPTION_RADIUS : number = 10;


const vecAdd = (a : Vector, b : Vector) : Vector => {
  return {
    x : a.x + b.x,
    y : a.y + b.y
  }
}

const updateAllBoid = (boids : Boid[]) : Boid[] => {
  boids = boids.map(
    boid => {
      boid.position = vecAdd(boid.position, boid.velocity);
      boid.velocity = vecAdd(boid.velocity, boid.acceleration);
      return boid;
    }
  )
  return boids;
};

export default updateAllBoid;
