import styled, {keyframes} from "styled-components";
import {useState} from "react";
import * as styles from "./FilterBarAnimation";

//animation: ${fade} 2s linear infinite;

let fade = keyframes`
  0%,100%{
      box-shadow: 1px 1px 5px 2px rgba(1, 107, 217, 0.8),
                  inset 1px 1px 5px 2px rgba(1, 107, 217, 0.8);
  }
  50%{
      box-shadow: 1px 1px 5px 3px rgba(1, 107, 217, 0.8),
                  inset 1px 1px 5px 2px rgba(1, 107, 217, 0.8);
  }
`

let Holo = styled.div`
  width: 100%;
  height: 10px;
  border: 1px solid white;
  position: relative;
  z-index: 2;
  width: 150px;
  height: 5px;
  margin: -5px auto 0;
  background-color: rgba(0, 252, 252, 0.35);
  border-radius: 100%;
  filter: blur(2.5px);
  transform: perspective(100px) rotateX(-30deg);
  transform-style: preserve-3d;
  animation: ${styles.holographic} 2s infinite alternate;
  &:after {
  position: absolute;
  left: -10px;
  right: -10px;
  content: "";
  height: 10px;
  background-color: rgba(0, 252, 252, 0.5);
  border-radius: 100%;
  filter: blur(2.5px);
}
`

let StyledFilter = styled.div`
 position:absolute;
 top: 500px;
 left:60px;
 width: 150px;
 @media(max-width: 1550px){
    top: 350px;
    left: 60px;
  }
`
let StyledContainer = styled.div`
  position: relative;
  top: -50px;
  left: 0px;
  box-shadow: 0px 0px 4px 1px rgba(0, 252, 252, 0.5),
              inset 0px 0px 4px 1px rgba(0, 252, 252, 0.5);
  animation: ${styles.float} 3s linear infinite;
  padding: 10px;
  animation: ${styles.containerFade} 2s linear forwards,
             ${styles.containerFade2} 2s 2s linear infinite;
`

let StyledButton = styled.div`
  color: rgba(0, 252, 252, 0.5);
  position: relative;
  height: 30px;
  width: 100%;
  padding: 4px 0 0 10px;
  &:hover{
    background-color: rgba(0, 252, 252, 0.1);
  }
  &:after{
    content: '';
    height: 15px;
    width: 15px;
    background-color: ${({currGender,gender})=>currGender == gender ? "rgba(0, 252, 252, 0.1)" : "black"};
    position: absolute;
    top: 7.3px;
    right: 7.6px;
    border-radius: 50%;
    transition-duration: .3s;
  }
  &:before{
    content: '';
    height: 20px;
    width: 20px;
    background-color: rgba(0, 252, 252, 0.5);
    position: absolute;
    top: 5px;
    right: 5px;
    border-radius: 50%;
  }
`

export default function Filter(props){
  let genders = ["all", "male", "female", "unknown", "n/a"];

  return <StyledFilter>
            <StyledContainer>
              {genders.map((e,i)=><StyledButton key={i} onClick={(e)=>{props.filter(e.target.textContent)}} currGender={props.gender} gender={e}>{e}</StyledButton>)}
            </StyledContainer>
            <Holo />
         </StyledFilter>
}
