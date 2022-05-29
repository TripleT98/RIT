import styled,{keyframes,css} from "styled-components";
import {useParams} from "react-router-dom";
import swapi from "./../../DAL/DAL";
import {Link} from "react-router-dom";
import Context from "./../../context";
import {useState, useEffect} from "react";
import {useContext, useRef} from "react";
import {getPlanetId} from "./../../utils";
import planet1 from "./../../img/1.png";
import * as s from "./../FilterBarAnimation";

let glitch = keyframes`
0% {
    clip: rect(37px, 500px, 149px, 10px);
  }
  5% {
    clip: rect(118px, 500px, 416px, 10px);
  }
  10% {
    clip: rect(287px, 500px, 180px, 10px);
  }
  15% {
    clip: rect(128px, 500px, 4px, 10px);
  }
  20% {
    clip: rect(324px, 500px, 434px, 10px);
  }
  25% {
    clip: rect(275px, 500px, 379px, 10px);
  }
  30% {
    clip: rect(249px, 500px, 255px, 10px);
  }
  35% {
    clip: rect(153px, 500px, 57px, 10px);
  }
  40% {
    clip: rect(120px, 500px, 464px, 10px);
  }
  45% {
    clip: rect(206px, 500px, 99px, 10px);
  }
  50% {
    clip: rect(317px, 500px, 279px, 10px);
  }
  55% {
    clip: rect(185px, 500px, 463px, 10px);
  }
  60% {
    clip: rect(39px, 500px, 421px, 10px);
  }
  65% {
    clip: rect(101px, 500px, 49px, 10px);
  }
  70% {
    clip: rect(207px, 500px, 455px, 10px);
  }
  75% {
    clip: rect(101px, 500px, 37px, 10px);
  }
  80% {
    clip: rect(331px, 500px, 44px, 10px);
  }
  85% {
    clip: rect(115px, 500px, 20px, 10px);
  }
  90% {
    clip: rect(224px, 500px, 308px, 10px);
  }
  95% {
    clip: rect(222px, 500px, 232px, 10px);
  }
  100% {
    clip: rect(152px, 500px, 322px, 10px);
  }
`

let glitch_before = keyframes`
0% {
    clip: rect(37px, 500px, 149px, 10px);
  }
  5% {
    clip: rect(118px, 500px, 416px, 10px);
  }
  10% {
    clip: rect(287px, 500px, 180px, 10px);
  }
  15% {
    clip: rect(128px, 500px, 4px, 10px);
  }
  20% {
    clip: rect(324px, 500px, 434px, 10px);
  }
  25% {
    clip: rect(275px, 500px, 379px, 10px);
  }
  30% {
    clip: rect(249px, 500px, 255px, 10px);
  }
  35% {
    clip: rect(153px, 500px, 57px, 10px);
  }
  40% {
    clip: rect(120px, 500px, 464px, 10px);
  }
  45% {
    clip: rect(206px, 500px, 99px, 10px);
  }
  50% {
    clip: rect(317px, 500px, 279px, 10px);
  }
  55% {
    clip: rect(185px, 500px, 463px, 10px);
  }
  60% {
    clip: rect(39px, 500px, 421px, 10px);
  }
  65% {
    clip: rect(101px, 500px, 49px, 10px);
  }
  70% {
    clip: rect(207px, 500px, 455px, 10px);
  }
  75% {
    clip: rect(101px, 500px, 37px, 10px);
  }
  80% {
    clip: rect(331px, 500px, 44px, 10px);
  }
  85% {
    clip: rect(115px, 500px, 20px, 10px);
  }
  90% {
    clip: rect(224px, 500px, 308px, 10px);
  }
  95% {
    clip: rect(222px, 500px, 232px, 10px);
  }
  100% {
    clip: rect(152px, 500px, 322px, 10px);
  }`

