import { Link } from "react-router-dom";
import styled from "styled-components"
import { relativeDateFormatter } from "../../utils/formatter";

export const PostContainer = styled(Link)`
   width: 100%;
   height: 15rem;
   background-color: #F9F4EC;
   border-bottom: 2px solid gray;
   transition: 0.4s;
   &:hover{
    background-color: #E2DBCF;
   }
   .title-div{
    display: flex;
    margin-bottom: 1.25rem;
    strong{
        font-size: 2em;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
   }
   .description-div{
       p{
           font-size: 0.9em;
           overflow: hidden;
           text-overflow: ellipsis;
           display: -webkit-box;
           -webkit-box-orient: vertical;
           -webkit-line-clamp: 4;
           margin-bottom: 2rem;
       }
    }
    span{
        width: max-content;
        font-size: 0.8rem;
        color: gray;
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

export default function Post(props: PostsProps) {

    const formattedDate = relativeDateFormatter(props.date)

    return (
        <PostContainer to={`/post/${props.numberURL}`}>
            <div className="containe-div">
                <div className="title-div">
                    <strong>{props.title}</strong>
                </div>
                <div className="description-div">
                    <p>{props.description}</p>
                </div>
            </div>
            <span>{formattedDate}</span>
        </PostContainer>
    )
}