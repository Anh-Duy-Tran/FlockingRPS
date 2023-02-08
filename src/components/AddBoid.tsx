import React, { useContext } from "react";
import { Box, SxProps, Theme, ToggleButtonGroup, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import { BoidContext } from "../contexts/BoidProvider";

const AddBoidStyle: SxProps<Theme> = {
  width: "100px",
};

const IconStyle : SxProps<Theme> = {
  fontSize: 30
}

export const AddBoid: React.FC = ({}) => {
  const { state, dispatch } = useContext(BoidContext);

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={state.addingBoidType}
      exclusive
      onChange={(_, nextValue) => dispatch({type: "set-adding-boid-type", payload : nextValue})}
      sx={AddBoidStyle}
    >
      <ToggleButton value="rock" aria-label="list">
        <Typography sx={IconStyle}>🪨</Typography>
      </ToggleButton>
      <ToggleButton value="paper" aria-label="module">
        <Typography sx={IconStyle}>📜</Typography>
      </ToggleButton>
      <ToggleButton value="scissor" aria-label="quilt">
        <Typography sx={IconStyle}>✂️</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  )
};
