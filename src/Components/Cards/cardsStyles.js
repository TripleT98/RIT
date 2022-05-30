import styled,{keyframes,css} from "styled-components";
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

let bigGlitch = keyframes`
0% {
    clip: rect(810px, 1000px, 30px, 10px);
  }
  5% {
    clip: rect(160px, 1000px, 498px, 10px);
  }
  10% {
    clip: rect(121px, 1000px, 499px, 10px);
  }
  15% {
    clip: rect(629px, 1000px, 202px, 10px);
  }
  20% {
    clip: rect(236px, 1000px, 786px, 10px);
  }
  25% {
    clip: rect(681px, 1000px, 843px, 10px);
  }
  30% {
    clip: rect(937px, 1000px, 851px, 10px);
  }
  35% {
    clip: rect(317px, 1000px, 799px, 10px);
  }
  40% {
    clip: rect(562px, 1000px, 858px, 10px);
  }
  45% {
    clip: rect(805px, 1000px, 366px, 10px);
  }
  50% {
    clip: rect(17px, 1000px, 877px, 10px);
  }
  55% {
    clip: rect(378px, 1000px, 207px, 10px);
  }
  60% {
    clip: rect(461px, 1000px, 897px, 10px);
  }
  65% {
    clip: rect(626px, 1000px, 724px, 10px);
  }
  70% {
    clip: rect(813px, 1000px, 19px, 10px);
  }
  75% {
    clip: rect(675px, 1000px, 809px, 10px);
  }
  80% {
    clip: rect(810px, 1000px, 145px, 10px);
  }
  85% {
    clip: rect(476px, 1000px, 352px, 10px);
  }
  90% {
    clip: rect(349px, 1000px, 892px, 10px);
  }
  95% {
    clip: rect(85px, 1000px, 318px, 10px);
  }
  100% {
    clip: rect(100px, 1000px, 282px, 10px);
  }
`
let bigGlitchBefore = keyframes`
0% {
    clip: rect(987px, 1000px, 97px, 10px);
  }
  5% {
    clip: rect(113px, 1000px, 229px, 10px);
  }
  10% {
    clip: rect(519px, 1000px, 735px, 10px);
  }
  15% {
    clip: rect(198px, 1000px, 87px, 10px);
  }
  20% {
    clip: rect(898px, 1000px, 432px, 10px);
  }
  25% {
    clip: rect(290px, 1000px, 298px, 10px);
  }
  30% {
    clip: rect(273px, 1000px, 80px, 10px);
  }
  35% {
    clip: rect(417px, 1000px, 978px, 10px);
  }
  40% {
    clip: rect(428px, 1000px, 564px, 10px);
  }
  45% {
    clip: rect(93px, 1000px, 595px, 10px);
  }
  50% {
    clip: rect(322px, 1000px, 89px, 10px);
  }
  55% {
    clip: rect(618px, 1000px, 294px, 10px);
  }
  60% {
    clip: rect(527px, 1000px, 16px, 10px);
  }
  65% {
    clip: rect(478px, 1000px, 158px, 10px);
  }
  70% {
    clip: rect(937px, 1000px, 467px, 10px);
  }
  75% {
    clip: rect(804px, 1000px, 782px, 10px);
  }
  80% {
    clip: rect(360px, 1000px, 533px, 10px);
  }
  85% {
    clip: rect(768px, 1000px, 676px, 10px);
  }
  90% {
    clip: rect(353px, 1000px, 949px, 10px);
  }
  95% {
    clip: rect(32px, 1000px, 884px, 10px);
  }
  100% {
    clip: rect(804px, 1000px, 312px, 10px);
  }
`


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
  @media(max-width: 560px){
    transform: scale(0.8);
    &:hover{
      transform: none;
    }
  }
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
  height: 73%;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
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
    animation: ${glitch_before} 2s infinite;
  }`:""}

`

let StyledMainInfoImg = styled(StyledImg)`
  height: 100%;
  transform: none;
  grid-area: im;
  &:before{
    animation: ${bigGlitchBefore} 2s infinite;
  }
  &:after{
    animation: ${bigGlitch} 2s infinite;
  }

`

let StyledMainInfoInfo = styled.div`
  grid-area: inf;
  font-size: 4rem;
  padding: 20px;
`

let StyledSide = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

let StyledMainInfo = styled(StyledCard)`
  width: 80%;
  min-width: 2000px;
  &:hover{
    transform: none;
  }
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 50% 50%;
  grid-template-areas: "im inf"
                       "im ul";
  grid-gap: 20px;
`

let StyledProp = styled.div`
  color: inherit;
`

export {
  StyledProp,StyledMainInfo,StyledSide,StyledMainInfoInfo,StyledMainInfoImg,StyledImg,StyledUl,StyledInfo,StyledCard,StyledFetch,StyledLi
}
