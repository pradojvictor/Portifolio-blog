import { useRef } from "react";
import styled from "styled-components"


export const HomeContaine = styled.div`
    transition: 0.4s;
    transform: rotateY('angle');
    .vai{
            height: 50px;
            background-color: red;
            width: 100px;
            transition: 0.4s;
        }

     .inicio{
        display:flex;
    justify-content: center;
    align-items: center;
        background-color: yellow;
        height: 100vh;
    }
    .meio{
        display:flex;
    justify-content: center;
    align-items: center;
        background-color: #00ff22;
        height: 100vh;
    }
    .fim{
        display:flex;
    justify-content: center;
    align-items: center;
        background-color: #060742;
        height: 100vh;
    }
`;
export function Home() {


    const targetRef = useRef<HTMLDivElement>(null);
    const targetReff = useRef<HTMLDivElement>(null);

    function Refclick() {
        targetRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    function Refclickk() {
        targetReff.current?.scrollIntoView({ behavior: "smooth" })
    }
    



    return (
        <HomeContaine >
            <div ref={targetRef} id="inicio" className="inicio">
                <button onClick={Refclick}>down</button>
            </div>
            <div ref={targetRef || targetReff} className="meio">
                <button onClick={Refclickk}>down</button>
            </div>
            <div ref={targetReff} className="fim">
                <button >down</button>
            </div>
        </HomeContaine>
    )
}
