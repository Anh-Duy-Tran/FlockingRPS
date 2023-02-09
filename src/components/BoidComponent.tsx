import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import { Boid } from "../contexts/reducer";

const BoidStyle = (x: number, y: number, width: number): SxProps<Theme> => {
  const fontSize: number = width * 0.03;

  return {
    transform: "translate(-50%, -50%)",
    userSelect: "none",
    fontSize: `${fontSize}px`,
    position: "absolute",
    top: `${x}%`,
    left: `${y}%`,
    transition: "0.1s ease-in-out",
  };
};

const ArrowStyle = (boid : Boid, width: number): SxProps<Theme> => {
  const fontSize: number = width * 0.06;
  return {
    color: "red",
    transform: "translate(-50%, -100%)",
    userSelect: "none",
    fontSize: `${fontSize}px`,
    position: "absolute",
    top: `${boid.position.x}%`,
    left: `${boid.position.y}%`,
    transition: "0.1s ease-in-out",
  };
};

const WrapperStyle = (boid : Boid, width : number) : SxProps<Theme> => {
  return {
    ...ArrowStyle(boid, width),
    transformOrigin : "center bottom", 
    transform : `rotate(${Math.atan2(boid.velocity.x, boid.velocity.y) + Math.PI/2}rad)`
  }
}

interface BoidComponentProps {
  boid: Boid;
  width: number;
  drawVec: boolean;
}

export const BoidComponent: React.FC<BoidComponentProps> = ({
  boid,
  width,
  drawVec
}) => {
  return (
    <>
      {
        drawVec

        ? 
        <Box sx={WrapperStyle(boid, width)}>
          <Typography sx={ArrowStyle(boid, width)} >
              ↑
          </Typography>
        </Box>
        : null
      }
        <Typography sx={BoidStyle(boid.position.x, boid.position.y, width)}>
          {boid.type === "rock" ? "🪨" : boid.type === "paper" ? "📜" : "✂️"}
        </Typography>
    </>
  );
};
