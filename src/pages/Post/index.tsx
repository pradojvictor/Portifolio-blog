/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import styled from "styled-components"
import PostHeader from "../../components/PostHeader";

export const PostContaine = styled.div`
    width: 100%;
    height: 90%;
    background-color: #F9F4EC;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    gap: 2rem; //opcional
    padding: 2rem;
    align-items: center;
    overflow-x: hidden; 
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

export default function Post() {

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
    });

    return (
        <PostContaine>
            <div style={{ left: cursorX + "px", top: cursorY + "px" }} className="cursor curso-circle"></div>
            <div style={{ left: cursorX + "px", top: cursorY + "px" }} className="cursor curso-point"></div>
            <PostHeader />
        </PostContaine>

    )
}