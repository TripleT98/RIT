import styled, {keyframes} from "styled-components";

export let float = keyframes`
0%,100% {
    will-change: unset;
    transform: translateY(-10px);
  }
  50% {
    will-change: transform;
    transform: translateY(-30px);
  }
`

export let holographic = keyframes`
  from {
    will-change: box-shadow;
    box-shadow: 0 -75px 5px rgba(0, 252, 252, 0.15), 0 -1px 2px rgba(0, 252, 252, 0.5), 0 -45px 5px rgba(0, 252, 252, 0.15), 0 -2px 3px rgba(0, 252, 252, 0.5), 0 -3px 4px rgba(0, 252, 252, 0.5), 0 -4px 6px rgba(0, 252, 252, 0.5), 0 -5px 10px rgba(0, 252, 252, 0.75), 0 -7px 20px rgba(0, 252, 252, 0.75), 0 -10px 30px rgba(0, 252, 252, 0.75), 0 -15px 40px rgba(0, 252, 252, 0.75), 0 -25px 50px rgba(0, 252, 252, 0.75), 0 -35px 60px rgba(0, 252, 252, 0.85), 0 -45px 70px rgba(0, 252, 252, 0.95), 0 -65px 80px #00fcfc, 0 -75px 90px #00fcfc;
  }
  to {
    will-change: unset;
    box-shadow: 0 -1px 5px rgba(0, 252, 252, 0.15), 0 -1px 2px rgba(0, 252, 252, 0.5), 0 -1px 5px rgba(0, 252, 252, 0.15), 0 -2px 3px rgba(0, 252, 252, 0.5), 0 -3px 4px rgba(0, 252, 252, 0.5), 0 -4px 6px rgba(0, 252, 252, 0.5), 0 -5px 7px rgba(0, 252, 252, 0.75), 0 -7px 10px rgba(0, 252, 252, 0.75), 0 -10px 15px rgba(0, 252, 252, 0.75), 0 -15px 20px rgba(0, 252, 252, 0.75), 0 -25px 25px rgba(0, 252, 252, 0.75), 0 -35px 30px rgba(0, 252, 252, 0.85), 0 -45px 35px rgba(0, 252, 252, 0.95), 0 -65px 40px #00fcfc, 0 -75px 50px #00fcfc;
  }
`

export let containerFade = keyframes`
  0%{
    opacity: 0;
  }
  14%{
    opacity: 0;
  }
  15%{
    opacity: 0.8;
  }
  40%{
    opacity: 0;
  }
  78%{
    opacity: 0.8;
  }
  79%{
    opacity: 0.3;
  }
  80%{
    opacity: 0.7;
  }
  100%{
    opacity: 1;
  }


`

export let containerFade2 = keyframes`
  0%,100%{
    opacity: 1;
  }
  14%{
    opacity: 1;
  }
  15%{
    opacity: 0.6;
  }
  40%{
    opacity: 1;
  }
  78%{
    opacity: 0.4;
  }
  79%{
    opacity: 1;
  }
  80%{
    opacity: 0.7;
  }
`
