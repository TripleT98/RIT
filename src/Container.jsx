import {PeopleCards, PlanetCards} from "./Components/Cards/Cards";
import styled from "styled-components";
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Context from "./context";

let StyledContainer = styled.div`
 border: 1px solid black;
 height: 100%;
 perspective: 500px;
 position: relative;
 overflow: visible;
 background: transparent;
`

function Container() {

  let [currPlanet, setPlanet] = useState("");


  return (
    <Context.Provider value={{setPlanet, currPlanet}}>
      <StyledContainer>
        <Routes>
          <Route path="planets" element={<PlanetCards type="planets" setPlanet={setPlanet}/>} />
          <Route path="people/:planetId/:planet" element={<PeopleCards type="people" planet={currPlanet}/>} />
        </Routes>
      </StyledContainer>
    </Context.Provider>
  );
}


export default Container;
