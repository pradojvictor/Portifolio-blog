import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import styled from "styled-components";
import { images } from "../../assets";

export const LayoutContainer = styled.div`
    background: url(${images.image1}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;   
`;

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}