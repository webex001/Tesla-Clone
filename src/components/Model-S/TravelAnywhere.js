import React from 'react'
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import './Header.css';

const TravelAnywhere = () => {
    return (
       <Container>
           <Wrap>
           <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <SubContainer>
                        <h5 >396mi</h5>
                        <p>Range (EPA est.)</p>
                    </SubContainer>
                    <SubContainer>
                        <h5>1.99 s</h5>
                        <p>0-60 mph* </p>
                    </SubContainer>
                    <SubContainer>
                        <h5>200 mph</h5>
                        <p>Top Speed† </p>
                    </SubContainer>
                    <SubContainer>
                        <h5>1,020 hp</h5>
                        <p>Peak Power</p>
                    </SubContainer>

                    
                </ButtonGroup>
                </Fade>
               
            </Buttons>
           </Wrap>
           <GoContainer>
           <Fade bottom>
                    <ExteriorDiv>
                        <h6>Plaid</h6>
                        <h1>Beyond Ludicrous</h1>
                        
                    </ExteriorDiv>
                </Fade>
                <Fade bottom>
                    <ExteriorNote>
                        <p className="model-details">With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. All Model S powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.</p>
                    </ExteriorNote>
                </Fade>
                <OrderButton>ORDER NOW</OrderButton>
           </GoContainer>
       </Container>
    )
}

export default TravelAnywhere

const Container = styled.div`
    display: flex;

`
const GoContainer = styled.div`
    width: 640px:
`

const Wrap = styled.div`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    padding: 15px 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("./images/model-s.jpg");
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    `
    const OrderButton = styled.div`
    color: white;
    border: 3px solid black;
    border-radius: 24px;
    padding: 13px 60px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: black;
    background: white;
    width: 202px;
    &:hover {
        color: white;
        background: black;
      }
`
const Buttons = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;

`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 80px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const SubContainer = styled.div`
    margin-right: 80px;
`
const ExteriorDiv = styled.div`
    padding: 10px 50px;
`
const ExteriorNote = styled.div`
    padding-top: 20px;
    
`