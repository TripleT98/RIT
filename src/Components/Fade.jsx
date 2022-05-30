import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {memo} from "react";

let StyledFade = styled.div`
 position: absolute;
 top: 0px;
 left: 0px;
 width: 100%;
 height: 30vh;
 background:linear-gradient(180deg, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%);
 z-index:1;
`

let StyledRedirect = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  font-size: 2rem;
  color: rgba(254, 223, 65, 0.5);
  transition-duration: .3s;
  &:hover{
    color: rgba(254, 223, 65, 1);
  }
`

export default function Fade(props){

  return <StyledFade onClick={()=>{props.change(false)}}>
           {typeof props.isPlanet == "object" ? <Link to="planets"><StyledRedirect>PLANETS</StyledRedirect></Link> : ""}
         </StyledFade>
}
