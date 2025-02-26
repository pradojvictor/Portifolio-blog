import styled from "styled-components";
import Nav from "../Nav";

export const HeaderContainer = styled.header`
    width:100%;
    height: 5rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10rem;
`;

export function Header() {
    return(
        <HeaderContainer>
            <h1></h1>
            <Nav/>
        </HeaderContainer>
    )
}