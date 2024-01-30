import { useRef } from "react";
import styled from "styled-components"

export const WorkSection = styled.section`
`;

export const WorkContainer = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
    color: white;
    overflow: hidden;
    .div-top{
        display: flex;
        height: 40vh;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        font-size: 20lvw;
        font-weight: 800;
        .div-line{
            background-color: white;
            width:15lvw;
            height: 2.5lvw;
        }
        
    }
    .div-bottom{
        display: flex;
        height: 25vh;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        font-size: 20lvw ;
        font-weight: 800;
        margin-bottom: 5rem;

        .div-projects{
            height: 100%;
            font-size: 5lvw ;
            font-weight: 200;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &:hover{
                color: orange;
            }
            .div-arrow{
                width:5rem;
            }
        }
    }
    .div-down1{
        background-color: #0000007f;
        display:flex;
        justify-content: center;
        width:100%;
        font-size: 2lvw;
        bottom: 0;
        margin-bottom: 4rem;
        &:hover{
            color: orange;
        }
    }
    .div-down2{
        background-color: #0000007f;
        display:flex;
        justify-content: center;
        width:100%;
        font-size: 2lvw;
        bottom: 0;
        &:hover{
            color: orange;
        }
        
    }
`;

export function Work() {

    const targetRefTop = useRef<HTMLDivElement>(null);
    const targetRefMid = useRef<HTMLDivElement>(null);

    function RefClickTop() {
        targetRefTop.current?.scrollIntoView({ behavior: "smooth" })
    }
    function RefClickMid() {
        targetRefMid.current?.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <>
            <WorkSection id="in">
                <WorkContainer ref={targetRefTop}>

                    <div className="div-top">
                        <div>
                            Front
                        </div>
                        <div className="div-line"></div>
                        <div>end</div>
                    </div>
                    <div className="div-bottom">
                        <div>
                            developer
                        </div>
                        <div className="div-projects">
                            Projects
                            <div className="div-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div onClick={RefClickTop} className="div-down1">scroll down</div>
                </WorkContainer>
                <WorkContainer ref={targetRefTop || targetRefMid}>
                    <div className="div-top">
                        <div>
                            render
                        </div>
                    </div>
                    <div className="div-bottom">
                        <div>
                            design
                        </div>
                        <div className="div-projects">
                            Projects
                            <div className="div-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div onClick={RefClickMid} className="div-down1">scroll down</div>
                </WorkContainer>
                <WorkContainer ref={targetRefMid}>
                    <div className="div-top">
                        <div>
                            civil
                        </div>
                    </div>
                    <div className="div-bottom">
                        <div>
                            engineer
                        </div>
                        <div className="div-projects">
                            Projects
                            <div className="div-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div className="div-down1"><a href="#in">scroll Up</a></div>
                </WorkContainer>
            </WorkSection>
        </>
    )
}
