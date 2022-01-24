import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import './Header.css';
import VideoPlayer from "react-background-video-player";

const VideoTab = () => {
    const videoTab = "./videos/WM5XUG_parking.mp4-2000_EQUBJE.mp4"
    return (
        <Wrapper>
            <VideoPlayer
                className="video"
                src={videoTab}
                autoPlay={true}
                muted={true}
            />
        </Wrapper>
    )
}

export default VideoTab

const Wrapper = styled.div`
    h-64
    
`