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
                    <img src='./images/Model-slider.png' ait='' />
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
`
const Container = styled.div`

`
const IMGContainer = styled.div`
    padding-left: 70px;
    margin-top: 3em;
`