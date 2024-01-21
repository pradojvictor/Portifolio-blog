import styled from "styled-components"
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
        font-size: 3rem;
        font-weight: 600; 
        color: black;
        text-transform: uppercase;
        font-family: 'Cormorant Garamond', serif;  
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
            font-size:1.5rem;
            font-weight:600;
            font-family: 'Cormorant Garamond', serif;
    
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
    autor?: string,
    date: string,
    title: string,
}

export default function PostHeader(props: PostHeaderProps) {
    return (
        <HeaderPost>
            <header>
                <Link redirect="/blog" name="return" classname="link-back"/>
                <button> mudar de cor</button>
            </header>
            <h2>{props.title}</h2>
            <div className="autor-div">
                <img src="https://github.com/pradojvictor.png" />
                <div>
                    <p>pradojvictor</p>
                    <span>{props.date}</span>
                </div>
            </div>
        </HeaderPost>
    )
}