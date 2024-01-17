import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styled from "styled-components"
import * as z from "zod";

const SearchContainer = styled.form`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transition: all 1s;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 25px;
    border: 4px solid black;
    padding: 5px;
    background-color: black;

    .input-search{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;;
    height: 42.5px;
    outline: 0;
    border: 0;
    display: none;
    font-size: 1em;
    border-radius: 20px;
    padding: 0 20px;
    background-color:black;
    color: white;
    }
    .input-button{
    box-sizing: border-box;
    padding: 10px;
    width: 42.5px;
    height: 42.5px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
    color: white;
    text-align: center;
    font-size: 1.2em;
    transition: all 1s;
    border: none;
    background: black;

}

&:hover{
    width: 300px;
    cursor: pointer;
}
&:hover .input-search{
    display: block;
}
&:hover .input-button{
    background: white;
    color: black;
}
`;

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>;


interface SearchProps {
    getposts: (query?:string) => Promise<void>, 
}

export default function SearchInput(props: SearchProps) {
    const { register, handleSubmit } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    });
    async function handleSearchPosts(data: SearchFormInput) {
        await props.getposts(data.query);
    }
    return (
        <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
            <input
                className="input-search"
                type="text"
                placeholder="Search here ..."
                {...register("query")}
            ></input>
            <button className="input-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-search">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </SearchContainer>
    )
}