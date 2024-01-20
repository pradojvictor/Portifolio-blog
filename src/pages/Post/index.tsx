/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components"
import PostHeader from "../../components/PostHeader";
import { PostProps } from "../Blog";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { relativeDateFormatter } from "../../utils/formatter";
import Spinner from "../../components/Spinner";
import PostContent from "../../components/PostContent";

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



const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export default function Post() {
    const [isLoading, setIsLoading] = useState(true);
    const [postData, setPostData] = useState<PostProps>({} as PostProps);
    const { id } = useParams();

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
    });

    const getPostDetails = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await api.get(`/repos/${userName}/${repoName}/issues/${id}`)
            setPostData(response.data);
        } finally {
            setIsLoading(false);
        }
    }, [postData])

    useEffect(() => {
        getPostDetails();
    }, [])

    const formattedDate = relativeDateFormatter(postData?.created_at);

    return (
        <PostContaine >
            <div style={{ left: cursorX + "px", top: cursorY + "px" }} className="cursor curso-circle"></div>
            <div style={{ left: cursorX + "px", top: cursorY + "px" }} className="cursor curso-point"></div>
            {isLoading ? <Spinner /> : (
                <>
                    <PostHeader title={postData.title} date={formattedDate} />
                    {!isLoading && <PostContent content={postData.body}/>}
                </>
            )}
        </PostContaine>
    )
}