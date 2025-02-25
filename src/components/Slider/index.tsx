import styled from "styled-components"
import { Key, useCallback, useEffect, useRef, useState } from "react";
import { api } from "../../lib/axios";
import Link from "../Link";

export const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41rem;


*{
  scrollbar-width: none;
}
::-webkit-scrollbar {
    display:none;
}
::-webkit-scrollbar-track {
    display:none;
}
::-webkit-scrollbar-thumb {
    display:none;
}

    .button-slide {
        display: flex;
        flex-direction: column;
        button {
            margin: .5rem 0;
            border-radius: 50%;
            height: 3rem;
            width: 3rem;
            background-color: transparent;
            border: 0.1rem solid rgba(255,255,255,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                border: solid 0.01rem orange;
                svg {
                    color: orange;
                }
            }
            svg {
                height:1.2rem;
                color: rgba(255, 255, 255, 1);
            }
        }    
    }
    .div-slide {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        margin: 0 1rem;
    }
    .div-card {
        height: auto;
        width: 17rem;
        border-radius: 1rem;
        background: rgba( 255, 255, 255, 0.05 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        border-radius: 1rem;
        scroll-behavior: smooth;
        flex: none;
        margin-right: 1rem;
        
        .div-info-containe {
            padding: 1rem 1rem;
        }
        .div-inf {
            font-weight: 400;
            .inf-title {
                height: 1rem;
                h1 {
                    font-size: 1.5rem;
                    text-transform: uppercase;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    font-family: 'Playfair Display', serif;
                    color: white;
                }
            }
            .inf-description {
                height: 7.5rem;
                p {
                    padding-top: 4rem;
                    font-size: .7rem;
                    text-transform: capitalize;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 300;
                    color: white;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }
        }
        .inf-button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding-left: 8rem;
            button {
                width: 100%;  
                display: flex;
                align-items: center;
                justify-content: center; 
                background-color: transparent; 
                border-style: none;  
                svg {
                    color: #ffffff;
                    width: 2.2rem;
                }
            }
        }
        

    }

`;

export interface PostProps {
    id: Key | null | undefined;
    name: string,
    description: string,
    body: string,
    created_at: string,
    number: number,
    html_url: string,
    homepage: string,
    user: {
        login: string,
    },
}

const userName = import.meta.env.VITE_GITHUB_USERNAME;

export default function Slider() {
    const [repos, setRepos] = useState<PostProps[]>([]);
    const slider = useRef<HTMLInputElement>(null)

    const getRepos = useCallback(async (query: string = "starred") => {
        try {
            setRepos([]);
            const response = await api.get(`/users/${userName}/${query}`);
            setRepos(response.data);
        } finally {
            setRepos; //obs!!!
        }
    }, []);

    useEffect(() => {
        getRepos();
    }, [getRepos])

    const handleleft = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // console.log(slider.current.offsetWidth); //pra saber a altura usada
        slider.current!.scrollLeft -= slider.current!.offsetWidth;
    }
    const handleright = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        slider.current!.scrollLeft += slider.current!.offsetWidth;
    }

    return (
        <SliderContainer>
            <div className="button-slide">
                <button onClick={handleright}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <button onClick={handleleft}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className="div-slide" ref={slider}>
                {repos.map((d) => (
                    <div className="div-card" key={d.id}>
                        <div className="div-info-containe">
                            <div className="div-inf">
                                <div className="inf-title">
                                    <h1>{d.name}</h1>
                                </div>
                                <div className="inf-description">
                                    <p>{d.description}</p>
                                </div>
                            </div>
                            <div className="inf-button">
                                <button>
                                    <Link redirect={d.html_url} target="_blank">
                                        <svg viewBox="0 0 1024 1024" fill="currentColor">
                                            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                                        </svg>
                                    </Link>
                                </button>
                                <button>
                                    <Link redirect={d.homepage} target="_blank">
                                        <svg
                                            viewBox="0 0 500 500"
                                            fill="currentColor"
                                        >
                                            <path d="M0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zm64 32v64c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm16 160c-13.3 0-24 10.7-24 24s10.7 24 24 24h56c13.3 0 24-10.7 24-24s-10.7-24-24-24H80zm136 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48z" />
                                        </svg>
                                    </Link>
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
                <div className="scrool">

                </div>
            </div>
        </SliderContainer>
    )
}