import styled from "styled-components";
import {useRef, useEffect, useState} from "react";

let StyledStars = styled.canvas`
  position: absolute;
  top: 0xp;
  left: 0px;
  background: transparent;
  pointer-events: none;
  z-index: 3;
`
export default function Stars(){
  useEffect(()=>{
    let cnv = ref.current;
    let ctx = cnv.getContext("2d");
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    let max = 2;
    let min = 1;

let x = 0;
let y = 0;

let num = 300;

ctx.fillStyle = "white";

for(let i = 0; i < num*3; i++){

  ctx.beginPath();
  x = Math.floor(Math.random()*window.innerWidth);
  y = Math.floor(Math.random()*window.innerHeight);

  let radius = Math.ceil(Math.random()*max) + min;

  ctx.arc(x,y,radius,0, Math.PI*2);
  ctx.fill();
  ctx.closePath();

}
  },[])

  let ref = useRef();

  return <StyledStars ref={ref}/>
}
