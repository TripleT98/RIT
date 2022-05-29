import styled, {keyframes} from "styled-components";
import {PlanetCard, CharCard} from "./Card";
import {useState, useEffect, memo, useContext} from "react";
import swapi from "./../../DAL/DAL";
import Context from "./../../context";
import {useParams} from "react-router-dom";
import Header from "./../Header";
import Filter from "./../FilterBar";
import rebels from "./../../img/rebels.png";

let fade = keyframes`
  0%, 100%{
    opacity: 1;
  }
  50%{
    opacity: .5;
  }
`

let Empty = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`

let StyledFetch = styled.div`
  background: url(${rebels}) no-repeat;
  background-position: cover;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height:100px;
  animation: ${fade} 1s infinite linear;
`

let StyledCards = styled.div`
  background: transparent;
  border: 1px solid black;
  display: flex;
  flex: none;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 300%;
  width: 200%;
  margin: auto;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
  transform: translateZ(-600px) rotateX(30deg) translateY(-141vh) translateX(-25%);
  position: relative;
  perspective: 450px;
`


function Cards(props){

  let epmty = !props.fetching && props.cards.length == 0;
  let cards = props.cards;

  if(props.gender && props.gender != "all"){
    cards = cards.filter((e,i)=>e.gender==props.gender);
  }


  return <StyledCards onScroll={props.scrollHandler}>
            <Header />
            {epmty?<Empty>Empty</Empty>:cards?.map((e,i)=>props.type == "planets" ? <PlanetCard key={e.name} {...e} i={i}/> : <CharCard key={e.name} {...e}/>)}
         </StyledCards>
}

function PeopleCards(props){

  let [cards, setCards] = useState([])
  let {planetId} = useParams();
  let [gender, filter] = useState("all");
  let [fetching, fetch] = useState(false);

  useEffect(()=>{
    fetch(true);
    swapi.getPlanetResidents(planetId)
    .then((data)=>Promise.all(data.map((residentId)=>swapi.getResident(residentId)
    .then((resident=>resident.data)))))
    .then(setCards)
    .then(()=>{fetch(false)});

  },[])

  return fetching?<StyledFetch></StyledFetch>:<><Filter gender={gender} filter={filter}/><Cards fetching={fetching} gender={gender} type={props.type} cards={cards}/></>
}

/**/

function PlanetCards(props){

  let [cards, setCards] = useState([]);
  let [isFetching, fetch] = useState(true);
  let [currentPage, setPage] = useState(1);
  let [maxCount, setMaxCount] = useState(0);

  useEffect(()=>{
      if(isFetching == true){
            swapi.getData(currentPage, props.type)
            .then((data)=>{setCards(prev=>[...prev,...data.data.results]);
            setPage(prevPage=>prevPage+1);setMaxCount(data.data.count);
          }).finally(()=>fetch(false));
      }
  },[isFetching]);

  function scrollHandler(e){
    let scrollTop = e.target.scrollTop;
    let windowHeight =  window.innerHeight;
    let scrollHeight = e.target.scrollHeight;
    if(scrollHeight - windowHeight - scrollTop <= 5500 && !isFetching && maxCount > cards.length){
      fetch(true);
    }
  }

  return isFetching && cards.length == 0?<StyledFetch></StyledFetch>:<Cards fetching={isFetching} type={props.type} cards={cards} scrollHandler={scrollHandler}/>
}

PeopleCards = memo(PeopleCards);
PlanetCards = memo(PlanetCards);

export {
  PeopleCards, PlanetCards}
