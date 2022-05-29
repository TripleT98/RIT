import {PeopleCards, PlanetCards} from "./Components/Cards/Cards";
import styled from "styled-components";
import {useState} from "react";
import {Routes, Route, useNavigate, Navigate} from "react-router-dom";
import Context from "./context";
import Fade from "./Components/Fade";


let StyledContainer = styled.div`
 border: 1px solid black;
 height: 100%;
 perspective: 500px;
 position: relative;
 overflow: visible;
 background: transparent;
`

function Container() {

  let [isPlanet, change] = useState(true);

  return (
      <StyledContainer>
        <Fade isPlanet={isPlanet} change={change}/>
        <Routes>
          <Route path="planets" element={<PlanetCards type="planets" change={change}/>} />
          <Route path="people/:planetId/:planet" element={<PeopleCards type="people"/>} />
          <Route path="/" element={<Navigate replace to="planets"/>}/>
        </Routes>
      </StyledContainer>
  );
}


export default Container;
