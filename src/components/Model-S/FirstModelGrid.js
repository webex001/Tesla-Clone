import React from 'react'
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import './Header.css';

const FirstModelGrid = () => {
    return (
            <Wrapper>
            <Fade bottom>
                <Container>
                <Fade bottom>
                    <IMGContainer>
                        <img src='./images/Model s Grid1.png' ait='' />
                    </IMGContainer>
                    <TextContainer>
                        <h4 className='title'>Game from Anywhere</h4>
                        <p className='text'>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
                    </TextContainer>
                </Fade>
                </Container>
                <Container>
                    <TextContainer>
                        <h4 className="title">Stay Connected</h4>
                        <p className='text'>Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.</p>
                    </TextContainer>
                    <IMGContainer>
                        <img src='./images/Model s Grid2.png' ait='' />
                    </IMGContainer>
                </Container>
                <Container>
                    <IMGContainer>
                        <img src='./images/Model s Grid3.png' ait='' />
                    </IMGContainer>
                    <TextContainer>
                        <h4 className='title'>Your Best Audio System</h4>
                        <p className='text'>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are.</p>
                    </TextContainer>
                </Container>
                <Container>
                    <IMGContainer>
                        <h4 className='title'>Real Storage</h4>
                        <p className='text'>With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.</p>
                    </IMGContainer>
                    <TextContainer>
                        
                        <p className='text'>Model S</p>
                    </TextContainer>
                </Container>
            </Fade>
            </Wrapper>
       
    )
}

export default FirstModelGrid

const Wrapper = styled.div`
    background-color: #000;
    padding: 100px 33px;
   
`
const Container = styled.div`
    display: flex;
    margin: 0px 115px;
`
const IMGContainer = styled.div`

`
const TextContainer = styled.div`
    margin: 90px;
`