import { Container } from "@mui/system";
import { Box, CssBaseline, SxProps, Theme } from "@mui/material";
import React from "react";
import { Board } from "../components/Board";
import { AddBoid } from "../components/AddBoid";

const ContainerStyle: SxProps<Theme> = {
  width : "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
};

const NavbarStyle: SxProps<Theme> = {
  width: "100vw",
  height: 60,
  backgroundColor: "grey",
};

const MainContainer: SxProps<Theme> = {
  mt : 1,
  mb : 1,
  width: "100vw",
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  gap: 1
};

export const MainPage: React.FC = ({}) => {
  return (
    <Box sx={ContainerStyle}>
      <CssBaseline />
      <Box sx={NavbarStyle}></Box>

      <Box sx={MainContainer}>
        <AddBoid/>
        <Board />
      </Box>
    </Box>
  );
};
