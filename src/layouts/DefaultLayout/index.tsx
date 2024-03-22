/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import styled from "styled-components";
import { images } from "../../assets";
import { useState } from "react";

export const LayoutContainer = styled.div`
    background: url(${images.image1}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden; 
    .div-container{
        width:95%;
        height: 98%
    }
    .curso-circle{
        position: fixed;
        top: 0;
        left: 0;
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        background-color: transparent;
        border: 0.1rem solid rgba(255,255,255,0.7);
        z-index: 10;
        transform: translate(calc(-50%), calc(-50%));
        pointer-events:none;
        transition-property: transform;
        transition: .1s;
    }
    .curso-point{
        position: fixed;
        top: 0;
        left: 0;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: white;
        border: 0.1rem solid rgba(255,255,255,0.7);
        z-index: 10;
        transform: translate(calc(-50%), calc(-50%));
        pointer-events:none;
        transition: .2s;
    }

    @media (max-width: 54rem) {
        padding: 0 1rem;
    }
    //ajusta igual a minima tela
`;

export function DefaultLayout() {

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
    });

    return (
        <LayoutContainer>
            <div style={{left:cursorX + "px", top:cursorY + "px"}} className="cursor curso-circle"></div>
            <div style={{left:cursorX + "px", top:cursorY + "px"}} className="cursor curso-point"></div>
            <div className="div-container">
                <Header />
                <Outlet />
            </div>
        </LayoutContainer >
    )
}