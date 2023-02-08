import { Box, SxProps, Theme, Snackbar } from "@mui/material";
import React, { useContext, useState } from "react";
import { BoidContext } from "../contexts/BoidProvider";
import { Boid } from "../contexts/reducer";
import { BoidComponent } from "./BoidComponent";

const BoardStyle: SxProps<Theme> = {
  height: "100%",
  aspectRatio: "1 / 1",
  border: "dashed",
};

const zeroVec = {
  x: 0,
  y: 0,
};

export const Board: React.FC = ({}) => {
  const { state, dispatch } = useContext(BoidContext);
  const [message, setMessage] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (state.addingBoidType === null) {
      setMessage(
        "To add rock/paper/scissor to the board, choose the type first!"
      );
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.left;
    const y = (e.clientY - rect.top) / rect.top;

    const newBoid: Boid = {
      type: state.addingBoidType,
      position: { x, y },
      velocity: zeroVec,
      acceleration: zeroVec,
    };

    dispatch({ type: "add-new-boid", payload: newBoid });
  };

  return (
    <>
      <Box onClick={handleClick} sx={BoardStyle}>
        {
          state.boids.map(
            boid => <BoidComponent boid={boid}/>
          )
        }
      </Box>
      <Snackbar
        open={message !== null}
        autoHideDuration={1500}
        onClose={() => setMessage(null)}
        message={
          "To add rock/paper/scissor to the board, choose the type first!"
        }
        // action={action}
      />
    </>
  );
};
