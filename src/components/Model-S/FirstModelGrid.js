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
                    <TextContainer>
                        <h4 className="title">Stay Connected</h4>
                        <p className='text'>Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.</p>
                    </TextContainer>
                    <IMGContainer>
                        <img src='./images/bike.png' ait='' />
                    </IMGContainer>
                </Container>
               
            </Fade>
            </Wrapper>
       
    )
}

export default FirstModelGrid

const Wrapper = styled.div`
    background-color: #000;
    padding: 100px 33px;
    @media (max-width: 810px){
        flex-direction: column;
    }
    @media (max-width: 375px){
        flex-direction: column;
    }
   
`
const Container = styled.div`
    display: flex;
    margin: 0px 115px;
    @media (max-width: 810px){
        flex-direction: column;
    }
    @media (max-width: 375px){
        flex-direction: column;
    }
    @media (max-width: 425px){
        .display: content;
    }
`
const IMGContainer = styled.div`
@media (max-width: 375px){
    margin-left: -319px;
}
@media (max-width: 425px){
    margin-left: -215px;
}
`
const FooterContent = styled.div`
@media (max-width: 375px){
    margin-left: -120px;
    margin-top: 15px;
    margin-right: -100px;
}
`

const ModelName = styled.div`
margin: 24px 118px;
@media (max-width: 810px){
    margin-top: 0px;
}
@media (max-width: 375px){
    margin-left: -120px;
    margin-right: -100px;
    margin-top:32px;
    flex-direction: column;
}
`


const TextContainer = styled.div`
    margin: 90px;
    @media (max-width: 810px){
        margin-top: 30px;
    }
    @media (max-width: 375px){
        margin-left: -120px;
        margin-right: -100px;
        margin-top:32px;
        flex-direction: column;
    }
    @media (max-width: 425px){
        margin-left: -120px;
        margin-right: -91px;
    }
`