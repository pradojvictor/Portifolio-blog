import styled from "styled-components"
import Slider from "../../components/Slider";
import ButtonHover from "../../components/ButtonHover";


export const HomeContaine = styled.div`
    height: 80vh;
    width: 100%;
    /* display: flex;
    justify-content: center; */
    align-items: center;
    background-color: #38232340;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: .5rem;

    .div-1{
        height: 55%;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: end;

        .div-title{
            display:flex;
            flex-direction:column;
            align-items: center;
        }
        .h1-title{
            text-transform: uppercase;
            font-size: 200px;
            font-weight: 800;
            color: rgb(255, 165, 0);
            font-family: 'Poppins', sans-serif;
        }

    }

    .div-2{
        height: 15%;
    }

    .div-3{
        height: 30%;
        display: flex;
        justify-content: space-between;
        margin: .1rem 3.5rem;
        .div-3-intro{
            margin: 7rem 0 0 0;
        }
    }
    
`;

export function Home() {


    return (
        <HomeContaine >
            <div className="div-1">
                <div className="div-title">
                    <h1 className="h1-title">
                        victor prado
                    </h1>
                </div>
            </div>
            <div className="div-2">

            </div>
            <div className="div-3">
                <div className="div-3-intro">
                    <ButtonHover />
                </div>
                <Slider />
            </div>
        </HomeContaine>
    )
}
