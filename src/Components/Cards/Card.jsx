import styled from "styled-components";
import {Link} from "react-router-dom";
import Context from "./../../context";
import {useState} from "react";
import {useContext} from "react";
import {getPlanetId} from "./../../utils";
import planet1 from "./../../img/1.png";
import planet2 from "./../../img/2.png";

let StyledCard = styled.div`
  background-color: black;
  width: 1100px;
  height: 1070px;
  margin: 10px;
  padding: 30px;
  border: solid #ffc909 10px;
  border-radius: 10px;
  color: white;
  font-size: 3em;
  position: relative;
  z-index: 100;
  top: 2000px;
  transition-duration: .5s;
  &:hover{
    color: black;
    background-color: #ffc909;
    transition-duration: .5s;
    transform: ${({i})=>i%2==0?"translateX(100px)":"translateX(-100px)"};
  }
  perspective: 450px;
`

let StyledInfo = styled.div`
  height: 50%;
  padding: 50px;

`

let StyledImg = styled.div`
  height: 50%;
  padding: 50px 0 0 50px;
  background: ${({hovered})=>hovered?`url(${planet2}) no-repeat`:`url(${planet1}) no-repeat`};
  background-size: contain;
  transform: translateZ(100px);
`

let StyledProp = styled.div`
  color: inherit;
`

export function PlanetCard(props){

  let [hovered, hover] = useState(false);

  let planetId = getPlanetId(props.url);

  return   <Link to={`/people/${planetId}/${props.name}`} style={{textDecoration: "none"}}>
            <StyledCard i={props.i} onMouseEnter={()=>{hover(true)}} onMouseLeave={()=>{hover(false)}}>
              <StyledImg hovered={hovered}/>
              <StyledInfo>
                <StyledProp>Name: {props.name}</StyledProp>
                <StyledProp>Climate: {props.climate}</StyledProp>
                <StyledProp>Diameter: {props.diameter}</StyledProp>
                <StyledProp>Gravity: {props.gravity}</StyledProp>
                <StyledProp>Population: {props.population}</StyledProp>
                <StyledProp>Terrain: {props.terrain}</StyledProp>
              </StyledInfo>
            </StyledCard>
         </Link>

}

export function CharCard(props){

  return  <StyledCard>
                <StyledProp>Name: {props.name}</StyledProp>
                <StyledProp>Gender: {props.gender}</StyledProp>
                <StyledProp>Birth year: {props.birth_year}</StyledProp>
                <StyledProp>Height: {props.height}</StyledProp>
                <StyledProp>Mass: {props.mass}</StyledProp>
          </StyledCard>
}
