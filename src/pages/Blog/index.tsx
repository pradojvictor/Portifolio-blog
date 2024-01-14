/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from "react";
import styled from "styled-components"
import SearchInput from "../../components/Search";
import Post from "../../components/Posts";

export const BlogContaine = styled.div`
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
export const TitleContaine = styled.div`
    width: 15rem;
    height: 5rem;
    text-align: center;

`;
export const InputContain = styled.div`
    width: 100%;
`;
export const PostListContainer = styled.section`
    width:100%;
    display: grid;
    grid-template-columns:  0.8fr 1.2fr 0.7fr 1.3fr;
    /* grid-template-rows: 2fr 3fr 1fr; */
    /* grid-template-rows: repeat(min-content, 1fr); */
    gap: 2rem;
    //mobile use flex

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
            <div style={{ left: cursorX + "px", top: cursorY + "px" }} className="cursor curso-circle"></div>
            <div style={{ left: cursorX + "px", top: cursorY + "px" }} className="cursor curso-point"></div>
            <TitleContaine >
                <h1>blog</h1>
                <p>ola aqui e uma parte do fsfhfhfshfsfshf  jjjjjjjjjjjjjjjjj jjjjjjj fsfhssçilçllçkfjhfs</p>
            </TitleContaine >
            <InputContain>
               <SearchInput />
            </InputContain>
            <PostListContainer>
                <Post title="titulo aqui teando aqui" description="descrição aqui descrição aqui aqui aqu f fsfus ugsgh descrição aqui aqui aqu f fsfus ugsgh " date="00/00/00"/>
                <Post title="titulo aqui" description="descrição aqui aqui aqu f fsfus ugsgh descrição aqui aqui aqu f fsfus ugsgh descrição aqui aqui aqu f fsfus ugsgh descrição aqui aqui aqu f fsfus ugsgh descrição aqui aqui aqu f fsfus ugsgh descrição aqui aqui aqu f fsfus ugsgh descrição aqui aqui aqu f fsfus ugsgh " date="00/00/00"/>
                <Post title="titulo aqui" description="descrição aqui" date="00/00/00"/>
                <Post title="titulo aqui descrição aqui aqui aqu f fsfus ugsgh " description="descrição aqui" date="00/00/00"/>
                <Post title="titulo aqui aqui descrição aqui aqui aqu f aqui descrição aqui aqui aqu f" description="descrição aq aqui descrição aqui aqui aqu faqui descrição aqui aqui aqu faqui descrição aqui aqui aqu faqui descrição aqui aqui aqu fui" date="00/00/00"/>
                <Post title="titulo aqui" description="descrição aqui" date="00/00/00"/>
                <Post title="titulo aqui" description="descrição aqui" date="00/00/00"/>
            </PostListContainer>
        </BlogContaine>
    )
}