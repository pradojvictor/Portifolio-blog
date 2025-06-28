import styled from "styled-components"
import { images } from "../../assets";


export const ModalContainer = styled.div`
    background: url(${images.image2}) no-repeat center center fixed;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`;
interface IboxProps{
    backgroudImg ?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function BoxModal(props: IboxProps) {

    return (
        <ModalContainer> 
            <div>
                
            </div>
        </ModalContainer>
    )
}