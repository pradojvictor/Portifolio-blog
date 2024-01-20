/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; //hljs
import styled from "styled-components"
import ReactMarkdown from "react-markdown";

const PostContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 2rem;
    margin-bottom: 8rem;
    width: 70%;
    h1{
        color: black; 
        font-family: 'Cormorant Garamond', serif;
        text-align: center;
        font-size: 50px;
        font-weight: 800;
    }
    h2{
        color: #424242;
        text-transform:uppercase;
    }
    h3{
        font-size: 20px;
        color: #424242;
        text-transform:uppercase;
    }
    pre{
        div{
            background-color: #424242 !important;
            span{
                color: white !important;
                font-size: 18px;
                font-weight: 600;
                font-family: 'Cormorant Garamond', serif;
            }
        }
    }
    p{
        color: #616161;
        font-size: 20px;
        font-weight: 500;
        font-family: 'Cormorant Garamond', serif;
    }
    img{
        width: 100%;
    }
    li{
        margin-left: 3rem;
        color: #424242;
        list-style: disc;
        font-size: 20px;
        font-weight: 500;
        font-family: 'Cormorant Garamond', serif;
    }
    code{
        background-color: #424242;
        border-radius: .5rem;
        padding: 0.1rem .5rem 0.1rem .5rem;
        display:inline-block;     
        color: white;
        font-size: 20px;
        font-weight: 600;
        font-family: 'Cormorant Garamond', serif;
    }
    blockquote{
        display:none;
    }
    a{
        img{
            width: 8rem;
            height: 2rem;
        }
    }
    a:hover{
        color: Orange;
    }

`;
interface PostContentProps {
    content: string,
}
interface CodeProps {
    node?: any,
    inline?: any,
    className?: any,
    children?: any,
}
export default function PostContent(props: PostContentProps) {
    return (
        <PostContainer>
            <ReactMarkdown
                children={props.content}
                components={{
                    code({ node, inline, className, children, ...props }: CodeProps) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, "")}
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            />
        </PostContainer>
    )
}