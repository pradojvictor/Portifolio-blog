/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"; //hljs
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const MarkdownContainer = styled(ReactMarkdown)`
    font-size: 0.9em;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;


    h1,h2{
        text-align: center;
        font-size:14px;
        margin-bottom:.1rem;
        
    }
    p{
        font-size:16px;
        margin-top:.5rem;
        img{
            width:100%;
        }
    }
    a{
        display:none;
        pointer-events: none;
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
export default function MarkDownDescription(props: PostContentProps) {
    return(
        <MarkdownContainer
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
    )
}