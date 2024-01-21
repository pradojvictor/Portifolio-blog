import { Link } from "react-router-dom";
import styled from "styled-components"
import { relativeDateFormatter } from "../../utils/formatter";
import MarkDownDescription from "../MarkDownDescription";

export const PostContainer = styled(Link)`
   width: 100%;
   height: 15rem;
   background-color: #F9F4EC;
   border-bottom: 2px solid gray;
   transition: 0.4s;
   overflow: hidden;
   &:hover{
    background-color: #E2DBCF;
   }
   .title-div{
    display: flex;
    margin-bottom: .5rem;
    strong{
        font-size: 2em;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-family: 'Playfair Display', serif; 
        text-transform:uppercase;
    }
   }
   .description-div{
   
       
       
    }
    span{
        width: max-content;
        font-size: 0.8rem;
        color: gray;
        padding-left:.5rem;
    }
    .containe-div{
        height:85%;
    }
`;

interface PostsProps {
    title: string,
    description: string;
    date: string;
    redirect: string; //to
    numberURL: number,
}

export default function Posts(props: PostsProps) {

    const formattedDate = relativeDateFormatter(props.date)

    return (
        <PostContainer to={`/post/${props.numberURL}`}>
            <div className="containe-div">
                <div className="title-div">
                    <strong>{props.title}</strong>
                </div>
                <div className="description-div">
                    <MarkDownDescription content={props.description} />
                </div>
            </div>
            <span>{formattedDate}</span>
        </PostContainer>
    )
}