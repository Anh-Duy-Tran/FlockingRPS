import { Box, SxProps, Theme, Snackbar } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { BoidContext } from "../contexts/BoidProvider";
import { Boid } from "../contexts/reducer";
import { BoidComponent } from "./BoidComponent";
import { useElementSize } from "usehooks-ts";
import updateAllBoid from "../controllers/boids";

const BoardStyle: SxProps<Theme> = {
  height: "100%",
  aspectRatio: "1 / 1",
  border: "dashed",
  position: "relative",
};

const zeroVec = {
  x: 0,
  y: 0,
};

const frameRate : number = 30;

export const Board: React.FC = ({}) => {
  const [frame, setFrame] = useState(0);
  const { state, dispatch } = useContext(BoidContext);
  const [message, setMessage] = useState<string | null>(null);
  const [squareRef, { width }] = useElementSize<HTMLDivElement>();

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    const newBoids: Boid[] = updateAllBoid(state.boids);
    dispatch({ type : "update-all-boid", payload : newBoids });
    setTimeout(() => setFrame(frame + 1), 1000/60);

  }, [state.isRunning, frame]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (state.addingBoidType === null) {
      setMessage(
        "To add rock/paper/scissor to the board, choose the type first!"
      );
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) * 100) / rect.height;
    const y = ((e.clientX - rect.left) * 100) / rect.width;

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
      <Box ref={squareRef} onClick={handleClick} sx={BoardStyle}>
        {state.boids.map((boid, i) => (
          <BoidComponent key={i} boid={boid} width={width} />
        ))}
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
