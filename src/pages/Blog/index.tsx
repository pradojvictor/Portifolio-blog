/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components"
import SearchInput from "../../components/Search";
import Posts from "../../components/Posts";
import { api } from "../../lib/axios";
import Spinner from "../../components/Spinner";

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
    width: 60rem;
    height: 5em;
    text-align: center;
    margin-bottom: 2rem;
    h1{
        margin-bottom: 1rem; 
        font-family: 'Cormorant Garamond', serif;
        text-align: center;
        font-size: 30px;
        font-weight: 800;
        text-transform: uppercase;
        font-family: 'Playfair Display', serif; 
        color: orange;
    }
    p{
        font-family: 'Cormorant Garamond', serif;
        text-align: center;
        font-size: 25px;
        font-weight: 500;
        color: #424242;
    }

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
    gap: 1rem;
    //mobile use flex
`;

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface PostProps {
    title: string,
    body: string,
    created_at: string,
    number: number,
    html_url: string,
    user: {
        login: string,
    },
}

export function Blog() {

    const [posts, setPosts] = useState<PostProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
    });

    const getPosts = useCallback(async (query: string = "") => {
        try {
            setIsLoading(true);
            const response = await api.get(`/search/issues?q=${query}%20repo:${userName}/${repoName}`);
            setPosts(response.data.items);
        } finally {
            setIsLoading(false);
        }
    }, [posts]);

    useEffect(() => {
        getPosts();
    }, [])


    return (
        <BlogContaine>
            <div style={{ left: cursorX + "px", top: cursorY + "px" }} className="cursor curso-circle"></div>
            <div style={{ left: cursorX + "px", top: cursorY + "px" }} className="cursor curso-point"></div>
            <TitleContaine >
                <h1>blog</h1>
                <p>
                    Hi, this is where I'm going to store everything I'm learning, why? Why a notebook
                    is expensive is how I like to write everything down, it will be expensive for my pocket!
                </p>
            </TitleContaine >
            <InputContain>
                <SearchInput getposts={getPosts} />
            </InputContain>
            {isLoading ? <Spinner/> : (
                <PostListContainer>
                {posts.map((post) => (
                    <Posts
                        key={post.number}
                        title={post.title}
                        description={post.body}
                        redirect={post.number}
                        numberURL={post.number}
                        date={post.created_at}
                    />
                ))}

            </PostListContainer>
            ) }
        </BlogContaine>
    )
}