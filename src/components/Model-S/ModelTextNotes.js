import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import './Header.css';


const ModelTextNotes = () => {
    return (
        <Fade bottom>
            <Container>
                <Fade bottom>
                    <ExteriorDiv>
                        <h6>Plaid</h6>
                        <h1>Beyond Ludicrous</h1>
                        <OrderButton>ORDER NOW</OrderButton>
                    </ExteriorDiv>
                </Fade>
                <Fade bottom>
                    <ExteriorNote>
                        <p className="model-details">With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. All Model S powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.</p>
                    </ExteriorNote>
                </Fade>
            </Container>
        </Fade>
    )
}

export default ModelTextNotes

const Container = styled.div`
    display: flex;
    padding: 50px 150px; 
    @media (max-width: 375px){
        flex-direction: column;
        padding: 0px;
        margin-top: 20px;
        padding-bottom: 30px;
    }

`
const ExteriorDiv = styled.div`
    padding: 10px 50px;
    width: 440px;
`
const ExteriorNote = styled.div`
    padding-top: 20px;
    
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