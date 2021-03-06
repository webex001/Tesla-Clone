import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import './Header.css';


const EfficiencyDetails = () => {
    return (
        <Fade bottom>
            <Container>
                <Fade bottom>
                    <ExteriorDiv>
                        <h6>Exterior</h6>
                        <h1>Designed for Efficiency</h1>
                        <OrderButton>ORDER NOW</OrderButton>
                    </ExteriorDiv>
                </Fade>
                <Fade bottom>
                    <ExteriorNote>
                        <p className="model-details">With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built for speed and range. Together with a wider body and chassis, these elements help you go down the straight or around corners quicker than ever.</p>
                    </ExteriorNote>
                </Fade>
            </Container>
        </Fade>
    )
}

export default EfficiencyDetails

const Container = styled.div`
    display: flex;
    padding: 50px 150px; 
    @media (max-width: 400px){
        flex-direction: column;
        padding: 0px;
        margin-top: 20px;
        padding-bottom: 30px;
    }
    @media (max-width: 425px){
        display: content;
    }

`
const ExteriorDiv = styled.div`
    padding: 10px 50px;
    width: 440px;
    @media (max-width: 320px){
        margin-left: -29px;
    }
    @media (max-width: 425px){
        margin-left: -19px;
        margin-top: 38px;
    }
`
const ExteriorNote = styled.div`
    padding-top: 20px;
    @media (max-width: 425px){
        margin-left: -19px;
        margin-top: 38px;
    }
    
`
const OrderButton = styled.div`
    color: black;
    border: 3px solid black;
    border-radius: 24px;
    padding: 12px 57px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    width: 196px;
    margin-top: 20px;
    &:hover {
        color: white;
        background: black;
      }
`