let unfade = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`

let fetch = keyframes`
0%,100%{
  opacity: 1;
}
50%{
  opacity:0;
}
`

let StyledFetch = styled.span`
  &:before{
    content:'.';
    animation: ${fetch} linear infinite .9s 0s;
  }
  &:after{
    content:'.';
    animation: ${fetch} linear infinite .9s .6s;
  }
  animation: ${fetch} linear infinite .9s .3s;
`

let StyledLi = styled.li`
  animation: ${unfade} .3s linear forwards;
`

let StyledCard = styled.div`
  background-color: black;
  width: 1100px;
  height: 1070px;
  margin: 10px;
  padding: 30px;
  border:${({hovered})=>hovered?"solid rgba(2, 196, 244, .7) 10px":"solid #ffc909 10px"};
  border-radius: 10px;
  color: white;
  font-size: 3em;
  position: relative;
  z-index: 100;
  top: 2000px;
  transition-duration: .5s;
  &:hover{
    transition-duration: .5s;
    transform: ${({i})=>i%2==0?"translateX(100px)":"translateX(-100px)"};
  }
  perspective: 450px;
  animation: ${unfade} .3s linear forwards;
`

let StyledInfo = styled.div`
  height: 50%;
  padding: 50px;
  ${({hovered})=>hovered?css`
    animation: ${s.containerFade2} 2s linear infinite;
    color: rgba(2, 196, 244, .7);
  `:""};
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
`

let StyledUl = styled.ul`
  position: relative;
  &:after{
    content:'';
    width: 30px;
    height: 30px;
    background-color: ${({hovered})=>hovered?"rgba(2, 196, 244, .7)":"#ffc909"};
    opacity: ${({length, fetching})=>length>0 || fetching?"0":"1"};
    position: absolute;
    top: 20px;
    left: ${({left})=>left};
    clip-path: polygon(0 0, 100% 0, 50% 100%, 0 0);
    cursor: ${({hovered})=>hovered?"pointer":"default"};
  }
`

let StyledImg = styled.div`
  height: 50%;
  padding: 50px 0 0 50px;
  background: url(${planet1}) no-repeat;
  background-size: contain;
  transform: translateZ(100px);
  position: relative;
  ${({hovered})=>hovered?css`
  &::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 6px;
    background: url(${planet1}) no-repeat;
    background-size: contain;
    animation: ${glitch} 2s infinite;
  }
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: -6px;
    background: url(${planet1}) no-repeat;
    background-size: contain;
    clip: rect(0px,500px, 500px, 0px);
    animation: ${glitch_before} 2s infinite;
  }`:""}

`



let StyledProp = styled.div`
  color: inherit;
