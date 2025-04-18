/* eslint-disable @typescript-eslint/no-unused-vars */
import emailjs from "@emailjs/browser";
import { useState } from "react";
import styled from "styled-components";
import Hours from "../../components/Hours";

export const ContactContaine = styled.div`
    width:100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .divContainer{
        height: 43rem;
        width: 30rem;
        .div-form{
        background-color: #3630302d;
        height: 77%;
        width: 100%;
        border-radius: .5rem;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
        h1{
            font-size: 4rem; 
            font-family: 'Bebas Neue', sans-serif;
            color: orange;
        }
        .inputContainer, .inputContainerMenssage{
            width:70%;
            height: 5rem;
            background-color: #363030;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 1rem 1rem;
            border-radius: .5rem;
            .iconContainer{
                fill: white;
            }
            .div-input{
                input, textarea{
                    width: 15rem;
                    height: 3rem;
                    outline:none;
                    background: transparent;
                    border: none;
                    color: white;
                    resize:none;  
                    font-size: 1.2rem; 
                    font-family: 'Bebas Neue', sans-serif;  
                }
                .input-message{
                    height: 6rem;
                }
            }
        }
        .inputContainerMenssage{
            height: 8rem;
        }
        }
        .div-button{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .button-send{
                width: 8rem;
                height: 2.5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 2rem;
                border: none;
                background-color: orange;
                color: white;
                font-size: 1.5rem; 
                font-family: 'Bebas Neue', sans-serif;
            }
            .button-send:hover{
                background-color: white;
                color: orange;
            }
            
        }


        .div-black{
            background-color: #363030;
            height: 20%;
            width: 100%;
            border-radius: .5rem;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .div-msg{
                display: block;
                text-align: center;
                color: white;
                font-size: 2rem;
                font-weight: 800;
                font-family: 'Bebas Neue', sans-serif;  
                border-right: 1rem solid orange;
                border-left: 1rem solid orange;
                white-space: nowrap;
                overflow: hidden;
                width: 0;
                animation: mark 1.5s step-end infinite, write 8s steps(22, end) infinite;
            }
        }

    }

    @keyframes mark {
        50%{
            border-right-color: transparent;
            border-left-color: transparent;
        }
    }
    @keyframes write {
        20%{
            width: 25.1ch;
        }
        70%{
            width: 25.1ch;
        }
        85%{
            width: 0;
        }
        100%{
            width: 0;
        }
    }
`

const ServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [mensagemAlert, setMensagemAlert] = useState("")

    function sendEmail(e: { preventDefault: () => void; }) {
        e.preventDefault()
        if (name === '' || email === '' || message === '') {
            setMensagemAlert("fill in all fields")
            return;
        } else {

            const templateParams = {
                from_name: name,
                message: message,
                email: email
            }
            emailjs.send(ServiceId, TemplateId, templateParams, PublicKey)
                .then((response) => {
                    console.log("send email", response.status, response.text);
                    setName('')
                    setEmail('')
                    setMessage('')
                }, (err) => {
                    console.log("ERROR:", err);
                })

            setMensagemAlert("message sent successfully")
        }
    }

    return (
        <ContactContaine>
            <div className="divContainer">
                <form className="div-form" onSubmit={sendEmail}>
                    <h1>Contact</h1>
                    <div className="inputContainer">
                        <div className="iconContainer">
                            <i className="form-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" /></svg>
                            </i>
                        </div>
                        <div className="div-input">
                            <input
                                className="input-name"
                                type="text"
                                placeholder="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name} />
                        </div>
                    </div>
                    <div className="inputContainer">
                        <div className="iconContainer">
                            <i className="form-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" /></svg>
                            </i>
                        </div>
                        <div className="div-input">
                            <input
                                className="input-email"
                                type="text"
                                placeholder="e-mail"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} />
                        </div>
                    </div>
                    <div className="inputContainerMenssage">
                        <div className="iconContainer">
                            <i className="form-icon">
                                <svg width="40" height="40" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 17.75c0-.414-.336-.75-.75-.75h-11.5c-.414 0-.75.336-.75.75s.336.75.75.75h11.5c.414 0 .75-.336.75-.75zm7-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
                            </i>
                        </div>
                        <div className="div-input">
                            <textarea
                                className="input-message"
                                placeholder="message"
                                onChange={(e) => setMessage(e.target.value)}
                                value={message} />
                        </div>
                    </div>
                    <div className="div-button">
                        <button className="button-send" type="submit">
                            <p>send</p>
                        </button>
                    </div>
                </form >
                <div className="div-black">
                    <div className="div-msg">{mensagemAlert}</div>
                </div>
            </div>
            <Hours/>
        </ContactContaine>
    )
}