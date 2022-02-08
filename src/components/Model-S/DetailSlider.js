import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import './Header.css';

const DetailSlider = () => {
    return (
        <Wrapper>
            <Fade bottom>
            <Container>             
                <h1 className='detailTitle'>Electric Powertrain </h1>
                <p className='detailText'>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
            </Container>

            <Container>
                <IMGContainer>
                    <img id='model-slider' src='./images/Model-slider.png' ait='' />
                </IMGContainer>
            </Container>
            </Fade>
        </Wrapper>
    )
}

export default DetailSlider

const Wrapper = styled.div`
    background: #f5f5f5;
    padding:90px 40px;
    @media (max-width: 375px){
        flex-direction: column;
        margin-left: -170px;
        margin-right: 0px;
    }
`
const Container = styled.div`
    @media (max-width: 375px){
        margin-right: -185px;
    }
    @media (max-width: 425px){
        margin-left: -191px;
        margin-right: -30px;
    }

`
const IMGContainer = styled.div`
    padding-left: 70px;
    margin-top: 3em;
    @media (max-width: 375px){
        width: 337px;
        margin-left: 80px;
    }
`