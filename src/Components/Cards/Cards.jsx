import styled from "styled-components";
import {PlanetCard, CharCard} from "./Card";
import {useState, useEffect, memo, useContext} from "react";
import swapi from "./../../DAL/DAL";
import Context from "./../../context";
import {useParams} from "react-router-dom";
import Header from "./../Header";
import Filter from "./../FilterBar";

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

  let cards = props.cards;

  if(props.gender && props.gender != "all"){
    cards = cards.filter((e,i)=>e.gender==props.gender);
  }


  return <StyledCards onScroll={props.scrollHandler}>
            <Header />
            {cards?.map((e,i)=>props.type == "planets" ? <PlanetCard key={e.name} {...e} i={i}/> : <CharCard key={e.name} {...e}/>)}
         </StyledCards>
}

function PeopleCards(props){

  let [cards, setCards] = useState([])
  let {planetId} = useParams();
  let [gender, filter] = useState("all");

  useEffect(()=>{
    swapi.getPlanetResidents(planetId)
    .then((data)=>Promise.all(data.map((residentId)=>swapi.getResident(residentId)
    .then((resident=>resident.data)))))
    .then(setCards);

  },[])

  return <><Filter gender={gender} filter={filter}/><Cards gender={gender} type={props.type} cards={cards}/></>
}

/**/

function PlanetCards(props){

  let [cards, setCards] = useState([]);
  let [isFetching, fetch] = useState(true);
  let [currentPage, setPage] = useState(1);
  let [maxCount, setMaxCount] = useState(0);

  useEffect(()=>{
    // cardsRef.addEventListener("scroll", scrollHandler);
      if(isFetching == true){
            swapi.getData(currentPage, props.type)
            .then((data)=>{setCards(prev=>[...prev,...data.data.results]);
            setPage(prevPage=>prevPage+1);setMaxCount(data.data.count);
          }).finally(()=>fetch(false));
      }
      /*return function(){
        cardsRef.removeEventListener("scroll", scrollHandler);
      }*/
  },[isFetching]);

  function scrollHandler(e){
    let scrollTop = e.target.scrollTop;
    let windowHeight =  window.innerHeight;
    let scrollHeight = e.target.scrollHeight;
    if(scrollHeight - windowHeight - scrollTop <= 5500 && !isFetching && maxCount > cards.length){
      fetch(true);
    }
  }

  return <Cards type={props.type} cards={cards} scrollHandler={scrollHandler}/>
}

PeopleCards = memo(PeopleCards);
PlanetCards = memo(PlanetCards);

export {
  PeopleCards, PlanetCards}
