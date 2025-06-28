import styled from "styled-components"

export const LinelargerContainer = styled.div`
          display: flex;
          justify-content: center;
          .line{
            border: 3px solid;
            border-radius: 1rem;
            width: .2rem;
            height: 5rem;
            background-color: black;
          }
`;

interface IlinelargeProps {
    custonLinelarge?: string;
}
export default function Linelarger(props: IlinelargeProps) {
    return(
        <LinelargerContainer>
            <div></div>
            <div className={`line ${props.custonLinelarge}`}></div>
            <div></div>
        </LinelargerContainer>
    )
}