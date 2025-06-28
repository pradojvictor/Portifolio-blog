import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import styled, { keyframes } from "styled-components"


const float = keyframes`
  0%, 100% { transform: translateY(1rem); }
  50% { transform: translateY(-.1rem); }
`;

export const CircleContainer = styled.div`
          display: flex;
          justify-content: center;
        .circle{
            border: 2px solid black;
            border-radius: 50%;
            width: 1rem;
            height: 1rem;
            object-fit: cover;
            animation: ${float} 3s ease-in-out infinite;
            margin: 0 .5rem;
            .button{
                border: none;
                background-color: transparent;
                color: transparent;
            }
            .button:hover{
                background-color: orange;
                position: absolute;
                border: none;
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                color: white;
                text-align: center;
                text-transform: uppercase;
                font-size: 2rem;
                font-weight: 800;
                font-family: 'Bebas Neue', sans-serif;
            }
            
        }
        .circle:hover{
            background-color: orange;
            position: absolute;
            border: none;
            width: 4rem;
            height: 4rem;
            object-fit: cover;
            /* animation: none; */
            margin: 0 0;
            padding: 0 0;
        }
        .inf-circle-left{
            height: 2rem;
            width: 45%; 
            text-align: center;
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 800;
            font-family: 'Bebas Neue', sans-serif;
            color: orange;
        }
        .inf-circle-right{
            width: 45%;
            height: 2rem;
            text-align: center;
            text-transform: uppercase;
            font-size: 1.5rem;
            font-weight: 800;
            font-family: 'Bebas Neue', sans-serif;
            color: black;
        }
         .box{
            width: 30%;
            height: 30%;
            border-radius: 1rem;
            position: absolute;
         }
`;

interface IcircleProps {
    inf?: string;
    dateInf?: string;
    custontextR?: string;
    custontextL?: string;
    custonCircle?: string;
    children?: JSX.Element;
    custoBox?: string;
}

export default function Circle(props: IcircleProps) {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <CircleContainer >

            <div className={`inf-circle-left ${props.custontextL}`}>{props.dateInf}</div>
            <div className={`circle ${props.custonCircle}`}>
                <motion.button

                    className="button"
                    onClick={() => setIsVisible(!isVisible)}
                    whileTap={{ y: 1 }}
                >
                    {isVisible ? "Hide" : "Show"}
                </motion.button>
            </div>
            <div className={`inf-circle-right ${props.custontextR}`}>{props.inf}</div>
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className={`box ${props.custoBox}`}
                        key="box"
                    >
                        {props.children}
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </CircleContainer>
    )
}