/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components"
import SearchInput from "../../components/Search";
import Post from "../../components/Posts";
import { api } from "../../lib/axios";

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

const username = import.meta.env.VITE_GITHUB_USERNAME;
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
            const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`);
            console.log(response.data);
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
                <p>ola aqui e uma parte do fsfhfhfshfsfshf  jjjjjjjjjjjjjjjjj jjjjjjj fsfhssçilçllçkfjhfs</p>
            </TitleContaine >
            <InputContain>
                <SearchInput />
            </InputContain>
            <PostListContainer>
                {posts.map((post) => (
                    <Post
                        key={post.number}
                        title={post.title}
                        description={post.body}
                        redirect={post.number}
                        numberURL={post.number}
                        date={post.created_at}
                    />
                ))}

            </PostListContainer>
        </BlogContaine>
    )
}