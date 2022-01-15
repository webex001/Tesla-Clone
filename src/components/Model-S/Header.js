import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import './Header.css';

const Header = ({title, description, leftBtnText, rightBtnText, backgroundImg}) => {
    return (
    
        <Wrap bgImg={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>Model S</h1>
                    <p className='model-sub'>Plaid</p>
                </ItemText>
            </Fade>
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

                    <OrderButton>ORDER NOW</OrderButton>
                </ButtonGroup>
                </Fade>
               
            </Buttons>
            
        </Wrap>
    )
}

export default Header

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

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

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

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
const OrderButton = styled.div`
    color: white;
    border: 3px solid white;
    border-radius: 24px;
    padding: 13px 60px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    &:hover {
        color: black;
        background: white;
      }
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;

`