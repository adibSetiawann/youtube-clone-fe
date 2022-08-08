import React from "react";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval, TailSpin } from "react-loader-spinner";
import styled from "styled-components";
const Spinner = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
//   untuk mengukur bahwa component di center
height: calc(100vh - 56px);
`;

const Loader = () => {
  return (
    <Spinner>
      <Oval height="40" width="40" color="grey" ariaLabel="Loading" align-items="center"/>
    </Spinner>
  );
};

export default Loader;
