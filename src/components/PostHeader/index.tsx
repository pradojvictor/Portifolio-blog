import styled from "styled-components"
import ExternalLink from "../ExternalLink";
import Link from "../Link";

export const HeaderPost = styled.section`
    height: 10rem;
    width:100%;
    margin-top: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;

    h2{
        margin-bottom: 2rem;
        font-size: 4rem;
        font-weight: 600;    
    }

    .autor-div{
        display:flex;
        gap: 1rem;
        text-align: center;
        align-items: center;
        justify-content: center;

        img{
        height: 2.5rem;
        border-radius: 50%;
        }
        p{
            color: Orange;
        }
        span{
            width: max-content;
            font-size: 0.8rem;
            color: gray;
        }
    }
    header{
        width:100%;
        display:flex;
        justify-content:space-between;
        .link-back{
            color: black;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            transition: 0.5s;
            font-size:1.1rem;
            font-weight:600;
    
            &:hover{
            color: orange;
            }
        }
        button{
            border:none;
            
        }
    }
   
`;

interface PostHeaderProps {
    autor: string,
    date: string,
    title: string,
}

export default function PostHeader() {
    return (
        <HeaderPost>
            <header>
                <Link redirect="/blog" name="return" classname="link-back"/>
                <button> mudar de cor</button>
            </header>
            <h2>blog title grande</h2>
            <div className="autor-div">
                <img src="https://github.com/pradojvictor.png" />
                <div>
                    <p>pradojvictor</p>
                    <span>00/00/00</span>
                </div>
            </div>
        </HeaderPost>
    )
}