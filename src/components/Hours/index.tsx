import { useEffect, useState } from "react";
import styled from "styled-components"

export const HoursContainer = styled.div`
    .div-time{
        background-color: #38232340;
        height: 43rem;
        width: 20rem;
        border-radius: .5rem;
        display:flex;
        justify-content: center;
        align-items: center;
        .containe-time{
            height: 95%;
            width: 90%;
            .div-date{
                background-color:  #363030;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 40%;
                border-radius: 0.5rem;
                margin-bottom: .5rem;
                .date-day, .date-month{
                    color: white;
                    display: flex;
                    align-items: center;
                    font-weight: 100;
                    font-family: 'Bebas Neue', sans-serif; 
                }
                .date-day{
                    font-size: 10rem;
                    height: 55%;
                }
                .date-month{
                    font-size: 4rem;
                    height: 30%;
                }
            }
            .containe-clock{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 60%;
                border-radius: .5rem;
                gap: .5rem;
                .div-hours, .div-minutes, .div-seconds{
                    background-color: #363030;
                    height: 30%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 0.5rem;
                    .span-time, .span-time-name{
                        color: white;
                        font-family: 'Bebas Neue', sans-serif;
                    }
                    .span-time{
                        height: 60%;
                        font-size: 4rem;
                    }
                    .span-time-name{
                        height: 30%;
                        font-size: 1.5rem;
                    }
                    
                }
            }

        }
    }
`

export default function Hours(){

    const [dataFormatada, setDataFormatada] = useState({
        dia: '',
        mes: '',
        horas: '',
        minutos: '',
        segundos: '',
    });

    useEffect(() => {
        const atualizarRelogio = () => {
            const data = new Date();

            const dia = String(data.getDate()).padStart(2, '0');
            const meses = [
                'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
            ];
            const mes = meses[data.getMonth()];

            const horas = String(data.getHours()).padStart(2, '0');
            const minutos = String(data.getMinutes()).padStart(2, '0');
            const segundos = String(data.getSeconds()).padStart(2, '0');

            setDataFormatada({
                dia,
                mes,
                horas,
                minutos,
                segundos,
            });
        };

        atualizarRelogio();

        const intervalo = setInterval(atualizarRelogio, 1000);
        return () => clearInterval(intervalo);
    }, []);

    return(
        <HoursContainer>
         <div className="div-time">
                <div className="containe-time">
                    <div className="div-date">
                        <span className="date-day">{dataFormatada.dia}</span>
                        <span className="date-month">{dataFormatada.mes}</span>
                    </div>
                    <div className="containe-clock">
                        <div className="div-hours">
                            <span className="span-time">{dataFormatada.horas}</span>
                            <span className="span-time-name">hours</span>
                        </div>
                        <div className="div-minutes">
                            <span className="span-time">{dataFormatada.minutos}</span>
                            <span className="span-time-name">minutes</span>
                        </div>
                        <div className="div-seconds">
                            <span className="span-time">{dataFormatada.segundos}</span>
                            <span className="span-time-name">seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </HoursContainer>
    )
}