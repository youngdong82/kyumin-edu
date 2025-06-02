import React from "react";
import styled from "styled-components";
import VersatileComp from './draggable/VersatileComp';


export default function App() {


  return (
    <Main>
      <VersatileComp />
    </Main >
  );
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #f0f0f0;
`;