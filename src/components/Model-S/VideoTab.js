import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import './Header.css';

const VideoTab = () => {
    return (
        <Wrapper>
            <video autoplay muted loop id="myVideo">
                <source src="./videos/WM5XUG_parking.mp4-2000_EQUBJE.mp4" type="video/mp4" />
            </video>
        </Wrapper>
    )
}

export default VideoTab

const Wrapper = styled.div`
    
    
`