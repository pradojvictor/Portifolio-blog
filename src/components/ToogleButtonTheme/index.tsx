import { useState } from "react";
import styled from "styled-components"

const ToogleContaine = styled.section`
    .true{
        width: 5rem;
        height: 2rem;
        position: relative;
        display: block;
        background-color: white;
        border-radius: 2rem;
        box-shadow: inset rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, inset rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .false{
        width: 5rem;
        height: 2rem;
        position: relative;
        display: block;
        background-color: white;
        border-radius: 2rem;
        box-shadow: inset rgba(9, 30, 66, 0.08) 0px 0px 0px 1px,inset rgba(9, 30, 66, 0.25) 0px 4px 8px -2px ;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .true-theme{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: black;
        position: relative;
        left: -1.5rem;
        transition: 0.4s;
        display: flex;
        justify-content: center;
        align-items: center;
        .true-icon{
            color: white;
            height: 1rem;
            &:hover{
            color: orange;
            }    
        }
        .false-icon{
            display: none;
        }
    }
    .false-theme{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        background-color: black;
        position: relative;
        left: 1.5rem;
        transition: 0.4s;
        display: flex;
        justify-content: center;
        align-items: center;
        .false-icon{
            color: white;
            height: 1rem;
            &:hover{
            color: orange;
            }    
        }
        .true-icon{
            display: none;
        }
    }

`;

interface ToogleProps {
    toogleClick: () => void,
}

export default function ToogleButton(props: ToogleProps) {
    const [toggle, setToggle] = useState(true);
    function handleTheme() {
        setToggle(toggle => !toggle)
    }
    return (
        <ToogleContaine onClick={props.toogleClick}>
            <label className={`${toggle}`} onClick={handleTheme}>
                <div className={`${toggle}-theme`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`true-icon`}>
                        <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`false-icon`}>
                        <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
                    </svg>
                </div>
            </label>
        </ToogleContaine>
    )
}