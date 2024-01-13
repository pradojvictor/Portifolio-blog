/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import styled from "styled-components"

export const BlogContaine = styled.div`
    width: 100%;
    background-color: #F9F4EC;
    display: flex;
    border-radius: 1rem;
    gap: 2rem; //opcional

    justify-content: center;

    .curso-circle{
        position: fixed;
        top: 0;
        left: 0;
        width: 3.125rem;
        height: 3.125rem;
        border-radius: 50%;
        background-color: transparent;
        border: 0.1rem solid rgba(119, 9, 9, 0.7);
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
        background-color: rgb(119, 9, 9);
        border: 0.1rem solid rgba(119, 9, 9, 0.7);
        z-index: 10;
        transform: translate(calc(-50%), calc(-50%));
        pointer-events:none;
        transition: .2s;
    }
`;
export const TitleContaine = styled.div`
    width: 15rem;
    height: 8rem;
    text-align: center;

`;

export function Blog() {

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
    });

    return (
        <BlogContaine>
            <div style={{left:cursorX + "px", top:cursorY + "px"}} className="cursor curso-circle"></div>
            <div style={{left:cursorX + "px", top:cursorY + "px"}} className="cursor curso-point"></div>
            <TitleContaine >
                <h1>blog</h1>
                <p>ola aqui e uma parte do fsfhfhfshfsfshf  jjjjjjjjjjjjjjjjj jjjjjjj fsfhssçilçllçkfjhfs</p>
            </TitleContaine >
        </BlogContaine>
    )
}