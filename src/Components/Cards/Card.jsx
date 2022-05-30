import {
  StyledProp,StyledMainInfo,StyledSide,StyledMainInfoInfo,StyledMainInfoImg,StyledImg,StyledUl,StyledInfo,StyledCard,StyledFetch,StyledLi
} from "./cardsStyles";
import {memo} from "react";
import {useParams} from "react-router-dom";
import swapi from "./../../DAL/DAL";
import {Link} from "react-router-dom";
import Context from "./../../context";
import {useState, useEffect} from "react";
import {useContext, useRef} from "react";
import {getPlanetId} from "./../../utils";



export function PlanetCard(props){
  let [hovered, hover] = useState(false);

  let planetId = getPlanetId(props.url);

  return   <Link to={`/people/${planetId}/${props.name}`} style={{textDecoration: "none"}}>
            <StyledCard i={props.i} onMouseEnter={()=>{hover(true)}} onMouseLeave={()=>{hover(false)}}
            hovered={hovered} onClick={()=>{props.change(props)}}>
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

function MainInfo(props){

  let [films, setFilms] = useState([]);
  let [residents, setResidents] = useState([]);
  let [hovered, hover] = useState({films:false, residents: false});
  let [fetching, fetch] = useState({films:false, residents: false});
  let [isGlitch, glitch] = useState(false);

  function showResidentsHandler(){
    fetch((prev)=>({...prev, residents: true}));
    let residents = props.residents.map((e,i)=>swapi.getResident(e));
    Promise.all(residents).then((data)=>{setResidents(data.map((e)=>e.data.name));fetch((prev)=>({...prev, residents: false}))});
  }

  function showFilmsHandler(){
    fetch((prev)=>({...prev, films: true}));
    let films = props.films.map((e,i)=>swapi.getFilm(e));
    Promise.all(films).then((data)=>{setFilms(data.map((e)=>e.data.title));fetch((prev)=>({...prev, films: false}))});
  }

  return <StyledMainInfo onMouseEnter={()=>{glitch(true)}} onMouseLeave={()=>{glitch(false)}}>
            <StyledMainInfoImg hovered={isGlitch}/>
            <StyledMainInfoInfo>
              <StyledProp>Name: {props.name}</StyledProp>
              <StyledProp>Climate: {props.climate}</StyledProp>
              <StyledProp>Diameter: {props.diameter} km</StyledProp>
              <StyledProp>Gravity: {props.gravity}</StyledProp>
              <StyledProp>Population: {props.population}</StyledProp>
              <StyledProp>Terrain: {props.terrain}</StyledProp></StyledMainInfoInfo>
            <StyledSide>
            <StyledProp>
              {props.films.length !=0 && <StyledUl
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
              </StyledUl>}
            </StyledProp>
            <StyledProp>
              {props.residents.length != 0 && <StyledUl
               onMouseEnter={()=>{hover((prev)=>({...prev,residents:true}))}} onMouseLeave={()=>{hover((prev)=>({...prev,residents:false}))}}
               hovered={hovered.residents}
               length={residents.length}
               fetching={fetching.residents}
               left={"280px"}
               onClick={()=>{if(residents.length == 0){showResidentsHandler()}}}>
               Residents: {residents.length > 0?residents.map((e,i)=>
                  <StyledLi key={i}>{e}
                  </StyledLi>)
                   : fetching.residents ? <StyledFetch>.</StyledFetch> : ''}
              </StyledUl>}
            </StyledProp>
            </StyledSide>
         </StyledMainInfo>
}

MainInfo = memo(MainInfo);
export {
  MainInfo
};
