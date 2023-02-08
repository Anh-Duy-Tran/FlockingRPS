import { SxProps, Theme, Typography } from '@mui/material';
import React from 'react'
import { Boid } from '../contexts/reducer';


const BoidStyle = (x : number, y : number) : SxProps<Theme> => {
  return {
    userSelect: "none",
    fontSize: 20,
    position: "absolute",
    top: `${x}%`,
    left: `${y}%`
  }
}


interface BoidComponentProps {
  boid : Boid
}

export const BoidComponent: React.FC<BoidComponentProps> = ({ boid }) => {
  console.log(boid)
  return (
    <Typography sx={BoidStyle(boid.position.x, boid.position.y)}>
      {
        boid.type === "rock" ? "🪨" : boid.type === "paper" ? "📜" : "✂️"
      }
    </Typography>
  );
}