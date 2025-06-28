import styled from "styled-components"
import Line from "../../components/Line"
import Circle from "../../components/circle"
import Linelarger from "../../components/LineLarger"
import BoxModal from "../../components/BoxModal"

export const AboutContaine = styled.div`
    margin-top: 5rem;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    section{
      background-color: #0000001c;
      height: 100%; //muda depois
      width: 26%;
      overflow: hidden;

      .div-h2{
        background-color: black;
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 800;
        font-family: 'Bebas Neue', sans-serif;
        color: white;
        height: 3rem;
        text-align: center;
        h2:hover{
          color: orange;
        }
      }
      
      .div-inf-one{
        background-color: #F9F4EC;
        height: 15rem;
        width: 100%;

        h3{
          width:100%;
          height: 4.5rem;
          text-align: center;
          text-transform: uppercase;
          font-size: 4rem;
          font-weight: 800;
          font-family: 'Bebas Neue', sans-serif;
          color: black
        }
        
      }
      .div-inf-two{
        background-color: black;
        height: 50rem;
        width: 100%;
        h3{
          width:100%;
          height: 4.5rem;
          text-align: center;
          text-transform: uppercase;
          font-size: 4rem;
          font-weight: 800;
          font-family: 'Bebas Neue', sans-serif;
          color: white;
        }
        .inf-twoR{
          color: white;
        }
        .circle-two, .line-two, .linelarge-two{
           border-color: white;
        }
      }
      overflow: scroll;
      overflow-x: hidden;
      scrollbar-color: black orange;
      scrollbar-width: thin;
    }

  .boxcss{
    left: 35%;
    top: 35%;
  }
`

export function About() {
  return (
    <AboutContaine>
      <section className="test">
        <div className="div-h2">
          <h2>civil engineer</h2>
        </div>
        <div className="div-inf-one">
          <h3>school</h3>
          <Line />
          <Circle dateInf={""} inf={"3 anos antes"} custoBox="boxcss">
            <BoxModal/>
          </Circle>
          <Line />
          <Circle dateInf={"2013"} inf={"presentes dos professores"} custoBox="boxcss">
          </Circle>
          <Line />
        </div>
        <div className="div-inf-two">
          <h3>2014</h3>
          <Line custonLine="line-two" />
          <Circle dateInf={""} inf={"3 anos antes"} custontextR="inf-twoR" custonCircle="circle-two" custoBox="boxcss"/>
          <Line custonLine="line-two" />
          <Circle dateInf={"2013"} inf={"presentes dos professores"} custontextR="inf-twoR" custonCircle="circle-two" custoBox="boxcss"/>
          <Linelarger custonLinelarge="linelarge-two" />
        </div>
      </section>
      <section>
        <div className="div-h2">
          <h2>web developer</h2>
        </div>
        <div>
        </div>
      </section>
      <section>
        <div className="div-h2">
          <h2>render</h2>
        </div>
        <div>
        </div>
      </section>
      
    </AboutContaine>
  )
}
