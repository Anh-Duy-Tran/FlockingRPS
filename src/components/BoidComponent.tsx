import { SxProps, Theme, Typography } from '@mui/material';
import React from 'react'
import { Boid } from '../contexts/reducer';


const BoidStyle = (x : number, y : number, width : number) : SxProps<Theme> => {
  const fontSize : number = width * 0.035;
  const offSetPercentage : number = ((fontSize / 2)*100) / width;
  return {
    userSelect: "none",
    fontSize: `${fontSize}px`,
    position: "absolute",
    top: `${x - offSetPercentage}%`,
    left: `${y - offSetPercentage}%`
  }
}


interface BoidComponentProps {
  boid : Boid;
  width : number
}

export const BoidComponent: React.FC<BoidComponentProps> = ({ boid, width }) => {
  console.log(boid)
  return (
    <Typography sx={BoidStyle(boid.position.x, boid.position.y, width)}>
      {
        boid.type === "rock" ? "🪨" : boid.type === "paper" ? "📜" : "✂️"
      }
    </Typography>
  );
}