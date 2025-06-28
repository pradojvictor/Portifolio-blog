import styled from "styled-components"

export const LineContainer = styled.div`
          display: flex;
          justify-content: center;
          .line{
            border: 3px solid;
            border-radius: 1rem;
            width: .2rem;
            height: 2rem;
            background-color: black;
          }
`;

interface IlineProps {
    custonLine?: string;
}

export default function Line(props: IlineProps) {
    return(
        <LineContainer>
            <div></div>
            <div className={`line ${props.custonLine}`}></div>
            <div></div>
        </LineContainer>
    )
}
