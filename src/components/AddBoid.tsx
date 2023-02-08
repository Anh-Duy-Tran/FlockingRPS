import React from "react";
import { Box, SxProps, Theme, ToggleButtonGroup, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';

const AddBoidStyle: SxProps<Theme> = {
  width: "100px",
};

const IconStyle : SxProps<Theme> = {
  fontSize: 30
}

export const AddBoid: React.FC = ({}) => {
  return (
    <ToggleButtonGroup
      orientation="vertical"
      exclusive
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
