import styled from "styled-components";

let StyledFade = styled.div`
 color: rgb(254, 223, 65);
 position: absolute;
 top: 0px;
 left: 0px;
 width: 100%;
 height: 30vh;
 background:linear-gradient(180deg, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%);
 z-index:1;
`

export default function Fade(){
  return <StyledFade/>
}