`

export function PlanetCard(props){
  let [hovered, hover] = useState(false);

  let planetId = getPlanetId(props.url);

  return   <Link to={`/people/${planetId}/${props.name}`} style={{textDecoration: "none"}}>
            <StyledCard i={props.i} onMouseEnter={()=>{hover(true)}} onMouseLeave={()=>{hover(false)}}
            hovered={hovered} onClick={()=>{props.change((prev)=>!prev)}}>
              <StyledImg hovered={hovered}/>
              <StyledInfo hovered={hovered}>
                <StyledProp>Name: {props.name}</StyledProp>
                <StyledProp>Climate: {props.climate}</StyledProp>
                <StyledProp>Diameter: {props.diameter} km</StyledProp>
                <StyledProp>Gravity: {props.gravity}</StyledProp>
                <StyledProp>Population: {props.population}</StyledProp>
                <StyledProp>Terrain: {props.terrain}</StyledProp>
              </StyledInfo>
            </StyledCard>
         </Link>

}

export function CharCard(props){

  let [hovered, hover] = useState({films:false,starships: false, vehicles: false});
  let [films, setFilms] = useState([]);
  let [vehicles, setVehicles] = useState([]);
  let [starships, setStarships] = useState([]);
  let [fetching, fetch] = useState({films:false,starships: false, vehicles: false});

  function showFilmsHandler(){
    fetch((prev)=>({...prev, films: true}));
    let films = props.films.map((e,i)=>swapi.getFilm(e));
    Promise.all(films).then((data)=>{setFilms(data.map((e)=>e.data.title));fetch((prev)=>({...prev, films: false}))});
  }

  function showStarshipsHandler(){
    fetch((prev)=>({...prev, starships: true}));
    let starships = props.starships.map((e,i)=>swapi.getStarship(e));
    Promise.all(starships).then((data)=>{setStarships(data.map((e)=>e.data.name));fetch((prev)=>({...prev, starships: false}))});
  }

  function showVehiclesHandler(){
    fetch((prev)=>({...prev, vehicles: true}));
    let vehicles = props.vehicles.map((e,i)=>swapi.getVehicle(e));
    Promise.all(vehicles).then((data)=>{setVehicles(data.map((e)=>e.data.name));fetch((prev)=>({...prev, vehicles: false}))});
  }


  let {planet} = useParams();
  return  <StyledCard>
                <StyledProp>Name: {props.name}</StyledProp>
                <StyledProp>Gender: {props.gender != "unknown"?props.gender !="n/a"?props.gender:"not available":"????????"}</StyledProp>
                <StyledProp>Birth year: {props.birth_year != "unknown"?props.birth_year:"????????"}</StyledProp>
                <StyledProp>Height: {props.height != "unknown"?props.height + " cm":"????????"}</StyledProp>
                <StyledProp>Mass: {props.mass != "unknown"?props.mass + " kg":"????????"} </StyledProp>
                <StyledProp>Homeworld: {planet}</StyledProp>
                <StyledProp>
                  <StyledUl
                   onMouseEnter={()=>{hover((prev)=>({...prev,films:true}))}} onMouseLeave={()=>{hover((prev)=>({...prev,films:false}))}}
                   hovered={hovered.films}
                   length={films.length}
                   fetching={fetching.films}
                   left={"200px"}
                   onClick={()=>{if(films.length == 0){showFilmsHandler()}}}>
                   Films: {films.length > 0?films.map((e,i)=>
                      <StyledLi key={i}>{e}
                      </StyledLi>)
                       : fetching.films ? <StyledFetch>.</StyledFetch> : ''}
                  </StyledUl>
                </StyledProp>
                {props.starships.length >0 ?<StyledProp>
                  <StyledUl
                   onMouseEnter={()=>{hover((prev)=>({...prev,starships:true}))}} onMouseLeave={()=>{hover((prev)=>({...prev,starships:false}))}}
                   hovered={hovered.starships}
                   length={starships.length}
                   fetching={fetching.starships}
                   left={"280px"}
                   onClick={()=>{if(starships.length == 0){showStarshipsHandler()}}}>
                   Starships: {starships.length > 0?starships.map((e,i)=>
                      <StyledLi key={i}>{e}
                      </StyledLi>)
                       : fetching.starships ? <StyledFetch>.</StyledFetch> : ''}
                  </StyledUl>
                </StyledProp>:""}
                {props.vehicles.length>0?<StyledProp>
                  <StyledUl
                   onMouseEnter={()=>{hover((prev)=>({...prev,vehicles:true}))}} onMouseLeave={()=>{hover((prev)=>({...prev,vehicles:false}))}}
                   hovered={hovered.vehicles}
                   length={vehicles.length}
                   fetching={fetching.vehicles}
                   left={"258px"}
                   onClick={()=>{if(vehicles.length == 0){showVehiclesHandler()}}}>
                   Vehicles: {vehicles.length > 0?vehicles.map((e,i)=>
                      <StyledLi key={i}>{e}
                      </StyledLi>)
                       : fetching.vehicles ? <StyledFetch>.</StyledFetch> : ''}
                  </StyledUl>
                </StyledProp>:''}
          </StyledCard>
}
