import { Box, SxProps, Theme } from "@mui/material";
import React from "react";

const BoardStyle: SxProps<Theme> = {
  height: "100%",
  aspectRatio: "1 / 1",
  // backgroundColor: "black",
  border: "dashed"
};

export const Board: React.FC = ({}) => {
  return <Box sx={BoardStyle}></Box>;
};
