import styled, {createGlobalStyle} from "styled-components";
import Container from "./Container";
import {BrowserRouter} from "react-router-dom";
import Fade from "./Components/Fade";
import Stars from "./Components/Stars";


let Global = createGlobalStyle`

*{
  margin: 0px;
  font-weight: bold;
  border-color: rgb(254, 223, 65);
  box-sizing: border-box;
}
html,body{
  overflow: hidden;
  height: 100%;
}
`

let StyledApp = styled.div`
  height: 100vh;
  border: 1px solid black;
  padding: 2px;
  background-color: black;
`

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <Stars />
        <Fade />
        <Global />
        <Container />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
