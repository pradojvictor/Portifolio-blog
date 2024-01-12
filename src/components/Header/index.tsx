import styled from "styled-components";
import Nav from "../Nav";

export const HeaderContainer = styled.header`
    width:100%;
    height: 5rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export function Header() {
    return(
        <HeaderContainer>
            <h1>prado</h1>
            <Nav/>
        </HeaderContainer>
    )
}