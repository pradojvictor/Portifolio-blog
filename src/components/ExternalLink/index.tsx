import styled from "styled-components";

export const ExternalLinkContainer = styled.a`
    border: none;
    background: none;
    color: black;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    transition: 0.5s;
    border-bottom: 1px solid transparent;
    height: 1rem;

    svg{
        width: 0.75rem;
        height: 0.75rem;
    }
    &:hover{
        color: orange;
    }
`;

interface ExternalLinkProps {
    text?: string;
    rendirect: string;
    image?: string;
}

export default function ExternalLink(props: ExternalLinkProps) {
    return(
        <ExternalLinkContainer href={props.rendirect}>
            {props.text}{props.image}
        </ExternalLinkContainer>
    )
}