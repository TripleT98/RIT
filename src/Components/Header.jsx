import styled from "styled-components";

let StyledHeader = styled.div`
 color: rgb(254, 223, 65);
 position: absolute;
 font-size: 15vw;
 top: 1500px;
`

export default function Header(){
  return <StyledHeader>
            STAR WARS
         </StyledHeader>
}
