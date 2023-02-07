import { Container } from "@mui/system";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { BoidContext } from "../contexts/BoidProvider";


export interface Boid {
  position : {
    x : number,
    y : number
  }

  velocity : {
    x : number,
    y : number
  }
}

const Boid = () => {
  const {state, dispatch } = useContext(BoidContext);

  useEffect(() => {
    dispatch({ type : "test"})
  }, [])

  return (
    <>

    </>
  )
}

export default Boid;