import styled from "styled-components"
import Slider from "../../components/Slider";


export const HomeContaine = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #38232340;
    overflow: hidden;
    box-sizing: border-box;
`;

export function Home() {


    return (
        <HomeContaine >
            {/* <ButtonHover /> */}
            <Slider /> 
        </HomeContaine>
    )
}
