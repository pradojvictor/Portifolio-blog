import styled from "styled-components"
import Link from "../Link";

export const ButtonHoveContaine = styled.div`
    width: 4rem;
    height: 16rem;
    /* display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    left: 50%;
    top: 50%; */
    transform: translate(-50%, -50%);
    background: transparent;
    border-radius: 60px;
    overflow: hidden;
    box-sizing: border-box;

    .div-btn {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        width: 4rem;
        height: 16rem;
        position: absolute;
        top: 0%;
        left: 0%;
        background: transparent;
        border-radius: 60px;
        transition: 950ms cubic-bezier(0.89, 0.03, 0.06, 1.5);
        p {
            transform: scale(1);
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            opacity: 1;
            padding: 0;
            margin: auto;
            span {
                color: #ffffff;
                font-family: 'Bebas Neue', sans-serif;
                font-size: 1.1rem;
                padding-top: 1rem;
                &:hover {
                    color: orange;
                }
            }
        }
    }
    .div-social {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        margin: 2rem 0;
        a {
            padding: 1rem;
            transition: 700ms;
            color: #ffffff;
            text-align: center;
            transform: scale(0);
            opacity: 0;
            text-decoration: none;
            &:nth-child(4) {
                transition-delay: 85ms;
            }
            &:nth-child(3) {
                transition-delay: 170ms;
            }
            &:nth-child(2) {
                transition-delay: 255ms;
            }
            &:nth-child(1) {
                transition-delay: 340ms;
            }
            &:hover{
                color: #fb3;
                transition-timing-function: ease-in-out !important;
                transition-delay: 1ms !important;
            }
        }
    }
    &:hover .div-social a {
        transform: scale(1);
        transition-timing-function: cubic-bezier(1, -0.03, 0, 1.85);
        opacity: 1;
    }
    &:hover .div-btn {
        transform: translateY(-500px);
    }
    
    svg {
        height: 2rem;
        color: white;
        &:hover {
            color: orange;
        }
    }
    
   
`;
export default function ButtonHover() {


    return (
        <ButtonHoveContaine>
            <div className="div-social">
                <Link redirect="https://github.com/pradojvictor" classname="link-svg" target="_blank">
                    <svg viewBox="0 0 1024 1024" fill="currentColor">
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                    </svg>
                </Link>
                <Link redirect="https://www.linkedin.com/in/joaovictorpradodelima/" classname="link-svg" target="_blank">
                    <svg viewBox="0 0 1024 1024" fill="currentColor">
                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                    </svg>
                </Link>
                <Link redirect="mailto:joaovictorred@gmail.com" classname="link-svg" target="_blank">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                    </svg>
                </Link>
                <div className="div-btn">
                    <p >
                        <svg fill="currentColor" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 100 8a8 8 0 0016 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z" />
                        </svg>
                        <span>Follow Me</span>
                    </p>
                </div>
            </div>
        </ButtonHoveContaine>
    )
}
